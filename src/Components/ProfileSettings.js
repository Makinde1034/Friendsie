import React,{useState,useContext} from 'react'
import Styles from './styles/ProfileSettings.module.css'
import Nav from './Nav'
import MobileNav from './MobileNav'
import {BurgerState} from './Context/BurgerContext'


function ProfileSettings(){

    const [interest, setInterest] = useState('');

    const [IntArray, setIntArray] = useState([]);

    
    function getValue(e){
        setInterest(e.target.value);
    }


    function addInterest(e){
        e.preventDefault();
        setIntArray([...IntArray,{name:interest}]);
        setInterest('');
    }

    const [stop, setStop] = useState(false);

    if(IntArray.length>5){
        setStop(true);
    }

    // mobile nav control
    const {slide} = useContext(BurgerState);
    const [Click,setClick] = slide

   

    return (
        <div>
            <Nav />
            <div className={Click ? Styles.active : Styles.nav}>
                <MobileNav />
            </div>
            <div className={Styles.settings}>
                <h3>Profile Settings</h3>
                <div className={Styles.profilePicture}></div>
                <form action="">
                    <input type="file"/>
                    <div style={{display:'flex',flexDirection:'column'}}>
                        <label htmlFor="">Interests</label>
                        <div className={Styles.inputBox}>
                           <input onChange={getValue} value={interest} style={{border:'1px solid black'}} type="text"/> 
                           <button disabled={stop}  onClick={addInterest}>+</button>
                        </div>
                        {IntArray.map(item=>(
                            <li className={Styles.list}>{item.name}</li>
                        ))}
                    </div>
                    <label htmlFor="">Bio</label>
                    <textarea type="text"/>
                    <label htmlFor="">Username</label>
                    <input type="text"/>
                    
                </form>
            </div>
        </div>
    )
}

export default ProfileSettings
