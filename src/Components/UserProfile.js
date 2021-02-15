import React,{useContext} from 'react'
import Nav from './Nav.js'
import Styles from './styles/UserProfile.module.css'
import pic1 from './images/rowan-chestnut-smaS_Uxg4L0-unsplash.jpg'
import pic2 from './images/christiana-rivers-O_XIvDy0pcs-unsplash.jpg'
import pic3 from './images/michael-dam-mEZ3PoFGs_k-unsplash.jpg'
import {Link} from 'react-router-dom'
import MobileNav from './MobileNav'
import {BurgerState} from './Context/BurgerContext'




function UserProfile() {
    const {slide} = useContext(BurgerState);
    const [Click,setClick] = slide

    
    return (
        <div>
            <Nav />
            <div className={Click ? Styles.active : Styles.nav}>
                <MobileNav />
            </div>
            <div className={Styles.LoggedIn}>
                {/* <h4>Welcome Marie</h4> */}
            </div>
            <div className={Styles.profile}>
                <div style={{display:'flex',alignItems:'center',flexDirection:'column'}} className={Styles.curve}>
                    <div className={Styles.circle}>
                
                    </div>
                    <h3>Marie</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti repellat nulla facere minima? Magnam repudiandae necessitatibus asperiores inventore illum. Hic.</p>
                    <Link to='/meet'>
                        <button>Meet Someone</button>
                    </Link>
                </div>
                
                
                {/* pic wrap */}
                <div className={Styles.picWrap}>
                    <div className={Styles.picBox}>
                        <img src={pic1} alt=""/>
                        <img src={pic2} alt=""/>
                    </div>
                    {/* <div className={Styles.BottomPic}>
                        <img src={pic3} alt=""/>
                    </div> */}
                </div>
                

            </div>
        </div>
    )
}

export default UserProfile
