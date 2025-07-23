export default function PrivacyPolicyPage() {
  return (
    <section className="max-w-3xl mx-auto p-8 text-center">
      <h1 className="text-4xl font-bold mb-4 text-green-400">Privacy Policy</h1>
      <div className="bg-gray-900 rounded-xl p-6 shadow-lg border border-green-900 text-left mt-8">
        <h2 className="text-lg font-bold text-green-300 mb-2">Your Privacy Matters</h2>
        <p className="text-gray-200 mb-4">We respect your privacy. GoConnect only collects the minimum data needed to provide our services. We never sell your data, and you can request deletion at any time. All data is stored securely and used only for service delivery and improvement.</p>
        <a href="mailto:privacy@goconnect.com" className="text-green-400 underline font-semibold">Request Full Policy</a>
      </div>
    </section>
  );
} 