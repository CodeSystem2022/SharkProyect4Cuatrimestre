// Funcion para subir imagenes a Firebase
import React from 'react';
import {uploadFile} from './firebase/config.js'

function Subir() {
    return (
        <div>
            <input type="file" name="" id="" onChange={e => uploadFile(e.target.files[0]) } />
        </div>
    )
}

export default Subir