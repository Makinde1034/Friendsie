import React from 'react'
import Styles from './styles/SignIn.module.css' 
import Pizza from './images/undraw_pizza_sharing_wxop-removebg-preview.png'

function SignIn() {
    return (
        <div className={Styles.SignIn}>
            <div className={Styles.half}>
                <div className={Styles.content}>
                    <img src={Pizza} alt=""/>
                </div>
            </div>
            <div className={Styles.bottom}>
                <form action="">
                    <h3>Sign In</h3>
                    <label htmlFor="">Email</label>
                    <input placeholder='michealscott@gmail.com' type="text"/>
                    <label htmlFor="">Password</label>
                    <input placeholder="********" type="text"/>
                    <button>Sign In</button>
                </form>
            </div>
        </div>
    )
}

export default SignIn;
