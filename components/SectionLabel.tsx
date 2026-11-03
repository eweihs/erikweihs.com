export default function SectionLabel({
  children,
  className = "text-ink-faint",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`text-[13px] font-bold tracking-[0.16em] uppercase ${className}`}>{children}</p>
  );
}
