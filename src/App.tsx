import "./App.css";
import { ColorInput } from "./components/ColorInput/components/ColorInput";
import { ColorRepresentation } from "./components/ColorRepresentation/components/ColorRepresentation";
import { useColorScheme } from "./components/ColorScheme/hooks/useColorScheme";
import { ComplementaryColor } from "./components/ComplementaryColor/components/ComplementaryColor";
import { TypographyH1 } from "./components/ui/typographyH1";
import { calculateOppositeColor } from "./helpers/colors";

calculateOppositeColor;

function App() {
  useColorScheme();

  return (
    <>
      <div className="text-center my-4">
        <TypographyH1>Color Crafter</TypographyH1>
      </div>

      <div className="flex m-auto items-center gap-4 max-w-fit">
        <div className="w-80">
          <ColorInput />
        </div>
        <div className="shrink">
          <ColorRepresentation />
        </div>
      </div>

      <div className="flex mx-auto items-center max-w-md">
        <ComplementaryColor />
      </div>
    </>
  );
}

export default App;
