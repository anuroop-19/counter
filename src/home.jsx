import { createContext } from "react";
import Setter from "./setter";
export const AppContext=createContext();
const Home = () => {
    let val;
    const func=(e)=>{
        val=e.target.value;
    }
    return (
        <div>
        <input onChange={func} />
        <AppContext.Provider value={{val}}>
        
            <Setter/>
        </AppContext.Provider>
        </div>
      );
}
 
export default Home;