import { useState } from "react";

const roastData: Record<string, {
  card: string;
  bank: string;
  verdict: string;
  issues: { label: string; desc: string }[];
  badge: string;
  alternative: {
    name: string;
    subtitle: string;
    annualFee: string;
    feeNote: string;
    rewardRate: string;
    rewardNote: string;
    creditScore: string;
    creditLabel: string;
    perks: string[];
    savings: string;
  };
}> = {
  "standard bank platinum rewards": {
    card: "Platinum Rewards",
    bank: "Standard Bank",
    verdict: `"Ah, the 'Platinum Rewards' card. The perfect plastic for those who enjoy the illusion of luxury while earning points that barely cover a cup of chai."`,
    issues: [
      { label: "Lounge Access Illusion", desc: "Gets you into lounges that serve cold samosas and have a 45-minute waiting line." },
      { label: "Diluted Reward Points", desc: "You need to spend roughly the GDP of a small nation to afford a domestic flight ticket." },
      { label: "Hidden Forex Markups", desc: "3.5% markup means your international trip is quietly funding the bank's next yacht." },
      { label: "Annual Fee Trap", desc: "Paying ₹2,999 annually for 'privileges' you can get on lifetime free cards." },
    ],
    badge: "Sub-Optimal ROI Detected",
    alternative: {
      name: "CardMatch Elite Select",
      subtitle: "The definitive card for maximizing travel and dining rewards.",
      annualFee: "₹1,499",
      feeNote: "Waived on ₹3L spend",
      rewardRate: "Upto 5%",
      rewardNote: "on Travel",
      creditScore: "750+",
      creditLabel: "Excellent",
      perks: ["Unlimited Lounge", "Zero Forex Markup"],
      savings: "₹8,500",
    },
  },
  "hdfc millennia": {
    card: "HDFC Millennia",
    bank: "HDFC Bank",
    verdict: `"The Millennia — a decent starter card masquerading as a premium product. 1% cashback on most spends means you're basically donating to HDFC's profits."`,
    issues: [
      { label: "Capped Cashback", desc: "₹1,000 monthly cap means your cashback dreams hit a wall faster than you expect." },
      { label: "Category Restrictions", desc: "The 5% only works on specific platforms. Spent on the wrong app? Enjoy your 1%." },
      { label: "Quarterly Redemption", desc: "Can't use cashback immediately — it's held hostage for 90 days." },
      { label: "No Lounge Access", desc: "Paying ₹1,000/year for a card that won't get you into an airport lounge." },
    ],
    badge: "Upgrade Recommended",
    alternative: {
      name: "Axis ACE Credit Card",
      subtitle: "Flat 2% cashback on all spends, no category restrictions.",
      annualFee: "₹499",
      feeNote: "Waived on ₹2L spend",
      rewardRate: "2%",
      rewardNote: "on everything",
      creditScore: "700+",
      creditLabel: "Good",
      perks: ["Google Pay 5%", "Zero Annual Fee Possible"],
      savings: "₹6,200",
    },
  },
};

const suggestions = ["Standard Bank Platinum Rewards", "HDFC Millennia", "ICICI Amazon Pay"];

