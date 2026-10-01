/**
 * BANK INDONESIA - Elang (Emergency & Continuity Management)
 * Core System Controller
 * 
 * Features:
 * 1. Dynamic Monitoring BCM: General, Natural L.1, Man-Made L.2, Technology L.3
 * 2. 7 Layers of OSI Infrastructure & System Visualizer (in Technology Disaster)
 * 3. Profil Wilayah with Photos & 4 Pillars Modal (SDM, SDLK Sarpras Table, SDTD, Riwayat)
 * 4. 3-Part Panduan Respon Cepat (Icon-only Catalog, Editable Status Rules, Template Docs)
 * 5. Incident Report Management with Conditional 24 APTK Matrix
 * 6. Dual-link Repository for PKT and DRA with OneDrive Customization
 */

// =============================================================================
// 1. DATA MASTER: SATKER PELAKSANA, SATKER PENDUKUNG & 46 KPwDN
// =============================================================================

// a. PKT & DRA Satker Pelaksana (8 Satker Kantor Pusat)
const SATKER_PELAKSANA = [
  { id: "satker-dmr", code: "DMR", name: "Departemen Manajemen Risiko", category: "Pelaksana", lastYear: 2025, status: "Sudah" },
  { id: "satker-dpd", code: "DPD", name: "Departemen Pengelolaan Devisa", category: "Pelaksana", lastYear: 2025, status: "Sudah" },
  { id: "satker-dpma", code: "DPMA", name: "Departemen Pengelolaan Moneter & Aset", category: "Pelaksana", lastYear: 2025, status: "Sudah" },
  { id: "satker-dppt", code: "DPPT", name: "Departemen Pengembangan Pasar Keuangan", category: "Pelaksana", lastYear: 2024, status: "Belum" },
  { id: "satker-dkem", code: "DKEM", name: "Departemen Kebijakan Ekonomi & Moneter", category: "Pelaksana", lastYear: 2025, status: "Sudah" },
  { id: "satker-dkmp", code: "DKMP", name: "Departemen Kebijakan Makroprudensial", category: "Pelaksana", lastYear: 2025, status: "Sudah" },
  { id: "satker-dksp", code: "DKSP", name: "Departemen Kebijakan Sistem Pembayaran", category: "Pelaksana", lastYear: 2025, status: "Sudah" },
  { id: "satker-dkeu", code: "DKEU", name: "Departemen Keuangan", category: "Pelaksana", lastYear: 2024, status: "Belum" }
];

// b. PKT & DRA Satker Pendukung (6 Satker Kantor Pusat)
const SATKER_PENDUKUNG = [
  { id: "satker-dlds", code: "DLDS", name: "Departemen Layanan Digital & Sistem", category: "Pendukung", lastYear: 2025, status: "Sudah" },
  { id: "satker-dlaf", code: "DLAF", name: "Departemen Layanan Administrasi & Fasilitas", category: "Pendukung", lastYear: 2025, status: "Sudah" },
  { id: "satker-dsdm", code: "DSDM", name: "Departemen Sumber Daya Manusia", category: "Pendukung", lastYear: 2025, status: "Sudah" },
  { id: "satker-dkom", code: "DKOM", name: "Departemen Komunikasi", category: "Pendukung", lastYear: 2024, status: "Belum" },
  { id: "satker-didd", code: "DIDD", name: "Departemen Inovasi & Digitalisasi Data", category: "Pendukung", lastYear: 2025, status: "Sudah" },
  { id: "satker-dpid", code: "DPID", name: "Departemen Pengelolaan & Integrasi Data", category: "Pendukung", lastYear: 2025, status: "Sudah" }
];

// c. 46 KPwDN (Dengan Koordinat GPS Riil & 46 Tautan Google Maps Terverifikasi)
const KPWDN_DATA = [
  // SUMATERA (13 Satker)
  { 
    id: "kpwbi-aceh", 
    name: "KPwBI Provinsi Aceh", 
    city: "Banda Aceh", 
    region: "Sumatera", 
    isKorwil: false, 
    lat: 5.5483, 
    lng: 95.3238, 
    incidents: 3, 
    riskScore: 6, 
    level: "Sedang", 
    lastYear: 2025, 
    status: "Sudah",
    gmapsUrl: "https://www.google.com/maps/search/?api=1&query=KPw+BI+Provinsi+Aceh%2C+Banda+Aceh%2C+Indonesia",
    address: "Jl. Cut Meutia No. 15, Banda Aceh, Aceh 23117",
    lkaAlternatif: "LKA Kantor Layanan Lhokseumawe / Gedung Bappeda Aceh",
    disasterHazards: "Gempa Megathrust & Tsunami (Tinggi), Banjir Genangan (Sedang)",
    currentStatus: "Normal Stabil"
  },
  { 
    id: "kpwbi-lhokseumawe", 
    name: "KPwBI Lhokseumawe", 
    city: "Lhokseumawe", 
    region: "Sumatera", 
    isKorwil: false, 
    lat: 5.1804, 
    lng: 97.1408, 
    incidents: 1, 
    riskScore: 3, 
    level: "Rendah", 
    lastYear: 2025, 
    status: "Sudah",
    gmapsUrl: "https://www.google.com/maps/search/?api=1&query=KPw+BI+Lhokseumawe%2C+Lhokseumawe%2C+Indonesia",
    address: "Jl. Merdeka Timur No. 1, Lhokseumawe, Aceh 24351",
    lkaAlternatif: "LKA Gedung Pemko Lhokseumawe / KPwBI Aceh",
    disasterHazards: "Banjir Pesisir Pasang (Sedang), Cuaca Ekstrem (Sedang)",
    currentStatus: "Normal Stabil"
  },
  { 
    id: "kpwbi-medan", 
    name: "KPwBI Provinsi Sumatera Utara", 
    city: "Medan", 
    region: "Sumatera", 
    isKorwil: true, 
    lat: 3.5952, 
    lng: 98.6722, 
    incidents: 7, 
    riskScore: 10, 
    level: "Sedang", 
    lastYear: 2024, 
    status: "Belum",
    gmapsUrl: "https://www.google.com/maps/search/?api=1&query=KPw+BI+Provinsi+Sumatera+Utara%2C+Medan%2C+Indonesia",
    address: "Jl. Balai Kota No. 4, Medan, Sumatera Utara 20111",
    lkaAlternatif: "LKA Gedung Diklat BI Medan / KPwBI Pematangsiantar",
    disasterHazards: "Banjir Luapan Sungai Deli (Tinggi), Erupsi Abu Gunung Sinabung (Sedang)",
    currentStatus: "Normal Waspada"
  },
  { 
    id: "kpwbi-pematangsiantar", 
    name: "KPwBI Pematangsiantar", 
    city: "Pematangsiantar", 
    region: "Sumatera", 
    isKorwil: false, 
    lat: 2.9592, 
    lng: 99.0687, 
    incidents: 2, 
    riskScore: 4, 
    level: "Rendah", 
    lastYear: 2025, 
    status: "Sudah",
    gmapsUrl: "https://www.google.com/maps/search/?api=1&query=KPw+BI+Pematangsiantar%2C+Pematangsiantar%2C+Indonesia",
    address: "Jl. H. Adam Malik No. 1, Pematangsiantar, Sumatera Utara 21111",
    lkaAlternatif: "LKA Gedung Perbankan Mitra Siantar / KPwBI Medan",
    disasterHazards: "Tanah Longsor Perbukitan (Sedang), Gempa Darat Sesar (Sedang)",
    currentStatus: "Normal Stabil"
  },
  { 
    id: "kpwbi-sibolga", 
    name: "KPwBI Sibolga", 
    city: "Sibolga", 
    region: "Sumatera", 
    isKorwil: false, 
    lat: 1.7428, 
    lng: 98.7792, 
    incidents: 4, 
    riskScore: 8, 
    level: "Sedang", 
    lastYear: 2024, 
    status: "Belum",
    gmapsUrl: "https://www.google.com/maps/search/?api=1&query=KPw+BI+Sibolga%2C+Sibolga%2C+Indonesia",
    address: "Jl. Ade Irma Suryani No. 2, Sibolga, Sumatera Utara 22513",
    lkaAlternatif: "LKA Gedung Kantor Pemkab Tapanuli Tengah / KPwBI Padang",
    disasterHazards: "Gempa Sesar Toru & Megathrust (Tinggi), Gelombang Pasang Pantai (Sedang)",
    currentStatus: "Normal Waspada"
  },
  { 
    id: "kpwbi-padang", 
    name: "KPwBI Provinsi Sumatera Barat", 
    city: "Padang", 
    region: "Sumatera", 
    isKorwil: false, 
    lat: -0.9471, 
    lng: 100.4172, 
    incidents: 5, 
    riskScore: 9, 
    level: "Sedang", 
    lastYear: 2025, 
    status: "Sudah",
    gmapsUrl: "https://www.google.com/maps/search/?api=1&query=KPw+BI+Provinsi+Sumatera+Barat%2C+Padang%2C+Indonesia",
    address: "Jl. Jend. Sudirman No. 22, Padang, Sumatera Barat 25111",
    lkaAlternatif: "Alternate Site Bukittinggi (Zona Evakuasi Ketinggian)",
    disasterHazards: "Gempa Megathrust Mentawai M>8 (Sangat Tinggi), Tsunami (Tinggi), Longsor Sitinjau Lauik",
    currentStatus: "Normal Siaga"
  },
  { 
    id: "kpwbi-pekanbaru", 
    name: "KPwBI Provinsi Riau", 
    city: "Pekanbaru", 
    region: "Sumatera", 
    isKorwil: false, 
    lat: 0.5071, 
    lng: 101.4478, 
    incidents: 4, 
    riskScore: 7, 
    level: "Sedang", 
    lastYear: 2025, 
    status: "Sudah",
    gmapsUrl: "https://www.google.com/maps/search/?api=1&query=KPw+BI+Provinsi+Riau%2C+Pekanbaru%2C+Indonesia",
    address: "Jl. Jend. Sudirman No. 464, Pekanbaru, Riau 28126",
    lkaAlternatif: "LKA Gedung Kantor Bappeda Riau / KPwBI Padang",
    disasterHazards: "Karhutla Gambut & Kabut Asap Pekat ISPU (Tinggi), Banjir DAS Siak (Sedang)",
    currentStatus: "Normal Waspada"
  },
  { 
    id: "kpwbi-tanjungpinang", 
    aliasId: "kpwbi-batam",
    name: "KPwBI Provinsi Kepulauan Riau", 
    city: "Tanjungpinang", 
    region: "Sumatera", 
    isKorwil: false, 
    lat: 0.9168, 
    lng: 104.4449, 
    incidents: 2, 
    riskScore: 4, 
    level: "Rendah", 
    lastYear: 2025, 
    status: "Sudah",
    gmapsUrl: "https://www.google.com/maps/search/?api=1&query=KPw+BI+Provinsi+Kepulauan+Riau%2C+Tanjungpinang%2C+Indonesia",
    address: "Jl. Basuki Rahmat No. 1, Tanjungpinang, Kepulauan Riau 29124",
    lkaAlternatif: "LKA Kantor Layanan BI Batam / Perbankan Mitra Batam",
    disasterHazards: "Gelombang Pasang Laut Pesisir (Sedang), Cuaca Ekstrem Monsun (Sedang)",
    currentStatus: "Normal Stabil"
  },
  { 
    id: "kpwbi-jambi", 
    name: "KPwBI Provinsi Jambi", 
    city: "Jambi", 
    region: "Sumatera", 
    isKorwil: false, 
    lat: -1.6101, 
    lng: 103.6131, 
    incidents: 3, 
    riskScore: 6, 
    level: "Sedang", 
    lastYear: 2024, 
    status: "Belum",
    gmapsUrl: "https://www.google.com/maps/search/?api=1&query=KPw+BI+Provinsi+Jambi%2C+Jambi%2C+Indonesia",
    address: "Jl. Jend. A. Yani No. 14, Telanaipura, Jambi 36122",
    lkaAlternatif: "LKA Kantor Bank Mitra Regional Jambi / KPwBI Palembang",
    disasterHazards: "Luapan DAS Batanghari (Tinggi), Karhutla Lahan Gambut (Sedang)",
    currentStatus: "Normal Stabil"
  },
  { 
    id: "kpwbi-bengkulu", 
    name: "KPwBI Provinsi Bengkulu", 
    city: "Bengkulu", 
    region: "Sumatera", 
    isKorwil: false, 
    lat: -3.7928, 
    lng: 102.2608, 
    incidents: 3, 
    riskScore: 6, 
    level: "Sedang", 
    lastYear: 2025, 
    status: "Sudah",
    gmapsUrl: "https://www.google.com/maps/search/?api=1&query=KPw+BI+Provinsi+Bengkulu%2C+Bengkulu%2C+Indonesia",
    address: "Jl. Ahmad Yani No. 1, Bengkulu 38119",
    lkaAlternatif: "LKA Gedung Pemprov Bengkulu / KPwBI Padang",
    disasterHazards: "Gempa Tektonik Pesisir Barat (Tinggi), Tsunami Samudera Hindia (Tinggi)",
    currentStatus: "Normal Waspada"
  },
  { 
    id: "kpwbi-palembang", 
    name: "KPwBI Provinsi Sumatera Selatan", 
    city: "Palembang", 
    region: "Sumatera", 
    isKorwil: false, 
    lat: -2.9909, 
    lng: 104.7566, 
    incidents: 4, 
    riskScore: 8, 
    level: "Sedang", 
    lastYear: 2025, 
    status: "Sudah",
    gmapsUrl: "https://www.google.com/maps/search/?api=1&query=KPw+BI+Provinsi+Sumatera+Selatan%2C+Palembang%2C+Indonesia",
    address: "Jl. Jend. Sudirman No. 510, Palembang, Sumatera Selatan 30129",
    lkaAlternatif: "LKA Gedung Kantor Bappeda Sumsel / KPwBI Lampung",
    disasterHazards: "Luapan Sungai Musi & Pasang Pasut (Tinggi), Kabut Asap Karhutla (Sedang)",
    currentStatus: "Normal Stabil"
  },
  { 
    id: "kpwbi-pangkalpinang", 
    name: "KPwBI Provinsi Kepulauan Bangka Belitung", 
    city: "Pangkalpinang", 
    region: "Sumatera", 
    isKorwil: false, 
    lat: -2.1319, 
    lng: 106.1161, 
    incidents: 1, 
    riskScore: 2, 
    level: "Rendah", 
    lastYear: 2025, 
    status: "Sudah",
    gmapsUrl: "https://www.google.com/maps/search/?api=1&query=KPw+BI+Provinsi+Kepulauan+Bangka+Belitung%2C+Pangkalpinang%2C+Indonesia",
    address: "Komplek Perkantoran Terpadu Pemprov Babel, Pangkalpinang 33148",
    lkaAlternatif: "LKA Gedung Pemprov Bangka Belitung / KPwBI Palembang",
    disasterHazards: "Genangan Pasang Air Laut (Sedang), Cuaca Ekstrem Pesisir (Rendah)",
    currentStatus: "Normal Stabil"
  },
  { 
    id: "kpwbi-bandar-lampung", 
    name: "KPwBI Provinsi Lampung", 
    city: "Bandar Lampung", 
    region: "Sumatera", 
    isKorwil: false, 
    lat: -5.3971, 
    lng: 105.2668, 
    incidents: 4, 
    riskScore: 8, 
    level: "Sedang", 
    lastYear: 2025, 
    status: "Sudah",
    gmapsUrl: "https://www.google.com/maps/search/?api=1&query=KPw+BI+Provinsi+Lampung%2C+Bandar+Lampung%2C+Indonesia",
    address: "Jl. Hasanuddin No. 38, Telukbetung, Bandar Lampung 35211",
    lkaAlternatif: "LKA Gedung Pemprov Lampung / KPwBI Banten Serang",
    disasterHazards: "Erupsi Gunung Anak Krakatau & Tsunami Selat Sunda (Tinggi), Banjir Rob (Sedang)",
    currentStatus: "Normal Waspada"
  },

  // JAWA (14 Satker)
  { 
    id: "kpwbi-dki-jakarta", 
    name: "KPwBI Provinsi DKI Jakarta", 
    city: "Jakarta", 
    region: "Jawa", 
    isKorwil: false, 
    lat: -6.2088, 
    lng: 106.8456, 
    incidents: 6, 
    riskScore: 9, 
    level: "Sedang", 
    lastYear: 2025, 
    status: "Sudah",
    gmapsUrl: "https://www.google.com/maps/search/?api=1&query=KPw+BI+Provinsi+DKI+Jakarta%2C+Jakarta%2C+Indonesia",
    address: "Jl. Prajurit KKO Usman & Harun No. 42, Senen, Jakarta Pusat 10410",
    lkaAlternatif: "Alternate Office Kompleks Sinergi Karawang / Kantor Pusat BI",
    disasterHazards: "Banjir Pesisir Rob & DAS Ciliwung (Tinggi), Aksi Unjuk Rasa Nasional (Tinggi)",
    currentStatus: "Normal Waspada"
  },
  { 
    id: "kpwbi-serang", 
    name: "KPwBI Provinsi Banten", 
    city: "Serang", 
    region: "Jawa", 
    isKorwil: false, 
    lat: -6.1104, 
    lng: 106.1622, 
    incidents: 3, 
    riskScore: 6, 
    level: "Sedang", 
    lastYear: 2025, 
    status: "Sudah",
    gmapsUrl: "https://www.google.com/maps/search/?api=1&query=KPw+BI+Provinsi+Banten%2C+Serang%2C+Indonesia",
    address: "Jl. Raya Pandeglang KM 7, Palima, Serang, Banten 42171",
    lkaAlternatif: "LKA Gedung KPwBI DKI Jakarta / KP3B Pemprov Banten",
    disasterHazards: "Tsunami Selat Sunda & Erupsi Anak Krakatau (Tinggi), Banjir Luapan Cibanten (Sedang)",
    currentStatus: "Normal Stabil"
  },
  { 
    id: "kpwbi-bandung", 
    name: "KPwBI Provinsi Jawa Barat", 
    city: "Bandung", 
    region: "Jawa", 
    isKorwil: false, 
    lat: -6.9175, 
    lng: 107.6191, 
    incidents: 5, 
    riskScore: 8, 
    level: "Sedang", 
    lastYear: 2025, 
    status: "Sudah",
    gmapsUrl: "https://www.google.com/maps/search/?api=1&query=KPw+BI+Provinsi+Jawa+Barat%2C+Bandung%2C+Indonesia",
    address: "Jl. Braga No. 108, Bandung, Jawa Barat 40111",
    lkaAlternatif: "LKA Gedung Pemprov Gedung Sate / KPwBI Cirebon / Karawang",
    disasterHazards: "Gempa Sesar Lembang (Sangat Tinggi), Banjir Luapan DAS Citarum (Tinggi), Longsor",
    currentStatus: "Normal Siaga"
  },
  { 
    id: "kpwbi-cirebon", 
    name: "KPwBI Cirebon", 
    city: "Cirebon", 
    region: "Jawa", 
    isKorwil: false, 
    lat: -6.7320, 
    lng: 108.5523, 
    incidents: 2, 
    riskScore: 4, 
    level: "Rendah", 
    lastYear: 2024, 
    status: "Belum",
    gmapsUrl: "https://www.google.com/maps/search/?api=1&query=KPw+BI+Cirebon%2C+Cirebon%2C+Indonesia",
    address: "Jl. Yos Sudarso No. 5, Cirebon, Jawa Barat 45111",
    lkaAlternatif: "LKA Kantor Layanan Perbankan Cirebon / KPwBI Tegal",
    disasterHazards: "Banjir Rob Pesisir Cirebon (Sedang), Cuaca Ekstrem Pantai Utara (Sedang)",
    currentStatus: "Normal Stabil"
  },
  { 
    id: "kpwbi-tasikmalaya", 
    name: "KPwBI Tasikmalaya", 
    city: "Tasikmalaya", 
    region: "Jawa", 
    isKorwil: false, 
    lat: -7.3274, 
    lng: 108.2207, 
    incidents: 2, 
    riskScore: 5, 
    level: "Sedang", 
    lastYear: 2025, 
    status: "Sudah",
    gmapsUrl: "https://www.google.com/maps/search/?api=1&query=KPw+BI+Tasikmalaya%2C+Tasikmalaya%2C+Indonesia",
    address: "Jl. Sutisna Senjaya No. 1, Tasikmalaya, Jawa Barat 46112",
    lkaAlternatif: "LKA Gedung Pemkot Tasikmalaya / KPwBI Bandung",
    disasterHazards: "Tanah Longsor Jalur Priangan Timur (Tinggi), Gempa Sesar Darat (Sedang)",
    currentStatus: "Normal Stabil"
  },
  { 
    id: "kpwbi-semarang", 
    name: "KPwBI Provinsi Jawa Tengah", 
    city: "Semarang", 
    region: "Jawa", 
    isKorwil: false, 
    lat: -6.9667, 
    lng: 110.4167, 
    incidents: 4, 
    riskScore: 7, 
    level: "Sedang", 
    lastYear: 2025, 
    status: "Sudah",
    gmapsUrl: "https://www.google.com/maps/search/?api=1&query=KPw+BI+Provinsi+Jawa+Tengah%2C+Semarang%2C+Indonesia",
    address: "Jl. Imam Bardjo No. 4, Pleburan, Semarang, Jawa Tengah 50241",
    lkaAlternatif: "LKA Gedung Kantor Pemprov Jateng / KPwBI Solo",
    disasterHazards: "Banjir Rob Pantura & Genangan Kaligawe (Tinggi), Gempa Sesar Kaligarang (Sedang)",
    currentStatus: "Normal Waspada"
  },
  { 
    id: "kpwbi-tegal", 
    name: "KPwBI Tegal", 
    city: "Tegal", 
    region: "Jawa", 
    isKorwil: false, 
    lat: -6.8694, 
    lng: 109.1402, 
    incidents: 1, 
    riskScore: 3, 
    level: "Rendah", 
    lastYear: 2024, 
    status: "Belum",
    gmapsUrl: "https://www.google.com/maps/search/?api=1&query=KPw+BI+Tegal%2C+Tegal%2C+Indonesia",
    address: "Jl. Dr. Sutomo No. 53, Tegal, Jawa Tengah 52113",
    lkaAlternatif: "LKA Gedung Kantor Pemkot Tegal / KPwBI Cirebon",
    disasterHazards: "Banjir Rob Pesisir Tegal (Sedang), Cuaca Ekstrem Laut Jawa (Sedang)",
    currentStatus: "Normal Stabil"
  },
  { 
    id: "kpwbi-purwokerto", 
    name: "KPwBI Purwokerto", 
    city: "Purwokerto", 
    region: "Jawa", 
    isKorwil: false, 
    lat: -7.4243, 
    lng: 109.2302, 
    incidents: 2, 
    riskScore: 4, 
    level: "Rendah", 
    lastYear: 2025, 
    status: "Sudah",
    gmapsUrl: "https://www.google.com/maps/search/?api=1&query=KPw+BI+Purwokerto%2C+Purwokerto%2C+Indonesia",
    address: "Jl. Jend. Gatot Subroto No. 98, Purwokerto, Jawa Tengah 53116",
    lkaAlternatif: "LKA Gedung Kantor Pemkab Banyumas / KPwBI Tegal",
    disasterHazards: "Erupsi Gunung Slamet & Hujan Abu (Sedang), Tanah Longsor Lereng (Sedang)",
    currentStatus: "Normal Stabil"
  },
  { 
    id: "kpwbi-solo", 
    name: "KPwBI Solo", 
    city: "Surakarta", 
    region: "Jawa", 
    isKorwil: false, 
    lat: -7.5755, 
    lng: 110.8243, 
    incidents: 2, 
    riskScore: 4, 
    level: "Rendah", 
    lastYear: 2025, 
    status: "Sudah",
    gmapsUrl: "https://www.google.com/maps/search/?api=1&query=KPw+BI+Solo%2C+Surakarta%2C+Indonesia",
    address: "Jl. Jend. Sudirman No. 15, Surakarta, Jawa Tengah 57111",
    lkaAlternatif: "LKA Kantor Layanan Mitra Solo / KPwBI DI Yogyakarta",
    disasterHazards: "Banjir Luapan Sungai Bengawan Solo (Sedang), Erupsi Abu Merapi (Sedang)",
    currentStatus: "Normal Stabil"
  },
  { 
    id: "kpwbi-yogyakarta", 
    name: "KPwBI Provinsi Daerah Istimewa Yogyakarta", 
    city: "Yogyakarta", 
    region: "Jawa", 
    isKorwil: false, 
    lat: -7.7956, 
    lng: 110.3695, 
    incidents: 4, 
    riskScore: 8, 
    level: "Sedang", 
    lastYear: 2025, 
    status: "Sudah",
    gmapsUrl: "https://www.google.com/maps/search/?api=1&query=KPw+BI+Provinsi+Daerah+Istimewa+Yogyakarta%2C+Yogyakarta%2C+Indonesia",
    address: "Jl. Panembahan Senopati No. 4-6, Gondomanan, Yogyakarta 55121",
    lkaAlternatif: "LKA Gedung Pemda DIY Kepatihan / KPwBI Solo",
    disasterHazards: "Erupsi Gunung Merapi (Tinggi), Gempa Sesar Opak Tektonik (Tinggi), Banjir Lahar Code",
    currentStatus: "Normal Waspada"
  },
  { 
    id: "kpwbi-surabaya", 
    name: "KPwBI Provinsi Jawa Timur", 
    city: "Surabaya", 
    region: "Jawa", 
    isKorwil: true, 
    lat: -7.2575, 
    lng: 112.7521, 
    incidents: 6, 
    riskScore: 9, 
    level: "Sedang", 
    lastYear: 2025, 
    status: "Sudah",
    gmapsUrl: "https://www.google.com/maps/search/?api=1&query=KPw+BI+Provinsi+Jawa+Timur%2C+Surabaya%2C+Indonesia",
    address: "Jl. Pahlawan No. 105, Krembangan, Surabaya, Jawa Timur 60174",
    lkaAlternatif: "LKA Gedung Mayjen Sungkono Surabaya / KPwBI Malang",
    disasterHazards: "Banjir Rob Kalimas & Pasut (Tinggi), Gempa Sesar Waru-Surabaya (Sedang), Unjuk Rasa",
    currentStatus: "Normal Waspada"
  },
  { 
    id: "kpwbi-malang", 
    name: "KPwBI Malang", 
    city: "Malang", 
    region: "Jawa", 
    isKorwil: false, 
    lat: -7.9666, 
    lng: 112.6326, 
    incidents: 3, 
    riskScore: 6, 
    level: "Sedang", 
    lastYear: 2025, 
    status: "Sudah",
    gmapsUrl: "https://www.google.com/maps/search/?api=1&query=KPw+BI+Malang%2C+Malang%2C+Indonesia",
    address: "Jl. Merdeka Utara No. 7, Kauman, Klojen, Malang, Jawa Timur 65119",
    lkaAlternatif: "LKA Gedung Kantor Pemkot Malang / KPwBI Surabaya",
    disasterHazards: "Erupsi Gunung Semeru & Bromo (Tinggi), Gempa Sesar Darat Malang (Sedang)",
    currentStatus: "Normal Stabil"
  },
  { 
    id: "kpwbi-kediri", 
    name: "KPwBI Kediri", 
    city: "Kediri", 
    region: "Jawa", 
    isKorwil: false, 
    lat: -7.8480, 
    lng: 112.0178, 
    incidents: 2, 
    riskScore: 4, 
    level: "Rendah", 
    lastYear: 2025, 
    status: "Sudah",
    gmapsUrl: "https://www.google.com/maps/search/?api=1&query=KPw+BI+Kediri%2C+Kediri%2C+Indonesia",
    address: "Jl. Brawijaya No. 2, Pocanan, Kota Kediri, Jawa Timur 64123",
    lkaAlternatif: "LKA Gedung Kantor Pemkot Kediri / KPwBI Malang",
    disasterHazards: "Erupsi Gunung Kelud Lontaran Abu & Lahar Hujan (Tinggi), Banjir Brantas (Sedang)",
    currentStatus: "Normal Stabil"
  },
  { 
    id: "kpwbi-jember", 
    name: "KPwBI Jember", 
    city: "Jember", 
    region: "Jawa", 
    isKorwil: false, 
    lat: -8.1724, 
    lng: 113.7007, 
    incidents: 3, 
    riskScore: 6, 
    level: "Sedang", 
    lastYear: 2024, 
    status: "Belum",
    gmapsUrl: "https://www.google.com/maps/search/?api=1&query=KPw+BI+Jember%2C+Jember%2C+Indonesia",
    address: "Jl. Gajah Mada No. 224, Jember Kidul, Kaliwates, Jember, Jawa Timur 68131",
    lkaAlternatif: "LKA Gedung Pemkab Jember / KPwBI Surabaya",
    disasterHazards: "Gempa Megathrust Selatan Jawa & Tsunami (Tinggi), Erupsi Gunung Raung (Sedang)",
    currentStatus: "Normal Stabil"
  },

  // BALI & NUSA TENGGARA (3 Satker)
  { 
    id: "kpwbi-denpasar", 
    name: "KPwBI Provinsi Bali", 
    city: "Denpasar", 
    region: "Bali & Nusa Tenggara", 
    isKorwil: true, 
    lat: -8.6705, 
    lng: 115.2126, 
    incidents: 5, 
    riskScore: 9, 
    level: "Sedang", 
    lastYear: 2023, 
    status: "Belum",
    gmapsUrl: "https://www.google.com/maps/search/?api=1&query=KPw+BI+Provinsi+Bali%2C+Denpasar%2C+Indonesia",
    address: "Jl. Letda Tantular No. 4, Renon, Denpasar Timur, Kota Denpasar, Bali 80234",
    lkaAlternatif: "LKA Gedung Bappeda Prov. Bali / KPwBI Mataram",
    disasterHazards: "Erupsi Gunung Agung & Sebaran Abu Vulkanik (Tinggi), Gempa Megathrust Bali (Sedang)",
    currentStatus: "Normal Waspada"
  },
  { 
    id: "kpwbi-mataram", 
    name: "KPwBI Provinsi Nusa Tenggara Barat", 
    city: "Mataram", 
    region: "Bali & Nusa Tenggara", 
    isKorwil: false, 
    lat: -8.5833, 
    lng: 116.1167, 
    incidents: 4, 
    riskScore: 8, 
    level: "Sedang", 
    lastYear: 2025, 
    status: "Sudah",
    gmapsUrl: "https://www.google.com/maps/search/?api=1&query=KPw+BI+Provinsi+Nusa+Tenggara+Barat%2C+Mataram%2C+Indonesia",
    address: "Jl. Pejanggik No. 40, Mataram Barat, Selaparang, Mataram, NTB 83126",
    lkaAlternatif: "LKA Gedung Kantor Pemprov NTB / KPwBI Denpasar",
    disasterHazards: "Gempa Sesar Naik Busur Belakang Flores (Tinggi), Erupsi Rinjani (Sedang)",
    currentStatus: "Normal Stabil"
  },
  { 
    id: "kpwbi-kupang", 
    name: "KPwBI Provinsi Nusa Tenggara Timur", 
    city: "Kupang", 
    region: "Bali & Nusa Tenggara", 
    isKorwil: false, 
    lat: -10.1772, 
    lng: 123.6078, 
    incidents: 4, 
    riskScore: 8, 
    level: "Sedang", 
    lastYear: 2025, 
    status: "Sudah",
    gmapsUrl: "https://www.google.com/maps/search/?api=1&query=KPw+BI+Provinsi+Nusa+Tenggara+Timur%2C+Kupang%2C+Indonesia",
    address: "Jl. Tom Pello No. 2, Oebobo, Kota Kupang, NTT 85117",
    lkaAlternatif: "LKA Gedung Kantor Pemprov NTT / KPwBI Mataram",
    disasterHazards: "Siklon Tropis Seroja & Cuaca Ekstrem (Tinggi), Gempa Laut Timor (Sedang)",
    currentStatus: "Normal Stabil"
  },

  // KALIMANTAN (6 Satker)
  { 
    id: "kpwbi-pontianak", 
    name: "KPwBI Provinsi Kalimantan Barat", 
    city: "Pontianak", 
    region: "Kalimantan", 
    isKorwil: false, 
    lat: -0.0263, 
    lng: 109.3425, 
    incidents: 3, 
    riskScore: 5, 
    level: "Sedang", 
    lastYear: 2025, 
    status: "Sudah",
    gmapsUrl: "https://www.google.com/maps/search/?api=1&query=KPw+BI+Provinsi+Kalimantan+Barat%2C+Pontianak%2C+Indonesia",
    address: "Jl. Rahadi Usman No. 3, Tengah, Pontianak Kota, Pontianak, Kalbar 78111",
    lkaAlternatif: "LKA Gedung Kantor Bappeda Kalbar / KPwBI Banjarmasin",
    disasterHazards: "Karhutla Gambut & Kabut Asap Pekat (Tinggi), Banjir DAS Kapuas (Sedang)",
    currentStatus: "Normal Stabil"
  },
  { 
    id: "kpwbi-palangka-raya", 
    name: "KPwBI Provinsi Kalimantan Tengah", 
    city: "Palangka Raya", 
    region: "Kalimantan", 
    isKorwil: false, 
    lat: -2.2161, 
    lng: 113.9145, 
    incidents: 4, 
    riskScore: 7, 
    level: "Sedang", 
    lastYear: 2024, 
    status: "Belum",
    gmapsUrl: "https://www.google.com/maps/search/?api=1&query=KPw+BI+Provinsi+Kalimantan+Tengah%2C+Palangka+Raya%2C+Indonesia",
    address: "Jl. Diponegoro No. 11, Palangka, Jekan Raya, Palangka Raya, Kalteng 73111",
    lkaAlternatif: "LKA Gedung Kantor Pemprov Kalteng / KPwBI Banjarmasin",
    disasterHazards: "Karhutla Skala Luas & Polusi ISPU Berbahaya (Tinggi), Banjir Sungai Kahayan (Sedang)",
    currentStatus: "Normal Waspada"
  },
  { 
    id: "kpwbi-banjarmasin", 
    name: "KPwBI Provinsi Kalimantan Selatan", 
    city: "Banjarmasin", 
    region: "Kalimantan", 
    isKorwil: true, 
    lat: -3.3186, 
    lng: 114.5944, 
    incidents: 4, 
    riskScore: 8, 
    level: "Sedang", 
    lastYear: 2025, 
    status: "Sudah",
    gmapsUrl: "https://www.google.com/maps/search/?api=1&query=KPw+BI+Provinsi+Kalimantan+Selatan%2C+Banjarmasin%2C+Indonesia",
    address: "Jl. Lambung Mangkurat No. 15, Kertak Baru Ulu, Banjarmasin Tengah, Kalsel 70111",
    lkaAlternatif: "LKA Kantor Layanan Perbankan Banjarbaru / KPwBI Balikpapan",
    disasterHazards: "Banjir Luapan Sungai Barito & Pasut (Tinggi), Rob Pesisir Selatan (Sedang)",
    currentStatus: "Normal Stabil"
  },
  { 
    id: "kpwbi-samarinda", 
    name: "KPwBI Provinsi Kalimantan Timur", 
    city: "Samarinda", 
    region: "Kalimantan", 
    isKorwil: false, 
    lat: -0.5022, 
    lng: 117.1536, 
    incidents: 3, 
    riskScore: 5, 
    level: "Sedang", 
    lastYear: 2025, 
    status: "Sudah",
    gmapsUrl: "https://www.google.com/maps/search/?api=1&query=KPw+BI+Provinsi+Kalimantan+Timur%2C+Samarinda%2C+Indonesia",
    address: "Jl. Gajah Mada No. 1, Jawa, Samarinda Ulu, Samarinda, Kaltim 75112",
    lkaAlternatif: "LKA Kantor KPwBI Balikpapan / Kompleks IKN Nusantara",
    disasterHazards: "Banjir Luapan Sungai Mahakam (Tinggi), Longsoran Lereng Tambang (Sedang)",
    currentStatus: "Normal Stabil"
  },
  { 
    id: "kpwbi-tarakan", 
    name: "KPwBI Provinsi Kalimantan Utara", 
    city: "Tarakan", 
    region: "Kalimantan", 
    isKorwil: false, 
    lat: 3.3275, 
    lng: 117.5853, 
    incidents: 1, 
    riskScore: 2, 
    level: "Rendah", 
    lastYear: 2024, 
    status: "Belum",
    gmapsUrl: "https://www.google.com/maps/search/?api=1&query=KPw+BI+Provinsi+Kalimantan+Utara%2C+Tarakan%2C+Indonesia",
    address: "Jl. Mulawarman No. 1, Karang Anyar Barat, Tarakan Barat, Kaltara 77111",
    lkaAlternatif: "LKA Gedung Pemprov Kaltara Tanjung Selor / KPwBI Balikpapan",
    disasterHazards: "Gelombang Pasang Perbatasan (Sedang), Cuaca Ekstrem Laut (Sedang)",
    currentStatus: "Normal Stabil"
  },
  { 
    id: "kpwbi-balikpapan", 
    name: "KPwBI Balikpapan", 
    city: "Balikpapan", 
    region: "Kalimantan", 
    isKorwil: false, 
    lat: -1.2654, 
    lng: 116.8312, 
    incidents: 2, 
    riskScore: 4, 
    level: "Rendah", 
    lastYear: 2025, 
    status: "Sudah",
    gmapsUrl: "https://www.google.com/maps/search/?api=1&query=KPw+BI+Balikpapan%2C+Balikpapan%2C+Indonesia",
    address: "Jl. Jend. Sudirman No. 1, Klandasan Ulu, Balikpapan Kota, Kaltim 76111",
    lkaAlternatif: "LKA Kantor KPwBI Samarinda / Kompleks IKN Nusantara",
    disasterHazards: "Banjir Genangan Kota & Rob Teluk Balikpapan (Sedang), Cuaca Ekstrem (Sedang)",
    currentStatus: "Normal Stabil"
  },

  // SULAWESI, MALUKU, PAPUA (10 Satker)
  { 
    id: "kpwbi-manado", 
    name: "KPwBI Provinsi Sulawesi Utara", 
    city: "Manado", 
    region: "Sulawesi, Maluku, & Papua", 
    isKorwil: false, 
    lat: 1.4748, 
    lng: 124.8428, 
    incidents: 6, 
    riskScore: 14, 
    level: "Tinggi", 
    lastYear: 2025, 
    status: "Sudah",
    gmapsUrl: "https://www.google.com/maps/search/?api=1&query=KPw+BI+Provinsi+Sulawesi+Utara%2C+Manado%2C+Indonesia",
    address: "Jl. 17 Agustus No. 4, Teling Atas, Wanea, Kota Manado, Sulut 95119",
    lkaAlternatif: "LKA Gedung Kantor Pemprov Sulut / KPwBI Gorontalo",
    disasterHazards: "Erupsi Gunung Lokon & Soputan (Tinggi), Gempa Laut Maluku (Tinggi), Banjir DAS Tondano",
    currentStatus: "Normal Siaga"
  },
  { 
    id: "kpwbi-palu", 
    name: "KPwBI Provinsi Sulawesi Tengah", 
    city: "Palu", 
    region: "Sulawesi, Maluku, & Papua", 
    isKorwil: false, 
    lat: -0.8917, 
    lng: 119.8708, 
    incidents: 4, 
    riskScore: 8, 
    level: "Sedang", 
    lastYear: 2025, 
    status: "Sudah",
    gmapsUrl: "https://www.google.com/maps/search/?api=1&query=KPw+BI+Provinsi+Sulawesi+Tengah%2C+Palu%2C+Indonesia",
    address: "Jl. Mohammad Hatta No. 23, Lolu Utara, Palu Timur, Kota Palu, Sulteng 94111",
    lkaAlternatif: "LKA Gedung Perkantoran Zona Ketinggian Palu / KPwBI Mamuju",
    disasterHazards: "Gempa Sesar Palu-Koro (Sangat Tinggi), Likuifaksi Tanah & Tsunami Teluk Palu",
    currentStatus: "Normal Siaga"
  },
  { 
    id: "kpwbi-mamuju", 
    name: "KPwBI Provinsi Sulawesi Barat", 
    city: "Mamuju", 
    region: "Sulawesi, Maluku, & Papua", 
    isKorwil: false, 
    lat: -2.6736, 
    lng: 118.8914, 
    incidents: 3, 
    riskScore: 6, 
    level: "Sedang", 
    lastYear: 2024, 
    status: "Belum",
    gmapsUrl: "https://www.google.com/maps/search/?api=1&query=KPw+BI+Provinsi+Sulawesi+Barat%2C+Mamuju%2C+Indonesia",
    address: "Jl. Yos Sudarso No. 1, Binanga, Mamuju, Sulawesi Barat 91511",
    lkaAlternatif: "LKA Gedung Kantor Pemprov Sulbar / KPwBI Makassar",
    disasterHazards: "Gempa Bumi Sesar Mamuju Thrust M>6 (Tinggi), Longsor Trans-Sulawesi (Sedang)",
    currentStatus: "Normal Stabil"
  },
  { 
    id: "kpwbi-makassar", 
    name: "KPwBI Provinsi Sulawesi Selatan", 
    city: "Makassar", 
    region: "Sulawesi, Maluku, & Papua", 
    isKorwil: true, 
    lat: -5.1477, 
    lng: 119.4327, 
    incidents: 8, 
    riskScore: 16, 
    level: "Sangat Tinggi", 
    lastYear: 2025, 
    status: "Sudah",
    gmapsUrl: "https://www.google.com/maps/search/?api=1&query=KPw+BI+Provinsi+Sulawesi+Selatan%2C+Makassar%2C+Indonesia",
    address: "Jl. Jend. Sudirman No. 24, Sawerigading, Ujung Pandang, Makassar, Sulsel 90111",
    lkaAlternatif: "LKA Gedung Diklat BI Makassar / Bappeda Prov. Sulsel",
    disasterHazards: "Banjir Genangan Pesisir & Rob (Tinggi), Unjuk Rasa Mahasiswa Flyover (Tinggi)",
    currentStatus: "Normal Waspada"
  },
  { 
    id: "kpwbi-kendari", 
    name: "KPwBI Provinsi Sulawesi Tenggara", 
    city: "Kendari", 
    region: "Sulawesi, Maluku, & Papua", 
    isKorwil: false, 
    lat: -3.9722, 
    lng: 122.5144, 
    incidents: 3, 
    riskScore: 6, 
    level: "Sedang", 
    lastYear: 2025, 
    status: "Sudah",
    gmapsUrl: "https://www.google.com/maps/search/?api=1&query=KPw+BI+Provinsi+Sulawesi+Tenggara%2C+Kendari%2C+Indonesia",
    address: "Jl. Sultan Hasanuddin No. 1, Tipulu, Kendari Barat, Kota Kendari, Sultra 93121",
    lkaAlternatif: "LKA Gedung Kantor Pemprov Sultra / KPwBI Makassar",
    disasterHazards: "Banjir Luapan Sungai Wanggu (Tinggi), Gempa Sesar Lawanopo (Sedang)",
    currentStatus: "Normal Stabil"
  },
  { 
    id: "kpwbi-gorontalo", 
    name: "KPwBI Provinsi Gorontalo", 
    city: "Gorontalo", 
    region: "Sulawesi, Maluku, & Papua", 
    isKorwil: false, 
    lat: 0.5435, 
    lng: 123.0568, 
    incidents: 2, 
    riskScore: 5, 
    level: "Sedang", 
    lastYear: 2024, 
    status: "Belum",
    gmapsUrl: "https://www.google.com/maps/search/?api=1&query=KPw+BI+Provinsi+Gorontalo%2C+Gorontalo%2C+Indonesia",
    address: "Jl. Nani Wartabone No. 14, Biawao, Kota Selatan, Kota Gorontalo 96115",
    lkaAlternatif: "LKA Gedung Kantor Pemprov Gorontalo / KPwBI Manado",
    disasterHazards: "Banjir Luapan Danau Limboto (Tinggi), Gempa Sesar Gorontalo (Sedang)",
    currentStatus: "Normal Stabil"
  },
  { 
    id: "kpwbi-ambon", 
    name: "KPwBI Provinsi Maluku", 
    city: "Ambon", 
    region: "Sulawesi, Maluku, & Papua", 
    isKorwil: false, 
    lat: -3.6954, 
    lng: 128.1814, 
    incidents: 4, 
    riskScore: 8, 
    level: "Sedang", 
    lastYear: 2025, 
    status: "Sudah",
    gmapsUrl: "https://www.google.com/maps/search/?api=1&query=KPw+BI+Provinsi+Maluku%2C+Ambon%2C+Indonesia",
    address: "Jl. Pattimura No. 1, Uritetu, Sirimau, Kota Ambon, Maluku 97124",
    lkaAlternatif: "LKA Gedung Pemprov Maluku / KPwBI Ternate",
    disasterHazards: "Gempa Tektonik Patahan Banda (Tinggi), Tsunami Teluk Ambon (Tinggi)",
    currentStatus: "Normal Waspada"
  },
  { 
    id: "kpwbi-ternate", 
    name: "KPwBI Provinsi Maluku Utara", 
    city: "Ternate", 
    region: "Sulawesi, Maluku, & Papua", 
    isKorwil: false, 
    lat: 0.7893, 
    lng: 127.3871, 
    incidents: 3, 
    riskScore: 6, 
    level: "Sedang", 
    lastYear: 2025, 
    status: "Sudah",
    gmapsUrl: "https://www.google.com/maps/search/?api=1&query=KPw+BI+Provinsi+Maluku+Utara%2C+Ternate%2C+Indonesia",
    address: "Jl. Pahlawan Revolusi No. 1, Muhajirin, Ternate Tengah, Maluku Utara 97716",
    lkaAlternatif: "LKA Kantor Pemprov Sofifi / KPwBI Manado",
    disasterHazards: "Erupsi Gunung Gamalama & Lontaran Piroklastik (Tinggi), Gempa Laut Maluku (Sedang)",
    currentStatus: "Normal Stabil"
  },
  { 
    id: "kpwbi-jayapura", 
    name: "KPwBI Provinsi Papua", 
    city: "Jayapura", 
    region: "Sulawesi, Maluku, & Papua", 
    isKorwil: false, 
    lat: -2.5413, 
    lng: 140.7121, 
    incidents: 5, 
    riskScore: 12, 
    level: "Tinggi", 
    lastYear: 2025, 
    status: "Sudah",
    gmapsUrl: "https://www.google.com/maps/search/?api=1&query=KPw+BI+Provinsi+Papua%2C+Jayapura%2C+Indonesia",
    address: "Jl. Sam Ratulangi No. 1, Dok II, Jayapura Utara, Kota Jayapura, Papua 99112",
    lkaAlternatif: "LKA Gedung Kantor Pemprov Papua Dok II / KPwBI Manokwari",
    disasterHazards: "Gempa Dangkal Teluk Youtefa (Tinggi), Gangguan Kamtibmas / Separatisme (Tinggi)",
    currentStatus: "Normal Siaga"
  },
  { 
    id: "kpwbi-manokwari", 
    name: "KPwBI Provinsi Papua Barat", 
    city: "Manokwari", 
    region: "Sulawesi, Maluku, & Papua", 
    isKorwil: false, 
    lat: -0.8614, 
    lng: 134.0620, 
    incidents: 3, 
    riskScore: 7, 
    level: "Sedang", 
    lastYear: 2024, 
    status: "Belum",
    gmapsUrl: "https://www.google.com/maps/search/?api=1&query=KPw+BI+Provinsi+Papua+Barat%2C+Manokwari%2C+Indonesia",
    address: "Jl. Merdeka No. 1, Manokwari Barat, Manokwari, Papua Barat 98311",
    lkaAlternatif: "LKA Gedung Kantor Pemprov Papua Barat Arfai / KPwBI Jayapura",
    disasterHazards: "Gempa Sesar Ransiki (Tinggi), Gelombang Pasang Pesisir Utara (Sedang)",
    currentStatus: "Normal Stabil"
  }
];

