import React, { Suspense, lazy } from 'react';
import './css/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Home } from './Home';
import { Attributes } from './Attributes';
import { Designer } from './Designer';
import { Loading } from './Rankings';
import { Graveyard } from './Graveyard';
import { Generation2Users } from './Generation2Users';

const Ranks = lazy(() => import('./Rankings'));

export function resetStyles() {
    document.body.style.background = '';
    document.body.style.fontFamily = ''; 
    document.body.style.cursor = '';
}

function App() {
    return (
        <Router>
            <Suspense fallback={<Loading/>}>
                <main>
                    <div id="content" style={{ minHeight: '800px' }}>
                        <div className="frame frame--screen">
                            <nav className="frame__links frame__links--header" style={{ display: 'flex', flexWrap: 'wrap' }}>
                                <Link to='/'>Home</Link>
                                <Link to='/rankings'>Rankings</Link>
                                <Link to='/attributes'>Attributes</Link>
                                <Link to='/designer'>Designer</Link>
                                <Link to='/graveyard'>Graveyard</Link>
                                <Link to='/gen2'>Gen 2 Burns</Link>
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
                            <Route path='/rankings' component={Ranks}/>
                            <Route path='/attributes'>
                                <Attributes/>
                            </Route>
                            <Route path='/designer'>
                                <Designer/>
                            </Route>
                            <Route path='/graveyard'>
                                <Graveyard/>
                            </Route>
                            <Route path='/gen2'>
                                <Generation2Users/>
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
            </Suspense>
        </Router>
    );
}

export default App;
