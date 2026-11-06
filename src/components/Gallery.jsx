
import { useState } from 'react'
import { ArrowUpRight, Images, X } from 'lucide-react'
import Reveal from './Reveal'

const galleryItems = [
  {
    image:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1000',
    title: 'Kegiatan Pembelajaran',
    category: 'Akademik',
    size: 'large',
  },
  {
    image:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800',
    title: 'Suasana Belajar',
    category: 'Pendidikan',
    size: 'normal',
  },
  {
    image:
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800',
    title: 'Literasi dan Membaca',
    category: 'Literasi',
    size: 'normal',
  },
  {
    image:
      'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800',
    title: 'Aktivitas Bersama',
    category: 'Kegiatan',
    size: 'normal',
  },
  {
    image:
      'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800',
    title: 'Eksplorasi Pengetahuan',
    category: 'Pembelajaran',
    size: 'normal',
  },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section id="galeri" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>
            <Reveal>
              <p className="mb-4 text-sm font-bold uppercase tracking-[4px] text-amber-700">
                Dokumentasi Kegiatan
              </p>
            </Reveal>

            <Reveal delay={150}>
              <h2 className="text-3xl font-bold text-blue-950 md:text-5xl">
                Galeri Hawarie
              </h2>
            </Reveal>

            <Reveal delay={250}>
              <p className="mt-5 max-w-xl leading-7 text-gray-600">
                Mengenal lebih dekat berbagai aktivitas, pengalaman,
                dan suasana pembelajaran di Hawarie Qur'anic Homeschooling.
              </p>
            </Reveal>
          </div>

          <Reveal delay={300}>
            <div className="flex items-center gap-2 text-sm font-semibold text-blue-800">
              <Images size={19} />
              Momen dan Cerita
            </div>
          </Reveal>

        </div>

        {/* Gallery Grid */}
        <div className="grid auto-rows-55 gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {galleryItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 120}>
              <button
                type="button"
                onClick={() => setSelectedImage(item)}
                aria-label={`Lihat gambar ${item.title}`}
                className={`group relative h-full w-full overflow-hidden rounded-3xl text-left ${
                  index === 0 ? 'sm:row-span-2' : ''
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-blue-950/90 via-blue-950/10 to-transparent transition duration-300 group-hover:from-blue-950/95" />

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-200">
                    {item.category}
                  </p>

                  <div className="flex items-end justify-between gap-3">
                    <h3 className="text-lg font-bold text-white">
                      {item.title}
                    </h3>

                    <ArrowUpRight
                      size={22}
                      className="shrink-0 text-white transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </button>
            </Reveal>
          ))}

        </div>

        {/* Footer Gallery */}
        <Reveal delay={200}>
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500">
              Setiap momen menjadi bagian dari perjalanan pendidikan.
            </p>
          </div>
        </Reveal>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-5"
          onClick={() => setSelectedImage(null)}
          role="presentation"
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            aria-label="Tutup gambar"
            className="absolute right-6 top-6 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
          >
            <X size={26} />
          </button>

          <div
            className="w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-h-[75vh] w-full rounded-2xl object-contain"
            />

            <div className="mt-5 text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-green-300">
                {selectedImage.category}
              </p>

              <h3 className="mt-2 text-xl font-bold text-white">
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}

    </section>
  )
}
