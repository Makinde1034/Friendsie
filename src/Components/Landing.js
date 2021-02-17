import React,{useRef,useEffect} from 'react'
import styles from  './styles/Landing.module.css'
import friends from './images/friends.png'
import {Link} from 'react-router-dom'
import { TweenMax, Power3 } from "gsap";



function Landing() {

    var welcome = useRef(null);
    var img = useRef(null)


    useEffect(()=>{
      TweenMax.fromTo(welcome,1,{opacity:'0',x:'30px'},{opacity:'1',x:'0px'});
      TweenMax.fromTo(welcome,1,{opacity:'0'},{opacity:'1'});

        
    },[]);

    return (
        <div>
            <div  className={styles.Landing}>
                <div className={styles.hero}>
                    <div className={styles.LandingNav}>
                        <h1>
                            Friendsie
                        </h1>
                    </div>
                    <div className={styles.main}>
                        <img ref={el=>{img=el}} src={friends} alt=""/>
                        

                    </div>
                </div>
                <div className={styles.hero2}>
                    <h1 ref={object=>{welcome=object}}>Welcome</h1>
                    <p>Let's connect you with a friend. Meet people you share similar interests with.</p>
                    <div className={styles.buttonBox}>
                        <Link to='/signup'><button>Sign Up</button></Link>
                        <Link to='/signin'><button style={{ backgroundImage:" linear-gradient(90deg,#41A3FA,#41a4fa86)"}}>Sign In</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing; 
