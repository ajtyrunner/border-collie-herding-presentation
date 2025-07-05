'use client'
import { useState } from 'react'
import { ChevronDown, ChevronUp, Dog, Users, Trophy, BookOpen } from 'lucide-react'

export default function Home() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  const commands = [
    { command: 'Come bye', description: 'Jdi vlevo kolem stáda' },
    { command: 'Away to me', description: 'Jdi vpravo kolem stáda' },
    { command: 'Walk on', description: 'Jdi pomalu přímo k ovcím' },
    { command: 'Lie down', description: 'Lehni si a zůstaň' },
    { command: 'Stand', description: 'Stůj a pozoruj' },
    { command: 'Steady', description: 'Zpomal, buď opatrný' },
    { command: 'Look back', description: 'Otočí se a podívej se zpět' },
    { command: 'Konec', description: 'To stačí, přijď zpět' },
  ]

  const principles = [
    {
      title: 'Přirozený instinkt',
      content: 'Border collie má vrozenou schopnost řídit a organizovat stádo. Tento instinkt byl po staletí kultivován a zdokonalován.'
    },
    {
      title: 'Kontrola pohledem',
      content: 'Pes používá intenzivní pohled (tzv. "eye") k ovládání ovcí. Ovce instinktivně reagují na tento dominantní pohled.'
    },
    {
      title: 'Rovnováha a pozice',
      content: 'Pes udržuje rovnováhu se stádem a pastýřem, pohybuje se v půlkruhu a drží optimální vzdálenost.'
    },
    {
      title: 'Spolupráce s pastýřem',
      content: 'Úspěšné pasení vyžaduje dokonalou komunikaci mezi psem a pastýřem pomocí hlasových povelů a píšťalky.'
    }
  ]

  const facts = [
    '🐕 Border collie je považována za nejinteligentnější psí plemeno na světě',
    '🏴󠁧󠁢󠁳󠁣󠁴󠁿 Pochází z pohraničí mezi Anglií a Skotskem (odtud název "border")',
    '🧠 Dokáže se naučit přes 1000 slov a jejich významy',
    '🏃‍♂️ Může běžet rychlostí až 48 km/h',
    '👁️ Hypnotický pohled může udržet až 15 minut bez přerušení',
    '🐑 Jeden zkušený pes dokáže řídit stádo až 500 ovcí',
    '🏆 Světové šampionáty v pasení ovcí se konají každoročně',
    '⏰ Trénink začíná už ve 3-4 měsících věku štěněte'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-blue to-grass-green">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-white max-w-4xl mx-auto px-4">
          <h1 className="text-6xl font-bold mb-6 font-display">
            Border Collie
          </h1>
          <h2 className="text-3xl mb-8 opacity-90">
            Mistr Pasení Ovcí
          </h2>
          <p className="text-xl mb-8 opacity-80">
            Objevte fascinující svět trailových závodů a umění pasení ovcí
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => document.getElementById('principles')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Začít prezentaci
            </button>
          </div>
        </div>

        {/* Animated sheep and dog icons */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center space-x-8 animate-bounce">
            <div className="text-6xl">🐑</div>
            <div className="text-6xl">🐕</div>
            <div className="text-6xl">🐑</div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section id="principles" className="py-20 bg-sheep-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <BookOpen className="w-16 h-16 text-border-brown mx-auto mb-4" />
            <h2 className="section-title text-center">Principy Pasení Ovcí</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Pasení ovcí je umění založené na přirozených instinktech a letech tréninku
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {principles.map((principle, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-semibold text-border-brown mb-3">
                  {principle.title}
                </h3>
                <p className="text-gray-700">{principle.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commands Section */}
      <section className="py-20 bg-gradient-to-r from-grass-green to-green-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Users className="w-16 h-16 text-white mx-auto mb-4" />
            <h2 className="section-title text-center text-white">Povely pro Řízení Psa</h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Standardní povely používané v mezinárodních soutěžích
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-border-brown mb-6">
                  Anglické povely a jejich význam
                </h3>
                <div className="space-y-4">
                  {commands.map((cmd, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-wool-cream rounded-lg">
                      <div className="flex-1">
                        <span className="font-bold text-border-brown text-lg">
                          &quot;{cmd.command}&quot;
                        </span>
                      </div>
                      <div className="flex-2 ml-4">
                        <span className="text-gray-700">{cmd.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facts Section */}
      <section className="py-20 bg-wool-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Trophy className="w-16 h-16 text-border-brown mx-auto mb-4" />
            <h2 className="section-title text-center">Zajímavosti o Border Collie</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fascinující fakta o nejinteligentnějším psím plemeni světa
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {facts.map((fact, index) => (
                <div key={index} className="card hover:shadow-xl transition-shadow">
                  <p className="text-gray-700 text-lg leading-relaxed">{fact}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Competition Section */}
      <section className="py-20 bg-gradient-to-r from-border-brown to-yellow-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Dog className="w-16 h-16 text-white mx-auto mb-4" />
            <h2 className="section-title text-center text-white">Trailové Závody</h2>
            <p className="text-xl text-yellow-100 max-w-2xl mx-auto">
              Soutěže, kde se prokazuje dokonalá souhara mezi psem a pastýřem
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-border-brown mb-4">
                    Průběh závodu
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-grass-green mr-2">1.</span>
                      <span>Outrun - obejití stáda na otevřených pastvinách nebo travnatých polích</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-grass-green mr-2">2.</span>
                      <span>Lift - zvednutí ovcí</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-grass-green mr-2">3.</span>
                      <span>Fetch - přivedení k pastýři</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-grass-green mr-2">4.</span>
                      <span>Drive - hnání ovcí</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-grass-green mr-2">5.</span>
                      <span>Pen - zahánění do ohradky</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-border-brown mb-4">
                    Hodnocení
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <div className="flex justify-between">
                      <span>Outrun</span>
                      <span className="font-semibold">20 bodů</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Lift</span>
                      <span className="font-semibold">10 bodů</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Fetch</span>
                      <span className="font-semibold">20 bodů</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Drive</span>
                      <span className="font-semibold">30 bodů</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Pen</span>
                      <span className="font-semibold">10 bodů</span>
                    </div>
                    <div className="flex justify-between border-t pt-2 font-bold">
                      <span>Celkem</span>
                      <span>90 bodů</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-border-brown text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-8 mb-6">
            <div className="text-4xl animate-pulse">🐑</div>
            <div className="text-4xl animate-pulse">🐕</div>
            <div className="text-4xl animate-pulse">🐑</div>
          </div>
          <h3 className="text-2xl font-semibold mb-4">
            Border Collie - Mistr Pasení Ovcí
          </h3>
          <p className="text-yellow-200 max-w-2xl mx-auto">
            Prezentace o fascinujícím světě trailových závodů a umění pasení ovcí s nejinteligentnějším psím plemenem světa.
          </p>
        </div>
      </footer>
    </div>
  )
} 