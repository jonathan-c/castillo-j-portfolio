export function TechTag({ label }: { label: string }) {
  return (
    <span className="font-mono text-[11px] font-medium bg-tag-bg text-tag-text px-2.5 py-0.5 rounded-[5px]">
      {label}
    </span>
  );
}
