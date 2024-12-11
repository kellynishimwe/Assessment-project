
import {BrowserRouter as Router,Routes,Route} from  "react-router-dom"

import Login from "./components/Login"
import SignUp from "./components/SignUp"


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={ <SignUp/>}/>
        </Routes>
      </Router>
     
    </div>
  )
}

export default App



