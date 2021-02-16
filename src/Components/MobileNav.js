import React,{useContext} from 'react'
import Styles from './styles/MobileNav.module.css'
import {Link} from 'react-router-dom'
import {BurgerState} from './Context/BurgerContext'

function MobileNav() {
    const {slide} = useContext(BurgerState);
    const [Click,setClick] = slide

    function CloseNav(){
        setClick(false);
    }

    return (
        <div>
            <div className={Styles.Nav}>
                <ul>
                    <Link style={{textDecoration:'none'}} to='/settings'><li onClick={CloseNav} >Settings</li></Link>
                    <li onClick={CloseNav}>LogOut</li>
                    <li onClick={CloseNav}>About</li>
                </ul>
            </div>
        </div>
    )
}

export default MobileNav
