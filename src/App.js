import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/customer/HomePage';
import LoginPage from './pages/login/LoginPage';

function App() {
    return (
        // <Router>
        //     <Route path="/" element={<HomePage />} />
        //     <Route path="/login" element={<LoginPage />} />
        // </Router>
        <HomePage />
    );
}

export default App;
