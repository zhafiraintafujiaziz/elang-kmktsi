# Elang KMKTSI - Dashboard Ketahanan Sistem & BCM Bank Indonesia

Sistem Monitoring Resiliensi, Kesiapsiagaan, dan Business Continuity Management (BCM) Bank Indonesia.

## 📌 Fitur Utama

1. **Dashboard Monitoring BCM**
   - **General Disaster**: Monitoring menyeluruh insiden aktif, selesai, risk heatmap gabungan, tren insiden dinamis, dan Top 5 entitas risiko tertinggi.
   - **Natural Disaster (L.1)**: Peta sebaran risiko bencana alam di 46 KPw & KP Bank Indonesia, integrasi data EWS KMKTSI, dan risk heatmap kerentanan.
   - **Man-Made Disaster (L.2)**: Peta sebaran insiden sosial/keamanan berdasarkan laporan KPwDN dan risk heatmap kerentanan daerah.
   - **Technology Disaster (L.3)**: Visualisasi 7 Layer OSI (Physical, Data Link, Network, Transport, Session, Presentation, Application) dengan pemetaan total gangguan, serta Risk Heatmap 24 APTK (Aplikasi Pendukung Tugas Kritikal).

2. **Profil Wilayah (KP & 46 KPwBI)**
   - Direktori visual lengkap 46 Kantor Perwakilan Bank Indonesia dan Kantor Pusat.
   - Pencarian instan dan filter bencana (gempa, banjir, dll).
   - Rincian profil kesiapan:
     - **Profil**: Alamat, kerentanan potensi bencana, status, KPw terdekat, LKA alternatif.
     - **SDM (Sumber Daya Manusia)**: Pegawai, SP PUR, Kas.
     - **SDLK (Sumber Daya Lokasi Kerja)**: Sarana & prasarana, genset, BBM, APAR, dsb.
     - **SDTD (Sumber Daya Teknologi Digital)**: Koneksi jaringan, sistem pendukung.
     - **Riwayat Insiden**: Log kejadian dan status pemulihan.
     - Integrasi tautan dokumen kerja: PKT, DRA, dan BCS via OneDrive.

3. **Panduan Respon Cepat (Flyer & SOP BCM)**
   - Panduan terstruktur untuk Natural, Man-Made, dan Technology Disaster.
   - Tampilan modal interaktif: Flyer, Panduan Cepat, SOP, Juknis, PKT Satker Pendukung, dan link video edukasi.
   - Ketentuan Status Krisis: Normal, Normal-Waspada, Normal-Siaga, Ditenggarai Krisis.
   - Template Dokumen: Deklarasi Status, Berita Acara, Penggunaan AO, Template Pelaporan WhatsApp.

4. **Incident Report Management & Lambda BCM**
   - Pencatatan insiden baru dengan klasifikasi bencana lengkap dan status dinamis.
   - Form khusus gangguan teknologi dengan 24 APTK (BI-FAST, BI-RTGS, SKNBI, GMMP, CBS, ANTASENA, dll).
   - Tabel riwayat insiden interaktif dengan sorting dan filtering.
   - **Pop-up Detail Insiden & Kurva Lambda BCM**:
     - Visualisasi grafik pemulihan interaktif (Gangguan -> Call For Meeting -> RTO / MTPD -> Recovery).
     - Timeline Call For Meeting (CFM) dengan penanda rapat koordinasi.
     - Update status Open/Close secara real-time.

5. **Akses Cepat & Emergency Contacts**
   - Emergency email & kontak satker/pimpinan terkait.
   - Repository dokumen PKT & DRA.

---

## 🚀 Cara Menjalankan

### Menggunakan Node.js
```bash
node server.js
```
Akses dashboard melalui browser di: `http://localhost:3000`

### Menjalankan Langsung (Static)
Buka file `index.html` langsung di browser modern (Chrome, Edge, Firefox).
