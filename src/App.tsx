import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import YourPublicIP from "./pages/your-public-ip/YourPublicIP";

export default function App() {

  return (
    <div className="h-dvh bg-background interface-transition">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/your-public-ip" element={<YourPublicIP />} />
      </Routes>
    </div>
  );
}