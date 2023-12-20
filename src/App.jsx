import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import {About, Contact, Home, Services} from "./Context/Pages";
import Sidebar from "./Context/Sidebar/Sidebar";
import {Feedback} from "./Context/Pages/Feedback";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Sidebar>
                    <Routes>
                        <Route path="/about" element={<About/>}></Route>
                        <Route path="/" element={<Home/>}></Route>
                        <Route path="/contacts" element={<Contact/>}></Route>
                        <Route path="/feedback" element={<Feedback/>}></Route>
                    </Routes>
                </Sidebar>
            </BrowserRouter>

        </div>
    );
}

export default App;