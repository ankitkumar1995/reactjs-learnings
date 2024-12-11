import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todos from "./pages/todos";
import Users from "./pages/users";
import Posts from "./pages/posts";
import Home from "./pages";

function App() {
  return (
    <div>
      <div>
        <div>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="crud">
                <Route path="todos" element={<Todos />} />
                <Route path="users" element={<Users />} />
                <Route path="posts" element={<Posts />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
