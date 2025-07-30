import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, HelpCircle, MessageCircle, BookOpen, Smartphone, Volume2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Support() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-12 h-12 flex items-center justify-center">
            <Image
              src="/icon.png"
              alt="Cat Icon"
              width={40}
              height={40}
            />
          </div>
          <span className="font-bold text-xl text-gray-900">Cat Finder</span>
        </Link>
        <nav className="ml-auto">
          <Link href="/" className="text-sm font-medium hover:text-pink-600 transition-colors">
            ← Back to Home
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-20">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <div className="max-w-4xl mx-auto space-y-6">
              <Badge className="bg-pink-100 text-pink-800 hover:bg-pink-200 text-lg px-4 py-2">
                🤝 We're Here to Help
              </Badge>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-gray-900">
                Support Center
                <span className="text-pink-600 block text-2xl font-normal mt-2">Get Help Finding Your Kitty 🐱</span>
              </h1>

              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Need help using Cat Finder? Have questions about finding your precious kitty? We've got all the answers
                you need right here! 💕
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="w-full py-8">
          <div className="container px-4 md:px-6 mx-auto max-w-4xl">
            {/* Quick Help */}
            <Card className="mb-8 border-pink-200 bg-gradient-to-r from-pink-50 to-white shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-3xl">⚡</div>
                </div>
                <CardTitle className="text-2xl text-pink-800">Quick Start Guide</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>Lost your kitty? Here's how to use Cat Finder:</strong> 🎯
                </p>
                <div className="grid gap-3 text-left max-w-2xl mx-auto">
                  <p className="text-gray-700">
                    1️⃣ <strong>Open and Play</strong> the magic sounds in the app
                  </p>
                  <p className="text-gray-700">
                    2️⃣ <strong>Turn up your phone volume</strong> to maximum
                  </p>
                  <p className="text-gray-700">
                    3️⃣ <strong>Walk around your area</strong> while playing the sounds
                  </p>
                  <p className="text-gray-700">
                    4️⃣ <strong>Listen and look for your kitty's response</strong> and follow the meows! 🔊
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-6 md:gap-8">
              {/* FAQ Section */}
              <Card className="border-pink-200 bg-white shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                      <HelpCircle className="h-6 w-6 text-pink-600" />
                    </div>
                    <CardTitle className="text-xl text-pink-800">Frequently Asked Questions 🤔</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="border-l-4 border-pink-200 pl-4">
                      <h3 className="font-semibold text-gray-900 mb-2">🔊 How loud should I play the sounds?</h3>
                      <p className="text-gray-700">
                        Play the sounds at maximum volume on your phone! Cats have excellent hearing and will respond to
                        familiar sounds from quite a distance. Don't worry about disturbing neighbors - finding your kitty
                        is the priority! 📢
                      </p>
                    </div>

                    <div className="border-l-4 border-pink-200 pl-4">
                      <h3 className="font-semibold text-gray-900 mb-2">🕒 What's the best time to search?</h3>
                      <p className="text-gray-700">
                        Early morning (dawn) and evening (dusk) are the best times! Cats are most active during these
                        hours. It's also quieter, so you can better hear your cat's response. 🌅🌆
                      </p>
                    </div>

                    <div className="border-l-4 border-pink-200 pl-4">
                      <h3 className="font-semibold text-gray-900 mb-2">📍 Where should I search first?</h3>
                      <p className="text-gray-700">
                        Start close to home! Check hiding spots like under porches, in garages, bushes, or tall grass.
                        Cats often hide nearby when scared. Expand your search radius gradually. 🏠
                      </p>
                    </div>

                    <div className="border-l-4 border-pink-200 pl-4">
                      <h3 className="font-semibold text-gray-900 mb-2">⏰ How long should I search?</h3>
                      <p className="text-gray-700">
                        Don't give up! Many cats are found within the first 24-48 hours. Search in short sessions (30-60
                        minutes) to avoid exhaustion, then take breaks and try again. 💪
                      </p>
                    </div>

                    <div className="border-l-4 border-pink-200 pl-4">
                      <h3 className="font-semibold text-gray-900 mb-2">📱 Does the app work offline?</h3>
                      <p className="text-gray-700">
                        Yes! Cat Finder works completely offline. No internet connection needed. This means you can search
                        anywhere without worrying about cell service! 🛜
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Tips for Success */}
              <Card className="border-pink-200 bg-white shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                      <div className="text-2xl">💡</div>
                    </div>
                    <CardTitle className="text-xl text-pink-800">Pro Tips for Finding Your Cat 🎯</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-3">
                    <p className="text-gray-700">
                      🌙 <strong>Search at night:</strong> Use a flashlight and play sounds softly. Cats feel safer moving
                      at night.
                    </p>
                    <p className="text-gray-700">
                      🍽️ <strong>Leave food outside:</strong> Put their favorite food and water near your door, along with
                      something that smells like you.
                    </p>
                    <p className="text-gray-700">
                      👥 <strong>Ask neighbors:</strong> Let neighbors know your cat is missing. Many cats hide in other
                      people's yards or garages.
                    </p>
                    <p className="text-gray-700">
                      📢 <strong>Post on social media:</strong> Share your cat's photo on local Facebook groups and
                      Nextdoor. Community helps!
                    </p>
                    <p className="text-gray-700">
                      🏠 <strong>Leave doors open:</strong> If possible, leave your door or a window slightly open so your
                      cat can come home on their own.
                    </p>
                    <p className="text-gray-700">
                      📷 <strong>Check security cameras:</strong> Ask neighbors to check their doorbell or security cameras
                      for sightings.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Troubleshooting */}
              <Card className="border-pink-200 bg-white shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                      <Smartphone className="h-6 w-6 text-pink-600" />
                    </div>
                    <CardTitle className="text-xl text-pink-800">App Troubleshooting 🔧</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-pink-800 mb-2">🔇 No sound coming out?</h4>
                      <p className="text-gray-700">
                        • Check your phone's volume settings<br />
                        • Make sure silent mode is off<br />
                        • Try restarting the app<br />
                        • Check if other apps can play sound
                      </p>
                    </div>

                    <div className="bg-pink-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-pink-800 mb-2">📱 App won't open or crashes?</h4>
                      <p className="text-gray-700">
                        • Restart your phone<br />
                        • Make sure you have the latest version<br />
                        • Free up some storage space<br />
                        • Try reinstalling the app
                      </p>
                    </div>

                    <div className="bg-pink-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-pink-800 mb-2">🔊 Sounds are too quiet?</h4>
                      <p className="text-gray-700">
                        • Turn your phone volume to maximum<br />
                        • Check if you have any sound limiters enabled<br />
                        • Clean your phone's speaker<br />
                        • Try using external speakers if available
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* When to Get Additional Help */}
              <Card className="border-pink-200 bg-white shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                      <Heart className="h-6 w-6 text-pink-600" />
                    </div>
                    <CardTitle className="text-xl text-pink-800">When to Get Additional Help 🆘</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    While Cat Finder is a great tool, sometimes you need extra help. Consider these options:
                  </p>
                  <div className="grid gap-3">
                    <p className="text-gray-700">
                      🏥 <strong>Local animal shelters:</strong> Call and visit nearby shelters daily
                    </p>
                    <p className="text-gray-700">
                      👮‍♀️ <strong>Animal control:</strong> File a report with your local animal control
                    </p>
                    <p className="text-gray-700">
                      📰 <strong>Lost pet websites:</strong> Post on PawBoost, Finding Rover, and Petfinder
                    </p>
                    <p className="text-gray-700">
                      🏥 <strong>Veterinary clinics:</strong> Leave flyers at local vets - someone might bring your cat in
                    </p>
                    <p className="text-gray-700">
                      🔍 <strong>Professional pet detectives:</strong> If your budget allows, there are specialists who
                      help find lost pets
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Support */}
              <Card className="border-pink-200 bg-white shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                      <MessageCircle className="h-6 w-6 text-pink-600" />
                    </div>
                    <CardTitle className="text-xl text-pink-800">Still Need Help? Contact Us! 📞</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Can't find what you're looking for? Having trouble with the app? We're here to help you and your
                    kitty! Our support team understands how stressful it is when your cat is missing. 💙
                  </p>
                  <div className="bg-pink-50 p-4 rounded-lg text-center">
                    <p className="text-pink-800 font-medium">
                      📧 Email us at: <strong>tech@bugtech.com.cn</strong>
                    </p>
                    <p className="text-pink-600 text-sm mt-2">
                      We typically respond within 24 hours. Include as much detail as possible about your issue! 🚀
                    </p>
                  </div>
                  <div className="text-center text-sm text-gray-500">
                    <p>💕 We're rooting for you and your kitty's safe reunion! 💕</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="w-full py-16 bg-pink-50">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Ready to Bring Your Kitty Home? 🏠</h2>
              <p className="text-lg text-gray-600">
                Armed with these tips and our app, you're ready to find your precious cat. Don't give up - many kitties
                come home within the first few days! 🌟
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-3 rounded-full transition-colors"
                >
                  Download Cat Finder 📱
                </Link>
                <Link
                  href="/privacy"
                  className="inline-block bg-white hover:bg-gray-50 text-pink-600 font-semibold px-8 py-3 rounded-full border-2 border-pink-200 transition-colors"
                >
                  Privacy Policy 🔒
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 px-4 md:px-6 border-t bg-white text-center">
        <p className="text-sm text-gray-500">
          © 2025 Cat Finder • Made with 💕 for kitty families everywhere 🐱👨‍👩‍👧‍👦
        </p>
      </footer>
    </div>
  )
}
