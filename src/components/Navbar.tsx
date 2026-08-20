import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const navLinks = [
  {
    label: "Credit Cards",
    dropdown: [
      ["Travel Cards", "/travel-cards"],
      ["Cashback Cards", "/credit-cards?cat=cashback"],
      ["Fuel Cards", "/credit-cards?cat=fuel"],
      ["Lifetime Free", "/credit-cards?cat=free"],
    ],
  },
  {
    label: "Tools",
    dropdown: [
      ["Rewards Calculator", "/rewards-calculator"],
      ["Card Comparison", "/comparison"],
      ["Card Roast", "/card-roast"],
      ["Eligibility Checker", "/eligibility"],
    ],
  },
  {
    label: "Best Cards",
    dropdown: [
      ["Best for Travel", "/travel-cards"],
      ["Best for Dining", "/credit-cards?cat=dining"],
      ["Best for Students", "/credit-cards?cat=students"],
      ["Lifetime Free", "/credit-cards?cat=free"],
    ],
  },
  { label: "Banks", href: "/banks" },
  { label: "Guides", href: "/guides" },
];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navigate = useNavigate();

  function toggleDropdown(label: string) {
    setOpenDropdown((prev) => (prev === label ? null : label));
  }

  return (
    <header className="bg-white border-b border-[rgba(198,198,205,0.3)] sticky top-0 z-50">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0" onClick={() => setMobileOpen(false)}>
          <svg width="24" height="20" viewBox="0 0 27 22" fill="none">
            <rect width="27" height="22" rx="3" fill="black"/>
            <rect x="3" y="3" width="9" height="7" rx="1" fill="white" opacity="0.9"/>
            <rect x="3" y="12" width="21" height="3" rx="1" fill="white" opacity="0.5"/>
          </svg>
          <span className="font-semibold text-[18px] sm:text-[22px] tracking-[-0.5px] text-black">CardMatch India</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label} className="relative">
                <button
                  className="flex items-center gap-1.5 font-semibold text-[13px] xl:text-[14px] tracking-[0.7px] text-[#45464d] hover:text-black transition-colors"
                  onClick={() => toggleDropdown(link.label)}
                >
                  {link.label}
                  <svg width="9" height="6" viewBox="0 0 9 6" fill="none">
                    <path d="M0.5 0.5L4.5 4.5L8.5 0.5" stroke="#45464D" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </button>
                {openDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-lg border border-[#e5e7eb] py-2 w-52 z-50">
                    {link.dropdown.map(([label, href]) => (
                      <Link
                        key={label}
                        to={href}
                        onClick={() => setOpenDropdown(null)}
                        className="block px-4 py-2 text-[14px] text-[#45464d] hover:bg-[#f7f9fb] hover:text-black"
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.href!}
                className="font-semibold text-[13px] xl:text-[14px] tracking-[0.7px] text-[#45464d] hover:text-black transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTA */}
        <button
          onClick={() => navigate("/eligibility")}
          className="hidden lg:block bg-black text-white font-semibold text-[13px] xl:text-[14px] tracking-[0.7px] px-4 xl:px-5 py-2.5 xl:py-3 rounded-full hover:bg-[#222] transition-colors"
        >
          Find My Card
        </button>

        {/* Mobile: CTA + Hamburger */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={() => navigate("/eligibility")}
            className="bg-black text-white font-semibold text-[12px] tracking-[0.5px] px-3 py-2 rounded-full hover:bg-[#222] transition-colors"
          >
            Find My Card
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg hover:bg-[#f7f9fb] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 4L16 16M16 4L4 16" stroke="#191c1e" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="2" y="4.5" width="16" height="1.8" rx="0.9" fill="#191c1e"/>
                <rect x="2" y="9.1" width="16" height="1.8" rx="0.9" fill="#191c1e"/>
                <rect x="2" y="13.7" width="16" height="1.8" rx="0.9" fill="#191c1e"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#e5e7eb] pb-4">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label}>
                <button
                  className="w-full flex items-center justify-between px-5 py-3.5 font-semibold text-[14px] tracking-[0.5px] text-[#45464d] hover:bg-[#f7f9fb]"
                  onClick={() => setMobileExpanded((prev) => (prev === link.label ? null : link.label))}
                >
                  {link.label}
                  <svg
                    width="10" height="6" viewBox="0 0 9 6" fill="none"
                    className={`transition-transform ${mobileExpanded === link.label ? "rotate-180" : ""}`}
                  >
                    <path d="M0.5 0.5L4.5 4.5L8.5 0.5" stroke="#45464D" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </button>
                {mobileExpanded === link.label && (
                  <div className="bg-[#f7f9fb]">
                    {link.dropdown.map(([label, href]) => (
                      <Link
                        key={label}
                        to={href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-8 py-3 text-[14px] text-[#45464d] hover:text-black border-b border-[#eee] last:border-0"
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.href!}
                onClick={() => setMobileOpen(false)}
                className="block px-5 py-3.5 font-semibold text-[14px] tracking-[0.5px] text-[#45464d] hover:bg-[#f7f9fb]"
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      )}

      {/* Close dropdown on outside click */}
      {openDropdown && (
        <div className="fixed inset-0 z-40" onClick={() => setOpenDropdown(null)} />
      )}
    </header>
  );
}
