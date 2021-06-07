import React, { useState, useEffect} from 'react';
const HomeContext = React.createContext();


export function HomeProvider(props){
  const [comercioState, setComercioState] = useState("todos");
  //DECLARO QUIEN ES EL CONTEXT
  const value = 
    {
      comercioState, setComercioState
      }
  return <HomeContext.Provider value={value} {...props} />
}
//EXPORTO EL CONTEXT
export function useHome(){
    const context = React.useContext(HomeContext);
    if(!context){
        throw new Error('Something wrong had happended')
    }
    return context;
}