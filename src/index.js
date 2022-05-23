import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Componentes
import ListaDeUsuarios from './componentes/ListaDeUsuarios.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
// eslint-disable-next-line



import Navbar from './componentes/Navabar';
import UsuarioForm from './componentes/UsuarioForm';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
      <React.StrictMode>
      <BrowserRouter>      
            <Navbar/>
            <div className='container my-4'> 
            <Routes>
                  <Route path='/' element={ <ListaDeUsuarios/> } />
                  <Route path='/registrarUsuario' element={ <UsuarioForm/> } />
                  <Route path='/editarUsuario/:id' element={ <UsuarioForm/> } />

            </Routes>              
            </div>      
      </BrowserRouter>
      </React.StrictMode> 
          
);


