export const WHATSAPP_NUMBER = '5541987322926'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`

export function buildWhatsAppUrl(message?: string): string {
  if (!message) return WHATSAPP_URL
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`
}

export function buildPlanWhatsAppUrl(planName: string): string {
  return buildWhatsAppUrl(`Quero entender mais sobre o Plano ${planName} da ACDOMZ Tech`)
}
