import React from 'react';
import { Calendar } from 'lucide-react';

export default function Schedule() {
  const schedule = [
    {
      day: 'Kedd',
      time: '18:00',
      content: 'Tech Review',
      description: 'Új technológiák és eszközök bemutatása'
    },
    {
      day: 'Csütörtök',
      time: '19:00',
      content: 'Vlog',
      description: 'Betekintés a mindennapi életembe'
    },
    {
      day: 'Szombat',
      time: '16:00',
      content: 'Tutorial',
      description: 'Oktatóvideók és tippek'
    }
  ];

  const upcomingVideos = [
    {
      date: '2024. március 19.',
      title: 'Az új Sony kamera tesztje',
      description: 'Részletes bemutató és teszt'
    },
    {
      date: '2024. március 21.',
      title: 'Egy nap a városban',
      description: 'Városi vlog különleges helyszínekkel'
    },
    {
      date: '2024. március 23.',
      title: 'Videószerkesztés kezdőknek',
      description: 'Alapvető szerkesztési technikák bemutatása'
    }
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-center mb-8">Videók Menetrendje</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <section className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center mb-6">
            <Calendar className="h-6 w-6 text-red-600 mr-2" />
            <h2 className="text-2xl font-semibold">Heti Menetrend</h2>
          </div>
          <div className="space-y-6">
            {schedule.map((item, index) => (
              <div key={index} className="border-b pb-4 last:border-0">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-lg">{item.day}</h3>
                  <span className="text-red-600 font-medium">{item.time}</span>
                </div>
                <h4 className="font-medium text-gray-800">{item.content}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-6">Következő Videók</h2>
          <div className="space-y-6">
            {upcomingVideos.map((video, index) => (
              <div key={index} className="border-b pb-4 last:border-0">
                <div className="text-sm text-red-600 mb-1">{video.date}</div>
                <h3 className="font-semibold text-lg mb-1">{video.title}</h3>
                <p className="text-gray-600">{video.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Fontos Információk</h2>
        <div className="prose max-w-none">
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>A videók megjelenési időpontjai változhatnak előre nem látható események miatt</li>
            <li>Az élő közvetítésekről a közösségi médiában adok tájékoztatást</li>
            <li>Különleges események és kollaborációk esetén extra tartalmak is megjelenhetnek</li>
            <li>Az időpontok magyarországi idő szerint értendők</li>
          </ul>
        </div>
      </section>
    </div>
  );
}