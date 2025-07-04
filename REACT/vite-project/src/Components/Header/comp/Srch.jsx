import './Srch.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from'@fortawesome/free-solid-svg-icons'
import {faX} from'@fortawesome/free-solid-svg-icons'
import{faHouse}from'@fortawesome/free-solid-svg-icons'

const Srch = ()=>{
   return <div className='home'>
   <a className='hom' href='App.jsx'><FontAwesomeIcon icon={faHouse} /></a>
            <div className='srcb'>
                 <a href=''><FontAwesomeIcon icon={faMagnifyingGlass} /></a>
                 <input type="text" placeholder='What do you want to play' />
                 <a href=""> <FontAwesomeIcon icon={faX} /></a>  
           </div>
</div>



}

export default Srch ;