
import {
  BookOpen,
  MapPin,
  Mail,
  Phone,
} from 'lucide-react'

import {
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from 'react-icons/fa'

import Reveal from './Reveal'

function Footer() {
  return (
    <footer className="bg-green-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-2">

          {/* Brand */}
          <Reveal>
            <div className="flex flex-col items-center">

              <div className="group mb-5 flex items-center gap-3">
                <BookOpen
                  size={32}
                  className="text-green-300 transition duration-300 group-hover:scale-110 group-hover:rotate-6"
                />

                <h2 className="text-xl font-bold tracking-wider transition duration-300 group-hover:text-green-300">
                  HAWARIE
                </h2>
              </div>

              <p className="max-w-sm text-sm leading-7 text-green-100/60">
                PPS Hawarie Qur'anic Homeschooling merupakan lembaga
                pendidikan yang berkomitmen membangun generasi Qur'ani,
                berilmu, dan berakhlak mulia.
              </p>

              {/* Social Media */}
              <div className="mt-8 flex flex-row items-center justify-center gap-6">

                <Reveal delay={100}>
                  <a
                    href="https://www.instagram.com/santri_hawarie?mdxt=eGZuMmhleWM1MXNn"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram Hawarie"
                    className="group flex flex-col items-center gap-2 text-green-100/60 transition duration-300 hover:text-green-300"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition duration-300 group-hover:scale-110 group-hover:border-green-300 group-hover:bg-green-300 group-hover:text-green-950">
                      <FaInstagram size={19} />
                    </span>

                    <span className="text-sm transition duration-300 group-hover:-translate-y-1">
                      Instagram
                    </span>
                  </a>
                </Reveal>

                <Reveal delay={200}>
                  <a
                    href="https://www.tiktok.com/@santri.hawarie?_r=1&_t=ZS-9B8xJSgYgXV"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok Hawarie"
                    className="group flex flex-col items-center gap-2 text-green-100/60 transition duration-300 hover:text-green-300"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition duration-300 group-hover:scale-110 group-hover:border-green-300 group-hover:bg-green-300 group-hover:text-green-950">
                      <FaTiktok size={18} />
                    </span>

                    <span className="text-sm transition duration-300 group-hover:-translate-y-1">
                      TikTok
                    </span>
                  </a>
                </Reveal>

                <Reveal delay={300}>
                  <a
                    href="https://youtube.com/@hawary_qurany?si=ohc7hMzNwzlMSj9U"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube Hawarie"
                    className="group flex flex-col items-center gap-2 text-green-100/60 transition duration-300 hover:text-green-300"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition duration-300 group-hover:scale-110 group-hover:border-green-300 group-hover:bg-green-300 group-hover:text-green-950">
                      <FaYoutube size={20} />
                    </span>

                    <span className="text-sm transition duration-300 group-hover:-translate-y-1">
                      YouTube
                    </span>
                  </a>
                </Reveal>

              </div>
            </div>
          </Reveal>

          {/* Contact / Informasi */}
          <Reveal delay={200}>
            <div className="flex flex-col items-center text-center">

              <h3 className="mb-7 text-sm font-bold uppercase tracking-widest text-green-300">
                Informasi
              </h3>

              <ul className="flex flex-row flex-wrap items-start justify-center gap-8">

                {/* Alamat */}
                <li>
                  <a
                    href="https://maps.app.goo.gl/pPM9NG7GA5NXiJsa7"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Lokasi PPS Hawarie Sukatani"
                    className="group flex flex-col items-center gap-2"
                  >
                    <MapPin
                      size={22}
                      className="text-green-300 transition duration-300 group-hover:-translate-y-1 group-hover:scale-110"
                    />

                    <span className="text-sm leading-6 text-green-100/60 transition duration-300 group-hover:text-green-300">
                      PPS Hawarie Sukatani
                    </span>
                  </a>
                </li>

                {/* WhatsApp */}
                <li>
                  <a
                    href="https://wa.me/62895618789476?text=Halo%20kak%20Halimah,%20saya%20tertarik%20dengan%20pesantren%20Hawarie%20Sukatani!%20Apakah%20saya%20bisa%20berkonsultasi%20lebih%20lanjut?"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp Ustadzah Hawarie Sukatani"
                    className="group flex flex-col items-center gap-2"
                  >
                    <Phone
                      size={22}
                      className="text-green-300 transition duration-300 group-hover:-translate-y-1 group-hover:scale-110"
                    />

                    <span className="text-sm text-green-100/60 transition duration-300 group-hover:text-green-300">
                      Nomor WhatsApp ustadzah Sukatani
                    </span>
                  </a>
                </li>

                {/* Email */}
                <li>
                  <a
                    href="mailto:operator.hawarie@gmail.com"
                    aria-label="Email operator Hawarie"
                    className="group flex flex-col items-center gap-2"
                  >
                    <Mail
                      size={22}
                      className="text-green-300 transition duration-300 group-hover:-translate-y-1 group-hover:scale-110"
                    />

                    <span className="break-all text-sm text-green-100/60 transition duration-300 group-hover:text-green-300">
                      Email operator Hawarie (operator.hawarie@gmail.com)
                    </span>
                  </a>
                </li>

              </ul>
            </div>
          </Reveal>

        </div>

        {/* Copyright */}
        <Reveal delay={200}>
          <div className="flex justify-center pt-8 text-center text-xs text-green-100/40">
            <p className="text-sm md:text-base">
              © {new Date().getFullYear()}{' '}
              <span className="transition duration-300 hover:text-green-100/70">
                Pondok Pesantren Hawarie Qur'anic Homeschooling
              </span>
              . All rights reserved.
            </p>
          </div>
        </Reveal>

      </div>
    </footer>
  )
}

export default Footer
