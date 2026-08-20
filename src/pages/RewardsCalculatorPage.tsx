import { useState } from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  { id: "dining", label: "Dining & Order-in", icon: "🍽️", max: 50000, step: 500 },
  { id: "travel", label: "Travel & Hotels", icon: "✈️", max: 100000, step: 1000 },
  { id: "shopping", label: "Online Shopping", icon: "🛍️", max: 100000, step: 1000 },
  { id: "fuel", label: "Fuel", icon: "⛽", max: 20000, step: 500 },
  { id: "utilities", label: "Utilities & Bills", icon: "⚡", max: 30000, step: 500 },
];

const defaultSpends: Record<string, number> = {
  dining: 15000,
  travel: 20000,
  shopping: 25000,
  fuel: 8000,
  utilities: 10000,
};

function calcCards(spends: Record<string, number>) {
  const hdfc = {
    name: "HDFC Diners Black",
    subtitle: "Reward Points Focus",
    annualValue: Math.round((spends.dining * 0.033 + spends.travel * 0.05 + spends.shopping * 0.02 + spends.fuel * 0.01 + spends.utilities * 0.015) * 12),
    points: `~${Math.round((spends.dining * 10 + spends.travel * 15 + spends.shopping * 6) * 12 / 150).toLocaleString("en-IN")} Points / Year`,
    returnRate: 3.3,
    breakdown: [
      { category: "Travel & Hotels", icon: "✈️", value: Math.round(spends.travel * 0.05 * 12), note: "Highest ROI category" },
      { category: "Online Shopping", icon: "🛍️", value: Math.round(spends.shopping * 0.02 * 12), note: "Accelerated points" },
      { category: "Other Categories", icon: "•••", value: Math.round((spends.dining * 0.033 + spends.fuel * 0.01 + spends.utilities * 0.015) * 12), note: "Base reward rate" },
    ],
  };
  const sbi = {
    name: "SBI Cashback Card",
    subtitle: "Direct Cashback Focus",
    annualValue: Math.round((spends.shopping * 0.05 + spends.dining * 0.02 + spends.travel * 0.01 + spends.fuel * 0.01 + spends.utilities * 0.01) * 12),
    returnRate: 3.0,
  };
  return [hdfc, sbi] as const;
}

