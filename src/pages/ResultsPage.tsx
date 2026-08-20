import { useState } from "react";
import { Link } from "react-router-dom";
import { cards } from "../data/cards";

const bankFilters = [
  { id: "hdfc", label: "HDFC Bank" },
  { id: "sbi", label: "SBI Card" },
  { id: "axis", label: "Axis Bank" },
  { id: "amex", label: "American Express" },
];
const categoryFilters = [
  { id: "shopping", label: "Shopping & Dining" },
  { id: "travel", label: "Travel & Lounge" },
  { id: "cashback", label: "Cashback" },
];

export default function ResultsPage() {
  const [banks, setBanks] = useState<string[]>(["hdfc", "sbi", "axis", "amex"]);
  const [filtersOpen, setFiltersOpen] = useState(false);

  function toggleBank(id: string) {
    setBanks((prev) => prev.includes(id) ? prev.filter((b) => b !== id) : [...prev, id]);
  }

  const filtered = cards.filter((c) => banks.includes(c.bankCategory));
  const topCard = filtered[0];
  const otherCards = filtered.slice(1);

  const FiltersContent = () => (
    <div className="bg-white rounded-2xl border border-[#e5e7eb] p-5">
      <h3 className="font-bold text-[16px] text-[#191c1e] mb-4">Filters</h3>
      <div className="mb-5">
        <p className="text-[12px] font-semibold text-[#45464d] tracking-[0.5px] mb-3">Bank</p>
        <div className="flex flex-col gap-2">
          {bankFilters.map((b) => (
            <label key={b.id} className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={banks.includes(b.id)} onChange={() => toggleBank(b.id)} className="w-4 h-4 accent-[#191c1e]" />
              <span className="text-[13px] sm:text-[14px] text-[#191c1e]">{b.label}</span>
            </label>
          ))}
        </div>
      </div>
      <div>
        <p className="text-[12px] font-semibold text-[#45464d] tracking-[0.5px] mb-3">Category</p>
        <div className="flex flex-col gap-2">
          {categoryFilters.map((c) => (
            <label key={c.id} className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" defaultChecked={c.id === "shopping"} className="w-4 h-4 accent-[#191c1e]" />
              <span className="text-[13px] sm:text-[14px] text-[#191c1e]">{c.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-[#f7f9fb] min-h-screen">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-10">
        <div className="mb-6 sm:mb-8">
          <h1 className="font-bold text-[26px] sm:text-[32px] lg:text-[36px] text-[#191c1e] mb-2">Your Best Credit Cards</h1>
          <p className="text-[14px] sm:text-[16px] text-[#45464d]">Based on your profile, we've found these tailored recommendations.</p>
        </div>

        {/* Mobile filter toggle */}
        <button
          className="lg:hidden flex items-center gap-2 border border-[#c6c6cd] bg-white px-4 py-2.5 rounded-xl text-[14px] font-semibold text-[#191c1e] mb-5"
          onClick={() => setFiltersOpen(!filtersOpen)}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 4H14M4 8H12M6 12H10" stroke="#191c1e" strokeWidth="1.6" strokeLinecap="round"/></svg>
          Filters
        </button>
        {filtersOpen && (
          <div className="lg:hidden mb-5">
            <FiltersContent />
          </div>
        )}

        <div className="flex gap-6 lg:gap-8">
          {/* Sidebar filters — desktop only */}
          <div className="hidden lg:block w-52 flex-shrink-0">
            <FiltersContent />
          </div>

          {/* Cards */}
          <div className="flex-1 min-w-0">
            {filtered.length === 0 ? (
              <div className="bg-white rounded-2xl border border-[#e5e7eb] p-10 sm:p-16 text-center">
                <div className="text-4xl sm:text-5xl mb-4">🔍</div>
                <h3 className="font-bold text-[18px] sm:text-[20px] text-[#191c1e] mb-2">No cards match your filters</h3>
                <p className="text-[13px] sm:text-[14px] text-[#45464d] mb-6 max-w-[400px] mx-auto">Try selecting more banks or categories to see more recommendations.</p>
                <button
                  onClick={() => setBanks(["hdfc", "sbi", "axis", "amex"])}
                  className="bg-[#006c49] hover:bg-[#00583b] text-white font-semibold text-[14px] px-6 py-3 rounded-xl transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <>
                {/* Top match */}
                {topCard && (
                  <div className="bg-white rounded-2xl border border-[#e5e7eb] shadow-sm mb-5 sm:mb-6 overflow-hidden relative">
                    {topCard.badge && (
                      <div className={`absolute top-0 right-0 ${topCard.badgeColor} text-white text-[11px] font-bold tracking-[0.5px] px-3 py-1.5 rounded-bl-xl`}>
                        {topCard.badge}
                      </div>
                    )}
                    <div className="p-4 sm:p-6 flex flex-col sm:flex-row gap-4 sm:gap-6">
                      <div className="flex items-start gap-4 flex-1 min-w-0">
                        <div className="w-12 h-12 bg-[#f7f9fb] rounded-xl border border-[#e5e7eb] flex items-center justify-center flex-shrink-0">
                          <svg width="24" height="24" viewBox="0 0 28 28" fill="none"><rect x="1" y="5" width="26" height="18" rx="3" stroke="#45464d" strokeWidth="1.8"/><rect x="1" y="10" width="26" height="3" fill="#45464d" opacity="0.2"/></svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <Link to={`/cards/${topCard.id}`} className="font-bold text-[17px] sm:text-[20px] text-[#191c1e] hover:text-[#006c49] transition-colors block mb-1.5">{topCard.name}</Link>
                          <div className="flex flex-wrap items-center gap-2 mb-3">
                            <span className="bg-[#006c49] text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full">{topCard.match}% Match</span>
                            <span className="text-[13px] text-[#45464d]">{topCard.category}</span>
                          </div>
                          {topCard.why && <p className="text-[13px] sm:text-[14px] text-[#191c1e] font-medium mb-4 hidden sm:block">{topCard.why}</p>}
                          <div className="grid grid-cols-3 gap-2 sm:gap-4">
                            <div>
                              <div className="text-[11px] text-[#45464d] mb-0.5">Annual Benefit</div>
                              <div className="font-bold text-[15px] sm:text-[18px] text-[#006c49]">₹{topCard.annualBenefit.toLocaleString("en-IN")}</div>
                            </div>
                            <div>
                              <div className="text-[11px] text-[#45464d] mb-0.5">Key Rewards</div>
                              <div className="font-semibold text-[12px] sm:text-[14px] text-[#191c1e]">{topCard.keyRewards}</div>
                            </div>
                            <div>
                              <div className="text-[11px] text-[#45464d] mb-0.5">Annual Fee</div>
                              <div className="font-semibold text-[12px] sm:text-[14px] text-[#191c1e]">₹{topCard.annualFee}</div>
                              {topCard.feeNote && <div className="text-[10px] text-[#45464d]">{topCard.feeNote}</div>}
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* CTA */}
                      <div className="flex sm:flex-col gap-3 sm:items-end sm:justify-start sm:flex-shrink-0">
                        <div className={`hidden sm:block w-36 h-20 bg-gradient-to-br ${topCard.gradient} rounded-xl shadow flex flex-col justify-end p-3`}>
                          <div className="text-white text-[8px] opacity-60 mb-0.5">{topCard.bankShort}</div>
                          <div className="text-white text-[10px]">•••• •••• •••• 1234</div>
                        </div>
                        <button className="flex-1 sm:flex-none sm:w-36 bg-[#006c49] hover:bg-[#00583b] text-white font-semibold text-[13px] py-2.5 rounded-xl transition-colors text-center">Apply Now</button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Other matches */}
                {otherCards.length > 0 && (
                  <>
                    <h3 className="font-bold text-[17px] sm:text-[20px] text-[#191c1e] mb-3 sm:mb-4">Other Strong Matches</h3>
                    <div className="flex flex-col gap-3 mb-6 sm:mb-8">
                      {otherCards.map((card) => (
                        <div key={card.id} className="bg-white rounded-2xl border border-[#e5e7eb] p-4 sm:p-5 flex items-center gap-3 sm:gap-4">
                          <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#f7f9fb] rounded-lg border border-[#e5e7eb] flex items-center justify-center flex-shrink-0">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="1" y="4" width="22" height="16" rx="2" stroke="#45464d" strokeWidth="1.8"/></svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <Link to={`/cards/${card.id}`} className="font-semibold text-[14px] sm:text-[15px] text-[#191c1e] hover:text-[#006c49] transition-colors block truncate">{card.name}</Link>
                            <div className="flex items-center gap-2 mt-0.5">
                              <span className="bg-[#f0faf5] text-[#006c49] text-[11px] font-semibold px-2 py-0.5 rounded-full">{card.match}%</span>
                              <span className="text-[12px] text-[#45464d] hidden sm:inline">{card.category}</span>
                            </div>
                          </div>
                          <div className="text-right flex-shrink-0">
                            <div className="text-[11px] text-[#45464d]">Est. Benefit</div>
                            <div className="font-bold text-[13px] sm:text-[14px] text-[#191c1e]">₹{card.annualBenefit.toLocaleString("en-IN")}/yr</div>
                          </div>
                          <Link to={`/cards/${card.id}`} className="hidden sm:block border border-[#c6c6cd] hover:border-[#191c1e] text-[#191c1e] font-semibold text-[12px] px-3 py-2 rounded-lg transition-colors flex-shrink-0">
                            View Details
                          </Link>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* Disclaimer */}
                <div className="flex items-start gap-2 bg-white rounded-xl border border-[#e5e7eb] p-4">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5"><circle cx="8" cy="8" r="7.5" stroke="#45464d"/><rect x="7.5" y="6.5" width="1" height="5" fill="#45464d"/><rect x="7.5" y="4" width="1" height="1.5" fill="#45464d"/></svg>
                  <p className="text-[11px] sm:text-[12px] text-[#45464d] leading-relaxed">
                    Estimated Match Score & Benefits are for informational purposes only. Actual issuance is subject to bank approval.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