// ENTITAS TUNGGAL: KANTOR PUSAT BANK INDONESIA
const KANTOR_PUSAT_DATA = {
  id: "kpwbi-kantor-pusat",
  name: "Kantor Pusat Bank Indonesia (KP)",
  city: "Jakarta Pusat",
  region: "Jawa",
  isKorwil: true,
  isKantorPusat: true,
  lat: -6.1808,
  lng: 106.8227,
  incidents: 8,
  riskScore: 12,
  level: "Sedang",
  lastYear: 2025,
  status: "Sudah",
  gmapsUrl: "https://www.google.com/maps/search/?api=1&query=Kantor+Pusat+Bank+Indonesia%2C+Jakarta%2C+Indonesia",
  address: "Jl. M.H. Thamrin No. 2, Gambir, Jakarta Pusat, DKI Jakarta 10110",
  lkaAlternatif: "Alternate Office Kompleks Sinergi BI Karawang & Gedung Bappeda DKI",
  disasterHazards: "Banjir Pesisir Rob & Genangan Thamrin (Sedang), Unjuk Rasa Massa Nasional (Tinggi)",
  currentStatus: "Normal Waspada"
};

const ALL_OFFICES_DATA = [KANTOR_PUSAT_DATA, ...KPWDN_DATA];

// Master Emergency Contacts Directory (Crisis Management Team BCM Bank Indonesia)
const EMERGENCY_CONTACTS = [
  {
    id: "contact-01",
    name: "Dr. Budi Santoso, S.E., M.B.A.",
    level: "Direktur Eksekutif DMR (Ketua CMT BI)",
    satker: "Departemen Manajemen Risiko (DMR)",
    email: "budi_s@bi.go.id",
    phone: "+62 811-1234-5678",
    status: "Siaga 24/7"
  },
  {
    id: "contact-02",
    name: "Ir. Hendra Wijaya, M.Sc.",
    level: "Kepala Grup Resiliensi Siber & CSIRT",
    satker: "Departemen Layanan Digital & Sistem (DLDS)",
    email: "hendra_w@bi.go.id",
    phone: "+62 812-9876-5432",
    status: "Siaga 24/7"
  },
  {
    id: "contact-03",
    name: "Siti Rahmawati, S.E., M.M.",
    level: "Kepala Divisi Operasional Infrastruktur SP",
    satker: "Departemen Kebijakan Sistem Pembayaran (DKSP)",
    email: "siti_r@bi.go.id",
    phone: "+62 813-1122-3344",
    status: "Siaga 24/7"
  },
  {
    id: "contact-04",
    name: "Kolonel (Purn.) Agus Supriyadi",
    level: "Kepala Divisi Pengamanan Khazanah & Fisik",
    satker: "Departemen Layanan Administrasi & Fasilitas (DLAF)",
    email: "agus_sup@bi.go.id",
    phone: "+62 811-8899-0011",
    status: "Siaga 24/7"
  },
  {
    id: "contact-05",
    name: "dr. Maya Indah Lestari, Sp.Ok.",
    level: "Kepala Tim Tanggap Darurat Medis & K3",
    satker: "Departemen Sumber Daya Manusia (DSDM)",
    email: "maya_il@bi.go.id",
    phone: "+62 815-5566-7788",
    status: "Siaga 24/7"
  },
  {
    id: "contact-06",
    name: "Raden Mas Bambang Hermanto",
    level: "Koordinator BCM Wilayah Jawa (Korwil)",
    satker: "KPwBI Provinsi Jawa Barat (Bandung)",
    email: "bambang_h@bi.go.id",
    phone: "+62 812-3344-5566",
    status: "Siaga"
  },
  {
    id: "contact-07",
    name: "Ir. Donny Pattinama",
    level: "Koordinator BCM Wilayah Sulampua (Korwil)",
    satker: "KPwBI Provinsi Sulawesi Selatan (Makassar)",
    email: "donny_p@bi.go.id",
    phone: "+62 811-7788-9900",
    status: "Siaga"
  },
  {
    id: "contact-08",
    name: "Unit Reaksi Cepat BCM (Helpdesk 24 Jam)",
    level: "Crisis Helpdesk & Incident Logging Center",
    satker: "Departemen Manajemen Risiko (DMR)",
    email: "cmt_dmr@bi.go.id",
    phone: "(021) 2981-0000",
    status: "Aktif 24/7"
  }
];

// Connected & Linear 5x5 Heatmap Data Model (Natural, Man Made, Technology)
const HEATMAP_ENTITIES = {
  // Row 0 = Dampak 5 (Catastrophic)
  "0_4": { // D5, L5
    natural: ["KPwBI Provinsi Sumatera Barat (Padang)"],
    manmade: ["KPwBI Provinsi DKI Jakarta"],
    tech: ["BI-RTGS (Real-Time Gross Settlement)"]
  },
  "0_3": { // D5, L4
    natural: ["KPwBI Provinsi Jawa Barat (Bandung)", "KPwBI Provinsi Sulawesi Tengah (Palu)"],
    manmade: ["KPwBI Provinsi Papua (Jayapura)"],
    tech: ["BI-FAST (Fast Payment 24/7)"]
  },
  "0_2": { // D5, L3
    natural: ["KPwBI Provinsi DI Yogyakarta", "KPwBI Provinsi Aceh"],
    manmade: ["KPwBI Provinsi Jawa Barat (Bandung)"],
    tech: ["Core Banking System (CBS BI)", "Pusat Data (EDW BI)"]
  },
  "0_1": { // D5, L2
    natural: ["KPwBI Provinsi Nusa Tenggara Timur"],
    manmade: ["KPwBI Provinsi Jawa Timur (Surabaya)"],
    tech: ["SKNBI (Sistem Kliring Nasional)"]
  },
  "0_0": { // D5, L1
    natural: ["KPwBI Provinsi Sulawesi Barat (Mamuju)"],
    manmade: ["KPwBI Provinsi Papua Barat (Manokwari)"],
    tech: ["SI-SSSS (Scripless Securities Settlement)"]
  },

  // Row 1 = Dampak 4 (Major)
  "1_4": { // D4, L5
    natural: ["KPwBI Provinsi DKI Jakarta"],
    manmade: ["KPwBI Provinsi Jawa Timur (Surabaya)"],
    tech: ["BI-ETP (Electronic Trading Platform)"]
  },
  "1_3": { // D4, L4
    natural: ["KPwBI Provinsi Jawa Tengah (Semarang)", "KPwBI Provinsi Banten"],
    manmade: ["KPwBI Provinsi Sumatera Utara (Medan)"],
    tech: ["ANTASENA (Sistem Pelaporan Bank)"]
  },
  "1_2": { // D4, L3
    natural: ["KPwBI Provinsi Riau (Pekanbaru)", "KPwBI Provinsi Kalimantan Barat"],
    manmade: ["KPwBI Provinsi Sulawesi Selatan (Makassar)"],
    tech: ["SISMONTAVAR (Monitoring Valas)", "SI-BISSSS (Settlement SBI)"]
  },
  "1_1": { // D4, L2
    natural: ["KPwBI Provinsi Sulawesi Utara (Manado)", "KPwBI Provinsi Maluku (Ambon)"],
    manmade: ["KPwBI Provinsi Bali (Denpasar)"],
    tech: ["FOMOBO (Front Middle Back Office)", "Bloomberg Terminal"]
  },
  "1_0": { // D4, L1
    natural: ["KPwBI Provinsi Nusa Tenggara Barat"],
    manmade: ["KPwBI Provinsi Kalimantan Timur (Samarinda)"],
    tech: ["Refinitiv Dealing", "HARTIS Treasury"]
  },

  // Row 2 = Dampak 3 (Moderate)
  "2_4": { // D3, L5
    natural: ["KPwBI Tasikmalaya"],
    manmade: ["KPwBI Solo / Surakarta"],
    tech: ["ERPHRIS (ERP SDM & Payroll)"]
  },
  "2_3": { // D3, L4
    natural: ["KPwBI Cirebon", "KPwBI Malang"],
    manmade: ["KPwBI Provinsi Jawa Tengah (Semarang)"],
    tech: ["BI-WEB (Portal Komunikasi Publik)"]
  },
  "2_2": { // D3, L3
    natural: ["KPwBI Provinsi Sumatera Utara (Medan)", "KPwBI Provinsi Kalimantan Tengah"],
    manmade: ["KPwBI Provinsi DI Yogyakarta"],
    tech: ["NCP (New Clearing Platform)", "GMMP (Market Monitoring)"]
  },
  "2_1": { // D3, L2
    natural: ["KPwBI Provinsi Sulawesi Selatan (Makassar)"],
    manmade: ["KPwBI Provinsi Sumatera Selatan (Palembang)"],
    tech: ["BI-SILK (Sistem Layanan Kas)", "En-Reporting SWIFT"]
  },
  "2_0": { // D3, L1
    natural: ["KPwBI Kediri"],
    manmade: ["KPwBI Provinsi Riau (Pekanbaru)"],
    tech: ["CISCO (CUIC Contact Center)", "SIMP Logistik"]
  },

  // Row 3 = Dampak 2 (Minor)
  "3_4": { // D2, L5
    natural: ["KPwBI Jember"],
    manmade: ["KPwBI Tegal"],
    tech: ["Aplikasi E-Office Internal"]
  },
  "3_3": { // D2, L4
    natural: ["KPwBI Purwokerto", "KPwBI Tegal"],
    manmade: ["KPwBI Cirebon"],
    tech: ["Portal Monitoring Absensi"]
  },
  "3_2": { // D2, L3
    natural: ["KPwBI Provinsi Lampung", "KPwBI Provinsi Jambi"],
    manmade: ["KPwBI Provinsi Lampung"],
    tech: ["Dashboard Visualisasi Data"]
  },
  "3_1": { // D2, L2
    natural: ["KPwBI Provinsi Bengkulu", "KPwBI Provinsi Gorontalo"],
    manmade: ["KPwBI Provinsi Jambi"],
    tech: ["Aplikasi Arsip Dokumen"]
  },
  "3_0": { // D2, L1
    natural: ["KPwBI Provinsi Kalimantan Selatan"],
    manmade: ["KPwBI Purwokerto"],
    tech: ["Aplikasi Helpdesk Internal"]
  },

  // Row 4 = Dampak 1 (Insignificant)
  "4_4": { // D1, L5
    natural: ["KPwBI Sibolga"],
    manmade: ["KPwBI Pematangsiantar"],
    tech: ["Sistem Display Antrean Kas"]
  },
  "4_3": { // D1, L4
    natural: ["KPwBI Pematangsiantar"],
    manmade: ["KPwBI Lhokseumawe"],
    tech: ["Papan Pengumuman Digital"]
  },
  "4_2": { // D1, L3
    natural: ["KPwBI Provinsi Kepulauan Riau (Tanjungpinang)"],
    manmade: ["KPwBI Provinsi Bangka Belitung"],
    tech: ["Portal Reservasi Ruang Rapat"]
  },
  "4_1": { // D1, L2
    natural: ["KPwBI Provinsi Bangka Belitung"],
    manmade: ["KPwBI Provinsi Kepulauan Riau (Tanjungpinang)"],
    tech: ["Sistem Pengunjung Tamu"]
  },
  "4_0": { // D1, L1
    natural: ["KPwBI Balikpapan", "KPwBI Lhokseumawe"],
    manmade: ["KPwBI Balikpapan", "KPwBI Sibolga"],
    tech: ["Aplikasi Inventaris ATK"]
  }
};


// =============================================================================
// 2. DISASTER CATEGORIES, SUB-CATEGORIES & CATALOG DATASET (PANDUAN RESPON CEPAT)
// =============================================================================

const DISASTER_SUB_CATEGORIES = {
  "Natural Disaster": [
    "Gempa Bumi Tektonik",
    "Banjir Bandang & Luapan Air",
    "Erupsi Gunung Api & Abu Vulkanik",
    "Angin Kencang / Puting Beliung",
    "Tanah Longsor",
    "Tsunami & Gempa Megathrust",
    "Kebakaran Hutan & Lahan (Karhutla)",
    "Gelombang Pasang / Rob",
    "Lainnya (Tulis Spesifik)"
  ],
  "Man Made Disaster": [
    "Huru-Hara & Kerusuhan Massa",
    "Unjuk Rasa / Demonstrasi Masif",
    "Kebakaran Gedung Kantor",
    "Terorisme / Ancaman Bom",
    "Sabotase Infrastruktur Kritis",
    "Gerakan Separatisme",
    "Konflik Sosial & Blokade Akses",
    "Kecelakaan Transportasi Darurat",
    "Lainnya (Tulis Spesifik)"
  ],
  "Technology Disaster": [
    "Serangan Ransomware & Enkripsi Data",
    "Hilang Jaringan (Network Outage / FO Putus)",
    "Pemadaman Listrik Total (Blackout / UPS Glitch)",
    "Gangguan Sistem Pembayaran (BI-FAST / RTGS)",
    "Serangan Phishing Masif & Kredensial",
    "DDoS Attack pada Gateway Publik",
    "Kegagalan Server / Storage Data Center",
    "Kebocoran Data Rahasia (Data Breach)",
    "Lainnya (Tulis Spesifik)"
  ]
};

// DISASTER CATALOG FOR BAGIAN 1 (HANYA ICON + NAMA PADA TAMPILAN DEPAN)
const DISASTER_CATALOG = [
  {
    id: "dis-gempa",
    name: "Gempa Bumi & Kerusakan Bangunan",
    icon: "🏚️",
    category: "Natural Disaster",
    quickAction: "Terapkan Drop, Cover, Hold On! Jauhi kaca dan partisi tinggi, jangan gunakan lift. Evakuasi ke titik kumpul terbuka setelah getaran berhenti.",
    pre: "Pemeriksaan struktural kelaikan gedung berkala, simulasi evakuasi mandiri (drill) 2x setahun, dan monitoring sensor BMKG / InaTEWS.",
    during: "Lindungi kepala di bawah meja kokoh. Jangan gunakan lift! Segera menuju Assembly Point saat guncangan selesai. Bawa tas darurat.",
    post: "Headcount personel via Floor Warden, laporkan status ke WA BCM DMR, asesmen kelayakan gedung oleh Tim K3 sebelum diizinkan masuk.",
    oneDriveUrl: "https://onedrive.live.com/?id=SOP_GEMPA_BI",
    videoUrl: "https://www.youtube.com/results?search_query=simulasi+gempa+bumi+kantor",
    supportSatker: "DLAF (Fasilitas & K3) & DSDM (Keselamatan Kerja)"
  },
  {
    id: "dis-banjir",
    name: "Banjir Bandang & Luapan Air",
    icon: "🌧️",
    category: "Natural Disaster",
    quickAction: "Pasang flood barrier ramp khazanah kas, matikan panel listrik area basement, amankan warkat dan uang rupiah ke lantai tinggi.",
    pre: "Pembersihan drainase sekeliling gedung, uji fungsi pompa submersible otomatis, dan monitoring debit sungai melalui EWS KMKTSI.",
    during: "Aktifkan barier banjir pintu khazanah, alihkan layanan kas publik ke Alternate Office jika akses lumpuh, evakuasi staf ke lantai atas.",
    post: "Penyedotan air lumpur, pengeringan dan uji isolasi grounding instalasi kabel listrik PLN sebelum dinyalakan kembali, desinfeksi area kas.",
    oneDriveUrl: "https://onedrive.live.com/?id=SOP_BANJIR_BI",
    videoUrl: "https://www.youtube.com/results?search_query=mitigasi+banjir+perkantoran",
    supportSatker: "DLAF (Fasilitas Khazanah) & DLDS (Kelistrikan Data Center)"
  },
  {
    id: "dis-tsunami",
    name: "Tsunami & Gempa Megathrust",
    icon: "🌊",
    category: "Natural Disaster",
    quickAction: "Segera evakuasi vertikal ke lantai 4 ke atas atau dataran tinggi jika terasa gempa kuat > 20 detik atau ada peringatan tsunami BMKG.",
    pre: "Penetapan rute evakuasi vertikal gedung shelter tsunami, pemasangan sirine peringatan dini, dan latihan evakuasi darurat pesisir.",
    during: "Jangan menunggu konfirmasi visual air laut surut! Segera berlari ke zona aman tsunami atau lantai atas gedung bertulang beton.",
    post: "Tetap berada di tempat evakuasi hingga peringatan tsunami resmi dicabut BMKG. Waspadai gelombang susulan.",
    oneDriveUrl: "https://onedrive.live.com/?id=SOP_TSUNAMI_BI",
    videoUrl: "https://www.youtube.com/results?search_query=evakuasi+tsunami+kantor",
    supportSatker: "DLAF (Shelter Evakuasi) & DSDM (Evakuasi Staf)"
  },
  {
    id: "dis-kualitas-udara",
    name: "Kualitas Udara Memburuk (Polusi & Kabut Asap / ISPU Berbahaya)",
    icon: "😷",
    category: "Natural Disaster",
    quickAction: "Wajibkan masker respirator N95 bagi seluruh pegawai. Aktifkan air purifier hepa filter dalam ruangan dan batasi ventilasi udara luar.",
    pre: "Monitoring indeks ISPU / PM2.5 real-time melalui EWS, stok masker N95 di poliklinik kantor, pengecekan seal dan filter udara AHU/HVAC gedung.",
    during: "Tutup rapat ventilasi udara luar gedung, operasikan AC presisi mode resirkulasi internal, berlakukan sistem kerja WFH bagi kelompok rentan.",
    post: "Penggantian filter HVAC gedung, pemeriksaan kesehatan paru berkala pegawai oleh dokter klinik BI, asesmen penurunan indeks polusi.",
    oneDriveUrl: "https://onedrive.live.com/?id=SOP_KUALITAS_UDARA_BI",
    videoUrl: "https://www.youtube.com/results?search_query=mitigasi+polusi+udara+kabut+asap",
    supportSatker: "DLAF (Fasilitas Udara) & DSDM (Kesehatan Staf)"
  },
  {
    id: "dis-gunung",
    name: "Erupsi Gunung Api & Abu Vulkanik",
    icon: "🗻",
    category: "Natural Disaster",
    quickAction: "Tutup sistem ventilasi udara sentral gedung untuk mencegah debu silika masuk ke ruang server dan khazanah. Wajibkan masker N95.",
    pre: "Pemantauan status level PVMBG (Waspada, Siaga, Awas), stok masker particulate N95, dan penyiapan filter udara cadangan AC presisi.",
    during: "Matikan intake AC luar gedung, batasi aktivitas outdoor, koordinasikan pengalihan rute armada kas-keliling dari zona bahaya erupsi.",
    post: "Pembersihan atap dari akumulasi pasir/abu vulkanik berat agar tidak ambruk, filter air bersih, dan pemeriksaan sensor genset luar.",
    oneDriveUrl: "https://onedrive.live.com/?id=SOP_ERUPSI_BI",
    videoUrl: "https://www.youtube.com/results?search_query=kesiapsiagaan+abu+vulkanik",
    supportSatker: "DLAF (Logistik & Gedung) & DSDM (Kesehatan Staf)"
  },
  {
    id: "dis-angin",
    name: "Angin Kencang & Puting Beliung",
    icon: "🌪️",
    category: "Natural Disaster",
    quickAction: "Jauhi jendela kaca besar, tutup tirai/blind, dan arahkan pegawai ke koridor dalam atau tangga darurat gedung.",
    pre: "Pemangkasan pohon rawan tumbang di perimeter kantor, pengecekan kekokohan antena VSAT di rooftop, dan penguncian kaca fasad luar.",
    during: "Hindari area atrium kaca dan rooftop. Lindungi dokumen penting. Tetap berada di ruang dalam hingga kecepatan angin melandai.",
    post: "Periksa kebocoran atap dan kaca pecah, bersihkan puing yang menghalangi gerbang armada kas, dan laporkan estimasi kerugian.",
    oneDriveUrl: "https://onedrive.live.com/?id=SOP_CUACA_EKSTREM_BI",
    videoUrl: "https://www.youtube.com/results?search_query=keselamatan+angin+puting+beliung",
    supportSatker: "DLAF (Pemeliharaan Aset Gedung)"
  },
  {
    id: "dis-kebakaran",
    name: "Kebakaran Gedung Kantor",
    icon: "🔥",
    category: "Man Made Disaster",
    quickAction: "Tarik tuas manual call point fire alarm! Jangan gunakan lift. Evakuasi melalui tangga darurat dengan merayap jika asap tebal.",
    pre: "Inspeksi tekanan tabung APAR tiap 6 bulan, pengetesan sprinkler dan detektor asap mingguan, serta drill evakuasi kebakaran rutin.",
    during: "Padamkan api awal dengan APAR jika masih kecil. Jika alarm berbunyi terus, Floor Warden wajib memastikan semua ruangan kosong.",
    post: "Hitung absensi di Assembly Point, koordinasi dengan Dinas Pemadam Kebakaran, jangan izinkan siapa pun masuk sebelum ada surat All-Clear.",
    oneDriveUrl: "https://onedrive.live.com/?id=SOP_KEBAKARAN_BI",
    videoUrl: "https://www.youtube.com/results?search_query=simulasi+kebakaran+gedung+bertingkat",
    supportSatker: "DLAF (K3 & Pemadam) & DSDM (Evakuasi Staf)"
  },
  {
    id: "dis-huruhara",
    name: "Huru-Hara & Kerusuhan Massa",
    icon: "👥",
    category: "Man Made Disaster",
    quickAction: "Aktivasi prosedur Lockdown gedung! Kunci gerbang perimeter, turunkan rolling door layanan kas publik, dan staf jauhi jendela depan.",
    pre: "Koordinasi intelijen keamanan dengan Polda/Polres, briefing tim sekuriti internal, pemantauan live CCTV perimeter 360 derajat.",
    during: "Tutup akses gerbang masuk. Pindahkan operasional transaksi kliring/kas ke sistem online atau alternate office. Terapkan WFH selektif.",
    post: "Pemeriksaan kerusakan fisik pagar/gerbang bersama kepolisian, normalisasi akses publik secara bertahap saat situasi dinyatakan aman.",
    oneDriveUrl: "https://onedrive.live.com/?id=SOP_HURUHARA_BI",
    videoUrl: "https://www.youtube.com/results?search_query=lockdown+security+procedure",
    supportSatker: "DLAF (Pengamanan Sekuriti) & DKOM (Komunikasi Publik)"
  },
  {
    id: "dis-teror",
    name: "Terorisme & Ancaman Bom",
    icon: "💣",
    category: "Man Made Disaster",
    quickAction: "Jangan sentuh benda mencurigakan! Hubungi aparat Tim Gegana / Brimob dan evakuasi gedung secara tenang tanpa menimbulkan kepanikan.",
    pre: "Pemeriksaan ketat kendaraan dan barang bawaan di pos gerbang utama dengan under-vehicle mirror dan mesin X-ray.",
    during: "Catat detail telepon ancaman jika ada. Evakuasi gedung dengan rute terjauh dari lokasi benda yang dicurigai. Jauhi kaca.",
    post: "Sterilisasi lokasi oleh Jibom Polda, investigasi rekaman CCTV, dan koordinasi dengan Badan Intelijen Negara / BNPT.",
    oneDriveUrl: "https://onedrive.live.com/?id=SOP_TERORISME_BI",
    videoUrl: "https://www.youtube.com/results?search_query=prosedur+ancaman+bom+kantor",
    supportSatker: "DLAF (Satpam Khusus) & DSDM (Keamanan Pegawai)"
  },
  {
    id: "dis-sabotase",
    name: "Sabotase Infrastruktur Kritis",
    icon: "⛓️",
    category: "Man Made Disaster",
    quickAction: "Isolasi fasilitas yang mengalami vandalisme atau sabotase. Switch operasional ke sistem redundansi sekunder seketika.",
    pre: "Pemasangan sensor getaran dan CCTV pada jalur pipa BBM genset, manhole kabel fiber optik utama, dan ruang kontrol kelistrikan.",
    during: "Aktifkan pengamanan berlapis pada area instalasi vital. Alihkan pasokan daya dan jalur data ke jalur alternatif tertutup.",
    post: "Perbaikan darurat instalasi fisik, forensik fisik bersama kepolisian, dan penguatan pengawalan aset strategis.",
    oneDriveUrl: "https://onedrive.live.com/?id=SOP_SABOTASE_BI",
    videoUrl: "https://www.youtube.com/results?search_query=critical+infrastructure+protection",
    supportSatker: "DLDS (Sistem & Kabel) & DLAF (Pengamanan Perimeter)"
  },
  {
    id: "dis-ransomware",
    name: "Ransomware & Serangan Siber",
    icon: "👾",
    category: "Technology Disaster",
    quickAction: "ISOLASI SEGERA! Cabut kabel LAN dan matikan Wi-Fi pada perangkat terdampak. JANGAN bayar tebusan! Laporkan ke CSIRT BI & BCM.",
    pre: "Penerapan endpoint protection (EDR), backup offline (air-gapped) tiap hari, pembatasan hak akses administrator, dan uji restore database.",
    during: "Isolasi segmen VLAN jaringan terdampak. Pertahankan sistem mission critical (BI-RTGS & FAST). Blokir IP command & control.",
    post: "Investigasi digital forensik CSIRT, pembersihan infeksi malware, restore database bersih dari snapshot sebelum t₀, dan audit keamanan.",
    oneDriveUrl: "https://onedrive.live.com/?id=SOP_RANSOMWARE_BI",
    videoUrl: "https://www.youtube.com/results?search_query=ransomware+incident+response",
    supportSatker: "DLDS (Cyber Security & CSIRT) & DIDD (Integrasi Data)"
  },
  {
    id: "dis-blackout",
    name: "Blackout Listrik Total & Genset",
    icon: "⚡",
    category: "Technology Disaster",
    quickAction: "Pastikan transfer switch genset menyala otomatis dalam < 15 detik! Catu daya UPS wajib menopang server room tanpa jeda (Zero Interruption).",
    pre: "Uji beban (dummy load test) genset tiap minggu, penggantian berkala aki baterai UPS, dan kontrak siaga pasokan BBM solar industri 72 jam.",
    during: "Monitor parameter beban daya pada panel ATS. Prioritaskan listrik ke Core Banking, RTGS, dan Command Center. Matikan beban non-esensial.",
    post: "Stabilisasi tegangan PLN sebelum perpindahan kembali, pengisian ulang tangki solar genset hingga penuh, dan logging durasi padam.",
    oneDriveUrl: "https://onedrive.live.com/?id=SOP_BLACKOUT_BI",
    videoUrl: "https://www.youtube.com/results?search_query=datacenter+power+outage+ups+genset",
    supportSatker: "DLAF (Genset & Solar) & DLDS (UPS Server Room)"
  },
  {
    id: "dis-network",
    name: "Hilang Jaringan (FO Putus)",
    icon: "📡",
    category: "Technology Disaster",
    quickAction: "Auto-failover router ke link cadangan VSAT Ku-Band / Starlink! Verifikasi koneksi transaksi perbankan tetap berjalan.",
    pre: "Langganan dual provider leased-line berbeda rute fisik (diversity route) ditambah satelit VSAT cadangan siaga penuh.",
    during: "Cek status flapping link BGP gateway. Laporkan kendala ke provider ISP mitra. Arahkan transaksi kritikal melalui jalur bandwidth prioritas.",
    post: "Uji latensi dan throughput leased-line utama setelah perbaikan fisik kabel fiber optik bawah tanah/laut selesai disambung.",
    oneDriveUrl: "https://onedrive.live.com/?id=SOP_JARINGAN_BI",
    videoUrl: "https://www.youtube.com/results?search_query=fiber+optic+network+redundancy",
    supportSatker: "DLDS (Infrastruktur Jaringan & Telekomunikasi)"
  },
  {
    id: "dis-sistempembayaran",
    name: "Gangguan APTK (Aplikasi Pendukung Tugas Kritikal)",
    icon: "💻",
    category: "Technology Disaster",
    quickAction: "Aktivasi prosedur kontinjensi sistem pembayaran! Alihkan pemrosesan transaksi BI-FAST/RTGS/CBS ke DRC Sinergi Karawang sesuai batas RTO 30 Menit.",
    pre: "Uji disaster recovery sinkronisasi basis data real-time berkala, monitoring antrean message queue MQ, dan simulasi failover kuartalan 24 APTK.",
    during: "Kirim broadcast notifikasi resmi ke bank-bank peserta sistem pembayaran. Alihkan traffic ke DRC Karawang. Pantau penyelesaian setelmen.",
    post: "Rekonsiliasi integritas data transaksi perbankan, penghitungan kompensasi kegagalan jika ada, dan pelaporan resmi kepada Dewan Gubernur.",
    oneDriveUrl: "https://onedrive.live.com/?id=SOP_SISTEM_PEMBAYARAN_BI",
    videoUrl: "https://www.youtube.com/results?search_query=disaster+recovery+financial+system",
    supportSatker: "DKSP (Sistem Pembayaran) & DLDS (Aplikasi Core)"
  }
];

// DOKUMEN RESMI BCM (BAGIAN 3)
const TEMPLATE_DOCUMENTS = [
  {
    id: "doc-deklarasi",
    title: "Surat Keputusan Deklarasi Status Krisis",
    code: "DEC-BCM-01",
    desc: "Format resmi penetapan eskalasi status Normal, Waspada, Siaga, hingga Ditenggarai Krisis yang ditandatangani Pimpinan BCM DMR / Kepala Perwakilan.",
    url: "https://onedrive.live.com/?id=TEMPLATE_DEKLARASI_STATUS"
  },
  {
    id: "doc-ba",
    title: "Format Baku Draft Berita Acara Insiden",
    code: "BA-INC-02",
    desc: "Berita acara kronologi gangguan operasional, durasi downtime, dampak kerugian, serta langkah penanganan teknis awal.",
    url: "https://onedrive.live.com/?id=TEMPLATE_BERITA_ACARA"
  },
  {
    id: "doc-ao",
    title: "Formulir Permohonan Penggunaan Alternate Office (AO)",
    code: "REQ-AO-03",
    desc: "Surat permohonan resmi pemindahan lokasi operasional kerja darurat ke gedung kantor cadangan / Korwil terdekat.",
    url: "https://onedrive.live.com/?id=TEMPLATE_PENGGUNAAN_AO"
  },
  {
    id: "doc-wa",
    title: "Format Cepat Pelaporan Insiden via WhatsApp",
    code: "WA-REP-04",
    desc: "Template pesan ringkas pelaporan situasi darurat golden time (15 menit pertama) kepada tim Disaster Management Response DMR.",
    url: "https://onedrive.live.com/?id=TEMPLATE_FORMAT_WA"
  },
  {
    id: "doc-risalah",
    title: "Risalah Rapat Koordinasi BCM & Memorandum",
    code: "MEMO-BCM-05",
    desc: "Format memorandum pimpinan dan risalah hasil kesepakatan Call For Meeting (CFM) tim penanggulangan gangguan.",
    url: "https://onedrive.live.com/?id=TEMPLATE_RISALAH_MEMORANDUM"
  }
];

// =============================================================================
// 3. 24 APLIKASI PENDUKUNG TUGAS KRITIKAL (APTK)
// =============================================================================

