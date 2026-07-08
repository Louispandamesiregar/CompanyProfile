import { FaTruck, FaBriefcase, FaStethoscope, FaPrint } from "react-icons/fa";

export const contentID = {
  navLinks: [
    { name: "Tentang Kami", href: "#about" },
    { name: "Layanan", href: "#services", hasDropdown: true },
    { name: "Kontak", href: "#contact" },
  ],
  companyInfo: {
    name: "PT. Nawasena Jaya Group",
    logoText: "Nawasena",
    heroSlides: [
      {
        id: 1,
        headline: "SOLUSI PENGADAAN &\nDISTRIBUSI TERPERCAYA",
        cta: "Layanan Kami",
        link: "#services",
        image: "./demo.jpg"
      },
      {
        id: 2,
        headline: "PENGIRIMAN BARANG\nPULAU JAWA",
        cta: "Hubungi Kami",
        link: "#contact",
        image: "./demo.jpg"
      },
      {
        id: 3,
        headline: "PENGADAAN ATK &\nALAT KESEHATAN",
        cta: "Tentang Kami",
        link: "#about",
        image: "./demo.jpg"
      }
    ],
    about: {
      title: "Tentang Kami",
      description: "PT. Nawasena Jaya Group adalah solusi pengadaan dan distribusi terpercaya yang berbasis di Jakarta Timur dengan jangkauan pengiriman ke seluruh Indonesia. Kami menyediakan layanan pengiriman barang, pengadaan Alat Tulis Kantor (ATK), dan Alat Kesehatan (Alkes). Keunggulan kami meliputi fast response, harga grosir yang fleksibel, stok barang yang selalu tersedia, dan legalitas yang lengkap (NPWP, NIB, Izin Edar Kemenkes / BPOM). Kami siap melayani instansi pemerintah, swasta, sekolah, klinik, hingga UMKM."
    },
    misi: {
      title: "Misi Kami",
      items: [
        "Menyediakan produk ATK dan tinta printer yang lengkap, berkualitas, dan siap pakai untuk kebutuhan kantor dan sekolah.",
        "Memberikan pelayanan cepat, ramah, dan profesional dengan respon maksimal 2 jam kerja.",
        "Menjalin kerja sama jangka panjang dengan instansi, perusahaan, koperasi, dan distributor di seluruh Indonesia.",
        "Menyediakan sistem pengadaan yang efisien, transparan, dan mudah diakses secara digital."
      ]
    },
    contact: {
      title: "Hubungi Kami Sekarang!",
      description: "Siap suplai untuk Instansi, Sekolah, Kantor, Klinik, dan Proyek Tender. Jangan ragu untuk menghubungi kami.",
      contacts: [
        {
          name: "Dwi Prayuda",
          whatsapp: "+6281388398303"
        },
        {
          name: "Fernadi",
          whatsapp: "+6281311200074"
        }
      ],
      email: "info@nawasenajaya.com",
      address: "JL. Dermaga Raya No. 129-131, Klender, Duren Sawit, Jakarta Timur, DKI Jakarta 13470."
    }
  },
  services: {
    title: "Layanan Kami",
    items: [
      {
        id: 1,
        title: "Layanan Pengiriman Barang",
        items: [
          "Armada: Colt Diesel Engkel & Double (Box)",
          "Jalur Darat: Jawa Barat, Jawa Tengah, Jawa Timur",
          "Jalur Laut (kerja sama ekspedisi): Kalimantan, Sulawesi, Bali",
          "Dilengkapi GPS tracking & asuransi pengiriman"
        ],
        icon: FaTruck,
        color: "#4285F4",
        images: ["./demo.jpg", "./demo.jpg", "./demo.jpg"]
      },
      {
        id: 2,
        title: "Pengadaan ATK",
        items: [
          "Buku tulis, pulpen, pensil",
          "Amplop coklat & putih, bak stempel",
          "Kertas HVS, label, tinta printer"
        ],
        icon: FaBriefcase,
        color: "#EA4335",
        images: ["./demo.jpg", "./demo.jpg", "./demo.jpg"]
      },
      {
        id: 3,
        title: "Pengadaan Alkes",
        items: [
          "Kapas, kasa, alkohol",
          "Alat tensi, termometer",
          "Masker medis, sarung tangan steril"
        ],
        icon: FaStethoscope,
        color: "#34A853",
        images: ["./demo.jpg", "./demo.jpg", "./demo.jpg"]
      },
      {
        id: 4,
        title: "Tinta & Perlengkapan Printer",
        items: [
          "Tinta refill HP & Epson (warna & hitam)",
          "Cartridge original dan kompatibel",
          "Kertas foto, label stiker, barcode, paket grosir"
        ],
        icon: FaPrint,
        color: "#FBBC05",
        images: ["./demo.jpg", "./demo.jpg", "./demo.jpg"]
      }
    ]
  },
  sisterCompanies: {
    subtitle: "Ekosistem Bisnis Kami",
    title: "PT Nawasena Jaya Group",
    items: [
      {
        id: 1,
        name: "Nawasena Alkes",
        shortDesc: "Alat Kesehatan",
        fullDesc: "Menyediakan perlengkapan alat kesehatan berkualitas untuk instansi dan masyarakat.",
        website: "#",
        logoText: "NA",
        image: "./demo.jpg"
      },
      {
        id: 2,
        name: "Nawasena ATK",
        shortDesc: "Alat Tulis Kantor",
        fullDesc: "Solusi alat tulis kantor dan sekolah yang lengkap dengan layanan pengiriman terbaik.",
        website: "#",
        logoText: "NATK",
        image: "./demo.jpg"
      },
      {
        id: 3,
        name: "Faenzone & Warmindo",
        shortDesc: "F&B / Kuliner",
        fullDesc: "Menyajikan makanan dan minuman berkualitas tinggi, nyaman untuk bersantai.",
        website: "#",
        logoText: "FW",
        image: "./demo.jpg"
      },
      {
        id: 4,
        name: "Koling",
        shortDesc: "Kopi Keliling",
        fullDesc: "Menyajikan racikan kopi istimewa secara berkeliling dengan harga bersahabat.",
        website: "#",
        logoText: "KLG",
        image: "/demo.jpg"
      }
    ]
  },
  footer: {
    description: "Partner pengadaan dan distribusi terpercaya Anda untuk kebutuhan bisnis, instansi, dan sekolah yang lebih efisien.",
    quickLinksTitle: "Tautan Cepat",
    contactTitle: "Hubungi Kami",
    copyright: "PT. Nawasena Jaya Group. Semua hak dilindungi."
  },
  badges: {
    slide1: "Solusi Terpercaya",
    slide2: "Pengiriman Cepat",
    slide3: "Produk Berkualitas"
  }
};

