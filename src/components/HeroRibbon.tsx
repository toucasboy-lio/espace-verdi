/**
 * Bandeau horizontal en haut du hero (ex. pré-commercialisation).
 */
function HeroRibbon() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-0 z-20"
      aria-hidden
    >
      <div className="flex items-center justify-center bg-emerald-brand py-3 text-center shadow-xl sm:py-4">
        <span className="inline-flex items-center gap-2 px-4 text-sm font-bold uppercase tracking-wide text-white sm:text-base">
          <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-white" />
          Pré-commercialisation en cours
        </span>
      </div>
    </div>
  );
}

export default HeroRibbon;