export default function CardRoastPage() {
  const [query, setQuery] = useState("");
  const [roast, setRoast] = useState<typeof roastData[string] | null>(null);
  const [loading, setLoading] = useState(false);

  function handleRoast(q: string) {
    const key = q.toLowerCase().trim();
    const found = roastData[key] || roastData["standard bank platinum rewards"];
    setLoading(true);
    setRoast(null);
    setTimeout(() => { setRoast(found); setLoading(false); }, 800);
  }

  return (
    <div className="bg-[#f7f9fb] min-h-screen">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12">
        <div className="text-center mb-7 sm:mb-10">
          <h1 className="font-black text-[36px] sm:text-[48px] text-[#191c1e] mb-3 sm:mb-4 tracking-[-1px]">
            🔥 Card Roast
          </h1>
          <p className="text-[14px] sm:text-[16px] text-[#45464d] max-w-[520px] mx-auto">
            Select your current credit card to get a brutally honest, AI-powered critique. Find out if your "premium" plastic is actually just expensive trash.
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-3">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="absolute left-4 top-1/2 -translate-y-1/2">
            <circle cx="8" cy="8" r="6.5" stroke="#45464d" strokeWidth="1.5"/>
            <path d="M13 13L17 17" stroke="#45464d" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <input
            type="text"
            placeholder="Standard Bank Platinum Rewards"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && query && handleRoast(query)}
            className="w-full pl-12 pr-4 py-3.5 sm:py-4 rounded-2xl border border-[#c6c6cd] bg-white text-[14px] sm:text-[16px] text-[#191c1e] focus:outline-none focus:border-[#191c1e] focus:ring-1 focus:ring-[#191c1e] transition-colors"
          />
        </div>
        <div className="flex gap-2 mb-6 sm:mb-8 flex-wrap">
          {suggestions.map((s) => (
            <button
              key={s}
              onClick={() => { setQuery(s); handleRoast(s); }}
              className="text-[11px] sm:text-[12px] text-[#45464d] border border-[#e5e7eb] bg-white px-3 py-1.5 rounded-full hover:border-[#191c1e] hover:text-[#191c1e] transition-colors"
            >
              {s}
            </button>
          ))}
        </div>

        {loading && (
          <div className="bg-white rounded-2xl border border-[#e5e7eb] p-10 sm:p-12 text-center">
            <div className="text-4xl mb-4 animate-bounce">🔥</div>
            <p className="text-[15px] sm:text-[16px] text-[#45464d]">Roasting your card…</p>
          </div>
        )}

        {roast && !loading && (
          <div className="flex flex-col gap-5 sm:gap-6">
            {/* Roast card */}
            <div className="bg-white rounded-2xl border border-[#e5e7eb] overflow-hidden">
              <div className="flex flex-col sm:flex-row gap-0">
                {/* Left: The Victim */}
                <div className="sm:w-64 bg-[#f7f9fb] border-b sm:border-b-0 sm:border-r border-[#e5e7eb] p-5 sm:p-6 flex flex-col items-center">
                  <div className="text-[10px] font-bold tracking-[2px] text-[#45464d] mb-4 uppercase">The Victim</div>
                  <div className="w-40 h-24 bg-gradient-to-br from-[#374151] to-[#1f2937] rounded-xl mb-3 flex flex-col justify-end p-3 relative overflow-hidden">
                    <div className="text-gray-400 text-[9px] mb-0.5">{roast.bank}</div>
                    <div className="text-white font-bold text-[10px]">•••• •••• •••• 1234</div>
                  </div>
                  <div className="text-[11px] text-[#45464d] mb-0.5">{roast.bank}</div>
                  <div className="font-bold text-[15px] text-[#191c1e] mb-3 text-center">{roast.card}</div>
                  <div className="bg-[#fff4e8] border border-[#fed7aa] rounded-full px-3 py-1.5 flex items-center gap-1.5">
                    <span className="text-[#f97316] text-xs">⚠️</span>
                    <span className="text-[11px] font-semibold text-[#f97316]">{roast.badge}</span>
                  </div>
                </div>

                {/* Right: The Verdict */}
                <div className="flex-1 p-5 sm:p-6 relative overflow-hidden">
                  <div className="absolute top-4 right-4 text-[60px] sm:text-[80px] opacity-5">🔥</div>
                  <h2 className="font-bold text-[20px] sm:text-[24px] text-[#191c1e] mb-3 sm:mb-4">The Verdict</h2>
                  <p className="text-[13px] sm:text-[14px] text-[#45464d] italic mb-5 sm:mb-6 leading-relaxed">{roast.verdict}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {roast.issues.map((issue) => (
                      <div key={issue.label} className="flex items-start gap-2">
                        <span className="text-[#dc2626] text-base flex-shrink-0">✗</span>
                        <div>
                          <div className="font-semibold text-[12px] sm:text-[13px] text-[#191c1e]">{issue.label}</div>
                          <div className="text-[11px] sm:text-[12px] text-[#45464d] mt-0.5">{issue.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Better Alternative */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-6 bg-[#006c49] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M2 7L5.5 10.5L12 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h2 className="font-bold text-[19px] sm:text-[22px] text-[#191c1e]">The Better Alternative</h2>
              </div>

              <div className="bg-white rounded-2xl border border-[#e5e7eb] p-5 sm:p-6">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  {/* Card thumbnail */}
                  <div className="w-full sm:w-44 h-24 sm:h-24 bg-gradient-to-br from-[#1a2035] to-[#0d1526] rounded-xl flex-shrink-0 relative overflow-hidden">
                    <div className="absolute top-2 right-2 bg-[#006c49] text-white text-[8px] font-bold px-2 py-0.5 rounded-sm tracking-wider">ELITE</div>
                    <div className="absolute bottom-3 left-3 text-gray-300 text-[9px] font-bold">•••• 4567</div>
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-[17px] sm:text-[20px] text-[#191c1e] mb-1">{roast.alternative.name}</div>
                    <div className="text-[13px] sm:text-[14px] text-[#45464d] mb-4">{roast.alternative.subtitle}</div>
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4">
                      <div>
                        <div className="text-[10px] text-[#45464d] mb-0.5">Annual Fee</div>
                        <div className="font-bold text-[13px] sm:text-[15px] text-[#191c1e]">{roast.alternative.annualFee}</div>
                        <div className="text-[10px] text-[#006c49]">({roast.alternative.feeNote})</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-[#45464d] mb-0.5">Reward Rate</div>
                        <div className="font-bold text-[13px] sm:text-[15px] text-[#191c1e]">{roast.alternative.rewardRate}</div>
                        <div className="text-[10px] text-[#45464d]">{roast.alternative.rewardNote}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-[#45464d] mb-0.5">Credit Score</div>
                        <div className="font-bold text-[13px] sm:text-[15px] text-[#191c1e]">{roast.alternative.creditScore}</div>
                        <div className="text-[10px] text-[#006c49] font-semibold">{roast.alternative.creditLabel}</div>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      {roast.alternative.perks.map((p) => (
                        <span key={p} className="bg-[#f0faf5] border border-[rgba(108,248,187,0.5)] text-[#006c49] text-[11px] sm:text-[12px] font-semibold px-2.5 py-1 rounded-full">
                          ✓ {p}
                        </span>
                      ))}
                      <button className="ml-auto sm:ml-0 bg-[#006c49] hover:bg-[#00583b] text-white font-semibold text-[12px] sm:text-[13px] px-4 py-2.5 rounded-xl transition-colors whitespace-nowrap">
                        Switch & Save {roast.alternative.savings} →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {!roast && !loading && (
          <div className="bg-white rounded-2xl border border-[#e5e7eb] p-12 sm:p-16 text-center">
            <div className="text-4xl sm:text-5xl mb-4">🔥</div>
            <p className="font-semibold text-[16px] sm:text-[18px] text-[#191c1e] mb-2">Enter your card name to get roasted</p>
            <p className="text-[13px] sm:text-[14px] text-[#45464d]">We'll give you a brutally honest assessment — no sugarcoating.</p>
          </div>
        )}
      </div>
    </div>
  );
}
