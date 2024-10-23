import './App.css';
import CustomNavi from './components/CustomNavi';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import News from './Pages/News'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Products from './Pages/Products'
import MyCounter from './Pages/MyCounter'

function App() {
  return (
    <div>

      <BrowserRouter>
        <CustomNavi/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/News' element={<News/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/Products' element={<Products/>}/>
            <Route path='/MyCounter' element={<MyCounter/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
