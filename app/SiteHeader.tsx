"use client";

import { CalendarCheck, Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header${scrolled || menuOpen ? " is-solid" : ""}`}>
      <a className="brand" href="#inicio" aria-label="Eventos López VIP" onClick={closeMenu}>
        <Image
          className="brand-logo"
          src="/marca/logo-integrado.png"
          alt=""
          width={180}
          height={120}
          priority
        />
        <span className="brand-name">Eventos López VIP</span>
      </a>

      <button
        className="menu-button"
        type="button"
        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        onClick={() => setMenuOpen((current) => !current)}
      >
        {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      <nav id="main-navigation" className={menuOpen ? "is-open" : ""} aria-label="Navegación principal">
        <a href="#nosotros" onClick={closeMenu}>Nosotros</a>
        <a href="#servicios" onClick={closeMenu}>Servicios</a>
        <a href="#alquileres" onClick={closeMenu}>Alquileres</a>
        <a href="#galeria" onClick={closeMenu}>Galería</a>
        <a href="#ubicacion" onClick={closeMenu}>Ubicación</a>
        <a
          className="nav-contact"
          href="#contacto"
          onClick={closeMenu}
        >
          <CalendarCheck size={16} aria-hidden="true" />
          Cotizar evento
        </a>
      </nav>
    </header>
  );
}
