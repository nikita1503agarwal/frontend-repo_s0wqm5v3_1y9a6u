import { useMemo } from 'react'
import { Plane, ChevronRight, MapPin } from 'lucide-react'

const NAVY = '#0B2545'
const TURQ = '#1CA7A6'

function Navbar() {
  const links = [
    { label: 'Home', href: '#' },
    { label: 'Destinations', href: '#destinations' },
    { label: 'Packages', href: '#packages' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-[#1CA7A6] to-[#0B2545] flex items-center justify-center text-white">
              <Plane size={18} />
            </div>
            <span className="text-lg font-semibold tracking-wide text-[#0B2545]">Lintas Mega</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-medium text-slate-700 hover:text-[#0B2545] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#packages"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-[#1CA7A6] text-white px-4 py-2 text-sm font-semibold shadow-sm hover:shadow transition-all"
          >
            Jelajahi <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  // Gentle animated gradient positions to create depth (CSS-only)
  const bgStyle = useMemo(
    () => ({
      backgroundImage:
        'radial-gradient(1200px 600px at 20% 10%, rgba(28,167,166,0.20), transparent 60%),' +
        'radial-gradient(900px 500px at 80% 20%, rgba(11,37,69,0.18), transparent 60%),' +
        'linear-gradient(180deg, #F5F9FF 0%, #FFFFFF 35%, #E8F6F6 100%)',
    }),
    []
  )

  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: '75vh' }}
      id="home"
    >
      <div className="absolute inset-0" style={bgStyle} />

      {/* Scenic composition */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Ocean */}
        <div className="absolute bottom-0 inset-x-0 h-40 md:h-56 bg-gradient-to-t from-[#9ee3e2] via-[#bceced]/70 to-transparent" />
        {/* Mountains silhouette */}
        <svg className="absolute bottom-28 md:bottom-36 left-0 right-0 w-[140%] -ml-[20%] text-[#0B2545]/10" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M0,160L80,149.3C160,139,320,117,480,128C640,139,800,181,960,202.7C1120,224,1280,224,1360,224L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"/>
        </svg>
        {/* Airplane */}
        <div className="absolute -right-8 md:right-20 top-12 md:top-16 rotate-6 text-[#0B2545] opacity-70">
          <Plane size={72} className="drop-shadow" />
        </div>
        {/* Clouds */}
        <div className="absolute top-24 left-10 h-24 w-40 rounded-full bg-white/70 blur-xl" />
        <div className="absolute top-32 left-40 h-16 w-28 rounded-full bg-white/60 blur-xl" />
        <div className="absolute top-12 right-40 h-20 w-32 rounded-full bg-white/70 blur-xl" />
      </div>

      <div className="relative pt-28 md:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 items-center gap-10">
            <div className="py-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-white shadow-sm ring-1 ring-slate-200 px-3 py-1 text-xs font-semibold text-slate-700">
                <span className="inline-block h-2 w-2 rounded-full bg-[#1CA7A6]" />
                Travel & Tour Agency
              </span>
              <h1 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight text-[#0B2545]">
                Temukan Perjalanan Impianmu Bersama Lintas Mega
              </h1>
              <p className="mt-4 text-slate-600 text-base md:text-lg max-w-xl">
                Nikmati liburan tak terlupakan ke destinasi tropis dan kota-kota ikonik dunia. Penawaran eksklusif, layanan profesional, dan pengalaman tak tertandingi.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="#destinations" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1CA7A6] hover:bg-[#169493] text-white px-6 py-3 font-semibold shadow-md hover:shadow-lg transition-all">
                  Jelajahi Sekarang <ChevronRight size={18} />
                </a>
                <a href="#packages" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 px-6 py-3 font-semibold hover:border-[#0B2545] hover:text-[#0B2545] transition-colors">
                  Lihat Paket
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden ring-1 ring-slate-200 shadow-xl bg-white">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop"
                  alt="Tropical beach with mountains"
                  className="h-[320px] w-full object-cover"
                />
                <div className="p-4 bg-gradient-to-r from-[#0B2545]/90 to-[#1CA7A6]/90 text-white">
                  <p className="text-sm">Scenic tropical escape • Beach • Mountains • Blue ocean</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const DESTINATIONS = [
  {
    name: 'Bali',
    country: 'Indonesia',
    price: 'Rp 3.500.000',
    image:
      'https://images.unsplash.com/photo-1543248939-ff40856f65d0?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Lombok',
    country: 'Indonesia',
    price: 'Rp 3.200.000',
    image:
      'https://images.unsplash.com/photo-1543248604-52e5487d6d89?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Singapore',
    country: 'Singapore',
    price: 'Rp 4.800.000',
    image:
      'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Japan',
    country: 'Japan',
    price: 'Rp 12.000.000',
    image:
      'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=1600&auto=format&fit=crop',
  },
]

function DestinationCard({ d }) {
  return (
    <div className="group rounded-2xl overflow-hidden bg-white ring-1 ring-slate-200 shadow-sm hover:shadow-xl transition-all">
      <div className="relative">
        <img src={d.image} alt={d.name} className="h-48 w-full object-cover" />
        <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#0B2545] shadow">
          <MapPin size={14} className="mr-1" /> {d.country}
        </span>
        <span className="absolute bottom-3 right-3 inline-flex items-center rounded-full bg-[#0B2545] text-white px-3 py-1 text-xs font-semibold shadow">
          {d.price}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-[#0B2545]">{d.name}</h3>
        <p className="mt-1 text-sm text-slate-600">Penerbangan + Hotel • 3-5 Malam</p>
        <div className="mt-3 flex items-center justify-between">
          <button className="inline-flex items-center gap-2 text-sm font-semibold text-[#1CA7A6] hover:text-[#169493]">
            Lihat Detail <ChevronRight size={16} />
          </button>
          <button className="inline-flex items-center gap-2 rounded-full bg-[#1CA7A6] hover:bg-[#169493] text-white px-4 py-2 text-sm font-semibold shadow">
            Pesan
          </button>
        </div>
      </div>
    </div>
  )
}

function Destinations() {
  return (
    <section id="destinations" className="relative py-12 md:py-16 bg-[#F5F9FF]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-6 md:mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B2545]">Destinasi Populer</h2>
            <p className="text-slate-600 mt-1">Pilihan favorit untuk liburan terbaikmu</p>
          </div>
          <a href="#packages" className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-[#1CA7A6] hover:text-[#169493]">
            Lihat Semua <ChevronRight size={16} />
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {DESTINATIONS.map((d) => (
            <DestinationCard key={d.name} d={d} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Destinations />
      </main>
      <footer className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-slate-500">
          © {new Date().getFullYear()} Lintas Mega Tour & Travel. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
