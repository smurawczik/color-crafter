import { useMemo, useState } from "react";

export const useColorPreference = () => {
  const prefersDarkScheme = useMemo(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches,
    []
  );

  const [colorScheme, setColorScheme] = useState<"light" | "dark">(
    prefersDarkScheme ? "dark" : "light"
  );

  return {
    colorScheme,
    setColorScheme,
  };
};
