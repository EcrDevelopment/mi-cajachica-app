import React from 'react';
import * as UsuarioServer from './UsuarioServer'
import { useNavigate } from 'react-router-dom';



const Usuario=({ usuario,listaUsuarios })=>{

const navigate = useNavigate();

const manejarEliminar=async(usuarioId)=>{
    await UsuarioServer.eliminarUsuario(usuarioId);
    listaUsuarios();
};
    return(
        <tr>
            <td className='table-dark'>{usuario.id}</td>
            <td className='table-dark'>{usuario.nombre}</td>
            <td className='table-dark'>{usuario.area}</td>
            <td className='table-dark text-center'>
                <button onClick={()=>navigate(`/editarUsuario/${usuario.id}`) } className='btn btn-primary'>✏</button>
            </td>
            <td className='table-dark text-center'>
                <button onClick={()=>usuario.id && manejarEliminar(usuario.id) } className='btn btn-danger'>✖</button>
            </td>
            
        </tr>
    )
};

export default Usuario;