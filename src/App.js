import 'bootstrap/dist/css/bootstrap.min.css';
import './font/iranyekanwebbold.ttf';
import './components/main.scss';
import Navbar from "./components/navbar";
import Header from './components/header';
import Description from './components/description';
import Video from './components/video';
import Services from './components/services';




function App (){
  return(
    <>
    <Navbar/>
    <Header/>
    <Description/>
    <Video/>
    <Services/>
    </>
  )
}

export default App;