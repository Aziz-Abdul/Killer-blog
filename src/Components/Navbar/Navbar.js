
import React,{Component} from 'react';
import {MenuItems} from "./MenuItems"


 

class Navbar extends Component{
      state={clikced: false} 

      handleClick=()=> {
         this.setState({clicked: !this.state.clicked})
      }
   
        render() {
           return(
                <nav className="NavbarItems">
                   <h1 className="Navbar-logo">React<i className="fab fa-react"></i></h1> 
                   <div className="Menu-icon" onClick={this.handleClick}>
                      <i className={this.state.clicked? 'fas fa-times': 'fas fa-bars'}></i>
                   </div>

                     <ul className={this.state.clicked? 'nav-menu active' :'nav-menu'}>
                         {MenuItems.map ((item,index)=> {
                           
                               return(
                         <li key={index}>
                            <a className=
                               {item.cName}
                               href={item.url}>
                               {item.title}
                            </a>


                         </li>

                               )
                        })}
                    
                      </ul>
                      <button>Sign Up</button>
                </nav> 
           )
        }
};

export default Navbar;