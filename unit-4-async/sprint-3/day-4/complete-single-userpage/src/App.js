import "./styles.css";
import Navbar from "./Component/Navbar";
import AllRoutes from "./Routes/AllRoutes";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}
