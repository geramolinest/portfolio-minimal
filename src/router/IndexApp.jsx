import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";

const IndexApp = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<MainPage/>}/>
            </Routes>
        </Router>
    );
}

export default IndexApp;
