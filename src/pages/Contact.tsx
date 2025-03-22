import React from 'react';
import { Mail, Youtube, Instagram, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-center mb-8">Kapcsolat</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <section className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-6">Közösségi Media</h2>
          <div className="space-y-4">
            <a
              href="#"
              className="flex items-center space-x-3 text-gray-700 hover:text-red-600 transition-colors"
            >
              <Youtube className="h-6 w-6" />
              <span>YouTube: @AkosChannel</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-3 text-gray-700 hover:text-red-600 transition-colors"
            >
              <Instagram className="h-6 w-6" />
              <span>Instagram: @akos.channel</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-3 text-gray-700 hover:text-red-600 transition-colors"
            >
              <Twitter className="h-6 w-6" />
              <span>Twitter: @AkosChannel</span>
            </a>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-6">Üzleti Megkeresések</h2>
          <div className="flex items-center space-x-3 text-gray-700">
            <Mail className="h-6 w-6" />
            <span>business@akoschannel.hu</span>
          </div>
        </section>
      </div>

      <section className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-6">Kapcsolatfelvétel</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Név
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
              Tárgy
            </label>
            <input
              type="text"
              id="subject"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Üzenet
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors"
          >
            Küldés
          </button>
        </form>
      </section>
    </div>
  );
}