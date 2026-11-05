
import {
  Heart,
  HandHeart,
  BookOpen,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react'

import Reveal from './Reveal'

const donationPrograms = [
  {
    icon: BookOpen,
    title: 'Dukungan Pendidikan',
    description:
      'Mendukung penyediaan fasilitas dan kebutuhan kegiatan pembelajaran.',
  },
  {
    icon: HandHeart,
    title: 'Sarana dan Prasarana',
    description:
      'Membantu pengembangan lingkungan belajar yang nyaman dan mendukung.',
  },
  {
    icon: Heart,
    title: 'Program Sosial',
    description:
      'Mendukung kegiatan sosial dan kepedulian terhadap sesama.',
  },
]

export default function Donation() {
  return (
    <section
      id="donasi"
      className="relative overflow-hidden bg-green-950 px-6 py-24"
    >
      {/* Dekorasi */}
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-white/10" />
      <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full border border-white/10" />

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">

          <Reveal>
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-amber-300 transition duration-300 hover:scale-110">
              <Heart size={32} />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <p className="mb-4 text-sm font-bold uppercase tracking-[4px] text-amber-300">
              Dukungan dan Kepedulian
            </p>
          </Reveal>

          <Reveal delay={200}>
            <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl">
              Bersama Mendukung
              <span className="block text-green-300">
                Pendidikan Qur'ani
              </span>
            </h2>
          </Reveal>

          <Reveal delay={300}>
            <p className="mx-auto mt-6 max-w-2xl leading-8 text-green-100/70">
              Setiap bentuk dukungan dapat menjadi bagian dari ikhtiar
              dalam menghadirkan lingkungan pendidikan yang lebih baik
              bagi generasi mendatang.
            </p>
          </Reveal>

        </div>

        {/* Program Donasi */}
        <div className="grid gap-6 md:grid-cols-3">
          {donationPrograms.map((program, index) => {
            const Icon = program.icon

            return (
              <Reveal key={program.title} delay={index * 120}>
                <div className="group h-full rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-green-300/30 hover:bg-white/10 hover:shadow-xl">

                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-300/10 text-amber-300 transition duration-300 group-hover:scale-110 group-hover:bg-amber-300 group-hover:text-green-950">
                    <Icon size={25} />
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-white">
                    {program.title}
                  </h3>

                  <p className="text-sm leading-7 text-green-100/70">
                    {program.description}
                  </p>

                </div>
              </Reveal>
            )
          })}
        </div>

        {/* CTA */}
        <Reveal delay={200}>
          <div className="mt-14 rounded-3xl bg-[#F0F3EA] p-8 text-center transition duration-300 hover:shadow-2xl md:p-12">

            <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-900 transition duration-300 hover:scale-110">
              <ShieldCheck size={25} />
            </div>

            <h3 className="text-2xl font-bold text-green-950 md:text-3xl">
              Ingin Menjadi Bagian dari Perjalanan Kami?
            </h3>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-600">
              Hubungi pengelola PPS Hawarie untuk memperoleh informasi
              lebih lanjut mengenai bentuk dukungan dan mekanisme donasi.
            </p>

            <a
              href="#kontak"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-green-900 px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-green-800 hover:shadow-lg"
            >
              Hubungi Kami

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

          </div>
        </Reveal>

      </div>
    </section>
  )
}
