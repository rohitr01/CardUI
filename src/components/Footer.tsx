import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#c6c6cd]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 py-8 lg:py-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-6">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1 flex flex-col gap-3">
            <div className="font-bold text-[20px] lg:text-[22px] text-black">CardMatch India</div>
            <p className="text-[12px] text-[#191c1e] leading-relaxed">
              Independent marketplace.<br />Financial services compliance regulated.
            </p>
          </div>

          {/* Explore */}
          <div className="flex flex-col gap-2.5">
            <div className="font-semibold text-[12px] text-[#191c1e] tracking-[0.7px] uppercase mb-1">Explore</div>
            {[["Cards by Bank", "/banks"], ["Cards by Category", "/credit-cards"], ["Comparisons", "/comparison"]].map(([label, href]) => (
              <Link key={label} to={href} className="text-[14px] sm:text-[15px] text-[#45464d] hover:text-black transition-colors">{label}</Link>
            ))}
          </div>

          {/* Top Searches */}
          <div className="flex flex-col gap-2.5">
            <div className="font-semibold text-[12px] text-[#191c1e] tracking-[0.7px] uppercase mb-1">Top Searches</div>
            {[["Best Cards for Beginners", "/credit-cards"], ["Best Lounge Access Cards", "/travel-cards"], ["Best Cards for Salaried", "/credit-cards"], ["Zero Forex Markup Cards", "/travel-cards"]].map(([label, href]) => (
              <Link key={label} to={href} className="text-[13px] sm:text-[14px] text-[#45464d] hover:text-black transition-colors leading-snug">{label}</Link>
            ))}
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-2.5">
            <div className="font-semibold text-[12px] text-[#191c1e] tracking-[0.7px] uppercase mb-1">Legal</div>
            {[["Privacy Policy", "/privacy"], ["Terms of Service", "/terms"], ["Contact Us", "/contact"]].map(([label, href]) => (
              <Link key={label} to={href} className="text-[14px] sm:text-[15px] text-[#45464d] hover:text-black transition-colors">{label}</Link>
            ))}
          </div>
        </div>

        <div className="border-t border-[rgba(198,198,205,0.3)] pt-5">
          <p className="text-[11px] sm:text-[12px] text-[#45464d] text-center">
            © 2024 CardMatch India. Independent comparison platform, final approval is subject to respective bank policies.
          </p>
        </div>
      </div>
    </footer>
  );
}
