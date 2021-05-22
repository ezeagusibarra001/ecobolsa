
import Home from "./Home"
import Comercios from "./Comercios"
import  "./Home.css"
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
