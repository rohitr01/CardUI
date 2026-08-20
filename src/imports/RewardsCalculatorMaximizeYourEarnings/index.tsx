import svgPaths from "./svg-c9rgd1z1kd";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[48px] text-black tracking-[-0.96px] w-full">
        <p className="leading-[56px]">Max Your Earnings: Rewards Calculator</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[768px] relative shrink-0 w-[768px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#45464d] text-[18px] whitespace-nowrap">
        <p className="leading-[28px] mb-0">Adjust your monthly spending below to see real-time estimates of points and cashback</p>
        <p className="leading-[28px]">you could earn across premium Indian credit cards.</p>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Hero Section">
      <Heading />
      <Container />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[18px] relative shrink-0 w-[19px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 19 18" width="19">
        <g id="Container">
          <path d={svgPaths.p53fc80} fill="black" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container2 />
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">
          <p className="leading-[32px]">Monthly Spend Profile</p>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[15px] relative shrink-0 w-[11.25px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 11.25 15" width="11.25">
        <g id="Container">
          <path d={svgPaths.p30f20700} fill="#45464D" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Label">
      <Container4 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[14px] tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[20px]">{`Dining & Order-in`}</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">₹15,000</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Label />
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[61.69px] pr-[349.64px] relative size-full">
        <div className="bg-[#0f172a] relative rounded-[10px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0 size-[20px]" data-name="Background+Shadow" />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 right-0 top-[-7px]" data-name="Container">
      <Container7 />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#e2e8f0] h-[6px] relative rounded-[9999px] shrink-0 w-full" data-name="Input">
      <Container6 />
    </div>
  );
}

function SliderItemDining() {
  return (
    <div className="relative shrink-0 w-full" data-name="Slider Item: Dining">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container3 />
        <Input />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
        <g id="Container">
          <path d={svgPaths.p223a000} fill="#45464D" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Label">
      <Container9 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[14px] tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[20px]">{`Travel & Hotels`}</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">₹20,000</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Label1 />
      <Container10 />
    </div>
  );
}

function Container12() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[41.13px] pr-[370.2px] relative size-full">
        <div className="bg-[#0f172a] relative rounded-[10px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0 size-[20px]" data-name="Background+Shadow" />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 right-0 top-[-7px]" data-name="Container">
      <Container12 />
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[#e2e8f0] h-[6px] relative rounded-[9999px] shrink-0 w-full" data-name="Input">
      <Container11 />
    </div>
  );
}

