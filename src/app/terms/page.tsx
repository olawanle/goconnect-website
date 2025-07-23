export default function TermsPage() {
  return (
    <section className="max-w-3xl mx-auto p-8 text-center">
      <h1 className="text-4xl font-bold mb-4 text-green-400">Terms of Service</h1>
      <div className="bg-gray-900 rounded-xl p-6 shadow-lg border border-green-900 text-left mt-8">
        <h2 className="text-lg font-bold text-green-300 mb-2">Summary</h2>
        <p className="text-gray-200 mb-4">By using GoConnect, you agree to use our services lawfully and not misuse our platform. All intellectual property remains with GoConnect unless otherwise agreed. We reserve the right to update terms as needed. For full details, please contact us.</p>
        <a href="mailto:legal@goconnect.com" className="text-green-400 underline font-semibold">Request Full Terms</a>
      </div>
    </section>
  );
} 