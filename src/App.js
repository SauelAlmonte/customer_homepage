import { Route, Routes } from "react-router-dom";
import NavBar  from "./components/NavBar";
import Home from "./pages/Home";
import Main from "./components/Main";

function App() {
  return (
    <>
      <NavBar/>
      <Main/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </>
  );
}

export default App;
