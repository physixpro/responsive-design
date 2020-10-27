import React, {Component} from "react";

class NavBar extends Component{

    render(){
        return(
         
         <div className="navbar">  
         <div className="container flex">
<h1 className="logo">Loruki.</h1>

<nav>

<ul>

<li><a href="App.js">Home</a></li>
<li><a href="/#">Features</a></li>
<li><a href="/#">Docs</a></li>

</ul>
</nav>
         
         
       </div>
       </div>
           
        
        );
    }
}

export default NavBar;