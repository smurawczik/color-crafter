import { useEffect, useMemo } from "react";

export const useColorScheme = () => {
  const prefersDarkScheme = useMemo(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches,
    []
  );

  useEffect(() => {
    if (prefersDarkScheme) {
      document.documentElement.style.setProperty("--primary-color", "#333");
      document.documentElement.style.setProperty(
        "--text-color",
        "rgba(255, 255, 255, 0.87)"
      );
    } else {
      document.documentElement.style.setProperty("--primary-color", "#eeeeee");
      document.documentElement.style.setProperty(
        "--text-color",
        "rgba(0, 0, 0, 0.87)"
      );
    }
  }, [prefersDarkScheme]);
};
