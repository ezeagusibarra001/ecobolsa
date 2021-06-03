
import Home from "./Home/Home"
import Comercios from "./Comercios/Comercios"
import {BrowserRouter,Route} from "react-router-dom"

function App() {

  return (

    <div >
      <BrowserRouter>
        <Route path="/" component={Home} exact />
        <Route path="/Comercios" component={Comercios} exact />
      </BrowserRouter>        
      
    </div>
  );
}

export default App;
