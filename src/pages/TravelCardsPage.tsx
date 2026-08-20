import { Link } from "react-router-dom";

export default function TravelCardsPage() {
  return (
    <div className="bg-[#f7f9fb] min-h-screen">
      {/* Hero */}
      <section className="bg-[#131b2e] relative overflow-hidden min-h-[360px] sm:min-h-[440px] flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#131b2e] via-[rgba(19,27,46,0.85)] to-transparent z-10" />
          <img
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1400&q=80"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-20 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-12 w-full">
          <div className="max-w-[600px]">
            <div className="inline-flex items-center gap-2 bg-[#006c49] border border-[#6ffbbe] rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-5 sm:mb-6">
              <span className="text-white text-xs">★</span>
              <span className="font-semibold text-[13px] sm:text-[14px] text-white tracking-[0.7px]">Premium Travel Collection</span>
            </div>
            <h1 className="font-black text-[42px] sm:text-[56px] lg:text-[64px] leading-[1.1] tracking-[-1.5px] text-white mb-4 sm:mb-5">
              Travel the World<br />for Less
            </h1>
            <p className="text-[15px] sm:text-[17px] lg:text-[18px] text-[#e0e3e5] opacity-90 mb-7 sm:mb-8 max-w-[500px]">
              Unlock elite status, complimentary lounge access, and un-capped air miles with India's most prestigious travel credit cards.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                to="/eligibility"
                className="flex items-center justify-center gap-2 bg-[#006c49] hover:bg-[#00583b] text-white font-semibold text-[14px] tracking-[0.7px] px-6 sm:px-8 py-4 rounded-xl transition-colors shadow-[0_10px_15px_rgba(16,185,129,0.2)]"
              >
                Find Your Perfect Card →
              </Link>
              <Link
                to="/comparison"
                className="flex items-center justify-center gap-2 border border-[rgba(198,198,205,0.5)] hover:border-white bg-transparent text-white font-semibold text-[14px] tracking-[0.7px] px-6 sm:px-8 py-4 rounded-xl transition-colors"
              >
                Compare Top Picks
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Top Rated */}
      <section className="py-10 sm:py-14">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="font-bold text-[26px] sm:text-[30px] lg:text-[32px] tracking-[-0.3px] text-[#191c1e] mb-2 sm:mb-3">Top Rated for 2024</h2>
            <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-[#45464d] max-w-[520px] mx-auto">Curated selections based on travel styles, from frequent flyers to luxury hotel enthusiasts.</p>
          </div>

          {/* Top 2 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-5">
            {/* Axis Atlas */}
            <div className="bg-white rounded-2xl border border-[#e5e7eb] p-4 sm:p-5">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="w-full sm:w-36 h-20 bg-gradient-to-br from-[#1a2035] to-[#0d1526] rounded-xl flex-shrink-0 flex flex-col justify-between p-3">
                  <div className="text-gray-400 text-[8px] tracking-widest">AXIS BANK</div>
                  <div className="text-white font-bold text-[11px]">ATLAS</div>
                </div>
                <div className="flex-1">
                  <div className="bg-[#fff9e8] text-[#92400e] text-[9px] font-bold tracking-wider px-2 py-0.5 rounded-sm inline-block mb-2">BEST FOR AIRLINE MILES</div>
                  <h3 className="font-bold text-[16px] sm:text-[18px] text-[#191c1e] mb-1">Axis Atlas Credit Card</h3>
                  <p className="text-[12px] sm:text-[13px] text-[#45464d] mb-3">The ultimate mileage machine with direct transfer partners across major global airlines.</p>
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div><div className="text-[10px] text-[#45464d]">REWARD RATE</div><div className="font-bold text-[14px] sm:text-[15px] text-[#006c49]">Up to 10%</div></div>
                    <div><div className="text-[10px] text-[#45464d]">ANNUAL FEE</div><div className="font-bold text-[14px] sm:text-[15px] text-[#191c1e]">₹5,000</div></div>
                  </div>
                  <div className="flex flex-col gap-1 mb-3">
                    {["5000 EDGE Miles on first transaction", "1:2 transfer ratio to airline partners"].map((h) => (
                      <div key={h} className="flex items-center gap-1.5 text-[12px] text-[#45464d]">
                        <div className="w-1.5 h-1.5 bg-[#006c49] rounded-full flex-shrink-0" />{h}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1.5 text-[12px] text-[#45464d]">
                      <input type="checkbox" className="w-3.5 h-3.5" /> Compare
                    </label>
                    <Link to="/cards/axis-atlas" className="bg-[#191c1e] hover:bg-black text-white font-semibold text-[12px] px-4 py-2 rounded-xl transition-colors">View Details</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* HDFC Regalia */}
            <div className="bg-white rounded-2xl border border-[#e5e7eb] p-4 sm:p-5">
              <div className="inline-block bg-[#e8f4ff] text-[#3b82f6] text-[9px] font-bold tracking-wider px-2 py-0.5 rounded-sm mb-3">LOUNGE ACCESS</div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-14 h-9 bg-gradient-to-br from-[#d4a843] to-[#c8922e] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-[7px] font-bold tracking-wide text-center leading-tight">HDFC<br/>REGALIA</span>
                </div>
                <h3 className="font-bold text-[16px] sm:text-[18px] text-[#191c1e]">HDFC Regalia Gold</h3>
              </div>
              <p className="text-[12px] sm:text-[13px] text-[#45464d] mb-4">Premium lifestyle and travel benefits with extensive lounge access.</p>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-[#f7f9fb] rounded-xl p-3">
                  <div className="text-[10px] text-[#45464d] mb-1">LOUNGE</div>
                  <div className="font-bold text-[14px] sm:text-[16px] text-[#191c1e]">12 Domestic</div>
                </div>
                <div className="bg-[#f7f9fb] rounded-xl p-3">
                  <div className="text-[10px] text-[#45464d] mb-1">FEE</div>
                  <div className="font-bold text-[14px] sm:text-[16px] text-[#191c1e]">₹2,500</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <label className="flex items-center gap-1.5 text-[12px] text-[#45464d]">
                  <input type="checkbox" className="w-3.5 h-3.5" /> Compare
                </label>
                <button className="text-[12px] text-[#45464d] hover:text-black font-semibold">Details →</button>
              </div>
            </div>
          </div>

          {/* Amex Platinum Travel */}
          <div className="bg-white rounded-2xl border border-[#e5e7eb] p-4 sm:p-5 mb-8 sm:mb-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-24 h-16 bg-gradient-to-br from-[#9ca3af] to-[#6b7280] rounded-xl flex flex-col justify-between p-2.5 flex-shrink-0">
                <div className="text-white text-[7px] font-bold tracking-widest">AMEX</div>
                <div className="text-white text-[7px]">PLATINUM TRAVEL</div>
              </div>
              <div className="flex-1">
                <div className="inline-block bg-[#e8f4ff] text-[#3b82f6] text-[9px] font-bold tracking-wider px-2 py-0.5 rounded-sm mb-2">HOTEL LOYALTY</div>
                <h3 className="font-bold text-[16px] sm:text-[18px] text-[#191c1e] mb-1">Amex Platinum Travel</h3>
                <p className="text-[12px] sm:text-[13px] text-[#45464d] mb-3">Maximize milestone rewards with Taj vouchers and Marriott Bonvoy points.</p>
                <div className="flex gap-6">
                  <div><div className="text-[10px] text-[#45464d]">MILESTONE</div><div className="font-bold text-[13px] text-[#191c1e]">₹40k Value</div></div>
                  <div><div className="text-[10px] text-[#45464d]">FEE</div><div className="font-bold text-[13px] text-[#191c1e]">₹3,500</div></div>
                </div>
              </div>
              <button className="text-[12px] text-[#45464d] hover:text-black font-semibold flex-shrink-0 self-end sm:self-auto">Details →</button>
            </div>
          </div>

          {/* Feature tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: "💹", title: "Low Forex Markup", desc: "Save on international spends with rates as low as 0.99%.", bg: "#f0faf5" },
              { icon: "🛋️", title: "Lounge Access", desc: "Complimentary domestic and international airport lounge visits.", bg: "#131b2e" },
              { icon: "🛡️", title: "Travel Insurance", desc: "Comprehensive coverage for delays, cancellations, and medical emergencies.", bg: "#fff4e8" },
            ].map((f) => (
              <div key={f.title} className="bg-white rounded-2xl border border-[#e5e7eb] p-4 sm:p-5 flex sm:flex-col items-center sm:items-center gap-4 sm:gap-3 text-left sm:text-center">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-xl sm:text-2xl flex-shrink-0" style={{ backgroundColor: f.bg }}>
                  {f.icon}
                </div>
                <div>
                  <div className="font-bold text-[13px] sm:text-[14px] tracking-[0.5px] text-[#191c1e] mb-1">{f.title}</div>
                  <div className="text-[12px] text-[#45464d] leading-relaxed">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose + Tips */}
      <section className="bg-white border-t border-[#e5e7eb] py-10 sm:py-14">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
          <h2 className="font-bold text-[20px] sm:text-[24px] text-[#191c1e] mb-3 sm:mb-4">Why Choose a Dedicated Travel Credit Card?</h2>
          <p className="text-[13px] sm:text-[15px] text-[#45464d] leading-relaxed mb-6 sm:mb-8 max-w-[760px]">
            For frequent flyers and international travelers, a standard rewards card often falls short. Travel credit cards are specifically designed to turn your typical expenses into tangible travel benefits — high-yield earning rates, airline mile transfers, hotel perks, and complimentary lounge access.
          </p>
          <h3 className="font-bold text-[17px] sm:text-[20px] text-[#191c1e] mb-3">How to Maximize Your Air Miles</h3>
          <div className="flex flex-col gap-3 sm:gap-4 max-w-[760px]">
            {[
              { title: "Understand Transfer Partners", desc: "Don't just redeem points on the bank's portal. Transferring points to airline frequent flyer programs (like KrisFlyer or Club Vistara) often yields a value of ₹1 or more per point." },
              { title: "Hit Milestone Targets", desc: "Cards like the Axis Atlas structure their best rewards around spend milestones. Align your major purchases to hit these tiers." },
              { title: "Consolidate Spending", desc: "Put all household expenses, utilities, and insurance premiums on your travel card to accelerate point accumulation." },
            ].map((tip) => (
              <div key={tip.title} className="flex gap-3">
                <div className="w-1.5 h-1.5 bg-[#191c1e] rounded-full flex-shrink-0 mt-2" />
                <p className="text-[13px] sm:text-[14px] lg:text-[15px] text-[#45464d] leading-relaxed">
                  <strong className="text-[#191c1e]">{tip.title}:</strong> {tip.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
