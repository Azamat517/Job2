import 'sass-reset'
import './sass/header.sass'
import { NavLink, Route, Routes } from 'react-router-dom'

import AddRegion from './page/addRegion'
import './sass/homePage.sass'
import './sass/region.sass'
import './sass/addRegion.sass'
import HomePage from './page/homePage'
import AddCity from './page/addCity'

function App() {


  return (
    <>
      <div>
        <header className='header'>
          <NavLink to={'/'} className='header__box'>Остановки</NavLink>
          <nav className='header__nav'>
            <div className='header__nav__box'>
              <NavLink to={'/AddCity'}  className='header__nav__box__box'>Добвать остановки для города</NavLink>
              <NavLink to={'/AddRegion'} className='header__nav__box__box'>Добвать остановки для области</NavLink>
            </div>
          </nav>
        </header>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AddCity" element={<AddCity />} />
        <Route path="/AddRegion" element={<AddRegion />} />
      </Routes>
    </>
  )
}

export default App
