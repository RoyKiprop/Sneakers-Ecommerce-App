import Contacts from "./Contacts"
import Dashboard from "./Dashboard"
import Nav from "./Nav"



function Navigation() {


  return (
    <div className="mx-28 my-10 flex items-center justify-between">
    
       <Dashboard/>
       <Nav/>
       <Contacts/>
      
    </div>
  )
}

export default Navigation