function SliderItemTravel() {
  return (
    <div className="relative shrink-0 w-full" data-name="Slider Item: Travel">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container8 />
        <Input1 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[15px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 12 15" width="12">
        <g id="Container">
          <path d={svgPaths.p3b50bd18} fill="#45464D" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Label">
      <Container14 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[14px] tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[20px]">Online Shopping</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">₹25,000</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Label2 />
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[68.55px] pr-[342.78px] relative size-full">
        <div className="bg-[#0f172a] relative rounded-[10px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0 size-[20px]" data-name="Background+Shadow" />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 right-0 top-[-7px]" data-name="Container">
      <Container17 />
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-[#e2e8f0] h-[6px] relative rounded-[9999px] shrink-0 w-full" data-name="Input">
      <Container16 />
    </div>
  );
}

function SliderItemShopping() {
  return (
    <div className="relative shrink-0 w-full" data-name="Slider Item: Shopping">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container13 />
        <Input2 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[12.375px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.5" preserveAspectRatio="none" viewBox="0 0 12.375 13.5" width="12.375">
        <g id="Container">
          <path d={svgPaths.p2c392560} fill="#45464D" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Label">
      <Container19 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[14px] tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[20px]">Fuel</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">₹8,000</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Label3 />
      <Container20 />
    </div>
  );
}

function Container22() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[65.81px] pr-[345.52px] relative size-full">
        <div className="bg-[#0f172a] relative rounded-[10px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0 size-[20px]" data-name="Background+Shadow" />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 right-0 top-[-7px]" data-name="Container">
      <Container22 />
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-[#e2e8f0] h-[6px] relative rounded-[9999px] shrink-0 w-full" data-name="Input">
      <Container21 />
    </div>
  );
}

function SliderItemFuel() {
  return (
    <div className="relative shrink-0 w-full" data-name="Slider Item: Fuel">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container18 />
        <Input3 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[15px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 12 15" width="12">
        <g id="Container">
          <path d={svgPaths.pc50600} fill="#45464D" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Label">
      <Container24 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[14px] tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[20px]">{`Utilities & Bills`}</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">₹10,000</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Label4 />
      <Container25 />
    </div>
  );
}

function Container27() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[82.27px] pr-[329.06px] relative size-full">
        <div className="bg-[#0f172a] relative rounded-[10px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0 size-[20px]" data-name="Background+Shadow" />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 right-0 top-[-7px]" data-name="Container">
      <Container27 />
    </div>
  );
}

function Input4() {
  return (
    <div className="bg-[#e2e8f0] h-[6px] relative rounded-[9999px] shrink-0 w-full" data-name="Input">
      <Container26 />
    </div>
  );
}

function SliderItemUtilities() {
  return (
    <div className="relative shrink-0 w-full" data-name="Slider Item: Utilities">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container23 />
        <Input4 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#45464d] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Total Monthly Spend</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">
        <p className="leading-[32px]">₹78,000</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Container29 />
        <Container30 />
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[13px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#c6c6cd] border-solid border-t inset-0 pointer-events-none" />
      <Container28 />
    </div>
  );
}

function Margin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <HorizontalBorder />
      </div>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur() {
  return (
    <div className="backdrop-blur-[5px] bg-[rgba(255,255,255,0.7)] relative rounded-[12px] shrink-0 w-full" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div aria-hidden className="absolute border border-[rgba(226,232,240,0.8)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[25px] relative size-full">
        <Heading1 />
        <SliderItemDining />
        <SliderItemTravel />
        <SliderItemShopping />
        <SliderItemFuel />
        <SliderItemUtilities />
        <Margin />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Container">
          <path d={svgPaths.p1a406200} fill="white" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#10b981] content-stretch flex gap-[12px] items-center justify-center pl-[144.2px] pr-[144.22px] py-[24px] relative rounded-[12px] shrink-0" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_-0.02px_0_0] rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[20px]">Find My Perfect Card</p>
      </div>
      <Container31 />
    </div>
  );
}

function InputSectionSliders() {
  return (
    <div className="col-[1/span_5] content-stretch flex flex-col gap-[24px] items-start justify-self-stretch pb-[117px] relative row-1 self-start shrink-0" data-name="Input Section (Sliders)">
      <OverlayBorderShadowOverlayBlur />
      <Button />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">
        <p className="leading-[32px]">HDFC Diners Black</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Reward Points Focus</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Heading2 />
      <Container36 />
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between relative size-full">
        <Container35 />
        <div className="h-[26.25px] relative shrink-0 w-[20px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" height="26.25" preserveAspectRatio="none" viewBox="0 0 20 26.25" width="20">
            <path d={svgPaths.p3e394700} fill="#F59E0B" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] w-full">
        <p className="leading-[16px]">Est. Annual Value</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f59e0b] text-[40px] w-full">
        <p className="leading-[50px]">₹31,200</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[16px] w-full">
        <p className="leading-[24px]">~1,56,000 Points / Year</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container38 />
      <Container39 />
      <Container40 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pb-[24px] relative shrink-0 w-full" data-name="Container">
      <Container34 />
      <Container37 />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Effective Return Rate</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
        <p className="leading-[16px]">3.3%</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pr-[0.01px] relative size-full">
        <Container42 />
        <Container43 />
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#334155] h-[8px] relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute bg-[#f59e0b] h-[8px] left-0 right-[34%] rounded-[9999px] top-0" data-name="Background" />
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[2px] bg-[rgba(0,0,0,0.2)] relative rounded-[8px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[13px] relative size-full">
        <Container41 />
        <Background />
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-name="Margin">
      <OverlayBorderOverlayBlur />
    </div>
  );
}

function ResultCard1PointsFocused() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-[12px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" style={{ backgroundImage: "linear-gradient(137.99456845458778deg, rgb(30, 41, 59) 0%, rgb(15, 23, 42) 100%)" }} data-name="Result Card 1: Points Focused">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between p-[24px] relative size-full">
          <Container33 />
          <div className="absolute bg-white blur-[20px] opacity-5 right-[-40px] rounded-[9999px] size-[160px] top-[-40px]" data-name="Background+Blur" />
          <Margin1 />
        </div>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">
        <p className="leading-[32px] mb-0">SBI Cashback</p>
        <p className="leading-[32px]">Card</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#45464d] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Direct Cashback Focus</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Heading3 />
      <Container47 />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#d1fae5] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#047857] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">CASHBACK</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container46 />
      <Background1 />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#45464d] text-[12px] w-full">
        <p className="leading-[16px]">Est. Annual Value</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#10b981] text-[40px] w-full">
        <p className="leading-[50px]">₹28,500</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#45464d] text-[16px] w-full">
        <p className="leading-[24px]">Credited to statement</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container49 />
      <Container50 />
      <Container51 />
    </div>
  );
}

