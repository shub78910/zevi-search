import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
};

export default App;
