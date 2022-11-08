import Home from './Home';
import UserHome from './UserHome';
import './App.css';
import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path ="/" 
      element = {<Home/>}/>
      
      <Route path='/userhome'
      element = { <UserHome/>}/>
     
      </Routes>
    </div>
  );
}

export default App;
