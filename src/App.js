import './style.css';
import NavBar from './components/header/NavBar'
import ContainerCardItems from './components/componentsItem/ContainerCardItems';
import DetailsItem from './components/componentsItem/DetailsItem'; 
import { BrowserRouter, Route, Routes} from 'react-router-dom';






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
