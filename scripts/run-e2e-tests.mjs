import { spawn, spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const currentDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectDirectory = path.join(currentDirectory, "..");
const baseUrl = "http://127.0.0.1:3100";
const nextCli = path.join(projectDirectory, "node_modules", "next", "dist", "bin", "next");
const playwrightCli = path.join(projectDirectory, "node_modules", "playwright", "cli.js");
const isWindows = process.platform === "win32";

const server = spawn(
  process.execPath,
  [nextCli, "dev", "--hostname", "127.0.0.1", "--port", "3100"],
  {
    cwd: projectDirectory,
    detached: !isWindows,
    env: process.env,
    stdio: "inherit",
    windowsHide: true,
  },
);

function stopServer() {
  if (!server.pid) return;

  if (isWindows) {
    spawnSync("taskkill", ["/PID", String(server.pid), "/T", "/F"], {
      stdio: "ignore",
      windowsHide: true,
    });
    return;
  }

  try {
    process.kill(-server.pid, "SIGTERM");
  } catch {
    // The server may already have stopped after a startup failure.
  }
}

async function waitForServer() {
  const deadline = Date.now() + 60_000;

  while (Date.now() < deadline) {
    if (server.exitCode !== null) {
      throw new Error(`El servidor de pruebas terminó con código ${server.exitCode}.`);
    }

    try {
      const response = await fetch(baseUrl);
      if (response.ok) return;
    } catch {
      // Next.js todavía está iniciando.
    }

    await new Promise((resolve) => setTimeout(resolve, 250));
  }

  throw new Error("El servidor de pruebas no respondió antes de 60 segundos.");
}

async function run() {
  await waitForServer();

  const tests = spawn(process.execPath, [playwrightCli, "test"], {
    cwd: projectDirectory,
    env: process.env,
    stdio: "inherit",
    windowsHide: true,
  });

  return new Promise((resolve, reject) => {
    tests.once("error", reject);
    tests.once("exit", (code) => resolve(code ?? 1));
  });
}

process.once("SIGINT", () => {
  stopServer();
  process.exit(130);
});

run()
  .then((code) => {
    stopServer();
    process.exit(code);
  })
  .catch((error) => {
    console.error(error);
    stopServer();
    process.exit(1);
  });
