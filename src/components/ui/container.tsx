export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative z-10 h-full container mx-auto px-4">
      {children}
    </div>
  );
};
