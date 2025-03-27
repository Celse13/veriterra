import Image from "next/image"
import Link from "next/link"
import { MapPin, Check, Shield, Clock, DollarSign, Users, Globe, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">VeriTerra</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#solution" className="text-sm font-medium hover:text-primary transition-colors">
              Solution
            </Link>
            <Link href="#team" className="text-sm font-medium hover:text-primary transition-colors">
              Team
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Secure land ownership in just three days
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  VeriTerra makes land transactions in Rwanda affordable, legal, and transparent.
                </p>
              </div>
              <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/land.jpg?height=500&width=800"
                  alt="VeriTerra Land Marketplace"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section - Redesigned */}
        <section id="about" className="py-16 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Choose VeriTerra?</h2>
              <p className="mt-4 text-muted-foreground md:text-lg max-w-[800px] mx-auto">
                We're solving the biggest challenges in Rwanda's land market
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card className="bg-primary/5 border-primary/20 overflow-hidden transition-all hover:shadow-md">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Fast Process</h3>
                  <p className="text-muted-foreground">Complete your land purchase in just three days, not months.</p>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20 overflow-hidden transition-all hover:shadow-md">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Zero Fraud</h3>
                  <p className="text-muted-foreground">All listings are legally verified to eliminate fraud risks.</p>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20 overflow-hidden transition-all hover:shadow-md">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <DollarSign className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Affordable</h3>
                  <p className="text-muted-foreground">
                    Transparent pricing with no hidden costs for all income groups.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-16 bg-muted rounded-lg p-8">
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">The Problem We're Solving</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-destructive/10 flex items-center justify-center mt-0.5">
                        <span className="text-destructive font-bold text-sm">80%</span>
                      </div>
                      <p>Of land buyers face fraud risks and legal disputes</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-destructive/10 flex items-center justify-center mt-0.5">
                        <span className="text-destructive font-bold text-sm">2+</span>
                      </div>
                      <p>Months is the average transaction time</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-destructive/10 flex items-center justify-center mt-0.5">
                        <span className="text-destructive font-bold text-sm">↑</span>
                      </div>
                      <p>High hidden costs in traditional processes</p>
                    </li>
                  </ul>
                </div>
                <div className="relative h-[250px] rounded-lg overflow-hidden">
                  <Image
                    src="/land_surveyor.jpeg?height=250&width=400"
                    alt="Land transaction challenges"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section id="solution" className="py-16 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Solution</h2>
              <p className="text-muted-foreground md:text-lg max-w-[800px] mx-auto">
                A digital marketplace that transforms how land is bought and sold in Rwanda
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card className="relative overflow-hidden group h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <CardContent className="p-6 space-y-4 h-full flex flex-col">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Digital Marketplace</h3>
                  <div className="mt-auto">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Search and purchase land online</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Automated legal verification</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden group h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <CardContent className="p-6 space-y-4 h-full flex flex-col">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Trusted Partnerships</h3>
                  <div className="mt-auto">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Collaboration with legal experts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Community leaders for local knowledge</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden group h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <CardContent className="p-6 space-y-4 h-full flex flex-col">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Support 24/7</h3>
                  <div className="mt-auto">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Free legal consultation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Dedicated customer support</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-16 bg-background rounded-lg p-8">
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="/target_icon.jpg?height=300&width=500"
                    alt="VeriTerra Platform"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-muted-foreground mb-6">
                    Rwanda's urban expansion demands an efficient land solution. We're building a tech-driven platform
                    to make land ownership accessible, transparent, and secure for everyone.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="h-5 w-5 text-primary" />
                      </div>
                      <p>Streamlined processes that save time and money</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="h-5 w-5 text-primary" />
                      </div>
                      <p>Legal verification to eliminate fraud</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="h-5 w-5 text-primary" />
                      </div>
                      <p>Transparent pricing with no hidden costs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="py-16 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Meet Our Team</h2>
              <p className="text-muted-foreground md:text-lg max-w-[800px] mx-auto">
                Passionate experts committed to transforming land transactions in Rwanda
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card className="overflow-hidden group hover:shadow-md transition-all">
                <CardContent className="p-0">
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src="/member_2.jpeg?height=300&width=300"
                      alt="Mugabo Pascal"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">Mugabo Pascal</h3>
                    <p className="text-muted-foreground mt-1">Co-founder and CEO</p>
                    <p className="mt-4 text-sm">
                      Building partnerships with land owners and local leaders to ensure trust and transparency.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden group hover:shadow-md transition-all">
                <CardContent className="p-0">
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src="/member_1.jpeg?height=300&width=300"
                      alt="Jeremie Niryosezerano"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">Jeremie Niryosezerano</h3>
                    <p className="text-muted-foreground mt-1">Co-founder and Operations Manager</p>
                    <p className="mt-4 text-sm">
                      Experienced in managing construction projects with a passion for supporting financial freedom.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden group hover:shadow-md transition-all">
                <CardContent className="p-0">
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src="/member_3.jpeg?height=300&width=300"
                      alt="Beliane Munezero"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">Beliane Munezero</h3>
                    <p className="text-muted-foreground mt-1">Co-founder and Marketing Manager</p>
                    <p className="mt-4 text-sm">
                      Passionate about empowering families through affordable land investments.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Customer Stories</h2>
              <p className="text-muted-foreground md:text-lg max-w-[800px] mx-auto">
                Hear from people who have successfully purchased land through VeriTerra
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Card className="overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="relative h-24 w-24 rounded-full overflow-hidden shrink-0">
                      <Image src="/customer.png?height=96&width=96" alt="Alice" fill className="object-cover" />
                    </div>
                    <div>
                      <p className="text-xl italic mb-4">
                        "VeriTerra helped me buy my dream plot legally in just three days. The process was transparent
                        and I felt secure throughout."
                      </p>
                      <div>
                        <p className="font-bold">Alice</p>
                        <p className="text-sm text-muted-foreground">First Customer</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">How It Works</h2>
              <p className="text-muted-foreground md:text-lg max-w-[800px] mx-auto">
                Three simple steps to secure your land
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                  1
                </div>
                <Card className="mt-6 h-full">
                  <CardContent className="p-6 pt-12 text-center">
                    <h3 className="text-xl font-bold mb-4">Browse Listings</h3>
                    <p className="text-muted-foreground">
                      Search our verified land listings based on location, size, and price.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                  2
                </div>
                <Card className="mt-6 h-full">
                  <CardContent className="p-6 pt-12 text-center">
                    <h3 className="text-xl font-bold mb-4">Legal Verification</h3>
                    <p className="text-muted-foreground">
                      We handle all legal checks and documentation to ensure a secure purchase.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                  3
                </div>
                <Card className="mt-6 h-full">
                  <CardContent className="p-6 pt-12 text-center">
                    <h3 className="text-xl font-bold mb-4">Secure Ownership</h3>
                    <p className="text-muted-foreground">
                      Complete the transaction and receive your legal ownership documents.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* <div className="mt-12 text-center">
              <Button size="lg" className="group">
                Start Your Land Search
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div> */}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Contact Us</h2>
              <p className="text-muted-foreground md:text-lg max-w-[800px] mx-auto">
                Have questions? We're here to help
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Jeremie Niryosezerano</p>
                        <p className="text-muted-foreground">Co-founder and Operations Manager</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground">jeremieniryosezerano@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-muted-foreground">0786215702</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">Send Us a Message</h3>
                  <form className="space-y-4">
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <input
                          id="name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <textarea
                          id="message"
                          className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Enter your message"
                        />
                      </div>
                    </div>
                    <Button className="w-full">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-background">
        <div className="container px-4 md:px-6 py-8 md:py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <MapPin className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">VeriTerra</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Making land ownership in Rwanda secure, fast, and affordable.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
                <Link href="#solution" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Solution
                </Link>
                <Link href="#team" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Team
                </Link>
                <Link href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Email: jeremieniryosezerano@gmail.com</p>
                <p>Phone: 0786215702</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Legal</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </nav>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} VeriTerra. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

