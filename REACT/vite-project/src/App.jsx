import './App.css';
import Header from './Components/Header/Header';
import Aside from './Components/Aside/Aside';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';



const App = ()=>{

 return (
        <div className="main-cont">
        
             <nav className="my-nav">
              <Header/>
             </nav>

            <div className="body-cont">
 
                <aside className="aside-bar">
                  <Aside/>
                </aside>
              
                <div className="main-content">
                  <Main/>
                </div>


            </div>

           <footer className="footer">
            <Footer/>
           </footer>


 
 
       </div>
       )
  

}

export default App;