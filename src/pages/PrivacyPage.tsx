export default function PrivacyPage() {
  return (
    <div className="bg-[#f7f9fb] min-h-screen">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14">
        <h1 className="font-bold text-[28px] sm:text-[36px] text-[#191c1e] mb-4 tracking-[-0.5px]">Privacy Policy</h1>
        <p className="text-[13px] sm:text-[14px] text-[#45464d] mb-8">Last updated: January 2024</p>

        <div className="bg-white rounded-2xl border border-[#e5e7eb] p-6 sm:p-8 flex flex-col gap-6">
          {[
            { h: "1. Information We Collect", p: "We collect information you provide directly when using our eligibility checker, including your age, city, spending categories, employment type, and income range. We do not collect or store your name, contact details, or any financial account information." },
            { h: "2. How We Use Your Information", p: "Your inputs are used solely to match you with relevant credit card recommendations. We analyze your spending profile and eligibility factors to generate personalized card suggestions. We do not sell or share your data with third parties." },
            { h: "3. Data Security", p: "All data is encrypted end-to-end using bank-grade security protocols. We never store sensitive financial information such as card numbers, CVV, or banking credentials on our servers." },
            { h: "4. Credit Score Impact", p: "Checking eligibility through CardMatch India has no impact on your credit score. We perform a soft inquiry only and do not report to any credit bureau." },
            { h: "5. Cookies", p: "We use essential cookies to ensure the proper functioning of our website. We do not use tracking cookies for advertising purposes." },
            { h: "6. Your Rights", p: "You have the right to request deletion of any data you have submitted. Since we do not link eligibility data to personal identifiers, your inputs are anonymous and cannot be traced back to you." },
            { h: "7. Contact", p: "For any privacy-related questions, please reach out to us through our Contact page." },
          ].map((s) => (
            <div key={s.h}>
              <h2 className="font-bold text-[16px] sm:text-[18px] text-[#191c1e] mb-2">{s.h}</h2>
              <p className="text-[13px] sm:text-[14px] text-[#45464d] leading-relaxed">{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
