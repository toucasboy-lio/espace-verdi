interface KeyFigureProps {
  /** Valeur chiffrée mise en avant */
  value: string;
  /** Libellé descriptif */
  label: string;
  /** Couleur d'accent */
  accent?: 'emerald' | 'navy';
}

/**
 * Chiffre clé (simulateur, statistiques programme).
 */
function KeyFigure({ value, label, accent = 'emerald' }: KeyFigureProps) {
  const valueColor = accent === 'emerald' ? 'text-emerald-brand' : 'text-navy';

  return (
    <div className="rounded-xl bg-white p-6 text-center shadow-sm">
      <p className={`text-3xl font-bold md:text-4xl ${valueColor}`}>{value}</p>
      <p className="mt-2 text-sm text-slate-600">{label}</p>
    </div>
  );
}

export default KeyFigure;