const APTK_24_DATA = [
  // TIER 1 (Mission Critical, Impact: 5)
  { code: "BI-RTGS", name: "Real-Time Gross Settlement", tier: 1, tierName: "Tier 1 • Mission Critical", category: "Sistem Pembayaran Nilai Besar", rto: "30 Menit", rpo: "0 Menit", impact: 5, vulnerability: 2, status: "Normal", description: "Sistem transfer dana elektronik antar-peserta seketika per transaksi individual." },
  { code: "BI-FAST", name: "BI Fast Payment 24/7", tier: 1, tierName: "Tier 1 • Mission Critical", category: "Sistem Pembayaran Ritel", rto: "15 Menit", rpo: "0 Menit", impact: 5, vulnerability: 3, status: "Normal", description: "Infrastruktur pembayaran ritel nasional real-time, 24/7 untuk seluruh nasabah perbankan." },
  { code: "SKNBI", name: "Sistem Kliring Nasional BI", tier: 1, tierName: "Tier 1 • Mission Critical", category: "Sistem Kliring Batch", rto: "1 Jam", rpo: "5 Menit", impact: 5, vulnerability: 2, status: "Normal", description: "Kliring warkat (cek, bilyet giro) dan transfer elektronik batch se-Indonesia." },
  { code: "CBS", name: "Core Banking System Bank Indonesia", tier: 1, tierName: "Tier 1 • Mission Critical", category: "Perbankan Sentral", rto: "1 Jam", rpo: "0 Menit", impact: 5, vulnerability: 2, status: "Normal", description: "Sistem pembukuan rekening giro bank umum dan pemerintah di Bank Indonesia." },
  { code: "Pusat Data (EDW BI)", name: "Enterprise Data Warehouse & DC", tier: 1, tierName: "Tier 1 • Mission Critical", category: "Infrastruktur & Storage", rto: "2 Jam", rpo: "15 Menit", impact: 5, vulnerability: 3, status: "Normal", description: "Pusat penyimpanan big data transaksi keuangan dan moneter Bank Indonesia." },
  { code: "SI-SSSS", name: "Scripless Securities Settlement System", tier: 1, tierName: "Tier 1 • Mission Critical", category: "Setelmen Surat Berharga", rto: "1 Jam", rpo: "0 Menit", impact: 5, vulnerability: 2, status: "Normal", description: "Penatausahaan dan setelmen SBN/SBSN instrumen moneter tanpa warkat." },
  { code: "SWIFT", name: "Financial Messaging Network", tier: 1, tierName: "Tier 1 • Mission Critical", category: "Komunikasi Devisa Global", rto: "1 Jam", rpo: "0 Menit", impact: 5, vulnerability: 3, status: "Normal", description: "Jaringan komunikasi finansial global untuk transaksi devisa nostro-vostro." },

  // TIER 2 (Business Critical, Impact: 4)
  { code: "BI-ETP", name: "Electronic Trading Platform", tier: 2, tierName: "Tier 2 • Business Critical", category: "Pasar Uang & Valas", rto: "2 Jam", rpo: "5 Menit", impact: 4, vulnerability: 2, status: "Normal", description: "Perdagangan elektronik antar pelaku pasar uang untuk transaksi repo & PUAB." },
  { code: "SISMONTAVAR", name: "Monitoring Transaksi Valas Rupiah", tier: 2, tierName: "Tier 2 • Business Critical", category: "Surveilans Devisa", rto: "2 Jam", rpo: "15 Menit", impact: 4, vulnerability: 3, status: "Normal", description: "Pengawasan real-time pergerakan devisa terhadap kurs rupiah." },
  { code: "ANTASENA", name: "Pelaporan Bank Terintegrasi", tier: 2, tierName: "Tier 2 • Business Critical", category: "Pelaporan Terpadu", rto: "4 Jam", rpo: "30 Menit", impact: 4, vulnerability: 4, status: "Normal", description: "Sistem pelaporan terintegrasi perbankan untuk stabilitas sistem keuangan." },
  { code: "SI-BISSSS", name: "Settlement & Penatausahaan Moneter", tier: 2, tierName: "Tier 2 • Business Critical", category: "Operasi Moneter", rto: "2 Jam", rpo: "5 Menit", impact: 4, vulnerability: 2, status: "Normal", description: "Sistem otomasi operasi moneter rupiah dan penempatan term deposit." },
  { code: "Bloomberg", name: "Market Data Terminal", tier: 2, tierName: "Tier 2 • Business Critical", category: "Informasi Pasar", rto: "2 Jam", rpo: "N/A", impact: 4, vulnerability: 3, status: "Normal", description: "Terminal data harga pasar obligasi, valas, dan komoditas global." },
  { code: "Refinitiv", name: "Reuters Dealing & Analytics", tier: 2, tierName: "Tier 2 • Business Critical", category: "Informasi Pasar", rto: "2 Jam", rpo: "N/A", impact: 4, vulnerability: 3, status: "Normal", description: "Platform dealing antarbank dan analitik keuangan internasional." },
  { code: "FOMOBO", name: "Front Middle Back Office Moneter", tier: 2, tierName: "Tier 2 • Business Critical", category: "Manajemen Moneter", rto: "3 Jam", rpo: "15 Menit", impact: 4, vulnerability: 2, status: "Normal", description: "Integrasi proses transaksi operasi moneter dari dealing hingga accounting." },
  { code: "HARTIS", name: "Real-Time Treasury Information", tier: 2, tierName: "Tier 2 • Business Critical", category: "Informasi Treasury", rto: "2 Jam", rpo: "15 Menit", impact: 4, vulnerability: 3, status: "Normal", description: "Penyajian informasi posisi cadangan devisa dan likuiditas rupiah." },
  { code: "En-Reporting SWIFT", name: "Reporting Transaksi Luar Negeri", tier: 2, tierName: "Tier 2 • Business Critical", category: "Kepatuhan Luar Negeri", rto: "4 Jam", rpo: "30 Menit", impact: 4, vulnerability: 2, status: "Normal", description: "Pelaporan kepatuhan transfer valas ke lembaga pengawas internasional." },

  // TIER 3 (Operational Support, Impact: 3)
  { code: "NCP", name: "New Clearing Platform", tier: 3, tierName: "Tier 3 • Operational Support", category: "Kliring Penunjang", rto: "4 Jam", rpo: "30 Menit", impact: 3, vulnerability: 2, status: "Normal", description: "Platform pemrosesan warkat kliring regional antar kantor perwakilan." },
  { code: "GMMP", name: "Global Market Monitoring Platform", tier: 3, tierName: "Tier 3 • Operational Support", category: "Surveilans Pasar", rto: "4 Jam", rpo: "1 Jam", impact: 3, vulnerability: 3, status: "Normal", description: "Pemantauan dinamika pasar modal dan sentimen suku bunga global." },
  { code: "ERPHRIS", name: "ERP SDM & Payroll Terpusat", tier: 3, tierName: "Tier 3 • Operational Support", category: "Administrasi Internal", rto: "8 Jam", rpo: "2 Jam", impact: 3, vulnerability: 2, status: "Normal", description: "Sistem kepegawaian, presensi darurat BCM, dan pembayaran remunerasi." },
  { code: "BI-WEB", name: "Portal Resmi Komunikasi Publik", tier: 3, tierName: "Tier 3 • Operational Support", category: "Komunikasi Publik", rto: "4 Jam", rpo: "1 Jam", impact: 3, vulnerability: 4, status: "Normal", description: "Website publikasi kurs acuan JISDOR dan pengumuman kebijakan BI." },
  { code: "BI-SSS", name: "Settlement Surat Berharga Penunjang", tier: 3, tierName: "Tier 3 • Operational Support", category: "Penatausahaan", rto: "4 Jam", rpo: "30 Menit", impact: 3, vulnerability: 2, status: "Normal", description: "Modul verifikasi administrasi kepemilikan surat berharga sekunder." },
  { code: "CISCO (CUIC)", name: "Contact Center BI Bicara 131", tier: 3, tierName: "Tier 3 • Operational Support", category: "Layanan Pelanggan", rto: "4 Jam", rpo: "N/A", impact: 3, vulnerability: 3, status: "Normal", description: "Pusat panggilan layanan publik masyarakat dan pengaduan konsumen." },
  { code: "BI-SILK", name: "Sistem Informasi Layanan Kas", tier: 3, tierName: "Tier 3 • Operational Support", category: "Pengelolaan Uang", rto: "4 Jam", rpo: "30 Menit", impact: 3, vulnerability: 3, status: "Normal", description: "Pemesanan penukaran uang baru dan setoran kas perbankan ke BI." },
  { code: "SIMP", name: "Manajemen Pengadaan & Logistik", tier: 3, tierName: "Tier 3 • Operational Support", category: "Logistik Gedung", rto: "8 Jam", rpo: "2 Jam", impact: 3, vulnerability: 2, status: "Normal", description: "Pengelolaan pengadaan sarpras tanggap darurat dan inventaris kantor." }
];

// =============================================================================
// 4. INCIDENT LOGS & BCM LAMBDA CURVE DATASET
// =============================================================================



const DEFAULT_INCIDENTS = [
  // 1. TECHNOLOGY DISASTER (6 Insiden)
  {
    id: "INC-2025-06-001",
    time: "2025-06-10T08:15",
    endTime: "2025-06-10T12:15",
    satkerId: "kpwbi-kantor-pusat",
    satkerName: "Kantor Pusat Bank Indonesia (KP)",
    disasterType: "Technology Disaster",
    subCategory: "Kegagalan Server / Storage Data Center",
    aptk: "BI-RTGS",
    statusLevel: "Ditenggarai Krisis",
    duration: "4 Jam 00 Menit",
    durationSeconds: 14400,
    status: "CLOSED",
    mtpdHours: 6.0,
    rtoHours: 4.0,
    rpoMinutes: 5,
    rootCause: "Failover catu daya UPS data center lokal mengalami short-circuit; otomatis dialihkan ke DRC Sinergi Karawang.",
    oneDriveUrl: "https://onedrive.live.com/?id=INC-2025-06-001",
    cfms: [
      { id: 1, time: "08:35:00", name: "CFM #1: Deklarasi Insiden & Koordinasi Awal", note: "Failover catu daya UPS DC lokal short-circuit; switch ke genset" },
      { id: 2, time: "09:50:00", name: "CFM #2: Rapat Evaluasi & Keputusan Failover DRC", note: "Verifikasi integritas data transaksi kliring RTGS" },
      { id: 3, time: "11:15:00", name: "CFM #3: Rapat Rekonsiliasi & Uji Pemulihan", note: "Jaringan utama pulih, persiapan operasional normal" }
    ]
  },
  {
    id: "INC-2025-06-003",
    time: "2025-06-10T10:15",
    endTime: "",
    satkerId: "kpwbi-kantor-pusat",
    satkerName: "Kantor Pusat Bank Indonesia (KP)",
    disasterType: "Technology Disaster",
    subCategory: "Hilang Jaringan (Network Outage / FO Putus)",
    aptk: "BI-FAST",
    statusLevel: "Ditenggarai Krisis",
    duration: "Ongoing (Live)",
    durationSeconds: 7200,
    status: "OPEN",
    mtpdHours: 4.0,
    rtoHours: 2.0,
    rpoMinutes: 0,
    rootCause: "Kabel fiber optic submarine segmen Selat Sunda terputus; backup link via VSAT Ku-Band & Starlink aktif.",
    oneDriveUrl: "https://onedrive.live.com/?id=INC-2025-06-003",
    cfms: [
      { id: 1, time: "10:30:00", name: "CFM #1: Koordinasi Darurat Putusnya FO Submarine", note: "Aktivasi diversity link satelit VSAT & Starlink" }
    ]
  },
  {
    id: "INC-2025-06-005",
    time: "2025-06-02T11:00",
    endTime: "2025-06-02T13:45",
    satkerId: "kpwbi-kantor-pusat",
    satkerName: "Kantor Pusat Bank Indonesia (KP)",
    disasterType: "Technology Disaster",
    subCategory: "Serangan Ransomware & Enkripsi Data",
    aptk: "Pusat Data (EDW BI)",
    statusLevel: "Ditenggarai Krisis",
    duration: "2 Jam 45 Menit",
    durationSeconds: 9900,
    status: "CLOSED",
    mtpdHours: 8.0,
    rtoHours: 4.0,
    rpoMinutes: 15,
    rootCause: "Indikasi payload ransomware pada segmen VLAN testing; CSIRT melakukan isolasi port switch dan restore snapshot bersih.",
    oneDriveUrl: "https://onedrive.live.com/?id=INC-2025-06-005",
    cfms: [
      { id: 1, time: "11:20:00", name: "CFM #1: Isolasi Perimeter Jaringan CSIRT", note: "Blokir port dan putus koneksi terminal terinfeksi" },
      { id: 2, time: "13:00:00", name: "CFM #2: Verifikasi Integritas Snapshot Database", note: "Restore database bersih berhasil, audit log aman" }
    ]
  },
  {
    id: "INC-2025-05-28T09:00",
    time: "2025-05-28T09:00",
    endTime: "2025-05-28T12:00",
    satkerId: "kpwbi-kantor-pusat",
    satkerName: "Kantor Pusat Bank Indonesia (KP)",
    disasterType: "Technology Disaster",
    subCategory: "Pemadaman Listrik Total (Blackout / UPS Glitch)",
    aptk: "CBS",
    statusLevel: "Normal Siaga",
    duration: "3 Jam 00 Menit",
    durationSeconds: 10800,
    status: "CLOSED",
    mtpdHours: 6.0,
    rtoHours: 3.0,
    rpoMinutes: 5,
    rootCause: "Gangguan transmisi PLN gardu induk; genset 1 & 2 sinkronisasi otomatis memasok ruang server tanpa interupsi.",
    oneDriveUrl: "https://onedrive.live.com/?id=INC-2025-05-28",
    cfms: [
      { id: 1, time: "09:15:00", name: "CFM #1: Monitoring Beban Genset & Cadangan Solar", note: "Beban stabil 65%, pasokan BBM siaga 72 jam" }
    ]
  },
  {
    id: "INC-2025-05-20T14:00",
    time: "2025-05-20T14:00",
    endTime: "2025-05-20T16:30",
    satkerId: "kpwbi-kantor-pusat",
    satkerName: "Kantor Pusat Bank Indonesia (KP)",
    disasterType: "Technology Disaster",
    subCategory: "Serangan Phishing Masif & Kredensial",
    aptk: "SKNBI",
    statusLevel: "Normal Waspada",
    duration: "2 Jam 30 Menit",
    durationSeconds: 9000,
    status: "CLOSED",
    mtpdHours: 8.0,
    rtoHours: 4.0,
    rpoMinutes: 0,
    rootCause: "Kampanye spear-phishing domain palsu perbankan; email gateway memblokir 1.200 email berbahaya dan reset kredensial.",
    oneDriveUrl: "https://onedrive.live.com/?id=INC-2025-05-20",
    cfms: [
      { id: 1, time: "14:20:00", name: "CFM #1: Mitigasi Phishing Domain Spoofing", note: "Blacklist IP dan notifikasi edukasi ke seluruh satker" }
    ]
  },
  {
    id: "INC-2025-05-12T08:30",
    time: "2025-05-12T08:30",
    endTime: "2025-05-12T11:00",
    satkerId: "kpwbi-kantor-pusat",
    satkerName: "Kantor Pusat Bank Indonesia (KP)",
    disasterType: "Technology Disaster",
    subCategory: "Kegagalan Server / Storage Data Center",
    aptk: "SISMONTAVAR",
    statusLevel: "Normal Waspada",
    duration: "2 Jam 30 Menit",
    durationSeconds: 9000,
    status: "CLOSED",
    mtpdHours: 6.0,
    rtoHours: 3.0,
    rpoMinutes: 10,
    rootCause: "Degradasi performa SAN storage cluster moneter; failover ke standby cluster memulihkan akses modul monitoring valas.",
    oneDriveUrl: "https://onedrive.live.com/?id=INC-2025-05-12",
    cfms: [
      { id: 1, time: "08:50:00", name: "CFM #1: Failover Storage Controller", note: "Cache sync normal, latency turun ke 2ms" }
    ]
  },

  // 2. NATURAL DISASTER (5 Insiden)
  {
    id: "INC-2025-06-002",
    time: "2025-06-09T07:30",
    endTime: "",
    satkerId: "kpwbi-bandung",
    satkerName: "KPwBI Provinsi Jawa Barat",
    disasterType: "Natural Disaster",
    subCategory: "Banjir Bandang & Luapan Air",
    aptk: "Tidak Ada",
    statusLevel: "Normal Siaga",
    duration: "Ongoing (Live)",
    durationSeconds: 10800,
    status: "OPEN",
    mtpdHours: 12.0,
    rtoHours: 6.0,
    rpoMinutes: 0,
    rootCause: "Hujan ekstrem semalaman menyebabkan luapan drainase Jl. Braga setinggi 40 cm; pompa submersible dan barrier khazanah aktif.",
    oneDriveUrl: "https://onedrive.live.com/?id=INC-2025-06-002",
    cfms: [
      { id: 1, time: "07:50:00", name: "CFM #1: Penutupan Barrier Khazanah & Pengamanan Kas", note: "Air tertahan di perimeter luar, khazanah aman kering" },
      { id: 2, time: "09:30:00", name: "CFM #2: Pengalihan Akses Staf ke Pintu Samping", note: "Layanan kas perbankan beroperasi normal via drive-thru" }
    ]
  },
  {
    id: "INC-2025-06-006",
    time: "2025-05-30T13:40",
    endTime: "2025-05-30T17:10",
    satkerId: "kpwbi-padang",
    satkerName: "KPwBI Provinsi Sumatera Barat",
    disasterType: "Natural Disaster",
    subCategory: "Gempa Bumi Tektonik",
    aptk: "Tidak Ada",
    statusLevel: "Ditenggarai Krisis",
    duration: "3 Jam 30 Menit",
    durationSeconds: 12600,
    status: "CLOSED",
    mtpdHours: 24.0,
    rtoHours: 8.0,
    rpoMinutes: 0,
    rootCause: "Gempa bumi dangkal M 6.2 pesisir barat Sumbar; evakuasi mandiri seluruh pegawai ke assembly point, struktur base-isolator aman.",
    oneDriveUrl: "https://onedrive.live.com/?id=INC-2025-06-006",
    cfms: [
      { id: 1, time: "14:00:00", name: "CFM #1: Evakuasi Staf & Asesmen Integritas Gedung", note: "Tidak ada korban jiwa, structural scan aman hijau" },
      { id: 2, time: "16:00:00", name: "CFM #2: Pernyataan Kondisi Aman (All-Clear)", note: "Pegawai diperkenankan masuk kembali secara bertahap" }
    ]
  },
  {
    id: "INC-2025-05-18T06:00",
    time: "2025-05-18T06:00",
    endTime: "2025-05-18T14:00",
    satkerId: "kpwbi-manado",
    satkerName: "KPwBI Provinsi Sulawesi Utara",
    disasterType: "Natural Disaster",
    subCategory: "Erupsi Gunung Api & Abu Vulkanik",
    aptk: "Tidak Ada",
    statusLevel: "Normal Siaga",
    duration: "8 Jam 00 Menit",
    durationSeconds: 28800,
    status: "CLOSED",
    mtpdHours: 24.0,
    rtoHours: 12.0,
    rpoMinutes: 0,
    rootCause: "Erupsi Gunung Lokon melontarkan abu vulkanik pekat setebal 1 cm di kota Manado; intake AC sentral dimatikan dan filter HEPA dipasang.",
    oneDriveUrl: "https://onedrive.live.com/?id=INC-2025-05-18",
    cfms: [
      { id: 1, time: "06:30:00", name: "CFM #1: Protokol Red Alert Vulkanik & Masker N95", note: "Distribusi respirator N95 dan pembersihan atap genset" }
    ]
  },
  {
    id: "INC-2025-05-08T15:00",
    time: "2025-05-08T15:00",
    endTime: "2025-05-08T20:30",
    satkerId: "kpwbi-semarang",
    satkerName: "KPwBI Provinsi Jawa Tengah",
    disasterType: "Natural Disaster",
    subCategory: "Gelombang Pasang / Rob",
    aptk: "Tidak Ada",
    statusLevel: "Normal Waspada",
    duration: "5 Jam 30 Menit",
    durationSeconds: 19800,
    status: "CLOSED",
    mtpdHours: 18.0,
    rtoHours: 8.0,
    rpoMinutes: 0,
    rootCause: "Banjir pasang rob pesisir Pantura merendam akses arteri Kaligawe; armada mobil kas PUR dikawal via tol krapyak.",
    oneDriveUrl: "https://onedrive.live.com/?id=INC-2025-05-08",
    cfms: [
      { id: 1, time: "15:30:00", name: "CFM #1: Pengalihan Rute Armada Distribusi Kas", note: "Rute tol alternatif aman tanpa keterlambatan kliring" }
    ]
  },
  {
    id: "INC-2025-04-25T11:00",
    time: "2025-04-25T11:00",
    endTime: "2025-04-25T17:00",
    satkerId: "kpwbi-pekanbaru",
    satkerName: "KPwBI Provinsi Riau",
    disasterType: "Natural Disaster",
    subCategory: "Kualitas Udara Memburuk (Polusi & Kabut Asap / ISPU Berbahaya)",
    aptk: "Tidak Ada",
    statusLevel: "Normal Siaga",
    duration: "6 Jam 00 Menit",
    durationSeconds: 21600,
    status: "CLOSED",
    mtpdHours: 24.0,
    rtoHours: 8.0,
    rpoMinutes: 0,
    rootCause: "Indeks ISPU mencapai level 215 (Sangat Tidak Sehat) akibat karhutla lahan gambut; pemberlakuan WFH 50% dan proteksi AHU gedung.",
    oneDriveUrl: "https://onedrive.live.com/?id=INC-2025-04-25",
    cfms: [
      { id: 1, time: "11:30:00", name: "CFM #1: Aktivasi Resirkulasi Udara & Masker N95", note: "Pengukuran kualitas udara indoor menunjukkan PM2.5 aman" }
    ]
  },

  // 3. MAN MADE DISASTER (5 Insiden)
  {
    id: "INC-2025-06-004",
    time: "2025-06-10T09:00",
    endTime: "",
    satkerId: "kpwbi-dki-jakarta",
    satkerName: "KPwBI Provinsi DKI Jakarta",
    disasterType: "Man Made Disaster",
    subCategory: "Unjuk Rasa / Demonstrasi Masif",
    aptk: "Tidak Ada",
    statusLevel: "Normal Siaga",
    duration: "Ongoing (Live)",
    durationSeconds: 9000,
    status: "OPEN",
    mtpdHours: 12.0,
    rtoHours: 4.0,
    rpoMinutes: 0,
    rootCause: "Aksi unjuk rasa massa buruh di silang Monas dan depan Gedung Thamrin; gerbang ditutup rapat, prosedur lockdown gedung aktif.",
    oneDriveUrl: "https://onedrive.live.com/?id=INC-2025-06-004",
    cfms: [
      { id: 1, time: "09:20:00", name: "CFM #1: Aktivasi Protokol Lockdown & Koordinasi Brimob", note: "Pengamanan ring-1 diperkuat 2 kompi aparat kepolisian" },
      { id: 2, time: "10:45:00", name: "CFM #2: Evaluasi Distribusi Uang Kas & Keamanan Pegawai", note: "Akses logistik kas dialihkan lewat pintu belakang Gambir" }
    ]
  },
  {
    id: "INC-2025-06-010",
    time: "2025-06-07T13:00",
    endTime: "",
    satkerId: "kpwbi-jayapura",
    satkerName: "KPwBI Provinsi Papua",
    disasterType: "Man Made Disaster",
    subCategory: "Huru-Hara & Kerusuhan Massa",
    aptk: "Tidak Ada",
    statusLevel: "Ditenggarai Krisis",
    duration: "Ongoing (Live)",
    durationSeconds: 18000,
    status: "OPEN",
    mtpdHours: 16.0,
    rtoHours: 6.0,
    rpoMinutes: 0,
    rootCause: "Kerusuhan massa di Abepura meluas ke arah pusat kota; kantor BI Jayapura menerapkan pengamanan penuh TNI/Polri dan stanby evakuasi.",
    oneDriveUrl: "https://onedrive.live.com/?id=INC-2025-06-010",
    cfms: [
      { id: 1, time: "13:30:00", name: "CFM #1: Deklarasi Status Krisis Lokal & Pengamanan Khazanah", note: "Khazanah kas disegel ganda, pegawai berkumpul di safe zone" }
    ]
  },
  {
    id: "INC-2025-05-24T10:00",
    time: "2025-05-24T10:00",
    endTime: "2025-05-24T15:30",
    satkerId: "kpwbi-surabaya",
    satkerName: "KPwBI Provinsi Jawa Timur",
    disasterType: "Man Made Disaster",
    subCategory: "Unjuk Rasa / Demonstrasi Masif",
    aptk: "Tidak Ada",
    statusLevel: "Normal Waspada",
    duration: "5 Jam 30 Menit",
    durationSeconds: 19800,
    status: "CLOSED",
    mtpdHours: 12.0,
    rtoHours: 4.0,
    rpoMinutes: 0,
    rootCause: "Aksi unjuk rasa aliansi serikat pekerja memadati Jl. Pahlawan depan kantor gubernur; operasional kas publik dialihkan ke pintu Jl. Tembaan.",
    oneDriveUrl: "https://onedrive.live.com/?id=INC-2025-05-24",
    cfms: [
      { id: 1, time: "10:30:00", name: "CFM #1: Koordinasi Polrestabes Surabaya & Pengalihan Kas", note: "Massa tertib, operasional warkat SPPUR selesai tepat waktu" }
    ]
  },
  {
    id: "INC-2025-05-15T09:30",
    time: "2025-05-15T09:30",
    endTime: "2025-05-15T14:00",
    satkerId: "kpwbi-medan",
    satkerName: "KPwBI Provinsi Sumatera Utara",
    disasterType: "Man Made Disaster",
    subCategory: "Konflik Sosial & Blokade Akses",
    aptk: "Tidak Ada",
    statusLevel: "Normal Waspada",
    duration: "4 Jam 30 Menit",
    durationSeconds: 16200,
    status: "CLOSED",
    mtpdHours: 10.0,
    rtoHours: 4.0,
    rpoMinutes: 0,
    rootCause: "Pemogokan pengemudi dan blokade akses jalan tol Belmera; pengawalan armada uang kas dilakukan dengan rute alternatif jalur lingkar luar.",
    oneDriveUrl: "https://onedrive.live.com/?id=INC-2025-05-15",
    cfms: [
      { id: 1, time: "10:00:00", name: "CFM #1: Penyesuaian Jadwal Penarikan Kas Bank Mitra", note: "Seluruh bank mitra terlayani tanpa kekurangan likuiditas" }
    ]
  },
  {
    id: "INC-2025-05-02T13:00",
    time: "2025-05-02T13:00",
    endTime: "2025-05-02T17:30",
    satkerId: "kpwbi-makassar",
    satkerName: "KPwBI Provinsi Sulawesi Selatan",
    disasterType: "Man Made Disaster",
    subCategory: "Huru-Hara & Kerusuhan Massa",
    aptk: "Tidak Ada",
    statusLevel: "Normal Waspada",
    duration: "4 Jam 30 Menit",
    durationSeconds: 16200,
    status: "CLOSED",
    mtpdHours: 12.0,
    rtoHours: 5.0,
    rpoMinutes: 0,
    rootCause: "Unjuk rasa mahasiswa dan pembakaran ban di flyover Urip Sumoharjo; perimeter gedung diperketat dan staf dipulangkan lebih awal secara bertahap.",
    oneDriveUrl: "https://onedrive.live.com/?id=INC-2025-05-02",
    cfms: [
      { id: 1, time: "13:30:00", name: "CFM #1: Pembagian Jam Pulang Staf & Pengamanan Gedung", note: "Situasi kondusif terkendali pada sore hari" }
    ]
  }
];

let INCIDENTS_DATA = [];
let liveIncidentTicker = null;

// =============================================================================
// 5. GLOBAL STATE & CONFIGURATION
// =============================================================================

let activePktTab = "pelaksana";
let currentMainView = "monitor";
let currentMonitorSubView = "general";
let currentProfilOfficeId = "kpwbi-kantor-pusat";
let currentFlyerFilter = "Semua";
let incidentSortCol = "time";
let incidentSortAsc = false;
let selectedAptkCode = "BI-RTGS";

let leafletMap = null;
let leafletMarkersGroup = null;
let selectedHeatmapCell = null;
let selectedHazardFilter = "Semua";
let currentHazardOfficeId = null;
let currentLambdaIncId = "INC-2025-06-001";
let trendChartInstance = null;
let currentResilience = { sdm: 72, sdlk: 61, sdtd: 48, lainnya: 80 };
let currentOfficeForOneDrive = null;
let currentDocTypeForOneDrive = "pkt";

let bcmCurveConfig = {
  startTime: "08:15",
  endTime: "12:15",
  isTech: true,
  rpoText: "5 Menit",
  rtoText: "4 Jam",
  mtpdText: "6 Jam",
  meetings: [
    { id: 1, time: "08:35", name: "CFM #1: Rapat Penanganan Cepat & Aktivasi BCM", note: "Evakuasi aman, switch ke genset & DC Sinergi" },
    { id: 2, time: "09:50", name: "CFM #2: Rapat Evaluasi & Keputusan Failover", note: "Integritas data kliring diverifikasi sesuai RPO" },
    { id: 3, time: "11:15", name: "CFM #3: Rapat Rekonsiliasi & Uji Pemulihan", note: "Jaringan utama pulih, persiapan operasional penuh" }
  ]
};

// Ketentuan Status (Bagian 2 - Editable via LocalStorage)
const DEFAULT_STATUS_RULES = {
  normal: "Kondisi operasional normal. Seluruh parameter SDM (>85%), SDLK (Gedung & Utilitas 100%), dan SDTD (Jaringan & Core System Aktif) beroperasi optimal tanpa gangguan berarti.",
  waspada: "Terdeteksi potensi ancaman eksternal atau gangguan non-kritis (SDM 70-85% atau SDTD cadangan aktif). Dilakukan deteksi dini, pemantauan status cuaca/keamanan berkala, dan persiapan tim tanggap darurat.",
  siaga: "Terjadi gangguan operasional nyata pada salah satu parameter vital (SDM 50-70%, SDLK terdampak sebagian, atau SDTD failover ke jalur sekunder). Aktivasi BCM parsial dan mobilisasi personil.",
  krisis: "Gangguan masif melumpuhkan fasilitas utama (SDM <50%, gedung tidak layak huni, atau sistem kritikal mati melebihi MTPD). Pimpinan BCM mendeklarasikan Krisis dan Crisis Management Team (CMT) mengambil alih."
};

let STATUS_RULES = { ...DEFAULT_STATUS_RULES };

// =============================================================================
// 6. APP INITIALIZATION
// =============================================================================

document.addEventListener("DOMContentLoaded", () => {
  initClock();
  initIncidentData();
  initStatusRules();
  populateSatkerDropdown();
  initDisasterTrendChart();
  initLeafletIndonesiaMap();
  renderRiskHeatmapWithDots();
  renderActivePktTab();
  renderTop5Table();
  evaluateResilienceStatus();
  onDisasterTypeChange();
  initBcmLambdaCurve();
  populateDashboardActiveIncidentSelect();
  onDashboardActiveIncidentChange("INC-2025-06-001");
  renderCfmListInModal();

  // Render Module Views
  renderRegionDirectory();
  renderDisasterIconGrid();
  renderStatusRules();
  renderTemplateDocs();
  renderIncidentTable();
  initAptkMatrix();
});

// Real-Time Clock WIB
function initClock() {
  const clockEl = document.getElementById("liveClockText");
  const update = () => {
    const now = new Date();
    const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const months = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
    
    const dayName = days[now.getDay()];
    const date = String(now.getDate()).padStart(2, '0');
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    if (clockEl) {
      clockEl.textContent = `${dayName}, ${date} ${month} ${year} | ${hours}:${minutes}:${seconds} WIB`;
    }
  };
  update();
  setInterval(update, 1000);
}

function initIncidentData() {
  const saved = localStorage.getItem("bi_incidents_data");
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length >= DEFAULT_INCIDENTS.length) {
        INCIDENTS_DATA = parsed;
      } else {
        INCIDENTS_DATA = [...DEFAULT_INCIDENTS];
        localStorage.setItem("bi_incidents_data", JSON.stringify(INCIDENTS_DATA));
      }
    } catch (e) {
      INCIDENTS_DATA = [...DEFAULT_INCIDENTS];
    }
  } else {
    INCIDENTS_DATA = [...DEFAULT_INCIDENTS];
  }

  // Ensure all incidents have complete BCM parameters (durationSeconds, cfms, mtpd, rto, rpo)
  INCIDENTS_DATA.forEach(inc => {
    normalizeIncidentFields(inc);
  });

  // Start live ticking for OPEN incidents
  startLiveIncidentTicker();
}

function normalizeIncidentFields(inc) {
  if (!inc.status) inc.status = "CLOSED";

  if (inc.durationSeconds === undefined || inc.durationSeconds === null || isNaN(inc.durationSeconds)) {
    if (inc.duration) {
      const matchHours = inc.duration.match(/(\d+)\s*Jam/i);
      const matchMins = inc.duration.match(/(\d+)\s*Menit/i);
      const matchSecs = inc.duration.match(/(\d+)\s*Detik/i);
      let s = 0;
      if (matchHours) s += parseInt(matchHours[1]) * 3600;
      if (matchMins) s += parseInt(matchMins[1]) * 60;
      if (matchSecs) s += parseInt(matchSecs[1]);
      inc.durationSeconds = s > 0 ? s : (inc.status === "OPEN" ? 3600 : 14400);
    } else {
      inc.durationSeconds = inc.status === "OPEN" ? 3600 : 14400;
    }
  }

  if (!inc.endTime) {
    if (inc.status === "CLOSED" && inc.time) {
      const startMs = new Date(inc.time).getTime();
      if (!isNaN(startMs)) {
        inc.endTime = new Date(startMs + (inc.durationSeconds * 1000)).toISOString().slice(0, 16);
      } else {
        inc.endTime = "";
      }
    } else {
      inc.endTime = "";
    }
  }

  if (!inc.mtpdHours) inc.mtpdHours = 6.0;
  if (!inc.rtoHours) inc.rtoHours = 4.0;
  if (inc.rpoMinutes === undefined) {
    inc.rpoMinutes = inc.disasterType === "Technology Disaster" ? 5 : 0;
  }

  if (!inc.cfms || !Array.isArray(inc.cfms) || inc.cfms.length === 0) {
    const startH = inc.time ? parseInt(inc.time.split("T")[1]?.split(":")[0] || "8") : 8;
    const cfm1Time = `${String(startH).padStart(2, '0')}:35:00`;
    const cfm2Time = `${String(startH + 1).padStart(2, '0')}:45:00`;
    const cfm3Time = `${String(startH + 3).padStart(2, '0')}:15:00`;

    inc.cfms = [
      { id: 1, time: cfm1Time, name: "CFM #1: Deklarasi Insiden & Koordinasi Awal", note: "Penetapan status & asesmen dampak fasilitas" },
      { id: 2, time: cfm2Time, name: "CFM #2: Evaluasi Progress Recovery BCM", note: "Verifikasi tindakan mitigasi dan sistem cadangan" },
      { id: 3, time: cfm3Time, name: "CFM #3: Keputusan Normalisasi & Rekonsiliasi", note: "Verifikasi kestabilan sebelum penutupan insiden" }
    ];
  }
}

function startLiveIncidentTicker() {
  if (liveIncidentTicker) clearInterval(liveIncidentTicker);
  liveIncidentTicker = setInterval(() => {
    INCIDENTS_DATA.forEach(inc => {
      if (inc.status === "OPEN") {
        inc.durationSeconds = (inc.durationSeconds || 0) + 1;
        const timerEl = document.getElementById(`timer-val-${inc.id}`);
        if (timerEl) {
          timerEl.textContent = formatSecondsToHms(inc.durationSeconds);
        }
      }
    });

    if (currentLambdaIncId) {
      const activeInc = INCIDENTS_DATA.find(x => x.id === currentLambdaIncId);
      if (activeInc && activeInc.status === "OPEN") {
        const liveCounter = document.getElementById("incLambdaLiveCounter");
        if (liveCounter) {
          liveCounter.textContent = formatSecondsToHms(activeInc.durationSeconds);
        }
      }
    }
  }, 1000);
}

function initStatusRules() {
  const saved = localStorage.getItem("bi_status_rules");
  if (saved) {
    try {
      STATUS_RULES = { ...DEFAULT_STATUS_RULES, ...JSON.parse(saved) };
    } catch (e) {}
  }
}

// Populate Satker Dropdown (TUNGGAL: "Kantor Pusat Bank Indonesia" + 46 KPwDN)
function populateSatkerDropdown() {
  const selectGlobal = document.getElementById("filterSatker");
  const selectModal = document.getElementById("inputIncSatker");

  // Build the list: Kantor Pusat + 46 KPwDN
  const kpwdnOptions = KPWDN_DATA.map(k => ({ id: k.id, name: `${k.name} (${k.city})` }));

  if (selectGlobal) {
    // Keep the first 2 options: Semua, and Kantor Pusat
    selectGlobal.innerHTML = `
      <option value="Semua">Semua Satker & KPwDN</option>
      <option value="kpwbi-kantor-pusat">🏛️ Kantor Pusat Bank Indonesia</option>
    `;
    const optgroup = document.createElement("optgroup");
    optgroup.label = "📍 KPwDN Regional (46 Kantor)";
    kpwdnOptions.forEach(item => {
      const opt = document.createElement("option");
      opt.value = item.id;
      opt.textContent = item.name;
      optgroup.appendChild(opt);
    });
    selectGlobal.appendChild(optgroup);
  }

  if (selectModal) {
    selectModal.innerHTML = `
      <option value="kpwbi-kantor-pusat">🏛️ Kantor Pusat Bank Indonesia</option>
    `;
    const optgroup = document.createElement("optgroup");
    optgroup.label = "📍 KPwDN Regional (46 Kantor)";
    kpwdnOptions.forEach(item => {
      const opt = document.createElement("option");
      opt.value = item.id;
      opt.textContent = item.name;
      optgroup.appendChild(opt);
    });
    selectModal.appendChild(optgroup);
  }
}

// =============================================================================
// 7. MONITORING BCM SUB-VIEWS ROUTING & DYNAMIC CHARTS
// =============================================================================

