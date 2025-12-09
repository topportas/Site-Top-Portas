import { Factory, Wrench, Clock } from "lucide-react";
import { ServiceItem, ClientLogo } from "./types";

export const WHATSAPP_NUMBER = "5562994360660";
export const WHATSAPP_DISPLAY = "(62) 99436-0660";
export const COMPANY_ADDRESS = "Rua RM14, Qd 06, Lt-34, Residencial Guarema - Goiânia - Goiás - CEP: 74573-424";
export const WHATSAPP_LINK = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=Al%C3%B4%2C+quero+fazer+um+or%C3%A7amento+r%C3%A1pido...&type=phone_number&app_absent=0`;

export const SERVICES: ServiceItem[] = [
  {
    title: "FABRICAÇÃO",
    description: "Nós fabricamos portas sob medida! Nossa equipe vai até o local, tira as medidas, analisa detalhes para a instalação completa, cria o projeto, fabrica sob medida e instalamos no local, com garantia.",
    Icon: Factory,
    cta: "Solicitar um orçamento agora!",
    link: "https://api.whatsapp.com/send/?phone=5562994360660&text=Quero+um+projeto+para+fabrica%C3%A7%C3%A3o+da+porta+de+a%C3%A7o...&type=phone_number&app_absent=0"
  },
  {
    title: "INSTALAÇÃO",
    description: "Para quem deseja apenas a instalação, nossa equipe vai até o local, para garantir que a porta seja instalada seguindo 100% os padrões de qualidade, evitando problemas futuros.",
    Icon: Wrench,
    cta: "Solicitar um orçamento agora!",
    link: "https://api.whatsapp.com/send/?phone=5562994360660&text=Quanto+%C3%A9+para+instalar+uma+porta+de+a%C3%A7o+aqui+para+mim%3F&type=phone_number&app_absent=0"
  },
  {
    title: "PLANTÃO 24H/7D",
    description: "É urgente? Não se desespere, temos um time de plantão 24 horas para atender Goiânia e região em qualquer dia da semana, é só ligar que iremos até você!",
    Icon: Clock,
    cta: "Solicitar um orçamento agora!",
    link: "https://api.whatsapp.com/send/?phone=5562994360660&text=Solicito+a+equipe+de+plant%C3%A3o+que+concerte+minha+porta+de+a%C3%A7o...&type=phone_number&app_absent=0"
  }
];

// --- CUSTOM SVG DATA URIS FOR STABILITY ---

// TACO: Bold Sans Serif Text
const TACO_LOGO = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgNjAiPgogIDx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjkwMCIgZm9udC1zaXplPSI4MCIgZmlsbD0iYmxhY2siIGxldHRlci1zcGFjaW5nPSItMiI+VEFDTzwvdGV4dD4KPC9zdmc+";

// GOIANIA SHOPPING: Stylized Text + Abstract Flower Icon
const GOIANIA_SHOPPING_LOGO = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgODAiPgogIDxwYXRoIGQ9Ik0zMCA1MCBRNDAgMjAgNTAgNTAgUTYwIDgwIDcwIDUwIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjMiIGZpbGw9Im5vbmUiLz4KICA8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSI1IiBmaWxsPSJibGFjayIvPgogIDxjaXJjbGUgY3g9IjUwIiBjeT0iMjAiIHI9IjUiIGZpbGw9ImJsYWNrIi8+CiAgPGNpcmNsZSBjeD0iNzAiIGN5PSIzMCIgcj0iNSIgZmlsbD0iYmxhY2siLz4KICA8dGV4dCB4PSI5MCIgeT0iNTUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIzMCIgZm9udC13ZWlnaHQ9IjMwMCIgZmlsbD0iYmxhY2siPkdvacOjbmlhPC90ZXh0PgogIDx0ZXh0IHg9IjkwIiB5PSI3NSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCIgbGV0dGVyLXNwYWNpbmc9IjIiIGZpbGw9ImJsYWNrIiB0ZXh0LXRyYW5zZm9ybT0idXBwZXJjYXNlIj5TaG9wcGluZzwvdGV4dD4KPC9zdmc+";

// BURITI SHOPPING: Stylized Fan/Palm Icon + Text
const BURITI_SHOPPING_LOGO = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgODAiPgogIDxwYXRoIGQ9Ik0yMCA2MCBMMjAgNDAgUTQ1IDEwIDcwIDQwIEw3MCA2MCBaIiBmaWxsPSJibGFjayIvPgogIDx0ZXh0IHg9Ijg1IiB5PSI0NSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjMyIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iYmxhY2siPkJ1cml0aTwvdGV4dD4KICA8dGV4dCB4PSI4NSIgeT0iNzAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyMCIgZm9udC13ZWlnaHQ9IjMwMCIgZmlsbD0iYmxhY2siPlNob3BwaW5nPC90ZXh0Pgo8L3N2Zz4=";

export const CLIENTS: ClientLogo[] = [
  { name: "Nike", url: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" },
  { name: "Casas Bahia", url: "https://upload.wikimedia.org/wikipedia/commons/2/22/Casas_Bahia_logo.svg" },
  { name: "Natura", url: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Natura_logo.svg" },
  { name: "McDonalds", url: "https://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svg" },
  { name: "Renner", url: "https://upload.wikimedia.org/wikipedia/commons/0/07/Lojas_Renner_logo.svg" },
  { name: "C&A", url: "https://upload.wikimedia.org/wikipedia/commons/2/2e/C%26A_Logo_2017.svg" },
  { name: "Goiânia Shopping", url: GOIANIA_SHOPPING_LOGO },
  { name: "Samsung", url: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" },
  { name: "Taco", url: TACO_LOGO },
  { name: "O Boticário", url: "https://upload.wikimedia.org/wikipedia/commons/5/56/O_Botic%C3%A1rio_logo.svg" },
  { name: "Centauro", url: "https://upload.wikimedia.org/wikipedia/commons/7/77/Centauro_logo.svg" },
  { name: "Buriti Shopping", url: BURITI_SHOPPING_LOGO },
];