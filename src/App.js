
import Home from "./Home/Home"
import Comercios from "./Comercios/Comercios"
import {BrowserRouter,Route} from "react-router-dom"
import {HomeProvider} from './Context/home-context'

function App() {

  return (

    <div >
      <BrowserRouter>
        <HomeProvider>
          <Route path="/" component={Home} exact />
          <Route path="/Comercios" component={Comercios} exact />
        </HomeProvider>
      </BrowserRouter>        
      
    </div>
  );
}

export default App;