function switchMonitorSubView(level) {
  currentMonitorSubView = level;

  // Update button active state
  document.getElementById("subnavBtnGeneral")?.classList.toggle("active", level === "general");
  document.getElementById("subnavBtnNatural")?.classList.toggle("active", level === "natural");
  document.getElementById("subnavBtnManMade")?.classList.toggle("active", level === "manmade");
  document.getElementById("subnavBtnTech")?.classList.toggle("active", level === "tech");

  const banner = document.getElementById("disasterFocusBanner");
  const bannerIcon = document.getElementById("focusBannerIcon");
  const bannerTitle = document.getElementById("focusBannerTitle");
  const bannerDesc = document.getElementById("focusBannerDesc");
  const filterSelect = document.getElementById("filterDisaster");

  const mapContainer = document.getElementById("indonesiaMapContainer");
  const techOsiContainer = document.getElementById("techOsiContainer");
  const mapTitleText = document.getElementById("mapTitleText");
  const heatmapTitle = document.getElementById("heatmapHeaderTitle");
  const heatmapSubtitle = document.getElementById("heatmapSubtitle");

  // Dynamic KPI calculation based on disaster subview
  let filteredInc = INCIDENTS_DATA;
  if (level === "natural") {
    filteredInc = INCIDENTS_DATA.filter(x => x.disasterType === "Natural Disaster");
  } else if (level === "manmade") {
    filteredInc = INCIDENTS_DATA.filter(x => x.disasterType === "Man Made Disaster");
  } else if (level === "tech") {
    filteredInc = INCIDENTS_DATA.filter(x => x.disasterType === "Technology Disaster");
  }

  const kpiTotalEl = document.getElementById("kpiTotalInsiden");
  const kpiAktifEl = document.getElementById("kpiInsidenAktif");
  const kpiSelesaiEl = document.getElementById("kpiInsidenSelesai");

  if (kpiTotalEl) kpiTotalEl.textContent = filteredInc.length;
  if (kpiAktifEl) kpiAktifEl.textContent = filteredInc.filter(x => x.status === "OPEN").length;
  if (kpiSelesaiEl) kpiSelesaiEl.textContent = filteredInc.filter(x => x.status === "CLOSED").length;

  if (!banner) return;
  banner.className = "disaster-focus-banner";

  if (level === "general") {
    banner.style.display = "none";
    if (filterSelect) filterSelect.value = "Semua";
    if (mapContainer) mapContainer.style.display = "flex";
    if (techOsiContainer) techOsiContainer.style.display = "none";
    if (mapTitleText) mapTitleText.textContent = "📍 Peta Risiko Insiden Indonesia (46 KPwDN)";
    if (heatmapTitle) heatmapTitle.textContent = "Risk Heatmap (5 x 5)";
    if (heatmapSubtitle) heatmapSubtitle.textContent = "Dampak x Likelihood (Akumulasi Semua Bencana)";

    bcmCurveConfig.isTech = true;
    updateDynamicTrendChart("general");
    populateDashboardActiveIncidentSelect("INC-2025-06-001");
    onDashboardActiveIncidentChange("INC-2025-06-001");
    renderRiskHeatmapWithDots("all");
    renderTop5Table("general");
    renderLeafletMarkers("general");
    showToast("Menampilkan Monitor General (Akumulasi Seluruh Bencana)");
  } 
  else if (level === "natural") {
    banner.style.display = "flex";
    banner.classList.add("natural");
    bannerIcon.textContent = "🌊";
    bannerTitle.textContent = "Fokus Pemantauan: Natural Disaster - Level 1 (Bencana Alam & Cuaca Ekstrem)";
    bannerDesc.textContent = "Peta Indonesia terintegrasi sebaran gempa, banjir bandang, erupsi, dan cuaca ekstrem. Heatmap menampilkan KP/KPw paling rentan terhadap bencana alam.";
    if (filterSelect) filterSelect.value = "Natural Disaster";
    
    if (mapContainer) mapContainer.style.display = "flex";
    if (techOsiContainer) techOsiContainer.style.display = "none";
    if (mapTitleText) mapTitleText.textContent = "🌊 Peta Bencana Alam Aktif (EWS KMKTSI & InaRisk)";
    if (heatmapTitle) heatmapTitle.textContent = "Heatmap Kerentanan Bencana Alam (5 x 5)";
    if (heatmapSubtitle) heatmapSubtitle.textContent = "Klik sel untuk melihat daftar KPwDN paling rentan";

    bcmCurveConfig.isTech = false;
    updateDynamicTrendChart("natural");
    populateDashboardActiveIncidentSelect("INC-2025-06-003");
    onDashboardActiveIncidentChange("INC-2025-06-003");
    renderRiskHeatmapWithDots("natural");
    renderTop5Table("natural");
    renderLeafletMarkers("natural");
    showToast("Fokus Aktif: Natural Disaster - L.1");
  } 
  else if (level === "manmade") {
    banner.style.display = "flex";
    banner.classList.add("manmade");
    bannerIcon.textContent = "👥";
    bannerTitle.textContent = "Fokus Pemantauan: Man Made Disaster - Level 2 (Bencana Sosial, Fisik & Kerusuhan)";
    bannerDesc.textContent = "Peta Indonesia menampilkan sebaran pelaporan insiden unjuk rasa masif, huru-hara, dan konflik sosial di titik koordinat KPw pelapor. Prosedur Lockdown & AO aktif.";
    if (filterSelect) filterSelect.value = "Man Made Disaster";

    if (mapContainer) mapContainer.style.display = "flex";
    if (techOsiContainer) techOsiContainer.style.display = "none";
    if (mapTitleText) mapTitleText.textContent = "👥 Peta Sebaran Pelaporan Insiden Man Made Disaster";
    if (heatmapTitle) heatmapTitle.textContent = "Heatmap Kerentanan Gangguan Sosial (5 x 5)";
    if (heatmapSubtitle) heatmapSubtitle.textContent = "Klik sel untuk melihat daftar KPwDN rawan konflik";

    bcmCurveConfig.isTech = false;
    updateDynamicTrendChart("manmade");
    populateDashboardActiveIncidentSelect("INC-2025-06-010");
    onDashboardActiveIncidentChange("INC-2025-06-010");
    renderRiskHeatmapWithDots("manmade");
    renderTop5Table("manmade");
    renderLeafletMarkers("manmade");
    showToast("Fokus Aktif: Man Made Disaster - L.2 (Pelaporan Riil)");
  } 
  else if (level === "tech") {
    banner.style.display = "flex";
    banner.classList.add("tech");
    bannerIcon.textContent = "💻";
    bannerTitle.textContent = "Fokus Pemantauan: Technology Disaster - Level 3 (7 Layers of OSI & 24 APTK)";
    bannerDesc.textContent = "Peta Indonesia digantikan dengan Grafik 7 Layers of OSI. Heatmap difokuskan pada ketersediaan 24 Aplikasi Pendukung Tugas Kritikal (APTK).";
    if (filterSelect) filterSelect.value = "Technology Disaster";

    // HIDE INDONESIA MAP, SHOW 7 LAYERS OF OSI GRAPHIC
    if (mapContainer) mapContainer.style.display = "none";
    if (techOsiContainer) techOsiContainer.style.display = "flex";
    if (heatmapTitle) heatmapTitle.textContent = "Risk Heatmap 24 APTK (Sistem Kritikal)";
    if (heatmapSubtitle) heatmapSubtitle.textContent = "Klik sel untuk melihat daftar aplikasi APTK";

    bcmCurveConfig.isTech = true;
    updateDynamicTrendChart("tech");
    populateDashboardActiveIncidentSelect("INC-2025-06-001");
    onDashboardActiveIncidentChange("INC-2025-06-001");
    renderRiskHeatmapWithDots("tech");
    renderTop5Table("tech");
    showToast("Fokus Aktif: Technology Disaster - L.3 (7 Layer OSI & 24 APTK)");
  }

  if (leafletMap && level !== "tech") {
    setTimeout(() => leafletMap.invalidateSize(), 150);
  }
  initBcmLambdaCurve();
}

function filterOsiLayer(layerNum) {
  const layerNames = {
    7: "Application Layer (BI-RTGS, BI-FAST, CBS)",
    6: "Presentation Layer (Enkripsi SSL/TLS & Ransomware)",
    5: "Session Layer (RPC Session & Handshake)",
    4: "Transport Layer (TCP Packet Drop & Load Balancer)",
    3: "Network Layer (Routing BGP & Provider Outage)",
    2: "Data Link Layer (Switching VLAN & ARP Storm)",
    1: "Physical Layer (Kabel FO Putus & Blackout Genset)"
  };
  showToast(`Melihat rincian Layer ${layerNum}: ${layerNames[layerNum]}`, "💻");
}

// Dynamic Trend Chart with Distinct Datasets
function initDisasterTrendChart() {
  const ctx = document.getElementById("disasterTrendChart");
  if (!ctx) return;

  trendChartInstance = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026"],
      datasets: [
        {
          label: "Natural Disaster",
          data: [6, 8, 11, 13, 14, 12, 16, 11, 4],
          borderColor: "#10b981",
          backgroundColor: "rgba(16, 185, 129, 0.08)",
          fill: true,
          tension: 0.35,
          borderWidth: 2,
          pointRadius: 3
        },
        {
          label: "Man Made Disaster",
          data: [3, 4, 5, 6, 7, 6, 8, 5, 2],
          borderColor: "#d97706",
          backgroundColor: "rgba(217, 119, 6, 0.08)",
          fill: true,
          tension: 0.35,
          borderWidth: 2,
          pointRadius: 3
        },
        {
          label: "Technology Disaster",
          data: [3, 6, 8, 9, 11, 9, 11, 7, 3],
          borderColor: "#2563eb",
          backgroundColor: "rgba(37, 99, 235, 0.08)",
          fill: true,
          tension: 0.35,
          borderWidth: 2,
          pointRadius: 3
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: "#09172d",
          titleColor: "#ffffff",
          bodyColor: "#f1f5f9",
          borderColor: "rgba(212, 175, 55, 0.3)",
          borderWidth: 1
        }
      },
      scales: {
        x: {
          grid: { color: "#f1f5f9" },
          ticks: { color: "#64748b", font: { size: 10 } }
        },
        y: {
          grid: { color: "#f1f5f9" },
          ticks: { color: "#64748b", font: { size: 10 }, stepSize: 5 }
        }
      }
    }
  });
}

function updateDynamicTrendChart(mode) {
  if (!trendChartInstance) return;

  const labelEl = document.getElementById("trenChartFilterLabel");

  if (mode === "general") {
    trendChartInstance.data.datasets[0].data = [6, 8, 11, 13, 14, 12, 16, 11, 4];
    trendChartInstance.data.datasets[1].data = [3, 4, 5, 6, 7, 6, 8, 5, 2];
    trendChartInstance.data.datasets[2].data = [3, 6, 8, 9, 11, 9, 11, 7, 3];
    trendChartInstance.data.datasets[0].hidden = false;
    trendChartInstance.data.datasets[1].hidden = false;
    trendChartInstance.data.datasets[2].hidden = false;
    if (labelEl) labelEl.textContent = "Semua Kategori (2018 - 2026)";
  } else if (mode === "natural") {
    trendChartInstance.data.datasets[0].data = [12, 15, 19, 24, 28, 22, 31, 20, 8];
    trendChartInstance.data.datasets[0].hidden = false;
    trendChartInstance.data.datasets[1].hidden = true;
    trendChartInstance.data.datasets[2].hidden = true;
    if (labelEl) labelEl.textContent = "Tren Bencana Alam (Natural Disaster L.1)";
  } else if (mode === "manmade") {
    trendChartInstance.data.datasets[1].data = [7, 9, 12, 14, 15, 11, 17, 10, 5];
    trendChartInstance.data.datasets[0].hidden = true;
    trendChartInstance.data.datasets[1].hidden = false;
    trendChartInstance.data.datasets[2].hidden = true;
    if (labelEl) labelEl.textContent = "Tren Bencana Manusia & Fisik (Man Made L.2)";
  } else if (mode === "tech") {
    trendChartInstance.data.datasets[2].data = [8, 14, 18, 22, 26, 20, 25, 16, 7];
    trendChartInstance.data.datasets[0].hidden = true;
    trendChartInstance.data.datasets[1].hidden = true;
    trendChartInstance.data.datasets[2].hidden = false;
    if (labelEl) labelEl.textContent = "Tren Gangguan TI & 24 APTK (Technology L.3)";
  }

  trendChartInstance.update();
}

// =============================================================================
// 8. LEAFLET INDONESIA MAP & RISK HEATMAP WITH DOTS
// =============================================================================

function initLeafletIndonesiaMap() {
  const mapContainer = document.getElementById("indonesiaLeafletMap");
  if (!mapContainer || leafletMap) return;

  leafletMap = L.map("indonesiaLeafletMap", {
    center: [-2.2, 118.0],
    zoom: 4.4,
    minZoom: 4,
    maxZoom: 9,
    zoomControl: false,
    attributionControl: false
  });

  L.control.zoom({ position: "bottomright" }).addTo(leafletMap);

  fetch("./indonesia-provinces.json")
    .then(res => res.json())
    .then(geoJsonData => {
      L.geoJSON(geoJsonData, {
        style: {
          fillColor: "#0f2347",
          fillOpacity: 0.85,
          color: "#d4af37",
          weight: 0.9,
          opacity: 0.6
        },
        onEachFeature: (feature, layer) => {
          layer.on({
            mouseover: (e) => {
              e.target.setStyle({ fillColor: "#1d3e75", fillOpacity: 0.95, weight: 1.5, color: "#fae8a4" });
            },
            mouseout: (e) => {
              e.target.setStyle({ fillColor: "#0f2347", fillOpacity: 0.85, weight: 0.9, color: "#d4af37" });
            }
          });
        }
      }).addTo(leafletMap);

      renderLeafletMarkers();
    })
    .catch(err => {
      console.warn("Falling back to tile layer:", err);
      L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
        maxZoom: 10
      }).addTo(leafletMap);
      renderLeafletMarkers();
    });
}

function renderLeafletMarkers(mode = currentMonitorSubView) {
  if (!leafletMap) return;

  if (!leafletMarkersGroup) {
    leafletMarkersGroup = L.layerGroup().addTo(leafletMap);
  } else {
    leafletMarkersGroup.clearLayers();
  }

  const colorMap = {
    "Rendah": "#22c55e",
    "Sedang": "#eab308",
    "Tinggi": "#f97316",
    "Sangat Tinggi": "#ef4444"
  };

  if (mode === "manmade") {
    // REQUIREMENT 1: Peta Sebaran Pelaporan Insiden Man Made Disaster pada titik KPw pelapor
    const mmIncidents = INCIDENTS_DATA.filter(x => x.disasterType === "Man Made Disaster");
    mmIncidents.forEach(inc => {
      const office = ALL_OFFICES_DATA.find(o => o.id === inc.satkerId || o.aliasId === inc.satkerId) || KANTOR_PUSAT_DATA;
      const isOpen = inc.status === "OPEN";
      const markerColor = isOpen ? "#dc2626" : "#d97706";

      const marker = L.circleMarker([office.lat, office.lng], {
        radius: isOpen ? 9 : 7,
        fillColor: markerColor,
        color: "#ffffff",
        weight: 2,
        opacity: 1,
        fillOpacity: 0.95
      });

      marker.bindPopup(`
        <div style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 11px; padding: 4px; color: #071120; min-width: 220px;">
          <span style="font-size: 9.5px; font-weight: 800; color: #d97706; background: rgba(217,119,6,0.12); padding: 2px 6px; border-radius: 3px; display: inline-block; margin-bottom: 4px;">
            👥 LAPORAN MAN MADE DISASTER
          </span>
          <div style="font-weight: 800; font-size: 12px; color: #071120;">${inc.satkerName}</div>
          <div style="color: #64748b; font-size: 10px; margin-top: 2px;">ID: ${inc.id} • ${inc.time ? inc.time.replace('T', ' ') : ''} WIB</div>
          <div style="margin-top: 5px; font-size: 11px; color: #b45309; font-weight: 700;">
            ⚠️ Kejadian: ${inc.subCategory}
          </div>
          <div style="margin-top: 4px; font-size: 10.5px; color: #334155; line-height: 1.35; background: #f8fafc; padding: 4px 6px; border-radius: 3px; border: 1px solid #e2e8f0;">
            ${inc.rootCause}
          </div>
          <div style="margin-top: 8px; display: flex; gap: 5px; align-items: center;">
            <span class="${isOpen ? 'status-badge-open' : 'status-badge-close'}" style="font-size: 9.5px; padding: 2px 6px;">
              ${inc.status}
            </span>
            <button style="background: #2563eb; color: #fff; border: none; padding: 3px 8px; border-radius: 3px; font-size: 10px; cursor: pointer; font-weight: 600;" onclick="openIncidentLambdaModal('${inc.id}')">
              📈 Kurva Lambda →
            </button>
            <button style="background: #09172d; color: #fff; border: none; padding: 3px 8px; border-radius: 3px; font-size: 10px; cursor: pointer; font-weight: 600;" onclick="openDetailProfilModal('${office.id}')">
              🏛️ Profil →
            </button>
          </div>
        </div>
      `);

      leafletMarkersGroup.addLayer(marker);
    });
  } 
  else if (mode === "natural") {
    // Natural Disaster hazard points
    ALL_OFFICES_DATA.forEach(satker => {
      const hazards = getOfficeHazards(satker);
      const primaryHazard = hazards[0] || { name: "Bencana Alam", level: "Sedang" };
      const color = primaryHazard.level === "Tinggi" ? "#ef4444" : "#10b981";

      const marker = L.circleMarker([satker.lat, satker.lng], {
        radius: satker.isKantorPusat ? 8 : satker.isKorwil ? 6.5 : 5,
        fillColor: color,
        color: "#ffffff",
        weight: 1.5,
        opacity: 1,
        fillOpacity: 0.9
      });

      marker.bindPopup(`
        <div style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 11px; padding: 4px; color: #071120;">
          <span style="font-size: 9.5px; font-weight: 800; color: #10b981; background: rgba(16,185,129,0.12); padding: 2px 6px; border-radius: 3px;">
            🌊 NATURAL DISASTER (INA-RISK)
          </span>
          <div style="margin-top: 4px; font-weight: 800; font-size: 12px; color: #071120;">${satker.name}</div>
          <div style="color: #64748b; font-size: 10px; margin-top: 1px;">Kota ${satker.city} • ${satker.region}</div>
          <div style="margin-top: 5px; font-size: 11px; color: #047857; font-weight: 700;">
            Potensi Utama: ${primaryHazard.name} (${primaryHazard.level})
          </div>
          <div style="margin-top: 6px;">
            <button style="background: #09172d; color: #fff; border: none; padding: 3px 8px; border-radius: 3px; font-size: 10px; cursor: pointer;" onclick="openDetailProfilModal('${satker.id}')">
              Lihat Profil Wilayah →
            </button>
          </div>
        </div>
      `);

      leafletMarkersGroup.addLayer(marker);
    });
  } 
  else {
    // General / default: all offices
    ALL_OFFICES_DATA.forEach(satker => {
      const color = colorMap[satker.level] || "#22c55e";
      const radius = satker.isKantorPusat ? 8 : satker.isKorwil ? 6.5 : 5;

      const marker = L.circleMarker([satker.lat, satker.lng], {
        radius: radius,
        fillColor: color,
        color: "#ffffff",
        weight: 1.5,
        opacity: 1,
        fillOpacity: 0.9
      });

      marker.bindPopup(`
        <div style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 11px; padding: 4px; color: #071120;">
          <strong style="font-size: 12px; color: #071120;">${satker.name}</strong><br>
          <span style="color: #64748b;">Wilayah: ${satker.region} • ${satker.city}</span><br>
          <div style="margin-top: 6px; display: flex; gap: 8px;">
            <span>Insiden: <strong>${satker.incidents}</strong></span>
            <span>Skor: <strong>${satker.riskScore}</strong></span>
            <span style="color: ${color}; font-weight: 700;">${satker.level}</span>
          </div>
          <div style="margin-top: 6px;">
            <button style="background: #09172d; color: #fff; border: none; padding: 3px 8px; border-radius: 3px; font-size: 10px; cursor: pointer;" onclick="openDetailProfilModal('${satker.id}')">
              Lihat Profil Wilayah →
            </button>
          </div>
        </div>
      `);

      leafletMarkersGroup.addLayer(marker);
    });
  }
}

// REQUIREMENT 2: Interactive 5x5 Heatmap with Click to View KPw or APTK
function renderRiskHeatmapWithDots(filterMode = "all") {
  const grid = document.getElementById("heatmapGrid");
  if (!grid) return;
  grid.innerHTML = "";

  const cellColors = [
    ["#fef2f2", "#fee2e2", "#fecaca", "#fca5a5", "#ef4444"], // D:5
    ["#fefce8", "#fef9c3", "#fef08a", "#fca5a5", "#f87171"], // D:4
    ["#f0fdf4", "#dcfce7", "#bbf7d0", "#fef08a", "#fde047"], // D:3
    ["#f0fdf4", "#dcfce7", "#bbf7d0", "#dcfce7", "#fef9c3"], // D:2
    ["#f0fdf4", "#f0fdf4", "#dcfce7", "#dcfce7", "#fef9c3"]  // D:1
  ];

  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 5; col++) {
      const cellKey = `${row}_${col}`;
      const cellData = HEATMAP_ENTITIES[cellKey] || { natural: [], manmade: [], tech: [] };

      const cell = document.createElement("div");
      cell.className = "heatmap-cell clickable";
      cell.style.backgroundColor = cellColors[row][col];
      cell.style.border = "1px solid rgba(0,0,0,0.06)";
      
      if (selectedHeatmapCell === cellKey) {
        cell.classList.add("active-cell");
      }

      let dotCount = 0;
      let dotType = "all";

      if (filterMode === "natural") {
        dotCount = cellData.natural.length;
        dotType = "natural";
      } else if (filterMode === "manmade") {
        dotCount = cellData.manmade.length;
        dotType = "manmade";
      } else if (filterMode === "tech") {
        dotCount = cellData.tech.length;
        dotType = "tech";
      } else {
        // General: accumulation of all three
        dotCount = cellData.natural.length + cellData.manmade.length + cellData.tech.length;
        dotType = "all";
      }

      const displayCount = Math.min(dotCount, 6);
      for (let i = 0; i < displayCount; i++) {
        const dot = document.createElement("span");
        dot.className = "incident-dot";
        if (dotType === "tech") {
          dot.className += " dot-tech";
        } else if (dotType === "natural") {
          dot.className += " dot-natural";
        } else if (dotType === "manmade") {
          dot.className += " dot-manmade";
        } else {
          if (i < cellData.natural.length) dot.className += " dot-natural";
          else if (i < cellData.natural.length + cellData.manmade.length) dot.className += " dot-manmade";
          else dot.className += " dot-tech";
        }
        cell.appendChild(dot);
      }

      const impact = 5 - row;
      const likelihood = col + 1;
      cell.title = `Dampak: ${impact}, Likelihood: ${likelihood} (${dotCount} entitas - Klik untuk melihat)`;

      cell.onclick = () => {
        selectedHeatmapCell = cellKey;
        document.querySelectorAll(".heatmap-cell").forEach(c => c.classList.remove("active-cell"));
        cell.classList.add("active-cell");
        onHeatmapCellClick(row, col, filterMode);
      };

      grid.appendChild(cell);
    }
  }

  // Update selected detail panel
  const detailPanel = document.getElementById("heatmapSelectedDetail");
  if (detailPanel && !selectedHeatmapCell) {
    detailPanel.style.display = "none";
  } else if (detailPanel && selectedHeatmapCell) {
    const [r, c] = selectedHeatmapCell.split("_").map(Number);
    onHeatmapCellClick(r, c, filterMode);
  }
}

