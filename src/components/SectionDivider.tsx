import dividerSymbol from "@/assets/section-divider-symbol.png";

const SectionDivider = ({ className = "mb-6" }: { className?: string }) => (
  <div className={`flex justify-center ${className}`}>
    <img src={dividerSymbol} alt="" className="h-5 w-40 object-contain" aria-hidden="true" />
  </div>
);

export default SectionDivider;
