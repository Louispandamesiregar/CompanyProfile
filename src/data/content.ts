import { Code, Megaphone, Smartphone, Lightbulb, PieChart, Users } from "lucide-react";

export const companyInfo = {
  name: "NexGen Agency",
  logoText: "NexGen",
  heroSlides: [
    {
      id: 1,
      headline: "DREAM WITH A TEAM\nMAKE WAVES",
      cta: "Learn more",
      link: "#about",
      image: "/demo.jpg"
    },
    {
      id: 2,
      headline: "INNOVATE & CREATE\nTHE FUTURE",
      cta: "Contact Us",
      link: "#contact",
      image: "/demo.jpg"
    },
    {
      id: 3,
      headline: "GROW YOUR BUSINESS\nWITH US",
      cta: "Our Services",
      link: "#services",
      image: "/demo.jpg"
    }
  ],
  about: {
    title: "Tentang Kami",
    description: "Berdiri sejak 2021, NexGen Agency berawal dari sekelompok anak muda yang percaya bahwa teknologi harusnya mudah diakses, indah, dan fungsional. Kami bekerja secara santai namun sangat serius terhadap kualitas kode dan desain yang kami hasilkan. Visi kami adalah menjadi partner digital terpercaya yang bekerja layaknya bagian dari tim Anda sendiri."
  },
  contact: {
    title: "Mari Berkolaborasi",
    description: "Punya ide brilian atau butuh bantuan untuk bisnis Anda? Jangan ragu untuk menghubungi kami.",
    whatsapp: "+6281234567890",
    email: "hello@nexgenagency.com",
    address: "Jl. Sudirman No. 45, Jakarta Pusat, Indonesia"
  }
};

export const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Pembuatan website company profile, e-commerce, hingga web app kompleks dengan teknologi terkini.",
    icon: Code
  },
  {
    id: 2,
    title: "Digital Marketing",
    description: "Strategi pemasaran digital yang tepat sasaran untuk meningkatkan visibilitas dan penjualan Anda.",
    icon: Megaphone
  },
  {
    id: 3,
    title: "Mobile Apps",
    description: "Pengembangan aplikasi Android dan iOS yang responsif, cepat, dan user-friendly.",
    icon: Smartphone
  },
  {
    id: 4,
    title: "UI/UX Design",
    description: "Desain antarmuka yang tidak hanya indah, tapi juga memberikan pengalaman pengguna terbaik.",
    icon: Lightbulb
  },
  {
    id: 5,
    title: "Data Analytics",
    description: "Analisis data bisnis untuk membantu Anda mengambil keputusan yang lebih tepat dan terukur.",
    icon: PieChart
  },
  {
    id: 6,
    title: "IT Consulting",
    description: "Konsultasi infrastruktur dan arsitektur IT untuk efisiensi dan keamanan bisnis Anda.",
    icon: Users
  }
];

export const sisterCompanies = [
  {
    id: 1,
    name: "Senja Coffee",
    shortDesc: "Artisan Coffee Shop & Roastery",
    fullDesc: "Senja Coffee menyajikan kopi artisan terbaik dengan biji pilihan yang disangrai sendiri (roastery). Tempat nongkrong yang nyaman dengan desain estetik, cocok untuk bekerja maupun bersantai bersama teman.",
    website: "https://senjacoffee.example.com",
    logoText: "SC",
    image: "/demo.jpg"
  },
  {
    id: 2,
    name: "Warmindo Berkah",
    shortDesc: "Warung Makan Indomie & Kopi",
    fullDesc: "Warmindo Berkah adalah tempat makan favorit yang menyajikan berbagai olahan mi instan, roti bakar, dan minuman hangat. Cocok sebagai tempat ngobrol santai dengan harga yang sangat bersahabat.",
    website: "https://warmindoberkah.example.com",
    logoText: "WB",
    image: "/demo.jpg"
  },
  {
    id: 3,
    name: "Gamma Studio",
    shortDesc: "Production House & Fotografi",
    fullDesc: "Gamma Studio adalah sister company kami yang menangani segala kebutuhan visual mulai dari corporate video, commercial, hingga fotografi produk profesional.",
    website: "https://gammastudio.example.com",
    logoText: "GS",
    image: "/demo.jpg"
  }
];
