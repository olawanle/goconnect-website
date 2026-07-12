import Link from 'next/link'

export default function Services() {
  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI automation solutions designed to transform your business operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="feature-card">
            <div className="text-4xl mb-6">🤖</div>
            <h3 className="text-xl font-bold text-white mb-4">AI Chatbots</h3>
            <p className="text-gray-300 mb-6">
              Intelligent conversational AI that handles customer inquiries 24/7, 
              providing instant responses and personalized experiences.
            </p>
            <ul className="text-gray-400 text-sm space-y-2 mb-6">
              <li>• Natural language processing</li>
              <li>• Multi-language support</li>
              <li>• Integration with existing systems</li>
              <li>• Real-time learning capabilities</li>
            </ul>
            <Link href="/contact" className="btn-primary w-full text-center">
              Learn More
            </Link>
          </div>

          <div className="feature-card">
            <div className="text-4xl mb-6">⚡</div>
            <h3 className="text-xl font-bold text-white mb-4">Process Automation</h3>
            <p className="text-gray-300 mb-6">
              Streamline your workflows with intelligent automation that reduces 
              manual tasks and increases operational efficiency.
            </p>
            <ul className="text-gray-400 text-sm space-y-2 mb-6">
              <li>• Workflow optimization</li>
              <li>• Task automation</li>
              <li>• Data processing</li>
              <li>• Performance analytics</li>
            </ul>
            <Link href="/contact" className="btn-primary w-full text-center">
              Learn More
            </Link>
          </div>

          <div className="feature-card">
            <div className="text-4xl mb-6">📊</div>
            <h3 className="text-xl font-bold text-white mb-4">Data Analytics</h3>
            <p className="text-gray-300 mb-6">
              Transform your data into actionable insights with advanced analytics 
              and machine learning algorithms.
            </p>
            <ul className="text-gray-400 text-sm space-y-2 mb-6">
              <li>• Predictive analytics</li>
              <li>• Real-time dashboards</li>
              <li>• Custom reporting</li>
              <li>• Business intelligence</li>
            </ul>
            <Link href="/contact" className="btn-primary w-full text-center">
              Learn More
            </Link>
          </div>

          <div className="feature-card">
            <div className="text-4xl mb-6">🔒</div>
            <h3 className="text-xl font-bold text-white mb-4">Security Solutions</h3>
            <p className="text-gray-300 mb-6">
              Enterprise-grade security with advanced threat detection and 
              comprehensive data protection measures.
            </p>
            <ul className="text-gray-400 text-sm space-y-2 mb-6">
              <li>• End-to-end encryption</li>
              <li>• Threat monitoring</li>
              <li>• Compliance management</li>
              <li>• Access control</li>
            </ul>
            <Link href="/contact" className="btn-primary w-full text-center">
              Learn More
            </Link>
          </div>

          <div className="feature-card">
            <div className="text-4xl mb-6">🌐</div>
            <h3 className="text-xl font-bold text-white mb-4">API Integration</h3>
            <p className="text-gray-300 mb-6">
              Seamlessly connect your existing systems with our powerful APIs 
              for enhanced functionality and data flow.
            </p>
            <ul className="text-gray-400 text-sm space-y-2 mb-6">
              <li>• RESTful APIs</li>
              <li>• Webhook support</li>
              <li>• Third-party integrations</li>
              <li>• Custom connectors</li>
            </ul>
            <Link href="/contact" className="btn-primary w-full text-center">
              Learn More
            </Link>
          </div>

          <div className="feature-card">
            <div className="text-4xl mb-6">🎯</div>
            <h3 className="text-xl font-bold text-white mb-4">Custom Solutions</h3>
            <p className="text-gray-300 mb-6">
              Tailored AI solutions designed specifically for your business needs 
              and industry requirements.
            </p>
            <ul className="text-gray-400 text-sm space-y-2 mb-6">
              <li>• Custom development</li>
              <li>• Industry-specific solutions</li>
              <li>• Scalable architecture</li>
              <li>• Ongoing support</li>
            </ul>
            <Link href="/contact" className="btn-primary w-full text-center">
              Learn More
            </Link>
          </div>
        </div>

        <div className="text-center">
          <div className="glass-card p-8 sm:p-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our AI automation services can transform your business. 
              Get in touch for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="btn-primary w-full sm:w-auto">
                Free Consultation
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 