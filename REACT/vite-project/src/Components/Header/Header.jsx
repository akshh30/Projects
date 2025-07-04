import './Header.css'
import Srch from './comp/srch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSpotify} from'@fortawesome/free-brands-svg-icons'




const Header = ()=>{

    return <div className='links'>
    <h1 className='icon'><FontAwesomeIcon icon={faSpotify} /></h1>
    
   

   <div className='srch'>
    <Srch/>
   </div >
   
   <div className='form'>
   <button href='' >Log in</button></div>
    </div>
}

export default Header;