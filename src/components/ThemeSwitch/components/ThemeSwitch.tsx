import { useColorPreference } from "@/components/ColorScheme/hooks/useColorPreference";
import { Switch } from "@/components/ui/switch";
import { useAppSelector } from "@/store/hooks";

export const ThemeSwitch = () => {
  const themeType = useAppSelector((state) => state.theme.type);
  const { toggleThemeColor } = useColorPreference();

  return (
    <Switch
      className="text-xs font-medium leading-8"
      onClick={toggleThemeColor}
    >
      {themeType === "light" ? "Dark" : "Light"} Mode
    </Switch>
  );
};
