import { createContext, useContext, useReducer } from "react";

export const StateContext = createContext(); //Permite crear el contexto

//Provee la herramienta para pasar los datos de un componente a otro
export const StateProvider =({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = ()=> useContext(StateContext); // useStateValue permite consumir los cambios de estado de InitialSate desde cualquier componente

//aqui creamos el CONTEXT API
