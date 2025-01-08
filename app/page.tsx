import { ChevronRight, Check } from 'lucide-react'

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

          {/* Challenges vs Solutions Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="section-title text-center">Challenges vs Solutions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-soft-yellow p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-dark-blue mb-4">Challenges</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <ChevronRight className="w-6 h-6 text-primary-blue mr-2 flex-shrink-0" />
                      <span>Manual data entry and updates</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-6 h-6 text-primary-blue mr-2 flex-shrink-0" />
                      <span>Data silos across different platforms</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-6 h-6 text-primary-blue mr-2 flex-shrink-0" />
                      <span>Time-consuming reporting processes</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-light-blue p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-dark-blue mb-4">Solutions</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Check className="w-6 h-6 text-primary-blue mr-2 flex-shrink-0" />
                      <span>Automated data synchronization</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-6 h-6 text-primary-blue mr-2 flex-shrink-0" />
                      <span>Unified data access in Google Sheets</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-6 h-6 text-primary-blue mr-2 flex-shrink-0" />
                      <span>Real-time reporting and analytics</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-neutral-gray">
            <div className="container mx-auto px-4">
              <h2 className="section-title text-center">Features</h2>
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

          {/* How It Works Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="section-title text-center">How It Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-blue rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">1</div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Connect</h3>
                  <p className="text-charcoal-gray">Authorize your data sources</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-blue rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">2</div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Configure</h3>
                  <p className="text-charcoal-gray">Set up your data mappings</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-blue rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">3</div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Sync</h3>
                  <p className="text-charcoal-gray">Automate data synchronization</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-blue rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">4</div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Analyze</h3>
                  <p className="text-charcoal-gray">Use data in Google Sheets</p>
                </div>
              </div>
            </div>
          </section>

          {/* ROI Calculator Section */}
          <section className="py-20 bg-gradient-to-r from-primary-blue to-dark-blue">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Calculate Your ROI</h2>
              <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-dark-blue font-medium mb-2">Employees</label>
                    <input type="number" className="w-full p-2 border rounded" placeholder="10" />
                  </div>
                  <div>
                    <label className="block text-dark-blue font-medium mb-2">Hours Saved/Week</label>
                    <input type="number" className="w-full p-2 border rounded" placeholder="5" />
                  </div>
                </div>
                <button className="btn-primary bg-primary-yellow text-dark-blue hover:bg-soft-yellow">
                  Calculate ROI
                </button>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="section-title text-center">Pricing</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="feature-card">
                  <h3 className="text-xl font-bold text-dark-blue mb-4">Starter</h3>
                  <p className="text-4xl font-bold text-primary-blue mb-4">$49<span className="text-lg">/mo</span></p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-primary-blue mr-2 flex-shrink-0" />
                      <span>2 Data Sources</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-primary-blue mr-2 flex-shrink-0" />
                      <span>Daily Sync</span>
                    </li>
                  </ul>
                </div>
                <div className="feature-card border-2 border-primary-blue">
                  <h3 className="text-xl font-bold text-dark-blue mb-4">Professional</h3>
                  <p className="text-4xl font-bold text-primary-blue mb-4">$99<span className="text-lg">/mo</span></p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-primary-blue mr-2 flex-shrink-0" />
                      <span>5 Data Sources</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-primary-blue mr-2 flex-shrink-0" />
                      <span>Hourly Sync</span>
                    </li>
                  </ul>
                </div>
                <div className="feature-card">
                  <h3 className="text-xl font-bold text-dark-blue mb-4">Enterprise</h3>
                  <p className="text-4xl font-bold text-primary-blue mb-4">$199<span className="text-lg">/mo</span></p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-primary-blue mr-2 flex-shrink-0" />
                      <span>Unlimited Sources</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-primary-blue mr-2 flex-shrink-0" />
                      <span>Real-Time Sync</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20 bg-neutral-gray">
            <div className="container mx-auto px-4">
              <h2 className="section-title text-center">Frequently Asked Questions</h2>
              <div className="max-w-2xl mx-auto">
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-lg">
                    <h3 className="font-bold text-dark-blue">What platforms do you support?</h3>
                    <p className="text-charcoal-gray mt-2">We support Tableau, Salesforce, QuickBooks, NetSuite, Shopify, and more.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <h3 className="font-bold text-dark-blue">Is my data secure?</h3>
                    <p className="text-charcoal-gray mt-2">Yes, we use enterprise-grade security with end-to-end encryption.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-primary-blue to-dark-blue">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Data Workflow?</h2>
              <button className="btn-primary bg-primary-yellow text-dark-blue hover:bg-soft-yellow">
                Start Your Free Trial
              </button>
            </div>
          </section>
        </main>
      )
    }
