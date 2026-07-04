Product Requirements Document (PRD)



Project Name: Casual \& Modern Company Profile Website



Tech Stack: Next.js (App Router), Tailwind CSS, Shadcn UI, Lucide React, next-themes



Architecture: Static Site (No Backend/Database)



1\. Executive Summary \& Visi



Membangun sebuah website company profile yang murni informatif dengan gaya kasual dan modern. Website ini bertujuan untuk menampilkan informasi perusahaan, layanan, dan grup perusahaan terafiliasi (sister companies) kepada pengunjung umum. Website harus responsif, ringan, sangat SEO-friendly, dan mendukung fitur Dark Mode / Light Mode.



2\. Pengguna \& Keamanan (User \& Security)



Target Audiens: Pengunjung publik/umum (calon klien, partner).



Sistem Auth: TIDAK ADA. Website sepenuhnya statis (hardcoded).



Manajemen Konten: Tidak menggunakan CMS. Semua data teks dan gambar di-hardcode ke dalam file konfigurasi lokal (misal: data/content.ts) agar mudah diubah oleh developer / pemilik web dari kode secara langsung.



3\. Fitur Utama \& Struktur Halaman (Sitemap)



Karena ini company profile kasual, disarankan menggunakan skema Single Page Application (One-Page Scroll) atau maksimal Multi-page sederhana. Berikut adalah bagian-bagian (sections) wajibnya:



A. Navigation \& Footer



Navbar (Sticky): Logo perusahaan (kiri), tautan navigasi (Tengah: About, Services, Group, Contact), dan Toggle Dark/Light Mode (kanan).



Footer: Hak cipta, tautan media sosial, dan alamat singkat.



B. Halaman / Sections



Hero Section (Home): \* Headline yang menyapa pengunjung secara kasual.



Sub-headline tentang nilai jual utama perusahaan.



Tombol Call-to-Action (CTA): "Pelajari Lebih Lanjut" atau "Hubungi Kami".



About Us Section:



Cerita singkat tentang perusahaan, visi, dan misi yang ditulis dengan gaya bahasa santai namun profesional.



Services Section:



Daftar layanan yang disajikan menggunakan Grid of Cards. Menggunakan ikon dari Lucide React untuk tiap layanan.



Sister Companies Section (Perusahaan Grup):



Menampilkan perusahaan terafiliasi menggunakan komponen Cards.



Fitur Khusus (Dialog/Modal): Card hanya menampilkan nama dan ringkasan singkat. Terdapat tombol "Detail". Jika diklik, akan memicu Shadcn UI Dialog yang menampilkan informasi lengkap perusahaan tersebut dan tautan ke website aslinya.



Contact Section:



Informasi kontak statis.



Direct Contact Buttons: \* Tombol "Chat via WhatsApp" (menggunakan skema tautan https://wa.me/nomorhp).



Tombol "Email Kami" (menggunakan skema tautan mailto:email@domain.com).



(Tidak perlu membuat form input kontak).



4\. Teknologi \& UI/UX Guidelines



Framework: Next.js (App Router app/page.tsx).



Styling: Tailwind CSS.



UI Components: Shadcn UI (Card, Button, Dialog/Modal, Sheet untuk mobile menu).



Icons: lucide-react.



Theme: Menggunakan next-themes untuk handling perpindahan Light Mode dan Dark Mode. Desain harus memanfaatkan warna utilitas Tailwind (seperti bg-background, text-foreground, bg-muted) agar perubahan tema mulus.



Responsivitas: Wajib Mobile-First. Harus terlihat sempurna di layar HP, Tablet, dan Desktop.



5\. Struktur Data Frontend (Hardcoded Data Pattern)



Untuk memudahkan maintenance, AI Coding Agent harus memisahkan data konten dari komponen UI. Buatlah array objek di dalam file terpisah atau di bagian atas file, contohnya untuk Sister Companies:



// Contoh struktur data untuk Sister Companies

export const sisterCompanies = \[

&#x20; {

&#x20;   id: 1,

&#x20;   name: "Alpha Creative",

&#x20;   shortDesc: "Agensi Digital Marketing \& Branding",

&#x20;   fullDesc: "Alpha Creative fokus membantu UMKM untuk go digital dengan layanan Social Media Management, SEO, dan pembuatan konten kreatif. Berdiri sejak 2020 dan telah menangani 50+ klien.",

&#x20;   website: "\[https://alphacreative.com](https://alphacreative.com)",

&#x20;   logoText: "AC" // Sebagai placeholder jika tidak ada gambar logo

&#x20; },

&#x20; // ... perusahaan lainnya

]





6\. Instruksi Eksekusi untuk AI Coding Agent



Inisialisasi Project: Setup Next.js App Router dengan Tailwind dan konfigurasi next-themes.



Layouting: Buat Navbar dan Footer yang responsif. Pastikan fitur Dark/Light Mode berfungsi.



Hero \& About: Bangun UI dengan spacing yang cukup (p-8 atau py-16) agar terlihat modern dan bernapas (clean design).



Sister Companies (CRITICAL): Gunakan Shadcn UI <Card> dan bungkus tombol pemicu dengan Shadcn UI <Dialog>. Pastikan konten detail render di dalam Dialog konten.



Contact: Pastikan tag <a> untuk WhatsApp menggunakan atribut target="\_blank" rel="noopener noreferrer".



Satu File Utama: Jika instruksi lingkungan (seperti platform Canvas ini) mensyaratkan 1 file, gabungkan semua kode ke dalam satu file React (misal app.jsx atau App.tsx) dengan simulasi routing atau pendekatan One-Page Scroll.

