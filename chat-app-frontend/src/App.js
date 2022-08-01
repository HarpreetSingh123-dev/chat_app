import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation';
import {BrowserRouter,Route,Router, Routes} from 'react-router-dom'
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login'
import Chat from './Pages/Chat';


function App() {
  return (
      
       <BrowserRouter> 

         <Navigation/>

         <Routes>
         
           <Route path='/' element={<Home></Home>}></Route>
           <Route path='/login' element={<Login></Login>}></Route>
           <Route path='/signup' element={<SignUp></SignUp>}></Route>
           <Route path='/chat' element={<Chat></Chat>}></Route>
         
         </Routes>

       </BrowserRouter>  
  );
}

export default App;
