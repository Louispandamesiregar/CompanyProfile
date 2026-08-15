import { ServiceDetailClient } from "./ServiceDetailClient"

export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
  ]
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  
  let title = "Layanan Kami"
  if (id === '1') title = "Pengiriman Barang"
  else if (id === '2') title = "Pengadaan Alat Tulis Kantor"
  else if (id === '3') title = "Pengadaan Alat Kesehatan"
  else if (id === '4') title = "Perlengkapan Printer"
  
  return {
    title,
    description: `Layanan ${title} profesional oleh PT Nawasena Jaya Group. Solusi terpercaya untuk instansi, kantor, klinik, dan proyek Anda.`
  }
}

export default async function ServicePage({ params }: { params: Promise<{ id: string }> }) {
  // In Next.js 15, params is a Promise
  const { id } = await params
  
  return <ServiceDetailClient id={id} />
}
