import './style.css';
import NavBar from './components/header/NavBar'
import ContainerCardItems from './components/componentsItem/ContainerCardItems';
import { BrowserRouter, Routes, Route} from 'react-router-dom';





function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
            <Route path='/' element={ <ContainerCardItems />} />
            <Route path='/item/:idItem' element={ <DetailsItem />} />
            <Route path='/category/:idCategory' element={ <ContainerCardItems />} />
      </Routes>
  
    </BrowserRouter>
    
  );
}

export default App;