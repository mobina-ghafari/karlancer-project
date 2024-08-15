import 'bootstrap/dist/css/bootstrap.min.css';
import './font/iranyekanwebbold.ttf';
import './components/main.scss';
import Navbar from "./components/navbar";
import Header from './components/header';
import Description from './components/description';
import Video from './components/video';
import Services from './components/services';
import Projects from './components/projects';
import Employment from './components/employment';
import Freelancer from './components/freelancer';
import Blog from './components/blog';
import Footer from './components/footer';




function App (){
  return(
    <>
    <Navbar/>
    <Header/>
    <Description/>
    <Video/>
    <Services/>
    <Projects/>
    <Employment/>
    <Freelancer/>
    <Blog/>
    <Footer/>
    </>
  )
}

export default App;