export function SecondaryCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-surface border border-border rounded-[10px] p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:border-accent/40 transition-colors">
      <h3 className="font-display text-[17px] font-extrabold mb-1">{title}</h3>
      <p className="text-[13px] text-muted leading-snug">{description}</p>
    </div>
  );
}
