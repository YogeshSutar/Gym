import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'
import IncrementDecrement from './IncrementDecrement/IncrementDecrement'
const App = () =>{
return(
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/ContactUs' element={<ContactUs/>} />
                <Route path='/AboutUs' element={<AboutUs/>} />
                <Route path='/Dashboard' element={<Dashboard/>} />
                <Route path='/Dashboard' element={<Dashboard/>} />
                <Route path='/IncrementDecrement' element={<IncrementDecrement/>}/>

            </Routes>
        </BrowserRouter>
    </>
)
}
export default App