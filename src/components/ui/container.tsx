export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative z-10 h-full container mx-auto p-4">{children}</div>
  );
};
