import './Aside.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faBars,faPlus}from'@fortawesome/free-solid-svg-icons'
const Aside = ()=>{

    return <div >

       <div className='sideBar'><h1>
       <FontAwesomeIcon icon={faBars} />
       </h1>
       <h1>Your Library</h1>
       <h1><FontAwesomeIcon icon={faPlus} /></h1></div>

        <div className='data'>
            <h1>Create your first playlist </h1>
            <h2 className='text'>It's easy will help you</h2>
            <button>Create Playlist</button>
        </div>

    </div>

    
}

export default Aside;