import svgPaths from "./svg-nkqxyl8rvr";
import imgAb6AXuAlDsrwpn8Y4GnnOMkuxt2TrGxtLlPbRfIrw0KkE9Iy1A3N5SeWxCeFd7Ud8T4FPvQL2MqvuKgShKdAfdA0SkhW6Gb1PoePkYWz68Qf6HSbrfnJogkp1450D2Ck5SusFhi4VC4IwRdHUy32QhG5AKrvfZDhP5Ysn7ZlanfSCI0QnPsLpTqeJdysbU1KuSc4RdE9TYu6KPfTvjOjidrICwOxYsKcKsDlVtRiJarfNrOIzYw from "./b705d4bff2b4262ed7325264bb60f8c2220b0cb0.png";
import imgAb6AXuB30DCckpbFJusAh9Z5Jffmm6JD5RXyW0L8VyAsceDacvfIhvD5Zk9OFr3Zq4Rj8GStjnI0Vx2FtbPxVotwcjhBa9O9ZhwFnjmGWaj3KUs6DyGtlqq82IuYny2YlUoJdmpRqV6U88F82K7IokIOpAqeC63Nn7UafSXuUe85UKlF2QOY4CrQsiPzJq2CakpXYsI2CsdSdHupJhCoHp71DuOnCmOctqxMkBlk32Q8E3YOkIvLgGgWiw from "./b5c2aa8ef78642b7870972a0828018395fd2cecf.png";

function Container() {
  return (
    <div className="h-[36px] relative shrink-0 w-[32px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="36" preserveAspectRatio="none" viewBox="0 0 32 36" width="32">
        <g id="Container">
          <path d={svgPaths.p1f5fcf80} fill="#BA1A1A" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-full" data-name="Heading 1">
      <Container />
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[48px] text-black text-center tracking-[-0.96px] whitespace-nowrap">
        <p className="leading-[56px]">Card Roast</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#45464d] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[28px] mb-0">Select your current credit card to get a brutally honest, AI-powered critique. Find out if your</p>
        <p className="leading-[28px]">{`"premium" plastic is actually just expensive trash.`}</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[16px] w-full">
          <p className="leading-[24px]">Standard Bank Platinum Rewards</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pl-[33px] pr-[13px] py-[17px] relative size-full">
          <Container3 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#76777d] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p8a35e00} fill="#76777D" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-center left-0 pl-[12px] top-[8px]" data-name="Container">
      <Container5 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[576px] pt-[8px] relative shrink-0 w-[576px]" data-name="Container">
      <Input />
      <Container4 />
    </div>
  );
}

function HeroSearchSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center max-w-[768px] relative shrink-0 w-[768px]" data-name="Hero / Search Section">
      <Heading />
      <Container1 />
      <Container2 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#76777d] text-[14px] text-center tracking-[1.4px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">THE VICTIM</p>
      </div>
    </div>
  );
}

function Heading3Margin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[147.98px] pb-[12px] top-[25px]" data-name="Heading 3:margin">
      <Heading2 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[12.667px] relative shrink-0 w-[14.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="12.6667" preserveAspectRatio="none" viewBox="0 0 14.6667 12.6667" width="14.6667">
        <g id="Container">
          <path d={svgPaths.pc531a80} fill="#BA1A1A" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#ffdad6] content-stretch flex gap-[8px] items-center left-1/2 px-[12px] py-[8px] rounded-[9999px] top-[calc(50%+131.38px)]" data-name="Background">
      <Container6 />
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ba1a1a] text-[14px] text-center tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[20px]">Sub-Optimal ROI Detected</p>
      </div>
    </div>
  );
}

