import React, { useState } from 'react';

function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <div className="relative w-full aspect-video bg-gray-800 overflow-hidden group/slider">
      <img
        src={images[currentIndex]}
        alt="Project Screenshot"
        className="w-full h-full object-cover transition duration-500"
      />
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white w-8 h-8 flex items-center justify-center rounded-full opacity-0 group-hover/slider:opacity-100 transition-opacity hover:bg-blue-600 cursor-pointer z-10"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white w-8 h-8 flex items-center justify-center rounded-full opacity-0 group-hover/slider:opacity-100 transition-opacity hover:bg-blue-600 cursor-pointer z-10"
      >
        &#8594;
      </button>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`w-2 h-2 rounded-full transition-colors ${
              idx === currentIndex ? 'bg-white' : 'bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function App() {
  // State untuk menyimpan skill yang sedang DIKLIK
  const [activeSkill, setActiveSkill] = useState(null);
  
  // Data Gambar Slider BMW
  const bmwImages = [
    "/Pricelist-BMW.JPG",
    "/BMW-Smart.JPG",
    "/Admin-BMW.JPG"
  ];

  // Data Gambar Project Donat
  const donatImages = [
    "/Project-donat.JPG"
  ]

  // Data Keahlian
  const skillsData = {
    frontend: [
      { name: 'React', desc: 'Saya menggunakannya untuk membangun antarmuka interaktif, seperti pada aplikasi KopiPedia dan integrasi frontend sistem e-commerce pemesanan donat.' },
      { name: 'JavaScript', desc: 'Bahasa pemrograman inti untuk logika dinamis, pengelolaan DOM, dan interaksi klien pada web modern.' },
      { name: 'TypeScript', desc: 'Membantu saya menulis kode JavaScript yang lebih aman, terstruktur, dan minim bug dengan static typing.' },
      { name: 'Tailwind CSS', desc: 'Framework andalan saya untuk mendesain tata letak yang bersih dan responsif secara cepat, termasuk pada portofolio ini.' },
      { name: 'HTML5', desc: 'Standar kerangka semantik untuk memastikan struktur halaman web mudah diakses dan dipahami.' },
      { name: 'CSS3', desc: 'Digunakan untuk tata letak visual tingkat lanjut dan animasi interaktif.' }
    ],
    backend: [
      { name: 'MySQL', desc: 'Sistem manajemen database relasional yang sering saya gunakan untuk proyek berbasis web terstruktur, seperti pada manajemen data kriteria dan perhitungan SMART di aplikasi BMW.' },
      { name: 'PHP', desc: 'Bahasa yang saya gunakan untuk mengelola logika backend, termasuk implementasi algoritma SMART pada SPK Rekomendasi BMW.' },
      { name: 'PostgreSQL', desc: 'Database relasional tangguh untuk menyimpan data terstruktur yang saya terapkan pada sistem e-commerce.' },
    ]
  };

  // ==========================================
  // STATE & FUNGSI UNTUK FORM KONTAK
  // ==========================================
  const [formData, setFormData] = useState({ nama: '', email: '', pesan: '' });
  const [formErrors, setFormErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};

    if (!formData.nama.trim()) errors.nama = "Nama wajib diisi";
    
    if (!formData.email.trim()) {
      errors.email = "Email wajib diisi";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Format email tidak valid";
    }

    if (!formData.pesan.trim()) {
      errors.pesan = "Pesan wajib diisi";
    } else if (formData.pesan.trim().length < 10) {
      errors.pesan = "Pesan terlalu singkat (minimal 10 karakter)";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      setIsSuccess(true);
      setFormData({ nama: '', email: '', pesan: '' }); 
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  return (
    <div className="w-full bg-gray-50 text-gray-800 font-sans selection:bg-blue-200">
      
      {/* =========================================
          NAVBAR MENGAPUNG (FIXED) - MONOKROM
      ========================================= */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-gray-950/90 backdrop-blur-md shadow-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <div className="flex-1 flex justify-start">
            <a href="#home" className="hover:opacity-80 transition flex items-center">
              <img 
                src="/Logo-Haikal.png" 
                alt="Logo Haikal" 
                className="h-10 w-auto object-contain" 
              />
            </a>
          </div>
          <ul className="flex gap-8 font-semibold text-gray-400 text-sm md:text-base justify-center">
            <li>
              <a href="#home" className="relative group hover:text-white transition py-1">
                Profil
                <span className="absolute left-0 bottom-0 w-0 h-2px bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="#skill" className="relative group hover:text-white transition py-1">
                Skill
                <span className="absolute left-0 bottom-0 w-0 h-2px bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="#projects" className="relative group hover:text-white transition py-1">
                Project
                <span className="absolute left-0 bottom-0 w-0 h-2px bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="#contact" className="relative group hover:text-white transition py-1">
                Contact
                <span className="absolute left-0 bottom-0 w-0 h-2px bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>
          <div className="flex-1 flex justify-end"></div>
        </div>
      </nav>

      {/* =========================================
          BAGIAN 1: BERANDA (HERO)
      ========================================= */}
      <section id="home" className="min-h-screen flex flex-col justify-center pt-28 px-6 md:px-12 bg-gray-950">
        <div className="flex flex-col md:flex-row gap-12 items-stretch w-full max-w-7xl mx-auto">
          <div className="flex-1 flex flex-col py-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Haikal Wisnu Fazrian
              </h1>
              <h2 className="text-xl text-gray-400 font-medium">
                Frontend Developer <br /> Backend Developer
              </h2>
            </div>
            <div className="my-10">
              <h3 className="text-xl font-bold text-white mb-4 border-b-2 border-gray-600 pb-2 inline-block">
                About Me
              </h3>
              <p className="text-gray-400 leading-relaxed max-w-xl">
                Saya adalah seorang Front-End/Back-end Developer membangun antarmuka web interaktif, modern, dan responsif menggunakan React, JavaScript, TypeScript dan Tailwind CSS. Saat ini, saya sedang aktif memperluas keahlian menuju peran Full-Stack Developer dengan mendalami arsitektur backend, perancangan database, serta integrasi API untuk menciptakan solusi digital.
                <br/><br/>
                Saya juga memiliki pengalaman praktis dalam merancang dan memodelkan arsitektur database ( UML, ERD, dan LRS), serta mengimplementasikannya ke dalam PostgreSQL dan MySQL untuk membangun fondasi sistem yang terstruktur dan andal.
              </p>
            </div>
            <div className="flex gap-4 justify-start mt-auto">
              <a href="#contact" className="bg-white text-gray-950 px-6 py-2 rounded-lg font-bold hover:bg-blue-300 transition">
                Hubungi Saya
              </a>
              <a href="#projects" className="bg-transparent border border-gray-600 text-gray-300 px-6 py-2 rounded-lg hover:border-white hover:text-white transition">
                Lihat Karya
              </a>
            </div>
          </div>
          <div className="flex-1 w-full flex justify-center md:justify-end">
            <div className="w-full max-w-md aspect-3/4 rounded-2xl overflow-hidden shadow-2xl relative border border-gray-800">
              <img 
                src="/Profil-Haikal.jpeg"
                alt="Haikal Wisnu Fazrian" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          BAGIAN 2: SKILLS, HOBI & PRESTASI
      ========================================= */}
      <section id="skill" className="min-h-screen flex flex-col justify-center px-6 md:px-12 bg-gray-900 border-t border-gray-800 py-20">
        <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto w-full">
          <div className="lg:w-3/5 w-full flex flex-col">
            <h3 className="text-3xl font-bold text-white mb-8 border-b-2 border-gray-600 pb-2 inline-block self-start">
              Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              <div className="bg-gray-950 p-6 rounded-xl shadow-md border border-gray-800 hover:border-gray-600 transition duration-300 flex flex-col min-h-280px">
                <h4 className="font-semibold text-lg mb-6 text-white flex items-center gap-3">
                  <span className="w-2 h-2 bg-gray-400 rounded-full"></span> Frontend
                </h4>
                {activeSkill && skillsData.frontend.some(s => s.name === activeSkill.name) ? (
                  <div 
                    className="text-gray-300 text-sm leading-relaxed cursor-pointer"
                    onClick={() => setActiveSkill(null)}
                  >
                    <span className="font-bold text-white block mb-2 text-base border-b border-gray-700 pb-1">{activeSkill.name}</span>
                    {activeSkill.desc}
                    <span className="block mt-4 text-xs text-gray-500 italic hover:text-white transition">
                      ← Klik di sini untuk kembali
                    </span>
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {skillsData.frontend.map(skill => (
                      <span 
                        key={skill.name} 
                        onClick={() => setActiveSkill(skill)}
                        className="bg-gray-900 text-gray-300 px-3 py-1 rounded-full text-sm font-medium border border-gray-700 hover:bg-white hover:text-gray-900 transition cursor-pointer"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="bg-gray-950 p-6 rounded-xl shadow-md border border-gray-800 hover:border-gray-600 transition duration-300 flex flex-col min-h-280px">
                <h4 className="font-semibold text-lg mb-6 text-white flex items-center gap-3">
                  <span className="w-2 h-2 bg-gray-400 rounded-full"></span> Backend & Database
                </h4>
                {activeSkill && skillsData.backend.some(s => s.name === activeSkill.name) ? (
                  <div 
                    className="text-gray-300 text-sm leading-relaxed cursor-pointer"
                    onClick={() => setActiveSkill(null)}
                  >
                    <span className="font-bold text-white block mb-2 text-base border-b border-gray-700 pb-1">{activeSkill.name}</span>
                    {activeSkill.desc}
                    <span className="block mt-4 text-xs text-gray-500 italic hover:text-white transition">
                      ← Klik di sini untuk kembali
                    </span>
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {skillsData.backend.map(skill => (
                      <span 
                        key={skill.name} 
                        onClick={() => setActiveSkill(skill)}
                        className="bg-gray-900 text-gray-300 px-3 py-1 rounded-full text-sm font-medium border border-gray-700 hover:bg-white hover:text-gray-900 transition cursor-pointer"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="lg:w-2/5 w-full flex flex-col">
            <h3 className="text-3xl font-bold text-white mb-8 border-b-2 border-gray-600 pb-2 inline-block self-start">
              Hobi & Prestasi
            </h3>
            <div className="flex flex-col gap-6">
              <div className="bg-gray-950 p-6 rounded-xl shadow-md border border-gray-800 hover:border-gray-600 transition duration-300">
                <h4 className="font-semibold text-lg mb-6 text-white flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-400 rounded-full"></span> Basketball
                </h4>
                <div className="text-gray-400 text-sm leading-relaxed space-y-5">
                  <div>
                    <h5 className="text-gray-200 font-semibold mb-2 border-b border-gray-800 pb-1">Tingkat Universitas (2023-2025)</h5>
                    <h4>Universitas Pamulang</h4>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>3rd Place - Universal Competition of Trisakti (2024)</li>
                      <li>3rd Place - Pysphoria 14.0 Tarumanagara University (2024)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-gray-200 font-semibold mb-2 border-b border-gray-800 pb-1">Tingkat Sekolah (2021-2022)</h5>
                    <h4>Taruna Terpadu 1</h4>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>1st Place - Golden Basketball Turnamen (2022)</li>
                      <li>1st Place - Garuda Acalapati (2022)</li>
                      <li>2nd Place - Nuclears (2022)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          BAGIAN 3: PROYEK KARYA (MONOKROM)
      ========================================= */}
      <section id="projects" className="min-h-screen flex flex-col justify-center px-6 md:px-12 bg-gray-950 border-t border-gray-800 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <h3 className="text-3xl font-bold text-white mb-12 border-b-2 border-gray-600 pb-2 inline-block">
            Proyek Unggulan
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            
            {/* Project 1: SPK BMW */}
            <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-600 hover:shadow-2xl transition duration-300 flex flex-col group">
              <ImageSlider images={bmwImages} />
              <div className="p-6 flex flex-col flex-1">
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-gray-300 transition">BMW Tunas HW (SPK SMART)</h4>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  Sistem Pendukung Keputusan berbasis web untuk rekomendasi kendaraan. Dilengkapi autentikasi multi-role, manajemen database dinamis, dan sistem integrasi pengajuan Test Drive.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="text-xs font-medium bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-700">PHP (Native)</span>
                  <span className="text-xs font-medium bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-700">MySQL</span>
                  <span className="text-xs font-medium bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-700">HTML5</span>
                  <span className="text-xs font-medium bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-700">JavaScript</span>
                  <span className="text-xs font-medium bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-700">Tailwind CSS</span>
                </div>
              </div>
            </div>

            {/* Project 2: Donut App */}
            <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-600 hover:shadow-2xl transition duration-300 flex flex-col group">
              <ImageSlider images={donatImages}/>
              <div className="p-6 flex flex-col flex-1">
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-gray-300 transition">Full-Stack Donut Ordering</h4>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  Aplikasi e-commerce yang di-refactor menjadi arsitektur Full-Stack. Mengelola fungsionalitas keranjang, riwayat pesanan, serta integrasi modal simulasi pembayaran QRIS.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="text-xs font-medium bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-700">HTML5</span>
                  <span className="text-xs font-medium bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-700">CSS3</span>
                  <span className="text-xs font-medium bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-700">JavaScript</span>
                  <span className="text-xs font-medium bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-700">React</span>
                  <span className="text-xs font-medium bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-700">PostgreSQL</span>
                </div>
              </div>
            </div>

            {/* Project 3: KopiPedia */}
            <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-600 hover:shadow-2xl transition duration-300 flex flex-col group">
              <div className="w-full aspect-video bg-gray-800 flex items-center justify-center overflow-hidden relative">
                  <span className="text-gray-500 font-medium group-hover:scale-110 transition duration-500">Screenshot Finance</span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-gray-300 transition">Finance Dashboard</h4>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="text-xs font-medium bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-700">React</span>
                  <span className="text-xs font-medium bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-700">SQL</span>
                  <span className="text-xs font-medium bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-700">HTML5</span>
                  <span className="text-xs font-medium bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-700">Tailwind CSS</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          BAGIAN 4: KONTAK (FORM VALIDASI)
      ========================================= */}
      <section id="contact" className="min-h-screen flex flex-col justify-center px-6 md:px-12 bg-gray-900 border-t border-gray-800 py-20">
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-16">
          
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Mari Berkolaborasi</h3>
            <p className="text-gray-400 mb-10 leading-relaxed text-lg">
              Saat ini saya terbuka untuk peluang baru. Jika Anda mencari web developer yang memahami siklus pengembangan perangkat lunak secara utuh, mari bicarakan bagaimana saya bisa membantu tim Anda.
            </p>
          </div>

          <div className="lg:w-1/2 bg-gray-950 p-8 rounded-2xl border border-gray-800 shadow-2xl">
            <h4 className="text-2xl font-bold text-white mb-6">Kirim Pesan</h4>
            
            {isSuccess && (
              <div className="bg-green-900/50 border border-green-500 text-green-200 px-4 py-3 rounded-lg mb-6">
                Terima kasih! Pesan Anda telah berhasil dikirim.
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Nama Lengkap</label>
                <input 
                  type="text" 
                  name="nama"
                  value={formData.nama}
                  onChange={handleChange}
                  placeholder="Masukkan nama Anda"
                  className={`w-full bg-gray-900 border ${formErrors.nama ? 'border-red-500 focus:ring-red-500' : 'border-gray-700 focus:ring-gray-500'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 transition`}
                />
                {formErrors.nama && <p className="text-red-500 text-xs mt-1.5">{formErrors.nama}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Alamat Email</label>
                <input 
                  type="text" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="nama@email.com"
                  className={`w-full bg-gray-900 border ${formErrors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-700 focus:ring-gray-500'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 transition`}
                />
                {formErrors.email && <p className="text-red-500 text-xs mt-1.5">{formErrors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Pesan Anda</label>
                <textarea 
                  name="pesan"
                  rows="4"
                  value={formData.pesan}
                  onChange={handleChange}
                  placeholder="Tuliskan pesan atau penawaran kerja Anda di sini..."
                  className={`w-full bg-gray-900 border ${formErrors.pesan ? 'border-red-500 focus:ring-red-500' : 'border-gray-700 focus:ring-gray-500'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 transition resize-none`}
                ></textarea>
                {formErrors.pesan && <p className="text-red-500 text-xs mt-1.5">{formErrors.pesan}</p>}
              </div>

              <button 
                type="submit" 
                className="w-full bg-white text-gray-950 font-bold py-3.5 rounded-lg hover:bg-gray-300 transition mt-2 shadow-lg shadow-white/5"
              >
                Kirim Sekarang
              </button>
            </form>
          </div>

        </div>
      </section>
      
    </div>
  );
}