const API_URL="http://127.0.0.1:8000/api_caja/usuarios/"


export const listUsuarios= async()=>{
    return await fetch(API_URL);

};

export const getUsuario=async(usuarioId)=>{
    return await fetch(`${API_URL}${usuarioId}`);

}

export const registrarUsuario=async( newUsuario )=>{
    return await fetch(API_URL,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            "nombre":String(newUsuario.nombre).trim(),
            "area":String(newUsuario.area).trim()
        })
    });

};
export const editarUsuario=async( usuarioId,updatedUsuario )=>{
    return await fetch(`${API_URL}${usuarioId}`,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            "nombre":String(updatedUsuario.nombre).trim(),
            "area":String(updatedUsuario.area).trim(),
        })
    });

};

export const eliminarUsuario=async( usuarioId )=>{
    return await fetch(`${API_URL}${usuarioId}`,{
        method:'DELETE',       
    });

};