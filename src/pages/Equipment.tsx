import React, { useState } from 'react';
import { Laptop, Monitor, Mouse, Headphones, ChevronDown, ChevronUp } from 'lucide-react';

export default function Equipment() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const equipment = {
    computer: [
      { name: 'Gépház', description: 'Zalman S2 (fekete)', category: 'Alap' },
      { name: 'Alaplap', description: 'ASRock B460 Steel Legend', category: 'Alap' },
      { name: 'Processzor', description: 'i5-10600KF', category: 'Teljesítmény' },
      { name: 'Processzor hűtő', description: 'be quiet! Pure Rock 2', category: 'Hűtés' },
      { name: 'Videókártya', description: 'GIGABYTE GeForce GTX 1050 Ti OC 4GB', category: 'Teljesítmény' },
      { name: 'RAM', description: 'Kingston FURY Beast 32GB (4x8GB) DDR4 3200MHz', category: 'Teljesítmény' },
      { name: 'Tápegység', description: 'be quiet! System Power 9 600W Bronze', category: 'Alap' },
      { name: 'SSD', description: 'Kingston KC2500 - 500GB', category: 'Tárhely' },
      { name: 'HDD 1', description: 'Western Digital Re Enterprise 3.5 - 2TB (7200 rpm)', category: 'Tárhely' },
      { name: 'HDD 2', description: 'Western Digital 3.5 - 1TB (5400 rpm)', category: 'Tárhely' }
    ],
    monitors: [
      { name: 'Fő monitor', description: 'Samsung T28C570 (1920x1080 60Hz) (HDMI)' },
      { name: 'Másodlagos monitor', description: 'Samsung S19B300B (1366x768 60Hz) (DVI)' }
    ],
    peripherals: [
      { name: 'Egér', description: 'Varr Gaming VGM-B01' },
      { name: 'Egérpad', description: 'Logilink id0117' },
      { name: 'Billentyűzet', description: 'Genius Scorpion K10' },
      { name: 'Fejhallgató', description: 'HyperX Cloud II' },
      { name: 'Mikrofon', description: 'Sandberg Streamer USB Microphone Kit (126-07)' },
      { name: 'Gamer szék', description: 'Arozzi Inizio (kék)' }
    ]
  };

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const renderComputerSpecs = () => {
    const categories = ['Alap', 'Teljesítmény', 'Hűtés', 'Tárhely'];
    return categories.map(category => {
      const items = equipment.computer.filter(item => item.category === category);
      if (items.length === 0) return null;
      
      return (
        <div key={category} className="mb-6 last:mb-0">
          <h3 className="text-lg font-semibold text-red-500 dark:text-red-400 mb-3">{category}</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">{item.name}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Felszereléseim</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Az összes eszköz, amivel a tartalmaimat készítem. Folyamatosan fejlesztem a setupomat a jobb minőség érdekében.
        </p>
      </div>

      <div className="space-y-6">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
          <button
            onClick={() => toggleSection('computer')}
            className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-red-500 to-red-600 dark:from-red-600 dark:to-red-700 text-white"
          >
            <div className="flex items-center">
              <Laptop className="h-6 w-6 mr-3" />
              <h2 className="text-2xl font-semibold">Számítógép Konfiguráció</h2>
            </div>
            {expandedSection === 'computer' ? (
              <ChevronUp className="h-6 w-6" />
            ) : (
              <ChevronDown className="h-6 w-6" />
            )}
          </button>
          {expandedSection === 'computer' && (
            <div className="p-6">{renderComputerSpecs()}</div>
          )}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
          <button
            onClick={() => toggleSection('monitors')}
            className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-red-500 to-red-600 dark:from-red-600 dark:to-red-700 text-white"
          >
            <div className="flex items-center">
              <Monitor className="h-6 w-6 mr-3" />
              <h2 className="text-2xl font-semibold">Monitorok</h2>
            </div>
            {expandedSection === 'monitors' ? (
              <ChevronUp className="h-6 w-6" />
            ) : (
              <ChevronDown className="h-6 w-6" />
            )}
          </button>
          {expandedSection === 'monitors' && (
            <div className="p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                {equipment.monitors.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">{item.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
          <button
            onClick={() => toggleSection('peripherals')}
            className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-red-500 to-red-600 dark:from-red-600 dark:to-red-700 text-white"
          >
            <div className="flex items-center">
              <Mouse className="h-6 w-6 mr-3" />
              <h2 className="text-2xl font-semibold">Perifériák és Egyebek</h2>
            </div>
            {expandedSection === 'peripherals' ? (
              <ChevronUp className="h-6 w-6" />
            ) : (
              <ChevronDown className="h-6 w-6" />
            )}
          </button>
          {expandedSection === 'peripherals' && (
            <div className="p-6">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {equipment.peripherals.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">{item.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}