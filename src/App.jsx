
import Gallery from "./components/Gallery";
import Album from "./components/Album";
import Photo from "./components/Photo";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={ <Gallery /> } />
          <Route path="/album" element={ <Album /> } />
          <Route path="/photo" element={ <Photo /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
