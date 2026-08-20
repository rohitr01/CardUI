import { Link } from "react-router-dom";

const compareCards = [
  {
    id: "hdfc-regalia-gold",
    name: "HDFC Regalia Gold",
    category: "Premium Travel",
    badge: null,
    joiningFee: "₹ 2,500",
    annualFee: "₹ 2,500 (Waived on ₹3L spend)",
    rewardRate: "4 Reward Points / ₹150",
    rewardBadge: null,
    lounge: "12 Domestic / 6 Intl per year",
    loungeBadge: { text: "Best for Lounge", color: "bg-[#006c49]" },
    milestone: "₹5,000 vouchers on ₹5L spend",
    milestoneBadge: null,
    forex: "2.0%",
    rewardCaps: "No rewards on EMI/Rent",
    loungeDetail: "Domestic: 3/qtr | Intl: Priority Pass",
    dining: "Swiggy Dineout 20% off",
    renewalWaiver: "Waived on ₹4L annual spend",
    insurance: "Air Accident: ₹1 Crore",
    gradient: "from-[#d4a843] to-[#c8922e]",
  },
  {
    id: "sbi-elite",
    name: "SBI Card ELITE",
    category: "Lifestyle & Rewards",
    badge: { text: "Best Value", color: "bg-[#f59e0b]" },
    joiningFee: "₹ 4,999",
    annualFee: "₹ 4,999",
    rewardRate: "2 Reward Points / ₹100",
    rewardBadge: { text: "5X on Dining/Grocery", color: "bg-[#006c49]" },
    lounge: "8 Domestic / 6 Intl per year",
    loungeBadge: null,
    milestone: "Up to 50,000 Bonus RP (₹12,500 value)",
    milestoneBadge: { text: "Best Milestone", color: "bg-[#006c49]" },
    forex: "1.99%",
    rewardCaps: "₹2,500 monthly cap on accelerated points",
    loungeDetail: "Domestic: 2/qtr | Intl: 6/year",
    dining: "EazyDiner Prime Membership",
    renewalWaiver: "Waived on ₹3L annual spend",
    insurance: "Lost Card Liability: ₹5 Lakh",
    gradient: "from-[#1a1a2e] to-[#0f0f1e]",
  },
  {
    id: "axis-atlas",
    name: "Axis Bank Atlas",
    category: "Frequent Flyer",
    badge: null,
    joiningFee: "₹ 5,000",
    annualFee: "₹ 5,000 (Waived on Gold Tier)",
    rewardRate: "2 EDGE Miles / ₹100",
    rewardBadge: { text: "Best for Miles", color: "bg-[#f59e0b]" },
    lounge: "Tier Based (Up to 18 Dom/12 Intl)",
    loungeBadge: null,
    milestone: "Up to 10,000 EDGE Miles",
    milestoneBadge: null,
    forex: "3.5%",
    rewardCaps: "No cap on EDGE Miles",
    loungeDetail: "Unlimited Domestic | Priority Pass included",
    dining: "Zomato Gold (Select Tiers)",
    renewalWaiver: "Waived on ₹15L annual spend",
    insurance: "Travel Insurance: $1 Million",
    gradient: "from-[#374151] to-[#1f2937]",
  },
];

const rows = [
  { label: "Joining Fee", key: "joiningFee" },
  { label: "Annual Fee", key: "annualFee" },
  { label: "Reward Rate", key: "rewardRate", badgeKey: "rewardBadge" },
  { label: "Airport Lounge (Dom/Intl)", key: "lounge", badgeKey: "loungeBadge" },
  { label: "Milestone Benefits", key: "milestone", badgeKey: "milestoneBadge" },
  { label: "Forex Markup", key: "forex" },
  { label: "Reward Caps", key: "rewardCaps" },
  { label: "Lounge Access Detail", key: "loungeDetail" },
  { label: "Dining Partner Benefits", key: "dining" },
  { label: "Renewal Fee Waiver", key: "renewalWaiver" },
  { label: "Insurance Coverage", key: "insurance" },
];

