import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sorting from "./Sorting/Sorting";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sorting" element={<Sorting />} >
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
