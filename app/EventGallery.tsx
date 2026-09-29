"use client";

import Image from "next/image";
import { useState } from "react";

const eventCategories = [
  {
    id: "bodas",
    label: "Bodas",
    description: "Ceremonias, recepciones y montajes pensados para contar la historia de cada pareja.",
    images: [
      { src: "/galeria/bodas-1.jpg", alt: "Camino exterior decorado para una ceremonia de boda" },
      { src: "/galeria/bodas-2.jpg", alt: "Salón preparado para una recepción de boda" },
      { src: "/galeria/bodas-3.jpg", alt: "Altar floral para una boda al aire libre" },
    ],
  },
  {
    id: "quince",
    label: "15 años",
    description: "Escenarios, iluminación y detalles personalizados para una celebración inolvidable.",
    images: [
      { src: "/galeria/quince-1.jpg", alt: "Pista iluminada y letras para una fiesta de quince años" },
      { src: "/galeria/quince-2.jpg", alt: "Decoración floral y globos para quince años" },
      { src: "/galeria/quince-3.jpg", alt: "Montaje de quince años con letras luminosas" },
    ],
  },
  {
    id: "bautizos",
    label: "Bautizos",
    description: "Ambientes delicados para compartir en familia la bienvenida y la bendición de una nueva vida.",
    images: [
      { src: "/galeria/bautizos-1.jpg", alt: "Mesa temática de bautizo en tonos blanco, verde y dorado" },
      { src: "/galeria/bautizos-2.jpg", alt: "Decoración infantil en tonos rosa y marfil" },
      { src: "/galeria/bautizos-3.jpg", alt: "Montaje temático familiar con globos y mesa de postres" },
    ],
  },
  {
    id: "comunion",
    label: "Primera comunión",
    description: "Montajes sobrios y luminosos para acompañar una fecha espiritual y familiar.",
    images: [
      { src: "/galeria/comunion-1.jpg", alt: "Entrada ceremonial decorada con flores y alfombra roja" },
      { src: "/galeria/comunion-2.jpg", alt: "Mesa vestida con menaje blanco y detalles dorados" },
      { src: "/galeria/comunion-3.jpg", alt: "Centro de mesa natural con velas para celebración familiar" },
    ],
  },
  {
    id: "grados",
    label: "Grados",
    description: "Producción, ambientación y espacios para celebrar metas alcanzadas en grande.",
    images: [
      { src: "/galeria/grados-1.jpg", alt: "Entrada iluminada para celebración de grados" },
      { src: "/galeria/grados-2.jpg", alt: "Alfombra roja y letras luminosas para una fiesta de graduación" },
      { src: "/galeria/grados-3.jpg", alt: "Escenario con globos para celebración de graduación" },
    ],
  },
  {
    id: "empresariales",
    label: "Empresariales",
    description: "Montajes funcionales para encuentros corporativos, integraciones y celebraciones de equipo.",
    images: [
      { src: "/galeria/empresariales-1.jpg", alt: "Salón empresarial con mesas cocteleras iluminadas" },
      { src: "/galeria/empresariales-2.jpg", alt: "Estación de bebidas atendida durante un evento" },
      { src: "/galeria/empresariales-3.jpg", alt: "Mobiliario luminoso para encuentro empresarial" },
    ],
  },
] as const;

export default function EventGallery() {
  const [activeId, setActiveId] = useState<(typeof eventCategories)[number]["id"]>("bodas");
  const activeCategory = eventCategories.find(({ id }) => id === activeId) ?? eventCategories[0];

  const moveTab = (currentId: (typeof eventCategories)[number]["id"], direction: -1 | 1) => {
    const currentIndex = eventCategories.findIndex(({ id }) => id === currentId);
    const nextIndex = (currentIndex + direction + eventCategories.length) % eventCategories.length;
    const nextId = eventCategories[nextIndex].id;
    setActiveId(nextId);
    requestAnimationFrame(() => document.getElementById(`tab-${nextId}`)?.focus());
  };

  return (
    <section className="gallery-section" id="galeria" aria-labelledby="gallery-title">
      <div className="section-heading brand-heading">
        <p className="eyebrow">Nuestro portafolio</p>
        <h2 id="gallery-title">Cada sueño tiene su propia celebración</h2>
        <p>Explora algunos de nuestros montajes organizados por tipo de evento.</p>
      </div>

      <div className="gallery-tabs" role="tablist" aria-label="Tipos de eventos">
        {eventCategories.map(({ id, label }) => (
          <button
            key={id}
            id={`tab-${id}`}
            type="button"
            role="tab"
            aria-controls={`panel-${id}`}
            aria-selected={activeId === id}
            tabIndex={activeId === id ? 0 : -1}
            onClick={() => setActiveId(id)}
            onKeyDown={(event) => {
              if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
              event.preventDefault();
              moveTab(id, event.key === "ArrowRight" ? 1 : -1);
            }}
          >
            {label}
          </button>
        ))}
      </div>

      <div
        className="gallery-panel"
        id={`panel-${activeCategory.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeCategory.id}`}
      >
        <div className="gallery-intro">
          <span>Eventos López VIP</span>
          <h3>{activeCategory.label}</h3>
          <p>{activeCategory.description}</p>
          <a href="#contacto">Cotizar este tipo de evento</a>
        </div>
        <div className="event-gallery">
          {activeCategory.images.map(({ src, alt }, index) => (
            <figure className={index === 0 ? "gallery-featured" : undefined} key={src}>
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 720px) 100vw, (max-width: 1080px) 50vw, 36vw"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
