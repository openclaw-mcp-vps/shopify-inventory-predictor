export default function Home() {
  const faqs = [
    {
      q: "How does the inventory prediction work?",
      a: "We connect to your Shopify store via API, analyze historical sales velocity, seasonal trends, and lead times to forecast when each SKU will run out of stock."
    },
    {
      q: "How long does setup take?",
      a: "Under 5 minutes. Install the app, authorize your Shopify store, and your first predictions appear within an hour as we process your sales history."
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes. Cancel anytime from your billing dashboard with no questions asked. Your data is exported and deleted within 30 days."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          ML-Powered Forecasting
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Predict Stockouts<br />
          <span className="text-[#58a6ff]">Before They Happen</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-8">
          Connect your Shopify store and let our ML models forecast inventory needs — so you never lose a sale to an empty shelf or tie up cash in dead stock.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Free Trial — $19/mo
        </a>
        <p className="mt-3 text-xs text-[#8b949e]">No credit card required for 14-day trial. Cancel anytime.</p>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
          <div>
            <div className="text-2xl font-bold text-white">94%</div>
            <div className="text-xs text-[#8b949e] mt-1">Forecast accuracy</div>
          </div>
          <div className="border-x border-[#30363d]">
            <div className="text-2xl font-bold text-white">2 min</div>
            <div className="text-xs text-[#8b949e] mt-1">Average setup time</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">$0</div>
            <div className="text-xs text-[#8b949e] mt-1">Lost sales per month avg</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="border border-[#58a6ff]/40 rounded-xl p-8 bg-[#161b22] text-center">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-[#8b949e] text-sm mb-6">/month · billed monthly</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited SKU forecasting",
              "Shopify App Bridge integration",
              "Daily restock alerts via email",
              "30-day sales trend analysis",
              "CSV export of predictions",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started Free
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-lg p-5 bg-[#161b22]">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e] leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Shopify Inventory Predictor. All rights reserved.
      </footer>
    </main>
  );
}
