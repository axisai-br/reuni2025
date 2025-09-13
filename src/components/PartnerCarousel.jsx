import { Building2, Handshake, Award } from 'lucide-react'

const partners = [
  { name: 'Parceiro Alpha', icon: Building2 },
  { name: 'Parceiro Beta', icon: Handshake },
  { name: 'Parceiro Gama', icon: Award },
  { name: 'Parceiro Delta', icon: Building2 },
  { name: 'Parceiro Épsilon', icon: Handshake },
]

export default function PartnerCarousel() {
  const items = [...partners, ...partners]
  return (
    <section className="py-10 bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-700">Parceiros que confiam na IMPAR</h3>
          <span className="text-sm font-semibold text-green-support bg-green-support/10 px-3 py-1 rounded-full">
            3 vendas fechadas
          </span>
        </div>

        <div className="marquee" aria-label="Carrossel de parceiros IMPAR">
          <div className="marquee-track">
            {items.map((p, idx) => {
              const Icon = p.icon
              return (
                <div key={`${p.name}-${idx}`} className="marquee-item">
                  <div className="h-20 sm:h-24 md:h-28 rounded-xl border border-gray-200 bg-white shadow-sm flex items-center justify-center gap-3 px-4 card-hover">
                    <Icon className="h-6 w-6 text-orange-primary" />
                    <span className="text-sm font-medium text-gray-700 break-anywhere">{p.name}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