export const contentEN = {
  navLinks: [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services", hasDropdown: true },
    { name: "Contact", href: "#contact" },
  ],
  companyInfo: {
    name: "PT. Nawasena Jaya Group",
    logoText: "Nawasena",
    heroSlides: [
      {
        id: 1,
        headline: "TRUSTED PROCUREMENT &\nDISTRIBUTION SOLUTION",
        cta: "Our Services",
        link: "#services",
        image: "/demo.jpg"
      },
      {
        id: 2,
        headline: "FREIGHT FORWARDING\nACROSS JAVA ISLAND",
        cta: "Contact Us",
        link: "#contact",
        image: "/demo.jpg"
      },
      {
        id: 3,
        headline: "MEDICAL & OFFICE\nSUPPLIES PROCUREMENT",
        cta: "About Us",
        link: "#about",
        image: "/demo.jpg"
      }
    ],
    about: {
      title: "About Us",
      description: "PT. Nawasena Jaya Group is a trusted procurement and distribution solution based in East Jakarta, with nationwide delivery coverage across Indonesia. We provide freight forwarding services, office supplies (ATK) procurement, and medical equipment (Alkes). Our competitive advantages include fast response times, flexible wholesale pricing, high stock availability, and complete legal compliance (Tax ID, Business Reg, Ministry of Health / BPOM distribution permits). We are ready to serve government agencies, private sectors, schools, clinics, and SMEs."
    },
    misi: {
      title: "Our Mission",
      items: [
        "Provide comprehensive, high-quality, and ready-to-use office supplies and printer ink for office and school needs.",
        "Deliver fast, friendly, and professional service with a maximum response time of 2 business hours.",
        "Establish long-term partnerships with institutions, companies, cooperatives, and distributors throughout Indonesia.",
        "Provide a procurement system that is efficient, transparent, and easily accessible digitally."
      ]
    },
    contact: {
      title: "Contact Us Now!",
      description: "Ready to supply Institutions, Schools, Offices, Clinics, and Tender Projects. Do not hesitate to contact us.",
      contacts: [
        {
          name: "Dwi Prayuda",
          whatsapp: "+6281388398303"
        },
        {
          name: "Fernadi",
          whatsapp: "+6281311200074"
        }
      ],
      email: "info@nawasenajaya.com",
      address: "JL. Dermaga Raya No. 129-131, Klender, Duren Sawit, East Jakarta, DKI Jakarta 13470."
    }
  },
  services: {
    title: "Our Services",
    items: [
      {
        id: 1,
        title: "Freight Forwarding Services",
        items: [
          "Fleet: Colt Diesel Single & Double (Box)",
          "Land Route: West Java, Central Java, East Java",
          "Sea Route (partnered logistics): Kalimantan, Sulawesi, Bali",
          "Equipped with GPS tracking & shipping insurance"
        ],
        icon: FaTruck,
        color: "#4285F4",
        images: ["/demo.jpg", "/demo.jpg", "/demo.jpg"]
      },
      {
        id: 2,
        title: "Office Supplies (ATK)",
        items: [
          "Notebooks, pens, pencils",
          "Brown & white envelopes, stamp pads",
          "A4 Paper, labels, printer ink"
        ],
        icon: FaBriefcase,
        color: "#EA4335",
        images: ["/demo.jpg", "/demo.jpg", "/demo.jpg"]
      },
      {
        id: 3,
        title: "Medical Equipment (Alkes)",
        items: [
          "Cotton, gauze, rubbing alcohol",
          "Blood pressure monitors, thermometers",
          "Medical masks, sterile gloves"
        ],
        icon: FaStethoscope,
        color: "#34A853",
        images: ["/demo.jpg", "/demo.jpg", "/demo.jpg"]
      },
      {
        id: 4,
        title: "Ink & Printer Accessories",
        items: [
          "HP & Epson refill ink (color & black)",
          "Original and compatible cartridges",
          "Photo paper, sticker labels, barcode, wholesale packages"
        ],
        icon: FaPrint,
        color: "#FBBC05",
        images: ["/demo.jpg", "/demo.jpg", "/demo.jpg"]
      }
    ]
  },
  sisterCompanies: {
    subtitle: "Our Business Ecosystem",
    title: "PT Nawasena Jaya Group",
    items: [
      {
        id: 1,
        name: "Nawasena Alkes",
        shortDesc: "Medical Equipment",
        fullDesc: "Providing high quality medical equipment for institutions and public needs.",
        website: "#",
        logoText: "NA",
        image: "/demo.jpg"
      },
      {
        id: 2,
        name: "Nawasena ATK",
        shortDesc: "Office Supplies",
        fullDesc: "Complete office and school supplies solution with the best delivery service.",
        website: "#",
        logoText: "NATK",
        image: "/demo.jpg"
      },
      {
        id: 3,
        name: "Faenzone & Warmindo",
        shortDesc: "F&B / Culinary",
        fullDesc: "Serving high quality food and beverages, perfect for relaxing.",
        website: "#",
        logoText: "FW",
        image: "/demo.jpg"
      },
      {
        id: 4,
        name: "Koling",
        shortDesc: "Mobile Coffee",
        fullDesc: "Serving special coffee blends on the go with friendly prices.",
        website: "#",
        logoText: "KLG",
        image: "/demo.jpg"
      }
    ]
  },
  footer: {
    description: "Your trusted procurement and distribution partner for more efficient business, institutional, and school needs.",
    quickLinksTitle: "Quick Links",
    contactTitle: "Contact Us",
    copyright: "PT. Nawasena Jaya Group. All rights reserved."
  },
  badges: {
    slide1: "Trusted Solution",
    slide2: "Fast Delivery",
    slide3: "Quality Products"
  }
};
