import React,{useRef,useEffect,useContext} from 'react'
import styles from './styles/Nav.module.css'
import user from './images/Group.svg'
import message from './images/Group 3.png'
import {Link} from 'react-router-dom'
import {BurgerState} from './Context/BurgerContext'


function Nav() {

    const {slide} = useContext(BurgerState);
    const [Click,setClick] = slide

    function ClickedBurger(){
        setClick(!Click);
    }

    return (
        <div>
            <nav>
                <h1>
                    Friendsie
                </h1>
                <ul>
                   
                    <div className={styles.main}>
                        <img src={user} alt=""/>
                        <div className={styles.box}>
                            <Link to='/settings'><a href=""><li>Settings</li></a> </Link> 
                            <a href=""><li>Logout</li></a> 
                        </div>
                    </div>
                    <div className={styles.imgBox}>
                        <div className={styles.number}>1</div>
                        <img src={message} alt=""/>
                    </div>
                    
                </ul>
                <div onClick={ClickedBurger} className={styles.burger}>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                </div>
            </nav>
        </div>
    )
}

export default Nav
