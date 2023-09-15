import "./App.css"
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Components/Home/Home"
import Middle from "./Components/Middle/Middle"
import Destinations from "./Components/Destinations/Destinations"
import Question from "./Components/Questions/Questions"
import Reviews from "./Components/Reviews/Reviews"
import Subscribe from "./Components/Subscribe/Subscribe"
import Footer from "./Components/Footer/Footer"
import Portifilio from "./Components/Portifolio/Portifolio"

function App() {


  return (
    <div>
      <Navbar/>
      <Home/>
      <Middle/>
      <Destinations/>
      <Portifilio/>
      <Reviews/>
      {/* <Question/>
      <Subscribe/>
      <Footer/> */}
    </div>
  )
}

export default App
