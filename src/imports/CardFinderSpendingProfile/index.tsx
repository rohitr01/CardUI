import svgPaths from "./svg-tmb4c5bqls";

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-black tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[40px]">CardMatch India</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#45464d] text-[14px] tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[20px]">Credit Cards</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[4.933px] relative shrink-0 w-[8px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="4.93333" preserveAspectRatio="none" viewBox="0 0 8 4.93333" width="8">
        <g id="Container">
          <path d={svgPaths.p5cc7680} fill="#45464D" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[8.01px] items-center relative shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#45464d] text-[14px] text-center tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[20px]">Tools</p>
      </div>
      <Container4 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Button />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[4.933px] relative shrink-0 w-[8px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="4.93333" preserveAspectRatio="none" viewBox="0 0 8 4.93333" width="8">
        <g id="Container">
          <path d={svgPaths.p5cc7680} fill="#45464D" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#45464d] text-[14px] text-center tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[20px]">Best Cards</p>
      </div>
      <Container6 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Button1 />
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#45464d] text-[14px] tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[20px]">Banks</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#45464d] text-[14px] tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[20px]">Guides</p>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Nav">
      <Link />
      <Container3 />
      <Container5 />
      <Link1 />
      <Link2 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Container">
      <Container2 />
      <Nav />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-black content-stretch flex flex-col items-center justify-center px-[24px] py-[12px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[20px]">Find My Card</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between max-w-[1280px] min-w-px relative" data-name="Container">
      <Container1 />
      <Button2 />
    </div>
  );
}

function HeaderTopNavBarNavSuppressedDueToLinearTaskOnlyLogo() {
  return (
    <div className="bg-[#f7f9fb] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] h-[80px] relative shrink-0 w-full z-[2]" data-name="Header - TopNavBar (Nav suppressed due to linear task, only logo)">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[40px] relative size-full">
          <Container />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#45464d] text-[14px] tracking-[0.7px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">STEP 2 OF 4</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#45464d] text-[14px] tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[20px]">40%</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Container9 />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#e0e3e5] h-[8px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-[#10b981] inset-[0_60%_0_0] rounded-[9999px]" data-name="Background" />
    </div>
  );
}

function ProgressBar() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Progress Bar">
      <Container7 />
      <Background />
    </div>
  );
}

function ProgressBarMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0 w-full" data-name="Progress Bar:margin">
      <ProgressBar />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-black text-center tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[40px]">Where do you spend the most?</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[576px] relative shrink-0 w-[576px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#45464d] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[28px] mb-0">Select the categories you frequently spend on to help us find the</p>
        <p className="leading-[28px]">perfect card rewards for your lifestyle.</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Header">
      <Heading />
      <Container10 />
    </div>
  );
}

function HeaderMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0 w-full" data-name="Header:margin">
      <Header />
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[25px] relative shrink-0 w-[24.977px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="25" preserveAspectRatio="none" viewBox="0 0 24.9769 25" width="24.9769">
        <g id="Container">
          <path d={svgPaths.paaa4980} fill="#45464D" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#f2f4f6] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background">
      <Container11 />
    </div>
  );
}

