import { createContext, useState } from "react";


 export const Store = createContext();

function StoreCompo(props){
  const[data,setdata] = useState([
        {Name:"Jhon",Age:25,Course:"MERN",Batch:"oct"},
        {Name:"Doe",Age:25,Course:"MERN",Batch:"Nov"},
        {Name:"Biden",Age:25,Course:"MERN",Batch:"Dec"},
        {Name:"Barar",Age:25,Course:"MERN",Batch:"Jan"},
        {Name:"Christ",Age:25,Course:"MERN",Batch:"Jan"},
  ])
    return(
        <>
        <Store.Provider value={[data,setdata ]}>
            {props.children}

        </Store.Provider>
        
        </>
    )

}
export default StoreCompo;