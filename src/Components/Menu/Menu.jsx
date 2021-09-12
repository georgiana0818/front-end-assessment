import logo from '../../AssessmentAssets/EXPCON.svg'
import hamburger from '../../AssessmentAssets/icons8-menu.svg'
import '../../css/Menu.css'

const Menu = () =>{ 
    const handleMenu = () =>{

    }
    return(
        <div className="header-wrap">
           <div className="nav-toggle">
               <img src={hamburger} onclick={handleMenu}/>
           </div>
         
           <div className="logo-wrap" id="logo-wrap">
                <a href="#" className="logo">
                     <img src={logo}/>
                </a>
           </div>
            
        </div>
    )

}

export default Menu;