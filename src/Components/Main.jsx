import { useState } from "react";

export default function Main(){
  
    return(
      <main>
        <form>
            <input 
            type="text" 
             nome="" 
             id="" 
             onChange={(event)=> setNNome(event.target.value)}/>

             {nome}
        </form>
      </main>
    );
}

