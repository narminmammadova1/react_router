import './App.css';
import { Routes,Route } from 'react-router-dom';
import { Header } from "./Components/Header";
import { ROUTER } from './constant/Router';
// import { Main } from './Components/Main';
import { About } from './Pages/About/About';
import { Home } from './Pages/Home/Home';
import { Products } from './Pages/Products/Products';
import { Contact } from './Pages/Contact/Contact';
import { ContactDetail } from './Pages/ContactDetail/ContactDetail';
import { Lays } from './Pages/Lays/Lays';
import { Soda } from './Pages/Soda/Soda';
import { Cola } from './Pages/Cola/Cola';
import { Calculator } from './Pages/Calculator/Calculator';
import { Addition } from './Pages/Addition/Addition';
import { Subtraction } from './Pages/Subtraction/Subtraction';
function App() {
  return (
   <>
   <Header/>
   {/* <Main/> */}
   <Routes>
<Route path={ROUTER.HOME} element={<Home/>} />
<Route path={ROUTER.ABOUT} element={<About/>}/>
<Route path={ROUTER.CONTACT} element={<Contact/>}/>
<Route path={ROUTER.CONTACT_DETAIL} element={<ContactDetail/>}/>
<Route path={ROUTER.PRODUCTS+"/*"} element={<Products/>}/>
<Route path={ROUTER.LAYS} element={<Lays/>}/>
<Route path={ROUTER.SODA} element={<Soda/>}/>
<Route path={ROUTER.COLA} element={<Cola/>}/>

<Route path={ROUTER.CALCULATOR } element={<Calculator/>}/>
<Route path={ROUTER.ADDITION } element={<Addition/>}/>
<Route path={ROUTER.SUBTRACTION } element={<Subtraction/>}/>

   </Routes>
   
   </> 
  );
}

export default App;
