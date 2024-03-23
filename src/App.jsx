
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './componenent/Footer'
import HeaderComponent from './componenent/HeaderComponent'
import ListEmployeeComponent from './componenent/ListEmployeeComponent'
import CreateEmployee from './componenent/CreateEmployee'
import ErrorComponent from './componenent/ErrorComponent'

function App() {
 

  return (
    <>
      <BrowserRouter>
        <HeaderComponent/>
        <Routes>
          
          <Route path='/' element={<ListEmployeeComponent />}></Route>
          
          <Route path='/employees' element={<ListEmployeeComponent />} errorElement={<ErrorComponent/>} ></Route>
          
          <Route path='/createEmployee' element={<CreateEmployee/>}></Route>

          <Route path='/createEmployee/:id' element={<CreateEmployee/>}></Route>

        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
