import Image from 'next/image'

    export default function Home() {
      return (
        <main className="min-h-screen bg-neutral-gray">
          {/* Hero Section */}
          <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-b from-light-blue to-white">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-6xl font-bold text-dark-blue mb-6">
                Connect Your Business Data <br />
                <span className="text-primary-blue">Seamlessly</span>
              </h1>
              <p className="text-xl text-charcoal-gray mb-8 max-w-2xl mx-auto">
                Finyx Connector bridges the gap between your favorite platforms and Google Sheets. 
                Automate data flows from Tableau, Salesforce, QuickBooks, and more.
              </p>
              <div className="space-x-4">
                <button className="btn-primary">Get Started</button>
                <button className="btn-secondary">Learn More</button>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="section-title text-center">Why Choose Finyx Connector?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="feature-card">
                  <h3 className="text-xl font-bold text-dark-blue mb-4">Multi-Platform Integration</h3>
                  <p className="text-charcoal-gray">
                    Connect to Tableau, Salesforce, QuickBooks, NetSuite, Shopify, and more.
                  </p>
                </div>
                <div className="feature-card">
                  <h3 className="text-xl font-bold text-dark-blue mb-4">Real-Time Data Sync</h3>
                  <p className="text-charcoal-gray">
                    Keep your Google Sheets updated with live data from all your sources.
                  </p>
                </div>
                <div className="feature-card">
                  <h3 className="text-xl font-bold text-dark-blue mb-4">Secure & Reliable</h3>
                  <p className="text-charcoal-gray">
                    Enterprise-grade security with end-to-end encryption and OAuth2 authentication.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-primary-blue to-dark-blue">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Data Workflow?
              </h2>
              <button className="btn-primary bg-primary-yellow text-dark-blue hover:bg-soft-yellow">
                Start Your Free Trial
              </button>
            </div>
          </section>
        </main>
      )
    }
