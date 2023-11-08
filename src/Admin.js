// Funcion para subir imagenes a Firebase
import React from 'react';
import {uploadFile, storage} from './firebase/config.js'
import {useState} from 'react'

function Subir() {
    const [archivoUrl, setArchivoUrl] = React.useState("");
    const archivoHandler = async (e) => {
    }
   
    const [file, setFile] = useState(null)
    
    const handleSubmit = async (e) => {
       const nombreArchivo = e.target.nombre.value;
       //enteada a bd
       const coleccionRef = 
        e.preventDefault();
       try {
        // throw new Error('Fallo al subir')
        const result = await uploadFile(file);
        console.log(result);
       } catch (error) {
        console.error(error);
        alert('Fallo interno. Intente mas tarde')
       }
    }
   
    return (
        <form onSubmit={handleSubmit}>
          <input type="file" name="nombre" id="" onChange={e => uploadFile(e.target.files[0]) } />
        <button>Upload</button>
        </form>
    )
}

export default Subir