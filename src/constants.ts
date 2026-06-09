/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const WHATSAPP_CTA = "https://wa.me/5491140294276?text=Hola%20Flujo%20Negro,%20quiero%20hablar%20de%20mi%20empresa";

export interface TeamMember {
  name: string;
  role: string;
  initials: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  { name: "Lourdes Espinoza", role: "Directora de Consultoría", initials: "LE" },
  { name: "Tomás Costantini Orrego", role: "Líder de Proyectos", initials: "TC" },
  { name: "Ignacio Manuel Arbesú", role: "Consultor de Infraestructura Digital", initials: "IA" },
  { name: "Gian Franco Bogni", role: "Analista de Procesos", initials: "GB" },
  { name: "Enzo Carbonero", role: "Especialista en Industria 4.0", initials: "EC" },
  { name: "Georgia Avril Huerta Ramírez", role: "Consultora de Transformación Digital", initials: "GH" },
  { name: "Bruno Legón", role: "Consultor en Metodologías Ágiles", initials: "BL" },
];

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  benefits: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: "diagnostico",
    title: "Diagnóstico Digital",
    description: "Mapeamos el estado tecnológico real de tu empresa: qué herramientas usás, cómo están integradas (o en silos), dónde están los cuellos de botella y los riesgos. Sin vender tecnología antes de entender el problema.",
    benefits: ["Mapeo de integraciones", "Identificación de silos de datos", "Análisis de riesgos operativos"]
  },
  {
    id: "madurez",
    title: "Análisis de Madurez 4.0",
    description: "Evaluamos tu empresa contra los pilares de la Industria 4.0. Identificamos qué ya tenés, qué falta y dónde están las oportunidades reales de crecimiento — sin buzzwords vacíos.",
    benefits: ["Evaluación de pilares 4.0", "Oportunidades de automatización", "Mitigación de buzzwords inútiles"]
  },
  {
    id: "hoja-ruta",
    title: "Hoja de Ruta de Transformación",
    description: "Diseñamos un plan concreto de iniciativas digitales priorizadas: qué cambiar, en qué orden y con qué metodología (Agile, Cynefin). Algo que tu equipo pueda ejecutar de verdad.",
    benefits: ["Cronograma de implementación", "Enfoque metodológico híbrido", "Hitos realistas y medibles"]
  }
];