function Ab6AXuAlDsrwpn8Y4GnnOMkuxt2TrGxtLlPbRfIrw0KkE9Iy1A3N5SeWxCeFd7Ud8T4FPvQL2MqvuKgShKdAfdA0SkhW6Gb1PoePkYWz68Qf6HSbrfnJogkp1450D2Ck5SusFhi4VC4IwRdHUy32QhG5AKrvfZDhP5Ysn7ZlanfSCI0QnPsLpTqeJdysbU1KuSc4RdE9TYu6KPfTvjOjidrICwOxYsKcKsDlVtRiJarfNrOIzYw() {
  return (
    <div className="absolute inset-[0_0_0.02px_0] mix-blend-multiply opacity-80" data-name="AB6AXuAlDsrwpn8y4GnnOMkuxt2trGxtLLPbRfIRW0KkE9IY1A3n5SEWxCeFD7ud8T4FPvQ-l2_Mqvu_KgShKd-afdA0skhW6Gb1POEPkY_Wz68Qf6hSbrfnJogkp1450_d2Ck_5susFHI4vC4iwRdHUy32qhG5aKrvfZDhP-5Ysn7ZlanfS_cI0qnPSLp-tqeJdysbU1KUSc4rdE9tYu6kPfTVJOjidrICwOXYs_KcKsDlVtRiJarfNrOIzYw">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-8.07%] max-w-none top-0 w-[116.14%]" src={imgAb6AXuAlDsrwpn8Y4GnnOMkuxt2TrGxtLlPbRfIrw0KkE9Iy1A3N5SeWxCeFd7Ud8T4FPvQL2MqvuKgShKdAfdA0SkhW6Gb1PoePkYWz68Qf6HSbrfnJogkp1450D2Ck5SusFhi4VC4IwRdHUy32QhG5AKrvfZDhP5Ysn7ZlanfSCI0QnPsLpTqeJdysbU1KuSc4RdE9TYu6KPfTvjOjidrICwOxYsKcKsDlVtRiJarfNrOIzYw} />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#45464d] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Standard Bank</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">Platinum Rewards</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bottom-[12.02px] content-stretch flex flex-col items-start left-[12px]" data-name="Container">
      <Container8 />
      <Container9 />
    </div>
  );
}

function MockCardImagePlaceholder() {
  return (
    <div className="aspect-[1.5800000429153442/1] overflow-clip relative rounded-[8px] shadow-[0px_4px_20px_0px_rgba(15,23,42,0.05)] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(32.33018315035464deg, rgb(224, 227, 229) 0%, rgb(236, 238, 240) 100%)" }} data-name="Mock Card Image Placeholder">
      <Ab6AXuAlDsrwpn8Y4GnnOMkuxt2TrGxtLlPbRfIrw0KkE9Iy1A3N5SeWxCeFd7Ud8T4FPvQL2MqvuKgShKdAfdA0SkhW6Gb1PoePkYWz68Qf6HSbrfnJogkp1450D2Ck5SusFhi4VC4IwRdHUy32QhG5AKrvfZDhP5Ysn7ZlanfSCI0QnPsLpTqeJdysbU1KuSc4RdE9TYu6KPfTvjOjidrICwOxYsKcKsDlVtRiJarfNrOIzYw />
      <Container7 />
    </div>
  );
}

function MockCardImagePlaceholderMargin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[25px] pb-[16px] right-[25px] top-[57px]" data-name="Mock Card Image Placeholder:margin">
      <MockCardImagePlaceholder />
    </div>
  );
}

function TheSelectedCardLeftColumn() {
  return (
    <div className="bg-white col-[1/span_4] h-[348.75px] justify-self-stretch relative rounded-[12px] row-1 shrink-0" data-name="The Selected Card (Left Column)">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Heading3Margin />
        <Background />
        <div className="absolute bg-[#ba1a1a] opacity-5 right-px rounded-bl-[9999px] size-[128px] top-px" data-name="Background" />
        <MockCardImagePlaceholderMargin />
      </div>
      <div aria-hidden className="absolute border border-[#c6c6cd] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute flex h-[246.782px] items-center justify-center right-[-60.36px] top-[-58.52px] w-[240.119px]">
      <div className="flex-none rotate-12">
        <div className="content-stretch flex flex-col items-start opacity-10 pl-[4.069px] pt-[9.585px] relative" data-name="Container">
          <div className="[word-break:break-word] flex flex-col font-['Material_Symbols_Outlined:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ba1a1a] text-[200px] whitespace-nowrap">
            <p className="leading-[200px]">local_fire_department</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-black tracking-[-0.32px] w-full">
        <p className="leading-[40px]">The Verdict</p>
      </div>
    </div>
  );
}

function VerticalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="VerticalBorder">
      <div aria-hidden className="absolute border-[#ba1a1a] border-l-4 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pl-[20px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Sans:Italic',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#45464d] text-[18px] whitespace-nowrap">
          <p className="leading-[28px] mb-0">{`"Ah, the 'Platinum Rewards' card. The perfect plastic for those who enjoy the illusion of`}</p>
          <p className="leading-[28px]">{`luxury while earning points that barely cover a cup of chai."`}</p>
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative" data-name="Container">
      <div className="relative shrink-0 size-[14px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
          <path d={svgPaths.p15494480} fill="#BA1A1A" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="h-full relative shrink-0" data-name="Margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pt-[4px] relative size-full">
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[20px]">Lounge Access Illusion</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#45464d] text-[12px] whitespace-nowrap">
        <p className="leading-[16px] mb-0">Gets you into lounges that serve cold samosas and have a</p>
        <p className="leading-[16px]">45-minute waiting line.</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="Container">
      <Heading3 />
      <Container15 />
    </div>
  );
}

function Container12() {
  return (
    <div className="col-1 content-stretch flex gap-[11.99px] h-[52px] items-start justify-self-stretch relative row-1 shrink-0" data-name="Container">
      <Margin />
      <Container14 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative" data-name="Container">
      <div className="relative shrink-0 size-[14px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
          <path d={svgPaths.p15494480} fill="#BA1A1A" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="h-full relative shrink-0" data-name="Margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pt-[4px] relative size-full">
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[20px]">Diluted Reward Points</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#45464d] text-[12px] whitespace-nowrap">
        <p className="leading-[16px] mb-0">You need to spend roughly the GDP of a small nation to afford</p>
        <p className="leading-[16px]">a domestic flight ticket.</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="Container">
      <Heading4 />
      <Container19 />
    </div>
  );
}

function Container16() {
  return (
    <div className="col-2 content-stretch flex gap-[11.99px] h-[52px] items-start justify-self-stretch relative row-1 shrink-0" data-name="Container">
      <Margin1 />
      <Container18 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative" data-name="Container">
      <div className="relative shrink-0 size-[14px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
          <path d={svgPaths.p15494480} fill="#BA1A1A" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="h-full relative shrink-0" data-name="Margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pt-[4px] relative size-full">
          <Container21 />
        </div>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[20px]">Hidden Forex Markups</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#45464d] text-[12px] whitespace-nowrap">
        <p className="leading-[16px] mb-0">3.5% markup means your international trip is quietly funding</p>
        <p className="leading-[16px]">{`the bank's next yacht.`}</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="Container">
      <Heading5 />
      <Container23 />
    </div>
  );
}

function Container20() {
  return (
    <div className="col-1 content-stretch flex gap-[11.99px] h-[52px] items-start justify-self-stretch relative row-2 shrink-0" data-name="Container">
      <Margin2 />
      <Container22 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative" data-name="Container">
      <div className="relative shrink-0 size-[14px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
          <path d={svgPaths.p15494480} fill="#BA1A1A" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="h-full relative shrink-0" data-name="Margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pt-[4px] relative size-full">
          <Container25 />
        </div>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[20px]">Annual Fee Trap</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#45464d] text-[12px] whitespace-nowrap">
        <p className="leading-[16px] mb-0">{`Paying ₹2,999 annually for 'privileges' you can get on lifetime`}</p>
        <p className="leading-[16px]">free cards.</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="Container">
      <Heading6 />
      <Container27 />
    </div>
  );
}

