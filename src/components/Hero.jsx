import { useEffect, useState } from 'react'
import { ArrowRight, BookOpen } from 'lucide-react'
import Reveal from './Reveal'
import foto1 from "../assets/foto_utama1.jpeg"
import foto2 from "../assets/foto_utama2.jpeg"
import foto3 from "../assets/foto_utama3.jpeg"

const heroImages = [foto1, foto2, foto3]

export default function Hero() {
  const [activeImage, setActiveImage] = useState(0)
  const [previousImage, setPreviousImage] = useState(null)

  // Automatic Image Slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setPreviousImage((prevActive) => {
        // simpan gambar yang lagi aktif sebelum pindah
        return activeImage
      })
      setActiveImage((prev) => (prev + 1) % heroImages.length)
    }, 4500)

    return () => clearInterval(interval)
  }, [activeImage])

  // Bersihin previousImage setelah animasi selesai biar gak numpuk
  useEffect(() => {
    if (previousImage === null) return
    const timeout = setTimeout(() => setPreviousImage(null), 800)
    return () => clearTimeout(timeout)
  }, [previousImage])

  return (
    <section
      id="beranda"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#E0FFFF] px-6 pb-16 pt-32"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 md:grid-cols-2">

        {/* Konten Kiri */}
        <div>
          <Reveal>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-blue-900">
              <BookOpen size={15} />
              Qur'anic Homeschooling
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="text-4xl font-bold leading-tight text-blue-950 md:text-6xl">
              Membangun Generasi
              <span className="block text-blue-700">
                Qur'ani
              </span>
              Berilmu dan Berakhlak Mulia
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-7 max-w-xl text-base leading-8 text-gray-700">
              PPS Hawarie Qur'anic Homeschooling menghadirkan
              lingkungan pendidikan yang mengintegrasikan nilai-nilai
              Al-Qur'an, ilmu pengetahuan, dan pembentukan karakter.
            </p>
          </Reveal>

          <div className="mt-9 flex flex-wrap gap-4">
            <Reveal delay={300}>
              <a
                href="#profil"
                className="group inline-flex items-center gap-2 rounded-full bg-blue-900 px-7 py-4 text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                Kenali Hawarie
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </Reveal>

            <Reveal delay={400}>
              <a
                href="#program"
                className="inline-block rounded-full border border-blue-900 px-7 py-4 text-sm font-semibold text-blue-950 transition hover:bg-blue-200"
              >
                Lihat Program
              </a>
            </Reveal>
          </div>
        </div>

        {/* Gambar Kanan */}
        <div className="relative">
          <Reveal delay={200}>
            <div className="absolute -right-5 -top-5 h-full w-full rounded-4xl border-2 border-blue-800/20" />
          </Reveal>

          {/* Automatic Image Slideshow */}
          <Reveal delay={300}>
            <div className="relative h-[400px] w-full overflow-hidden rounded-4xl shadow-xl md:h-[520px]">

              {/* Previous Image */}
              {previousImage !== null && (
                <img
                  key={`previous-${previousImage}`}
                  src={heroImages[previousImage]}
                  alt="Dokumentasi kegiatan PPS Hawarie"
                  className="absolute inset-0 h-full w-full object-cover slide-out-fade"
                />
              )}

              {/* Active Image */}
              <img
                key={`active-${activeImage}`}
                src={heroImages[activeImage]}
                alt="Suasana kegiatan belajar PPS Hawarie"
                className="absolute inset-0 h-full w-full object-cover slide-in-left-to-right"
              />

            </div>
          </Reveal>

          <Reveal delay={450}>
            <div className="absolute -bottom-6 -left-5 rounded-2xl bg-white p-5 shadow-lg inline-block border border-blue-500">
              <p className="text-sm font-bold text-blue-950">
                PPS Hawarie
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Qur'anic Homeschooling
              </p>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  )
}