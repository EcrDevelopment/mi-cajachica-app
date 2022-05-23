import { useEffect, useState } from 'react'
import * as UsuarioServer from './UsuarioServer'

import Usuario from './Usuario';




const ListaDeUsuarios=()=>{

    const [usuarios,setUsuarios]=useState([]);


    const listaUsuarios= async () => {
        try{
            const res= await UsuarioServer.listUsuarios();
            const data= await res.json();            
            setUsuarios(data.usuarios);
        }catch(error){
            console.log(error);
        }
    };  
    
    useEffect(()=>{
        listaUsuarios();
    },[])

    return(
        <table className='table table-dark table-sm table-hover'>
        <thead>
            <tr>
                <th className="table-dark">#Id</th>
                <th className="table-dark">Nombre</th>
                <th className="table-dark">Area</th>
                <th className="table-dark text-center">Editar</th> 
                <th className="table-dark text-center">Eliminar</th>             
            </tr>
        </thead>
        <tbody>
            {usuarios.map((usuario)=>
                <Usuario key={usuario.id} usuario={usuario} listaUsuarios={listaUsuarios} />
            )}
        </tbody>       
        </table>
    )
};

export default ListaDeUsuarios;
