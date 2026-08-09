/**
 * Sceau circulaire « prix direct promoteur » sur le hero.
 */
function PromoterPriceStamp() {
  return (
    <div
      className="pointer-events-none absolute bottom-8 right-4 z-20 sm:right-8 md:bottom-12 md:right-12"
      aria-label="Prix direct promoteur"
    >
      <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full border-[3px] border-white/80 bg-emerald-brand text-center text-white shadow-2xl ring-4 ring-emerald-brand/30 sm:h-32 sm:w-32">
        <span className="text-[10px] font-semibold uppercase leading-tight tracking-[0.2em] sm:text-xs">
          Prix direct
        </span>
        <span className="mt-0.5 text-lg font-bold leading-none sm:text-xl">
          Promoteur
        </span>
        <span className="mt-1.5 text-[9px] font-medium uppercase tracking-wider text-emerald-100 sm:text-[10px]">
          Sans commission
        </span>
      </div>
    </div>
  );
}

export default PromoterPriceStamp;
