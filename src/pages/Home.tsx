import React from 'react';
import { Youtube, Video, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Üdvözöllek az Ákos Channel-en!</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Videós tartalmak készítése és megosztása a szenvedélyem. Itt megtalálod a legfrissebb videóimat és információkat a csatornámról.
        </p>
      </section>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <Youtube className="h-12 w-12 text-red-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Rendszeres Tartalom</h3>
          <p className="text-gray-600">Heti több új videó változatos témákban</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <Video className="h-12 w-12 text-red-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Minőségi Videók</h3>
          <p className="text-gray-600">Professzionális felszereléssel készült tartalmak</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <Users className="h-12 w-12 text-red-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Aktív Közösség</h3>
          <p className="text-gray-600">Csatlakozz több ezer követőnkhöz</p>
        </div>
      </div>

      <section className="bg-white rounded-xl shadow-md overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1200&q=80"
          alt="Videókészítés"
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Legújabb Videóim</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-32 h-20 bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=300&q=80"
                  alt="Videó előnézet"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold">A legújabb videós felszereléseim</h3>
                <p className="text-gray-600">2024. március 15.</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-32 h-20 bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=300&q=80"
                  alt="Videó előnézet"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold">Vlog: Egy nap a stúdióban</h3>
                <p className="text-gray-600">2024. március 12.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}