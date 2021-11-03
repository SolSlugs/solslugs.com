import React from 'react';
import './css/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Home } from './Home';
import { Rankings } from './Rankings';
import { Attributes } from './Attributes';
import { Designer } from './Designer';

function App() {
    return (
        <Router>
            <main>
                <div id="content" style={{ minHeight: '800px' }}>
                    <div className="frame frame--screen">
                        <nav className="frame__links frame__links--header">
                            <Link to='/'>Home</Link>
                            <Link to='/rankings'>Rankings</Link>
                            <Link to='/attributes'>Attributes</Link>
                            <Link to='/designer'>Designer</Link>
                        </nav>
                        <div className="frame__fill">
                        </div>
                        <div className="frame__links">
                            <a href="https://twitter.com/SolSlugsNFT">
                                <FontAwesomeIcon icon={faTwitter}/>
                            </a>
                            <a href="https://discord.gg/zqdrguPfUa">
                                <FontAwesomeIcon icon={faDiscord}/>
                            </a>
                        </div>
                    </div>
                    <Switch>
                        <Route exact path='/'>
                            <Home/>
                        </Route>
                        <Route path='/rankings'>
                            <Rankings/>
                        </Route>
                        <Route path='/attributes'>
                            <Attributes/>
                        </Route>
                        <Route path='/designer'>
                            <Designer/>
                        </Route>
                    </Switch>
                </div>
                <footer className="frame">
                    <div className="frame__links">
                        <a href="https://twitter.com/SolSlugsNFT">
                            <FontAwesomeIcon icon={faTwitter}/>
                        </a>
                        <a href="https://discord.gg/zqdrguPfUa">
                            <FontAwesomeIcon icon={faDiscord}/>
                        </a>
                    </div>
                </footer>
            </main>
        </Router>
    );
}

export default App;
