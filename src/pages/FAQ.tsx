import React from 'react';

export default function FAQ() {
  const faqs = [
    {
      question: 'Milyen gyakran töltesz fel új videókat?',
      answer: 'Hetente általában 2-3 új videót töltök fel, jellemzően kedden, csütörtökön és szombaton.'
    },
    {
      question: 'Hogyan lehet veled együttműködni?',
      answer: 'Az együttműködési lehetőségekről az Elérhetőség oldalon található e-mail címen keresztül lehet érdeklődni.'
    },
    {
      question: 'Milyen kamerával készíted a videókat?',
      answer: 'Jelenleg egy Sony A7III kamerát használok a fő felvételekhez, részletes felszereléslistát a Felszerelések oldalon találsz.'
    },
    {
      question: 'Lehet-e személyesen találkozni veled?',
      answer: 'Rendszeresen részt veszek YouTube találkozókon és más közösségi eseményeken, ezekről a közösségi médiában szoktam tájékoztatást adni.'
    },
    {
      question: 'Hogyan kezdtél el videókat készíteni?',
      answer: '2018-ban kezdtem el videókat készíteni egy egyszerű telefonnal. A szenvedélyem azóta profi szintre fejlődött.'
    }
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Gyakran Ismételt Kérdések</h1>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{faq.question}</h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}