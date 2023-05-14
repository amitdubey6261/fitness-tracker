import { Provider } from 'react-redux';
import store from './redux/store';

import { BrowserRouter ,  Route , Routes } from 'react-router-dom';
//global
import { Navbar } from './components/Global/Navbar';
import { Footer } from './components/Global/Footer';

//loacal
import Home from './components/Pages/homePage/Home';
import About from './components/Pages/aboutPage/About';

function App() {

  return (
    <>
    <Provider store = {store}>
    <Navbar/>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}></Route>
    </Routes>
    </BrowserRouter>
    <Footer/>
    </Provider>
    </>
  )
}

export default App