export default function RewardsCalculatorPage() {
  const navigate = useNavigate();
  const [spends, setSpends] = useState(defaultSpends);
  const total = Object.values(spends).reduce((a, b) => a + b, 0);
  const [hdfc, sbi] = calcCards(spends);

  return (
    <div className="bg-[#f7f9fb] min-h-screen">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12">
        <h1 className="font-black text-[28px] sm:text-[40px] lg:text-[48px] tracking-[-1px] text-[#191c1e] mb-3">
          Max Your Earnings:<br className="sm:hidden" /> Rewards Calculator
        </h1>
        <p className="text-[14px] sm:text-[16px] text-[#45464d] mb-8 sm:mb-10 max-w-[520px]">
          Adjust your monthly spending to see real-time estimates of points and cashback you could earn.
        </p>

        <div className="flex flex-col lg:flex-row gap-5 sm:gap-6">
          {/* Spend Sliders */}
          <div className="w-full lg:w-80 lg:flex-shrink-0">
            <div className="bg-white rounded-2xl border border-[#e5e7eb] p-5 sm:p-6">
              <div className="font-bold text-[15px] sm:text-[16px] text-[#191c1e] mb-5 sm:mb-6">📊 Monthly Spend Profile</div>
              <div className="flex flex-col gap-5 sm:gap-6">
                {categories.map((cat) => (
                  <div key={cat.id}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm">{cat.icon}</span>
                        <span className="text-[12px] sm:text-[13px] font-medium text-[#45464d]">{cat.label}</span>
                      </div>
                      <span className="text-[12px] sm:text-[13px] font-semibold text-[#191c1e]">₹{spends[cat.id].toLocaleString("en-IN")}</span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={cat.max}
                      step={cat.step}
                      value={spends[cat.id]}
                      onChange={(e) => setSpends((prev) => ({ ...prev, [cat.id]: Number(e.target.value) }))}
                      className="w-full h-1.5 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#191c1e] [&::-webkit-slider-thumb]:cursor-pointer"
                      style={{ background: `linear-gradient(to right, #191c1e ${(spends[cat.id] / cat.max) * 100}%, #e5e7eb ${(spends[cat.id] / cat.max) * 100}%)` }}
                    />
                  </div>
                ))}
              </div>
              <div className="border-t border-[#e5e7eb] mt-5 sm:mt-6 pt-4 flex justify-between items-center">
                <span className="text-[12px] sm:text-[13px] text-[#45464d]">Total Monthly Spend</span>
                <span className="font-black text-[16px] sm:text-[20px] text-[#191c1e]">₹{total.toLocaleString("en-IN")}</span>
              </div>
              <button
                onClick={() => navigate("/eligibility")}
                className="mt-4 sm:mt-5 w-full bg-[#006c49] hover:bg-[#00583b] text-white font-semibold text-[13px] sm:text-[14px] py-3.5 sm:py-4 rounded-xl flex items-center justify-center gap-2 transition-colors"
              >
                Find My Perfect Card →
              </button>
            </div>
          </div>

          {/* Card Results */}
          <div className="flex-1 flex flex-col gap-4 sm:gap-5">
            <div className="flex flex-col sm:flex-row gap-4">
              {/* HDFC Diners Black */}
              <div className="flex-1 bg-gradient-to-br from-[#1a2035] to-[#0d1526] rounded-2xl p-5 sm:p-6 relative overflow-hidden">
                <div className="absolute top-4 right-4 w-7 h-7 border-2 border-[#f59e0b] rounded-full flex items-center justify-center">
                  <span className="text-[#f59e0b] text-xs">★</span>
                </div>
                <div className="text-[10px] text-gray-400 tracking-widest mb-1">REWARD POINTS</div>
                <div className="font-bold text-[17px] sm:text-[20px] text-white mb-1">{hdfc.name}</div>
                <div className="text-[12px] text-gray-400 mb-4">{hdfc.subtitle}</div>
                <div className="text-[11px] text-gray-400 mb-1">Est. Annual Value</div>
                <div className="font-black text-[30px] sm:text-[36px] text-[#f59e0b] mb-1">₹{hdfc.annualValue.toLocaleString("en-IN")}</div>
                <div className="text-[12px] text-gray-300 mb-4">{hdfc.points}</div>
                <div className="bg-white bg-opacity-10 rounded-xl p-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[11px] text-gray-300">Effective Return Rate</span>
                    <span className="font-bold text-[12px] text-[#f59e0b]">{hdfc.returnRate}%</span>
                  </div>
                  <div className="h-1.5 bg-white bg-opacity-20 rounded-full">
                    <div className="h-full bg-[#f59e0b] rounded-full" style={{ width: `${Math.min(hdfc.returnRate * 20, 100)}%` }} />
                  </div>
                </div>
              </div>

              {/* SBI Cashback */}
              <div className="flex-1 bg-white rounded-2xl border border-[#e5e7eb] p-5 sm:p-6 relative">
                <div className="absolute top-4 right-4">
                  <span className="bg-[#f0faf5] text-[#006c49] text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full">CASHBACK</span>
                </div>
                <div className="font-bold text-[17px] sm:text-[20px] text-[#191c1e] mb-1">{sbi.name}</div>
                <div className="text-[12px] text-[#45464d] mb-4">{sbi.subtitle}</div>
                <div className="text-[11px] text-[#45464d] mb-1">Est. Annual Value</div>
                <div className="font-black text-[30px] sm:text-[36px] text-[#006c49] mb-1">₹{sbi.annualValue.toLocaleString("en-IN")}</div>
                <div className="text-[12px] text-[#45464d] mb-4">Credited to statement</div>
                <div className="bg-[#f7f9fb] rounded-xl p-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[11px] text-[#45464d]">Effective Return Rate</span>
                    <span className="font-bold text-[12px] text-[#006c49]">{sbi.returnRate}%</span>
                  </div>
                  <div className="h-1.5 bg-[#e5e7eb] rounded-full">
                    <div className="h-full bg-[#006c49] rounded-full" style={{ width: `${Math.min(sbi.returnRate * 20, 100)}%` }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Value Breakdown */}
            <div className="bg-white rounded-2xl border border-[#e5e7eb] p-5 sm:p-6">
              <div className="font-bold text-[16px] sm:text-[18px] text-[#191c1e] mb-4 sm:mb-5 flex items-center gap-2">
                <span>⭐</span> Value Breakdown (Annual)
              </div>
              <div className="flex flex-col gap-3 sm:gap-4">
                {hdfc.breakdown.map((b) => (
                  <div key={b.category} className="flex items-center gap-3 sm:gap-4 border-b border-[#f0f2f4] pb-3 sm:pb-4 last:border-0 last:pb-0">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#f7f9fb] rounded-xl flex items-center justify-center text-base sm:text-lg flex-shrink-0">{b.icon}</div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-[13px] sm:text-[14px] text-[#191c1e]">{b.category}</div>
                      <div className="text-[11px] sm:text-[12px] text-[#45464d]">{b.note}</div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="font-bold text-[14px] sm:text-[16px] text-[#191c1e]">₹{b.value.toLocaleString("en-IN")}</div>
                      <div className="text-[11px] text-[#45464d]">Value</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
