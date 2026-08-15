import { MdLocalShipping, MdBusinessCenter, MdMedicalServices, MdPrint } from "react-icons/md";

import cddBoxImg from "../assets/fleet/cdd-box.webp";
import cdeBoxImg from "../assets/fleet/cde-box.webp";
import engkelBoxMuatanImg from "../assets/engkelbox_muatan.webp";

// Dedicated Service Images
import pengiriman1 from "../assets/box2.webp";
import pengiriman2 from "../assets/box3.webp";
import pengiriman3 from "../assets/box.webp";
import atk1 from "../assets/services/atk.webp";
import alkes1 from "../assets/services/alkes.webp";
import printer1 from "../assets/perlengkapan_printer.webp";

// Faenzone Assets
import faenzoneAyamGeprekImg from "../assets/faenzone/ayam-geprek.webp";
import faenzoneCoffeeImg from "../assets/faenzone/faenzone-coffee.webp";
import seqataCoffeeImg from "../assets/faenzone/seqata-coffee.webp";
import kopiKitaImg from "../assets/faenzone/kopi-kita.webp";
import faenzoneCartImg from "../assets/faenzone/coffee-cart.webp";

// Other Sister Companies
import airinsParfumeImg from "../assets/companies/airins-parfume.webp";
const clientsData = {
  titleID: "Klien & Mitra Kami",
  titleEN: "Our Clients & Partners",
  subtitleID: "Mereka yang mempercayakan pengadaan dan logistik kepada kami",
  subtitleEN: "Those who trust our procurement and logistics solutions",
  items: [
    { id: 1, name: "Parit Padang Global", logoText: "PPG", color: "#4F46E5", serviceIds: [1, 2, 3, 4] },
    { id: 7, name: "Andini Sarana", logoText: "AS", color: "#059669", serviceIds: [1, 2, 3, 4] },
    { id: 9, name: "Kreatifindo Global Gemilang", logoText: "KGG", color: "#D97706", serviceIds: [1, 2, 3, 4] },
    { id: 10, name: "Sumber Mas Autorindo", logoText: "SMA", color: "#DC2626", serviceIds: [1, 2, 3, 4] },
    { id: 11, name: "Opthalindo Jaya", logoText: "OJ", color: "#2563EB", serviceIds: [1, 2, 3, 4] },
    { id: 12, name: "Kintetsu World Express", logoText: "KWE", color: "#7C3AED", serviceIds: [1, 2, 3, 4] },
  ]
};

