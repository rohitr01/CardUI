export default function TermsPage() {
  return (
    <div className="bg-[#f7f9fb] min-h-screen">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14">
        <h1 className="font-bold text-[28px] sm:text-[36px] text-[#191c1e] mb-4 tracking-[-0.5px]">Terms of Service</h1>
        <p className="text-[13px] sm:text-[14px] text-[#45464d] mb-8">Last updated: January 2024</p>

        <div className="bg-white rounded-2xl border border-[#e5e7eb] p-6 sm:p-8 flex flex-col gap-6">
          {[
            { h: "1. Acceptance of Terms", p: "By accessing and using CardMatch India, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please discontinue use of the platform." },
            { h: "2. Service Description", p: "CardMatch India is an independent credit card comparison platform. We provide informational recommendations based on user-provided data. We are not a bank, financial institution, or credit card issuer." },
            { h: "3. No Guarantee of Approval", p: "Our match scores and recommendations are for informational purposes only. Final credit card issuance is subject to the respective bank's approval process, credit assessment, and internal policies." },
            { h: "4. Accuracy of Information", p: "While we strive to keep card details, fees, and reward structures accurate and up to date, we recommend verifying all terms directly with the issuing bank before applying." },
            { h: "5. Independent Platform", p: "CardMatch India is an independent marketplace. We are not affiliated with, endorsed by, or sponsored by any bank or financial institution. We may earn referral commissions from partner banks, but this does not influence our card rankings." },
            { h: "6. Limitation of Liability", p: "CardMatch India shall not be liable for any direct, indirect, or consequential damages arising from the use of our platform or reliance on our recommendations." },
            { h: "7. Changes to Terms", p: "We reserve the right to update these Terms of Service at any time. Continued use of the platform after changes constitutes acceptance of the revised terms." },
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
