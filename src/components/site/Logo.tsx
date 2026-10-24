// Símbolo: um "T" formado por viga (lintel) sobre pilar, com recorte de luz — inspirado em pórticos arquitetônicos.
export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true" fill="none">
      <rect x="0.75" y="0.75" width="38.5" height="38.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 9h26v5H23v17h-6V14H7z" fill="currentColor" />
      <path d="M23 14h3.5v17H23z" fill="currentColor" opacity="0.35" />
      <path d="M7 34h26" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark className="h-9 w-9 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="font-serif text-[1.35rem] tracking-[0.22em]">TAVARES</span>
        <span className="mt-1 text-[0.55rem] font-medium tracking-[0.62em]">CONSTRUÇÃO</span>
      </span>
    </span>
  );
}