export const contentID = {
  navLinks: [
    { name: "Tentang Kami", href: "/#about" },
    { name: "Layanan", href: "/#services", hasDropdown: true },
  ],
  companyInfo: {
    name: "PT. Nawasena Jaya Group",
    logoText: "Nawasena",
    heroSlides: [
      {
        id: 1,
        headline: "SOLUSI PENGADAAN &\nDISTRIBUSI TERPERCAYA",
        cta: "Hubungi Kami",
        link: "https://wa.me/6281388398303",
        image: engkelBoxMuatanImg
      },
      {
        id: 2,
        headline: "PENGIRIMAN BARANG\nPULAU JAWA",
        cta: "Hubungi Kami",
        link: "https://wa.me/6281388398303",
        image: cddBoxImg
      },
      {
        id: 3,
        headline: "PENGADAAN ATK &\nALAT KESEHATAN",
        cta: "Hubungi Kami",
        link: "https://wa.me/6281388398303",
        image: atk1
      }
    ],
    about: {
      title: "Tentang Kami",
      description: "PT. Nawasena Jaya Group adalah solusi pengadaan dan distribusi terpercaya yang berbasis di Jakarta Timur dengan jangkauan pengiriman ke seluruh Indonesia. Kami menyediakan layanan pengiriman barang, pengadaan Alat Tulis Kantor (ATK), dan Alat Kesehatan (Alkes). Keunggulan kami meliputi fast response, harga grosir yang fleksibel, stok barang yang selalu tersedia, dan legalitas yang lengkap (NPWP, NIB, Izin Edar Kemenkes / BPOM). Kami siap melayani instansi pemerintah, swasta, sekolah, klinik, hingga UMKM."
    },
    visi: {
      title: "Visi",
      items: [
        "Membentuk jaringan (jalur distribusi) yang efisien dan efektif.",
        "Menjadi Perusahaan Logistic dengan pelayanan cepat dan aman.",
        "Mengembangkan kualitas layanan yang saling menguntungkan.",
        "Membangun hubungan yang baik dengan setiap pihak yang mengutamakan musyawarah dalam setiap kendala yang dihadapi agar tercipta kenyamanan di kedua belah pihak."
      ]
    },
    misi: {
      title: "Misi",
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
      email: "nawasenagroup00@gmail.com",
      address: "JL. Dermaga Raya No. 129-131, Klender, Duren Sawit, Jakarta Timur, DKI Jakarta 13470."
    }
  },
  services: {
    title: "Layanan Kami",
    items: [
      {
        id: 1,
        title: "Pengiriman Barang",
        fullDescription: "Kami menyediakan solusi logistik dan pengiriman barang yang terpadu, cepat, dan terpercaya. Dari dokumen penting hingga kargo besar, tim kami siap mengantarkan barang Anda dengan armada yang selalu dalam kondisi prima. Jaringan distribusi kami mencakup pulau Jawa hingga rute laut ke pulau-pulau besar lainnya di Indonesia.",
        benefits: [
          "Ketepatan waktu pengiriman yang sangat terjamin",
          "Perlindungan asuransi kargo untuk keamanan barang Anda",
          "Pemantauan armada langsung melalui sistem GPS Tracking",
          "Harga yang fleksibel untuk kontrak pengiriman rutin"
        ],
        items: [
          "Armada: Colt Diesel Engkel & Double (Box)",
          "Jalur Darat: Jawa Barat, Jawa Tengah, Jawa Timur",
          "Jalur Laut (kerja sama ekspedisi): Kalimantan, Sulawesi, Bali",
          "Dilengkapi GPS tracking & asuransi pengiriman"
        ],
        icon: MdLocalShipping,
        color: "#4285F4",
        images: [pengiriman3, pengiriman1, pengiriman2]
      },
      {
        id: 2,
        title: "Pengadaan ATK",
        fullDescription: "PT. Nawasena Jaya Group menjadi mitra andalan bagi banyak perusahaan, sekolah, dan instansi pemerintah dalam memenuhi kebutuhan Alat Tulis Kantor (ATK). Kami menyediakan berbagai merk ternama dengan jaminan keaslian dan harga kompetitif, sehingga operasional Anda dapat berjalan tanpa hambatan.",
        benefits: [
          "Varian produk yang lengkap dari berbagai merek terkemuka",
          "Proses pemesanan mudah dengan layanan pengiriman langsung ke kantor",
          "Penawaran harga grosir khusus untuk pembelian skala instansi",
          "Garansi retur untuk produk yang tidak sesuai pesanan"
        ],
        items: [
          "Buku tulis, pulpen, pensil",
          "Amplop coklat & putih, bak stempel",
          "Kertas HVS, label, tinta printer"
        ],
        icon: MdBusinessCenter,
        color: "#EA4335",
        images: [atk1]
      },
      {
        id: 3,
        title: "Pengadaan Alkes",
        fullDescription: "Kesehatan dan keselamatan adalah prioritas utama. Kami mendukung fasilitas kesehatan (klinik, rumah sakit, puskesmas) serta perusahaan dengan menyediakan Alat Kesehatan (Alkes) yang bersertifikat dan berstandar nasional maupun internasional. Kami memiliki izin resmi untuk distribusi alat kesehatan.",
        benefits: [
          "Produk alat kesehatan tersertifikasi (Kemenkes/BPOM)",
          "Ketersediaan stok untuk kebutuhan darurat (fast-moving items)",
          "Dukungan alat diagnostik hingga perlengkapan medis sekali pakai",
          "Layanan purna jual dan garansi resmi dari produsen"
        ],
        items: [
          "Kapas, kasa, alkohol",
          "Alat tensi, termometer",
          "Masker medis, sarung tangan steril"
        ],
        icon: MdMedicalServices,
        color: "#34A853",
        images: [alkes1]
      },
      {
        id: 4,
        title: "Tinta & Perlengkapan Printer",
        fullDescription: "Kebutuhan pencetakan dokumen di era digital masih sangat tinggi. Kami memastikan printer di kantor Anda selalu siap digunakan dengan menyediakan layanan isi ulang tinta dan pasokan cartridge berkualitas. Kami menjamin hasil cetakan yang tajam dengan risiko kerusakan printer yang minim.",
        benefits: [
          "Tinta berkualitas tinggi yang tidak merusak print-head",
          "Solusi cartridge kompatibel untuk menghemat biaya operasional",
          "Menyediakan perlengkapan cetak lain (kertas foto, kertas barcode)",
          "Layanan jemput bola untuk isi ulang (refill) skala besar"
        ],
        items: [
          "Tinta refill HP & Epson (warna & hitam)",
          "Cartridge original dan kompatibel",
          "Kertas foto, label stiker, barcode, paket grosir"
        ],
        icon: MdPrint,
        color: "#FBBC05",
        images: [printer1]
      }
    ]
  },
  sisterCompanies: {
    subtitle: "Unit Bisnis Nawasena Group",
    title: "PT Nawasena Jaya Group",
    items: [
      {
        id: 1,
        name: "Ayam Geprek",
        shortDesc: "F&B / Kuliner",
        fullDesc: "Sajian ayam geprek dengan sambal otentik dan bumbu rempah pilihan yang menggugah selera. Nikmati kelezatan ayam krispi berpadu dengan kepedasan yang pas.",
        address: "Jl. Dermaga Raya, Jakarta Timur",
        mapLink: "https://maps.app.goo.gl/KaNtqe6k9nvrMXiS9",
        website: "#",
        logoText: "AG",
        image: faenzoneAyamGeprekImg,
      },
      {
        id: 2,
        name: "Faenzone Coffee",
        shortDesc: "Coffee Shop",
        fullDesc: "Tempat nongkrong yang nyaman dengan pilihan biji kopi premium. Menyajikan berbagai minuman kopi dan non-kopi untuk menemani aktivitas Anda.",
        address: "Jl. Dermaga Raya, Jakarta Timur",
        mapLink: "https://maps.app.goo.gl/KaNtqe6k9nvrMXiS9",
        website: "#",
        logoText: "FC",
        image: faenzoneCoffeeImg,
      },
      {
        id: 3,
        name: "Seqata Coffee",
        shortDesc: "Coffee Shop",
        fullDesc: "Menghadirkan racikan kopi kekinian dengan cita rasa khas yang cocok untuk menemani waktu santai atau bekerja Anda.",
        address: "Jl lapangan merpati no. 49 jatibening baru",
        mapLink: "https://maps.app.goo.gl/B5YETsiCoYGEpPtW8",
        website: "#",
        logoText: "SC",
        image: seqataCoffeeImg,
      },
      {
        id: 4,
        name: "Kopi Kita",
        shortDesc: "Coffee Shop",
        fullDesc: "Kopi Kita menyuguhkan aneka minuman kopi dan minuman segar lainnya dengan harga bersahabat. Berlokasi strategis di sekitar Duren Sawit, Jakarta Timur.",
        address: "Sekitar Duren Sawit, Jakarta Timur",
        website: "#",
        logoText: "KK",
        image: kopiKitaImg,
        detailImage: faenzoneCartImg,
      },
      {
        id: 6,
        name: "Airin's Parfume",
        shortDesc: "Online Store",
        fullDesc: "Airin's Parfume menyediakan koleksi wewangian premium yang diracik khusus untuk memberikan kesan elegan dan memikat. Dengan menggunakan bibit parfum berkualitas tinggi, kami menjamin aroma yang tahan lama dan sesuai dengan karakter Anda.",
        address: "Online Store",
        website: "#",
        logoText: "AP",
        image: airinsParfumeImg,
      }
    ]
  },
  clients: {
    title: clientsData.titleID,
    subtitle: clientsData.subtitleID,
    items: clientsData.items
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
    { name: "About Us", href: "/#about" },
    { name: "Services", href: "/#services", hasDropdown: true },
  ],
  companyInfo: {
    name: "PT. Nawasena Jaya Group",
    logoText: "Nawasena",
    heroSlides: [
      {
        id: 1,
        headline: "TRUSTED PROCUREMENT &\nDISTRIBUTION SOLUTION",
        cta: "Contact Us",
        link: "https://wa.me/6281388398303",
        image: engkelBoxMuatanImg
      },
      {
        id: 2,
        headline: "FREIGHT FORWARDING\nACROSS JAVA ISLAND",
        cta: "Contact Us",
        link: "https://wa.me/6281388398303",
        image: cddBoxImg
      },
      {
        id: 3,
        headline: "MEDICAL & OFFICE\nSUPPLIES PROCUREMENT",
        cta: "Contact Us",
        link: "https://wa.me/6281388398303",
        image: atk1
      }
    ],
    about: {
      title: "About Us",
      description: "PT. Nawasena Jaya Group is a trusted procurement and distribution solution based in East Jakarta, with nationwide delivery coverage across Indonesia. We provide freight forwarding services, office supplies (ATK) procurement, and medical equipment (Alkes). Our competitive advantages include fast response times, flexible wholesale pricing, high stock availability, and complete legal compliance (Tax ID, Business Reg, Ministry of Health / BPOM distribution permits). We are ready to serve government agencies, private sectors, schools, clinics, and SMEs."
    },
    visi: {
      title: "Our Vision",
      items: [
        "Establishing an efficient and effective distribution network.",
        "Becoming a Logistics Company with fast and secure services.",
        "Developing mutually beneficial service quality.",
        "Building good relationships with all parties by prioritizing deliberation in every obstacle to create comfort for both parties."
      ]
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
      email: "nawasenagroup00@gmail.com",
      address: "JL. Dermaga Raya No. 129-131, Klender, Duren Sawit, East Jakarta, DKI Jakarta 13470."
    }
  },
  services: {
    title: "Our Services",
    items: [
      {
        id: 1,
        title: "Freight Forwarding Services",
        fullDescription: "We provide integrated, fast, and highly reliable logistics and freight forwarding solutions. From important documents to large cargo, our team is ready to deliver your goods using well-maintained fleets. Our distribution network covers Java and sea routes to other major islands in Indonesia.",
        benefits: [
          "Strict adherence to delivery schedules",
          "Comprehensive cargo insurance coverage for your goods",
          "Real-time fleet monitoring through GPS Tracking",
          "Flexible pricing structures for routine delivery contracts"
        ],
        items: [
          "Fleet: Colt Diesel Single & Double (Box)",
          "Land Route: West Java, Central Java, East Java",
          "Sea Route (partnered logistics): Kalimantan, Sulawesi, Bali",
          "Equipped with GPS tracking & shipping insurance"
        ],
        icon: MdLocalShipping,
        color: "#4285F4",
        images: [pengiriman2, pengiriman1, pengiriman3]
      },
      {
        id: 2,
        title: "Office Supplies (ATK)",
        fullDescription: "PT. Nawasena Jaya Group is a trusted partner for many companies, schools, and government agencies in fulfilling their Office Supplies (ATK) needs. We provide various top brands with guaranteed authenticity and competitive pricing, ensuring your operations run smoothly without hiccups.",
        benefits: [
          "Comprehensive product variants from leading brands",
          "Easy ordering process with direct delivery to your office",
          "Special wholesale pricing for institutional purchases",
          "Return guarantee for products that do not match the order"
        ],
        items: [
          "Notebooks, pens, pencils",
          "Brown & white envelopes, stamp pads",
          "A4 Paper, labels, printer ink"
        ],
        icon: MdBusinessCenter,
        color: "#EA4335",
        images: [atk1]
      },
      {
        id: 3,
        title: "Medical Equipment (Alkes)",
        fullDescription: "Health and safety are our top priorities. We support healthcare facilities (clinics, hospitals, health centers) and companies by providing Medical Equipment (Alkes) that is certified and meets national and international standards. We are officially licensed to distribute medical equipment.",
        benefits: [
          "Certified medical products (Ministry of Health / BPOM)",
          "Ready stock availability for emergency needs (fast-moving items)",
          "Support for diagnostic tools to disposable medical supplies",
          "After-sales service and official manufacturer warranty"
        ],
        items: [
          "Cotton, gauze, rubbing alcohol",
          "Blood pressure monitors, thermometers",
          "Medical masks, sterile gloves"
        ],
        icon: MdMedicalServices,
        color: "#34A853",
        images: [alkes1]
      },
      {
        id: 4,
        title: "Ink & Printer Accessories",
        fullDescription: "The need for document printing in the digital era remains high. We ensure that your office printers are always ready to use by providing ink refill services and high-quality cartridge supplies. We guarantee sharp print results with minimal risk of printer damage.",
        benefits: [
          "High-quality ink that does not damage the print-head",
          "Compatible cartridge solutions to save operational costs",
          "Providing other printing supplies (photo paper, barcode paper)",
          "Pick-up and delivery services for large-scale refills"
        ],
        items: [
          "HP & Epson refill ink (color & black)",
          "Original and compatible cartridges",
          "Photo paper, sticker labels, barcode, wholesale packages"
        ],
        icon: MdPrint,
        color: "#FBBC05",
        images: [printer1]
      }
    ]
  },
  sisterCompanies: {
    subtitle: "Nawasena Group Business Units",
    title: "PT Nawasena Jaya Group",
    items: [
      {
        id: 1,
        name: "Ayam Geprek",
        shortDesc: "F&B / Culinary",
        fullDesc: "Ayam Geprek dishes with authentic chili paste and selected spices that tantalize your taste buds. Enjoy the deliciousness of crispy chicken combined with the perfect level of spiciness.",
        address: "Jl. Dermaga Raya, East Jakarta",
        mapLink: "https://maps.app.goo.gl/KaNtqe6k9nvrMXiS9",
        website: "#",
        logoText: "AG",
        image: faenzoneAyamGeprekImg,
      },
      {
        id: 2,
        name: "Faenzone Coffee",
        shortDesc: "Coffee Shop",
        fullDesc: "A cozy hangout spot with premium coffee bean selections. Serving a variety of coffee and non-coffee beverages to accompany your activities.",
        address: "Jl. Dermaga Raya, East Jakarta",
        mapLink: "https://maps.app.goo.gl/KaNtqe6k9nvrMXiS9",
        website: "#",
        logoText: "FC",
        image: faenzoneCoffeeImg,
      },
      {
        id: 3,
        name: "Seqata Coffee",
        shortDesc: "Coffee Shop",
        fullDesc: "Presenting modern coffee blends with distinctive flavors, perfect for accompanying your leisure or work time.",
        address: "Jl lapangan merpati no. 49 jatibening baru",
        mapLink: "https://maps.app.goo.gl/B5YETsiCoYGEpPtW8",
        website: "#",
        logoText: "SC",
        image: seqataCoffeeImg,
      },
      {
        id: 4,
        name: "Kopi Kita",
        shortDesc: "Coffee Shop",
        fullDesc: "Kopi Kita offers a variety of coffee and refreshing drinks at friendly prices. Strategically located around Duren Sawit, East Jakarta.",
        address: "Around Duren Sawit, East Jakarta",
        website: "#",
        logoText: "KK",
        image: kopiKitaImg,
        detailImage: faenzoneCartImg,
      },
      {
        id: 6,
        name: "Airin's Parfume",
        shortDesc: "Online Store",
        fullDesc: "Airin's Parfume provides a premium fragrance collection specially blended to give an elegant and captivating impression. Using high-quality perfume essences, we guarantee long-lasting scents that suit your character.",
        address: "Online Store",
        website: "#",
        logoText: "AP",
        image: airinsParfumeImg,
      }
    ]
  },
  clients: {
    title: clientsData.titleEN,
    subtitle: clientsData.subtitleEN,
    items: clientsData.items
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
