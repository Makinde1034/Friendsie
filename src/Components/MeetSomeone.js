import React,{useEffect,useRef,useContext} from 'react'
import Styles from './styles/MeetSomeone.module.css'
import Nav from './Nav.js'
import { TweenMax, Power3 } from "gsap";
import MobileNav from './MobileNav'
import {BurgerState} from './Context/BurgerContext'

function MeetSomeone() {

    var box = useRef(null);

    useEffect(()=>{
        TweenMax.to(box,2,{display:'none'});
    },[]);

    const {slide} = useContext(BurgerState);
    const [Click,setClick] = slide


    return (
        <div style={{paddingBottom:'50px'}}>
            {/* loading page */}
            <div ref={el=>{box=el}} className={Styles.Loading}>
                <div className={Styles.zero}></div>
            </div>
            <Nav />
            <div className={Click ? Styles.active : Styles.nav}>
                <MobileNav />
            </div>
            <div className={Styles.MeetSomeone}>
                <div className={Styles.UserBox}>
                    <div className={Styles.circle}>
                
                    </div>
                    <h5>Cycling, Hiking, Surfing, Roadtrips, Reading</h5>
                    <button>Connect</button>
                </div>
            </div>
            <div className={Styles.MeetSomeone}>
                <div className={Styles.UserBox}>
                    <div className={Styles.circle}>
                
                    </div>
                    <h5>Reading, Cycling, Movies, Shooting</h5>
                    <button>Connect</button>
                </div>
            </div>
        </div>
    )
}

export default MeetSomeone
