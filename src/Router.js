import Home from './Home';
import Page from './Page';
import Gallery from './Gallery';
import Contact from './Contact';
import About from './About';
import {Nav} from './Nav'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';


export function Routerr(){
    return(
        <div>
            <Nav/>
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/about' element={<About/>} />
                    <Route path='/contact' element={<Contact/>} />
                    <Route path='/Gallery' element={<Gallery/>} /> 
                    <Route path='/page' element={<Page/>} />   
                </Routes>
            </Router>
        </div>
    )
}