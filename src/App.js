import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/customer/HomePage';
import LoginPage from './pages/login/LoginPage';

function App() {
    return (
        <Router>
            <Route path="/" exact>
                <HomePage></HomePage>
            </Route>
            <Route path="/login">
                <LoginPage></LoginPage>
            </Route>
        </Router>
        // <HomePage />
    );
}

export default App;
