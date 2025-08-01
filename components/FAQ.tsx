import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function FAQ() {
  const faqs = [
    {
      question: "How does Cat Finder help find lost cats?",
      answer: "Cat Finder plays special sounds that cats recognize and love, including familiar food sounds, comfort sounds, and your own voice recordings. These sounds help guide lost cats back to their owners by appealing to their natural instincts and memories."
    },
    {
      question: "What sounds does the Cat Finder app include?",
      answer: "The app includes scientifically-selected cat-approved sounds such as food preparation sounds, comfort purring, and familiar household noises. You can also record your own voice calling your cat's name, which is often the most effective sound."
    },
    {
      question: "Is Cat Finder free to use?",
      answer: "Yes! Cat Finder is completely free to download and use. There are no ads, no subscriptions, and no hidden fees. We believe every cat deserves to come home safely."
    },
    {
      question: "How long should I play the sounds when searching for my cat?",
      answer: "You can loop the sounds for as long as needed. Many successful reunions happen within the first few hours, but some cats may take longer to respond. The app allows continuous playback so you can search effectively."
    },
    {
      question: "Can I track which areas I've already searched?",
      answer: "Yes! Cat Finder includes a search area tracking feature that lets you mark and organize the areas you've covered during your search, helping you plan a more effective rescue mission."
    },
    {
      question: "Does the app work for all types of cats?",
      answer: "Cat Finder is designed to work with most domestic cats. The sounds are based on universal cat behaviors and instincts, though individual cats may respond differently based on their personality and experiences."
    }
  ];

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="w-full py-16" aria-labelledby="faq-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 id="faq-heading" className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions 🤔
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about using Cat Finder to bring your kitty home
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="border-pink-200 bg-white">
              <CardHeader>
                <CardTitle className="text-left text-lg text-pink-800">
                  {faq.question}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-left">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
