import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home'
import Cliente from './pages/Cliente';
import AddCliente from './pages/AddCliente';
import EditCliente from './pages/EditCliente';
import ViewCliente from './pages/ViewCliente';
import NoMatch from './pages/NoMatch';
import PaginaTitulo from './pages/PaginaTitulo';

function App() {
  return (
    <div>
      <PaginaTitulo />
      <Routes>
        <Route index element={<Home />}/>
        <Route path='cliente' element={<Cliente />} >
          <Route index  element={<AddCliente />} />
          <Route path='edit/:id' element={<EditCliente />} />
          <Route path='view' element={<ViewCliente />} />  
        </Route>
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </div>      
  );
}

export default App;
