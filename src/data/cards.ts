export type Card = {
  id: string;
  name: string;
  bank: string;
  bankShort: string;
  match: number;
  category: string;
  why?: string;
  annualBenefit: number;
  keyRewards: string;
  annualFee: number;
  feeNote?: string;
  badge?: string;
  badgeColor?: string;
  bankCategory: string;
  gradient: string;
  rating: number;
  bestFor: string;
  joiningFee: string;
  interestRate: string;
  forexMarkup: string;
  latePayment: string;
  minIncome: string;
  ageRange: string;
  employment: string;
  keyBenefits: { pct: string; label: string; detail: string; icon: string }[];
  rewardDetails: { label: string; detail: string }[];
  pros: string[];
  cons: string[];
  exclusions: string[];
  fees: { label: string; value: string }[];
  eligibility: { icon: string; label: string; value: string }[];
};

export const cards: Card[] = [
  {
    id: "swiggy-hdfc",
    name: "Swiggy HDFC Bank Credit Card",
    bank: "HDFC Bank",
    bankShort: "HDFC BANK",
    match: 92,
    category: "Co-branded Lifestyle",
    why: "Your profile shows high spending on food delivery and e-commerce. This card maximizes returns in those exact categories.",
    annualBenefit: 12500,
    keyRewards: "10% Swiggy, 5% Online",
    annualFee: 500,
    feeNote: "Waived on ₹2L spend",
    badge: "#1 Best Match",
    badgeColor: "bg-[#f59e0b]",
    bankCategory: "hdfc",
    gradient: "from-[#1a1a2e] to-[#0f0f1e]",
    rating: 4.5,
    bestFor: "Dining & Online",
    joiningFee: "₹500 + GST",
    interestRate: "3.6% per month",
    forexMarkup: "3.5%",
    latePayment: "Up to ₹1,300",
    minIncome: "₹25,000 / month",
    ageRange: "21 – 60 Years",
    employment: "Salaried / Self-Employed",
    keyBenefits: [
      { pct: "10%", label: "Cashback", detail: "On Swiggy app (Food delivery, Instamart, Dineout)", icon: "🍔" },
      { pct: "5%", label: "Cashback", detail: "Across 1000+ top online platforms", icon: "🛍️" },
      { pct: "1%", label: "Cashback", detail: "Unlimited on all other spends", icon: "₹" },
    ],
    rewardDetails: [
      { label: "10% Swiggy Spends Cap", detail: "Capped at ₹1,500 per month." },
      { label: "5% Online Spends Cap", detail: "Capped at ₹1,500 per month." },
      { label: "Redemption Process", detail: "Automatically credited to Swiggy Money wallet linked to the registered mobile number." },
    ],
    pros: ["Excellent return rate on food delivery.", "Broad 5% category covers most online shopping.", "Complimentary Swiggy One membership."],
    cons: ["Rewards locked to Swiggy ecosystem.", "Low caps on accelerated cashback categories.", "No lounge access benefits."],
    exclusions: ["Fuel Spends", "Wallet Loads", "EMI Transactions", "Rent Payments", "Government Taxes"],
    fees: [
      { label: "Joining Fee", value: "₹500 + GST" },
      { label: "Annual Fee", value: "₹500 + GST" },
      { label: "Interest Rate", value: "3.6% per month" },
      { label: "Forex Markup", value: "3.5%" },
      { label: "Late Payment", value: "Up to ₹1,300" },
    ],
    eligibility: [
      { icon: "💰", label: "Minimum Income", value: "₹25,000 / month" },
      { icon: "🎂", label: "Age Requirement", value: "21 – 60 Years" },
      { icon: "💼", label: "Employment", value: "Salaried / Self-Employed" },
    ],
  },
  {
    id: "sbi-elite",
    name: "SBI Card ELITE",
    bank: "SBI Card",
    bankShort: "SBI CARD",
    match: 88,
    category: "Premium Travel & Rewards",
    annualBenefit: 9800,
    keyRewards: "5X on Dining/Grocery",
    annualFee: 4999,
    bankCategory: "sbi",
    gradient: "from-[#1a1a2e] to-[#0f0f1e]",
    rating: 4.3,
    bestFor: "Lifestyle & Rewards",
    joiningFee: "₹4,999 + GST",
    interestRate: "3.35% per month",
    forexMarkup: "1.99%",
    latePayment: "Up to ₹2,000",
    minIncome: "₹40,000 / month",
    ageRange: "21 – 60 Years",
    employment: "Salaried / Self-Employed",
    keyBenefits: [
      { pct: "5X", label: "Reward Points", detail: "On dining and grocery spends", icon: "🍽️" },
      { pct: "2 RP", label: "Per ₹100", detail: "Base rate on all other spends", icon: "⭐" },
      { pct: "50k", label: "Bonus RP", detail: "Up to 50,000 bonus points on milestones", icon: "🎁" },
    ],
    rewardDetails: [
      { label: "5X Category Cap", detail: "₹2,500 monthly cap on accelerated points." },
      { label: "Bonus Milestone", detail: "Up to 50,000 Bonus RP (₹12,500 value) on spend milestones." },
      { label: "Redemption Process", detail: "Redeem points via SBI Card portal for vouchers, products, or statement credit." },
    ],
    pros: ["Strong rewards on dining and grocery.", "Low forex markup at 1.99%.", "EazyDiner Prime membership included."],
    cons: ["High annual fee of ₹4,999.", "Monthly cap limits accelerated earning.", "Reward point value varies by redemption."],
    exclusions: ["Fuel Spends", "Wallet Loads", "EMI Transactions", "Rent Payments", "Government Taxes"],
    fees: [
      { label: "Joining Fee", value: "₹4,999 + GST" },
      { label: "Annual Fee", value: "₹4,999 + GST" },
      { label: "Interest Rate", value: "3.35% per month" },
      { label: "Forex Markup", value: "1.99%" },
      { label: "Late Payment", value: "Up to ₹2,000" },
    ],
    eligibility: [
      { icon: "💰", label: "Minimum Income", value: "₹40,000 / month" },
      { icon: "🎂", label: "Age Requirement", value: "21 – 60 Years" },
      { icon: "💼", label: "Employment", value: "Salaried / Self-Employed" },
    ],
  },
  {
    id: "axis-ace",
    name: "Axis Bank ACE",
    bank: "Axis Bank",
    bankShort: "AXIS BANK",
    match: 85,
    category: "Unlimited Cashback",
    annualBenefit: 8500,
    keyRewards: "2% on all spends",
    annualFee: 499,
    feeNote: "Waived on ₹2L spend",
    bankCategory: "axis",
    gradient: "from-[#374151] to-[#1f2937]",
    rating: 4.2,
    bestFor: "Flat Cashback",
    joiningFee: "₹499 + GST",
    interestRate: "3.6% per month",
    forexMarkup: "3.5%",
    latePayment: "Up to ₹1,300",
    minIncome: "₹25,000 / month",
    ageRange: "21 – 60 Years",
    employment: "Salaried / Self-Employed",
    keyBenefits: [
      { pct: "2%", label: "Cashback", detail: "Unlimited on all spends — no caps", icon: "💸" },
      { pct: "5%", label: "Cashback", detail: "On Google Pay spends", icon: "📱" },
      { pct: "4%", label: "Cashback", detail: "On Swiggy, Zomato & Uber", icon: "🛵" },
    ],
    rewardDetails: [
      { label: "No Category Caps", detail: "The 2% flat cashback has no monthly ceiling." },
      { label: "Google Pay 5%", detail: "Earn 5% cashback on all Google Pay transactions." },
      { label: "Redemption Process", detail: "Cashback auto-credited to statement each billing cycle." },
    ],
    pros: ["Simple flat 2% cashback with no caps.", "Great for Google Pay users.", "Low annual fee with easy waiver."],
    cons: ["No lounge access.", "No travel or milestone benefits.", "3.5% forex markup is high."],
    exclusions: ["Fuel Spends", "Wallet Loads", "EMI Transactions", "Rent Payments", "Government Taxes"],
    fees: [
      { label: "Joining Fee", value: "₹499 + GST" },
      { label: "Annual Fee", value: "₹499 + GST" },
      { label: "Interest Rate", value: "3.6% per month" },
      { label: "Forex Markup", value: "3.5%" },
      { label: "Late Payment", value: "Up to ₹1,300" },
    ],
    eligibility: [
      { icon: "💰", label: "Minimum Income", value: "₹25,000 / month" },
      { icon: "🎂", label: "Age Requirement", value: "21 – 60 Years" },
      { icon: "💼", label: "Employment", value: "Salaried / Self-Employed" },
    ],
  },
  {
    id: "axis-atlas",
    name: "Axis Bank Atlas",
    bank: "Axis Bank",
    bankShort: "AXIS BANK",
    match: 80,
    category: "Frequent Flyer",
    annualBenefit: 15000,
    keyRewards: "2 EDGE Miles / ₹100",
    annualFee: 5000,
    feeNote: "Waived on Gold Tier",
    bankCategory: "axis",
    gradient: "from-[#1a2035] to-[#0d1526]",
    rating: 4.6,
    bestFor: "Airline Miles",
    joiningFee: "₹5,000 + GST",
    interestRate: "3.6% per month",
    forexMarkup: "3.5%",
    latePayment: "Up to ₹1,500",
    minIncome: "₹50,000 / month",
    ageRange: "21 – 65 Years",
    employment: "Salaried / Self-Employed",
    keyBenefits: [
      { pct: "10%", label: "EDGE Miles", detail: "Up to 10% on travel bookings via Travel Edge", icon: "✈️" },
      { pct: "5K", label: "Welcome Miles", detail: "5,000 EDGE Miles on first transaction", icon: "🎁" },
      { pct: "1:2", label: "Transfer Ratio", detail: "Direct transfer to airline partners", icon: "🔄" },
    ],
    rewardDetails: [
      { label: "EDGE Miles Earning", detail: "2 EDGE Miles per ₹100 spent. No cap on miles earned." },
      { label: "Transfer Partners", detail: "1:2 transfer ratio to major airline frequent flyer programs." },
      { label: "Milestone Rewards", detail: "Up to 10,000 EDGE Miles on spend milestones." },
    ],
    pros: ["Best-in-class airline mile transfer ratio.", "No cap on EDGE Miles earned.", "Unlimited domestic lounge access."],
    cons: ["High annual fee of ₹5,000.", "3.5% forex markup.", "Best value requires airline point transfers."],
    exclusions: ["Fuel Spends", "Wallet Loads", "EMI Transactions", "Rent Payments", "Government Taxes"],
    fees: [
      { label: "Joining Fee", value: "₹5,000 + GST" },
      { label: "Annual Fee", value: "₹5,000 + GST" },
      { label: "Interest Rate", value: "3.6% per month" },
      { label: "Forex Markup", value: "3.5%" },
      { label: "Late Payment", value: "Up to ₹1,500" },
    ],
    eligibility: [
      { icon: "💰", label: "Minimum Income", value: "₹50,000 / month" },
      { icon: "🎂", label: "Age Requirement", value: "21 – 65 Years" },
      { icon: "💼", label: "Employment", value: "Salaried / Self-Employed" },
    ],
  },
  {
    id: "hdfc-regalia-gold",
    name: "HDFC Regalia Gold",
    bank: "HDFC Bank",
    bankShort: "HDFC BANK",
    match: 78,
    category: "Premium Travel",
    annualBenefit: 11000,
    keyRewards: "4 RP / ₹150",
    annualFee: 2500,
    feeNote: "Waived on ₹3L spend",
    bankCategory: "hdfc",
    gradient: "from-[#d4a843] to-[#c8922e]",
    rating: 4.4,
    bestFor: "Lounge Access",
    joiningFee: "₹2,500 + GST",
    interestRate: "3.6% per month",
    forexMarkup: "2.0%",
    latePayment: "Up to ₹1,300",
    minIncome: "₹40,000 / month",
    ageRange: "21 – 60 Years",
    employment: "Salaried / Self-Employed",
    keyBenefits: [
      { pct: "12", label: "Domestic Lounges", detail: "12 domestic lounge visits per year", icon: "🛋️" },
      { pct: "6", label: "Intl Lounges", detail: "6 international lounge visits per year", icon: "🌍" },
      { pct: "₹5K", label: "Vouchers", detail: "₹5,000 vouchers on ₹5L spend", icon: "🎟️" },
    ],
    rewardDetails: [
      { label: "Reward Rate", detail: "4 Reward Points per ₹150 spent." },
      { label: "Lounge Access", detail: "Domestic: 3 per quarter | International: Priority Pass." },
      { label: "Milestone Benefits", detail: "₹5,000 vouchers on ₹5L annual spend." },
    ],
    pros: ["Extensive lounge access network.", "Swiggy Dineout 20% off.", "Air accident insurance of ₹1 Crore."],
    cons: ["Reward rate is lower than competitors.", "Annual fee ₹2,500 with ₹3L waiver threshold.", "Points value varies by redemption."],
    exclusions: ["Fuel Spends", "Wallet Loads", "EMI Transactions", "Rent Payments", "Government Taxes"],
    fees: [
      { label: "Joining Fee", value: "₹2,500 + GST" },
      { label: "Annual Fee", value: "₹2,500 + GST" },
      { label: "Interest Rate", value: "3.6% per month" },
      { label: "Forex Markup", value: "2.0%" },
      { label: "Late Payment", value: "Up to ₹1,300" },
    ],
    eligibility: [
      { icon: "💰", label: "Minimum Income", value: "₹40,000 / month" },
      { icon: "🎂", label: "Age Requirement", value: "21 – 60 Years" },
      { icon: "💼", label: "Employment", value: "Salaried / Self-Employed" },
    ],
  },
  {
    id: "amex-platinum-travel",
    name: "Amex Platinum Travel",
    bank: "American Express",
    bankShort: "AMEX",
    match: 75,
    category: "Hotel Loyalty",
    annualBenefit: 13000,
    keyRewards: "Taj vouchers & Marriott points",
    annualFee: 3500,
    feeNote: "Waived on ₹1.5L spend",
    bankCategory: "amex",
    gradient: "from-[#9ca3af] to-[#6b7280]",
    rating: 4.5,
    bestFor: "Hotel Rewards",
    joiningFee: "₹3,500 + GST",
    interestRate: "3.6% per month",
    forexMarkup: "3.5%",
    latePayment: "Up to ₹1,000",
    minIncome: "₹60,000 / month",
    ageRange: "25 – 65 Years",
    employment: "Salaried",
    keyBenefits: [
      { pct: "₹40K", label: "Milestone Value", detail: "Taj vouchers worth ₹40,000 on milestones", icon: "🏨" },
      { pct: "24K", label: "Bonus Points", detail: "24,000 Membership Rewards on ₹4L spend", icon: "⭐" },
      { pct: "Marriott", label: "Bonvoy Points", detail: "Earn Marriott Bonvoy points on stays", icon: "🌐" },
    ],
    rewardDetails: [
      { label: "Milestone Rewards", detail: "Taj vouchers worth ₹40,000 total across milestones." },
      { label: "Bonus Points", detail: "24,000 Membership Rewards points on ₹4L annual spend." },
      { label: "Redemption Process", detail: "Redeem points for Taj vouchers, flights, or hotel stays." },
    ],
    pros: ["Excellent hotel milestone rewards.", "Taj voucher value is market-leading.", "Premium concierge service."],
    cons: ["High income requirement.", "Limited acceptance compared to Visa/Mastercard.", "3.5% forex markup."],
    exclusions: ["Fuel Spends", "Wallet Loads", "EMI Transactions", "Rent Payments", "Government Taxes"],
    fees: [
      { label: "Joining Fee", value: "₹3,500 + GST" },
      { label: "Annual Fee", value: "₹3,500 + GST" },
      { label: "Interest Rate", value: "3.6% per month" },
      { label: "Forex Markup", value: "3.5%" },
      { label: "Late Payment", value: "Up to ₹1,000" },
    ],
    eligibility: [
      { icon: "💰", label: "Minimum Income", value: "₹60,000 / month" },
      { icon: "🎂", label: "Age Requirement", value: "25 – 65 Years" },
      { icon: "💼", label: "Employment", value: "Salaried" },
    ],
  },
];

export function getCardById(id: string): Card | undefined {
  return cards.find((c) => c.id === id);
}