function onHeatmapCellClick(row, col, filterMode) {
  const detailPanel = document.getElementById("heatmapSelectedDetail");
  if (!detailPanel) return;

  const cellKey = `${row}_${col}`;
  const cellData = HEATMAP_ENTITIES[cellKey] || { natural: [], manmade: [], tech: [] };
  const impact = 5 - row;
  const likelihood = col + 1;

  let riskCategory = "Rendah";
  let badgeColor = "#22c55e";
  const score = impact * likelihood;
  if (score >= 16) { riskCategory = "Sangat Tinggi"; badgeColor = "#ef4444"; }
  else if (score >= 10) { riskCategory = "Tinggi"; badgeColor = "#f97316"; }
  else if (score >= 5) { riskCategory = "Sedang"; badgeColor = "#eab308"; }

  let itemsHtml = "";

  if (filterMode === "natural") {
    if (cellData.natural.length === 0) {
      itemsHtml = `<div style="font-size: 11px; color: var(--text-muted); font-style: italic;">Tidak ada KPw pada kuadran risiko alam ini.</div>`;
    } else {
      itemsHtml = cellData.natural.map(name => {
        const office = ALL_OFFICES_DATA.find(o => name.includes(o.city) || name.includes(o.name)) || { id: "kpwbi-dki-jakarta" };
        return `
          <div style="display: flex; justify-content: space-between; align-items: center; background: #ffffff; padding: 6px 10px; border-radius: 4px; border: 1px solid #e2e8f0; font-size: 11px;">
            <div style="display: flex; align-items: center; gap: 6px;">
              <span class="incident-dot dot-natural" style="width: 8px; height: 8px;"></span>
              <strong style="color: var(--text-dark);">${name}</strong>
            </div>
            <button class="action-link-btn" onclick="openDetailProfilModal('${office.id}')" style="font-size: 10px; padding: 2px 8px;">
              🏛️ Profil
            </button>
          </div>
        `;
      }).join("");
    }
  } else if (filterMode === "manmade") {
    if (cellData.manmade.length === 0) {
      itemsHtml = `<div style="font-size: 11px; color: var(--text-muted); font-style: italic;">Tidak ada KPw pada kuadran risiko sosial ini.</div>`;
    } else {
      itemsHtml = cellData.manmade.map(name => {
        const office = ALL_OFFICES_DATA.find(o => name.includes(o.city) || name.includes(o.name)) || { id: "kpwbi-dki-jakarta" };
        return `
          <div style="display: flex; justify-content: space-between; align-items: center; background: #ffffff; padding: 6px 10px; border-radius: 4px; border: 1px solid #e2e8f0; font-size: 11px;">
            <div style="display: flex; align-items: center; gap: 6px;">
              <span class="incident-dot dot-manmade" style="width: 8px; height: 8px;"></span>
              <strong style="color: var(--text-dark);">${name}</strong>
            </div>
            <button class="action-link-btn" onclick="openDetailProfilModal('${office.id}')" style="font-size: 10px; padding: 2px 8px;">
              🏛️ Profil
            </button>
          </div>
        `;
      }).join("");
    }
  } else if (filterMode === "tech") {
    if (cellData.tech.length === 0) {
      itemsHtml = `<div style="font-size: 11px; color: var(--text-muted); font-style: italic;">Tidak ada APTK pada kuadran risiko teknologi ini.</div>`;
    } else {
      itemsHtml = cellData.tech.map(name => {
        const cleanName = name.split(" ")[0];
        return `
          <div style="display: flex; justify-content: space-between; align-items: center; background: #ffffff; padding: 6px 10px; border-radius: 4px; border: 1px solid #e2e8f0; font-size: 11px;">
            <div style="display: flex; align-items: center; gap: 6px;">
              <span class="incident-dot dot-tech" style="width: 8px; height: 8px;"></span>
              <strong style="color: var(--text-dark);">${name}</strong>
            </div>
            <button class="action-link-btn" onclick="highlightAptkByName('${cleanName}')" style="font-size: 10px; padding: 2px 8px;">
              💻 Rincian APTK
            </button>
          </div>
        `;
      }).join("");
    }
  } else {
    // General / all: show all combined
    const totalItems = cellData.natural.length + cellData.manmade.length + cellData.tech.length;
    if (totalItems === 0) {
      itemsHtml = `<div style="font-size: 11px; color: var(--text-muted); font-style: italic;">Tidak ada entitas pada kuadran risiko ini.</div>`;
    } else {
      const naturalList = cellData.natural.map(name => `
        <div style="display: flex; justify-content: space-between; align-items: center; background: #ffffff; padding: 5px 8px; border-radius: 3px; border: 1px solid #e2e8f0; font-size: 10.5px;">
          <div style="display: flex; align-items: center; gap: 5px;">
            <span class="incident-dot dot-natural"></span>
            <span>${name}</span>
          </div>
          <span style="font-size: 9.5px; color: #10b981; font-weight: 700;">Natural</span>
        </div>
      `).join("");

      const manmadeList = cellData.manmade.map(name => `
        <div style="display: flex; justify-content: space-between; align-items: center; background: #ffffff; padding: 5px 8px; border-radius: 3px; border: 1px solid #e2e8f0; font-size: 10.5px;">
          <div style="display: flex; align-items: center; gap: 5px;">
            <span class="incident-dot dot-manmade"></span>
            <span>${name}</span>
          </div>
          <span style="font-size: 9.5px; color: #d97706; font-weight: 700;">Man-Made</span>
        </div>
      `).join("");

      const techList = cellData.tech.map(name => `
        <div style="display: flex; justify-content: space-between; align-items: center; background: #ffffff; padding: 5px 8px; border-radius: 3px; border: 1px solid #e2e8f0; font-size: 10.5px;">
          <div style="display: flex; align-items: center; gap: 5px;">
            <span class="incident-dot dot-tech"></span>
            <span>${name}</span>
          </div>
          <span style="font-size: 9.5px; color: #2563eb; font-weight: 700;">APTK</span>
        </div>
      `).join("");

      itemsHtml = naturalList + manmadeList + techList;
    }
  }

  detailPanel.style.display = "block";
  detailPanel.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
      <div>
        <strong style="font-size: 11.5px; color: var(--text-dark);">
          🎯 Kuadran: Dampak ${impact} × Likelihood ${likelihood}
        </strong>
        <span style="font-size: 10px; color: var(--text-muted); margin-left: 6px;">(Skor: ${score})</span>
      </div>
      <span style="font-size: 10px; font-weight: 800; padding: 2px 7px; border-radius: 3px; background: ${badgeColor}22; color: ${badgeColor}; border: 1px solid ${badgeColor}44;">
        ${riskCategory}
      </span>
    </div>
    <div style="font-size: 10.5px; color: var(--text-muted); margin-bottom: 6px;">
      ${filterMode === "tech" ? "Aplikasi Pendukung Tugas Kritikal (APTK) pada kuadran ini:" : "Entitas KPwDN / Satker pada kuadran ini:"}
    </div>
    <div style="display: flex; flex-direction: column; gap: 4px; max-height: 140px; overflow-y: auto;">
      ${itemsHtml}
    </div>
  `;
}

function highlightAptkByName(shortName) {
  switchMainView("incident-report");
  const catFilter = document.getElementById("incCategoryFilter");
  if (catFilter) {
    catFilter.value = "Technology Disaster";
    onIncidentCategoryFilterChange();
  }
  const searchAptk = document.getElementById("searchAptkList");
  if (searchAptk) {
    searchAptk.value = shortName;
    filterAptkList();
  }
  showToast(`Membuka matriks APTK: ${shortName}`, "💻");
}

function getOfficePhoto(office) {
  // Return high quality architectural photos of Bank Indonesia buildings
  const photos = {
    "kpwbi-kantor-pusat": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
    "kpwbi-surabaya": "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=600&q=80",
    "kpwbi-medan": "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=600&q=80",
    "kpwbi-makassar": "https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=600&q=80",
    "kpwbi-denpasar": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
    "kpwbi-bandung": "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&q=80",
    "kpwbi-semarang": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80"
  };

  if (photos[office.id]) return photos[office.id];
  // Stable hash based photo for other KPwDN
  const hash = office.id.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const fallbacks = [
    "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=600&q=80"
  ];
  return fallbacks[hash % fallbacks.length];
}

function haversineDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
}

function findNearestOffices(targetOffice) {
  const list = [];
  ALL_OFFICES_DATA.forEach(o => {
    if (o.id !== targetOffice.id) {
      const dist = haversineDistance(targetOffice.lat, targetOffice.lng, o.lat, o.lng);
      list.push({ office: o, distanceKm: Math.round(dist * 10) / 10 });
    }
  });
  list.sort((a, b) => a.distanceKm - b.distanceKm);
  return list.slice(0, 3);
}

function filterByHazard(hazardType) {
  selectedHazardFilter = hazardType;
  document.querySelectorAll("#hazardFilterChips .h-chip").forEach(btn => {
    btn.classList.toggle("active", btn.id === `chipHazard-${hazardType}`);
  });
  renderRegionDirectory();
}

function getOfficeHazards(office) {
  const hazards = [];
  const city = (office.city || "").toLowerCase();
  const id = (office.id || "").toLowerCase();
  const region = (office.region || "").toLowerCase();

  // 1. DKI JAKARTA / KANTOR PUSAT
  if (id.includes("kantor-pusat") || id.includes("dki-jakarta") || city.includes("jakarta")) {
    hazards.push({
      name: "Banjir & Genangan Pesisir (Rob)",
      category: "Banjir",
      level: "Tinggi",
      score: 86,
      geoDesc: "Dataran rendah pesisir Teluk Jakarta dengan penurunan muka tanah dan luapan DAS Ciliwung saat curah hujan ekstrem di hulu.",
      impactDesc: "Ancaman genangan pada akses masuk jalan protokol Thamrin, area basemen teknis, dan potensi perlambatan distribusi armada PUR.",
      historyDesc: "Genangan jalan protokol Thamrin pada Februari 2020 dan Januari 2024 terdeteksi, floodgate otomatis dan pompa submersible berhasil mencegah air masuk ke gedung.",
      mitigationDesc: "Aktivasi flood-gate otomatis di gerbang barat, pemompaan submersible 200 liter/detik, penyiapan genset darurat lantai mezanin, dan koordinasi pengawalan armada kas dengan Ditlantas Polda Metro Jaya."
    });
    hazards.push({
      name: "Gempa Megathrust Selat Sunda",
      category: "Gempa",
      level: "Sedang",
      score: 68,
      geoDesc: "Rambatan gelombang seismik dari zona subduksi lempeng Indo-Australia di Selat Sunda dan patahan darat Baribis di selatan Jakarta.",
      impactDesc: "Guncangan pada gedung bertingkat tinggi Menara BI Thamrin, potensi evakuasi massal staf, dan trigger failover sistem TI.",
      historyDesc: "Getaran gempa M 6.6 Banten (2022) dirasakan kuat di gedung KP BI; protokol evakuasi tangga darurat berlangsung tertib tanpa kerusakan struktural.",
      mitigationDesc: "Penerapan sistem struktur peredam seismik (tuned mass damper), inspeksi integritas pilar pasca-gempa dalam 30 menit, dan failover otomatis DC Thamrin ke DRC Karawang."
    });
    hazards.push({
      name: "Cuaca Ekstrem & Angin Kencang Monsun",
      category: "Cuaca",
      level: "Sedang",
      score: 62,
      geoDesc: "Awan konvektif kumulonimbus pada masa peralihan musim memicu angin puting beliung dan kilat intensitas tinggi.",
      impactDesc: "Gangguan suplai daya listrik dari gardu transmisi PLN dan potensi kerusakan antena telekomunikasi rooftop.",
      historyDesc: "Fluktuasi tegangan PLN akibat sambaran petir di gardu induk pada November 2023, sistem UPS seamless mentransfer beban tanpa interupsi transaksi.",
      mitigationDesc: "Sistem penangkal petir elektrostatis radius 150m, UPS redundant N+2, dan kontrak suplai solar genset prioritas dengan Pertamina."
    });
  }

  // 2. BANDUNG & JAWA BARAT
  else if (id.includes("bandung") || id.includes("tasikmalaya") || id.includes("cirebon")) {
    hazards.push({
      name: "Banjir Bandang & Luapan Sungai Citarum",
      category: "Banjir",
      level: "Tinggi",
      score: 88,
      geoDesc: "Topografi cekungan Bandung yang dikelilingi pegunungan dengan hilir sungai Citarum yang rentan mengalami backwater saat hujan lebat.",
      impactDesc: "Akses logistik kas jalan Braga/Asia Afrika terancam, genangan air di halaman dan risiko lembab pada ruang khazanah bawah tanah.",
      historyDesc: "Luapan sungai Cikapundung pada musim penghujan 2023 sempat menutup akses perimeter kantor selama 4 jam.",
      mitigationDesc: "Pemasangan tanggul portabel di pintu masuk, sensor level air IoT terhubung ke BMS (Building Management System), dan SOP pengalihan kliring ke KPwBI Cirebon."
    });
    hazards.push({
      name: "Gempa Bumi Sesar Lembang (Aktif 29 Km)",
      category: "Gempa",
      level: "Tinggi",
      score: 92,
      geoDesc: "Patahan sesar aktif Lembang sepanjang 29 km berjarak kurang dari 12 km dari gedung KPwBI, berpotensi memicu gempa dangkal M 6.5 - 7.0.",
      impactDesc: "Kerusakan struktur gedung cagar budaya/heritage, potensi keruntuhan plafon ruang operasional kas, dan putusnya fiber optik darat.",
      historyDesc: "Simulasi kontinjensi gempa bumi berkala digelar bersama BMKG dan BPBD Jabar dengan fokus penyelamatan uang rupiah di khazanah.",
      mitigationDesc: "Perkuatan seismik pada struktur ruang khazanah, titik kumpul evakuasi di lapangan terbuka, radio satelit darurat, dan Alternate Office di Tasikmalaya."
    });
    hazards.push({
      name: "Tanah Longsor Jalur Transportasi PUR Perbukitan",
      category: "Longsor",
      level: "Sedang",
      score: 74,
      geoDesc: "Karakteristik tanah vulkanik lapuk di lereng curam jalur penghubung Bandung-Garut-Tasikmalaya.",
      impactDesc: "Terputusnya jalur darat armada kas kas titipan dan keterlambatan pengiriman uang kartal ke perbankan daerah terpencil.",
      historyDesc: "Longsor di jalur Nagreg pada 2024 sempat menunda pengiriman uang PUR selama 8 jam.",
      mitigationDesc: "SOP rute alternatif Purwakarta-Subang, pengawalan armada ganda Brimob, dan buffer kas 45 hari di kas titipan."
    });
  }

  // 3. SEMARANG & JAWA TENGAH
  else if (id.includes("semarang") || id.includes("tegal") || id.includes("solo") || id.includes("purwokerto")) {
    hazards.push({
      name: "Banjir Rob & Penurunan Muka Tanah Pesisir",
      category: "Banjir",
      level: "Tinggi",
      score: 94,
      geoDesc: "Kombinasi pasang air laut maksimum di pesisir utara Semarang dan laju land subsidence mencapai 8-10 cm/tahun.",
      impactDesc: "Genangan air asin pada basement gedung, korosi pada instalasi genset bawah tanah, dan hambatan akses armada kas.",
      historyDesc: "Rob ekstrem merendam kawasan Kota Lama Semarang pada Mei 2022 dan Januari 2024; pompa polder BI berhasil mengisolasi gedung dari genangan.",
      mitigationDesc: "Sistem tanggul polder mandiri setinggi 1.5 meter, 4 unit pompa berkapasitas 350 l/s, dan relokasi instalasi ME ke lantai mezanin."
    });
    hazards.push({
      name: "Gempa Bumi Sesar Semarang & Kaligarang",
      category: "Gempa",
      level: "Sedang",
      score: 72,
      geoDesc: "Struktur patahan sesar mendatar aktif Kaligarang yang melintasi zona perbukitan dan dataran aluvium Semarang.",
      impactDesc: "Guncangan pada dinding struktural gedung dan dislokasi koneksi jaringan telekomunikasi kabel bawah tanah.",
      historyDesc: "Gempa darat dangkal M 4.2 pada 2023 dirasakan II-III MMI tanpa kerusakan fisik gedung.",
      mitigationDesc: "Audit berkala kekuatan struktur gedung dengan sertifikat laik fungsi, sensor deteksi guncangan dini terhubung ke sistem alarm gedung."
    });
    hazards.push({
      name: "Cuaca Ekstrem Hujan Badai Pesisir Jawa",
      category: "Cuaca",
      level: "Sedang",
      score: 66,
      geoDesc: "Angin kencang monsun barat disertai gelombang laut tinggi di Laut Jawa.",
      impactDesc: "Kerusakan ornamen fasad gedung, pohon tumbang di akses keluar masuk, dan gangguan listrik PLN lokal.",
      historyDesc: "Hujan badai pada Maret 2024 menyebabkan tiang utilitas di depan gerbang miring, ditangani cepat oleh tim tanggap darurat.",
      mitigationDesc: "Pemangkasan pohon berkala di ring-1 gedung, inspeksi kanopi kaca dan penutup atap setiap pergantian musim."
    });
  }

  // 4. SURABAYA & JAWA TIMUR
  else if (id.includes("surabaya") || id.includes("malang") || id.includes("kediri") || id.includes("jember")) {
    hazards.push({
      name: "Banjir Rob & Pasang Surut Kalimas",
      category: "Banjir",
      level: "Tinggi",
      score: 82,
      geoDesc: "Pesisir Selat Madura dengan pasang surut air laut dan aliran sungai Kalimas yang membelah kota Surabaya.",
      impactDesc: "Genangan pada jalur logistik kas Jl. Pahlawan, potensi air merembes ke saluran drainase basemen gedung kas.",
      historyDesc: "Curah hujan tinggi bertepatan dengan rob pada awal 2024 teratasi dengan sistem klep otomatis drainase BI Surabaya.",
      mitigationDesc: "Klep otomatis non-return valve pada drainase pembuangan kota, pompa alkon cadangan 4 unit, peninggian ramp loading dock PUR."
    });
    hazards.push({
      name: "Erupsi Gunung Api (Kelud & Semeru) & Abu Vulkanik",
      category: "Erupsi",
      level: "Tinggi",
      score: 93,
      geoDesc: "Gunung Kelud dan Semeru merupakan gunung api strato paling aktif di Jawa Timur dengan riwayat lontaran abu vulkanik puluhan kilometer.",
      impactDesc: "Sebaran abu vulkanik pekat menyumbat filter AHU server data center, korosi pada komponen pendingin, dan penutupan bandara Juanda.",
      historyDesc: "Erupsi Kelud 2014 menyebarkan abu setebal 2 cm di Surabaya; gedung BI sempat menghentikan sirkulasi udara luar selama 48 jam.",
      mitigationDesc: "Instalasi pre-filter abu vulkanik wash-able pada seluruh sistem pendingin HVAC, terpal pelindung genset luar ruang, dan stok filter HEPA cadangan."
    });
    hazards.push({
      name: "Gempa Sesar Surabaya & Waru",
      category: "Gempa",
      level: "Sedang",
      score: 75,
      geoDesc: "Jalur sesar aktif Waru yang membentang dari Nganjuk, Jombang, Mojokerto hingga Surabaya.",
      impactDesc: "Guncangan pada gedung cagar budaya Jl. Pahlawan dan gedung baru Jl. Mayjen Sungkono.",
      historyDesc: "Monitoring BMKG mencatat pelepasan energi mikro secara berkala; SOP evakuasi diuji setiap semester.",
      mitigationDesc: "Struktur retrofit gedung cagar budaya dengan serat karbon, jalur komunikasi radio UHF terintegrasi ke seluruh perbankan mitra kliring."
    });
  }

  // 5. YOGYAKARTA & SOLO
  else if (id.includes("yogyakarta") || id.includes("solo")) {
    hazards.push({
      name: "Erupsi Gunung Merapi (Awan Panas & Hujan Abu)",
      category: "Erupsi",
      level: "Tinggi",
      score: 96,
      geoDesc: "Terletak 28 km di selatan puncak Gunung Merapi, salah satu gunung api paling aktif di dunia dengan kubah lava aktif.",
      impactDesc: "Sebaran abu vulkanik korosif, potensi hujan abu lebat menghentikan aktivitas kas luar ruangan, dan penutupan bandara YIA/Adisutjipto.",
      historyDesc: "Erupsi besar Merapi 2010 dan erupsi efusif 2023 menyelimuti wilayah DIY; gedung BI mengaktifkan protokol 'Red Alert Merapi'.",
      mitigationDesc: "SOP pengalihan operasional kas ke KPwBI Solo jika level Merapi Awas (Level IV), perlindungan intake udara server, dan masker respirator N95 untuk seluruh personel kas."
    });
    hazards.push({
      name: "Gempa Bumi Sesar Opak Tektonik",
      category: "Gempa",
      level: "Tinggi",
      score: 90,
      geoDesc: "Sesar aktif Opak membentang di lembah sungai Opak dari Prambanan hingga muara Samudera Hindia di pantai Depok.",
      impactDesc: "Potensi guncangan kuat M > 6.0 seperti kejadian gempa 27 Mei 2006, kerusakan integritas struktural gedung.",
      historyDesc: "Gempa Yogya 2006 (M 5.9) mengakibatkan kerusakan parah di DIY; gedung BI selamat berkat pondasi tahan gempa dan cepat menjadi posko kontinjensi perbankan.",
      mitigationDesc: "Struktur bangunan khazanah berstandar seismic zone 4, pasokan air mandiri deep-well, dan satelit VSAT cadangan untuk menjamin kontinuitas kliring BI-FAST."
    });
    hazards.push({
      name: "Banjir Lahar Hujan Sungai Code",
      category: "Banjir",
      level: "Sedang",
      score: 70,
      geoDesc: "Aliran sungai Code yang membelah kota Yogya menampung material jutaan meter kubik lahar dingin pasca erupsi Merapi.",
      impactDesc: "Luapan material pasir dan lumpur merusak jembatan akses penghubung ke kantor perbankan mitra.",
      historyDesc: "Banjir lahar hujan 2011 sempat merendam bantaran Code dekat jembatan Sayidan.",
      mitigationDesc: "SOP rute pengawalan armada kas menghindari jembatan sungai vulkanik, monitoring CCTV sungai terhubung dengan BPBD DIY."
    });
  }

  // 6. PADANG & SUMATERA BARAT
  else if (id.includes("padang") || id.includes("bengkulu")) {
    hazards.push({
      name: "Gempa Megathrust Mentawai M > 8.0",
      category: "Gempa",
      level: "Tinggi",
      score: 96,
      geoDesc: "Zona subduksi lempeng Indo-Australia terhadap Eurasia di segmen Mentawai yang menyimpan seismic gap berpotensi gempa M 8.8.",
      impactDesc: "Guncangan katastropik, potensi kerusakan bangunan utama, dan pemadaman total listrik serta telekomunikasi regional.",
      historyDesc: "Gempa Padang 30 September 2009 (M 7.6) merusak ribuan gedung; BI Padang mengoperasikan kas darurat di halaman tenda lapangan.",
      mitigationDesc: "Gedung baru BI Padang dirancang tahan gempa M 9.0 dengan sistem base-isolator, buffer logistik darurat 14 hari, dan evakuasi ke Bukittinggi."
    });
    hazards.push({
      name: "Tsunami Pesisir Barat Sumatera",
      category: "Tsunami",
      level: "Tinggi",
      score: 95,
      geoDesc: "Garis pantai Padang berjarak sangat dekat dengan zona patahan dasar laut, dengan perkiraan waktu tiba gelombang tsunami 20-30 menit.",
      impactDesc: "Rendaman tsunami hingga ketinggian 6-10 meter di zona merah pesisir pantai Padang.",
      historyDesc: "Simulasi Tsunami Indian Ocean Wave (IOWave) rutin dilakukan; staf dilatih evakuasi vertikal dalam waktu kurang dari 15 menit.",
      mitigationDesc: "Rooftop gedung BI Padang difungsikan sebagai TES (Tempat Evakuasi Sementara) bersertifikasi BNPB untuk staf dan masyarakat sekitar, pintu khazanah kedap air hidrolik."
    });
    hazards.push({
      name: "Banjir Bandang (Galodo) & Luapan Sungai Arau",
      category: "Banjir",
      level: "Tinggi",
      score: 88,
      geoDesc: "Curah hujan lebat di lereng Bukit Barisan membawa material lumpur dan bebatuan (Galodo) ke aliran Batang Arau dan Kuranji.",
      impactDesc: "Terputusnya jalan lintas Padang-Solok dan Padang-Bukittinggi, memperlambat distribusi uang rupiah.",
      historyDesc: "Banjir bandang lahar dingin Marapi pada Mei 2024 memutus jalur Lembah Anai; distribusi PUR dialihkan via jalur Malalak.",
      mitigationDesc: "SOP pengawalan khusus jalur alternatif perbukitan dan penyimpanan kas cadangan di sentra kas Bukittinggi."
    });
  }

  // 7. PALU & SULAWESI TENGAH
  else if (id.includes("palu") || id.includes("mamuju")) {
    hazards.push({
      name: "Gempa Sesar Palu-Koro & Likuifaksi",
      category: "Gempa",
      level: "Tinggi",
      score: 98,
      geoDesc: "Sesar mendatar strike-slip Palu-Koro melintasi langsung pusat kota Palu dengan kecepatan pergeseran aktif 35 mm/tahun.",
      impactDesc: "Guncangan dahsyat, hilangnya daya dukung tanah akibat likuifaksi, dan runtuhnya sarana prasarana vital.",
      historyDesc: "Bencana gempa, tsunami, dan likuifaksi 28 September 2018 (M 7.5); gedung BI Palu bertahan secara struktural dan menjadi pusat distribusi uang tunai darurat bagi relawan dan warga.",
      mitigationDesc: "Pondasi tiang pancang mencapai batuan dasar keras bebas zona likuifaksi, sistem satelit Starlink/VSAT mandiri, dan Alternate Office kontinjensi di Mamuju/Makassar."
    });
    hazards.push({
      name: "Tsunami Teluk Palu",
      category: "Tsunami",
      level: "Tinggi",
      score: 92,
      geoDesc: "Teluk sempit Palu yang memperkuat gelombang tsunami akibat longsoran sedimen bawah laut pasca gempa.",
      impactDesc: "Genangan air laut pekat menyapu pesisir Teluk Palu hingga 400 meter ke daratan.",
      historyDesc: "Tsunami 2018 setinggi hingga 6 meter menyapu pesisir Talise dalam waktu 3 menit pasca gempa utama.",
      mitigationDesc: "Lokasi kantor di zona hijau aman elevasi > 25 mdpl, sirine EWS tsunami otomatis terhubung BMKG di ruang security control."
    });
    hazards.push({
      name: "Banjir Sedimentasi Sungai Palu",
      category: "Banjir",
      level: "Sedang",
      score: 68,
      geoDesc: "Pendangkalan dasar sungai Palu akibat erosi hulu di wilayah Sigi pasca gempa.",
      impactDesc: "Genangan luapan air di ruas jalan jembatan penghubung Palu Barat dan Palu Timur.",
      historyDesc: "Hujan deras berdurasi panjang pada 2023 sempat merendam badan jalan di sekitar tanggul sungai.",
      mitigationDesc: "Armada kas kabin tinggi (4WD) dan pemantauan level sungai via sensor radar."
    });
  }

  // 8. MANADO & SULAWESI UTARA
  else if (id.includes("manado") || id.includes("gorontalo")) {
    hazards.push({
      name: "Erupsi Gunung Api (Ruang & Lokon) & Abu Vulkanik",
      category: "Erupsi",
      level: "Tinggi",
      score: 95,
      geoDesc: "Gugusan gunung api aktif di busur vulkanik Sangihe (Gunung Ruang, Karangetang, Lokon, Soputan) dengan karakter letusan eksplosif.",
      impactDesc: "Hujan abu vulkanik pekat, penutupan bandara Sam Ratulangi berhari-hari, dan lumpuhnya jalur transportasi laut ke pulau terluar.",
      historyDesc: "Erupsi Gunung Ruang pada April-Mei 2024 memaksa penutupan bandara selama lebih dari seminggu; BI Manado menjaga stabilitas kas melalui pasokan buffer darurat.",
      mitigationDesc: "Penyediaan buffer kas rupiah minimum 60 hari kebutuhan Sulut, sistem penyaring udara kabin gedung, dan Alternate Office di Gorontalo."
    });
    hazards.push({
      name: "Banjir Bandang DAS Sawangan & Tondano",
      category: "Banjir",
      level: "Tinggi",
      score: 84,
      geoDesc: "Luapan sungai Tondano dan Tikala yang bertemu di pusat kota Manado saat curah hujan ekstrem di dataran tinggi Minahasa.",
      impactDesc: "Genangan air setinggi 1-2 meter di jalan protokol depan kantor dan risiko air masuk ke basemen gedung.",
      historyDesc: "Banjir bandang Manado Januari 2014 dan Januari 2023 merendam pusat bisnis; instalasi tanggul BI Manado terbukti menahan air masuk ke area kas.",
      mitigationDesc: "Tembok perimeter kedap air, 3 unit pompa drainase daya tinggi dengan genset cadangan terisolasi di lantai 2."
    });
    hazards.push({
      name: "Gempa Laut Maluku & Sesar Darat",
      category: "Gempa",
      level: "Sedang",
      score: 80,
      geoDesc: "Pertemuan lempeng laut Maluku dan sesar darat aktif Minahasa dengan frekuensi kegempaan dangkal cukup tinggi.",
      impactDesc: "Guncangan pada dinding kaca gedung dan potensi ancaman tsunami lokal di pesisir Manado.",
      historyDesc: "Gempa M 7.1 Laut Maluku pada 2019 memicu peringatan dini tsunami; staf dievakuasi ke lantai atas gedung.",
      mitigationDesc: "Pintu darurat tangga ganda dengan lampu darurat baterai 8 jam dan drill evakuasi terencana."
    });
  }

  // 9. JAYAPURA & PAPUA
  else if (id.includes("jayapura") || id.includes("manokwari") || id.includes("merauke")) {
    hazards.push({
      name: "Gempa Bumi Dangkal Sesar Mamberamo-Jayapura",
      category: "Gempa",
      level: "Tinggi",
      score: 91,
      geoDesc: "Aktivitas sesar aktif di pesisir utara Papua yang memicu gempa dangkal berulang dengan kedalaman kurang dari 10 km.",
      impactDesc: "Kerusakan struktur gedung, keretakan dinding khazanah, dan putusnya kabel fiber optik darat.",
      historyDesc: "Rentetan gempa dangkal Jayapura pada Januari-Februari 2023 (ribuan gempa susulan) merusak fasilitas umum; BI Jayapura mengamankan kas dengan patroli struktur harian.",
      mitigationDesc: "Pondasi gedung berstandar anti-gempa tinggi, inspeksi harian sensor retakan dinding khazanah, dan alternate operasional kas."
    });
    hazards.push({
      name: "Banjir Bandang Lereng Pegunungan Cycloop",
      category: "Banjir",
      level: "Tinggi",
      score: 89,
      geoDesc: "Kelerengan curam cagar alam Pegunungan Cycloop dengan curah hujan tinggi yang berbatasan langsung dengan area perkotaan Jayapura-Sentani.",
      impactDesc: "Lumpur dan gelondongan kayu menutup akses jalan utama ke bandara Sentani dan pelabuhan, memutus distribusi kas PUR.",
      historyDesc: "Banjir bandang Sentani Maret 2019 menewaskan ratusan warga dan memutus akses darat selama berhari-hari.",
      mitigationDesc: "Stok kas di bandara Sentani, pemanfaatan helikopter TNI/Polri untuk pengiriman uang mendesak, dan cadangan pangan darurat 10 hari."
    });
    hazards.push({
      name: "Tanah Longsor Akses Logistik Kas",
      category: "Longsor",
      level: "Sedang",
      score: 75,
      geoDesc: "Topografi perbukitan terjal sepanjang jalur darat Jayapura-Keerom dan Jayapura-Sarmi.",
      impactDesc: "Keterlambatan armada kas keliling dan kas titipan ke wilayah perbatasan Papua Nugini.",
      historyDesc: "Longsoran tebing di jalan poros Abepura-Sentani pada 2024 sempat menghambat mobilitas staf perbankan.",
      mitigationDesc: "Koordinasi Balai Jalan Nasional, radio komunikasi HF untuk pemantauan rute armada kas secara real time."
    });
  }

  // 10. KALIMANTAN (PONTIANAK, PALANGKA RAYA, BANJARMASIN, SAMARINDA, BALIKPAPAN, TARAKAN)
  else if (region.includes("kalimantan") || id.includes("pontianak") || id.includes("palangka") || id.includes("banjarmasin") || id.includes("samarinda") || id.includes("balikpapan") || id.includes("tarakan")) {
    hazards.push({
      name: "Kebakaran Hutan & Lahan (Karhutla) Lahan Gambut",
      category: "Karhutla",
      level: "Tinggi",
      score: 94,
      geoDesc: "Hamparan lahan gambut dalam yang mengering saat kemarau panjang El-Nino dan sangat mudah terbakar hingga lapisan bawah tanah.",
      impactDesc: "Kabut asap pekat berbahaya (ISPU > 300), penurunan jarak pandang ekstrim (< 200 meter), gangguan pernapasan staf, dan penundaan penerbangan kas.",
      historyDesc: "Karhutla hebat 2019 dan September 2023 menyebabkan sekolah dan kantor WFH; gedung BI beroperasi dengan sistem isolasi udara tertutup.",
      mitigationDesc: "Pemasangan sistem air purifier HEPA skala industri di ruang operasional kas & kantor, stok masker respirator N95 untuk seluruh pegawai, dan protokol WFH 50% saat ISPU Berbahaya."
    });
    hazards.push({
      name: "Banjir Pasang Surut & Luapan Sungai Besar",
      category: "Banjir",
      level: "Tinggi",
      score: 86,
      geoDesc: "Karakteristik dataran aluvial sungai Barito, Kapuas, dan Kahayan yang dipengaruhi fluktuasi pasang surut air laut muara.",
      impactDesc: "Genangan air merata di ruas jalan protokol selama berminggu-minggu, perlambatan operasional kas perbankan.",
      historyDesc: "Banjir besar Kalsel Januari 2021 merendam 11 kabupaten/kota; KPwBI Banjarmasin tetap beroperasi sebagai urat nadi transaksi keuangan daerah.",
      mitigationDesc: "Peninggian lantai dasar bangunan setinggi 1.2 meter di atas muka jalan, armada kas perahu karet amphibious, dan genset terapung."
    });
    hazards.push({
      name: "Kabut Asap Pekat & Gangguan Jarak Pandang Logistik PUR",
      category: "Cuaca",
      level: "Tinggi",
      score: 88,
      geoDesc: "Jebakan asap inversi suhu atmosfer di dataran rendah Kalimantan saat musim kemarau.",
      impactDesc: "Penerbangan kargo pengiriman uang rupiah terhenti di bandara Syamsudin Noor / Tjilik Riwut / Supadio.",
      historyDesc: "Penutupan bandara Palangka Raya selama 5 hari berturut-turut pada krisis asap 2019.",
      mitigationDesc: "Buffer stok kas di khazanah kantor ditingkatkan menjadi 90 hari saat memasuki status Siaga Karhutla BMKG."
    });
  }

  // 11. KUPANG & NUSA TENGGARA TIMUR
  else if (id.includes("kupang")) {
    hazards.push({
      name: "Cuaca Ekstrem Siklon Tropis (Seroja)",
      category: "Cuaca",
      level: "Tinggi",
      score: 94,
      geoDesc: "Wilayah lintasan pembentukan siklon tropis Samudera Hindia dan Laut Timor bagian selatan Indonesia pada bulan April-Mei.",
      impactDesc: "Angin kencang berkecepatan > 100 km/jam merusak atap gedung, pohon tumbang memutus jaringan listrik PLN hingga berminggu-minggu.",
      historyDesc: "Siklon Tropis Seroja (April 2021) memporak-porandakan Kupang; BI Kupang menjadi salah satu fasilitas yang pulih paling cepat berkat ketahanan genset dan satelit.",
      mitigationDesc: "Perkuatan struktur atap gedung penahan beban angin badai, penyiapan cadangan solar genset untuk 30 hari, dan sistem komunikasi satelit Iridium."
    });
    hazards.push({
      name: "Gempa Busur Belakang Flores & Sesar Timor",
      category: "Gempa",
      level: "Tinggi",
      score: 86,
      geoDesc: "Aktivitas patahan naik busur belakang Flores dan pergerakan sesar darat Timor.",
      impactDesc: "Guncangan pada dinding gedung dan potensi gelombang laut tinggi di Selat Semau.",
      historyDesc: "Gempa M 6.6 Kupang pada November 2023 dirasakan kuat; alarm gedung berbunyi dan evakuasi berlangsung aman.",
      mitigationDesc: "Struktur bangunan bertingkat rendah tahan gempa dan jalur evakuasi lapangan upacara luas."
    });
    hazards.push({
      name: "Kekeringan Ekstrem & Kelangkaan Air Bersih",
      category: "Cuaca",
      level: "Sedang",
      score: 65,
      geoDesc: "Musim kemarau panjang hingga 8 bulan di wilayah kepulauan sabana NTT.",
      impactDesc: "Penurunan debit air tanah untuk kebutuhan sanitasi gedung dan operasional fasilitas pendingin genset.",
      historyDesc: "Kekeringan panjang pada periode El-Nino 2023.",
      mitigationDesc: "Penampungan air bawah tanah (ground reservoir) berkapasitas 100.000 liter dan sistem daur ulang air limbah (greywater treatment)."
    });
  }

  // 12. BALI & MATARAM (NUSA TENGGARA BARAT)
  else if (id.includes("denpasar") || id.includes("mataram")) {
    hazards.push({
      name: "Erupsi Gunung Api (Agung & Rinjani)",
      category: "Erupsi",
      level: "Tinggi",
      score: 92,
      geoDesc: "Gunung Agung di Bali dan Gunung Rinjani di Lombok merupakan gunung api raksasa dengan potensi letusan kolom abu > 10 km.",
      impactDesc: "Penutupan bandara internasional I Gusti Ngurah Rai dan Zainuddin Abdul Madjid, kelumpuhan sektor pariwisata dan transaksi valas.",
      historyDesc: "Krisis erupsi Gunung Agung 2017-2018 menyebabkan penutupan bandara berulang kali; BI Denpasar mengamankan ketersediaan likuiditas kas perbankan.",
      mitigationDesc: "Protokol kontinjensi ketersediaan valuta asing dan rupiah, penyaringan udara ruang server, dan koneksi DRC cadangan."
    });
    hazards.push({
      name: "Gempa Megathrust Busur Belakang Sunda-Banda",
      category: "Gempa",
      level: "Tinggi",
      score: 90,
      geoDesc: "Patahan naik busur belakang di laut utara Lombok-Bali (Flores Back-Arc Thrust) dan zona megathrust selatan Bali.",
      impactDesc: "Guncangan kuat merusak gedung, seperti gempa beruntun Lombok Juli-Agustus 2018 (M 7.0).",
      historyDesc: "Gempa Lombok 2018 melumpuhkan sebagian besar bangunan di Mataram; BI Mataram cepat mendirikan layanan penukaran uang darurat bagi warga.",
      mitigationDesc: "Audit struktural ketat bangunan khazanah, tenda darurat kas lapangan modular, dan koordinasi Alternate Office Denpasar-Mataram."
    });
    hazards.push({
      name: "Tsunami Pesisir Selatan & Selat Lombok",
      category: "Tsunami",
      level: "Sedang",
      score: 75,
      geoDesc: "Kawasan pesisir pantai selatan Bali dan Lombok yang berhadapan langsung dengan zona megathrust Samudera Hindia.",
      impactDesc: "Ancaman gelombang pasang pada kawasan sentra ekonomi pesisir Sanur, Kuta, dan Senggigi.",
      historyDesc: "Peringatan tsunami BMKG saat gempa M 7.0 Lombok 2018; evakuasi mandiri staf berjalan tertib.",
      mitigationDesc: "Pemberian sertifikat Tsunami Ready Community UNESCO untuk kawasan pesisir terkait dan sirene peringatan dini."
    });
  }

  // 13. AMBON & TERNATE (MALUKU & MALUKU UTARA)
  else if (id.includes("ambon") || id.includes("ternate")) {
    hazards.push({
      name: "Gempa Laut Banda & Halmahera",
      category: "Gempa",
      level: "Tinggi",
      score: 94,
      geoDesc: "Zona tektonik paling rumit di dunia dengan pertemuan lempeng Pasifik, Eurasia, dan Indo-Australia serta lempeng mikro Halmahera.",
      impactDesc: "Guncangan gempa dangkal berulang yang dapat memicu longsoran bawah laut dan kerusakan fisik khazanah.",
      historyDesc: "Gempa Ambon 2019 (M 6.5) mengakibatkan ribuan warga mengungsi; operasional BI Ambon tetap terjaga dengan pemeriksaan rutin struktur.",
      mitigationDesc: "Pondasi bangunan dengan bantalan elastisitas peredam gempa, penyiapan kas lapangan, dan Alternate Office Ternate/Makassar."
    });
    hazards.push({
      name: "Erupsi Gunung Gamalama (Ternate)",
      category: "Erupsi",
      level: "Tinggi",
      score: 94,
      geoDesc: "Pulau Ternate merupakan pulau gunung api kerucut tunggal Gamalama yang berdiri langsung dari dasar laut.",
      impactDesc: "Lontaran abu dan pasir vulkanik langsung menyelimuti seluruh kota Ternate dalam hitungan menit.",
      historyDesc: "Erupsi Gamalama pada 2011, 2015, dan 2018 sempat menutup bandara Babullah Ternate dan melumpuhkan jalan lingkar pulau.",
      mitigationDesc: "SOP evakuasi operasional kas ke pulau Tidore atau Halmahera Barat via armada speedboat kontinjensi, stok terpal dan masker."
    });
    hazards.push({
      name: "Cuaca Ekstrem Gelombang Tinggi Antar-Pulau",
      category: "Cuaca",
      level: "Tinggi",
      score: 82,
      geoDesc: "Perairan laut dalam terbuka Laut Banda dan Laut Maluku dengan tinggi gelombang > 4 meter saat angin monsun timur.",
      impactDesc: "Kapal penyeberangan kas terhenti, menghambat distribusi uang kartal ke kas titipan kepulauan terluar (Aru, Tanimbar, Sula).",
      historyDesc: "Gelombang tinggi pada Juli 2023 menunda kas keliling 3T selama 12 hari.",
      mitigationDesc: "Kerjasama pengawalan KRI TNI Angkatan Laut untuk distribusi kas pulau terluar pada periode cuaca ekstrem."
    });
  }

  // 14. BANDA ACEH & LHOKSEUMAWE
  else if (id.includes("aceh") || id.includes("lhokseumawe")) {
    hazards.push({
      name: "Gempa Megathrust Andaman-Sumatera & Sesar Besar Sumatera",
      category: "Gempa",
      level: "Tinggi",
      score: 95,
      geoDesc: "Ujung barat subduksi lempeng Indo-Australia dan segmen aktif Sesar Seulimeum di daratan Aceh.",
      impactDesc: "Guncangan berkekuatan besar, potensi likuifaksi di daerah aluvium pesisir, dan pemadaman transmisi daya.",
      historyDesc: "Gempa dan tsunami 26 Desember 2004 (M 9.1) dan gempa Pidie Jaya 2016; memicu pembaharuan total standar kesiapsiagaan BCM Bank Indonesia.",
      mitigationDesc: "Gedung baru BI Banda Aceh dibangun dengan standar bunker tahan gempa megathrust dan escape hill vertikal di lantai 4."
    });
    hazards.push({
      name: "Tsunami Samudera Hindia",
      category: "Tsunami",
      level: "Tinggi",
      score: 92,
      geoDesc: "Pesisir utara dan barat Aceh langsung berhadapan dengan Samudera Hindia tanpa perintang pulau karang.",
      impactDesc: "Gelombang tsunami raksasa menyapu daratan dalam waktu 15-20 menit pasca gempa dasar laut.",
      historyDesc: "Peristiwa Tsunami 2004 merupakan pelajaran ketahanan BCM terbesar di dunia perbankan Indonesia.",
      mitigationDesc: "Elevasi tanah gedung ditinggikan, pintu kedap air baja tebal di ruang khazanah bawah tanah, dan sirine tsunami mandiri."
    });
    hazards.push({
      name: "Banjir Luapan Krueng Aceh / Krueng Cunda",
      category: "Banjir",
      level: "Sedang",
      score: 72,
      geoDesc: "Aliran sungai Krueng Aceh saat hujan deras di hulu pegunungan Jantho.",
      impactDesc: "Genangan pada badan jalan protokol menuju kantor perbankan daerah.",
      historyDesc: "Banjir luapan pada akhir 2023 teratasi berkat kanal banjir Krueng Aceh.",
      mitigationDesc: "Pompa apung submersible dan peninggian batas ambang pintu gerbang masuk."
    });
  }

  // 15. FALLBACK UMUM (KANTOR PERWAKILAN LAINNYA)
  else {
    if (region.includes("sumatera")) {
      hazards.push({
        name: "Gempa Bumi Sesar Sumatera (Semangko)",
        category: "Gempa",
        level: "Tinggi",
        score: 84,
        geoDesc: "Jalur patahan aktif mendatar Sesar Semangko membentang sepanjang 1.900 km di Bukit Barisan.",
        impactDesc: "Guncangan pada konstruksi gedung dan pergeseran saluran pipa utilitas kota.",
        historyDesc: "Getaran gempa darat berkala tercatat BMKG tanpa merusak fasilitas operasional.",
        mitigationDesc: "Perkuatan struktur pilar dan pelatihan drop-cover-hold tahunan staf."
      });
      hazards.push({
        name: "Banjir Luapan Sungai & Genangan",
        category: "Banjir",
        level: "Tinggi",
        score: 80,
        geoDesc: "Daerah aliran sungai dataran rendah Sumatera saat intensitas curah hujan tinggi musiman.",
        impactDesc: "Genangan di halaman kantor dan risiko perlambatan armada kas PUR.",
        historyDesc: "Genangan air 20-30 cm di jalan akses sempat terjadi pada musim penghujan.",
        mitigationDesc: "SOP penyedotan pompa portabel dan barrier penahan air."
      });
      hazards.push({
        name: "Kebakaran Hutan & Lahan (Karhutla)",
        category: "Karhutla",
        level: "Sedang",
        score: 72,
        geoDesc: "Kawasan perkebunan dan semak belukar yang rentan terbakar saat musim kemarau kering.",
        impactDesc: "Kabut asap menurunkan visibilitas armada kas dan mengganggu kesehatan pernapasan staf.",
        historyDesc: "Kenaikan indeks ISPU pada musim kemarau ditangani dengan penyaringan udara gedung.",
        mitigationDesc: "Pemberian masker N95 dan pengoperasian filter udara HEPA."
      });
    } else if (region.includes("jawa")) {
      hazards.push({
        name: "Banjir Genangan & Luapan Saluran Kota",
        category: "Banjir",
        level: "Tinggi",
        score: 80,
        geoDesc: "Kepadatan drainase perkotaan di dataran aluvial Jawa yang rawan tersumbat saat hujan lebat.",
        impactDesc: "Genangan air di jalan akses utama dan potensi air masuk ke basement.",
        historyDesc: "Pernah terjadi genangan 15 cm di perimeter gerbang, pompa gedung aktif normal.",
        mitigationDesc: "Pembersihan saluran berkala dan penyiapan karung pasir kontinjensi."
      });
      hazards.push({
        name: "Gempa Bumi Tektonik Darat",
        category: "Gempa",
        level: "Sedang",
        score: 70,
        geoDesc: "Sesar lokal di pulau Jawa yang aktif melepaskan energi seismik dangkal.",
        impactDesc: "Guncangan terasa di ruang kerja, potensi kepanikan evakuasi.",
        historyDesc: "Gempa kecil tercatat tanpa kerusakan struktural.",
        mitigationDesc: "Drill evakuasi berkala dan inspeksi visual struktur gedung."
      });
      hazards.push({
        name: "Cuaca Ekstrem Angin Kencang",
        category: "Cuaca",
        level: "Sedang",
        score: 62,
        geoDesc: "Angin kencang konvektif disertai petir pada musim pancaroba.",
        impactDesc: "Gangguan jalur pasokan daya PLN dan dahan pohon patah.",
        historyDesc: "Genset otomatis mem-backup daya saat pemadaman sesaat.",
        mitigationDesc: "Pemeliharaan genset N+1 dan sistem grounding petir gedung."
      });
    } else {
      hazards.push({
        name: "Gempa Bumi Tektonik",
        category: "Gempa",
        level: "Tinggi",
        score: 82,
        geoDesc: "Kawasan aktif sesar tektonik di wilayah kepulauan Indonesia.",
        impactDesc: "Guncangan pada struktur gedung dan potensi hambatan transaksi perbankan.",
        historyDesc: "Gempa skala sedang pernah dirasakan tanpa menghentikan kegiatan kas.",
        mitigationDesc: "Inspeksi rutin gedung dan koordinasi Alternate Office terdekat."
      });
      hazards.push({
        name: "Banjir Bandang & Genangan",
        category: "Banjir",
        level: "Sedang",
        score: 75,
        geoDesc: "Karakteristik daerah aliran sungai lokal saat curah hujan ekstrem.",
        impactDesc: "Akses mobilitas kas terhambat sementara.",
        historyDesc: "Genangan surut dalam 2-3 jam berkat pompa drainase.",
        mitigationDesc: "SOP peninggian pintu khazanah dan armada kas 4WD."
      });
      hazards.push({
        name: "Cuaca Ekstrem Angin Badai & Gelombang Laut",
        category: "Cuaca",
        level: "Sedang",
        score: 68,
        geoDesc: "Dinamika atmosfer perairan kepulauan tropis saat musim angin barat/timur.",
        impactDesc: "Hambatan logistik penyeberangan pengiriman uang kartal.",
        historyDesc: "Penjadwalan ulang kas titipan laut saat gelombang tinggi.",
        mitigationDesc: "Buffer kas di kepulauan terluar minimum 30-45 hari."
      });
    }
  }

  return hazards;
}

function openHazardDetailModal(officeId, hazardName) {
  const office = ALL_OFFICES_DATA.find(o => o.id === officeId) || KANTOR_PUSAT_DATA;
  currentHazardOfficeId = office.id;
  const hazards = getOfficeHazards(office);
  const hazard = hazards.find(h => h.name.toLowerCase() === (hazardName || "").toLowerCase()) || hazards[0];

  document.getElementById("hazardDetailTitleName").textContent = hazard.name;
  document.getElementById("hazardDetailOfficeName").textContent = office.name;
  document.getElementById("hazardDetailHazardName").textContent = hazard.name;
  document.getElementById("hazardDetailLocation").textContent = `${office.city} • Koordinat: ${office.lat}, ${office.lng}`;

  const scoreBadge = document.getElementById("hazardDetailScoreBadge");
  if (scoreBadge) {
    let badgeClass = "badge-risk-medium";
    let icon = "🟡";
    if (hazard.level === "Tinggi") {
      badgeClass = "badge-risk-high";
      icon = "🔴";
    } else if (hazard.level === "Rendah") {
      badgeClass = "badge-risk-low";
      icon = "🟢";
    }
    scoreBadge.innerHTML = `<span class="badge ${badgeClass}" style="font-size: 12px; padding: 4px 10px;">${icon} ${hazard.level.toUpperCase()} (Skor InaRisk: ${hazard.score})</span>`;
  }

  document.getElementById("hazardDetailGeoDesc").textContent = hazard.geoDesc;
  document.getElementById("hazardDetailImpactDesc").textContent = hazard.impactDesc;
  document.getElementById("hazardDetailHistoryDesc").textContent = hazard.historyDesc;
  document.getElementById("hazardDetailMitigationDesc").textContent = hazard.mitigationDesc;

  openModal("modalHazardDetail");
}

function openProfilDetailFromHazard() {
  closeModal("modalHazardDetail");
  if (currentHazardOfficeId) {
    openDetailProfilModal(currentHazardOfficeId);
  }
}

function getOfficeReadinessScore(officeId) {
  const hash = officeId.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return 82 + (hash % 16); // 82% to 97%
}

function renderRegionDirectory() {
  const container = document.getElementById("regionDirectoryGrid");
  if (!container) return;

  const searchQuery = (document.getElementById("profilSearchInput")?.value || "").toLowerCase().trim();
  const regionFilter = document.getElementById("profilRegionFilter")?.value || "Semua";
  const sortFilter = document.getElementById("profilSortFilter")?.value || "name";

  let filtered = ALL_OFFICES_DATA.filter(office => {
    const hazards = getOfficeHazards(office);

    // 1. Search Query checks: office name, city, region, AND hazards (name, category, descriptions)
    let matchSearch = true;
    if (searchQuery) {
      const matchOffice = office.name.toLowerCase().includes(searchQuery) ||
                          office.city.toLowerCase().includes(searchQuery) ||
                          office.region.toLowerCase().includes(searchQuery);

      const matchHazard = hazards.some(h => 
        h.name.toLowerCase().includes(searchQuery) ||
        h.category.toLowerCase().includes(searchQuery) ||
        h.geoDesc.toLowerCase().includes(searchQuery) ||
        h.impactDesc.toLowerCase().includes(searchQuery) ||
        h.historyDesc.toLowerCase().includes(searchQuery) ||
        h.mitigationDesc.toLowerCase().includes(searchQuery)
      ) || (office.disasterHazards && office.disasterHazards.toLowerCase().includes(searchQuery));

      matchSearch = matchOffice || matchHazard;
    }

    // 2. Quick Hazard Chip Filter:
    let matchHazardFilter = true;
    if (selectedHazardFilter !== "Semua") {
      const target = selectedHazardFilter.toLowerCase();
      matchHazardFilter = hazards.some(h => 
        h.category.toLowerCase().includes(target) ||
        h.name.toLowerCase().includes(target)
      );
    }

    // 3. Region filter:
    const matchRegion = regionFilter === "Semua" || office.region === regionFilter;

    return matchSearch && matchHazardFilter && matchRegion;
  });

  if (sortFilter === "name") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortFilter === "scoreDesc") {
    filtered.sort((a, b) => getOfficeReadinessScore(b.id) - getOfficeReadinessScore(a.id));
  } else if (sortFilter === "scoreAsc") {
    filtered.sort((a, b) => getOfficeReadinessScore(a.id) - getOfficeReadinessScore(b.id));
  } else if (sortFilter === "risk") {
    filtered.sort((a, b) => (b.riskScore || 0) - (a.riskScore || 0));
  }

  container.innerHTML = "";

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; background: #ffffff; border: 1px dashed var(--border-light); border-radius: var(--radius-md); padding: 40px; text-align: center; color: var(--text-muted);">
        <div style="font-size: 32px; margin-bottom: 8px;">🔍</div>
        <div style="font-weight: 700; color: var(--text-dark); font-size: 14px;">Tidak ada Kantor Bank Indonesia yang cocok dengan kriteria pencarian</div>
        <div style="font-size: 12px; margin-top: 4px;">Coba gunakan kata kunci bencana lain seperti <em>banjir, gempa, tsunami, erupsi, karhutla, longsor</em> atau klik tombol "Semua Bencana".</div>
      </div>
    `;
    return;
  }

  filtered.forEach(office => {
    const card = document.createElement("div");
    card.className = "region-card";
    const score = getOfficeReadinessScore(office.id);
    const hazards = getOfficeHazards(office);
    const nearest = findNearestOffices(office)[0];
    const photoUrl = getOfficePhoto(office);

    const korwilBadge = office.isKantorPusat
      ? `<span style="font-size: 10px; font-weight: 800; padding: 2px 8px; border-radius: 4px; background: rgba(212, 175, 55, 0.9); color: #071120;">🏛️ KANTOR PUSAT</span>`
      : office.isKorwil
      ? `<span style="font-size: 10px; font-weight: 800; padding: 2px 8px; border-radius: 4px; background: rgba(37, 99, 235, 0.9); color: #ffffff;">★ KORWIL</span>`
      : "";

    // Build interactive hazard chips with highlight on matching search
    const hazardChipsHtml = hazards.map(h => {
      const isMatched = (searchQuery && (h.name.toLowerCase().includes(searchQuery) || h.category.toLowerCase().includes(searchQuery))) ||
                        (selectedHazardFilter !== "Semua" && (h.category.toLowerCase().includes(selectedHazardFilter.toLowerCase()) || h.name.toLowerCase().includes(selectedHazardFilter.toLowerCase())));
      const highlightClass = isMatched ? "highlighted" : "";
      const dangerClass = h.level === "Tinggi" ? "danger" : "";
      const escapedName = h.name.replace(/'/g, "\\'");
      return `<span class="hazard-chip ${dangerClass} ${highlightClass}" onclick="event.stopPropagation(); openHazardDetailModal('${office.id}', '${escapedName}')" title="Klik untuk melihat rincian kerentanan ${h.name}">
        ${h.name} (${h.level}) 🔍
      </span>`;
    }).join("");

    card.innerHTML = `
      <div>
        <div class="region-photo-wrap" onclick="openDetailProfilModal('${office.id}')" style="cursor: pointer;">
          <img class="region-photo-img" src="${photoUrl}" alt="${office.name}">
          <div class="region-photo-overlay">
            <span style="font-size: 11px; font-weight: 700; color: #fff;">${office.city}</span>
            <div>${korwilBadge}</div>
          </div>
        </div>

        <div class="region-card-body">
          <div class="region-card-title" onclick="openDetailProfilModal('${office.id}')" style="cursor: pointer;">${office.name}</div>
          <div class="region-card-meta">📍 ${office.city} • Wilayah ${office.region}</div>

          <div style="margin-top: 10px;">
            <div style="font-size: 10.5px; color: var(--text-muted); font-weight: 700; margin-bottom: 5px; display: flex; justify-content: space-between;">
              <span>Potensi Kerentanan (InaRisk):</span>
              <span style="color: var(--gold-primary); font-size: 9.5px;">💡 Klik chip untuk rincian</span>
            </div>
            <div class="region-hazards-chips">
              ${hazardChipsHtml}
            </div>
          </div>

          <div style="margin-top: 10px; background: #f8fafc; padding: 8px 10px; border-radius: var(--radius-sm); border: 1px solid var(--border-light); font-size: 11px;">
            <span style="color: var(--text-muted);">Alternatif AO:</span>
            <strong style="color: var(--text-dark); margin-left: 4px;">${nearest ? nearest.office.city : "-"}</strong>
            <span style="color: var(--gold-primary); font-weight: 700; margin-left: 4px;">(${nearest ? nearest.distanceKm : 0} km)</span>
          </div>
        </div>
      </div>

      <div class="region-card-footer">
        <div>
          <span style="color: var(--text-muted); font-size: 10px; font-weight: 700;">Kesiapan BCM:</span>
          <strong style="color: var(--gold-primary); font-size: 14px; margin-left: 4px;">${score}%</strong>
        </div>
        <div style="display: flex; gap: 6px; align-items: center;">
          <a href="${office.gmapsUrl || '#'}" target="_blank" rel="noopener noreferrer" class="btn-gmaps-link" onclick="event.stopPropagation();" title="Buka Lokasi di Google Maps">
            <span>🗺️ Maps ↗</span>
          </a>
          <button class="btn-primary" style="padding: 4px 10px; font-size: 11px;" onclick="openDetailProfilModal('${office.id}')">
            Detail Profil →
          </button>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

function openDetailProfilModal(officeId) {
  currentProfilOfficeId = officeId;
  const office = ALL_OFFICES_DATA.find(o => o.id === officeId || o.aliasId === officeId) || KPWDN_DATA[0];

  document.getElementById("profilModalTitle").innerHTML = `<span>🏛️</span> Detail Profil Wilayah: ${office.name}`;
  document.getElementById("pmOfficeName").textContent = office.name;
  document.getElementById("pmOfficeCity").textContent = `Kota ${office.city} • Wilayah ${office.region}`;
  document.getElementById("pmOfficeCoord").textContent = `Koordinat GPS: ${office.lat}, ${office.lng} • Status: ${office.isKantorPusat ? "Kantor Pusat Bank Indonesia" : office.isKorwil ? "Koordinator Wilayah (KORWIL)" : "Kantor Perwakilan"}`;
  
  const photoEl = document.getElementById("pmOfficePhoto");
  if (photoEl) photoEl.src = getOfficePhoto(office);

  const score = getOfficeReadinessScore(office.id);
  document.getElementById("pmReadinessScore").textContent = `${score}%`;
  const badgeEl = document.getElementById("pmReadinessBadge");
  if (badgeEl) {
    badgeEl.textContent = score >= 90 ? "Tingkat Sangat Tinggi" : score >= 80 ? "Tingkat Tinggi" : "Tingkat Cukup";
  }

  // Populate Profil Tab (Requirement 5)
  const nearest = findNearestOffices(office)[0];
  const nearestText = nearest ? `${nearest.office.name} (${nearest.office.city}) • Jarak: ${nearest.distanceKm} km` : "Kantor Pusat Bank Indonesia";
  
  const hazards = getOfficeHazards(office);
  const hazardsSummary = hazards.length > 0 
    ? hazards.map(h => `${h.name} (${h.level})`).join("; ") 
    : (office.disasterHazards || "Gempa Bumi (Sedang), Cuaca Ekstrem (Sedang)");

  const alamatEl = document.getElementById("pmAlamatLengkap");
  if (alamatEl) alamatEl.textContent = office.address || `Gedung Kantor Bank Indonesia, Kota ${office.city}`;

  const kerentananEl = document.getElementById("pmKerentananBencana");
  if (kerentananEl) kerentananEl.textContent = hazardsSummary;

  const lkaEl = document.getElementById("pmLkaAlternatif");
  if (lkaEl) lkaEl.textContent = office.lkaAlternatif || `Alternate Site Gedung Bappeda / Korwil ${office.region}`;

  const kpwTerdekatEl = document.getElementById("pmKpwTerdekat");
  if (kpwTerdekatEl) kpwTerdekatEl.textContent = nearestText;

  const statusSaatIniEl = document.getElementById("pmStatusSaatIni");
  if (statusSaatIniEl) {
    const statusText = office.currentStatus || (office.level === "Sangat Tinggi" ? "Ditenggarai Krisis" : office.level === "Tinggi" ? "Normal Siaga" : "Normal Stabil");
    const badgeClass = statusText.includes("Krisis") ? "belum" : statusText.includes("Siaga") ? "siaga" : "stabil";
    statusSaatIniEl.innerHTML = `<span class="badge-status ${badgeClass}">● ${statusText}</span>`;
  }

  const gmapsBtn = document.getElementById("pmGmapsBtn");
  if (gmapsBtn) {
    gmapsBtn.href = office.gmapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.name + ', ' + office.city + ', Indonesia')}`;
  }

  // Load SDM
  const hash = office.id.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const organik = office.isKantorPusat ? 850 : 60 + (hash % 100);
  const pur = office.isKantorPusat ? 180 : 15 + (hash % 30);
  const kas = office.isKantorPusat ? 90 : 10 + (hash % 20);

  document.getElementById("pmSdmOrganik").textContent = `${organik} Pegawai`;
  document.getElementById("pmSdmPur").textContent = `${pur} Pegawai`;
  document.getElementById("pmSdmKas").textContent = `${kas} Personel`;

  // Load SDLK (Sarpras)
  loadSarprasTable(office.id);

  // Load Riwayat Insiden
  loadOfficeIncidentHistory(office.id);

  // Trisula Dokumen Links
  const pktUrl = localStorage.getItem(`bi_pkt_onedrive_${office.id}`) || `https://onedrive.live.com/?id=PKT_${office.id.toUpperCase()}_2025`;
  const draUrl = localStorage.getItem(`bi_dra_onedrive_${office.id}`) || `https://onedrive.live.com/?id=DRA_${office.id.toUpperCase()}_2025`;
  const bcsUrl = localStorage.getItem(`bi_bcs_onedrive_${office.id}`) || `https://onedrive.live.com/?id=BCS_${office.id.toUpperCase()}_2025`;

  document.getElementById("linkDocPkt").href = pktUrl;
  document.getElementById("linkDocDra").href = draUrl;
  document.getElementById("linkDocBcs").href = bcsUrl;

  switchPillarTab("profil");
  openModal("modalDetailProfil");
}

function switchPillarTab(tab) {
  document.getElementById("ptabBtnProfil")?.classList.toggle("active", tab === "profil");
  document.getElementById("ptabBtnSdm")?.classList.toggle("active", tab === "sdm");
  document.getElementById("ptabBtnSdlk")?.classList.toggle("active", tab === "sdlk");
  document.getElementById("ptabBtnSdtd")?.classList.toggle("active", tab === "sdtd");
  document.getElementById("ptabBtnRiwayat")?.classList.toggle("active", tab === "riwayat");

  document.getElementById("panelPillarProfil")?.classList.toggle("active", tab === "profil");
  document.getElementById("panelPillarSdm")?.classList.toggle("active", tab === "sdm");
  document.getElementById("panelPillarSdlk")?.classList.toggle("active", tab === "sdlk");
  document.getElementById("panelPillarSdtd")?.classList.toggle("active", tab === "sdtd");
  document.getElementById("panelPillarRiwayat")?.classList.toggle("active", tab === "riwayat");
}

// Sarpras Table Data with "Tanggal Update Informasi" Column
const DEFAULT_SARPRAS = [
  { item: "Genset Catu Daya Utama", qty: "3 Unit (2 x 500 kVA + 1 x 250 kVA)", desc: "Kondisi Siaga 100%, Cadangan Solar 72 Jam", updateDate: "Mei 2026" },
  { item: "UPS Data Center & Khazanah", qty: "2 Set Paralel (120 kVA)", desc: "Baterai Baru, Waktu Topang 60 Menit", updateDate: "April 2026" },
  { item: "Ruang Komando Krisis (Command Center)", qty: "1 Unit (Kapasitas 30 Orang)", desc: "Dual TV Video Conference, Telepon Satelit", updateDate: "Maret 2026" },
  { item: "Antena Satelit VSAT Cadangan", qty: "1 Unit Ku-Band + Starlink", desc: "Auto-Failover Jaringan Leased-Line", updateDate: "Mei 2026" },
  { item: "Kendaraan Khusus Evakuasi & Kas", qty: "3 Unit 4WD Double Cabin", desc: "Kondisi Prima, Radio Komunikasi Terpasang", updateDate: "Februari 2026" }
];

function loadSarprasTable(officeId) {
  const tbody = document.getElementById("sarprasTableBody");
  if (!tbody) return;
  tbody.innerHTML = "";

  const saved = localStorage.getItem(`sarpras_${officeId}`);
  let data = DEFAULT_SARPRAS;
  if (saved) {
    try {
      data = JSON.parse(saved);
    } catch (e) {}
  }

  data.forEach((row, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${i + 1}</td>
      <td><input type="text" class="form-input" style="padding: 3px 6px; font-size: 11px;" value="${row.item}"></td>
      <td><input type="text" class="form-input" style="padding: 3px 6px; font-size: 11px;" value="${row.qty}"></td>
      <td><input type="text" class="form-input" style="padding: 3px 6px; font-size: 11px;" value="${row.desc}"></td>
      <td><input type="text" class="form-input" style="padding: 3px 6px; font-size: 11px; width: 110px;" value="${row.updateDate}"></td>
      <td style="text-align: center;">
        <button class="action-edit-btn" style="color: #dc2626;" onclick="deleteSarprasRow(this)" title="Hapus Baris">✕</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function addSarprasRow() {
  const tbody = document.getElementById("sarprasTableBody");
  if (!tbody) return;
  const count = tbody.querySelectorAll("tr").length + 1;

  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${count}</td>
    <td><input type="text" class="form-input" style="padding: 3px 6px; font-size: 11px;" placeholder="Nama Barang"></td>
    <td><input type="text" class="form-input" style="padding: 3px 6px; font-size: 11px;" placeholder="Jumlah / Kapasitas"></td>
    <td><input type="text" class="form-input" style="padding: 3px 6px; font-size: 11px;" placeholder="Deskripsi & Kondisi"></td>
    <td><input type="text" class="form-input" style="padding: 3px 6px; font-size: 11px; width: 110px;" value="Mei 2026"></td>
    <td style="text-align: center;">
      <button class="action-edit-btn" style="color: #dc2626;" onclick="deleteSarprasRow(this)" title="Hapus Baris">✕</button>
    </td>
  `;
  tbody.appendChild(tr);
}

function deleteSarprasRow(btn) {
  btn.closest("tr").remove();
}

function saveSarprasTable() {
  const tbody = document.getElementById("sarprasTableBody");
  if (!tbody || !currentProfilOfficeId) return;

  const rows = [];
  tbody.querySelectorAll("tr").forEach(tr => {
    const inputs = tr.querySelectorAll("input");
    if (inputs.length >= 4) {
      rows.push({
        item: inputs[0].value.trim(),
        qty: inputs[1].value.trim(),
        desc: inputs[2].value.trim(),
        updateDate: inputs[3].value.trim()
      });
    }
  });

  localStorage.setItem(`sarpras_${currentProfilOfficeId}`, JSON.stringify(rows));
  showToast("Tabel Sarpras & Tanggal Update Informasi berhasil disimpan!", "💾");
}

function loadOfficeIncidentHistory(officeId) {
  const tbody = document.getElementById("pmIncidentsHistoryBody");
  if (!tbody) return;
  tbody.innerHTML = "";

  const incidents = INCIDENTS_DATA.filter(x => x.satkerId === officeId || (officeId === "kpwbi-kantor-pusat" && x.satkerId.startsWith("satker-")));

  if (incidents.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 16px;">Tidak ada catatan riwayat gangguan operasional pada kantor ini.</td></tr>`;
    return;
  }

  incidents.forEach(inc => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><strong>${inc.id}</strong></td>
      <td>${inc.time.replace("T", " ")}</td>
      <td>${inc.disasterType}</td>
      <td>${inc.subCategory}</td>
      <td>${inc.duration}</td>
      <td><span class="badge-status ${inc.status === 'CLOSED' ? 'sudah' : 'belum'}">${inc.status}</span></td>
    `;
    tbody.appendChild(tr);
  });
}

// =============================================================================
// 10. PANDUAN RESPON CEPAT (3 BAGIAN)
// =============================================================================

function filterFlyers(category) {
  currentFlyerFilter = category;
  document.getElementById("flyerFilterAll")?.classList.toggle("active", category === "Semua");
  document.getElementById("flyerFilterNatural")?.classList.toggle("active", category === "Natural Disaster");
  document.getElementById("flyerFilterManMade")?.classList.toggle("active", category === "Man Made Disaster");
  document.getElementById("flyerFilterTech")?.classList.toggle("active", category === "Technology Disaster");

  renderDisasterIconGrid();
}

// BAGIAN 1: GRID DEPAN SEDERHANA (HANYA ICON + NAMA BENCANA)
function renderDisasterIconGrid() {
  const container = document.getElementById("disasterIconGrid");
  if (!container) return;
  container.innerHTML = "";

  let list = DISASTER_CATALOG;
  if (currentFlyerFilter !== "Semua") {
    list = DISASTER_CATALOG.filter(x => x.category === currentFlyerFilter);
  }

  list.forEach(item => {
    const card = document.createElement("div");
    card.className = "disaster-icon-card";

    let badgeClass = "badge-status sudah";
    let badgeText = "Natural";
    if (item.category === "Man Made Disaster") {
      badgeClass = "badge-status";
      badgeText = "Man-Made";
    } else if (item.category === "Technology Disaster") {
      badgeClass = "badge-status belum";
      badgeText = "Technology";
    }

    card.innerHTML = `
      <div class="disaster-card-icon">${item.icon}</div>
      <div class="disaster-card-title">${item.name}</div>
      <span class="${badgeClass}">${badgeText}</span>
    `;

    card.onclick = () => openComprehensiveGuide(item.id);
    container.appendChild(card);
  });
}

// MODAL KOMPREHENSIF (PANDUAN, SOP, FLYER, JUKNIS, PKT PENDUKUNG, VIDEO)
function openComprehensiveGuide(disasterId) {
  const item = DISASTER_CATALOG.find(x => x.id === disasterId) || DISASTER_CATALOG[0];

  document.getElementById("compGuideTitle").innerHTML = `<span>${item.icon}</span> Panduan & SOP: ${item.name}`;
  document.getElementById("compGuideCategory").textContent = item.category;
  document.getElementById("compGuideQuickAction").textContent = item.quickAction;
  document.getElementById("compGuidePre").textContent = item.pre;
  document.getElementById("compGuideDuring").textContent = item.during;
  document.getElementById("compGuidePost").textContent = item.post;

  const flyerLink = document.getElementById("compGuideFlyerLink");
  if (flyerLink) flyerLink.href = item.oneDriveUrl;

  const videoLink = document.getElementById("compGuideVideoLink");
  if (videoLink) videoLink.href = item.videoUrl;

  document.getElementById("compGuideVideoText").innerHTML = `Satker Pendukung Terkait: <strong>${item.supportSatker}</strong>. Video edukasi dan simulasi respon cepat.`;

  openModal("modalComprehensiveGuide");
}

// BAGIAN 2: KETENTUAN STATUS (4 LEVEL)
function renderStatusRules() {
  const container = document.getElementById("statusRulesContainer");
  if (!container) return;

  container.innerHTML = `
    <!-- Normal -->
    <div class="status-rule-card rule-normal">
      <div class="status-rule-header">
        <span>🟢</span>
        <span style="color: var(--status-stabil);">Status Normal</span>
      </div>
      <div class="status-rule-desc">${STATUS_RULES.normal}</div>
    </div>

    <!-- Waspada -->
    <div class="status-rule-card rule-waspada">
      <div class="status-rule-header">
        <span>🟡</span>
        <span style="color: var(--status-waspada);">Normal - Waspada</span>
      </div>
      <div class="status-rule-desc">${STATUS_RULES.waspada}</div>
    </div>

    <!-- Siaga -->
    <div class="status-rule-card rule-siaga">
      <div class="status-rule-header">
        <span>🟠</span>
        <span style="color: var(--status-siaga);">Normal - Siaga</span>
      </div>
      <div class="status-rule-desc">${STATUS_RULES.siaga}</div>
    </div>

    <!-- Ditenggarai Krisis -->
    <div class="status-rule-card rule-krisis">
      <div class="status-rule-header">
        <span>🔴</span>
        <span style="color: var(--status-krisis);">Ditenggarai Krisis</span>
      </div>
      <div class="status-rule-desc">${STATUS_RULES.krisis}</div>
    </div>
  `;
}

function openEditStatusRulesModal() {
  document.getElementById("ruleInputNormal").value = STATUS_RULES.normal;
  document.getElementById("ruleInputWaspada").value = STATUS_RULES.waspada;
  document.getElementById("ruleInputSiaga").value = STATUS_RULES.siaga;
  document.getElementById("ruleInputKrisis").value = STATUS_RULES.krisis;
  openModal("modalEditStatusRules");
}

function saveStatusRules() {
  STATUS_RULES.normal = document.getElementById("ruleInputNormal").value.trim();
  STATUS_RULES.waspada = document.getElementById("ruleInputWaspada").value.trim();
  STATUS_RULES.siaga = document.getElementById("ruleInputSiaga").value.trim();
  STATUS_RULES.krisis = document.getElementById("ruleInputKrisis").value.trim();

  localStorage.setItem("bi_status_rules", JSON.stringify(STATUS_RULES));
  renderStatusRules();
  closeModal("modalEditStatusRules");
  showToast("Ketentuan Status 4 Level berhasil diperbarui dan disimpan!", "✅");
}

// BAGIAN 3: TEMPLATE DOKUMEN RESMI BCM
function renderTemplateDocs() {
  const container = document.getElementById("templateDocsContainer");
  if (!container) return;
  container.innerHTML = "";

  TEMPLATE_DOCUMENTS.forEach(doc => {
    const card = document.createElement("div");
    card.className = "template-doc-card";

    card.innerHTML = `
      <div>
        <div class="template-doc-title">
          <span>📄</span>
          <span>${doc.title}</span>
        </div>
        <div style="font-size: 10px; color: var(--gold-primary); font-weight: 700; margin-top: 2px;">${doc.code}</div>
        <div class="template-doc-meta">${doc.desc}</div>
      </div>
      <div style="display: flex; gap: 8px; margin-top: 12px;">
        <button class="doc-pill-btn" style="flex: 1; justify-content: center;" onclick="previewDoc('${doc.title}')">
          <span>👁️</span> Pratinjau
        </button>
        <a href="${doc.url}" target="_blank" rel="noopener noreferrer" class="action-link-btn" style="flex: 1; justify-content: center;">
          <span>🔗</span> Unduh
        </a>
      </div>
    `;

    container.appendChild(card);
  });
}

// =============================================================================
// 11. INCIDENT REPORT MANAGEMENT & DYNAMIC APTK MATRIX CONDITIONAL
// =============================================================================

function onIncidentCategoryFilterChange() {
  const cat = document.getElementById("incCategoryFilter")?.value || "Semua";
  const matrixWrapper = document.getElementById("aptkMatrixWrapper");

  // MATRIKS 24 APTK HANYA MUNCUL KETIKA TECHNOLOGY DISASTER DIPILIH!
  if (cat === "Technology Disaster") {
    if (matrixWrapper) {
      matrixWrapper.style.display = "flex";
      setTimeout(renderAptkMatrixCanvas, 100);
    }
  } else {
    if (matrixWrapper) {
      matrixWrapper.style.display = "none";
    }
  }

  renderIncidentTable();
}

function renderIncidentTable() {
  const tbody = document.getElementById("incidentTableBody");
  if (!tbody) return;

  const searchQuery = (document.getElementById("incTableSearch")?.value || "").toLowerCase();
  const statusFilter = document.getElementById("incStatusFilter")?.value || "Semua";
  const catFilter = document.getElementById("incCategoryFilter")?.value || "Semua";

  let filtered = INCIDENTS_DATA.filter(item => {
    const matchSearch = item.id.toLowerCase().includes(searchQuery) ||
                        item.satkerName.toLowerCase().includes(searchQuery) ||
                        item.subCategory.toLowerCase().includes(searchQuery) ||
                        (item.aptk && item.aptk.toLowerCase().includes(searchQuery));

    let matchStatus = true;
    if (statusFilter === "OPEN") matchStatus = item.status === "OPEN";
    if (statusFilter === "CLOSED") matchStatus = item.status === "CLOSED";

    let matchCat = true;
    if (catFilter !== "Semua") matchCat = item.disasterType === catFilter;

    return matchSearch && matchStatus && matchCat;
  });

  filtered.sort((a, b) => {
    let valA = a[incidentSortCol] || "";
    let valB = b[incidentSortCol] || "";
    if (typeof valA === "string") valA = valA.toLowerCase();
    if (typeof valB === "string") valB = valB.toLowerCase();

    if (valA < valB) return incidentSortAsc ? -1 : 1;
    if (valA > valB) return incidentSortAsc ? 1 : -1;
    return 0;
  });

  // Update Mini Stats
  const total = INCIDENTS_DATA.length;
  const openCount = INCIDENTS_DATA.filter(x => x.status === "OPEN").length;
  const closedCount = INCIDENTS_DATA.filter(x => x.status === "CLOSED").length;

  const statTotal = document.getElementById("statTotalIncidents");
  const statOpen = document.getElementById("statOpenIncidents");
  const statClosed = document.getElementById("statClosedIncidents");
  if (statTotal) statTotal.textContent = total;
  if (statOpen) statOpen.textContent = openCount;
  if (statClosed) statClosed.textContent = closedCount;

  tbody.innerHTML = "";

  if (filtered.length === 0) {
    tbody.innerHTML = '<tr><td colspan="12" style="text-align: center; padding: 30px; color: var(--text-muted);">Tidak ada insiden yang memenuhi filter pencarian.</td></tr>';
    return;
  }

  filtered.forEach((inc, index) => {
    const tr = document.createElement("tr");
    tr.className = "clickable-tr";
    tr.title = "Klik baris ini untuk membuka Pop-Up Detail Insiden & Kurva Lambda";
    tr.onclick = (e) => {
      if (!e.target.closest("a[target='_blank'], .status-badge-open, .status-badge-close")) {
        openDetailIncidentModal(inc.id);
      }
    };

    let disasterColor = "var(--disaster-natural)";
    if (inc.disasterType === "Man Made Disaster") disasterColor = "var(--disaster-manmade)";
    if (inc.disasterType === "Technology Disaster") disasterColor = "var(--disaster-tech)";

    const aptkBadge = inc.aptk && inc.aptk !== "Tidak Ada"
      ? `<span class="aptk-badge-tier aptk-tier-1" style="font-size: 10px;">💻 ${inc.aptk}</span>`
      : `<span style="color: var(--text-muted); font-size: 11px;">-</span>`;

    const isClosed = inc.status === "CLOSED";
    const statusPill = isClosed
      ? `<span class="status-badge-close" onclick="toggleIncidentStatus('${inc.id}'); event.stopPropagation();" title="Klik untuk mengubah ke OPEN">🟢 CLOSED</span>`
      : `<span class="status-badge-open" onclick="toggleIncidentStatus('${inc.id}'); event.stopPropagation();" title="Klik untuk mengubah ke CLOSED">🔴 OPEN</span>`;

    const timerButton = isClosed
      ? `<button class="btn-timer-closed" onclick="openDetailIncidentModal('${inc.id}'); event.stopPropagation();" title="Klik untuk membuka detail & kurva Lambda">
           ✅ <span id="timer-val-${inc.id}">${formatSecondsToHms(inc.durationSeconds)}</span> ✏️
         </button>`
      : `<button class="btn-timer-running" onclick="openDetailIncidentModal('${inc.id}'); event.stopPropagation();" title="Klik untuk membuka detail & kurva Lambda">
           ⏱️ <span id="timer-val-${inc.id}">${formatSecondsToHms(inc.durationSeconds)}</span> ✏️
         </button>`;

    const lambdaButton = `<button class="btn-action-lambda" onclick="openDetailIncidentModal('${inc.id}'); event.stopPropagation();" title="Buka Kurva Lambda BCM">
      📈 Kurva (${inc.cfms ? inc.cfms.length : 0} CFM)
    </button>`;

    const formattedTime = inc.time ? inc.time.replace("T", " ") : "-";

    tr.innerHTML = `
      <td style="color: var(--text-muted); font-weight: 600;">${index + 1}</td>
      <td>
        <a href="javascript:void(0)" onclick="openDetailIncidentModal('${inc.id}'); event.stopPropagation();" style="color: var(--gold-primary); font-weight: 800; font-size: 11.5px; text-decoration: underline; display: block;" title="Klik untuk membuka pop-up detail insiden">
          🔍 ${inc.id}
        </a>
        <div style="font-size: 10px; color: var(--text-muted);">${formattedTime} WIB</div>
      </td>
      <td>
        <strong style="color: var(--text-dark); font-size: 12px; cursor: pointer;" onclick="openDetailIncidentModal('${inc.id}')">${inc.satkerName}</strong>
      </td>
      <td>
        <span style="display: inline-flex; align-items: center; gap: 5px; font-size: 11px; font-weight: 600; color: var(--text-dark);">
          <span style="width: 7px; height: 7px; border-radius: 50%; background: ${disasterColor}; display: inline-block;"></span>
          <span>${inc.disasterType}</span>
        </span>
      </td>
      <td><span style="font-size: 11.5px; color: var(--text-dark); font-weight: 600; cursor: pointer;" onclick="openDetailIncidentModal('${inc.id}')">${inc.subCategory}</span></td>
      <td>${aptkBadge}</td>
      <td>${timerButton}</td>
      <td style="text-align: center;">${statusPill}</td>
      <td style="text-align: center;">${lambdaButton}</td>
      <td style="max-width: 200px; font-size: 11px; color: var(--text-body); line-height: 1.3;">
        ${inc.rootCause}
      </td>
      <td style="text-align: center;">
        <a href="${inc.oneDriveUrl || '#'}" target="_blank" rel="noopener noreferrer" class="action-link-btn" title="Buka Folder OneDrive Insiden" onclick="event.stopPropagation();">
          <span>🔗</span>
          <span>OneDrive</span>
        </a>
      </td>
      <td style="text-align: center;">
        <button class="btn-primary" style="padding: 4px 10px; font-size: 11px; white-space: nowrap;" onclick="openDetailIncidentModal('${inc.id}'); event.stopPropagation();" title="Buka Pop-Up Detail Lengkap & Kurva Lambda">
          👁️ Detail →
        </button>
      </td>
    `;

    tbody.appendChild(tr);
  });
}

function sortIncidentTable(col) {
  if (incidentSortCol === col) {
    incidentSortAsc = !incidentSortAsc;
  } else {
    incidentSortCol = col;
    incidentSortAsc = false;
  }
  renderIncidentTable();
}

function toggleIncidentStatus(incId) {
  const inc = INCIDENTS_DATA.find(x => x.id === incId);
  if (inc) {
    inc.status = inc.status === "OPEN" ? "CLOSED" : "OPEN";
    if (inc.status === "CLOSED" && !inc.endTime) {
      inc.endTime = new Date().toISOString().slice(0, 16);
    }
    localStorage.setItem("bi_incidents_data", JSON.stringify(INCIDENTS_DATA));

    const openCount = INCIDENTS_DATA.filter(x => x.status === "OPEN").length;
    const closedCount = INCIDENTS_DATA.filter(x => x.status === "CLOSED").length;
    const activeEl = document.getElementById("kpiInsidenAktif");
    const selesaiEl = document.getElementById("kpiInsidenSelesai");
    if (activeEl) activeEl.textContent = openCount;
    if (selesaiEl) selesaiEl.textContent = closedCount;

    renderIncidentTable();
    showToast(`Status insiden ${incId} diubah menjadi [${inc.status}]`);
  }
}

// =============================================================================
// PER-INCIDENT LAMBDA CURVE & DURATION (DETIK BERJALAN) MODAL HANDLERS
// =============================================================================


function formatSecondsToHms(totalSecs) {
  if (isNaN(totalSecs) || totalSecs < 0) totalSecs = 0;
  const hours = Math.floor(totalSecs / 3600);
  const minutes = Math.floor((totalSecs % 3600) / 60);
  const seconds = Math.floor(totalSecs % 60);
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function formatSecondsToText(totalSecs) {
  if (isNaN(totalSecs) || totalSecs < 0) totalSecs = 0;
  const hours = Math.floor(totalSecs / 3600);
  const minutes = Math.floor((totalSecs % 3600) / 60);
  const seconds = Math.floor(totalSecs % 60);
  const parts = [];
  if (hours > 0) parts.push(`${hours} Jam`);
  if (minutes > 0 || hours > 0) parts.push(`${minutes} Menit`);
  parts.push(`${seconds} Detik`);
  return parts.join(" ");
}

function splitSecondsToHms(totalSecs) {
  if (isNaN(totalSecs) || totalSecs < 0) totalSecs = 0;
  const hours = Math.floor(totalSecs / 3600);
  const minutes = Math.floor((totalSecs % 3600) / 60);
  const seconds = Math.floor(totalSecs % 60);
  return { hours, minutes, seconds };
}

function formatDateTimeForInput(dateStr) {
  if (!dateStr) return "";
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr.slice(0, 16);
    const pad = n => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
  } catch (e) {
    return dateStr;
  }
}

function openDetailIncidentModal(incId) {
  const inc = INCIDENTS_DATA.find(x => x.id === incId);
  if (!inc) return;

  normalizeIncidentFields(inc);
  currentLambdaIncId = incId;

  // Header and top summary
  const modalIdEl = document.getElementById("incModalId") || document.getElementById("incLambdaId");
  if (modalIdEl) modalIdEl.textContent = inc.id;

  const subIdEl = document.getElementById("incModalSubId");
  if (subIdEl) subIdEl.textContent = inc.id;

  const badgeOffice = document.getElementById("incModalOfficeBadge") || document.getElementById("incLambdaOfficeBadge");
  if (badgeOffice) badgeOffice.textContent = inc.satkerName;

  const disasterTitle = document.getElementById("incModalDisasterTitle") || document.getElementById("incLambdaDisasterTitle");
  if (disasterTitle) disasterTitle.textContent = `${inc.disasterType}: ${inc.subCategory}`;
  
  const formattedStart = inc.time ? inc.time.replace("T", " ") : "-";
  const timeSpanEl = document.getElementById("incModalTimeSpan") || document.getElementById("incLambdaTimeSpan");
  if (timeSpanEl) timeSpanEl.textContent = `Mulai: ${formattedStart} WIB • Status: ${inc.status}`;
  
  const liveCounter = document.getElementById("incModalLiveCounter") || document.getElementById("incLambdaLiveCounter");
  if (liveCounter) {
    liveCounter.textContent = formatSecondsToHms(inc.durationSeconds);
  }

  const badge = document.getElementById("incModalStatusBadge") || document.getElementById("incLambdaStatusBadge");
  if (badge) {
    if (inc.status === "OPEN") {
      badge.className = "status-badge-open";
      badge.textContent = "● SEDANG BERJALAN (LIVE)";
    } else {
      badge.className = "status-badge-close";
      badge.textContent = "✔ SELESAI (CLOSED)";
    }
  }

  // Populate Section 1: Main Incident Info
  const editId = document.getElementById("editIncId");
  if (editId) editId.value = inc.id;

  const editSatkerName = document.getElementById("editIncSatkerName");
  if (editSatkerName) editSatkerName.value = inc.satkerName;

  const editDisasterType = document.getElementById("editIncDisasterType");
  if (editDisasterType) editDisasterType.value = inc.disasterType;

  const editSubCategory = document.getElementById("editIncSubCategory");
  if (editSubCategory) editSubCategory.value = inc.subCategory || "";

  const editStatusLevel = document.getElementById("editIncStatusLevel");
  if (editStatusLevel) editStatusLevel.value = inc.statusLevel || "Normal Waspada";

  const editAptk = document.getElementById("editIncAptk");
  if (editAptk) editAptk.value = inc.aptk || "Tidak Ada";

  const editRootCause = document.getElementById("editIncRootCause");
  if (editRootCause) editRootCause.value = inc.rootCause || "";

  const editOneDrive = document.getElementById("editIncOneDrive");
  if (editOneDrive) editOneDrive.value = inc.oneDriveUrl || "";

  const btnOpenOneDrive = document.getElementById("btnModalOpenOneDrive");
  if (btnOpenOneDrive) btnOpenOneDrive.href = inc.oneDriveUrl || "#";

  // Populate Section 2: Timing, Parameters & Lambda Curve
  const editStart = document.getElementById("editIncStartTime");
  if (editStart) editStart.value = formatDateTimeForInput(inc.time);

  const editStatus = document.getElementById("editIncStatus");
  if (editStatus) editStatus.value = inc.status;

  const editEnd = document.getElementById("editIncEndTime");
  if (editEnd) editEnd.value = formatDateTimeForInput(inc.endTime || "");

  const hms = splitSecondsToHms(inc.durationSeconds);
  const editH = document.getElementById("editIncHours");
  if (editH) editH.value = hms.hours;
  const editM = document.getElementById("editIncMinutes");
  if (editM) editM.value = hms.minutes;
  const editS = document.getElementById("editIncSeconds");
  if (editS) editS.value = hms.seconds;

  const editMtpd = document.getElementById("editIncMtpd");
  if (editMtpd) editMtpd.value = inc.mtpdHours || 6.0;

  const editRto = document.getElementById("editIncRto");
  if (editRto) editRto.value = inc.rtoHours || 4.0;

  const editRpo = document.getElementById("editIncRpo");
  if (editRpo) editRpo.value = inc.rpoMinutes !== undefined ? inc.rpoMinutes : (inc.disasterType === "Technology Disaster" ? 15 : 0);

  // Render CFM List
  renderIncidentCfmList(inc);

  // Open Pop-Up Modal
  openModal("modalIncidentLambda");
  const modalEl = document.getElementById("modalIncidentLambda");
  if (modalEl) {
    modalEl.style.display = "flex";
    modalEl.classList.add("active");
  }

  // Render Lambda Curve Canvas once modal is visible
  setTimeout(() => {
    renderIncidentLambdaCanvas(inc);
  }, 60);
}

// Backward compatibility alias
function openIncidentLambdaModal(incId) {
  openDetailIncidentModal(incId);
}

function renderIncidentCfmList(inc) {
  const container = document.getElementById("incidentCfmListContainer");
  if (!container) return;
  container.innerHTML = "";

  if (!inc.cfms || inc.cfms.length === 0) {
    container.innerHTML = `<div style="font-size: 11px; color: var(--text-muted); padding: 8px; text-align: center;">Belum ada titik CFM untuk insiden ini. Klik tombol di atas untuk menambah.</div>`;
    return;
  }

  inc.cfms.forEach((cfm, idx) => {
    const row = document.createElement("div");
    row.style.cssText = "display: grid; grid-template-columns: 85px 1.5fr 2fr 30px; gap: 8px; align-items: center; background: #f8fafc; padding: 6px 10px; border-radius: 4px; border: 1px solid #e2e8f0;";
    row.innerHTML = `
      <input type="text" class="form-input" style="padding: 2px 6px; font-size: 11px; font-family: monospace; font-weight: 700;" value="${cfm.time}" onchange="updateIncidentCfmItem(${idx}, 'time', this.value)" placeholder="HH:MM:SS">
      <input type="text" class="form-input" style="padding: 2px 6px; font-size: 11px; font-weight: 600;" value="${cfm.name}" onchange="updateIncidentCfmItem(${idx}, 'name', this.value)" placeholder="Nama CFM">
      <input type="text" class="form-input" style="padding: 2px 6px; font-size: 11px; color: var(--text-muted);" value="${cfm.note || ''}" onchange="updateIncidentCfmItem(${idx}, 'note', this.value)" placeholder="Catatan hasil rapat">
      <button style="background: none; border: none; color: #dc2626; cursor: pointer; font-size: 13px; font-weight: bold;" onclick="deleteIncidentCfmRow(${idx})" title="Hapus titik CFM">✕</button>
    `;
    container.appendChild(row);
  });
}

function updateIncidentCfmItem(index, field, value) {
  const inc = INCIDENTS_DATA.find(x => x.id === currentLambdaIncId);
  if (inc && inc.cfms && inc.cfms[index]) {
    inc.cfms[index][field] = value;
    renderIncidentLambdaCanvas(inc);
  }
}

function addIncidentCfmRow() {
  const inc = INCIDENTS_DATA.find(x => x.id === currentLambdaIncId);
  if (!inc) return;
  if (!inc.cfms) inc.cfms = [];

  const count = inc.cfms.length + 1;
  const startH = inc.time ? parseInt(inc.time.split("T")[1]?.split(":")[0] || "8") : 8;
  const nextHour = (startH + count) % 24;
  const defaultTime = `${String(nextHour).padStart(2, '0')}:00:00`;

  inc.cfms.push({
    id: Date.now(),
    time: defaultTime,
    name: `CFM #${count}: Rapat Koordinasi Lanjutan`,
    note: "Evaluasi perkembangan pemulihan"
  });

  renderIncidentCfmList(inc);
  renderIncidentLambdaCanvas(inc);
}

function deleteIncidentCfmRow(index) {
  const inc = INCIDENTS_DATA.find(x => x.id === currentLambdaIncId);
  if (!inc || !inc.cfms) return;
  inc.cfms.splice(index, 1);
  renderIncidentCfmList(inc);
  renderIncidentLambdaCanvas(inc);
}

function onManualHmsChange() {
  const inc = INCIDENTS_DATA.find(x => x.id === currentLambdaIncId);
  if (!inc) return;

  const h = parseInt(document.getElementById("editIncHours").value) || 0;
  const m = parseInt(document.getElementById("editIncMinutes").value) || 0;
  const s = parseInt(document.getElementById("editIncSeconds").value) || 0;

  const totalSecs = (h * 3600) + (m * 60) + s;
  inc.durationSeconds = totalSecs;

  const liveCounter = document.getElementById("incLambdaLiveCounter");
  if (liveCounter) liveCounter.textContent = formatSecondsToHms(totalSecs);

  // If start time exists and closed, update end time
  const startTimeVal = document.getElementById("editIncStartTime").value;
  if (startTimeVal && inc.status === "CLOSED") {
    const startMs = new Date(startTimeVal).getTime();
    if (!isNaN(startMs)) {
      const endMs = startMs + (totalSecs * 1000);
      document.getElementById("editIncEndTime").value = formatDateTimeForInput(new Date(endMs).toISOString());
    }
  }

  renderIncidentLambdaCanvas(inc);
}

function recalculateIncidentDurationFromTimes() {
  const inc = INCIDENTS_DATA.find(x => x.id === currentLambdaIncId);
  if (!inc) return;

  const startTimeVal = document.getElementById("editIncStartTime").value;
  const endTimeVal = document.getElementById("editIncEndTime").value;

  if (startTimeVal && endTimeVal) {
    const t0 = new Date(startTimeVal).getTime();
    const tClose = new Date(endTimeVal).getTime();
    if (!isNaN(t0) && !isNaN(tClose) && tClose >= t0) {
      const diffSecs = Math.floor((tClose - t0) / 1000);
      inc.durationSeconds = diffSecs;

      const hms = splitSecondsToHms(diffSecs);
      document.getElementById("editIncHours").value = hms.hours;
      document.getElementById("editIncMinutes").value = hms.minutes;
      document.getElementById("editIncSeconds").value = hms.seconds;

      const liveCounter = document.getElementById("incLambdaLiveCounter");
      if (liveCounter) liveCounter.textContent = formatSecondsToHms(diffSecs);
    }
  }

  renderIncidentLambdaCanvas(inc);
}

function onEditIncStatusChange() {
  const inc = INCIDENTS_DATA.find(x => x.id === currentLambdaIncId);
  if (!inc) return;

  const newStatus = document.getElementById("editIncStatus").value;
  inc.status = newStatus;

  const badge = document.getElementById("incLambdaStatusBadge");
  if (badge) {
    if (newStatus === "OPEN") {
      badge.className = "status-badge-open";
      badge.textContent = "● SEDANG BERJALAN (LIVE)";
      document.getElementById("editIncEndTime").value = "";
    } else {
      badge.className = "status-badge-close";
      badge.textContent = "✔ SELESAI (CLOSED)";
      if (!document.getElementById("editIncEndTime").value) {
        const startVal = document.getElementById("editIncStartTime").value;
        const startMs = startVal ? new Date(startVal).getTime() : Date.now();
        const endMs = startMs + (inc.durationSeconds * 1000);
        document.getElementById("editIncEndTime").value = formatDateTimeForInput(new Date(endMs).toISOString());
      }
    }
  }

  renderIncidentLambdaCanvas(inc);
}

function updateLiveLambdaCanvasFromInputs() {
  const inc = INCIDENTS_DATA.find(x => x.id === currentLambdaIncId);
  if (!inc) return;

  inc.mtpdHours = parseFloat(document.getElementById("editIncMtpd").value) || 6.0;
  inc.rtoHours = parseFloat(document.getElementById("editIncRto").value) || 4.0;
  inc.rpoMinutes = parseInt(document.getElementById("editIncRpo").value) || 0;

  renderIncidentLambdaCanvas(inc);
}

function saveIncidentFullDetail() {
  const inc = INCIDENTS_DATA.find(x => x.id === currentLambdaIncId);
  if (!inc) return;

  // Read Section 1 fields
  const disasterTypeEl = document.getElementById("editIncDisasterType");
  if (disasterTypeEl) inc.disasterType = disasterTypeEl.value;

  const subCategoryEl = document.getElementById("editIncSubCategory");
  if (subCategoryEl) inc.subCategory = subCategoryEl.value.trim() || inc.subCategory;

  const statusLevelEl = document.getElementById("editIncStatusLevel");
  if (statusLevelEl) inc.statusLevel = statusLevelEl.value;

  const aptkEl = document.getElementById("editIncAptk");
  if (aptkEl) inc.aptk = aptkEl.value;

  const rootCauseEl = document.getElementById("editIncRootCause");
  if (rootCauseEl) inc.rootCause = rootCauseEl.value.trim();

  const oneDriveEl = document.getElementById("editIncOneDrive");
  if (oneDriveEl) inc.oneDriveUrl = oneDriveEl.value.trim();

  // Read Section 2 timing & parameters
  const startTimeEl = document.getElementById("editIncStartTime");
  if (startTimeEl && startTimeEl.value) inc.time = startTimeEl.value;

  const statusEl = document.getElementById("editIncStatus");
  if (statusEl) inc.status = statusEl.value;

  const endTimeEl = document.getElementById("editIncEndTime");
  if (endTimeEl) inc.endTime = endTimeEl.value;

  const h = parseInt(document.getElementById("editIncHours")?.value) || 0;
  const m = parseInt(document.getElementById("editIncMinutes")?.value) || 0;
  const s = parseInt(document.getElementById("editIncSeconds")?.value) || 0;
  inc.durationSeconds = (h * 3600) + (m * 60) + s;
  inc.duration = formatSecondsToText(inc.durationSeconds);

  const mtpdEl = document.getElementById("editIncMtpd");
  if (mtpdEl) inc.mtpdHours = parseFloat(mtpdEl.value) || 6.0;

  const rtoEl = document.getElementById("editIncRto");
  if (rtoEl) inc.rtoHours = parseFloat(rtoEl.value) || 4.0;

  const rpoEl = document.getElementById("editIncRpo");
  if (rpoEl) inc.rpoMinutes = parseInt(rpoEl.value) || 0;

  localStorage.setItem("bi_incidents_data", JSON.stringify(INCIDENTS_DATA));

  renderIncidentTable();
  if (typeof switchMonitorSubView === "function") {
    switchMonitorSubView(currentMonitorSubView);
  }

  closeModal("modalIncidentLambda");
  showToast(`Detail insiden ${inc.id} & Kurva Lambda berhasil disimpan!`, "✅");
}

function saveIncidentLambdaConfig() {
  saveIncidentFullDetail();
}

function toggleCurrentModalIncidentStatus() {
  const inc = INCIDENTS_DATA.find(x => x.id === currentLambdaIncId);
  if (!inc) return;

  const nextStatus = inc.status === "OPEN" ? "CLOSED" : "OPEN";
  inc.status = nextStatus;

  const editStatusEl = document.getElementById("editIncStatus");
  if (editStatusEl) editStatusEl.value = nextStatus;

  const badge = document.getElementById("incModalStatusBadge") || document.getElementById("incLambdaStatusBadge");
  if (badge) {
    if (nextStatus === "OPEN") {
      badge.className = "status-badge-open";
      badge.textContent = "● SEDANG BERJALAN (LIVE)";
      const editEnd = document.getElementById("editIncEndTime");
      if (editEnd) editEnd.value = "";
    } else {
      badge.className = "status-badge-close";
      badge.textContent = "✔ SELESAI (CLOSED)";
      const editEnd = document.getElementById("editIncEndTime");
      if (editEnd && !editEnd.value) {
        editEnd.value = formatDateTimeForInput(new Date().toISOString());
      }
    }
  }

  renderIncidentLambdaCanvas(inc);
  showToast(`Status insiden ${inc.id} diubah ke ${nextStatus}`, nextStatus === "OPEN" ? "🔴" : "🟢");
}

function onEditIncDisasterTypeChange() {
  const dt = document.getElementById("editIncDisasterType")?.value;
  const aptkSelect = document.getElementById("editIncAptk");

  if (dt === "Technology Disaster") {
    if (aptkSelect && aptkSelect.value === "Tidak Ada") {
      aptkSelect.value = "BI-RTGS";
    }
  } else {
    if (aptkSelect) aptkSelect.value = "Tidak Ada";
  }
}

function renderIncidentLambdaCanvas(inc) {
  const canvas = document.getElementById("canvasIncidentLambda");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const rect = canvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  const w = rect.width || 760;
  const h = 210;

  canvas.width = w * dpr;
  canvas.height = h * dpr;
  ctx.resetTransform ? ctx.resetTransform() : ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.scale(dpr, dpr);

  ctx.clearRect(0, 0, w, h);

  const padLeft = 65;
  const padRight = 35;
  const padTop = 25;
  const padBottom = 32;
  const graphW = w - padLeft - padRight;
  const graphH = h - padTop - padBottom;

  const mtpdH = inc.mtpdHours || 6.0;
  const rtoH = inc.rtoHours || 4.0;
  const currentElapsedH = (inc.durationSeconds || 0) / 3600;

  const maxHours = Math.max(mtpdH * 1.3, currentElapsedH * 1.25, 8);
  const t0_x = padLeft + (graphW * 0.14);
  const postWidth = graphW - (t0_x - padLeft);
  const pxPerHour = postWidth / maxHours;

  const normalY = padTop + 5;
  const bottomY = padTop + graphH;
  const degradedY = normalY + (graphH * 0.72); // 28% capacity at lowest point

  // Draw Horizontal Grid lines
  ctx.strokeStyle = "rgba(0, 0, 0, 0.06)";
  ctx.lineWidth = 1;
  const levels = [
    { label: "100%", y: normalY },
    { label: "75%", y: normalY + graphH * 0.25 },
    { label: "50%", y: normalY + graphH * 0.5 },
    { label: "25%", y: normalY + graphH * 0.75 },
    { label: "0%", y: bottomY }
  ];

  ctx.font = "10px 'Plus Jakarta Sans', sans-serif";
  ctx.fillStyle = "#94a3b8";
  ctx.textAlign = "right";
  levels.forEach(lvl => {
    ctx.beginPath();
    ctx.moveTo(padLeft, lvl.y);
    ctx.lineTo(w - padRight, lvl.y);
    ctx.stroke();
    ctx.fillText(lvl.label, padLeft - 8, lvl.y + 3);
  });

  // RPO Shaded Zone & Line (If Tech Disaster & rpoMinutes > 0)
  if (inc.disasterType === "Technology Disaster" && inc.rpoMinutes > 0) {
    const rpoHours = inc.rpoMinutes / 60;
    const rpoX = Math.max(padLeft, t0_x - (rpoHours * pxPerHour * 2.5));
    ctx.fillStyle = "rgba(37, 99, 235, 0.08)";
    ctx.fillRect(rpoX, normalY, t0_x - rpoX, graphH);

    ctx.strokeStyle = "#2563eb";
    ctx.setLineDash([3, 3]);
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(rpoX, normalY);
    ctx.lineTo(rpoX, bottomY);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = "#2563eb";
    ctx.font = "bold 9.5px 'Plus Jakarta Sans', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(`RPO: ${inc.rpoMinutes}m`, rpoX, normalY - 6);
  }

  // MTPD Vertical Line (Red Dashed)
  const mtpdX = Math.min(t0_x + (mtpdH * pxPerHour), w - padRight);
  ctx.strokeStyle = "#dc2626";
  ctx.setLineDash([4, 3]);
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(mtpdX, normalY - 5);
  ctx.lineTo(mtpdX, bottomY);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.fillStyle = "#dc2626";
  ctx.font = "bold 9.5px 'Plus Jakarta Sans', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(`MTPD: ${mtpdH}j`, mtpdX, normalY - 8);

  // Target RTO Vertical Line (Green Dashed)
  const rtoX = Math.min(t0_x + (rtoH * pxPerHour), w - padRight);
  ctx.strokeStyle = "#10b981";
  ctx.setLineDash([4, 3]);
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(rtoX, normalY - 5);
  ctx.lineTo(rtoX, bottomY);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.fillStyle = "#10b981";
  ctx.font = "bold 9.5px 'Plus Jakarta Sans', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(`Target RTO: ${rtoH}j`, rtoX, normalY - 8);

  // t0 Line (Disruption onset)
  ctx.strokeStyle = "rgba(100, 116, 139, 0.4)";
  ctx.setLineDash([2, 2]);
  ctx.beginPath();
  ctx.moveTo(t0_x, normalY - 5);
  ctx.lineTo(t0_x, bottomY);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.fillStyle = "#09172d";
  ctx.font = "bold 9.5px 'Plus Jakarta Sans', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("t0 (Mulai)", t0_x, bottomY + 14);

  // THE LAMBDA RECOVERY CURVE (Path & Gradient Fill)
  const troughEndX = t0_x + Math.min(rtoH * 0.3 * pxPerHour, 45);
  
  ctx.beginPath();
  ctx.moveTo(padLeft, normalY);
  ctx.lineTo(t0_x, normalY);
  ctx.lineTo(t0_x, degradedY);
  ctx.lineTo(troughEndX, degradedY);
  ctx.bezierCurveTo(
    troughEndX + (rtoX - troughEndX) * 0.45, degradedY + 5,
    rtoX - (rtoX - troughEndX) * 0.25, normalY,
    rtoX, normalY
  );
  ctx.lineTo(w - padRight, normalY);

  // Create gradient fill under the curve
  const grad = ctx.createLinearGradient ? ctx.createLinearGradient(0, normalY, 0, bottomY) : "rgba(212, 175, 55, 0.15)";
  if (typeof grad === "object" && grad.addColorStop) {
    grad.addColorStop(0, "rgba(212, 175, 55, 0.18)");
    grad.addColorStop(0.7, "rgba(37, 99, 235, 0.08)");
    grad.addColorStop(1, "rgba(255, 255, 255, 0)");
  }
  ctx.fillStyle = grad;

  if (typeof Path2D !== "undefined") {
    const fillPath = new Path2D();
    fillPath.moveTo(padLeft, normalY);
    fillPath.lineTo(t0_x, normalY);
    fillPath.lineTo(t0_x, degradedY);
    fillPath.lineTo(troughEndX, degradedY);
    fillPath.bezierCurveTo(
      troughEndX + (rtoX - troughEndX) * 0.45, degradedY + 5,
      rtoX - (rtoX - troughEndX) * 0.25, normalY,
      rtoX, normalY
    );
    fillPath.lineTo(w - padRight, normalY);
    fillPath.lineTo(w - padRight, bottomY);
    fillPath.lineTo(padLeft, bottomY);
    fillPath.closePath();
    ctx.fill(fillPath);
  }

  // Draw the Curve Outline
  ctx.strokeStyle = "#09172d";
  ctx.lineWidth = 2.5;
  ctx.stroke();

  // Current Elapsed Time Progress
  const elapsedX = Math.min(t0_x + (currentElapsedH * pxPerHour), w - padRight);
  const isPastRto = currentElapsedH >= rtoH;
  let elapsedY = normalY;
  if (!isPastRto) {
    if (elapsedX <= troughEndX) {
      elapsedY = degradedY;
    } else {
      const tNorm = (elapsedX - troughEndX) / (rtoX - troughEndX);
      elapsedY = degradedY - ((degradedY - normalY) * Math.pow(tNorm, 1.6));
    }
  }

  // Draw Elapsed Marker
  ctx.strokeStyle = inc.status === "OPEN" ? "#dc2626" : "#2563eb";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(elapsedX, normalY);
  ctx.lineTo(elapsedX, bottomY);
  ctx.stroke();

  // Glowing point on curve
  ctx.fillStyle = inc.status === "OPEN" ? "#dc2626" : "#2563eb";
  ctx.beginPath();
  ctx.arc(elapsedX, elapsedY, 5, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // Elapsed label tag
  ctx.font = "bold 9px 'Plus Jakarta Sans', sans-serif";
  ctx.fillStyle = inc.status === "OPEN" ? "#dc2626" : "#2563eb";
  ctx.textAlign = elapsedX > w - 100 ? "right" : "left";
  const labelOffsetX = elapsedX > w - 100 ? -8 : 8;
  const statusTxt = inc.status === "OPEN" ? "Berjalan" : "Closed";
  ctx.fillText(`⏱️ ${formatSecondsToHms(inc.durationSeconds)} (${statusTxt})`, elapsedX + labelOffsetX, elapsedY - 10);

  // Plot CFM Points (Call For Meeting - Diamonds)
  if (inc.cfms && inc.cfms.length > 0) {
    const cfmCount = inc.cfms.length;
    inc.cfms.forEach((cfm, idx) => {
      // Distribute CFMs proportionally between t0 and RTO/elapsed
      const ratio = (idx + 1) / (cfmCount + 1);
      const cfmX = t0_x + (rtoH * pxPerHour * ratio);
      let cfmY = degradedY;
      if (cfmX > troughEndX && cfmX <= rtoX) {
        const tNorm = (cfmX - troughEndX) / (rtoX - troughEndX);
        cfmY = degradedY - ((degradedY - normalY) * Math.pow(tNorm, 1.6));
      } else if (cfmX > rtoX) {
        cfmY = normalY;
      }

      // Draw Diamond
      ctx.save();
      ctx.translate(cfmX, cfmY);
      ctx.rotate(Math.PI / 4);
      ctx.fillStyle = "#d97706";
      ctx.fillRect(-4.5, -4.5, 9, 9);
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 1.5;
      ctx.strokeRect(-4.5, -4.5, 9, 9);
      ctx.restore();

      // CFM Label & time
      ctx.font = "bold 8.5px 'Plus Jakarta Sans', sans-serif";
      ctx.fillStyle = "#92400e";
      ctx.textAlign = "center";
      const cfmShortName = `CFM #${idx + 1}`;
      ctx.fillText(`${cfmShortName} (${cfm.time.slice(0, 5)})`, cfmX, cfmY + 16);
    });
  }

  // Bottom Time Axis Labels
  ctx.font = "9.5px 'Plus Jakarta Sans', sans-serif";
  ctx.fillStyle = "#64748b";
  ctx.textAlign = "center";
  const stepH = Math.max(1, Math.round(maxHours / 6));
  for (let hr = stepH; hr <= maxHours; hr += stepH) {
    const markX = t0_x + (hr * pxPerHour);
    if (markX <= w - padRight) {
      ctx.fillText(`+${hr}j`, markX, bottomY + 14);
    }
  }
}

// 24 APTK MATRIX VISUALIZER (WHEN TECH DISASTER SELECTED)
function initAptkMatrix() {
  filterAptkList();
  renderAptkMatrixCanvas();
  selectAptk("BI-RTGS");

  const canvas = document.getElementById("aptkMatrixCanvas");
  if (canvas) {
    canvas.addEventListener("click", onAptkCanvasClick);
  }
}

function filterAptkList() {
  const container = document.getElementById("aptkItemsList");
  if (!container) return;

  const search = (document.getElementById("searchAptkList")?.value || "").toLowerCase();
  const filtered = APTK_24_DATA.filter(a => a.code.toLowerCase().includes(search) || a.name.toLowerCase().includes(search));

  container.innerHTML = "";
  filtered.forEach(aptk => {
    const item = document.createElement("div");
    item.style.display = "flex";
    item.style.alignItems = "center";
    item.style.justifyContent = "space-between";
    item.style.padding = "6px 8px";
    item.style.background = aptk.code === selectedAptkCode ? "rgba(179, 134, 24, 0.12)" : "#f8fafc";
    item.style.border = aptk.code === selectedAptkCode ? "1px solid var(--gold-primary)" : "1px solid var(--border-light)";
    item.style.borderRadius = "4px";
    item.style.cursor = "pointer";

    const tierClass = aptk.tier === 1 ? "aptk-tier-1" : aptk.tier === 2 ? "aptk-tier-2" : "aptk-tier-3";

    item.innerHTML = `
      <div>
        <strong style="color: var(--text-dark); font-size: 11.5px;">${aptk.code}</strong>
        <div style="font-size: 9.5px; color: var(--text-muted);">${aptk.name.slice(0, 24)}...</div>
      </div>
      <div style="text-align: right;">
        <span class="aptk-badge-tier ${tierClass}">T.${aptk.tier}</span>
        <div style="font-size: 9px; color: var(--gold-primary); font-weight: 700; margin-top: 2px;">RTO: ${aptk.rto}</div>
      </div>
    `;

    item.onclick = () => selectAptk(aptk.code);
    container.appendChild(item);
  });
}

function selectAptk(code) {
  selectedAptkCode = code;
  const aptk = APTK_24_DATA.find(a => a.code === code) || APTK_24_DATA[0];

  const nameEl = document.getElementById("aptkBannerName");
  const tierEl = document.getElementById("aptkBannerTier");
  const descEl = document.getElementById("aptkBannerDesc");
  const rtoEl = document.getElementById("aptkBannerRto");
  const rpoEl = document.getElementById("aptkBannerRpo");
  const impactEl = document.getElementById("aptkBannerImpact");

  if (nameEl) nameEl.textContent = `${aptk.code} — ${aptk.name}`;
  if (tierEl) {
    tierEl.textContent = aptk.tierName;
    tierEl.className = `aptk-badge-tier ${aptk.tier === 1 ? 'aptk-tier-1' : aptk.tier === 2 ? 'aptk-tier-2' : 'aptk-tier-3'}`;
  }
  if (descEl) descEl.textContent = aptk.description;
  if (rtoEl) rtoEl.textContent = aptk.rto;
  if (rpoEl) rpoEl.textContent = aptk.rpo;
  if (impactEl) impactEl.textContent = `${aptk.impact} / 5 (Kerentanan: ${aptk.vulnerability}/5)`;

  filterAptkList();
  renderAptkMatrixCanvas();
}

function renderAptkMatrixCanvas() {
  const canvas = document.getElementById("aptkMatrixCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();

  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);

  const w = rect.width;
  const h = rect.height;

  ctx.clearRect(0, 0, w, h);

  const padLeft = 40;
  const padBottom = 35;
  const padRight = 20;
  const padTop = 20;

  const plotW = w - padLeft - padRight;
  const plotH = h - padTop - padBottom;

  // Background quadrant shading
  ctx.fillStyle = "rgba(220, 38, 38, 0.06)";
  ctx.fillRect(padLeft + plotW * 0.5, padTop, plotW * 0.5, plotH * 0.5);

  ctx.fillStyle = "rgba(217, 119, 6, 0.05)";
  ctx.fillRect(padLeft, padTop, plotW * 0.5, plotH * 0.5);

  ctx.strokeStyle = "#e2e8f0";
  ctx.lineWidth = 1;

  for (let i = 1; i <= 5; i++) {
    const x = padLeft + (plotW / 4) * (i - 1);
    ctx.beginPath();
    ctx.moveTo(x, padTop);
    ctx.lineTo(x, padTop + plotH);
    ctx.stroke();

    const y = padTop + plotH - (plotH / 4) * (i - 1);
    ctx.beginPath();
    ctx.moveTo(padLeft, y);
    ctx.lineTo(padLeft + plotW, y);
    ctx.stroke();

    ctx.fillStyle = "#64748b";
    ctx.font = "bold 9px Plus Jakarta Sans";
    ctx.fillText(`${i}`, x - 3, padTop + plotH + 15);
    ctx.fillText(`${i}`, padLeft - 18, y + 3);
  }

  ctx.fillStyle = "#0f172a";
  ctx.font = "bold 10px Plus Jakarta Sans";
  ctx.fillText("Tingkat Kerentanan (Vulnerability) →", padLeft + plotW * 0.35, padTop + plotH + 28);

  ctx.save();
  ctx.translate(14, padTop + plotH * 0.65);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText("Dampak Operasional (Impact) →", 0, 0);
  ctx.restore();

  APTK_24_DATA.forEach(aptk => {
    const hash = aptk.code.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
    const jitterX = ((hash % 11) - 5) * 4;
    const jitterY = (((hash >> 2) % 11) - 5) * 4;

    const x = padLeft + ((aptk.vulnerability - 1) / 4) * plotW + jitterX;
    const y = padTop + plotH - ((aptk.impact - 1) / 4) * plotH + jitterY;

    aptk._cx = x;
    aptk._cy = y;

    const isSelected = aptk.code === selectedAptkCode;

    if (isSelected) {
      ctx.beginPath();
      ctx.arc(x, y, 14, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(179, 134, 24, 0.25)";
      ctx.fill();

      ctx.beginPath();
      ctx.arc(x, y, 10, 0, Math.PI * 2);
      ctx.strokeStyle = "#b38618";
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    let color = "#2563eb";
    if (aptk.tier === 1) color = "#dc2626";
    else if (aptk.tier === 2) color = "#ea580c";

    ctx.beginPath();
    ctx.arc(x, y, isSelected ? 7 : 5.5, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.fillStyle = isSelected ? "#071120" : "#334155";
    ctx.font = isSelected ? "bold 9.5px Plus Jakarta Sans" : "600 8.5px Plus Jakarta Sans";
    ctx.fillText(aptk.code, x + 8, y + 3);
  });
}

function onAptkCanvasClick(e) {
  const canvas = document.getElementById("aptkMatrixCanvas");
  if (!canvas) return;

  const rect = canvas.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  let closest = null;
  let minDist = 22;

  APTK_24_DATA.forEach(aptk => {
    if (aptk._cx !== undefined && aptk._cy !== undefined) {
      const dx = mouseX - aptk._cx;
      const dy = mouseY - aptk._cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < minDist) {
        minDist = dist;
        closest = aptk;
      }
    }
  });

  if (closest) {
    selectAptk(closest.code);
  }
}

// =============================================================================
// 12. REPOSITORY PKT & DRA (DUAL ONEDRIVE LINKS)
// =============================================================================

function switchPktCategory(cat) {
  activePktTab = cat;

  document.getElementById("tabBtnPelaksana")?.classList.toggle("active", cat === "pelaksana");
  document.getElementById("tabBtnPendukung")?.classList.toggle("active", cat === "pendukung");
  document.getElementById("tabBtnKPwDN")?.classList.toggle("active", cat === "kpwdn");

  document.getElementById("tabBtnPelaksanaFull")?.classList.toggle("active", cat === "pelaksana");
  document.getElementById("tabBtnPendukungFull")?.classList.toggle("active", cat === "pendukung");
  document.getElementById("tabBtnKPwDNFull")?.classList.toggle("active", cat === "kpwdn");

  renderActivePktTab();
}

function renderActivePktTab() {
  const tbody = document.getElementById("pktTableBody");
  const tbodyFull = document.getElementById("pktTableBodyFull");

  let sourceList = [];
  if (activePktTab === "pelaksana") sourceList = SATKER_PELAKSANA;
  else if (activePktTab === "pendukung") sourceList = SATKER_PENDUKUNG;
  else sourceList = KPWDN_DATA;

  const searchQuery = (document.getElementById("tableSearchBox")?.value || "").toLowerCase();
  const statusFilter = document.getElementById("tableStatusFilter")?.value || "Semua";

  const filtered = sourceList.filter(item => {
    const matchSearch = item.name.toLowerCase().includes(searchQuery) ||
                        (item.code && item.code.toLowerCase().includes(searchQuery)) ||
                        (item.city && item.city.toLowerCase().includes(searchQuery));

    let matchStatus = true;
    if (statusFilter !== "Semua") matchStatus = item.status === statusFilter;

    return matchSearch && matchStatus;
  });

  const renderRows = (targetTbody, isFull = false) => {
    if (!targetTbody) return;
    targetTbody.innerHTML = "";

    if (filtered.length === 0) {
      targetTbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--text-muted); padding: 20px;">Tidak ada data yang sesuai.</td></tr>`;
      return;
    }

    filtered.forEach((item, index) => {
      const isSudah = item.status === "Sudah";
      const statusBadge = isSudah
        ? `<span class="badge-status sudah">Sudah</span>`
        : `<span class="badge-status belum">Belum</span>`;

      const pktUrl = localStorage.getItem(`bi_pkt_onedrive_${item.id}`) || `https://onedrive.live.com/?id=PKT_${item.id.toUpperCase()}_2025`;
      const draUrl = localStorage.getItem(`bi_dra_onedrive_${item.id}`) || `https://onedrive.live.com/?id=DRA_${item.id.toUpperCase()}_2025`;

      const tr = document.createElement("tr");

      if (!isFull) {
        tr.innerHTML = `
          <td style="color: var(--text-muted);">${index + 1}</td>
          <td>
            <strong style="color: var(--text-dark);">${item.name}</strong>
            ${item.city ? `<div style="font-size: 10px; color: var(--text-muted);">${item.city}</div>` : ''}
          </td>
          <td>${item.category || 'KPw Regional'}</td>
          <td>${statusBadge}</td>
          <td style="text-align: center;">
            <a href="${pktUrl}" target="_blank" rel="noopener noreferrer" class="action-link-btn" title="Buka Berkas PKT">
              <span>📁</span> <span>PKT</span>
            </a>
          </td>
          <td style="text-align: center;">
            <a href="${draUrl}" target="_blank" rel="noopener noreferrer" class="action-link-btn" title="Buka Berkas DRA">
              <span>🛡️</span> <span>DRA</span>
            </a>
          </td>
        `;
      } else {
        tr.innerHTML = `
          <td style="color: var(--text-muted);">${index + 1}</td>
          <td>
            <strong style="color: var(--text-dark);">${item.name}</strong>
            ${item.city ? `<div style="font-size: 10px; color: var(--text-muted);">${item.city}</div>` : ''}
          </td>
          <td>${item.category || 'KPw Regional'}</td>
          <td>${item.lastYear || '2025'}</td>
          <td>${statusBadge}</td>
          <td style="text-align: center;">
            <div style="display: inline-flex; align-items: center; gap: 4px;">
              <a href="${pktUrl}" target="_blank" rel="noopener noreferrer" class="action-link-btn" title="Buka Berkas PKT">
                <span>📁</span> <span>Buka PKT</span>
              </a>
              <button class="action-edit-btn" onclick="openEditOneDriveModal('pkt', '${item.id}', '${item.name}')" title="Edit Tautan PKT">✏️</button>
            </div>
          </td>
          <td style="text-align: center;">
            <div style="display: inline-flex; align-items: center; gap: 4px;">
              <a href="${draUrl}" target="_blank" rel="noopener noreferrer" class="action-link-btn" title="Buka Berkas DRA">
                <span>🛡️</span> <span>Buka DRA</span>
              </a>
              <button class="action-edit-btn" onclick="openEditOneDriveModal('dra', '${item.id}', '${item.name}')" title="Edit Tautan DRA">✏️</button>
            </div>
          </td>
        `;
      }

      targetTbody.appendChild(tr);
    });
  };

  renderRows(tbody, false);
  renderRows(tbodyFull, true);
}

function filterOnlyBelum() {
  const sel = document.getElementById("tableStatusFilter");
  if (sel) sel.value = "Belum";
  renderActivePktTab();
  showToast("Menampilkan Satker yang belum mengumpulkan dokumen.");
}

function syncPktSearch(val) {
  const el = document.getElementById("tableSearchBox");
  if (el) el.value = val;
  renderActivePktTab();
}

function openEditOneDriveModal(docType, officeId, officeName) {
  currentOfficeForOneDrive = officeId;
  currentDocTypeForOneDrive = docType;

  document.getElementById("editOneDriveName").value = officeName;
  document.getElementById("editOneDriveYear").value = `Dokumen ${docType.toUpperCase()} (Tahun 2025)`;
  
  const existing = localStorage.getItem(`bi_${docType}_onedrive_${officeId}`) || "";
  document.getElementById("editOneDriveUrl").value = existing;

  openModal("modalEditOneDrive");
}

function editSingleBcmLink(docType) {
  const office = ALL_OFFICES_DATA.find(o => o.id === currentProfilOfficeId) || KPWDN_DATA[0];
  openEditOneDriveModal(docType, office.id, office.name);
}

function saveOneDriveCustomLink() {
  if (!currentOfficeForOneDrive) return;

  const url = document.getElementById("editOneDriveUrl").value.trim();
  localStorage.setItem(`bi_${currentDocTypeForOneDrive}_onedrive_${currentOfficeForOneDrive}`, url);

  showToast(`Tautan ${currentDocTypeForOneDrive.toUpperCase()} berhasil diperbarui!`, "🔗");
  closeModal("modalEditOneDrive");
  renderActivePktTab();
}

// =============================================================================
// 13. TOP 5 KPwDN DENGAN RISIKO TERTINGGI & RESILIENCE SIMULATION
// =============================================================================

function renderTop5Table(mode = currentMonitorSubView) {
  const tbody = document.getElementById("top5TableBody");
  const thead = document.getElementById("top5TableHead");
  const titleEl = document.getElementById("top5TableTitle");
  const subEl = document.getElementById("top5Subtitle");
  if (!tbody) return;
  tbody.innerHTML = "";

  const levelBadges = {
    "Sangat Tinggi": `<span class="badge-status belum">Sangat Tinggi</span>`,
    "Tinggi": `<span class="badge-status" style="background: rgba(234, 88, 12, 0.12); color: #ea580c;">Tinggi</span>`,
    "Sedang": `<span class="badge-status" style="background: rgba(217, 119, 6, 0.12); color: #d97706;">Sedang</span>`,
    "Rendah": `<span class="badge-status sudah">Rendah</span>`
  };

  if (mode === "tech") {
    if (titleEl) titleEl.textContent = "Top 5 APTK dengan Tingkat Kritis Tertinggi";
    if (subEl) subEl.textContent = "Tier Kritikalitas & Dampak Transaksi Sistemik";
    if (thead) {
      thead.innerHTML = `
        <tr>
          <th style="width: 28px;">No</th>
          <th>Nama Aplikasi (APTK)</th>
          <th style="text-align: center;">Tier</th>
          <th style="text-align: center;">Target RTO</th>
          <th style="text-align: center;">Target RPO</th>
          <th style="text-align: center;">Dampak Operasional</th>
        </tr>
      `;
    }

    const top5Tech = [
      { name: "BI-RTGS", fullName: "Real-Time Gross Settlement", tier: "Tier 1 • Mission Critical", rto: "30 Menit", rpo: "0 Menit", impact: "Sangat Tinggi (5/5)" },
      { name: "BI-FAST", fullName: "Fast Payment 24/7 Retail", tier: "Tier 1 • Mission Critical", rto: "15 Menit", rpo: "0 Menit", impact: "Sangat Tinggi (5/5)" },
      { name: "CBS", fullName: "Core Banking System Bank Indonesia", tier: "Tier 1 • Mission Critical", rto: "30 Menit", rpo: "5 Menit", impact: "Sangat Tinggi (5/5)" },
      { name: "Pusat Data (EDW BI)", fullName: "Enterprise Data Warehouse & DC", tier: "Tier 1 • Mission Critical", rto: "45 Menit", rpo: "15 Menit", impact: "Sangat Tinggi (5/5)" },
      { name: "SKNBI", fullName: "Sistem Kliring Nasional BI", tier: "Tier 1 • Mission Critical", rto: "60 Menit", rpo: "15 Menit", impact: "Sangat Tinggi (5/5)" }
    ];

    top5Tech.forEach((app, idx) => {
      const tr = document.createElement("tr");
      tr.style.cursor = "pointer";
      tr.onclick = () => highlightAptkByName(app.name);
      tr.innerHTML = `
        <td style="color: var(--gold-primary); font-weight: 700;">${idx + 1}</td>
        <td>
          <strong style="color: var(--text-dark);">${app.name}</strong>
          <div style="font-size: 10px; color: var(--text-muted);">${app.fullName}</div>
        </td>
        <td style="text-align: center;"><span class="aptk-badge-tier aptk-tier-1" style="font-size: 10px;">${app.tier}</span></td>
        <td style="text-align: center; font-weight: 700; color: #d97706;">${app.rto}</td>
        <td style="text-align: center; font-weight: 700; color: #10b981;">${app.rpo}</td>
        <td style="text-align: center;"><span class="badge-status belum">${app.impact}</span></td>
      `;
      tbody.appendChild(tr);
    });
  } 
  else if (mode === "natural") {
    if (titleEl) titleEl.textContent = "Top 5 KPwDN Paling Rentan Bencana Alam (Natural Disaster)";
    if (subEl) subEl.textContent = "Indeks InaRisk BNPB & Kerentanan Historis";
    if (thead) {
      thead.innerHTML = `
        <tr>
          <th style="width: 28px;">No</th>
          <th>KPwDN / Kantor</th>
          <th>Bencana Alam Paling Kritis</th>
          <th style="text-align: center;">Insiden</th>
          <th style="text-align: center;">Skor InaRisk</th>
          <th style="text-align: center;">Tingkat Kerentanan</th>
        </tr>
      `;
    }

    const top5Natural = [
      { id: "kpwbi-padang", name: "KPwBI Provinsi Sumatera Barat", city: "Padang", hazard: "Gempa Megathrust Mentawai M>8 & Tsunami", incidents: 5, score: 96, level: "Sangat Tinggi" },
      { id: "kpwbi-bandung", name: "KPwBI Provinsi Jawa Barat", city: "Bandung", hazard: "Sesar Lembang, Banjir DAS Citarum & Longsor", incidents: 5, score: 94, level: "Sangat Tinggi" },
      { id: "kpwbi-palu", name: "KPwBI Provinsi Sulawesi Tengah", city: "Palu", hazard: "Gempa Sesar Palu-Koro & Likuifaksi Tanah", incidents: 4, score: 92, level: "Tinggi" },
      { id: "kpwbi-yogyakarta", name: "KPwBI DI Yogyakarta", city: "Yogyakarta", hazard: "Erupsi Gunung Merapi & Gempa Sesar Opak", incidents: 4, score: 90, level: "Tinggi" },
      { id: "kpwbi-manado", name: "KPwBI Provinsi Sulawesi Utara", city: "Manado", hazard: "Erupsi Lokon/Soputan & Gempa Laut Maluku", incidents: 6, score: 88, level: "Tinggi" }
    ];

    top5Natural.forEach((satker, idx) => {
      const tr = document.createElement("tr");
      tr.style.cursor = "pointer";
      tr.onclick = () => openDetailProfilModal(satker.id);
      tr.innerHTML = `
        <td style="color: var(--gold-primary); font-weight: 700;">${idx + 1}</td>
        <td>
          <strong style="color: var(--text-dark);">${satker.name}</strong>
          <div style="font-size: 10px; color: var(--text-muted);">${satker.city}</div>
        </td>
        <td><span style="font-size: 11px; color: #047857; font-weight: 600;">🌊 ${satker.hazard}</span></td>
        <td style="text-align: center; font-weight: 700; color: var(--text-dark);">${satker.incidents}</td>
        <td style="text-align: center; font-weight: 800; color: var(--gold-primary);">${satker.score}</td>
        <td style="text-align: center;">${levelBadges[satker.level] || satker.level}</td>
      `;
      tbody.appendChild(tr);
    });
  }
  else if (mode === "manmade") {
    if (titleEl) titleEl.textContent = "Top 5 KPwDN Paling Rawan Gangguan Sosial & Fisik (Man Made)";
    if (subEl) subEl.textContent = "Frekuensi Aksi Massa & Tingkat Kerawanan Daerah";
    if (thead) {
      thead.innerHTML = `
        <tr>
          <th style="width: 28px;">No</th>
          <th>KPwDN / Kantor</th>
          <th>Potensi Ancaman Sosial / Fisik</th>
          <th style="text-align: center;">Insiden</th>
          <th style="text-align: center;">Skor Kerawanan</th>
          <th style="text-align: center;">Tingkat Kerawanan</th>
        </tr>
      `;
    }

    const top5ManMade = [
      { id: "kpwbi-dki-jakarta", name: "KPwBI Provinsi DKI Jakarta", city: "Jakarta", hazard: "Aksi Unjuk Rasa Nasional Silang Monas & Thamrin", incidents: 6, score: 95, level: "Sangat Tinggi" },
      { id: "kpwbi-jayapura", name: "KPwBI Provinsi Papua", city: "Jayapura", hazard: "Separatisme, Kerusuhan & Gangguan Kamtibmas", incidents: 5, score: 93, level: "Sangat Tinggi" },
      { id: "kpwbi-bandung", name: "KPwBI Provinsi Jawa Barat", city: "Bandung", hazard: "Aksi Massa Buruh & Mahasiswa Gedung Sate", incidents: 4, score: 88, level: "Tinggi" },
      { id: "kpwbi-medan", name: "KPwBI Provinsi Sumatera Utara", city: "Medan", hazard: "Aksi Massa Pelabuhan Belawan & Kamtibmas", incidents: 4, score: 86, level: "Tinggi" },
      { id: "kpwbi-makassar", name: "KPwBI Provinsi Sulawesi Selatan", city: "Makassar", hazard: "Aksi Mahasiswa Flyover Urip Sumoharjo", incidents: 5, score: 84, level: "Tinggi" }
    ];

    top5ManMade.forEach((satker, idx) => {
      const tr = document.createElement("tr");
      tr.style.cursor = "pointer";
      tr.onclick = () => openDetailProfilModal(satker.id);
      tr.innerHTML = `
        <td style="color: var(--gold-primary); font-weight: 700;">${idx + 1}</td>
        <td>
          <strong style="color: var(--text-dark);">${satker.name}</strong>
          <div style="font-size: 10px; color: var(--text-muted);">${satker.city}</div>
        </td>
        <td><span style="font-size: 11px; color: #b45309; font-weight: 600;">👥 ${satker.hazard}</span></td>
        <td style="text-align: center; font-weight: 700; color: var(--text-dark);">${satker.incidents}</td>
        <td style="text-align: center; font-weight: 800; color: var(--gold-primary);">${satker.score}</td>
        <td style="text-align: center;">${levelBadges[satker.level] || satker.level}</td>
      `;
      tbody.appendChild(tr);
    });
  }
  else {
    // General / all
    if (titleEl) titleEl.textContent = "Top 5 Entitas Risiko Tertinggi (Akumulasi BCM)";
    if (subEl) subEl.textContent = "Dampak Komprehensif x Likelihood Seluruh Ancaman";
    if (thead) {
      thead.innerHTML = `
        <tr>
          <th style="width: 28px;">No</th>
          <th>KPwDN / Satker</th>
          <th style="text-align: center;">Insiden</th>
          <th style="text-align: center;">Skor</th>
          <th style="text-align: center;">Level</th>
        </tr>
      `;
    }

    const top5 = [...KPWDN_DATA]
      .sort((a, b) => b.riskScore - a.riskScore)
      .slice(0, 5);

    top5.forEach((satker, idx) => {
      const tr = document.createElement("tr");
      tr.style.cursor = "pointer";
      tr.onclick = () => openDetailProfilModal(satker.id);
      tr.innerHTML = `
        <td style="color: var(--gold-primary); font-weight: 700;">${idx + 1}</td>
        <td>
          <strong style="color: var(--text-dark);">${satker.name}</strong>
          <div style="font-size: 10px; color: var(--text-muted);">${satker.city}</div>
        </td>
        <td style="text-align: center; font-weight: 700; color: var(--text-dark);">${satker.incidents}</td>
        <td style="text-align: center; font-weight: 800; color: var(--gold-primary);">${satker.riskScore}</td>
        <td style="text-align: center;">${levelBadges[satker.level] || satker.level}</td>
      `;
      tbody.appendChild(tr);
    });
  }
}

function evaluateResilienceStatus() {
  const avg = (currentResilience.sdm + currentResilience.sdlk + currentResilience.sdtd + currentResilience.lainnya) / 4;
  const score5 = (avg / 20).toFixed(1);

  const scoreEl = document.getElementById("totalResilienceScore");
  if (scoreEl) scoreEl.textContent = `${score5} / 5.0`;

  // Update Gauges
  const updateGauge = (idVal, idFill, idBadge, val) => {
    const valEl = document.getElementById(idVal);
    const fillEl = document.getElementById(idFill);
    const badgeEl = document.getElementById(idBadge);

    if (valEl) valEl.textContent = `${val}%`;
    if (fillEl) fillEl.setAttribute("stroke-dasharray", `${val}, 100`);
    if (badgeEl) {
      if (val >= 80) { badgeEl.textContent = "Stabil"; badgeEl.style.color = "var(--status-stabil)"; badgeEl.style.background = "var(--status-stabil-bg)"; }
      else if (val >= 60) { badgeEl.textContent = "Waspada"; badgeEl.style.color = "var(--status-waspada)"; badgeEl.style.background = "var(--status-waspada-bg)"; }
      else if (val >= 40) { badgeEl.textContent = "Siaga"; badgeEl.style.color = "var(--status-siaga)"; badgeEl.style.background = "var(--status-siaga-bg)"; }
      else { badgeEl.textContent = "Krisis"; badgeEl.style.color = "var(--status-krisis)"; badgeEl.style.background = "var(--status-krisis-bg)"; }
    }
  };

  updateGauge("gaugeValSDM", "gaugeFillSDM", "badgeSDM", currentResilience.sdm);
  updateGauge("gaugeValSDLK", "gaugeFillSDLK", "badgeSDLK", currentResilience.sdlk);
  updateGauge("gaugeValSDTD", "gaugeFillSDTD", "badgeSDTD", currentResilience.sdtd);
  updateGauge("gaugeValLainnya", "gaugeFillLainnya", "badgeLainnya", currentResilience.lainnya);
}

function openResilienceModal() {
  document.getElementById("sliderSDM").value = currentResilience.sdm;
  document.getElementById("sliderSDLK").value = currentResilience.sdlk;
  document.getElementById("sliderSDTD").value = currentResilience.sdtd;
  document.getElementById("sliderLainnya").value = currentResilience.lainnya;
  updateResilienceSim();
  openModal("modalResilience");
}

function updateResilienceSim() {
  const sdm = parseInt(document.getElementById("sliderSDM").value);
  const sdlk = parseInt(document.getElementById("sliderSDLK").value);
  const sdtd = parseInt(document.getElementById("sliderSDTD").value);
  const lainnya = parseInt(document.getElementById("sliderLainnya").value);

  document.getElementById("valSDM").textContent = `${sdm}%`;
  document.getElementById("valSDLK").textContent = `${sdlk}%`;
  document.getElementById("valSDTD").textContent = `${sdtd}%`;
  document.getElementById("valLainnya").textContent = `${lainnya}%`;

  const avg = (sdm + sdlk + sdtd + lainnya) / 4;
  const statusText = document.getElementById("simStatusText");
  const statusBadge = document.getElementById("simStatusBadge");
  const statusDesc = document.getElementById("simStatusDesc");

  if (avg >= 80 && sdtd >= 70) {
    statusText.textContent = "Normal Stabil";
    statusBadge.textContent = "🟢 Normal Stabil";
    statusBadge.style.color = "var(--status-stabil)";
    statusBadge.style.background = "var(--status-stabil-bg)";
    statusDesc.textContent = "Kondisi operasional normal. Seluruh parameter berada di atas ambang batas aman.";
  } else if (avg >= 65 && sdtd >= 50) {
    statusText.textContent = "Normal Waspada";
    statusBadge.textContent = "🟡 Normal Waspada";
    statusBadge.style.color = "var(--status-waspada)";
    statusBadge.style.background = "var(--status-waspada-bg)";
    statusDesc.textContent = "Terjadi penurunan kesiapan pada sebagian parameter. Aktifkan pemantauan eskalasi.";
  } else if (avg >= 50) {
    statusText.textContent = "Normal Siaga";
    statusBadge.textContent = "🟠 Normal Siaga";
    statusBadge.style.color = "var(--status-siaga)";
    statusBadge.style.background = "var(--status-siaga-bg)";
    statusDesc.textContent = "Kesiapan menurun drastis. Aktivasi prosedur kontinjensi dan mobilisasi personel cadangan.";
  } else {
    statusText.textContent = "Ditenggarai Krisis";
    statusBadge.textContent = "🔴 Ditenggarai Krisis";
    statusBadge.style.color = "var(--status-krisis)";
    statusBadge.style.background = "var(--status-krisis-bg)";
    statusDesc.textContent = "Kondisi darurat krisis dideklarasikan! CMT mengambil alih komando darurat.";
  }
}

function resetResilienceDefaults() {
  document.getElementById("sliderSDM").value = 72;
  document.getElementById("sliderSDLK").value = 61;
  document.getElementById("sliderSDTD").value = 48;
  document.getElementById("sliderLainnya").value = 80;
  updateResilienceSim();
}

function applyResilienceSim() {
  currentResilience.sdm = parseInt(document.getElementById("sliderSDM").value);
  currentResilience.sdlk = parseInt(document.getElementById("sliderSDLK").value);
  currentResilience.sdtd = parseInt(document.getElementById("sliderSDTD").value);
  currentResilience.lainnya = parseInt(document.getElementById("sliderLainnya").value);

  evaluateResilienceStatus();
  closeModal("modalResilience");
  showToast("Hasil simulasi parameter resiliensi berhasil diterapkan ke dashboard!", "⚡");
}

// =============================================================================
// 14. BCM LAMBDA CURVE & CALL FOR MEETING
// =============================================================================

function initBcmLambdaCurve() {
  const canvas = document.getElementById("bcmLambdaCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();

  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);

  const w = rect.width;
  const h = rect.height;

  const badge = document.getElementById("lambdaDisasterBadge");
  const pillRpo = document.getElementById("pillRpo");
  const pillRto = document.getElementById("pillRto");

  if (bcmCurveConfig.isTech) {
    if (badge) {
      badge.textContent = "💻 Gangguan Teknologi (RPO & RTO Aktif)";
      badge.style.color = "#2563eb";
      badge.style.background = "rgba(37, 99, 235, 0.1)";
      badge.style.borderColor = "rgba(37, 99, 235, 0.3)";
    }
    if (pillRpo) pillRpo.style.display = "inline-flex";
    if (pillRto) pillRto.style.display = "inline-flex";
  } else {
    if (badge) {
      badge.textContent = "🏢 Bencana Non-Teknologi (Fokus Relokasi & MTPD)";
      badge.style.color = "#d97706";
      badge.style.background = "rgba(217, 119, 6, 0.1)";
      badge.style.borderColor = "rgba(217, 119, 6, 0.3)";
    }
    if (pillRpo) pillRpo.style.display = "none";
    if (pillRto) pillRto.style.display = "none";
  }

  document.getElementById("lblStartTime").textContent = `${bcmCurveConfig.startTime} WIB`;
  document.getElementById("lblRecoverTime").textContent = `${bcmCurveConfig.endTime} WIB`;
  document.getElementById("lblCfmCount").textContent = bcmCurveConfig.meetings.length;

  ctx.clearRect(0, 0, w, h);

  // Background Grid Lines
  ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
  ctx.lineWidth = 1;

  for (let y = 20; y < h; y += 30) {
    ctx.beginPath();
    ctx.moveTo(30, y);
    ctx.lineTo(w - 20, y);
    ctx.stroke();
  }

  const normalY = 30;
  const bottomY = h - 35;
  const t0_x = w * 0.22;
  const tRecover_x = w * 0.88;

  // 1. RPO Line
  if (bcmCurveConfig.isTech) {
    const rpo_x = t0_x - 30;
    ctx.fillStyle = "rgba(16, 185, 129, 0.15)";
    ctx.fillRect(rpo_x, normalY, t0_x - rpo_x, bottomY - normalY);

    ctx.strokeStyle = "#10b981";
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(rpo_x, normalY);
    ctx.lineTo(rpo_x, bottomY + 15);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = "#10b981";
    ctx.font = "bold 9.5px Plus Jakarta Sans";
    ctx.fillText("RPO", rpo_x - 12, bottomY + 25);
  }

  // 2. MTPD Line
  const mtpd_x = w * 0.78;
  ctx.strokeStyle = "rgba(220, 38, 38, 0.8)";
  ctx.setLineDash([4, 4]);
  ctx.beginPath();
  ctx.moveTo(mtpd_x, normalY - 10);
  ctx.lineTo(mtpd_x, bottomY + 15);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.fillStyle = "#dc2626";
  ctx.font = "bold 9.5px Plus Jakarta Sans";
  ctx.fillText("MTPD (Batas Kritis)", mtpd_x - 40, normalY - 8);

  // 3. RTO Target Line
  if (bcmCurveConfig.isTech) {
    const rto_x = w * 0.65;
    ctx.strokeStyle = "#d97706";
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(rto_x, normalY);
    ctx.lineTo(rto_x, bottomY + 15);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = "#d97706";
    ctx.font = "bold 9.5px Plus Jakarta Sans";
    ctx.fillText("Target RTO", rto_x - 24, bottomY + 25);
  }

  // 4. BCM Lambda Curve
  const gradient = ctx.createLinearGradient(0, normalY, 0, bottomY);
  gradient.addColorStop(0, "rgba(212, 175, 55, 0.35)");
  gradient.addColorStop(1, "rgba(212, 175, 55, 0.0)");

  ctx.beginPath();
  ctx.moveTo(30, normalY);
  ctx.lineTo(t0_x, normalY);
  ctx.lineTo(t0_x + 15, bottomY);
  ctx.bezierCurveTo(t0_x + 60, bottomY + 5, w * 0.50, bottomY, w * 0.58, bottomY - 20);
  ctx.bezierCurveTo(w * 0.68, bottomY - 50, w * 0.78, normalY + 10, tRecover_x, normalY);
  ctx.lineTo(w - 20, normalY);
  ctx.lineTo(w - 20, bottomY + 10);
  ctx.lineTo(30, bottomY + 10);
  ctx.closePath();
  ctx.fillStyle = gradient;
  ctx.fill();

  // Curve Stroke
  ctx.beginPath();
  ctx.moveTo(30, normalY);
  ctx.lineTo(t0_x, normalY);
  ctx.lineTo(t0_x + 15, bottomY);
  ctx.bezierCurveTo(t0_x + 60, bottomY + 5, w * 0.50, bottomY, w * 0.58, bottomY - 20);
  ctx.bezierCurveTo(w * 0.68, bottomY - 50, w * 0.78, normalY + 10, tRecover_x, normalY);
  ctx.lineTo(w - 20, normalY);
  ctx.strokeStyle = "#d4af37";
  ctx.lineWidth = 2.5;
  ctx.stroke();

  // Event Markers
  ctx.fillStyle = "#dc2626";
  ctx.beginPath();
  ctx.arc(t0_x, normalY, 5, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 9.5px Plus Jakarta Sans";
  ctx.fillText(`Gangguan (${bcmCurveConfig.startTime})`, t0_x - 30, normalY - 10);

  ctx.fillStyle = "#2563eb";
  ctx.beginPath();
  ctx.arc(tRecover_x, normalY, 5, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#ffffff";
  ctx.fillText(`Pulih (${bcmCurveConfig.endTime})`, tRecover_x - 20, normalY - 10);

  // Call For Meeting Pins
  const cfmCount = bcmCurveConfig.meetings.length;
  bcmCurveConfig.meetings.forEach((cfm, i) => {
    const cfmX = t0_x + 35 + ((w * 0.48) / (cfmCount + 1)) * (i + 1);
    const cfmY = bottomY - 12 - (i * 18);

    ctx.strokeStyle = "#d4af37";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(cfmX, cfmY);
    ctx.lineTo(cfmX, cfmY - 24);
    ctx.stroke();

    ctx.fillStyle = "#d4af37";
    ctx.beginPath();
    ctx.arc(cfmX, cfmY - 24, 7, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#071120";
    ctx.font = "bold 8.5px Plus Jakarta Sans";
    ctx.fillText(`${i + 1}`, cfmX - 2.5, cfmY - 21);

    ctx.fillStyle = "#fae8a4";
    ctx.font = "600 8.5px Plus Jakarta Sans";
    ctx.fillText(cfm.time, cfmX - 10, cfmY + 12);
  });
}

function openActiveIncidentDetailModal() {
  const sel = document.getElementById("selDashboardActiveIncident");
  const activeId = (sel && sel.value) ? sel.value : (currentLambdaIncId || "INC-2025-06-001");
  openDetailIncidentModal(activeId);
}

function openBcmCurveModal() {
  openActiveIncidentDetailModal();
}

function populateDashboardActiveIncidentSelect(preferredId) {
  const sel = document.getElementById("selDashboardActiveIncident");
  if (!sel) return;

  const currentVal = preferredId || sel.value || (currentLambdaIncId || "INC-2025-06-001");
  sel.innerHTML = "";

  INCIDENTS_DATA.forEach(inc => {
    const opt = document.createElement("option");
    opt.value = inc.id;
    opt.textContent = `[${inc.id}] ${inc.satkerName.replace('KPwBI ', '')} - ${inc.subCategory} (${inc.status})`;
    if (inc.id === currentVal) opt.selected = true;
    sel.appendChild(opt);
  });
}

function onDashboardActiveIncidentChange(incId) {
  const inc = INCIDENTS_DATA.find(x => x.id === incId);
  if (!inc) return;

  currentLambdaIncId = inc.id;

  // Sync legend labels in Dashboard Riwayat Insiden card
  const lblStart = document.getElementById("lblStartTime");
  if (lblStart) lblStart.textContent = inc.time ? inc.time.replace("T", " ") + " WIB" : "-";

  const lblRpo = document.getElementById("lblRpo");
  if (lblRpo) lblRpo.textContent = (inc.rpoMinutes || 0) + " Menit Data Loss";

  const lblRto = document.getElementById("lblRto");
  if (lblRto) lblRto.textContent = (inc.rtoHours || 4) + " Jam Target";

  const lblMtpd = document.getElementById("lblMtpd");
  if (lblMtpd) lblMtpd.textContent = (inc.mtpdHours || 6) + " Jam Kritis";

  const lblCfm = document.getElementById("lblCfmCount");
  if (lblCfm) lblCfm.textContent = inc.cfms ? inc.cfms.length : 0;

  const lblRecover = document.getElementById("lblRecoverTime");
  if (lblRecover) lblRecover.textContent = inc.status === "CLOSED" ? (inc.endTime ? inc.endTime.replace("T", " ") + " WIB" : "Selesai") : "Sedang Berjalan (Live)";

  const badge = document.getElementById("lambdaDisasterBadge");
  if (badge) {
    if (inc.disasterType === "Technology Disaster") {
      badge.style.background = "rgba(37, 99, 235, 0.1)";
      badge.style.color = "#2563eb";
      badge.style.borderColor = "rgba(37, 99, 235, 0.25)";
      badge.textContent = `💻 ${inc.subCategory} (APTK: ${inc.aptk || 'TI'})`;
    } else if (inc.disasterType === "Natural Disaster") {
      badge.style.background = "rgba(16, 185, 129, 0.1)";
      badge.style.color = "#10b981";
      badge.style.borderColor = "rgba(16, 185, 129, 0.25)";
      badge.textContent = `🌊 ${inc.subCategory} (InaRisk)`;
    } else {
      badge.style.background = "rgba(217, 119, 6, 0.1)";
      badge.style.color = "#d97706";
      badge.style.borderColor = "rgba(217, 119, 6, 0.25)";
      badge.textContent = `👥 ${inc.subCategory} (Sosial / Kamtibmas)`;
    }
  }

  // Update bcmCurveConfig
  bcmCurveConfig.startTime = inc.time ? inc.time.replace("T", " ") : "08:15";
  bcmCurveConfig.endTime = inc.endTime ? inc.endTime.replace("T", " ") : "12:15";
  bcmCurveConfig.isTech = inc.disasterType === "Technology Disaster";
  bcmCurveConfig.rtoText = `${inc.rtoHours || 4} Jam Target`;
  bcmCurveConfig.rpoText = `${inc.rpoMinutes || 0} Menit Data Loss`;
  bcmCurveConfig.cfms = inc.cfms ? [...inc.cfms] : [];

  initBcmLambdaCurve();
}

function onBcmCfgTypeChange() {
  const isTech = document.getElementById("cfgIsTech").value === "true";
  document.getElementById("cfgRpoGroup").style.display = isTech ? "flex" : "none";
  document.getElementById("cfgRtoGroup").style.display = isTech ? "flex" : "none";
}

function renderCfmListInModal() {
  const container = document.getElementById("cfmContainerList");
  if (!container) return;
  container.innerHTML = "";

  bcmCurveConfig.meetings.forEach(m => {
    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.gap = "8px";
    row.style.alignItems = "center";

    row.innerHTML = `
      <input type="text" class="form-input" style="width: 80px;" value="${m.time}" onchange="updateCfmItem(${m.id}, 'time', this.value)" placeholder="09:00">
      <input type="text" class="form-input" style="flex: 1;" value="${m.name}" onchange="updateCfmItem(${m.id}, 'name', this.value)" placeholder="Agenda Rapat Koordinasi BCM">
      <button class="action-edit-btn" style="color: #dc2626;" onclick="deleteCfmItem(${m.id})" title="Hapus Rapat">✕</button>
    `;
    container.appendChild(row);
  });
}

function addCfmRow() {
  const newId = Date.now();
  bcmCurveConfig.meetings.push({
    id: newId,
    time: "10:00",
    name: `CFM #${bcmCurveConfig.meetings.length + 1}: Rapat Koordinasi Tambahan`,
    note: "Evaluasi mitigasi"
  });
  renderCfmListInModal();
}

function updateCfmItem(id, field, value) {
  const item = bcmCurveConfig.meetings.find(x => x.id === id);
  if (item) item[field] = value;
}

function deleteCfmItem(id) {
  bcmCurveConfig.meetings = bcmCurveConfig.meetings.filter(x => x.id !== id);
  renderCfmListInModal();
}

function applyBcmCurveSettings() {
  bcmCurveConfig.startTime = document.getElementById("cfgStartTime").value.trim() || "08:15";
  bcmCurveConfig.endTime = document.getElementById("cfgEndTime").value.trim() || "12:15";
  bcmCurveConfig.isTech = document.getElementById("cfgIsTech").value === "true";
  bcmCurveConfig.rpoText = document.getElementById("cfgRpoVal").value.trim() || "5 Menit";
  bcmCurveConfig.rtoText = document.getElementById("cfgRtoVal").value.trim() || "4 Jam";

  initBcmLambdaCurve();
  closeModal("modalBcmCurve");
  showToast("Kurva Lambda BCM & titik Call For Meeting berhasil diperbarui!");
}

// =============================================================================
// 15. RECORD NEW INCIDENT MODAL
// =============================================================================

function openNewIncidentModal() {
  const timeInput = document.getElementById("inputIncTime");
  if (timeInput) {
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    timeInput.value = now.toISOString().slice(0, 16);
  }
  onDisasterTypeChange();
  openModal("modalNewIncident");
}

function onDisasterTypeChange() {
  const typeSelect = document.getElementById("inputIncType");
  const subCatSelect = document.getElementById("inputIncSubCategory");
  const aptkRow = document.getElementById("rowAptkSelector");
  const techRow = document.getElementById("techParamRow");
  const nonTechRow = document.getElementById("nonTechParamRow");
  const paramHeader = document.getElementById("bcmParamHeader");

  if (!typeSelect || !subCatSelect) return;
  const currentType = typeSelect.value;

  subCatSelect.innerHTML = "";
  const list = DISASTER_SUB_CATEGORIES[currentType] || [];
  list.forEach(name => {
    const opt = document.createElement("option");
    opt.value = name;
    opt.textContent = name;
    subCatSelect.appendChild(opt);
  });

  if (currentType === "Technology Disaster") {
    if (aptkRow) aptkRow.style.display = "block";
    if (techRow) techRow.style.display = "grid";
    if (nonTechRow) nonTechRow.style.display = "none";
    if (paramHeader) paramHeader.textContent = "Parameter Pemulihan Teknologi (RPO & RTO Aktif):";
  } else {
    if (aptkRow) aptkRow.style.display = "none";
    if (techRow) techRow.style.display = "none";
    if (nonTechRow) nonTechRow.style.display = "grid";
    if (paramHeader) paramHeader.textContent = "Parameter Pemulihan Operasional (Toleransi MTPD & Alternatif Lokasi):";
  }

  onSubCategoryChange();
}

function onSubCategoryChange() {
  const subCatSelect = document.getElementById("inputIncSubCategory");
  const customRow = document.getElementById("rowCustomEventName");
  if (!subCatSelect || !customRow) return;

  if (subCatSelect.value.startsWith("Lainnya")) {
    customRow.style.display = "block";
  } else {
    customRow.style.display = "none";
  }
}

function saveNewIncident() {
  const satkerId = document.getElementById("inputIncSatker").value;
  const incType = document.getElementById("inputIncType").value;
  const subCategoryRaw = document.getElementById("inputIncSubCategory").value;
  const customName = document.getElementById("inputCustomEventName")?.value.trim();
  const startTime = document.getElementById("inputIncTime").value;
  const statusLevel = document.getElementById("inputIncStatusLevel").value;
  const aptkVal = document.getElementById("inputIncAptk")?.value || "Tidak Ada";
  const oneDriveUrl = document.getElementById("inputIncOneDrive")?.value.trim() || "https://onedrive.live.com/";
  const rootCause = document.getElementById("inputIncDesc")?.value.trim() || "Sedang dalam analisis tim penanganan darurat.";

  const isTech = incType === "Technology Disaster";
  let subCategory = subCategoryRaw;
  if (subCategoryRaw.startsWith("Lainnya") && customName) {
    subCategory = customName;
  }

  const satker = ALL_OFFICES_DATA.find(s => s.id === satkerId);
  const satkerDisplayName = satker ? satker.name : satkerId;

  const newInc = {
    id: `INC-2025-${String(INCIDENTS_DATA.length + 1).padStart(3, '0')}`,
    time: startTime || new Date().toISOString().slice(0, 16),
    satkerId: satkerId,
    satkerName: satkerDisplayName,
    disasterType: incType,
    subCategory: subCategory,
    aptk: isTech ? aptkVal : "Tidak Ada",
    statusLevel: statusLevel,
    duration: isTech ? "Target RTO: 4 Jam" : "MTPD: 24 Jam",
    status: "OPEN",
    rootCause: rootCause,
    oneDriveUrl: oneDriveUrl
  };

  INCIDENTS_DATA.unshift(newInc);
  localStorage.setItem("bi_incidents_data", JSON.stringify(INCIDENTS_DATA));

  // Update BCM Curve if applicable
  bcmCurveConfig.isTech = isTech;
  if (startTime) {
    const timePart = startTime.split("T")[1];
    if (timePart) bcmCurveConfig.startTime = timePart.slice(0, 5);
  }

  initBcmLambdaCurve();
  renderTop5Table();
  renderIncidentTable();
  closeModal("modalNewIncident");
  showToast(`Insiden "${subCategory}" status [${statusLevel}] berhasil dicatat! Kurva BCM diperbarui.`, "🚨");
}

// =============================================================================
// 16. GLOBAL FILTERS & NAVIGATION
// =============================================================================

function applyGlobalFilters() {
  const year = document.getElementById("filterTahun")?.value || "2025";
  const disaster = document.getElementById("filterDisaster")?.value || "Semua";
  const satkerId = document.getElementById("filterSatker")?.value || "Semua";

  const labelEl = document.getElementById("trenChartFilterLabel");
  if (labelEl) labelEl.textContent = `${year} • ${disaster}`;

  const searchInput = document.getElementById("tableSearchBox");
  if (satkerId !== "Semua") {
    const s = ALL_OFFICES_DATA.find(x => x.id === satkerId);
    if (s && searchInput) searchInput.value = s.city || s.name;
  } else {
    if (searchInput) searchInput.value = "";
  }

  renderActivePktTab();
  showToast(`Filter: [${year}] • [${disaster}]`);
}

function onGlobalDisasterFilterChange() {
  const disaster = document.getElementById("filterDisaster")?.value;
  if (disaster === "Natural Disaster") switchMonitorSubView("natural");
  else if (disaster === "Man Made Disaster") switchMonitorSubView("manmade");
  else if (disaster === "Technology Disaster") switchMonitorSubView("tech");
  else switchMonitorSubView("general");
}

function resetFilters() {
  if (document.getElementById("filterTahun")) document.getElementById("filterTahun").value = "2025";
  if (document.getElementById("filterDisaster")) document.getElementById("filterDisaster").value = "Semua";
  if (document.getElementById("filterSatker")) document.getElementById("filterSatker").value = "Semua";
  if (document.getElementById("tableSearchBox")) document.getElementById("tableSearchBox").value = "";
  if (document.getElementById("tableStatusFilter")) document.getElementById("tableStatusFilter").value = "Semua";

  switchMonitorSubView("general");
  applyGlobalFilters();
  showToast("Semua filter telah direset ke setelan awal.", "🔄");
}

function filterByLevel(levelName) {
  showToast(`Memfilter Satker level: ${levelName}`);
  switchMainView("pkt");
  switchPktCategory("kpwdn");
  const searchInput = document.getElementById("tableSearchBox");
  if (searchInput) {
    if (levelName === "Ditenggarai Krisis") searchInput.value = "Makassar";
    else if (levelName === "Normal Siaga") searchInput.value = "Jayapura";
    else if (levelName === "Normal Waspada") searchInput.value = "Medan";
    else searchInput.value = "";
  }
  renderActivePktTab();
}

function switchMainView(viewName) {
  currentMainView = viewName;

  document.getElementById("navMonitor")?.classList.toggle("active", viewName === "monitor");
  document.getElementById("navProfilWilayah")?.classList.toggle("active", viewName === "profil-wilayah");
  document.getElementById("navResponCepat")?.classList.toggle("active", viewName === "respon-cepat");
  document.getElementById("navIncidentReport")?.classList.toggle("active", viewName === "incident-report");
  document.getElementById("navRepositoryPkt")?.classList.toggle("active", viewName === "pkt");

  document.getElementById("viewMonitor")?.classList.toggle("active", viewName === "monitor");
  document.getElementById("viewProfilWilayah")?.classList.toggle("active", viewName === "profil-wilayah");
  document.getElementById("viewResponCepat")?.classList.toggle("active", viewName === "respon-cepat");
  document.getElementById("viewIncidentReport")?.classList.toggle("active", viewName === "incident-report");
  document.getElementById("viewRepositoryPkt")?.classList.toggle("active", viewName === "pkt");

  if (viewName === "monitor") {
    if (leafletMap && currentMonitorSubView !== "tech") setTimeout(() => leafletMap.invalidateSize(), 200);
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else if (viewName === "profil-wilayah") {
    renderRegionDirectory();
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else if (viewName === "respon-cepat") {
    renderDisasterIconGrid();
    renderStatusRules();
    renderTemplateDocs();
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else if (viewName === "incident-report") {
    renderIncidentTable();
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else if (viewName === "pkt") {
    renderActivePktTab();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

// =============================================================================
// 17. PREVIEW DOKUMEN & MODAL UTILITIES
// =============================================================================

function previewDoc(docTitle) {
  const titleEl = document.getElementById("docPreviewTitle");
  const contentEl = document.getElementById("docPreviewContent");

  if (titleEl) titleEl.innerHTML = `<span>📄</span> ${docTitle}`;

  let sampleText = "";
  if (docTitle.includes("Berita Acara")) {
    sampleText = `BERITA ACARA GANGGUAN OPERASIONAL & AKTIVASI BCM
Nomor: BA.01/DMR/BCM/VI/2025

Pada hari ini, Selasa tanggal 10 Juni 2025, telah terjadi gangguan pada:
1. Satuan Kerja / KPwDN: KPwBI Provinsi Sulawesi Selatan
2. Kategori Bencana     : Technology Disaster (Kabel FO Putus)
3. Waktu Mulai (t₀)     : 08:15 WIB
4. Target Pemulihan     : RTO 4 Jam, RPO 5 Menit
5. Tindakan Awal        : Failover koneksi ke satelit VSAT Ku-Band & DRC Sinergi.

Demikian Berita Acara ini dibuat untuk dipergunakan sebagaimana mestinya.`;
  } else if (docTitle.includes("WA")) {
    sampleText = `*LAPORAN CEPAT INSIDEN BCM BANK INDONESIA*
--------------------------------------------
🚨 *Status*: Ditenggarai Krisis (Level 3)
📍 *Satker*: Kantor Pusat Bank Indonesia (KP)
🕒 *Waktu t₀*: 10-Jun-2025 08:15 WIB
⚡ *Kejadian*: Kegagalan Server Data Center
💻 *APTK Terdampak*: BI-RTGS
🛡️ *Tindakan*: Aktivasi DRC Karawang, tim siaga CFM #1 jam 08:35 WIB.`;
  } else if (docTitle.includes("Deklarasi")) {
    sampleText = `SURAT KEPUTUSAN DEKLARASI STATUS KRISIS
Nomor: SK.08/DMR/DEK/2025

MENIMBANG: Bahwa gangguan operasional sistem pembayaran telah melampaui ambang batas toleransi MTPD.
MEMUTUSKAN:
1. Menetapkan status operasional pada tingkat: DITENGGARAI KRISIS.
2. Mengaktifkan Crisis Management Team (CMT) Bank Indonesia.
3. Memberlakukan pemindahan operasional ke Alternate Office.`;
  } else {
    sampleText = `RISALAH RAPAT KOORDINASI BCM (CALL FOR MEETING)
Agenda: Evaluasi Penanganan Pemulihan Layanan
Waktu : 10 Juni 2025 | 09:50 WIB
Peserta: Tim BCM DMR, DLDS, DKSP, dan DLAF

Poin Keputusan:
1. Jalur komunikasi data dialihkan ke link satelit hingga pukul 12:15 WIB.
2. Rekonsiliasi setelmen kliring terverifikasi utuh tanpa data loss (RPO Terpenuhi).`;
  }

  if (contentEl) contentEl.textContent = sampleText;
  openModal("modalPreviewDoc");
}

function copyDocContent() {
  const content = document.getElementById("docPreviewContent")?.textContent || "";
  navigator.clipboard.writeText(content).then(() => {
    showToast("Isi format dokumen berhasil disalin ke clipboard!", "📋");
  });
}

function openDocOneDrive() {
  window.open("https://onedrive.live.com/", "_blank");
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("active");
    modal.style.display = "flex";
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("active");
    modal.style.display = "none";
  }
}

function showToast(message, icon = "🔔") {
  const toast = document.getElementById("toastNotice");
  const msgEl = document.getElementById("toastMsg");
  const iconEl = document.getElementById("toastIcon");

  if (toast && msgEl) {
    msgEl.textContent = message;
    if (iconEl) iconEl.textContent = icon;
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 3800);
  }
}

// =============================================================================
// EMERGENCY EMAIL & DIREKTORI KONTAK BCM (AKSES CEPAT)
// =============================================================================

function openEmergencyEmailModal() {
  renderEmergencyContactsTable();
  openModal("modalEmergencyEmail");
}

function renderEmergencyContactsTable(query = "") {
  const tbody = document.getElementById("emergencyEmailTableBody");
  if (!tbody) return;
  tbody.innerHTML = "";

  const q = query.toLowerCase().trim();
  const filtered = EMERGENCY_CONTACTS.filter(c => 
    !q || c.name.toLowerCase().includes(q) || 
    c.level.toLowerCase().includes(q) || 
    c.satker.toLowerCase().includes(q) || 
    c.email.toLowerCase().includes(q)
  );

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 20px;">Tidak ada kontak yang cocok dengan kata kunci pencarian.</td></tr>`;
    return;
  }

  filtered.forEach((c, idx) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td style="color: var(--text-muted); font-weight: 700;">${idx + 1}</td>
      <td>
        <strong style="color: var(--text-dark);">${c.name}</strong>
        <div style="font-size: 10px; color: var(--text-muted);">📞 ${c.phone} • <span style="color: #10b981; font-weight: 600;">● ${c.status}</span></div>
      </td>
      <td><span style="font-size: 11px; font-weight: 600; color: #1e40af; background: rgba(30,64,175,0.08); padding: 2px 6px; border-radius: 4px;">${c.level}</span></td>
      <td><span style="font-size: 11.5px; color: var(--text-dark);">${c.satker}</span></td>
      <td>
        <a href="mailto:${c.email}" style="font-family: monospace; font-size: 11.5px; color: var(--gold-primary); font-weight: 700; text-decoration: none;">
          ${c.email}
        </a>
      </td>
      <td style="text-align: center;">
        <div style="display: inline-flex; gap: 4px;">
          <a href="mailto:${c.email}?subject=%5BEMERGENCY%20BCM%20BI%5D%20Eskalasi%20Insiden" class="action-link-btn" title="Kirim Email Langsung" style="padding: 3px 6px;">
            ✉️ Kirim
          </a>
          <button class="action-link-btn" onclick="copyContactEmail('${c.email}')" title="Salin Alamat Email" style="padding: 3px 6px; cursor: pointer;">
            📋 Salin
          </button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function filterEmergencyContacts() {
  const q = document.getElementById("emergencySearchInput")?.value || "";
  renderEmergencyContactsTable(q);
}

function copyContactEmail(email) {
  navigator.clipboard.writeText(email).then(() => {
    showToast(`Email ${email} berhasil disalin ke clipboard!`, "📋");
  }).catch(() => {
    showToast(`Alamat email: ${email}`, "📧");
  });
}

function broadcastEmergencyEmail() {
  const allEmails = EMERGENCY_CONTACTS.map(c => c.email).join(";");
  window.location.href = `mailto:${allEmails}?subject=%5BEMERGENCY%20BROADCAST%20BCM%20BI%5D%20Aktivasi%20Status%20Krisis&body=Yth.%20Pimpinan%20dan%20Tim%20Crisis%20Management%20Team%20(CMT)%20Bank%20Indonesia%2C%0A%0ABersama%20ini%20kami%20laporkan%20terjadinya%20eskalasi%20insiden%20yang%20memerlukan%20penanganan%20cepat%20BCM.%0A%0ASatuan%20Kerja%3A%20...%0AWaktu%20Kejadian%3A%20...%0ATingkat%20Status%3A%20Ditenggarai%20Krisis%0A%0AMohon%20kehadiran%20pada%20Call%20For%20Meeting%20(CFM)%20melalui%20tautan%20berikut.`;
  showToast("Membuka aplikasi email untuk broadcast ke seluruh kontak darurat BCM...", "📢");
}

// =============================================================================
// GLOBAL WINDOW EXPORTS (Guarantee inline HTML onclick handlers always work)
// =============================================================================
window.openDetailIncidentModal = openDetailIncidentModal;
window.openIncidentLambdaModal = openDetailIncidentModal;
window.openActiveIncidentDetailModal = openActiveIncidentDetailModal;
window.onDashboardActiveIncidentChange = onDashboardActiveIncidentChange;
window.populateDashboardActiveIncidentSelect = populateDashboardActiveIncidentSelect;
window.saveIncidentFullDetail = saveIncidentFullDetail;
window.saveIncidentLambdaConfig = saveIncidentFullDetail;
window.toggleCurrentModalIncidentStatus = toggleCurrentModalIncidentStatus;
window.onEditIncDisasterTypeChange = onEditIncDisasterTypeChange;
window.openModal = openModal;
window.closeModal = closeModal;
window.openDetailProfilModal = openDetailProfilModal;
window.openEmergencyEmailModal = openEmergencyEmailModal;
window.switchMainView = switchMainView;
window.switchMonitorSubView = switchMonitorSubView;
