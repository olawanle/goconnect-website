import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About <span className="gradient-text">GoConnect</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            We&apos;re revolutionizing business automation through cutting-edge AI technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-left">
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              At GoConnect, we believe that every business deserves access to powerful AI automation tools. 
              Our mission is to democratize AI technology and make it accessible to businesses of all sizes.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We&apos;re committed to building intelligent solutions that not only automate tasks but also 
              enhance human capabilities and drive meaningful business growth.
            </p>
          </div>
          
          <div className="glass-card p-8 text-center animate-slide-right">
            <div className="text-6xl mb-6">🎯</div>
            <h3 className="text-2xl font-bold text-white mb-4">Empowering Businesses</h3>
            <p className="text-gray-300">
              Making AI automation accessible to everyone
            </p>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-12">
            Our <span className="gradient-text">Values</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="feature-card">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
              <p className="text-gray-300">
                We constantly push the boundaries of what&apos;s possible with AI technology
              </p>
            </div>
            
            <div className="feature-card">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-white mb-3">Collaboration</h3>
              <p className="text-gray-300">
                We work closely with our clients to create solutions that truly meet their needs
              </p>
            </div>
            
            <div className="feature-card">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-white mb-3">Security</h3>
              <p className="text-gray-300">
                We prioritize the security and privacy of our clients&apos; data above all else
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="glass-card p-8 sm:p-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Join the Future?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Be part of the AI revolution. Let&apos;s build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="btn-primary w-full sm:w-auto">
                Get Started Today
              </Link>
              <Link href="/contact" className="btn-secondary w-full sm:w-auto">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 