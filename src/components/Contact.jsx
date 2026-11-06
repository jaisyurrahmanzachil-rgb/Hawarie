
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  ArrowUpRight,
} from 'lucide-react'

import Reveal from './Reveal'

const contactItems = [
  {
    icon: MapPin,
    title: 'Alamat',
    link: 'https://maps.app.goo.gl/V6CTAov1sy5VQbAeA',
    detail: 'Kp. Onon, Ds. Badak Anom, Kec. Sindang Jaya, Kab. Tangerang, Prov. Banten',
    external: true,
  },
  {
    icon: Phone,
    title: 'Telepon / WhatsApp',
    link: 'https://wa.me/6282112807668?text=Halo%20UST.Aan%20Sutandi,%20saya%20tertarik%20dengan%20pondok%20pesantren%20Hawarie!%20Apakah%20saya%20bisa%20berkonsultasi%20lebih%20lanjut?',
    detail: 'No. telepon/WhatsApp pengasuh Hawarie (Ustadz Aan Sutandi)',
    external: true,
  },
  {
    icon: Mail,
    title: 'Email',
    link: 'mailto:hawariequranic@gmail.com',
    detail: 'Email Hawarie Qur’anic Homeschooling (hawariequranic@gmail.com)',
    external: false,
  },
  {
    icon: Clock,
    title: 'Jam Operasional',
    link: null,
    detail: 'Senin–Jumat: 24 jam, Sabtu: Tutup, Minggu: 17.00–21.30 WIB',
    external: false,
  },
]

export default function Contact() {
  return (
    <section id="kontak" className="bg-[#FAF9F3] px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-14 max-w-2xl">

          <Reveal>
            <p className="mb-4 text-sm font-bold uppercase tracking-[4px] text-amber-700">
              Hubungi Kami
            </p>
          </Reveal>

          <Reveal delay={150}>
            <h2 className="text-3xl font-bold leading-tight text-blue-950 md:text-5xl">
              Mari Terhubung
              <span className="block text-blue-700">
                Bersama Hawarie
              </span>
            </h2>
          </Reveal>

          <Reveal delay={250}>
            <p className="mt-6 leading-8 text-gray-600">
              Kami terbuka untuk pertanyaan, informasi pendidikan,
              kerja sama, dan berbagai bentuk komunikasi lainnya.
            </p>
          </Reveal>

        </div>

        {/* Contact Content */}
        <div className="grid gap-10 lg:grid-cols-2">

          {/* Informasi Kontak */}
          <div className="grid gap-5 sm:grid-cols-2">
            {contactItems.map((item, index) => {
              const Icon = item.icon

              return (
                <Reveal key={item.title} delay={index * 120}>
                  <div className="group h-full rounded-3xl border border-blue-900/10 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-900/20 hover:shadow-xl">

                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-900 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-900 group-hover:text-white">
                      <Icon size={23} />
                    </div>

                    <h3 className="mb-3 font-bold text-blue-950">
                      {item.title}
                    </h3>

                    {item.link ? (
                      <a
                        href={item.link}
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noopener noreferrer' : undefined}
                        className="text-sm leading-7 text-gray-500 transition-colors duration-300 hover:text-blue-800 hover:underline"
                      >
                        {item.detail}
                      </a>
                    ) : (
                      <p className="text-sm leading-7 text-gray-500">
                        {item.detail}
                      </p>
                    )}

                  </div>
                </Reveal>
              )
            })}
          </div>

          {/* Contact CTA */}
          <Reveal delay={200}>
            <div className="flex flex-col justify-between rounded-3xl bg-blue-950 p-8 transition duration-300 hover:shadow-2xl md:p-10">

              <div>
                <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-blue-200">
                  PPS Hawarie
                </span>

                <h3 className="mt-8 text-3xl font-bold leading-tight text-white">
                  Kami Siap Menyambut Anda
                </h3>

                <p className="mt-5 leading-8 text-blue-100/70">
                  Ingin mengetahui lebih jauh mengenai profil,
                  program pendidikan, atau kegiatan PPS Hawarie?
                  Silakan hubungi pengelola melalui saluran komunikasi resmi.
                </p>
              </div>

              <a
                href="https://wa.me/6281510123151?text=Halo%20kak%20admin,%20saya%20tertarik%20dengan%20pondok%20pesantren%20Hawarie!%20Apakah%20saya%20bisa%20berkonsultasi%20lebih%20lanjut?"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-10 inline-flex w-fit items-center gap-3 rounded-full bg-blue-300 px-7 py-4 text-sm font-bold text-blue-950 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-200 hover:shadow-lg"
              >
                <MessageCircle
                  size={19}
                  className="transition-transform duration-300 group-hover:scale-110"
                />

                Hubungi melalui WhatsApp

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <p className="mt-5 text-xs text-blue-100/50">
                Nomor telepon/WhatsApp admin Pondok Pesantren Hawarie Qur'anic Homeschooling
              </p>

            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
