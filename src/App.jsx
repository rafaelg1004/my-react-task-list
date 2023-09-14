
import "./App.css";
import Home from "./Pages/Home";
import SobreNosotros from "./Pages/SobreNosotros";
import ListaTarea from "./Pages/Tareas";
import Menu from "./components/Menu";
import "./styles/styles.css";
import { BrowserRouter ,Routes ,Route } from "react-router-dom";



const App = () => {
  
  return (
    <div>
      <BrowserRouter>
      <Menu/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="sobre-nosotros" element={<SobreNosotros/>}/>
      <Route path="tareas" element={<ListaTarea/>}/>
      
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;