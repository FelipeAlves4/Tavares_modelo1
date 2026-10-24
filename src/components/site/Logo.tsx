const logoSource = "/images/tavares-logo-transparente.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src={logoSource}
      alt="TAVARES — Construindo o que permanece."
      className={`h-16 w-auto object-contain ${className}`}
    />
  );
}
