import {createContext, useContext, useReducer} from 'react';

export const StateConntext = createContext();

export const StateProvider = ({ reducer, initialState, children}) => (
    <StateConntext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateConntext.Provider>
);

export const useStateValue = () => useContext(StateConntext);