function Margin() {
  return (
    <div className="h-[60px] relative shrink-0 w-[48px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[12px] relative size-full">
        <Background1 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center tracking-[0.7px] whitespace-nowrap">
          <p className="leading-[20px]">Amazon</p>
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[18.667px] right-[9.01px] top-[9px] w-[16.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g id="Container" opacity="0">
          <path d={svgPaths.p6e98980} fill="#10B981" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#f7f9fb] relative rounded-[12px] shrink-0 w-full" data-name="Background+Border">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[17px] relative size-full">
          <Margin />
          <Container12 />
          <Container13 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#c6c6cd] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function LabelAmazon() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-center justify-self-stretch relative row-1 self-start shrink-0" data-name="Label - Amazon">
      <BackgroundBorder />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[25px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="25" preserveAspectRatio="none" viewBox="0 0 20 25" width="20">
        <g id="Container">
          <path d={svgPaths.p2910ff00} fill="#45464D" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#f2f4f6] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background">
      <Container14 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="h-[60px] relative shrink-0 w-[48px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[12px] relative size-full">
        <Background2 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center tracking-[0.7px] whitespace-nowrap">
          <p className="leading-[20px]">Flipkart</p>
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute h-[18.667px] right-[9px] top-[9px] w-[16.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g id="Container" opacity="0">
          <path d={svgPaths.p6e98980} fill="#10B981" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#f7f9fb] relative rounded-[12px] shrink-0 w-full" data-name="Background+Border">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[17px] relative size-full">
          <Margin1 />
          <Container15 />
          <Container16 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#c6c6cd] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function LabelFlipkart() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-center justify-self-stretch relative row-1 self-start shrink-0" data-name="Label - Flipkart">
      <BackgroundBorder1 />
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[25px] relative shrink-0 w-[18.75px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="25" preserveAspectRatio="none" viewBox="0 0 18.75 25" width="18.75">
        <g id="Container">
          <path d={svgPaths.p2ca75080} fill="#45464D" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#f2f4f6] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background">
      <Container17 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="h-[60px] relative shrink-0 w-[48px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[12px] relative size-full">
        <Background3 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center tracking-[0.7px] whitespace-nowrap">
          <p className="leading-[20px]">{`Dining & Delivery`}</p>
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute h-[18.667px] right-[9px] top-[9px] w-[16.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g id="Container" opacity="0">
          <path d={svgPaths.p6e98980} fill="#10B981" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#f7f9fb] relative rounded-[12px] shrink-0 w-full" data-name="Background+Border">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[17px] relative size-full">
          <Margin2 />
          <Container18 />
          <Container19 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#c6c6cd] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function LabelSwiggyZomatoDining() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-center justify-self-stretch relative row-1 self-start shrink-0" data-name="Label - Swiggy / Zomato (Dining)">
      <BackgroundBorder2 />
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[20.625px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="22.5" preserveAspectRatio="none" viewBox="0 0 20.625 22.5" width="20.625">
        <g id="Container">
          <path d={svgPaths.p3823adc0} fill="#45464D" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#f2f4f6] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background">
      <Container20 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="h-[60px] relative shrink-0 w-[48px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[12px] relative size-full">
        <Background4 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center tracking-[0.7px] whitespace-nowrap">
          <p className="leading-[20px]">Fuel</p>
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute h-[18.667px] right-[9.01px] top-[9px] w-[16.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g id="Container" opacity="0">
          <path d={svgPaths.p6e98980} fill="#10B981" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-[#f7f9fb] relative rounded-[12px] shrink-0 w-full" data-name="Background+Border">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[17px] relative size-full">
          <Margin3 />
          <Container21 />
          <Container22 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#c6c6cd] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function LabelFuel() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-center justify-self-stretch relative row-2 self-start shrink-0" data-name="Label - Fuel">
      <BackgroundBorder3 />
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="25" preserveAspectRatio="none" viewBox="0 0 25 25" width="25">
        <g id="Container">
          <path d={svgPaths.p30e04800} fill="#45464D" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#f2f4f6] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background">
      <Container23 />
    </div>
  );
}

function Margin4() {
  return (
    <div className="h-[60px] relative shrink-0 w-[48px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[12px] relative size-full">
        <Background5 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center tracking-[0.7px] whitespace-nowrap">
          <p className="leading-[20px]">Travel</p>
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute h-[18.667px] right-[9px] top-[9px] w-[16.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g id="Container" opacity="0">
          <path d={svgPaths.p6e98980} fill="#10B981" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="bg-[#f7f9fb] relative rounded-[12px] shrink-0 w-full" data-name="Background+Border">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[17px] relative size-full">
          <Margin4 />
          <Container24 />
          <Container25 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#c6c6cd] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function LabelTravel() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-center justify-self-stretch relative row-2 self-start shrink-0" data-name="Label - Travel">
      <BackgroundBorder4 />
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="25" preserveAspectRatio="none" viewBox="0 0 25 25" width="25">
        <g id="Container">
          <path d={svgPaths.p3d4ac2a0} fill="#45464D" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#f2f4f6] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background">
      <Container26 />
    </div>
  );
}

function Margin5() {
  return (
    <div className="h-[60px] relative shrink-0 w-[48px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[12px] relative size-full">
        <Background6 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center tracking-[0.7px] whitespace-nowrap">
          <p className="leading-[20px]">UPI Payments</p>
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute h-[18.667px] right-[9px] top-[9px] w-[16.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g id="Container" opacity="0">
          <path d={svgPaths.p6e98980} fill="#10B981" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder5() {
  return (
    <div className="bg-[#f7f9fb] relative rounded-[12px] shrink-0 w-full" data-name="Background+Border">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[17px] relative size-full">
          <Margin5 />
          <Container27 />
          <Container28 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#c6c6cd] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function LabelUpi() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-center justify-self-stretch relative row-2 self-start shrink-0" data-name="Label - UPI">
      <BackgroundBorder5 />
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[25px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="25" preserveAspectRatio="none" viewBox="0 0 20 25" width="20">
        <g id="Container">
          <path d={svgPaths.p17359280} fill="#45464D" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#f2f4f6] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background">
      <Container29 />
    </div>
  );
}

function Margin6() {
  return (
    <div className="h-[60px] relative shrink-0 w-[48px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[12px] relative size-full">
        <Background7 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center tracking-[0.7px] whitespace-nowrap">
          <p className="leading-[20px]">Utilities</p>
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute h-[18.667px] right-[9.01px] top-[9px] w-[16.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g id="Container" opacity="0">
          <path d={svgPaths.p6e98980} fill="#10B981" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder6() {
  return (
    <div className="bg-[#f7f9fb] relative rounded-[12px] shrink-0 w-full" data-name="Background+Border">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[17px] relative size-full">
          <Margin6 />
          <Container30 />
          <Container31 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#c6c6cd] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function LabelUtilities() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-center justify-self-stretch relative row-3 self-start shrink-0" data-name="Label - Utilities">
      <BackgroundBorder6 />
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[27.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="22.5" preserveAspectRatio="none" viewBox="0 0 27.5 22.5" width="27.5">
        <g id="Container">
          <path d={svgPaths.p3b9157b0} fill="#45464D" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-[#f2f4f6] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background">
      <Container32 />
    </div>
  );
}

function Margin7() {
  return (
    <div className="h-[60px] relative shrink-0 w-[48px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[12px] relative size-full">
        <Background8 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center tracking-[0.7px] whitespace-nowrap">
          <p className="leading-[20px]">Rent</p>
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute h-[18.667px] right-[9px] top-[9px] w-[16.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g id="Container" opacity="0">
          <path d={svgPaths.p6e98980} fill="#10B981" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder7() {
  return (
    <div className="bg-[#f7f9fb] relative rounded-[12px] shrink-0 w-full" data-name="Background+Border">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[17px] relative size-full">
          <Margin7 />
          <Container33 />
          <Container34 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#c6c6cd] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function LabelRent() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-center justify-self-stretch relative row-3 self-start shrink-0" data-name="Label - Rent">
      <BackgroundBorder7 />
    </div>
  );
}

function CategorySelectionGridForm() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[___114px_114px_114px] relative shrink-0 w-full" data-name="Category Selection Grid → Form">
      <LabelAmazon />
      <LabelFlipkart />
      <LabelSwiggyZomatoDining />
      <LabelFuel />
      <LabelTravel />
      <LabelUpi />
      <LabelUtilities />
      <LabelRent />
    </div>
  );
}

function CategorySelectionGridMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[64px] relative shrink-0 w-full" data-name="Category Selection Grid:margin">
      <CategorySelectionGridForm />
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#f7f9fb] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#c6c6cd] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[25px] py-[13px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center tracking-[0.7px] whitespace-nowrap">
          <p className="leading-[20px]">Back</p>
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-black relative rounded-[8px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[24px] py-[12px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.7px] whitespace-nowrap">
          <p className="leading-[20px]">Analyze My Spending</p>
        </div>
      </div>
    </div>
  );
}

function NavigationActions() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[33px] relative shrink-0 w-full" data-name="Navigation Actions">
      <div aria-hidden className="absolute border-[#c6c6cd] border-solid border-t inset-0 pointer-events-none" />
      <Button3 />
      <Button4 />
    </div>
  );
}

function MainContentCanvas() {
  return (
    <div className="max-w-[768px] relative shrink-0 w-full" data-name="Main Content Canvas">
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center max-w-[inherit] pb-[32px] pt-[24px] px-[40px] relative size-full">
          <ProgressBarMargin />
          <HeaderMargin />
          <CategorySelectionGridMargin />
          <NavigationActions />
        </div>
      </div>
    </div>
  );
}

function MainContentCanvasMargin() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Main Content Canvas:margin">
      <div className="content-stretch flex flex-col items-start px-[256px] relative size-full">
        <MainContentCanvas />
      </div>
    </div>
  );
}

export default function CardFinderSpendingProfile() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(247, 249, 251) 0%, rgb(247, 249, 251) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Card Finder | Spending Profile">
      <HeaderTopNavBarNavSuppressedDueToLinearTaskOnlyLogo />
      <MainContentCanvasMargin />
    </div>
  );
}