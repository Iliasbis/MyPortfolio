import { useEffect } from 'react'
import { Footer } from './Components/Footer'
import { NavBar } from './Components/NavBar'
import { About } from './Pages/About'
import { Contact } from './Pages/Contact'
import { Home } from './Pages/Home'
import { Skills } from './Pages/Skills'
import { Work } from './Pages/Work'
import { Element } from 'react-scroll'


export const App = () => {
 return(
    <>
      <NavBar />
      <Element name='/'><Home/> </Element>
      <Element name='/about'><About/> </Element>
      <Element name='/skills'><Skills/> </Element>
      <Element name='/work'><Work/> </Element>
      <Element name='/contact'><Contact/> </Element>
      <Footer/>
    </>

  )
}
