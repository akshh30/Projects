import './App.css';




const App = ()=>{

 return (
        <div className="main-cont">
        
        <h1>Password Manager</h1>

        <div className='tabOne'>

          <div className='passTab'>
          <h1>Add New Password</h1>

          
        <input  type="text" placeholder='Enter Website' />
        <input  type="text"  placeholder='Enter Username'/>
        <input  type="text" placeholder='Enter Password' />



        <div className='btn'>
          <button>Add</button>
        </div>

          </div>

        </div>

        <div className='tabTwo'></div>   
        

 
 
       </div>
       )
  

}

export default App;