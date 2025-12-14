
import { Factory, Wrench, Clock } from "lucide-react";
import { ServiceItem, ClientLogo } from "./types";

export const WHATSAPP_NUMBER = "5562994360660";
export const WHATSAPP_DISPLAY = "(62) 99436-0660";
export const COMPANY_ADDRESS = "Rua RM14, Qd 06, Lt-34, Residencial Guarema - Goiânia - Goiás - CEP: 74573-424";
export const WHATSAPP_LINK = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=Al%C3%B4%2C+quero+fazer+um+or%C3%A7amento+r%C3%A1pido...&type=phone_number&app_absent=0`;

// Base URLs
const PORTFOLIO_BASE = "https://raw.githubusercontent.com/topportas/Site-Top-Portas/main";

// Logo URL
export const LOGO_URL = "https://raw.githubusercontent.com/topportas/Site-Top-Portas/main/LOGO%20TOP%20PORTAS%20DE%20A%C3%87OFINAL.png";

export const SERVICES: ServiceItem[] = [
  {
    title: "FABRICAÇÃO",
    description: "Nós fabricamos portas sob medida! Nossa equipe vai até o local, tira as medidas, analisa detalhes para a instalação completa, cria o projeto, fabrica sob medida e instalamos no local, com garantia.",
    Icon: Factory,
    cta: "Solicitar um orçamento agora!",
    link: "https://api.whatsapp.com/send/?phone=5562994360660&text=Quero+um+projeto+para+fabrica%C3%A7%C3%A3o+da+porta+de+a%C3%A7o...&type=phone_number&app_absent=0",
    // Capa: Fábrica
    backgroundImage: `${PORTFOLIO_BASE}/F%C3%A1brica%20de%20Portas%20de%20A%C3%A7o%20em%20Goi%C3%A2nia.png`,
    galleryImages: [
      `${PORTFOLIO_BASE}/F%C3%A1brica%20de%20Portas%20de%20A%C3%A7o%20em%20Goi%C3%A2nia.png`,
      `${PORTFOLIO_BASE}/Porta%20de%20A%C3%A7o%20Perfil%20Fechado.png`,
      // Moved from Plantão (1/6)
      `${PORTFOLIO_BASE}/Portas%20de%20Enrolar%20em%20Goi%C3%A2nia.png`,
    ]
  },
  {
    title: "INSTALAÇÃO",
    description: "Para quem deseja apenas a instalação, nossa equipe vai até o local, para garantir que a porta seja instalada seguindo 100% os padrões de qualidade, evitando problemas futuros.",
    Icon: Wrench,
    cta: "Solicitar um orçamento agora!",
    link: "https://api.whatsapp.com/send/?phone=5562994360660&text=Quanto+%C3%A9+para+instalar+uma+porta+de+a%C3%A7o+aqui+para+mim%3F&type=phone_number&app_absent=0",
    // Capa: Motor (Updated)
    backgroundImage: `${PORTFOLIO_BASE}/Motor%20para%20Porta%20de%20Enrolar.png`,
    galleryImages: [
      `${PORTFOLIO_BASE}/Porta%20de%20A%C3%A7o%20Autom%C3%A1tica.png`,
      `${PORTFOLIO_BASE}/Porta%20de%20A%C3%A7o%20de%20Enrolar%20Autom%C3%A1tica.png`,
      `${PORTFOLIO_BASE}/Porta%20de%20A%C3%A7o%20de%20Enrolar%20Manual.png`,
      `${PORTFOLIO_BASE}/Porta%20de%20A%C3%A7o%20Eletr%C3%B4nica.png`,
      `${PORTFOLIO_BASE}/Motor%20para%20Porta%20de%20Enrolar.png`,
      `${PORTFOLIO_BASE}/Acess%C3%B3rios%20para%20Porta%20de%20Enrolar.png`,
      `${PORTFOLIO_BASE}/Portas%20de%20A%C3%A7o%20em%20Goi%C3%A2nia.png`,
    ]
  },
  {
    title: "PLANTÃO 24H/7D",
    description: "É urgente? Não se desespere, temos um time de plantão 24 horas para atender Goiânia e região em qualquer dia da semana, é só ligar que iremos até você!",
    Icon: Clock,
    cta: "Solicitar um orçamento agora!",
    link: "https://api.whatsapp.com/send/?phone=5562994360660&text=Solicito+a+equipe+de+plant%C3%A3o+que+concerte+minha+porta+de+a%C3%A7o...&type=phone_number&app_absent=0",
    // Capa: Porta Transvison (Specific URL requested)
    backgroundImage: `${PORTFOLIO_BASE}/Porta%20de%20A%C3%A7o%20Transvison.png`,
    galleryImages: [
      // Remaining original images
      `${PORTFOLIO_BASE}/Portas%20de%20Enrolar%20em%20Goi%C3%A2nia%202.png`,
      `${PORTFOLIO_BASE}/Portas%20de%20Enrolar%20em%20Goi%C3%A2nia%203.png`,
      `${PORTFOLIO_BASE}/Portas%20de%20Enrolar%20em%20Goi%C3%A2nia%204.png`,
      // Added specifics from other categories as requested, updated to match background
      `${PORTFOLIO_BASE}/Porta%20de%20A%C3%A7o%20Transvison.png`,
      `${PORTFOLIO_BASE}/Porta%20de%20A%C3%A7o%20de%20Enrolar%20Autom%C3%A1tica.png`,
    ]
  }
];

export const CLIENTS: ClientLogo[] = [
  { name: "Buriti Shopping", url: `${PORTFOLIO_BASE}/BURITISHOPING.png` },
  { name: "Casas Bahia", url: `${PORTFOLIO_BASE}/CASAS%20BAHIA.png` },
  { name: "C&A", url: `${PORTFOLIO_BASE}/CEA.png` },
  { name: "Centauro", url: `${PORTFOLIO_BASE}/CENTAURO.png` },
  { name: "Goiânia Shopping", url: `${PORTFOLIO_BASE}/GOIANIASHOPING.png` },
  { name: "McDonalds", url: `${PORTFOLIO_BASE}/MCDONALDS.png` },
  { name: "Monteral", url: `${PORTFOLIO_BASE}/MONTERAL.png` },
  { name: "Natura", url: `${PORTFOLIO_BASE}/NATURA.png` },
  { name: "Nike", url: `${PORTFOLIO_BASE}/NIKE.png` },
  { name: "O Boticário", url: `${PORTFOLIO_BASE}/O%20BOTICARIO.png` },
  { name: "Renner", url: `${PORTFOLIO_BASE}/RENNER.png` },
  { name: "Samsung", url: `${PORTFOLIO_BASE}/SAMSUNG.png` },
  { name: "Taco", url: `${PORTFOLIO_BASE}/TACO.png` },
];
