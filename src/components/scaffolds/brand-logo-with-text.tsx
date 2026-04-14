import Image from "next/image";

const fontHeading = "font-[family-name:var(--font-heading)]";

type BrandLogoWithTextProps = {
  variant: "nav" | "footer";
  className?: string;
};

/**
 * Logo mark from `/public/assets/logo/logo.svg` with “Analytics Avenue” label.
 */
export function BrandLogoWithText({ variant, className }: BrandLogoWithTextProps) {
  const isNav = variant === "nav";

  return (
    <span
      className={`inline-flex items-center ${isNav ? "gap-2" : "gap-3"} ${className ?? ""}`}
    >
      <Image
        src="/assets/logo/logo.svg"
        alt=""
        width={283}
        height={449}
        className={
          isNav
            ? "h-8 w-auto shrink-0 object-contain sm:h-9"
            : "h-12 w-auto shrink-0 object-contain sm:h-14"
        }
        priority={isNav}
      />
      <span
        className={
          isNav
            ? "text-lg font-extrabold tracking-tight sm:text-xl"
            : `${fontHeading} text-3xl font-black sm:text-4xl`
        }
      >
        <span className="text-[#1C3D76]">Analytics</span>
        <span className="text-[#080808]"> Avenue</span>
      </span>
    </span>
  );
}
