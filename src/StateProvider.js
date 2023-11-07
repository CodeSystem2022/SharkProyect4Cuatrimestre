//estamos creando el context API para poder pasar las variables de un componente a otro
import { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();
//state provider nos ds la herramienta para pasar los datos de un comp a otro
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);
//useState va a peermitirnos usar los cambios desde cualquier componente
export const useStateValue = () => useContext(StateContext);
export default StateProvider;