function Container44() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start pb-[24px] relative size-full">
        <Container45 />
        <Container48 />
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#45464d] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Effective Return Rate</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
        <p className="leading-[16px]">3.0%</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Container53 />
        <Container54 />
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#e0e3e5] h-[8px] relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute bg-[#10b981] h-[8px] left-0 right-[40%] rounded-[9999px] top-0" data-name="Background" />
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#f2f4f6] relative rounded-[8px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#c6c6cd] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[13px] relative size-full">
        <Container52 />
        <Background2 />
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <BackgroundBorder />
      </div>
    </div>
  );
}

function ResultCard2CashbackFocused() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Result Card 2: Cashback Focused">
      <div aria-hidden className="absolute border border-[#c6c6cd] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start justify-between p-[25px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Result Card 2: Cashback Focused:shadow" />
        <Container44 />
        <Margin2 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <ResultCard1PointsFocused />
      <ResultCard2CashbackFocused />
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[17px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 22 17" width="22">
        <g id="Container">
          <path d={svgPaths.paad5c90} fill="black" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.99px] items-center relative size-full">
        <Container55 />
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">
          <p className="leading-[32px]">Value Breakdown (Annual)</p>
        </div>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
        <g id="Container">
          <path d={svgPaths.p223a000} fill="#D97706" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#fef3c7] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background">
      <Container58 />
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[20px]">{`Travel & Hotels`}</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#45464d] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Highest ROI category</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container60 />
      <Container61 />
    </div>
  );
}

function Container57() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Background3 />
        <Container59 />
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-right whitespace-nowrap">
        <p className="leading-[24px]">₹12,400</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#45464d] text-[12px] text-right whitespace-nowrap">
        <p className="leading-[16px]">Value</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container63 />
        <Container64 />
      </div>
    </div>
  );
}

function BreakdownRow() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Breakdown Row">
      <div aria-hidden className="absolute border border-[#c6c6cd] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[13px] relative size-full">
          <Container57 />
          <Container62 />
        </div>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="h-[15px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 12 15" width="12">
        <g id="Container">
          <path d={svgPaths.p3b50bd18} fill="#2563EB" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#dbeafe] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background">
      <Container66 />
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[20px]">Online Shopping</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#45464d] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Accelerated points</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container68 />
      <Container69 />
    </div>
  );
}

function Container65() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Background4 />
        <Container67 />
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-right whitespace-nowrap">
        <p className="leading-[24px]">₹9,500</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#45464d] text-[12px] text-right whitespace-nowrap">
        <p className="leading-[16px]">Value</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container71 />
        <Container72 />
      </div>
    </div>
  );
}

function BreakdownRow1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Breakdown Row">
      <div aria-hidden className="absolute border border-[#c6c6cd] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[13px] pr-[13.01px] py-[13px] relative size-full">
          <Container65 />
          <Container70 />
        </div>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="h-[3px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="3" preserveAspectRatio="none" viewBox="0 0 12 3" width="12">
        <g id="Container">
          <path d={svgPaths.p299a2a80} fill="#45464D" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#eceef0] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background">
      <Container74 />
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[20px]">Other Categories</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#45464d] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Base reward rate</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container76 />
      <Container77 />
    </div>
  );
}

function Container73() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Background5 />
        <Container75 />
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-right whitespace-nowrap">
        <p className="leading-[24px]">₹9,300</p>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#45464d] text-[12px] text-right whitespace-nowrap">
        <p className="leading-[16px]">Value</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container79 />
        <Container80 />
      </div>
    </div>
  );
}

