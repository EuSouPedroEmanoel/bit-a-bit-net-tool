import { Routes, Route } from "react-router-dom";
import useTheme from "./hooks/UseTheme";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="h-dvh bg-background interface-transition">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div> // Agora sim, fechamos a div principal corretamente
  );
}