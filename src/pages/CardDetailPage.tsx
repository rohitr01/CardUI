import { Link } from "react-router-dom";

export default function CardDetailPage() {
  return (
    <div className="bg-[#f7f9fb] min-h-screen">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[13px] text-[#45464d] mb-6 sm:mb-8 flex-wrap">
          <Link to="/" className="hover:text-black">Home</Link>
          <span>›</span>
          <Link to="/credit-cards" className="hover:text-black">Browse Cards</Link>
          <span>›</span>
          <span className="text-[#191c1e]">Swiggy HDFC Bank Credit Card</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Card Image */}
            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1e] rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8 flex items-center justify-center min-h-[180px] sm:min-h-[220px] relative">
              <div className="absolute top-4 right-4 w-8 h-8 bg-white bg-opacity-10 rounded-full flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6.5" stroke="white" strokeWidth="1"/></svg>
              </div>
              <div className="text-center">
                <div className="text-white text-[10px] tracking-widest opacity-60 mb-2">HDFC BANK</div>
                <div className="text-white font-bold text-[15px] sm:text-[18px] mb-4">SWIGGY HDFC BANK</div>
                <div className="flex justify-center gap-2 mb-5">
                  {[...Array(4)].map((_, g) => (
                    <div key={g} className="flex gap-1">
                      {[...Array(4)].map((__, i) => (
                        <div key={i} className="w-1.5 h-1.5 bg-white opacity-60 rounded-full" />
                      ))}
                    </div>
                  ))}
                </div>
                <div className="text-white text-[12px] sm:text-[13px] font-semibold tracking-widest">•••• •••• •••• 1234</div>
              </div>
            </div>

            {/* Bank + Title */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-7 h-7 bg-[#f0faf5] rounded-full flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" fill="#006c49"/></svg>
              </div>
              <span className="font-semibold text-[13px] text-[#45464d]">HDFC Bank</span>
            </div>
            <h1 className="font-bold text-[24px] sm:text-[28px] lg:text-[32px] text-[#191c1e] mb-4 tracking-[-0.5px]">Swiggy HDFC Bank Credit Card</h1>

            {/* Rating + Match */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
              <div className="flex items-center gap-1">
                <span className="text-[#f59e0b] text-lg">★</span>
                <span className="font-bold text-[15px] text-[#191c1e]">4.5</span>
                <span className="text-[13px] text-[#45464d]">/5</span>
              </div>
              <div className="flex items-center gap-2 bg-[#f0faf5] border border-[rgba(108,248,187,0.5)] rounded-full px-3 py-1.5">
                <div className="w-2.5 h-2.5 bg-[#006c49] rounded-full" />
                <span className="text-[12px] sm:text-[13px] font-semibold text-[#006c49]">92% Match for you</span>
              </div>
            </div>

            {/* Fee Summary */}
            <div className="bg-white rounded-2xl border border-[#e5e7eb] p-4 sm:p-5 mb-5 sm:mb-6 grid grid-cols-3 gap-3 sm:gap-4">
              <div>
                <div className="text-[11px] text-[#45464d] mb-1">Joining Fee</div>
                <div className="font-bold text-[16px] sm:text-[20px] text-[#191c1e]">₹500</div>
              </div>
              <div>
                <div className="text-[11px] text-[#45464d] mb-1">Annual Fee</div>
                <div className="font-bold text-[16px] sm:text-[20px] text-[#191c1e]">₹500</div>
                <div className="text-[11px] text-[#006c49]">Waived on ₹2L</div>
              </div>
              <div>
                <div className="text-[11px] text-[#45464d] mb-1">Best For</div>
                <div className="font-semibold text-[13px] sm:text-[15px] text-[#191c1e]">Dining & Online</div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex gap-3 sm:gap-4 mb-8 sm:mb-10">
              <button className="flex-1 bg-[#006c49] hover:bg-[#00583b] text-white font-semibold text-[14px] sm:text-[15px] py-3.5 sm:py-4 rounded-xl transition-colors flex items-center justify-center gap-2">
                Apply Now →
              </button>
              <button className="flex-1 border border-[#c6c6cd] hover:border-[#191c1e] bg-white text-[#191c1e] font-semibold text-[14px] sm:text-[15px] py-3.5 sm:py-4 rounded-xl transition-colors flex items-center justify-center gap-2">
                Compare
              </button>
            </div>

            {/* Key Benefits */}
            <h2 className="font-bold text-[19px] sm:text-[22px] text-[#191c1e] mb-4">Key Benefits</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-7 sm:mb-8">
              {[
                { pct: "10%", label: "Cashback", detail: "On Swiggy app (Food delivery, Instamart, Dineout)", icon: "🍔" },
                { pct: "5%", label: "Cashback", detail: "Across 1000+ top online platforms", icon: "🛍️" },
                { pct: "1%", label: "Cashback", detail: "Unlimited on all other spends", icon: "₹" },
              ].map((b) => (
                <div key={b.pct + b.detail} className="bg-white rounded-2xl border border-[#e5e7eb] p-4 sm:p-5">
                  <div className="text-xl sm:text-2xl mb-2 sm:mb-3">{b.icon}</div>
                  <div className="font-bold text-[16px] sm:text-[18px] text-[#191c1e] mb-1">{b.pct} {b.label}</div>
                  <div className="text-[12px] sm:text-[13px] text-[#45464d]">{b.detail}</div>
                </div>
              ))}
            </div>

            {/* Reward Details */}
            <h2 className="font-bold text-[19px] sm:text-[22px] text-[#191c1e] mb-4">Reward Details</h2>
            <div className="bg-white rounded-2xl border border-[#e5e7eb] p-5 sm:p-6 mb-7 sm:mb-8">
              <p className="text-[14px] sm:text-[15px] text-[#191c1e] mb-5">Cashback is earned as Swiggy Money and can be used across the Swiggy ecosystem.</p>
              <div className="flex flex-col gap-4">
                {[
                  { label: "10% Swiggy Spends Cap", detail: "Capped at ₹1,500 per month." },
                  { label: "5% Online Spends Cap", detail: "Capped at ₹1,500 per month." },
                  { label: "Redemption Process", detail: "Automatically credited to Swiggy Money wallet linked to the registered mobile number." },
                ].map((r) => (
                  <div key={r.label} className="flex items-start gap-3">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="flex-shrink-0 mt-0.5"><circle cx="10" cy="10" r="10" fill="#006c49"/><path d="M5 10L8.5 13.5L15 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <div>
                      <div className="font-semibold text-[13px] sm:text-[14px] text-[#191c1e]">{r.label}</div>
                      <div className="text-[12px] sm:text-[13px] text-[#45464d] mt-0.5">{r.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pros & Cons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-7 sm:mb-8">
              <div className="bg-white rounded-2xl border border-[#e5e7eb] p-4 sm:p-5">
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-semibold text-[14px] sm:text-[16px] text-[#006c49]">👍 Pros</span>
                </div>
                {["Excellent return rate on food delivery.", "Broad 5% category covers most online shopping.", "Complimentary Swiggy One membership."].map((p) => (
                  <div key={p} className="flex items-start gap-2 mb-2.5">
                    <span className="text-[#006c49] font-bold flex-shrink-0">+</span>
                    <span className="text-[12px] sm:text-[13px] text-[#45464d]">{p}</span>
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-2xl border border-[#e5e7eb] p-4 sm:p-5">
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-semibold text-[14px] sm:text-[16px] text-[#dc2626]">👎 Cons</span>
                </div>
                {["Rewards locked to Swiggy ecosystem.", "Low caps on accelerated cashback categories.", "No lounge access benefits."].map((c) => (
                  <div key={c} className="flex items-start gap-2 mb-2.5">
                    <span className="text-[#dc2626] font-bold flex-shrink-0">–</span>
                    <span className="text-[12px] sm:text-[13px] text-[#45464d]">{c}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Important Exclusions */}
            <h2 className="font-bold text-[19px] sm:text-[22px] text-[#191c1e] mb-4">Important Exclusions</h2>
            <div className="bg-white rounded-2xl border border-[#e5e7eb] p-5 sm:p-6">
              <p className="text-[13px] sm:text-[14px] text-[#45464d] mb-4">The following transactions do not earn any cashback:</p>
              <div className="flex flex-wrap gap-2">
                {["Fuel Spends", "Wallet Loads", "EMI Transactions", "Rent Payments", "Government Taxes"].map((e) => (
                  <span key={e} className="bg-[#f7f9fb] border border-[#e5e7eb] text-[12px] sm:text-[13px] text-[#45464d] px-3 py-1.5 rounded-full">{e}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar — stacks below on mobile */}
          <div className="w-full lg:w-72 lg:flex-shrink-0 flex flex-col gap-4">
            <div className="bg-[#f7f9fb] rounded-2xl border border-[#e5e7eb] p-4 sm:p-5">
              <h3 className="font-bold text-[15px] text-[#191c1e] mb-4">Fees & Charges</h3>
              <div className="flex flex-col gap-3">
                {[
                  { label: "Joining Fee", value: "₹500 + GST" },
                  { label: "Annual Fee", value: "₹500 + GST" },
                  { label: "Interest Rate", value: "3.6% per month" },
                  { label: "Forex Markup", value: "3.5%" },
                  { label: "Late Payment", value: "Up to ₹1,300" },
                ].map((f) => (
                  <div key={f.label} className="flex justify-between items-center border-b border-[#e5e7eb] pb-2.5 last:border-0 last:pb-0">
                    <span className="text-[12px] sm:text-[13px] text-[#45464d]">{f.label}</span>
                    <span className="font-semibold text-[12px] sm:text-[13px] text-[#191c1e]">{f.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#f7f9fb] rounded-2xl border border-[#e5e7eb] p-4 sm:p-5">
              <h3 className="font-bold text-[15px] text-[#191c1e] mb-4">Eligibility</h3>
              <div className="flex flex-col gap-3">
                {[
                  { icon: "💰", label: "Minimum Income", value: "₹25,000 / month" },
                  { icon: "🎂", label: "Age Requirement", value: "21 – 60 Years" },
                  { icon: "💼", label: "Employment", value: "Salaried / Self-Employed" },
                ].map((e) => (
                  <div key={e.label} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-white border border-[#e5e7eb] rounded-lg flex items-center justify-center text-base flex-shrink-0">{e.icon}</div>
                    <div>
                      <div className="text-[11px] text-[#45464d]">{e.label}</div>
                      <div className="font-semibold text-[13px] sm:text-[14px] text-[#191c1e]">{e.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#e5e7eb] p-4 sm:p-5">
              <h3 className="font-bold text-[14px] sm:text-[15px] text-[#191c1e] mb-1">Ready to apply?</h3>
              <p className="text-[12px] sm:text-[13px] text-[#45464d] mb-4">Check your eligibility without impacting your credit score.</p>
              <Link to="/eligibility" className="block w-full bg-[#006c49] hover:bg-[#00583b] text-white font-semibold text-[14px] text-center py-3 rounded-xl transition-colors">
                Check Eligibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