function BreakdownRow2() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Breakdown Row">
      <div aria-hidden className="absolute border border-[#c6c6cd] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[13px] pr-[13.01px] py-[13px] relative size-full">
          <Container73 />
          <Container78 />
        </div>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
        <BreakdownRow />
        <BreakdownRow1 />
        <BreakdownRow2 />
      </div>
    </div>
  );
}

function BreakdownPanel() {
  return (
    <div className="backdrop-blur-[5px] bg-[rgba(255,255,255,0.7)] relative rounded-[12px] shrink-0 w-full" data-name="Breakdown Panel">
      <div aria-hidden className="absolute border border-[rgba(226,232,240,0.8)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[25px] relative size-full">
        <Heading4 />
        <Container56 />
      </div>
    </div>
  );
}

function ResultsSection() {
  return (
    <div className="col-[6/span_7] content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Results Section">
      <Container32 />
      <BreakdownPanel />
    </div>
  );
}

function Container1() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_686px] relative shrink-0 w-full" data-name="Container">
      <InputSectionSliders />
      <ResultsSection />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-0 max-w-[1280px] px-[40px] py-[32px] right-0 top-[80px]" data-name="Main">
      <HeroSection />
      <Container1 />
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black w-full">
        <p className="leading-[32px]">CardMatch India</p>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#191c1e] text-[12px] w-full">
        <p className="leading-[16px] mb-0">© 2024 CardMatch India. Independent</p>
        <p className="leading-[16px] mb-0">marketplace. Financial services compliance</p>
        <p className="leading-[16px]">regulated.</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[12px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Container83 />
      <Container84 />
    </div>
  );
}

function Link() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch pb-[14px] relative row-1 self-start shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#45464d] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Cards by Bank</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch pb-[14px] relative row-1 self-start shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#45464d] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Cards by Category</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch pb-[14px] relative row-1 self-start shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#45464d] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Comparisons</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch pb-[14px] relative row-2 self-start shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#45464d] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Privacy Policy</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch pb-[14px] relative row-2 self-start shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#45464d] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Terms of Service</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch pb-[14px] relative row-2 self-start shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#45464d] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Contact Us</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="col-[2/span_3] gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[__38px_38px] justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
      <Link4 />
      <Link5 />
    </div>
  );
}

function Container81() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[_92px] max-w-[inherit] px-[40px] py-[32px] relative size-full">
        <Container82 />
        <Container85 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pt-px relative shrink-0 w-full" data-name="Footer">
      <div aria-hidden className="absolute border-[#c6c6cd] border-solid border-t inset-0 pointer-events-none" />
      <Container81 />
    </div>
  );
}

function FooterMargin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pt-[32px] right-0 top-[986px]" data-name="Footer:margin">
      <Footer />
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[48px] text-black tracking-[-0.96px] whitespace-nowrap">
        <p className="leading-[56px]">CardMatch India</p>
      </div>
    </div>
  );
}

function Container89() {
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

function Link6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#45464d] text-[14px] tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[20px]">Credit Cards</p>
      </div>
      <Container89 />
    </div>
  );
}

function Container90() {
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

function Link7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#45464d] text-[14px] tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[20px]">Tools</p>
      </div>
      <Container90 />
    </div>
  );
}

function Link8() {
  return (
    <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#45464d] text-[14px] tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[20px]">Best Cards</p>
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#45464d] text-[14px] tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[20px]">Banks</p>
      </div>
    </div>
  );
}

function Link10() {
  return (
    <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#45464d] text-[14px] tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[20px]">Guides</p>
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Container">
      <Link6 />
      <Link7 />
      <Link8 />
      <Link9 />
      <Link10 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-black content-stretch flex flex-col items-center justify-center px-[24px] py-[12px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[20px]">Find My Card</p>
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="h-[80px] max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between max-w-[inherit] px-[40px] relative size-full">
          <Container87 />
          <Container88 />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function TopNavBar() {
  return (
    <div className="absolute bg-[#f7f9fb] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-start left-0 right-0 top-0" data-name="TopNavBar">
      <Container86 />
    </div>
  );
}

export default function RewardsCalculatorMaximizeYourEarnings() {
  return (
    <div className="relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(247, 249, 251) 0%, rgb(247, 249, 251) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Rewards Calculator | Maximize Your Earnings">
      <Main />
      <FooterMargin />
      <TopNavBar />
    </div>
  );
}