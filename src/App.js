import Content from "./content";
import SignIn from "./signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
  
function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
           <Routes>
             <Route path="/" element={<SignIn />} />
             <Route path="/todo" element={<Content />} />
           </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
