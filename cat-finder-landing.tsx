import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Volume2, RotateCcw, Smartphone, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import FAQ from "@/components/FAQ"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2" aria-label="Cat Finder - Home">
          <div className="w-12 h-12 flex items-center justify-center">
            <Image
              src="/icon.png"
              alt="Cat Finder App Icon - Find Your Lost Cat"
              width={40}
              height={40}
              priority
            />
          </div>
          <span className="font-bold text-xl text-gray-900">Cat Finder</span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-6" aria-label="Main navigation">
          <Link href="#how-it-works" className="text-gray-600 hover:text-pink-600 transition-colors">
            How It Works
          </Link>
          <Link href="#features" className="text-gray-600 hover:text-pink-600 transition-colors">
            Features
          </Link>
          <Link href="#testimonials" className="text-gray-600 hover:text-pink-600 transition-colors">
            Reviews
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24" aria-labelledby="hero-heading">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <Badge className="bg-pink-100 text-pink-800 hover:bg-pink-200 text-lg px-4 py-2">
                🐱 Find Your Lost Kitty
              </Badge>

              <h1 id="hero-heading" className="text-4xl font-bold tracking-tight sm:text-6xl text-gray-900">
                Bring Your Cat Home with
                <span className="text-pink-600 block">Special Sounds! 🎵</span>
              </h1>

              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Lost your precious kitty? Our app plays special sounds that cats love to help guide them back to you! 💕
              </p>

              <div className="flex items-center justify-center gap-2 text-pink-600" role="img" aria-label="4.9 out of 5 stars rating">
                <div className="flex" aria-hidden="true">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-pink-400 text-pink-400" />
                  ))}
                </div>
                <span className="font-semibold">4.9/5</span>
                <span className="text-gray-500">• 15,000+ happy reunions</span>
              </div>

              {/* App Store Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Link 
                  href="https://apps.apple.com/app/id6747648400" 
                  className="transition-transform hover:scale-105"
                  aria-label="Download Cat Finder on the App Store"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="bg-black text-white rounded-xl px-6 py-3 flex items-center gap-3 min-w-[200px]">
                    <div className="text-2xl" aria-hidden="true">📱</div>
                    <div className="text-left">
                      <div className="text-xs">Download on the</div>
                      <div className="text-lg font-semibold">App Store</div>
                    </div>
                  </div>
                </Link>

                <Link 
                  href="https://play.google.com/store/apps/details?id=com.yzyly.catfinder" 
                  className="transition-transform hover:scale-105"
                  aria-label="Get Cat Finder on Google Play"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="bg-black text-white rounded-xl px-6 py-3 flex items-center gap-3 min-w-[200px]">
                    <div className="text-2xl" aria-hidden="true">🤖</div>
                    <div className="text-left">
                      <div className="text-xs">Get it on</div>
                      <div className="text-lg font-semibold">Google Play</div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="pt-8">
                <Image
                  src="/cute-cat-with-owner.webp"
                  width={300}
                  height={400}
                  alt="Happy cat owner reunited with their cute cat using Cat Finder app"
                  className="mx-auto rounded-3xl shadow-2xl border-4 border-pink-200"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="w-full py-16 bg-pink-50" aria-labelledby="how-it-works-heading">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 id="how-it-works-heading" className="text-3xl font-bold text-gray-900 mb-4">How It Works ✨</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Cats recognize special sounds that make them feel safe and loved. Our app plays these magical sounds to
                help your kitty find their way home! 🏠
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
              <Card className="text-center border-pink-200 bg-white shadow-lg">
                <CardHeader>
                  <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-3xl">🎵</div>
                  </div>
                  <CardTitle className="text-xl text-pink-800">Special Cat Sounds</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Sounds that remind kitties of food, comfort, and home sweet home!</p>
                </CardContent>
              </Card>

              <Card className="text-center border-pink-200 bg-white shadow-lg">
                <CardHeader>
                  <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-3xl">🔄</div>
                  </div>
                  <CardTitle className="text-xl text-pink-800">Keep Playing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Loop the sounds so your cat has lots of chances to hear you calling!</p>
                </CardContent>
              </Card>

              <Card className="text-center border-pink-200 bg-white shadow-lg">
                <CardHeader>
                  <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-3xl">💕</div>
                  </div>
                  <CardTitle className="text-xl text-pink-800">Happy Reunion</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Watch your precious kitty come running back to your loving arms!</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="w-full py-16" aria-labelledby="features-heading">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 id="features-heading" className="text-3xl font-bold text-gray-900 mb-4">What Makes Us Special 🌟</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              <div className="flex gap-4 p-6 bg-pink-50 rounded-2xl">
                <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <Volume2 className="h-6 w-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-pink-800">Cat-Approved Sounds</h3>
                  <p className="text-gray-600">Specially designed sounds that kitties absolutely love! 🐾</p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-pink-50 rounded-2xl">
                <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <Smartphone className="h-6 w-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-pink-800">Super Easy to Use</h3>
                  <p className="text-gray-600">Just tap and play - no complicated stuff when you're worried! 📱</p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-pink-50 rounded-2xl">
                <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="text-2xl">🎙️</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-pink-800">Record Your Own Calls</h3>
                  <p className="text-gray-600">
                    Record your voice calling your cat's name - they know your voice best! 🗣️
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-pink-50 rounded-2xl">
                <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="text-2xl">🗺️</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-pink-800">Search Area Tracker</h3>
                  <p className="text-gray-600">
                    Mark and track the areas you've searched to organize your rescue mission! 📍
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-pink-50 rounded-2xl">
                <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <RotateCcw className="h-6 w-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-pink-800">Loop Forever</h3>
                  <p className="text-gray-600">Keep the sounds playing as long as you need! 🔄</p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-pink-50 rounded-2xl">
                <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="h-6 w-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-pink-800">Made with Love</h3>
                  <p className="text-gray-600">
                    Created by cat lovers who understand how much your kitty means to you! 💖
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Happy Stories */}
        <section id="testimonials" className="w-full py-16 bg-pink-50" aria-labelledby="testimonials-heading">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 id="testimonials-heading" className="text-3xl font-bold text-gray-900 mb-4">Happy Kitty Stories 😻</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              <Card className="border-pink-200 bg-white">
                <CardContent className="p-6">
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-pink-400 text-pink-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "Fluffy came home in just 30 minutes! The sounds really work! 🥰"
                  </p>
                  <p className="font-semibold text-sm text-pink-800">- Emma & Fluffy 🐱</p>
                </CardContent>
              </Card>

              <Card className="border-pink-200 bg-white">
                <CardContent className="p-6">
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-pink-400 text-pink-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "Mittens was hiding for 2 days but came running when she heard the app! 😭💕"
                  </p>
                  <p className="font-semibold text-sm text-pink-800">- Sarah & Mittens 🐾</p>
                </CardContent>
              </Card>

              <Card className="border-pink-200 bg-white">
                <CardContent className="p-6">
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-pink-400 text-pink-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "This app is magic! Luna came back after a whole week missing! ✨"
                  </p>
                  <p className="font-semibold text-sm text-pink-800">- Mike & Luna 🌙</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />

        {/* Final CTA */}
        <section className="w-full py-16 bg-gradient-to-r from-pink-500 to-pink-600">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl font-bold text-white">Don't Wait - Get Your Kitty Home Now! 🏃‍♀️💨</h2>
              <p className="text-xl text-pink-100">
                Every minute counts when your precious cat is missing. Download now and start calling them home! 📞🐱
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Link 
                  href="https://apps.apple.com/app/id6747648400" 
                  className="transition-transform hover:scale-105"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="bg-white text-gray-900 rounded-xl px-6 py-3 flex items-center gap-3 min-w-[200px] shadow-lg">
                    <div className="text-2xl">📱</div>
                    <div className="text-left">
                      <div className="text-xs">Download on the</div>
                      <div className="text-lg font-semibold">App Store</div>
                    </div>
                  </div>
                </Link>

                <Link href="#" className="transition-transform hover:scale-105">
                  <div className="bg-white text-gray-900 rounded-xl px-6 py-3 flex items-center gap-3 min-w-[200px] shadow-lg">
                    <div className="text-2xl">🤖</div>
                    <div className="text-left">
                      <div className="text-xs">Get it on</div>
                      <div className="text-lg font-semibold">Google Play</div>
                    </div>
                  </div>
                </Link>
              </div>

              <p className="text-pink-200 text-sm">💯 Free forever • 🚫 No ads • 💖 Made with love for cat families</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 px-4 md:px-6 border-t bg-white text-center">
        <p className="text-sm text-gray-500">
          © 2025 Cat Finder • Made with 💕 for kitty families everywhere 🐱👨‍👩‍👧‍👦
        </p>
        <Link href="/privacy" className="text-xs hover:underline underline-offset-4 text-gray-500">
          Privacy Policy
        </Link>
        <span className="mx-2 text-gray-400">|</span>       
        <Link href="/support" className="text-xs hover:underline underline-offset-4 text-gray-500">
          Support
        </Link>
      </footer>
    </div>
  )
}
