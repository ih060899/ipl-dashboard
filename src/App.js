import './App.scss';
import TeamPage from './pages/TeamPage';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import MatchPage from './pages/MatchPage';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';

function App() {
    return (
        <div className='App'>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path='/'>
                        <HomePage />
                    </Route>

                    <Route exact path='/teams/:teamName'>
                        <TeamPage />
                    </Route>
                    <Route exact path='/teams/:teamName/matches/:year'>
                        <MatchPage />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
