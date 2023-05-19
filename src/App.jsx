
import Gallery from "./components/Gallery";
import Album from "./components/Album";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={ <Gallery /> } />
          <Route path="/album" element={ <Album /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