export default function ComparisonPage() {
  return (
    <div className="bg-[#f7f9fb] min-h-screen">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-10">
        <h1 className="font-bold text-[24px] sm:text-[28px] lg:text-[32px] text-[#191c1e] mb-2">Advanced Card Comparison</h1>
        <p className="text-[13px] sm:text-[15px] lg:text-[16px] text-[#45464d] mb-6 sm:mb-10">
          Analyze premium features, fees, and rewards side-by-side to find the perfect addition to your wallet.
        </p>

        {/* Mobile hint */}
        <p className="sm:hidden text-[12px] text-[#45464d] mb-3 flex items-center gap-1.5">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 0C5.14 0 3.63 1.51 3.63 3.37V7H2.25C1.56 7 1 7.56 1 8.25V12.75C1 13.44 1.56 14 2.25 14H11.75C12.44 14 13 13.44 13 12.75V8.25C13 7.56 12.44 7 11.75 7H10.38V3.37C10.38 1.51 8.86 0 7 0ZM5.38 3.37C5.38 2.49 6.12 1.75 7 1.75C7.88 1.75 8.63 2.49 8.63 3.37V7H5.38V3.37Z" fill="#45464d"/></svg>
          Scroll horizontally to see all cards
        </p>

        {/* Horizontally scrollable on mobile */}
        <div className="overflow-x-auto -mx-4 sm:-mx-6 lg:mx-0 px-4 sm:px-6 lg:px-0">
          <div className="min-w-[640px]">
            <div className="bg-white rounded-2xl border border-[#e5e7eb] overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="w-28 sm:w-36 border-b border-r border-[#e5e7eb] bg-[#f7f9fb] p-3 sm:p-4 text-left">
                      <span className="text-[10px] sm:text-[11px] font-semibold tracking-[1px] text-[#45464d] uppercase">Features</span>
                    </th>
                    {compareCards.map((card) => (
                      <th key={card.name} className="border-b border-r border-[#e5e7eb] p-3 sm:p-4 last:border-r-0 relative">
                        {card.badge && (
                          <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 ${card.badge.color} text-white text-[9px] sm:text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full whitespace-nowrap`}>
                            {card.badge.text}
                          </div>
                        )}
                        <div className={`bg-gradient-to-br ${card.gradient} rounded-xl p-3 mb-3 h-20 sm:h-28 flex flex-col justify-end relative overflow-hidden`}>
                          <div className="text-white text-[7px] opacity-60 tracking-widest mb-0.5">CREDIT CARD</div>
                          <div className="text-white text-[8px] sm:text-[10px] font-bold">•••• •••• •••• 1234</div>
                        </div>
                        <div className="font-bold text-[12px] sm:text-[14px] lg:text-[16px] text-[#191c1e] mb-0.5 text-center">{card.name}</div>
                        <div className="text-[10px] sm:text-[12px] text-[#45464d] mb-2 text-center">{card.category}</div>
                        <Link to={`/cards/${card.id}`} className="w-full block bg-[#191c1e] hover:bg-[#000] text-white font-semibold text-[11px] sm:text-[13px] py-2 rounded-xl transition-colors text-center">Apply Now</Link>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => (
                    <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-[#fafafa]"}>
                      <td className="border-r border-b border-[#e5e7eb] p-2.5 sm:p-4 text-[11px] sm:text-[13px] font-semibold text-[#45464d] align-top">{row.label}</td>
                      {compareCards.map((card) => {
                        const val = (card as Record<string, unknown>)[row.key] as string;
                        const badgeData = row.badgeKey ? (card as Record<string, unknown>)[row.badgeKey] as { text: string; color: string } | null : null;
                        return (
                          <td key={card.name} className="border-r border-b border-[#e5e7eb] p-2.5 sm:p-4 text-[11px] sm:text-[13px] text-[#45464d] text-center align-top last:border-r-0">
                            {badgeData && (
                              <div className={`inline-flex items-center gap-1 ${badgeData.color} text-white text-[9px] font-bold px-2 py-0.5 rounded-full mb-1`}>
                                <svg width="7" height="7" viewBox="0 0 8 8" fill="none"><path d="M1 4L3 6L7 2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
                                {badgeData.text}
                              </div>
                            )}
                            <div className={badgeData ? "mt-0.5" : ""}>{val}</div>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
