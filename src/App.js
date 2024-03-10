import './App.scss';
import Navbar from './Components/Navbar.js';
import {Routes , Route} from "react-router-dom";
import Home from './Pages/Home'
import Smartwatches from './Pages/Smartwatches.js'
import Earphone from './Pages/Earphone'
import Speakers from './Pages/Speakers'
import Accesosiers from './Pages/Accessories'
import Offer from './Components/Offer.js'
import { createContext } from 'react';
import Footer from './Components/Footer.js';

export const GlobalStore = createContext()

const GlobalStoreData = {
  appColor1:"lightGreen",
  appColor2:"tomato",
  message:"Ajjh ravivar Hai",
  message2:"Hii Chacha kese Hooo",
  textColor:"#664d03"
}

function App() {
  return (
    <div className="App">
<GlobalStore.Provider value={GlobalStoreData}>
      <Navbar />
      {/* <Offer /> */}
      <Routes>
        <Route exact index path='/' element={<Home />} />
        <Route index path='/smartwatch' element={<Smartwatches />} />
        <Route index path='/earphone' element={<Earphone />} />
        <Route index path='/speaker' element={<Speakers />} />
        <Route index path='/accesosiers' element={<Accesosiers />} />
      </Routes>
      <Footer />
  </GlobalStore.Provider>
    </div>
  );
}

export default App;
