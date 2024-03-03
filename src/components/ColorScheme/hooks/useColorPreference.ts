import { useAppDispatch } from "@/store/hooks";
import { toggleTheme } from "@/store/theme/theme.slice";

export const useColorPreference = () => {
  const dispatch = useAppDispatch();

  const toggleThemeColor = () => {
    document.body.classList.toggle("dark");
    dispatch(toggleTheme());
  };

  return {
    toggleThemeColor,
  };
};
