import {
  AudioLines,
  Building2,
  CalendarCheck,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  MessageCircleMore,
  PartyPopper,
  Phone,
  Sparkles,
  Utensils,
} from "lucide-react";
import Image from "next/image";
import HeroScene from "./HeroScene";
import SiteHeader from "./SiteHeader";

const instagramUrl = "https://www.instagram.com/banquetes_lopez_vip/";
const facebookUrl = "https://www.facebook.com/BanqueteslopezVip/";
const email = "eventosylogistica@casadebanqueteslopez.com";
const mapUrl =
  "https://www.google.com/maps/place/Banquetes+L%C3%B3pez/@4.6692559,-74.1229193,17z";
const mapEmbedUrl =
  "https://www.google.com/maps?q=4.6692559,-74.1229193&z=17&output=embed";
const videoUrl = "https://www.youtube.com/watch?v=xIRLcWvp45I";

const phones = [
  { label: "+57 310 295 3754", href: "tel:+573102953754" },
  { label: "+57 316 242 4641", href: "tel:+573162424641" },
];

const detailImages = [
  { file: "/recursos/galeria-banquete.png", alt: "Selección de pasabocas para una celebración" },
  { file: "/recursos/galeria-boda.png", alt: "Mesa principal decorada para una boda" },
  { file: "/recursos/galeria-decoracion.png", alt: "Montaje floral e iluminación para ceremonia" },
  { file: "/recursos/galeria-globos.png", alt: "Ambientación temática con globos" },
];

const services = [
  {
    icon: PartyPopper,
    title: "Eventos sociales",
    eyebrow: "Momentos para celebrar",
    image: "/recursos/galeria-boda.png",
    alt: "Mesa principal y decoración para una celebración social",
    text: "Planeamos bodas, fiestas de quince años, primeras comuniones, bautizos, grados y reuniones familiares con una propuesta adaptada a cada ocasión.",
  },
  {
    icon: Utensils,
    title: "Catering y gastronomía",
    eyebrow: "Sabores para compartir",
    image: "/recursos/galeria-banquete.png",
    alt: "Bandeja de pasabocas preparados para un banquete",
    text: "Ofrecemos alternativas de buffet, platos servidos, asados, pasabocas, postres, cócteles y menús para eventos sociales o empresariales.",
  },
  {
    icon: Sparkles,
    title: "Decoración y ambientación",
    eyebrow: "Diseño del espacio",
    image: "/recursos/galeria-globos.png",
    alt: "Montaje temático con globos, luces y elementos decorativos",
    text: "Diseñamos fondos, arreglos, globos, flores, iluminación y montajes de acuerdo con la temática y el carácter de tu celebración.",
  },
  {
    icon: AudioLines,
    title: "Producción técnica",
    eyebrow: "Sonido e imagen",
    image: "/recursos/galeria-luces.png",
    alt: "Salón preparado con iluminación y producción técnica",
    text: "Coordinamos soluciones de sonido, video, fotografía y apoyo técnico para acompañar los momentos principales del evento.",
  },
];

