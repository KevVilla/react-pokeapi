import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Containers/Home/Home";

import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
