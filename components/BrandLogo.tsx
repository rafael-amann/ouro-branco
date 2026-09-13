import Image from "next/image";

export default function BrandLogo({ className = "", preload = false, dark = false }: { className?: string; preload?: boolean; dark?: boolean }) {
  return (
    <span className={`relative block aspect-[1000/470] shrink-0 overflow-hidden ${dark ? "mix-blend-screen" : ""} ${className}`}>
      <svg width="0" height="0" aria-hidden="true" className="absolute pointer-events-none">
        <defs>
          <filter id={dark ? "brand-weight-dark" : "brand-weight-light"} colorInterpolationFilters="sRGB">
            <feMorphology operator="erode" radius="0.25" />
            {!dark && <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  -2 -2 -2 0 6" />}
          </filter>
        </defs>
      </svg>
      <Image
        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/logo-ouro-branco-integrada.png`}
        alt="Gesso Ouro Branco"
        width={1519}
        height={1035}
        preload={preload}
        sizes="360px"
        className="absolute max-w-none"
        style={{ width: "115.1%", height: "auto", left: "-8.3%", top: "-31%", filter: dark ? "url(#brand-weight-dark) invert(1) grayscale(1) sepia(1) saturate(1.8)" : "url(#brand-weight-light)" }}
      />
    </span>
  );
}