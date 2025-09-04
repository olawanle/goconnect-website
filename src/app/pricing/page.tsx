import Link from 'next/link'

export default function Pricing() {
  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your business. All plans include a 14-day free trial.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Starter Plan */}
          <div className="feature-card relative">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold gradient-text">$29</span>
                <span className="text-gray-400">/month</span>
              </div>
              <p className="text-gray-300 mb-8">
                Perfect for small businesses getting started with AI automation
              </p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-300">
                <span className="text-green-400 mr-3">✓</span>
                <span>1 AI Chatbot</span>
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-green-400 mr-3">✓</span>
                <span>1,000 conversations/month</span>
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-green-400 mr-3">✓</span>
                <span>Basic integrations</span>
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-green-400 mr-3">✓</span>
                <span>Email support</span>
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-green-400 mr-3">✓</span>
                <span>Standard templates</span>
              </li>
            </ul>

            <Link href="/contact" className="btn-secondary w-full text-center">
              Start Free Trial
            </Link>
          </div>

          {/* Professional Plan */}
          <div className="feature-card relative border-2 border-blue-500">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold gradient-text">$99</span>
                <span className="text-gray-400">/month</span>
              </div>
              <p className="text-gray-300 mb-8">
                Ideal for growing businesses with advanced automation needs
              </p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-300">
                <span className="text-green-400 mr-3">✓</span>
                <span>5 AI Chatbots</span>
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-green-400 mr-3">✓</span>
                <span>10,000 conversations/month</span>
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-green-400 mr-3">✓</span>
                <span>Advanced integrations</span>
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-green-400 mr-3">✓</span>
                <span>Priority support</span>
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-green-400 mr-3">✓</span>
                <span>Custom templates</span>
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-green-400 mr-3">✓</span>
                <span>Analytics dashboard</span>
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-green-400 mr-3">✓</span>
                <span>API access</span>
              </li>
            </ul>

            <Link href="/contact" className="btn-primary w-full text-center">
              Start Free Trial
            </Link>
          </div>

          {/* Enterprise Plan */}
          <div className="feature-card relative">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold gradient-text">Custom</span>
              </div>
              <p className="text-gray-300 mb-8">
                Tailored solutions for large organizations with complex requirements
              </p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-300">
                <span className="text-green-400 mr-3">✓</span>
                <span>Unlimited AI Chatbots</span>
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-green-400 mr-3">✓</span>
                <span>Unlimited conversations</span>
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-green-400 mr-3">✓</span>
                <span>Custom integrations</span>
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-green-400 mr-3">✓</span>
                <span>24/7 dedicated support</span>
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-green-400 mr-3">✓</span>
                <span>Custom development</span>
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-green-400 mr-3">✓</span>
                <span>Advanced analytics</span>
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-green-400 mr-3">✓</span>
                <span>SLA guarantee</span>
              </li>
            </ul>

            <Link href="/contact" className="btn-secondary w-full text-center">
              Contact Sales
            </Link>
          </div>
        </div>

        {/* Features Comparison */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Feature <span className="gradient-text">Comparison</span>
            </h2>
            <p className="text-gray-300">
              See what&apos;s included in each plan
            </p>
          </div>

          <div className="glass-card p-6 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-4 px-4 text-white font-semibold">Feature</th>
                  <th className="text-center py-4 px-4 text-white font-semibold">Starter</th>
                  <th className="text-center py-4 px-4 text-white font-semibold">Professional</th>
                  <th className="text-center py-4 px-4 text-white font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody className="space-y-4">
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-4 text-gray-300">AI Chatbots</td>
                  <td className="py-4 px-4 text-center text-gray-300">1</td>
                  <td className="py-4 px-4 text-center text-gray-300">5</td>
                  <td className="py-4 px-4 text-center text-gray-300">Unlimited</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-4 text-gray-300">Conversations/Month</td>
                  <td className="py-4 px-4 text-center text-gray-300">1,000</td>
                  <td className="py-4 px-4 text-center text-gray-300">10,000</td>
                  <td className="py-4 px-4 text-center text-gray-300">Unlimited</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-4 text-gray-300">Support</td>
                  <td className="py-4 px-4 text-center text-gray-300">Email</td>
                  <td className="py-4 px-4 text-center text-gray-300">Priority</td>
                  <td className="py-4 px-4 text-center text-gray-300">24/7 Dedicated</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-4 text-gray-300">API Access</td>
                  <td className="py-4 px-4 text-center text-gray-300">✗</td>
                  <td className="py-4 px-4 text-center text-green-400">✓</td>
                  <td className="py-4 px-4 text-center text-green-400">✓</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-4 text-gray-300">Custom Development</td>
                  <td className="py-4 px-4 text-center text-gray-300">✗</td>
                  <td className="py-4 px-4 text-center text-gray-300">✗</td>
                  <td className="py-4 px-4 text-center text-green-400">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Pricing <span className="gradient-text">FAQ</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="feature-card">
              <h3 className="text-lg font-bold text-white mb-3">Can I change plans anytime?</h3>
              <p className="text-gray-300">
                Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.
              </p>
            </div>

            <div className="feature-card">
              <h3 className="text-lg font-bold text-white mb-3">Is there a setup fee?</h3>
              <p className="text-gray-300">
                No setup fees for Starter and Professional plans. Enterprise plans may have custom setup costs.
              </p>
            </div>

            <div className="feature-card">
              <h3 className="text-lg font-bold text-white mb-3">What happens after the free trial?</h3>
              <p className="text-gray-300">
                After 14 days, you&apos;ll be charged for your chosen plan. You can cancel anytime during the trial.
              </p>
            </div>

            <div className="feature-card">
              <h3 className="text-lg font-bold text-white mb-3">Do you offer refunds?</h3>
              <p className="text-gray-300">
                We offer a 30-day money-back guarantee. If you&apos;re not satisfied, we&apos;ll refund your payment.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="glass-card p-8 sm:p-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Start your 14-day free trial today. No credit card required. 
              Experience the power of AI automation for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="btn-primary w-full sm:w-auto">
                Start Free Trial
              </Link>
              <Link href="/contact" className="btn-secondary w-full sm:w-auto">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 