function Container24() {
  return (
    <div className="col-2 content-stretch flex gap-[11.99px] h-[52px] items-start justify-self-stretch relative row-2 shrink-0" data-name="Container">
      <Margin3 />
      <Container26 />
    </div>
  );
}

function Container11() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__52px_52px] pt-[8px] relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container16 />
      <Container20 />
      <Container24 />
    </div>
  );
}

function TheVerdictRightColumn() {
  return (
    <div className="bg-[#f2f4f6] col-[5/span_8] justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="The Verdict (Right Column)">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start pb-[68.75px] pt-[24px] px-[24px] relative size-full">
          <Container10 />
          <Heading1 />
          <VerticalBorder />
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Container">
          <path d={svgPaths.p7b061c0} fill="#006C49" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-black tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[40px]">The Better Alternative</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Container29 />
      <Heading7 />
    </div>
  );
}

function Ab6AXuB30DCckpbFJusAh9Z5Jffmm6JD5RXyW0L8VyAsceDacvfIhvD5Zk9OFr3Zq4Rj8GStjnI0Vx2FtbPxVotwcjhBa9O9ZhwFnjmGWaj3KUs6DyGtlqq82IuYny2YlUoJdmpRqV6U88F82K7IokIOpAqeC63Nn7UafSXuUe85UKlF2QOY4CrQsiPzJq2CakpXYsI2CsdSdHupJhCoHp71DuOnCmOctqxMkBlk32Q8E3YOkIvLgGgWiw() {
  return (
    <div className="absolute inset-0 opacity-90" data-name="AB6AXuB30dCckpbFJusAH9z5JFFMM6jD5RXyW0L8VyAsceDACVFIhvD5zk9oFr-3Zq4Rj8GStjnI0Vx2ftbPxVOTWCJHBa9O9zhwFnjmGWaj3kUS6DyGTLQQ82IuYny2ylUoJdmpRqV6U88f82K7IokIOpAqeC63NN7uafSXuUE85uKlF_2qO_y4cr-QsiPZJq2cakpXYsI2csdSDHupJHCoHP71DuONCmOctqxMkBlk32q8e3yOKIvLgGGWiw">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-8.07%] max-w-none top-0 w-[116.14%]" src={imgAb6AXuB30DCckpbFJusAh9Z5Jffmm6JD5RXyW0L8VyAsceDacvfIhvD5Zk9OFr3Zq4Rj8GStjnI0Vx2FtbPxVotwcjhBa9O9ZhwFnjmGWaj3KUs6DyGtlqq82IuYny2YlUoJdmpRqV6U88F82K7IokIOpAqeC63Nn7UafSXuUe85UKlF2QOY4CrQsiPzJq2CakpXYsI2CsdSdHupJhCoHp71DuOnCmOctqxMkBlk32Q8E3YOkIvLgGgWiw} />
      </div>
    </div>
  );
}

function PremiumTagOverlay() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(245,158,11,0.8)] content-stretch flex flex-col items-start px-[8px] py-[2px] right-[12px] rounded-[2px] top-[12px]" data-name="Premium Tag Overlay">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">ELITE</p>
      </div>
    </div>
  );
}

