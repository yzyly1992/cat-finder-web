import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Shield, Smartphone, Lock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-12 h-12 flex items-center justify-center">
            {/* <Heart className="h-4 w-4 text-white" /> */}
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
                🔒 Your Privacy Matters
              </Badge>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-gray-900">
                Privacy Policy
                <span className="text-pink-600 block text-2xl font-normal mt-2">Simple & Sweet 💕</span>
              </h1>

              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                We believe in keeping things simple - just like finding your kitty should be! Here's everything you need
                to know about your privacy. 🐱
              </p>

              <div className="text-sm text-pink-600 bg-pink-50 rounded-full px-4 py-2 inline-block">
                Last updated: June 2025
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="w-full py-8">
          <div className="container px-4 md:px-6 mx-auto max-w-4xl">
            {/* The Simple Truth */}
            <Card className="mb-8 border-pink-200 bg-gradient-to-r from-pink-50 to-white shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-3xl">✨</div>
                </div>
                <CardTitle className="text-2xl text-pink-800">The Simple Truth</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>We don't collect ANY of your personal data!</strong> 🎉<br />
                  Cat Finder works completely on your device. No sign-ups, no tracking, no worries! Your privacy is as
                  precious to us as your kitty is to you. 💖
                </p>
              </CardContent>
            </Card>

            <div className="grid gap-6 md:gap-8">
              {/* What We Don't Collect */}
              <Card className="border-pink-200 bg-white shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                      <Shield className="h-6 w-6 text-pink-600" />
                    </div>
                    <CardTitle className="text-xl text-pink-800">What We DON'T Collect 🚫</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid gap-2 text-gray-700">
                    <p>
                      ❌ <strong>No personal information</strong> (name, email, phone number)
                    </p>
                    <p>
                      ❌ <strong>No location data</strong> (we don't track where you are)
                    </p>
                    <p>
                      ❌ <strong>No photos or videos</strong> (your cat pics stay private!)
                    </p>
                    <p>
                      ❌ <strong>No usage analytics</strong> (we don't spy on how you use the app)
                    </p>
                    <p>
                      ❌ <strong>No device information</strong> (your phone details are yours)
                    </p>
                    <p>
                      ❌ <strong>No cookies or tracking</strong> (we're not following you around!)
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* How the App Works */}
              <Card className="border-pink-200 bg-white shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                      <Smartphone className="h-6 w-6 text-pink-600" />
                    </div>
                    <CardTitle className="text-xl text-pink-800">How Our App Works 📱</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Cat Finder is super simple! The app just plays special sounds from your phone's speaker. Everything
                    happens right on your device - no internet connection needed, no data sent anywhere! 🎵
                  </p>
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <p className="text-pink-800 font-medium">
                      💡 <strong>Fun Fact:</strong> You could use our app on a deserted island and it would still work
                      perfectly! That's how private it is! 🏝️
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Third Party Services */}
              <Card className="border-pink-200 bg-white shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                      <Lock className="h-6 w-6 text-pink-600" />
                    </div>
                    <CardTitle className="text-xl text-pink-800">Third Party Services 🤝</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    We don't use any third-party services that collect data! No ads, no analytics, no tracking services.
                    The only "third party" involved is your kitty! 🐾
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    The app stores (Apple App Store and Google Play) have their own privacy policies for downloads, but
                    once you have our app, it's just you, your phone, and hopefully your returning cat! 😸
                  </p>
                </CardContent>
              </Card>

              {/* App Permissions */}
              <Card className="border-pink-200 bg-white shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                      <div className="text-2xl">🔊</div>
                    </div>
                    <CardTitle className="text-xl text-pink-800">App Permissions 🔐</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">Cat Finder only needs one permission:</p>
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <p className="text-pink-800">
                      🔊 <strong>Audio/Speaker Access:</strong> So we can play the special cat sounds through your
                      phone's speaker. That's it! No microphone access, no recording - just playing sounds! 🎶
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Changes to Privacy Policy */}
              <Card className="border-pink-200 bg-white shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                      <div className="text-2xl">📝</div>
                    </div>
                    <CardTitle className="text-xl text-pink-800">Policy Updates 📋</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    If we ever need to update this privacy policy (though we can't imagine why, since we don't collect
                    anything!), we'll let you know through the app stores. 📢
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    But honestly, this policy is pretty simple: <strong>We don't collect your data, period!</strong>
                    That's not changing anytime soon! 💪
                  </p>
                </CardContent>
              </Card>

              {/* Contact Us */}
              <Card className="border-pink-200 bg-white shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                      <div className="text-2xl">💌</div>
                    </div>
                    <CardTitle className="text-xl text-pink-800">Questions? We're Here! 🤗</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Have questions about privacy or anything else? We'd love to help! Reach out to us and we'll get back
                    to you faster than a cat running to a treat bag! 🏃‍♀️💨
                  </p>
                  <div className="bg-pink-50 p-4 rounded-lg text-center">
                    <p className="text-pink-800 font-medium">
                      📧 Email us at: <strong>tech@bugtech.com.cn</strong>
                    </p>
                    <p className="text-pink-600 text-sm mt-2">
                      We promise to respond with the same care we put into helping you find your kitty! 💕
                    </p>
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
              <h2 className="text-2xl font-bold text-gray-900">Ready to Find Your Kitty? 🐱</h2>
              <p className="text-lg text-gray-600">
                Now that you know your privacy is 100% protected, let's focus on what really matters - bringing your
                precious cat home! 🏠💕
              </p>
              <Link
                href="/"
                className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-3 rounded-full transition-colors"
              >
                Get the App Now! 📱✨
              </Link>
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
