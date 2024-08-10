import 'bootstrap/dist/css/bootstrap.min.css';
import './font/iranyekanwebbold.ttf';
import './components/main.scss';
import Navbar from "./components/navbar";
import Header from './components/header';
import Description from './components/description';
import Video from './components/video';




function App (){
  return(
    <>
    <Navbar/>
    <Header/>
    <Description/>
    <Video/>
    </>
  )
}

export default App;