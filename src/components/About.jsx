
import { BookOpen, GraduationCap, Heart, Target } from 'lucide-react'
import Reveal from './Reveal'

const values = [
  {
    icon: BookOpen,
    title: 'Berlandaskan Al-Qur’an',
    description:
      'Menjadikan Al-Qur’an sebagai pedoman dalam proses pendidikan dan pembentukan karakter.',
  },
  {
    icon: GraduationCap,
    title: 'Pendidikan Berkualitas',
    description:
      'Mendorong proses belajar yang bermakna, terarah, dan sesuai kebutuhan peserta didik.',
  },
  {
    icon: Heart,
    title: 'Pembentukan Akhlak',
    description:
      'Menumbuhkan karakter yang santun, bertanggung jawab, dan memiliki kepedulian.',
  },
  {
    icon: Target,
    title: 'Pengembangan Potensi',
    description:
      'Memberikan ruang bagi setiap peserta didik untuk mengenali dan mengembangkan potensi mereka.',
  },
]

export default function About() {
  return (
    <section id="profil" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* Introduction */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <Reveal>
            <p className="mb-4 text-sm font-bold uppercase tracking-[4px] text-amber-700">
              Mengenal Kami
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="text-3xl font-bold leading-tight text-green-950 md:text-5xl">
              Tentang PPS Hawarie Qur'anic Homeschooling
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 leading-8 text-gray-600">
              PPS Hawarie Qur'anic Homeschooling merupakan lembaga pendidikan
              yang mengusung nilai-nilai Al-Qur'an sebagai landasan dalam
              proses pembelajaran dan pembentukan karakter.
            </p>
          </Reveal>
        </div>

        {/* Vision and Mission */}
        <div className="grid gap-8 md:grid-cols-2">

          {/* Vision */}
          <Reveal delay={150}>
            <div className="rounded-3xl bg-[#F0F3EA] p-8 md:p-10">
              <span className="text-sm font-bold uppercase tracking-widest text-green-700">
                Visi
              </span>

              <h3 className="mt-5 text-2xl font-bold leading-relaxed text-green-950">
                Mewujudkan generasi Qur'ani yang berilmu, berakhlak mulia,
                dan memiliki potensi diri.
              </h3>
            </div>
          </Reveal>

          {/* Mission */}
          <Reveal delay={250}>
            <div className="rounded-3xl bg-green-950 p-8 md:p-10">
              <span className="text-sm font-bold uppercase tracking-widest text-green-300">
                Misi
              </span>

              <ul className="mt-5 space-y-4 text-sm leading-7 text-white/90">
                <li>01. Menanamkan kecintaan terhadap Al-Qur'an.</li>
                <li>02. Mengembangkan pembelajaran yang bermakna.</li>
                <li>03. Membentuk karakter dan akhlak mulia.</li>
                <li>04. Mendukung pengembangan potensi peserta didik.</li>
              </ul>
            </div>
          </Reveal>

        </div>

        {/* Educational Values */}
        <div className="mt-24">

          <Reveal>
            <div className="mb-10 text-center">
              <h3 className="text-2xl font-bold text-green-950 md:text-3xl">
                Nilai Pendidikan Kami
              </h3>

              <p className="mt-3 text-gray-500">
                Prinsip yang menjadi inspirasi dalam proses pendidikan.
              </p>
            </div>
          </Reveal>

          {/* Values Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon

              return (
                <Reveal key={value.title} delay={index * 120}>
                  <div className="group h-full rounded-2xl border border-green-900/10 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-900 transition-all duration-300 group-hover:bg-green-900 group-hover:text-white">
                      <Icon size={24} />
                    </div>

                    <h4 className="mb-3 font-bold text-green-950">
                      {value.title}
                    </h4>

                    <p className="text-sm leading-7 text-gray-600">
                      {value.description}
                    </p>

                  </div>
                </Reveal>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}
