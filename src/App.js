import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Detailpage from "./pages/Detailpage";
import About from "./pages/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/singleshow/:id" element={<Detailpage />}></Route>
      </Routes>
    </div>

    //homeage route
    //about route
    //search
    //detail page
  );
}

export default App;
