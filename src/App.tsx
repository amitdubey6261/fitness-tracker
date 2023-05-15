import './App.css'

import { Provider } from 'react-redux';
import store from './redux/store';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
//global
import { Navbar } from './components/Global/navbar/Navbar';
import { Footer } from './components/Global/footer/Footer';

//loacal
import Home from './components/Pages/homePage/Home';
import About from './components/Pages/aboutPage/About';
import P5app from './components/Pages/app/P5app';

function App() {

  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <div className='outer-layout'>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />}></Route>
              <Route path='/app' element={<P5app />}></Route>
            </Routes>
            <Footer />
          </div>
        </Provider>
      </BrowserRouter>
    </>
  )
}

export default App
