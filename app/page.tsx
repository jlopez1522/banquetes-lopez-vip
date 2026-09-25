import { CalendarHeart, Camera, MapPin, Sparkles, Utensils } from "lucide-react";
import HeroScene from "./HeroScene";

const instagramUrl = "https://www.instagram.com/banquetes_lopez_vip/";
const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=Av.%20Esperanza%20calle%2024%20%2382-05%20Bogota%20Colombia";

const heroImages = [
  "/recursos/hero-salon.png",
  "/recursos/hero-detalle.png",
  "/recursos/hero-montaje.png",
];

const detailImages = [
  {
    file: "/recursos/galeria-banquete.png",
    alt: "Pasabocas servidos para banquete",
  },
  {
    file: "/recursos/galeria-boda.png",
    alt: "Detalle de mesa de boda",
  },
  {
    file: "/recursos/galeria-decoracion.png",
    alt: "Decoracion vertical de evento con iluminacion",
  },
  {
    file: "/recursos/galeria-globos.png",
    alt: "Decoracion con globos dorados y negros",
  },
];

const services = [
  {
    icon: Sparkles,
    title: "Ambientacion",
    eyebrow: "Diseno de ambiente",
    image: "/recursos/galeria-globos.png",
    text: "Decoracion de salon, fondos fotograficos, globos, flores y detalles tematicos para que el espacio tenga una presencia especial desde la entrada.",
  },
  {
    icon: Utensils,
    title: "Mesa y banquete",
    eyebrow: "Detalles para compartir",
    image: "/recursos/galeria-banquete.png",
    text: "Montajes para invitados, estaciones de comida y presentaciones cuidadas para acompanar el ritmo de la celebracion.",
  },
  {
    icon: CalendarHeart,
    title: "Acompanamiento",
    eyebrow: "Celebraciones memorables",
    image: "/recursos/galeria-luces.png",
    text: "Conversacion directa para definir el tipo de evento, el tono visual, la ubicacion de los elementos y los detalles principales.",
  },
];

const gallery = [
  {
    file: "/recursos/galeria-salon.png",
    alt: "Salon decorado con luces y mesas para evento",
    className: "wide",
  },
  {
    file: "/recursos/galeria-globos.png",
    alt: "Decoracion con globos dorados y negros",
  },
  {
    file: "/recursos/galeria-boda.png",
    alt: "Mesa de boda con arreglo floral y luces rosadas",
  },
  {
    file: "/recursos/galeria-banquete.png",
    alt: "Pasabocas servidos para banquete",
  },
  {
    file: "/recursos/galeria-decoracion.png",
    alt: "Decoracion vertical de evento con iluminacion",
    className: "tall",
  },
  {
    file: "/recursos/galeria-luces.png",
    alt: "Salon iluminado con mesas y decoracion violeta",
  },
];

export default function Home() {
  return (
    <>
      <header className="site-header" aria-label="Encabezado principal">
        <a className="brand" href="#inicio" aria-label="Banquetes Lopez V.I.P.">
          <span className="brand-mark">BL</span>
          <span>
            <strong>Banquetes Lopez</strong>
            <small>V.I.P.</small>
          </span>
        </a>
        <nav aria-label="Navegacion principal">
          <a href="#nosotros">Nosotros</a>
          <a href="#servicios">Servicios</a>
          <a href="#galeria">Galeria</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <main id="inicio">
        <section className="hero">
          <div className="hero-media" aria-hidden="true">
            {heroImages.map((file) => (
              <img key={file} src={file} alt="" />
            ))}
          </div>
          <HeroScene />
          <div className="hero-content">
            <h1>Banquetes Lopez V.I.P.</h1>
            <p className="hero-copy">No realizamos eventos, cumplimos suenos.</p>
            <a className="button ghost" href="#contacto">
              Empezar
            </a>
          </div>
          <a className="scroll-cue" href="#nosotros" aria-label="Bajar a nosotros" />
        </section>

        <section className="image-strip" aria-label="Detalles de eventos">
          {detailImages.map(({ file, alt }) => (
            <img key={file} src={file} alt={alt} />
          ))}
        </section>

        <section className="intro" id="nosotros">
          <div className="intro-copy">
            <h2>Una pasion por los detalles</h2>
            <p>
              <strong>Banquetes Lopez V.I.P.</strong> acompana celebraciones familiares,
              bodas, cumpleanos y reuniones especiales con una puesta en escena cuidada:
              salon, decoracion, mesa, iluminacion y detalles pensados para que cada fecha
              se sienta propia.
            </p>
            <p>
              La experiencia se construye conversando contigo: el tipo de celebracion, el
              ambiente deseado y los detalles que hacen que el momento se sienta
              verdaderamente tuyo.
            </p>
          </div>
          <figure className="portrait-card">
            <img src="/recursos/galeria-boda.png" alt="Detalle de mesa decorada para boda" />
          </figure>
        </section>

        <section className="service-stories" id="servicios" aria-label="Servicios destacados">
          {services.map(({ icon: Icon, title, eyebrow, image, text }) => (
            <article className="service-story" key={title}>
              <figure>
                <img src={image} alt={title} />
              </figure>
              <div>
                <p className="overline">{eyebrow}</p>
                <h2>{title}</h2>
                <Icon size={28} strokeWidth={1.5} />
                <p>{text}</p>
                <a href="#contacto">Consultar disponibilidad</a>
              </div>
            </article>
          ))}
        </section>

        <section className="gallery-section" id="galeria">
          <div className="section-heading">
            <h2>Celebraciones que se recuerdan por sus detalles.</h2>
            <p>
              Una seleccion de ambientes, mesas y montajes para imaginar el tono de tu
              proxima fecha especial.
            </p>
          </div>
          <div className="gallery">
            {gallery.map(({ file, alt, className }) => (
              <figure key={file} className={className}>
                <img src={file} alt={alt} />
              </figure>
            ))}
          </div>
        </section>

        <section className="contact" id="contacto">
          <div className="contact-card">
            <p className="eyebrow">Hablemos de tu fecha</p>
            <h2>Coordina tu evento directamente con Banquetes Lopez V.I.P.</h2>
            <p>
              Escribe por Instagram para consultar disponibilidad, tipo de celebracion y
              detalles del montaje.
            </p>
            <div className="contact-actions">
              <a className="button primary" href={instagramUrl} target="_blank" rel="noreferrer">
                <Camera size={18} />
                @banquetes_lopez_vip
              </a>
              <a className="button ghost dark" href={mapUrl} target="_blank" rel="noreferrer">
                <MapPin size={18} />
                Ver mapa
              </a>
            </div>
          </div>
          <address>
            <strong>Direccion</strong>
            Av. Esperanza, calle 24 #82-05
            <br />
            Bogota, Colombia
          </address>
        </section>
      </main>

      <footer>
        <span>Banquetes Lopez V.I.P.</span>
        <span>Casa de banquetes y planificacion de eventos</span>
      </footer>
    </>
  );
}