function CardVisual() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[181.95px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-[287.5px]" data-name="Card Visual">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(32.328474172517936deg, rgb(15, 23, 42) 0%, rgb(51, 65, 85) 100%)" }} data-name="Simulating plastic/metal texture with CSS gradient if image fails, but using image as requested" />
        <Ab6AXuB30DCckpbFJusAh9Z5Jffmm6JD5RXyW0L8VyAsceDacvfIhvD5Zk9OFr3Zq4Rj8GStjnI0Vx2FtbPxVotwcjhBa9O9ZhwFnjmGWaj3KUs6DyGtlqq82IuYny2YlUoJdmpRqV6U88F82K7IokIOpAqeC63Nn7UafSXuUe85UKlF2QOY4CrQsiPzJq2CakpXYsI2CsdSdHupJhCoHp71DuOnCmOctqxMkBlk32Q8E3YOkIvLgGgWiw />
        <PremiumTagOverlay />
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">
        <p className="leading-[32px]">CardMatch Elite Select</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#45464d] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">The definitive card for maximizing travel and dining rewards.</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Heading8 />
      <Container32 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <Container31 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#76777d] text-[12px] w-full">
        <p className="leading-[16px]">Annual Fee</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="[word-break:break-word] h-[20px] leading-[0] not-italic relative shrink-0 tracking-[0.7px] w-full whitespace-nowrap" data-name="Paragraph">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Liberation_Sans:Bold',sans-serif] justify-center left-0 text-[14px] text-black top-[10px]">
        <p className="leading-[20px]">{`₹1,499 `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Liberation_Sans:Regular',sans-serif] justify-center left-[58.81px] text-[#006c49] text-[12px] top-[11px]">
        <p className="leading-[16px]">(Waived on ₹3L spend)</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 w-[268.83px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container34 />
        <Paragraph />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#76777d] text-[12px] w-full">
        <p className="leading-[16px]">Reward Rate</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="[word-break:break-word] h-[20px] leading-[0] not-italic relative shrink-0 tracking-[0.7px] w-full whitespace-nowrap" data-name="Paragraph">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Liberation_Sans:Bold',sans-serif] justify-center left-0 text-[14px] text-black top-[10px]">
        <p className="leading-[20px]">{`Upto 5% `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Liberation_Sans:Regular',sans-serif] justify-center left-[65.5px] text-[#45464d] text-[12px] top-[11px]">
        <p className="leading-[16px]">on Travel</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0 w-[268.83px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container36 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#76777d] text-[12px] w-full">
        <p className="leading-[16px]">Credit Score Req.</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="[word-break:break-word] h-[20px] leading-[0] not-italic relative shrink-0 tracking-[0.7px] w-full whitespace-nowrap" data-name="Paragraph">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Liberation_Sans:Bold',sans-serif] justify-center left-0 text-[14px] text-black top-[10px]">
        <p className="leading-[20px]">{`750+ `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Liberation_Sans:Regular',sans-serif] justify-center left-[46.93px] text-[#006c49] text-[12px] top-[11px]">
        <p className="leading-[16px]">Excellent</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="relative shrink-0 w-[268.84px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container38 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function StatsRow() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center py-[17px] relative shrink-0 w-full" data-name="Stats Row">
      <div aria-hidden className="absolute border-[#c6c6cd] border-b border-solid border-t inset-0 pointer-events-none" />
      <Container33 />
      <Container35 />
      <Container37 />
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[10.587px] relative shrink-0 w-[12.063px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="10.5875" preserveAspectRatio="none" viewBox="0 0 12.063 10.5875" width="12.063">
        <g id="Container">
          <path d={svgPaths.p19d0e280} fill="#00714D" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#6cf8bb] relative rounded-[9999px] self-stretch shrink-0" data-name="Background">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
          <Container40 />
          <div className="[word-break:break-word] flex flex-col font-['Liberation_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00714d] text-[12px] whitespace-nowrap">
            <p className="leading-[16px]">Unlimited Lounge</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="relative shrink-0 size-[12.833px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="12.8333" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333" width="12.8333">
        <g id="Container">
          <path d={svgPaths.p2a4a17c0} fill="#00714D" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#6cf8bb] relative rounded-[9999px] self-stretch shrink-0" data-name="Background">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
          <Container41 />
          <div className="[word-break:break-word] flex flex-col font-['Liberation_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00714d] text-[12px] whitespace-nowrap">
            <p className="leading-[16px]">Zero Forex Markup</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Container">
      <Background1 />
      <Background2 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#45464d] text-[14px] tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[20px]">Compare</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Label">
      <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Input">
        <div aria-hidden className="absolute border border-[#76777d] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <Container43 />
    </div>
  );
}

function Container44() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Container">
          <path d={svgPaths.p304eaa0} fill="white" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#006c49] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[8px] items-center justify-center px-[24px] py-[12px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[20px]">Switch and Save ₹8,500</p>
      </div>
      <Container44 />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Label />
      <Button />
    </div>
  );
}

function ActionArea() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Action Area">
      <Container39 />
      <Container42 />
    </div>
  );
}

