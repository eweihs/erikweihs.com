export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-[1180px] px-6 md:px-8">{children}</div>;
}
