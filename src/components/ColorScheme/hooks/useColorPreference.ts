import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleTheme } from "@/store/theme/theme.slice";
import { useEffect } from "react";

export const useColorPreference = () => {
  const dispatch = useAppDispatch();
  const themeType = useAppSelector((state) => state.theme.type);

  const toggleThemeColor = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    if (themeType === "dark") {
      document.body.classList.add("dark");
      return;
    } else {
      document.body.classList.remove("dark");
    }
  }, [themeType]);

  return {
    toggleThemeColor,
  };
};
