import "./App.css";
import { AnalogousColors } from "./components/AnalogousColors";
import { ColorInput } from "./components/ColorInput/components/ColorInput";
import { ColorScale } from "./components/ColorScale";
import { useColorScheme } from "./components/ColorScheme/hooks/useColorScheme";
import { ComplementaryColor } from "./components/ComplementaryColor/components/ComplementaryColor";
import { SelectedColorActions } from "./components/SelectedColorActions";
import { SplitComplementaryColors } from "./components/SplitComplementaryColors";
import { ThemeSwitch } from "./components/ThemeSwitch";
import { TypographyH1 } from "./components/ui/typographyH1";

function App() {
  useColorScheme();

  return (
    <>
      <div className="absolute right-4 top-4">
        <ThemeSwitch />
      </div>

      <div className="text-center mb-4">
        <TypographyH1>Color Crafter</TypographyH1>
      </div>

      <div className="flex m-auto items-center gap-4 max-w-fit">
        <div className="w-80">
          <ColorInput />
        </div>
      </div>

      <div className="flex mx-auto max-w-fit gap-8 items-start">
        <ComplementaryColor />
        <div>
          <SplitComplementaryColors />
        </div>
        <div>
          <AnalogousColors />
        </div>
      </div>

      <SelectedColorActions />
      <ColorScale />
    </>
  );
}

export default App;