function CardDetailsHighDensityStats() {
  return (
    <div className="relative shrink-0 w-[838.5px]" data-name="Card Details & High-Density Stats">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Container30 />
        <StatsRow />
        <ActionArea />
      </div>
    </div>
  );
}

function PremiumCardModule() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Premium Card Module">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[25px] relative size-full">
          <div className="absolute inset-px opacity-20" style={{ backgroundImage: "linear-gradient(168.2126137486702deg, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 50%, rgb(108, 248, 187) 100%)" }} data-name="Decorative Premium Gradient Overlay on the module background" />
          <CardVisual />
          <CardDetailsHighDensityStats />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#c6c6cd] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_20px_0px_rgba(15,23,42,0.05)]" />
    </div>
  );
}

function TheBetterAlternativeFullWidthBottom() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="The Better Alternative (Full Width Bottom)">
      <Container28 />
      <PremiumCardModule />
    </div>
  );
}

function TheBetterAlternativeFullWidthBottomMargin() {
  return (
    <div className="col-[1/span_12] content-stretch flex flex-col items-start justify-self-stretch pt-[32px] relative row-2 self-start shrink-0" data-name="The Better Alternative (Full Width Bottom):margin">
      <TheBetterAlternativeFullWidthBottom />
    </div>
  );
}

function SectionBentoGridLayoutForResults() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[__348.75px_348px] relative shrink-0 w-full" data-name="Section - Bento Grid Layout for Results">
      <TheSelectedCardLeftColumn />
      <TheVerdictRightColumn />
      <TheBetterAlternativeFullWidthBottomMargin />
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-center left-0 max-w-[1280px] pb-[64px] pt-[32px] px-[40px] right-0 top-[80px]" data-name="Main Content">
      <HeroSearchSection />
      <SectionBentoGridLayoutForResults />
    </div>
  );
}

function Container46() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">
          <p className="leading-[32px]">CardMatch India</p>
        </div>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Liberation_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#45464d] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">© 2024 CardMatch India. Independent marketplace. Financial services compliance regulated.</p>
        </div>
      </div>
    </div>
  );
}

function BrandCopyright() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[25px] relative shrink-0 w-full" data-name="Brand / Copyright">
      <div aria-hidden className="absolute border-[#c6c6cd] border-b border-solid inset-0 pointer-events-none" />
      <Container46 />
      <Container47 />
    </div>
  );
}

function BrandCopyrightMargin() {
  return (
    <div className="col-[1/span_4] content-stretch flex flex-col items-start justify-self-stretch pb-[32px] relative row-1 self-start shrink-0" data-name="Brand / Copyright:margin">
      <BrandCopyright />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#45464d] text-[16px] w-full">
        <p className="leading-[24px]">Cards by Bank</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#45464d] text-[16px] w-full">
        <p className="leading-[24px]">Cards by Category</p>
      </div>
    </div>
  );
}

function LinkMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-name="Link:margin">
      <Link1 />
    </div>
  );
}

function LinksColumn() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-2 self-start shrink-0" data-name="Links Column 1">
      <Link />
      <LinkMargin />
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#45464d] text-[16px] w-full">
        <p className="leading-[24px]">Comparisons</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#45464d] text-[16px] w-full">
        <p className="leading-[24px]">Privacy Policy</p>
      </div>
    </div>
  );
}

function LinkMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-name="Link:margin">
      <Link3 />
    </div>
  );
}

function LinksColumn1() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-2 self-start shrink-0" data-name="Links Column 2">
      <Link2 />
      <LinkMargin1 />
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#45464d] text-[16px] w-full">
        <p className="leading-[24px]">Terms of Service</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#45464d] text-[16px] w-full">
        <p className="leading-[24px]">Contact Us</p>
      </div>
    </div>
  );
}

function LinkMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-name="Link:margin">
      <Link5 />
    </div>
  );
}

function LinksColumn2() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-2 self-start shrink-0" data-name="Links Column 3">
      <Link4 />
      <LinkMargin2 />
    </div>
  );
}

function Container45() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[__89px_60px] max-w-[inherit] px-[40px] py-[32px] relative size-full">
        <BrandCopyrightMargin />
        <LinksColumn />
        <LinksColumn1 />
        <LinksColumn2 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-white bottom-0 content-stretch flex flex-col items-start left-0 pt-px right-0" data-name="Footer">
      <div aria-hidden className="absolute border-[#c6c6cd] border-solid border-t inset-0 pointer-events-none" />
      <Container45 />
    </div>
  );
}

function LinkBrandLogo() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link - Brand Logo">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[48px] text-black tracking-[-0.96px] whitespace-nowrap">
        <p className="leading-[56px]">CardMatch India</p>
      </div>
    </div>
  );
}

function LinkMargin3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[208.22px] pl-[24px] top-[12px]" data-name="Link:margin">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#45464d] text-[14px] tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[20px]">Best Cards</p>
      </div>
    </div>
  );
}

function LinkMargin4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[313.14px] pl-[24px] top-[12px]" data-name="Link:margin">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#45464d] text-[14px] tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[20px]">Banks</p>
      </div>
    </div>
  );
}

function LinkMargin5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[382.68px] pl-[24px] top-[12px]" data-name="Link:margin">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#45464d] text-[14px] tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[20px]">Guides</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="bg-black content-stretch flex flex-col items-start px-[24px] py-[12px] relative rounded-[8px] shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[20px]">Find My Card</p>
      </div>
    </div>
  );
}

function LinkMargin6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[458.33px] pl-[24px] top-0" data-name="Link:margin">
      <Link6 />
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[5.55px] relative shrink-0 w-[9px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="5.55" preserveAspectRatio="none" viewBox="0 0 9 5.55" width="9">
        <g id="Container">
          <path d={svgPaths.p4ab6c80} fill="#45464D" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex gap-[8.01px] items-center relative shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#45464d] text-[14px] text-center tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[20px]">Credit Cards</p>
      </div>
      <Container50 />
    </div>
  );
}

function Container49() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 top-1/2" data-name="Container">
      <Button1 />
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[5.55px] relative shrink-0 w-[9px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="5.55" preserveAspectRatio="none" viewBox="0 0 9 5.55" width="9">
        <g id="Container">
          <path d={svgPaths.p4ab6c80} fill="#45464D" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex gap-[7.99px] items-center relative shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#45464d] text-[14px] text-center tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[20px]">Tools</p>
      </div>
      <Container51 />
    </div>
  );
}

function Margin4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[118.43px] pl-[24px] top-[12px]" data-name="Margin">
      <Button2 />
    </div>
  );
}

function NavigationLinksHiddenOnMobileFlexOnMd() {
  return (
    <div className="h-[44px] relative shrink-0 w-[627.41px]" data-name="Navigation Links (Hidden on Mobile, flex on md+)">
      <LinkMargin3 />
      <LinkMargin4 />
      <LinkMargin5 />
      <LinkMargin6 />
      <Container49 />
      <Margin4 />
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[80px] max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between max-w-[inherit] px-[40px] relative size-full">
          <LinkBrandLogo />
          <NavigationLinksHiddenOnMobileFlexOnMd />
        </div>
      </div>
    </div>
  );
}

function HeaderTopNavBar() {
  return (
    <div className="absolute bg-[#f7f9fb] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-start left-0 right-0 top-0" data-name="Header - TopNavBar">
      <Container48 />
    </div>
  );
}

export default function CardRoastBrutallyHonestCardCritiques() {
  return (
    <div className="relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(247, 249, 251) 0%, rgb(247, 249, 251) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Card Roast | Brutally Honest Card Critiques">
      <MainContent />
      <Footer />
      <HeaderTopNavBar />
    </div>
  );
}