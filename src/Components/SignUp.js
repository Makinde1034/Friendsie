import React from 'react'
import styles from './styles/SignUp.module.css'
import group from './images/undraw_having_fun_iais-removebg-preview.png'
import {Link} from 'react-router-dom'

function SignUp() {
    return (
        <div>
            <div  className={styles.main}>
                <div className={styles.main1Wrap}>
                   <div className={styles.main1}>
                        <img src={group} alt=""/>
                        <p>Let's connect you with a friend. Meet people you share similar interests with.</p>
                    </div> 
                </div>
                
                <div className={styles.main2}>
                    <form action="">
                        <h3>Friendsie</h3>
                        <label htmlFor="">Email</label>
                        <input  type="text"/>
                        <label htmlFor="">Password</label>
                        <input placeholder='********' type="password"/>
                        <label htmlFor="">Username</label>
                        <input type="text"/>
                        <button>Sign Up</button>
                        <Link to='/signin'><p>Already have an account? Log In</p></Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp
