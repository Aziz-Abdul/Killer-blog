
import React,{Components} from 'react';
import MenuItems from "./MenuItems"
import {Button} from  "../Button"
import {Navbar} from './Navbar.css'
 

class Navbar extends Components{
      state={clicked: false} 

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
                         {Menuitems.map ((item,index)
                           => {
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
                      <Button>Sign Up</Button>
                </nav> 
           )
        }
};

export default Navbar;