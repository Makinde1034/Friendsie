import React from 'react'
import Styles from './styles/MobileNav.module.css'
import {Link} from 'react-router-dom'

function MobileNav() {
    return (
        <div>
            <div className={Styles.Nav}>
                <ul>
                    <Link style={{textDecoration:'none'}} to='/settings'><li>Settings</li></Link>
                    <li>LogOut</li>
                    <li>About</li>
                </ul>
            </div>
        </div>
    )
}

export default MobileNav
