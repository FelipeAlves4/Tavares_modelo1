type LogoProps = {
  className?: string;
  onDarkBackground?: boolean;
};

const lightLogoSource = "/images/tavares-logo-transparente.png";
const darkLogoSource = "/images/tavares-logo-fundo-claro.png";

export function Logo({ className = "", onDarkBackground = false }: LogoProps) {
  return (
    <span className={`relative block h-16 w-16 ${className}`}>
      <img
        src={lightLogoSource}
        alt="TAVARES — Construindo o que permanece."
        className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-300 ${
          onDarkBackground ? "opacity-100" : "opacity-0"
        }`}
      />
      <img
        src={darkLogoSource}
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-300 ${
          onDarkBackground ? "opacity-0" : "opacity-100"
        }`}
      />
    </span>
  );
}
