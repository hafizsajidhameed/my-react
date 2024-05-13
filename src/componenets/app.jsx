
import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import Custom from "../props/custom";

const age = 19;
function App() {
    function clickMe(){
        alert('hello')
    }
   return(
       <div>
        <Header />
        <Custom name='Sajid'/>
       {age > 18 ?<h1 style={{color: 'maroon'}}>wellcom, here</h1> : null}
       <button onClick={clickMe}>Click</button>
        <Footer />

    </div>
    )
}
export default App;