import { useState } from "react";
import { useNavigate } from "react-router-dom";

const cities = ["Mumbai", "Delhi", "Bengaluru", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Surat"];

const spendingCategories = [
  { id: "amazon", label: "Amazon", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M7 4H3C2.45 4 2 4.45 2 5V9H4V6H7V4ZM7 20H3C2.45 20 2 19.55 2 19V15H4V18H7V20ZM21 15V19C21 19.55 20.55 20 20 20H16V18H19V15H21ZM21 9H19V6H16V4H20C20.55 4 21 4.45 21 5V9Z" fill="#45464d"/></svg> },
  { id: "flipkart", label: "Flipkart", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M7 4H3C1.9 4 1 4.9 1 6V18C1 19.1 1.9 20 3 20H7L8 21H16L17 20H21C22.1 20 23 19.1 23 18V6C23 4.9 22.1 4 21 4H17C17 2.9 16.1 2 15 2H9C7.9 2 7 2.9 7 4ZM7 18H17V8H7V18Z" fill="#45464d"/></svg> },
  { id: "dining", label: "Dining & Delivery", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M11 9H9V2H7V9H5V2H3V9C3 11.12 4.66 12.84 6.75 12.97V22H9.25V12.97C11.34 12.84 13 11.12 13 9V2H11V9ZM16 6V14H18.5V22H21V2C18.24 2 16 4.24 16 6Z" fill="#45464d"/></svg> },
  { id: "fuel", label: "Fuel", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M19.77 7.23L16.06 3.5L15 4.56L17.11 6.67C16.17 7.03 15.5 7.93 15.5 9C15.5 10.38 16.62 11.5 18 11.5V18.5C18 19.05 17.55 19.5 17 19.5C16.45 19.5 16 19.05 16 18.5V14C16 12.9 15.1 12 14 12H13V5C13 3.9 12.1 3 11 3H5C3.9 3 3 3.9 3 5V21H13V13.5H14.5V18.5C14.5 19.88 15.62 21 17 21C18.38 21 19.5 19.88 19.5 18.5V9C19.5 8.31 19.22 7.68 18.77 7.23Z" fill="#45464d"/></svg> },
  { id: "travel", label: "Travel", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2C10.67 2 10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z" fill="#45464d"/></svg> },
  { id: "upi", label: "UPI Payments", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="1" y="1" width="9" height="9" rx="1" stroke="#45464d" strokeWidth="1.8"/><rect x="14" y="1" width="9" height="9" rx="1" stroke="#45464d" strokeWidth="1.8"/><rect x="1" y="14" width="9" height="9" rx="1" stroke="#45464d" strokeWidth="1.8"/><rect x="16" y="15" width="2" height="2" fill="#45464d"/><rect x="19" y="15" width="2" height="2" fill="#45464d"/><rect x="16" y="18" width="2" height="2" fill="#45464d"/></svg> },
  { id: "utilities", label: "Utilities", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M16.01 7L16 3H14V7H10V3H8V7H7.99C7 7 6 7.9 6 8.89V11.5L9.5 15V21H14.5V15L18 11.5V8.89C18 7.9 17 7 16.01 7Z" fill="#45464d"/></svg> },
  { id: "rent", label: "Rent", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z" fill="#45464d"/></svg> },
];

const employmentTypes = [
  { id: "salaried", label: "Salaried", icon: "💼" },
  { id: "self_employed", label: "Self-Employed", icon: "🏢" },
  { id: "business", label: "Business Owner", icon: "🏭" },
  { id: "student", label: "Student", icon: "🎓" },
  { id: "retired", label: "Retired", icon: "🌴" },
];

const incomeRanges = [
  { id: "below_3", label: "Below ₹3 Lakh/yr" },
  { id: "3_6", label: "₹3–6 Lakh/yr" },
  { id: "6_12", label: "₹6–12 Lakh/yr" },
  { id: "12_25", label: "₹12–25 Lakh/yr" },
  { id: "above_25", label: "Above ₹25 Lakh/yr" },
];

export default function EligibilityPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [employment, setEmployment] = useState("");
  const [income, setIncome] = useState("");

  const progress = (step / totalSteps) * 100;

  function toggleCategory(id: string) {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  }

  function handleContinue() {
    if (step < totalSteps) setStep(step + 1);
    else navigate("/results");
  }

  function canContinue() {
    if (step === 1) return age.length > 0 && city.length > 0;
    if (step === 2) return selectedCategories.length > 0;
    if (step === 3) return employment.length > 0;
    if (step === 4) return income.length > 0;
    return false;
  }

  return (
    <div className="bg-[#f7f9fb] min-h-screen">
      <div className="max-w-[768px] mx-auto px-4 sm:px-6 lg:px-10 pt-6 sm:pt-8 pb-10">
        {/* Trust Banner */}
        <div className="bg-[rgba(108,248,187,0.2)] border border-[rgba(108,248,187,0.5)] rounded-xl px-4 py-3 flex items-center gap-3 mb-5 sm:mb-6">
          <svg width="16" height="20" viewBox="0 0 16 20" fill="none" className="flex-shrink-0">
            <path d="M8 0L0 3V9C0 14.55 3.41 19.74 8 21C12.59 19.74 16 14.55 16 9V3L8 0ZM8 10.99H14C13.47 14.11 11.1 16.79 8 17.93V11H2V4.3L8 2.19V10.99Z" fill="#00714D"/>
          </svg>
          <p className="text-[13px] sm:text-[15px] text-[#00714d]">
            Checking eligibility has <strong>no impact</strong> on your credit score.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl border border-[#c6c6cd] shadow-sm overflow-hidden">
          {/* Progress bar */}
          <div className="h-1 bg-[#e0e3e5] relative">
            <div className="h-full bg-[#006c49] transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>

          <div className="px-5 sm:px-8 pb-6 sm:pb-8 pt-6 sm:pt-10">
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <div className="text-[12px] sm:text-[13px] font-semibold text-[#006c49] tracking-[0.5px]">
                STEP {step} OF {totalSteps}
              </div>
              <div className="text-[12px] sm:text-[13px] text-[#45464d]">{Math.round(progress)}% Complete</div>
            </div>

            {/* Step 1 */}
            {step === 1 && (
              <div>
                <h2 className="font-semibold text-[20px] sm:text-[24px] text-[#191c1e] mb-2">Let's start with the basics</h2>
                <p className="text-[14px] sm:text-[16px] text-[#45464d] mb-6 sm:mb-8">Tell us a bit about yourself to find the best matches.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block font-semibold text-[13px] tracking-[0.7px] text-[#45464d] mb-2">Age</label>
                    <input
                      type="number"
                      placeholder="e.g. 28"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      className="w-full border border-[#c6c6cd] rounded-xl px-4 py-3 text-[15px] sm:text-[16px] text-[#191c1e] focus:outline-none focus:border-[#006c49] focus:ring-1 focus:ring-[#006c49] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-[13px] tracking-[0.7px] text-[#45464d] mb-2">City of Residence</label>
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full border border-[#c6c6cd] rounded-xl px-4 py-3 text-[15px] sm:text-[16px] text-[#191c1e] focus:outline-none focus:border-[#006c49] focus:ring-1 focus:ring-[#006c49] transition-colors bg-white"
                    >
                      <option value="">Select City</option>
                      {cities.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                </div>
                <button
                  onClick={handleContinue}
                  disabled={!canContinue()}
                  className="w-full bg-black text-white font-semibold text-[14px] tracking-[0.7px] py-4 rounded-xl disabled:opacity-40 hover:bg-[#222] transition-colors flex items-center justify-center gap-2"
                >
                  Continue to Employment
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="white"/></svg>
                </button>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div>
                <h2 className="font-bold text-[20px] sm:text-[26px] text-[#191c1e] mb-2 text-center">Where do you spend the most?</h2>
                <p className="text-[13px] sm:text-[15px] text-[#45464d] mb-6 text-center">Select the categories you frequently spend on.</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 mb-5">
                  {spendingCategories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => toggleCategory(cat.id)}
                      className={`flex flex-col items-center gap-2 sm:gap-3 p-3 sm:p-5 rounded-2xl border-2 transition-all ${
                        selectedCategories.includes(cat.id)
                          ? "border-[#191c1e] bg-[#f7f9fb]"
                          : "border-[#e5e7eb] bg-white hover:border-[#c6c6cd]"
                      }`}
                    >
                      <div className="text-[#45464d]">{cat.icon}</div>
                      <span className="text-[12px] sm:text-[14px] font-medium text-[#191c1e] text-center">{cat.label}</span>
                    </button>
                  ))}
                </div>
                <div className="flex gap-3 mb-3">
                  <button onClick={() => setStep(1)} className="border border-[#c6c6cd] px-4 sm:px-6 py-3 rounded-xl font-semibold text-[13px] sm:text-[14px] text-[#191c1e] hover:bg-[#f7f9fb]">Back</button>
                  <button
                    onClick={handleContinue}
                    disabled={!canContinue()}
                    className="flex-1 bg-black text-white font-semibold text-[13px] sm:text-[14px] tracking-[0.7px] px-4 py-3 rounded-xl disabled:opacity-40 hover:bg-[#222] transition-colors"
                  >
                    Analyze My Spending →
                  </button>
                </div>
                <p className="text-[12px] text-[#45464d] text-center">{selectedCategories.length} categories selected</p>
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <div>
                <h2 className="font-semibold text-[20px] sm:text-[24px] text-[#191c1e] mb-2">What's your employment type?</h2>
                <p className="text-[14px] sm:text-[15px] text-[#45464d] mb-6">This helps us find cards with the right eligibility criteria for you.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {employmentTypes.map((e) => (
                    <button
                      key={e.id}
                      onClick={() => setEmployment(e.id)}
                      className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                        employment === e.id ? "border-[#191c1e] bg-[#f7f9fb]" : "border-[#e5e7eb] bg-white hover:border-[#c6c6cd]"
                      }`}
                    >
                      <span className="text-2xl">{e.icon}</span>
                      <span className="font-medium text-[14px] sm:text-[15px] text-[#191c1e]">{e.label}</span>
                    </button>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button onClick={() => setStep(2)} className="border border-[#c6c6cd] px-4 sm:px-6 py-3 rounded-xl font-semibold text-[13px] sm:text-[14px] text-[#191c1e] hover:bg-[#f7f9fb]">Back</button>
                  <button
                    onClick={handleContinue}
                    disabled={!canContinue()}
                    className="flex-1 bg-black text-white font-semibold text-[13px] sm:text-[14px] tracking-[0.7px] py-3 rounded-xl disabled:opacity-40 hover:bg-[#222] transition-colors"
                  >
                    Continue to Income →
                  </button>
                </div>
              </div>
            )}

            {/* Step 4 */}
            {step === 4 && (
              <div>
                <h2 className="font-semibold text-[20px] sm:text-[24px] text-[#191c1e] mb-2">What's your annual income?</h2>
                <p className="text-[14px] sm:text-[15px] text-[#45464d] mb-6">This ensures we only show cards you qualify for.</p>
                <div className="flex flex-col gap-2.5 sm:gap-3 mb-6">
                  {incomeRanges.map((r) => (
                    <button
                      key={r.id}
                      onClick={() => setIncome(r.id)}
                      className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                        income === r.id ? "border-[#006c49] bg-[#f0faf5]" : "border-[#e5e7eb] bg-white hover:border-[#c6c6cd]"
                      }`}
                    >
                      <span className="font-medium text-[14px] sm:text-[16px] text-[#191c1e]">{r.label}</span>
                      {income === r.id && (
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <circle cx="10" cy="10" r="10" fill="#006c49"/>
                          <path d="M5 10L8.5 13.5L15 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button onClick={() => setStep(3)} className="border border-[#c6c6cd] px-4 sm:px-6 py-3 rounded-xl font-semibold text-[13px] sm:text-[14px] text-[#191c1e] hover:bg-[#f7f9fb]">Back</button>
                  <button
                    onClick={handleContinue}
                    disabled={!canContinue()}
                    className="flex-1 bg-[#006c49] text-white font-semibold text-[13px] sm:text-[14px] tracking-[0.7px] py-3 rounded-xl disabled:opacity-40 hover:bg-[#00583b] transition-colors"
                  >
                    See My Matches 🎉
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
