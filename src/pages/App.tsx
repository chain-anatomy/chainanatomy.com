import Header from "./templates/header/Header"
import Slide1 from "./slides/Slide1"
import Slide2 from "./slides/Slide2"
import Slide3 from "./slides/Slide3"
import Slide4 from "./slides/Slide4"
import Slide5 from "./slides/Slide5"
import SlideContactUs from "./slides/SlideContactUs"


function App() {
  return (
    <div className="app relative text-main-white">
      <div className="fixed w-full z-10">
        <Header />
      </div>

      <main className="h-screen pt-20 snap-y snap-mandatory overflow-auto">
        <Slide1 />
        <Slide2 />
        <Slide3 />
        <Slide4 />
        <Slide5 />
        <SlideContactUs />
      </main>
    </div>
  )
}

export default App
