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
            : "h-11 w-auto shrink-0 object-contain sm:h-12"
        }
        priority={isNav}
      />
      <span
        className={
          isNav
            ? "text-lg font-extrabold tracking-tight text-[#080808] sm:text-xl"
            : `${fontHeading} text-3xl font-black text-[var(--aa-primary)] sm:text-4xl`
        }
      >
        Analytics Avenue
      </span>
    </span>
  );
}
