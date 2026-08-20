import { Link, useNavigate } from "react-router-dom";

const banks = [
  { name: "HDFC Bank", logo: "🏦" },
  { name: "SBI Card", logo: "🏛️" },
  { name: "ICICI Bank", logo: "🔵" },
  { name: "AXIS BANK", logo: "🟠" },
  { name: "AMEX", logo: "💳" },
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f7f9fb] min-h-screen">
      {/* Hero */}
      <section className="bg-white border-b border-[#e5e7eb]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 py-10 lg:py-16 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="flex-1 w-full max-w-[580px] mx-auto lg:mx-0 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[#f0faf5] border border-[rgba(108,248,187,0.4)] rounded-full px-4 py-2 mb-5">
              <div className="w-2 h-2 bg-[#006c49] rounded-full flex-shrink-0" />
              <span className="text-[12px] sm:text-[13px] font-semibold text-[#006c49] tracking-[0.5px]">India's #1 Card Discovery Platform</span>
            </div>
            <h1 className="font-black text-[38px] sm:text-[48px] lg:text-[56px] leading-[1.1] tracking-[-1.5px] text-[#0f172a] mb-4 sm:mb-5">
              Find the Right<br />Credit Card<br />
              <span className="text-[#006c49]">for You</span>
            </h1>
            <p className="text-[15px] sm:text-[17px] lg:text-[18px] text-[#45464d] leading-relaxed mb-6 sm:mb-8">
              Compare hundreds of credit cards and find the ones that match your spending, income, rewards, travel, fuel, UPI and lifestyle needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-10">
              <button
                onClick={() => navigate("/eligibility")}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#006c49] hover:bg-[#00583b] text-white font-semibold text-[14px] tracking-[0.7px] px-7 py-4 rounded-xl transition-colors shadow-[0_10px_15px_rgba(16,185,129,0.2)]"
              >
                Find My Card
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="white"/></svg>
              </button>
              <Link
                to="/comparison"
                className="w-full sm:w-auto flex items-center justify-center gap-2 border border-[#c6c6cd] hover:border-[#45464d] bg-white text-[#191c1e] font-semibold text-[14px] tracking-[0.7px] px-7 py-4 rounded-xl transition-colors"
              >
                Compare Cards →
              </Link>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <div className="flex -space-x-2">
                {["🧑", "👩", "🧔"].map((e, i) => (
                  <div key={i} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#e5e7eb] border-2 border-white flex items-center justify-center text-xs sm:text-sm">{e}</div>
                ))}
              </div>
              <span className="text-[12px] sm:text-[13px] text-[#45464d]"><strong>5k+</strong> users this week</span>
            </div>
          </div>

          {/* Card Stack Visual — hidden on small screens */}
          <div className="flex-1 relative h-[260px] sm:h-[300px] w-full max-w-[400px] hidden sm:block lg:block">
            <div className="absolute right-0 top-4 w-[230px] sm:w-[260px] h-[140px] sm:h-[160px] bg-[#1a1a2e] rounded-2xl shadow-2xl rotate-[-6deg] flex items-end p-4">
              <div>
                <div className="text-[9px] text-gray-400 tracking-widest mb-1">PLATINUM</div>
                <div className="text-white font-bold text-sm sm:text-base">•••• •••• •••• 7890</div>
              </div>
            </div>
            <div className="absolute right-6 top-10 w-[230px] sm:w-[260px] h-[140px] sm:h-[160px] bg-[#006c49] rounded-2xl shadow-xl rotate-[-2deg] flex flex-col justify-between p-4">
              <div className="text-[9px] text-[#6cf8bb] tracking-widest font-bold">REWARDS</div>
              <div>
                <div className="text-white font-bold text-sm">•••• •••• •••• 4321</div>
                <div className="text-[#6cf8bb] text-[10px] mt-1">Valid Thru 12/28</div>
              </div>
            </div>
            <div className="absolute right-2 top-20 w-[240px] sm:w-[270px] h-[145px] sm:h-[165px] bg-[#f59e0b] rounded-2xl shadow-xl rotate-[3deg] flex flex-col justify-between p-4">
              <div className="flex justify-between items-start">
                <div className="text-[9px] text-[#92400e] tracking-widest font-bold">CASHBACK</div>
                <div className="text-[#92400e] font-bold">₹</div>
              </div>
              <div>
                <div className="text-[#92400e] font-bold text-sm">•••• •••• •••• 4920</div>
                <div className="flex justify-between mt-1">
                  <span className="text-[#92400e] text-[10px]">Valid Thru 12/29</span>
                  <span className="text-[#92400e] text-[10px] font-bold">VISA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bank Logos */}
      <section className="bg-white border-b border-[#e5e7eb] py-6 sm:py-8">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
          <p className="text-[10px] sm:text-[11px] font-semibold tracking-[1.5px] text-[#45464d] text-center mb-4 sm:mb-6 uppercase">Compare Cards from India's Top Banks</p>
          <div className="flex items-center justify-center gap-6 sm:gap-10 lg:gap-12 flex-wrap">
            {banks.map((b) => (
              <Link key={b.name} to="/banks" className="flex items-center gap-1.5 text-[14px] sm:text-[16px] lg:text-[18px] font-bold text-[#191c1e] hover:text-[#006c49] transition-colors">
                <span className="text-lg sm:text-xl">{b.logo}</span>
                {b.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Category */}
      <section className="py-10 sm:py-14 lg:py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="font-bold text-[26px] sm:text-[32px] lg:text-[36px] tracking-[-0.5px] text-[#191c1e] mb-2 sm:mb-3">Browse by Category</h2>
            <p className="text-[14px] sm:text-[16px] text-[#45464d] max-w-[520px] mx-auto">Find a card that perfectly aligns with your highest spending categories to maximize your rewards.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Cashback — spans 2 rows on lg */}
            <div className="sm:row-span-2 bg-[#f0faf5] rounded-2xl border border-[rgba(108,248,187,0.3)] p-6 flex flex-col justify-between min-h-[220px] sm:min-h-[280px]">
              <div className="w-12 h-12 bg-[#6cf8bb] rounded-xl flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V12H20V18ZM20 8H4V6H20V8Z" fill="#006c49"/></svg>
              </div>
              <div>
                <h3 className="font-bold text-[20px] sm:text-[22px] text-[#191c1e] mb-2">Cashback Cards</h3>
                <p className="text-[13px] sm:text-[14px] text-[#45464d] mb-4">Earn direct cash credits on your everyday utility, grocery, and online shopping spends.</p>
                <Link to="/credit-cards?cat=cashback" className="inline-flex items-center gap-1 text-[#006c49] font-semibold text-[13px]">
                  Explore 45+ Cards →
                </Link>
              </div>
            </div>

            {/* Travel */}
            <Link to="/travel-cards" className="bg-white rounded-2xl border border-[#e5e7eb] p-4 sm:p-5 hover:shadow-md transition-shadow flex items-center gap-4">
              <div className="w-10 h-10 bg-[#e8f4ff] rounded-xl flex items-center justify-center flex-shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2C10.67 2 10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z" fill="#3b82f6"/></svg>
              </div>
              <div>
                <div className="font-semibold text-[14px] sm:text-[15px] text-[#191c1e]">Travel & Lounge Access</div>
                <div className="text-[12px] sm:text-[13px] text-[#45464d]">Free domestic/international lounge access and airmiles.</div>
              </div>
            </Link>

            {/* Fuel */}
            <Link to="/credit-cards?cat=fuel" className="bg-white rounded-2xl border border-[#e5e7eb] p-4 sm:p-5 hover:shadow-md transition-shadow flex items-center gap-4">
              <div className="w-10 h-10 bg-[#fff4e8] rounded-xl flex items-center justify-center flex-shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M19.77 7.23L16.06 3.5L15 4.56L17.11 6.67C16.17 7.03 15.5 7.93 15.5 9C15.5 10.38 16.62 11.5 18 11.5C18.36 11.5 18.69 11.42 19 11.29V18.5C19 19.05 18.55 19.5 18 19.5C17.45 19.5 17 19.05 17 18.5V14C17 12.9 16.1 12 15 12H14V5C14 3.9 13.1 3 12 3H6C4.9 3 4 3.9 4 5V21H14V13.5H15.5V18.5C15.5 19.88 16.62 21 18 21C19.38 21 20.5 19.88 20.5 18.5V9C20.5 8.31 20.22 7.68 19.77 7.23Z" fill="#f97316"/></svg>
              </div>
              <div>
                <div className="font-semibold text-[14px] sm:text-[15px] text-[#191c1e]">Fuel Surcharge</div>
                <div className="text-[12px] sm:text-[13px] text-[#45464d]">Waivers & bonus points at pumps.</div>
              </div>
            </Link>

            {/* UPI */}
            <Link to="/credit-cards?cat=upi" className="bg-white rounded-2xl border border-[#e5e7eb] p-4 sm:p-5 hover:shadow-md transition-shadow flex items-center gap-4">
              <div className="w-10 h-10 bg-[#f0e8ff] rounded-xl flex items-center justify-center flex-shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="2" y="3" width="9" height="9" rx="1" stroke="#8b5cf6" strokeWidth="1.8"/><rect x="13" y="3" width="9" height="9" rx="1" stroke="#8b5cf6" strokeWidth="1.8"/><rect x="2" y="14" width="9" height="9" rx="1" stroke="#8b5cf6" strokeWidth="1.8"/><rect x="15" y="16" width="2" height="2" fill="#8b5cf6"/><rect x="18" y="16" width="2" height="2" fill="#8b5cf6"/><rect x="15" y="19" width="2" height="2" fill="#8b5cf6"/></svg>
              </div>
              <div>
                <div className="font-semibold text-[14px] sm:text-[15px] text-[#191c1e]">RuPay UPI Cards</div>
                <div className="text-[12px] sm:text-[13px] text-[#45464d]">Link to UPI apps for small payments.</div>
              </div>
            </Link>

            {/* Lifetime Free */}
            <Link to="/credit-cards?cat=free" className="bg-[#0f172a] rounded-2xl p-4 sm:p-5 hover:bg-[#1e293b] transition-colors flex items-center justify-between group sm:col-span-1">
              <div>
                <div className="inline-flex items-center gap-1 bg-[#1e293b] rounded-full px-3 py-1 mb-2 sm:mb-3">
                  <span className="text-[10px] text-[#6cf8bb] font-semibold tracking-wider">★ Popular</span>
                </div>
                <div className="font-bold text-[16px] sm:text-[18px] text-white mb-1">Lifetime Free Cards</div>
                <div className="text-[12px] sm:text-[13px] text-gray-400">Zero joining and annual fees forever.</div>
              </div>
              <div className="w-10 h-10 bg-[#006c49] rounded-full flex items-center justify-center group-hover:bg-[#00583b] transition-colors flex-shrink-0 ml-4">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="white"/></svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-white border-t border-b border-[#e5e7eb] py-10 sm:py-14">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <h2 className="font-bold text-[22px] sm:text-[28px] text-[#191c1e] mb-2 sm:mb-3">Why CardMatch India?</h2>
          <p className="text-[14px] sm:text-[16px] text-[#45464d] mb-8 sm:mb-10">We're independent — we compare all major cards fairly with no hidden commissions.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: "🔒", title: "Bank-Grade Security", desc: "Your data is encrypted end-to-end. We never store sensitive financial information." },
              { icon: "🎯", title: "AI-Powered Matching", desc: "Our algorithm matches cards to your unique spending pattern with up to 95% accuracy." },
              { icon: "✅", title: "No Credit Score Impact", desc: "Checking eligibility has no impact on your credit score — ever." },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center gap-3">
                <div className="text-3xl sm:text-4xl">{item.icon}</div>
                <div className="font-semibold text-[15px] sm:text-[16px] text-[#191c1e]">{item.title}</div>
                <div className="text-[13px] sm:text-[14px] text-[#45464d] leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16">
        <div className="max-w-[560px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-bold text-[24px] sm:text-[32px] tracking-[-0.5px] text-[#191c1e] mb-3 sm:mb-4">Ready to find your perfect card?</h2>
          <p className="text-[14px] sm:text-[16px] text-[#45464d] mb-6 sm:mb-8">Answer 4 quick questions and get personalized recommendations in under 2 minutes.</p>
          <button
            onClick={() => navigate("/eligibility")}
            className="w-full sm:w-auto bg-black hover:bg-[#222] text-white font-semibold text-[15px] sm:text-[16px] tracking-[0.5px] px-8 sm:px-10 py-4 rounded-xl transition-colors"
          >
            Get Started — It's Free
          </button>
        </div>
      </section>
    </div>
  );
}
