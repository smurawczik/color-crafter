export function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6 whitespace-nowrap">
      {children}
    </p>
  );
}
