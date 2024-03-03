import "./App.css";
import { useColorScheme } from "./components/ColorScheme/hooks/useColorScheme";

function App() {
  useColorScheme();

  return (
    <div className="relative z-10 text-center">
      <h1>Color Crafter</h1>
    </div>
  );
}

export default App;
