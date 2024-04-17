import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DragAndDropNotes from "./pages/drag-and-drop-notes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" />
          <Route path="/drag-and-drop" element={<DragAndDropNotes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
