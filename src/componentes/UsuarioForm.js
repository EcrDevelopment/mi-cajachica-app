import { useEffect, useState } from "react";
import * as UsuarioServer from './UsuarioServer'
import { useNavigate, useParams } from 'react-router-dom';

const UsuarioForm=()=>{

    const navigate = useNavigate();
    const params=useParams();
    const initialState={nombre:'',area:''}
    const [usuario,setUsuario]=useState(initialState);
    

    const manejarCambio=(e)=>{
        setUsuario({ ...usuario, [e.target.name] : e.target.value });
    };

    const manejarEnvio=async(e)=>{
        e.preventDefault();
        try{
            let res;
            if(!params.id){
                res=await UsuarioServer.registrarUsuario(usuario);
                const data = await res.json();
                if(data.mensaje==="Usuario agregado correctamente"){
                    setUsuario(initialState); 
                }
            }else{
                await UsuarioServer.editarUsuario(params.id,usuario);                    
            }           
        navigate('/');
        }catch(error){
            console.log(error);
        }
    };

    const obtenerUsuario=async(usuarioId)=>{
        try{
            const res=await UsuarioServer.getUsuario(usuarioId);
            const data=await res.json();
            const { nombre, area }=data.usuario;
            setUsuario({ nombre, area });
        }catch(error){
            console.log(error);
        }
    };
    useEffect(()=>{
        if(params.id){
            obtenerUsuario(params.id);
        }
    //eslint-disable-next-line
    },[]);

    return(        
    <div className="card col-md-8 col-lg-6 mx-auto">
        {
            params.id?(
                <h5 className="card-header py-4 text-center">Actualizar Usuario 🤵 </h5>
            ):(
                <h5 className="card-header py-4 text-center">Registro de Usuario 🙍‍♀️ </h5>
            )
         } 

        
        <div className="card-body">
            <form className="p-4" onSubmit={manejarEnvio}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre:</label>
                    <input type="text" name='nombre' value={usuario.nombre} onChange={manejarCambio}  className="form-control" id="nombre"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="area" className="form-label">Area:</label>
                    <input type="text" name='area' value={usuario.area}  onChange={manejarCambio}   className="form-control" id="area"/>
                </div>
                
                {
                    params.id?(
                        <button type="submit" className="btn btn-warning">Actualizar</button>
                    ):(
                        <button type="submit" className="btn btn-primary">Registrar</button>
                    )
                }       
                
            </form>
        </div>        
    </div>
   
    );
}

export default UsuarioForm;