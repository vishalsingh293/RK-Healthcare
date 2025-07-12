import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-12">
      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-6">About Us</h2>
              <p className="text-gray-700 mb-4">
                RK Healthcare is a team of highly experienced consultant
                anaesthetists dedicated to providing exceptional care. With
                years of experience in both NHS and private healthcare, our team
                brings a wealth of expertise to every case.
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Expert anaesthetic care</li>
                <li>Focus on patient safety</li>
                <li>Comprehensive pain management</li>
                <li>Latest medical technology</li>
              </ul>
            </div>
            <div className="relative">
              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-4">Why Choose Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="medical-badge">24/7 Support</div>
                    <div>
                      <h4 className="font-medium">Round-the-clock care</h4>
                      <p className="text-gray-600">
                        Available whenever you need us
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="medical-badge">Experience</div>
                    <div>
                      <h4 className="font-medium">Expert team</h4>
                      <p className="text-gray-600">
                        Years of experience in anaesthesia
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/cardiac-anes.jpg"
                  alt="Medical professionals in operating room"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="section-title">
              Expert Anaesthetic Care for Your Surgical Journey
            </h1>
            <p className="section-subtitle">
              We provide exceptional anaesthetic services with a focus on
              patient safety and comfort
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#team" className="cta-button px-8 py-3">
                Meet Our Team
              </a>
              <a
                href="/patient-information"
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-200"
              >
                Patient Information
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Added ID for navigation */}
      <section id="team" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gray-200 h-48 rounded-full w-48 mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold">Dr. Rajesh Kumar</h3>
              <p className="text-gray-600">Lead Anaesthetist</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-200 h-48 rounded-full w-48 mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold">Dr. Priya Sharma</h3>
              <p className="text-gray-600">Consultant Anaesthetist</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-200 h-48 rounded-full w-48 mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold">Dr. Amit Patel</h3>
              <p className="text-gray-600">Pain Management Specialist</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Added ID for navigation */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="service-card">
              <div className="medical-icon">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                General Anaesthesia
              </h3>
              <p className="text-gray-600">
                Safe and effective anaesthesia for all types of surgical
                procedures
              </p>
            </div>
            <div className="service-card">
              <div className="medical-icon">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Regional Anaesthesia
              </h3>
              <p className="text-gray-600">
                Targeted pain relief for specific areas of the body
              </p>
            </div>
            <div className="service-card">
              <div className="medical-icon">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Pain Management
              </h3>
              <p className="text-gray-600">
                Comprehensive pain management solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title mb-8">Contact Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="medical-icon">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600">
                  123 Medical Street, City, Postcode
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="medical-icon">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">0123 456 7890</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="medical-icon">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">info@rkhealthcare.com</p>
              </div>
            </div>
            <div className="mt-8">
              <a href="/contact-us" className="cta-button px-8 py-3">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
