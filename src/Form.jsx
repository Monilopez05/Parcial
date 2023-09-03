import { useState } from "react";
import Mensajes from "./Mensaje";


function Form({onAgregarMusica}){
    const[nombre, setNombre]=useState("");
    const[cancion, setCancion]=useState("");
    const[mensaje, setMensaje]=useState("");

    const handleSubmit =(e)=>{
        e.preventDefault();
        nombre.trim();
        cancion.trim();

        if (nombre.length <= 3 || cancion.length <= 6){
            setMensaje("Por favor chequea que la información sea correcta")
        }else{
            onAgregarMusica({nombre, cancion})
            setNombre("");
            setCancion("");
            setMensaje("")
        }
    }
    return(
        <form onSubmit={handleSubmit}  className="formulario"> 
            <div>
                <label for="nombre">Nombre:</label>
                <input type="text"  name="nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
            </div>
            <div>
                <label for="cancion">Cancion:</label>
                <input type="text"  name="cancion" value={cancion} onChange={(e)=>setCancion(e.target.value)}/>
            </div>
            <div>
                <button type="submit">Agregar</button>
            </div>
            <div>
                {mensaje!="" &&
                    <>
                        <Mensajes mensaje={mensaje}/>
                    </>
                }
            </div>
        </form>
    )
 }
 export default Form;