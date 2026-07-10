import { ServiceDetailClient } from "./ServiceDetailClient"

export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
  ]
}

export default async function ServicePage({ params }: { params: Promise<{ id: string }> }) {
  // In Next.js 15, params is a Promise
  const { id } = await params
  
  return <ServiceDetailClient id={id} />
}