const gallery = [
  { file: "/recursos/galeria-salon.png", alt: "Salón con iluminación decorativa y mesas preparadas", className: "wide" },
  { file: "/recursos/galeria-globos.png", alt: "Decoración temática en tonos dorados y verdes" },
  { file: "/recursos/galeria-boda.png", alt: "Mesa de boda con flores y luces rosadas" },
  { file: "/recursos/galeria-banquete.png", alt: "Pasabocas presentados para los invitados" },
  { file: "/recursos/galeria-decoracion.png", alt: "Ceremonia exterior con flores rojas y blancas" },
  { file: "/recursos/galeria-luces.png", alt: "Salón iluminado para una celebración", className: "wide" },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Banquetes López V.I.P.",
  description: "Organización integral, catering, decoración y producción de eventos en Bogotá y sus alrededores.",
  telephone: phones.map(({ label }) => label),
  email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Carrera 103D #86-35, barrio Bolivia",
    addressLocality: "Bogotá",
    addressRegion: "Bogotá D.C.",
    addressCountry: "CO",
  },
  openingHours: "Mo-Su 08:00-18:00",
  hasMap: mapUrl,
  sameAs: [instagramUrl, facebookUrl, videoUrl],
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <SiteHeader />

      <main id="contenido">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <Image
            className="hero-image"
            src="/recursos/hero-salon.png"
            alt="Salón preparado con mesas e iluminación para una celebración"
            fill
            priority
            quality={82}
            sizes="100vw"
          />
          <HeroScene />
          <div className="hero-content">
            <p className="hero-kicker">Eventos en Bogotá y sus alrededores</p>
            <h1 id="hero-title">Banquetes López V.I.P.</h1>
            <p className="hero-copy">No realizamos eventos, cumplimos sueños.</p>
            <a className="button ghost" href="#contacto">
              <MessageCircle size={18} aria-hidden="true" />
              Cotizar mi evento
            </a>
          </div>
          <a className="scroll-cue" href="#nosotros" aria-label="Conocer Banquetes López V.I.P." />
        </section>

        <section className="image-strip" aria-label="Detalles de celebraciones">
          {detailImages.map(({ file, alt }) => (
            <figure key={file}>
              <Image src={file} alt={alt} fill sizes="(max-width: 600px) 50vw, 240px" />
            </figure>
          ))}
        </section>

        <section className="intro" id="nosotros">
          <div className="intro-copy">
            <p className="eyebrow">Más de 10 años creando experiencias</p>
            <h2>Tu evento, con cada detalle coordinado</h2>
            <p>
              <strong>Banquetes López V.I.P.</strong> es una empresa colombiana dedicada a
              la organización y logística integral de celebraciones sociales y empresariales
              en Bogotá y sus alrededores.
            </p>
            <p>
              Reunimos gastronomía, decoración, producción y acompañamiento para que los
              anfitriones puedan vivir la fiesta como un invitado más.
            </p>
          </div>
          <figure className="portrait-media">
            <Image
              src="/recursos/galeria-boda.png"
              alt="Detalle de una mesa principal decorada para boda"
              fill
              sizes="(max-width: 860px) 100vw, 300px"
            />
          </figure>
        </section>

        <section className="process" aria-labelledby="process-title">
          <div className="section-heading left">
            <p className="eyebrow">Así comienza</p>
            <h2 id="process-title">De tu idea a una celebración con intención</h2>
          </div>
          <ol className="process-list">
            <li>
              <MessageCircleMore aria-hidden="true" />
              <span>01</span>
              <h3>Cuéntanos tu idea</h3>
              <p>Comparte la fecha, el tipo de evento, el lugar y el número aproximado de invitados.</p>
            </li>
            <li>
              <CalendarCheck aria-hidden="true" />
              <span>02</span>
              <h3>Definimos los detalles</h3>
              <p>Seleccionamos contigo los servicios, el ambiente, el menú y las prioridades.</p>
            </li>
            <li>
              <Sparkles aria-hidden="true" />
              <span>03</span>
              <h3>Coordinamos la celebración</h3>
              <p>Integramos logística, montaje y atención para que puedas disfrutar tu evento.</p>
            </li>
          </ol>
        </section>

        <section className="service-stories" id="servicios" aria-label="Servicios principales">
          {services.map(({ icon: Icon, title, eyebrow, image, alt, text }) => (
            <article className="service-story" key={title}>
              <figure>
                <Image src={image} alt={alt} fill sizes="(max-width: 860px) 100vw, 56vw" />
              </figure>
              <div>
                <p className="overline">{eyebrow}</p>
                <h2>{title}</h2>
                <Icon size={28} strokeWidth={1.5} aria-hidden="true" />
                <p>{text}</p>
                <a href="#contacto">Solicitar cotización</a>
              </div>
            </article>
          ))}
        </section>

        <section className="video-section" aria-labelledby="video-title">
          <div className="video-copy">
            <p className="eyebrow">Conoce nuestra historia</p>
            <h2 id="video-title">Una mirada a Banquetes López V.I.P.</h2>
            <p>Descubre parte de la experiencia, el montaje y el trabajo que acompaña cada celebración.</p>
            <a href={videoUrl} target="_blank" rel="noopener noreferrer">Ver directamente en YouTube</a>
          </div>
          <div className="video-frame">
            <iframe
              src="https://www.youtube-nocookie.com/embed/xIRLcWvp45I"
              title="CASA DE BANQUETES V.I.P. LOPEZ"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </section>

        <section className="gallery-section" id="galeria">
          <div className="section-heading">
            <p className="eyebrow">Portafolio</p>
            <h2>Celebraciones que se recuerdan por sus detalles</h2>
            <p>Ambientes, mesas y montajes para imaginar el tono de tu próxima fecha especial.</p>
          </div>
          <div className="gallery">
            {gallery.map(({ file, alt, className }) => (
              <figure key={file} className={className}>
                <Image src={file} alt={alt} fill sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw" />
              </figure>
            ))}
          </div>
        </section>

        <section className="faq" id="preguntas" aria-labelledby="faq-title">
          <div className="section-heading left">
            <p className="eyebrow">Antes de comenzar</p>
            <h2 id="faq-title">Información útil para tu consulta</h2>
          </div>
          <div className="faq-list">
            <details>
              <summary>¿Qué información debo enviar?</summary>
              <p>Fecha tentativa, tipo de celebración, ubicación, número aproximado de invitados y servicios que te interesan.</p>
            </details>
            <details>
              <summary>¿Qué tipo de eventos realizan?</summary>
              <p>Bodas, quince años, primeras comuniones, bautizos, grados, reuniones familiares y eventos empresariales.</p>
            </details>
            <details>
              <summary>¿En qué zonas prestan servicio?</summary>
              <p>Atendemos eventos en Bogotá y sus alrededores. Confirma la cobertura de tu ubicación al solicitar la cotización.</p>
            </details>
            <details>
              <summary>¿Cuál es el horario de atención?</summary>
              <p>Todos los días de 8:00 a. m. a 6:00 p. m. Se recomienda concertar una cita antes de visitar la oficina.</p>
            </details>
          </div>
        </section>

        <section className="location" id="ubicacion" aria-labelledby="location-title">
          <div className="location-copy">
            <p className="eyebrow">Visítanos</p>
            <h2 id="location-title">Ubicación y oficina de atención</h2>
            <strong className="location-label">Oficina en Engativá</strong>
            <address>
              Carrera 103D #86-35, barrio Bolivia<br />
              Localidad de Engativá, Bogotá D.C.
            </address>
            <p>Atención todos los días de 8:00 a. m. a 6:00 p. m., con cita previa.</p>
            <a className="button location-button" href={mapUrl} target="_blank" rel="noopener noreferrer">
              <MapPin size={18} aria-hidden="true" />
              Ver ubicación en Maps
            </a>
          </div>
          <div className="map-frame">
            <iframe
              src={mapEmbedUrl}
              title="Ubicación de Banquetes López en Google Maps"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </section>

        <section className="contact" id="contacto" aria-labelledby="contact-title">
          <Image className="contact-background" src="/recursos/galeria-salon.png" alt="" fill sizes="100vw" />
          <div className="contact-content">
            <div>
              <p className="eyebrow">Hablemos de tu fecha</p>
              <h2 id="contact-title">Comienza a planear tu celebración</h2>
              <p>Envíanos la fecha, el tipo de evento, la ubicación y el número aproximado de invitados para orientar tu cotización.</p>
              <div className="contact-actions">
                <a className="button primary" href={phones[0].href}>
                  <Phone size={18} aria-hidden="true" />
                  Llamar ahora
                </a>
                <a className="button ghost" href={`mailto:${email}`}>
                  <Mail size={18} aria-hidden="true" />
                  Escribir por correo
                </a>
              </div>
            </div>
            <div className="contact-details">
              <div>
                <Phone aria-hidden="true" />
                <span>
                  <strong>Líneas de contacto</strong>
                  {phones.map(({ label, href }) => <a href={href} key={href}>{label}</a>)}
                </span>
              </div>
              <div>
                <Mail aria-hidden="true" />
                <a href={`mailto:${email}`}>{email}</a>
              </div>
              <div>
                <Clock3 aria-hidden="true" />
                <span>Todos los días, 8:00 a. m. - 6:00 p. m.</span>
              </div>
              <div>
                <Building2 aria-hidden="true" />
                <span>Bogotá y alrededores</span>
              </div>
              <div>
                <MessageCircle aria-hidden="true" />
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer">@banquetes_lopez_vip</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <strong>Banquetes López V.I.P.</strong>
          <span>Organización y logística integral de eventos</span>
        </div>
        <a href={instagramUrl} target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href={facebookUrl} target="_blank" rel="noopener noreferrer">Facebook</a>
        <span>Bogotá, Colombia</span>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
