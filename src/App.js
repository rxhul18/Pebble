import './App.scss';
import Navbar from './Components/Navbar.js';
import {Routes , Route} from "react-router-dom";
import Home from './Pages/Home'
import Smartwatches from './Pages/Smartwatches.js'
import Heaphones from './Pages/Headphone'
import Speakers from './Pages/Speakers'
import Accesosiers from './Pages/Accessories'
import Offer from './Components/offer'
import { createContext , useEffect} from 'react';

import AOS from "aos";
import "aos/dist/aos.css";

export const GlobalStore = createContext()

const GlobalStoreData = {
  appColor1:"lightGreen",
  appColor2:"tomato",
  message:"Ajjh ravivar Hai",
  message2:"Hii Chacha kese Hooo",
  textColor:"#664d03"
}

function App() {


  useEffect(() => {
    AOS.init({
      // once: true,
      // disable: "phone",
      duration: 2000,
      // easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="App">
<GlobalStore.Provider value={GlobalStoreData}>
      <Navbar />
      <Offer />
      <Routes>
        <Route exact index path='/' element={<Home />} />
        <Route index path='/smartwatch' element={<Smartwatches />} />
        <Route index path='/headphone' element={<Heaphones />} />
        <Route index path='/speaker' element={<Speakers />} />
        <Route index path='/accesosiers' element={<Accesosiers />} />
      </Routes>
  </GlobalStore.Provider>
    </div>
  );
}

export default App;
