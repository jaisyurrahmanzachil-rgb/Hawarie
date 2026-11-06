
import {
  BookOpen,
  Brain,
  GraduationCap,
  HeartHandshake,
  ArrowUpRight,
} from 'lucide-react'

import Reveal from './Reveal'

const programs = [
  {
    number: '01',
    icon: BookOpen,
    title: 'Pendidikan Al-Qur’an',
    description:
      'Program pembelajaran Al-Qur’an untuk membangun kedekatan peserta didik dengan kitab suci.',
    tag: 'Qur’anic Learning',
  },
  {
    number: '02',
    icon: GraduationCap,
    title: 'Pendidikan Akademik',
    description:
      'Pembelajaran akademik untuk mendukung perkembangan pengetahuan dan kemampuan peserta didik.',
    tag: 'Academic Learning',
  },
  {
    number: '03',
    icon: HeartHandshake,
    title: 'Pembinaan Karakter',
    description:
      'Pembiasaan nilai-nilai akhlak, kedisiplinan, tanggung jawab, dan kepedulian.',
    tag: 'Character Building',
  },
  {
    number: '04',
    icon: Brain,
    title: 'Pengembangan Potensi',
    description:
      'Kegiatan yang mendukung kreativitas, keterampilan, dan potensi individu peserta didik.',
    tag: 'Personal Development',
  },
]

export default function Programs() {
  return (
    <section id="program" className="bg-[#E0FFFF] px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div className="max-w-2xl">
            <Reveal>
              <p className="mb-4 text-sm font-bold uppercase tracking-[4px] text-amber-700">
                Program Pendidikan
              </p>
            </Reveal>

            <Reveal delay={150}>
              <h2 className="text-3xl font-bold leading-tight text-blue-950 md:text-5xl">
                Ruang Belajar untuk
                <span className="block text-blue-700">
                  Tumbuh dan Berkembang
                </span>
              </h2>
            </Reveal>
          </div>

          <Reveal delay={250}>
            <p className="max-w-md leading-7 text-gray-600">
              Berbagai pendekatan pendidikan yang dirancang untuk
              mendukung perkembangan ilmu, karakter, dan potensi peserta didik.
            </p>
          </Reveal>

        </div>

        {/* Program Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {programs.map((program, index) => {
            const Icon = program.icon

            return (
              <Reveal key={program.number} delay={index * 120}>
                <article className="group h-full rounded-3xl border border-blue-900/10 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

                  {/* Card Header */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-blue-700">
                      {program.number}
                    </span>

                    <ArrowUpRight
                      size={20}
                      className="text-gray-400 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-blue-800"
                    />
                  </div>

                  {/* Program Icon */}
                  <div className="my-9 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-900 transition-all duration-300 group-hover:bg-blue-900 group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  {/* Program Information */}
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-amber-700">
                    {program.tag}
                  </p>

                  <h3 className="mb-4 text-xl font-bold text-blue-950">
                    {program.title}
                  </h3>

                  <p className="text-sm leading-7 text-gray-600">
                    {program.description}
                  </p>

                </article>
              </Reveal>
            )
          })}

        </div>

      </div>
    </section>
  )
}
