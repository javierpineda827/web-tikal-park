import { Badge, Container } from "react-bootstrap";

const LinkList = () => {
  const links = [
    { href: "#", text: "Tikal Arqueología y Arquitectura" },
    { href: "#", text: "Tikal Datos / Primeros Exploradores" },
    {
      href: "#",
      text: "Excavación de Pensilvania en Tikal / Proyecto Nacional Tikal",
    },
    { href: "#", text: "Los Antiguos Mayas de Tikal" },
    { href: "#", text: "Gobernantes Dinásticos de Tikal" },
    { href: "#", text: "Calendarios & El Sistema de Cuenta Larga" },
    { href: "#", text: "Glifo Emblema de Tikal" },
    { href: "#", text: "Acrópolis" },
    { href: "#", text: "Mundo Perdido" },
    { href: "#", text: "La Gran Plaza de Tikal" },
    { href: "#", text: "Complejos Piramidales Gemelos" },
    { href: "#", text: "Grupo H / G / F / Palacio de los Murciélagos" },
    { href: "#", text: "Templos de Tikal" },
    { href: "#", text: "Las Calzadas de Tikal" },
    { href: "#", text: "Juegos de Pelota" },
    { href: "#", text: "Los Museos de Tikal y El Centro de Visitantes" },
    {
      href: "https://famsi.org/",
      text: "FAMSI - Vasijas de Cerámica de Tikal y más Cerámica Maya (Link Externo)",
      external: true,
    },
  ];

  return (
    <Container className="d-flex flex-wrap">
      {links.map((link, index) => (
        <Badge key={index} pill className="m-1">
          <a
            href={link.href}
            target={link.external ? "_blank" : "_self"}
            rel={link.external ? "noopener noreferrer" : undefined}
            style={{ color: "inherit", textDecoration: "none" }} // Hereda el color del badge
          >
            {link.text}
          </a>
        </Badge>
      ))}
    </Container>
  );
};

export default LinkList;
