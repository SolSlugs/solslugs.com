import React from 'react';
import { resetStyles } from './App';

export function Home() {
    React.useEffect(() => {
        resetStyles();
	    document.body.style.background = 'linear-gradient(132deg, rgba(88,44,216,1) 0%, rgba(0, 0, 0, 1) 100%)';
    }, []);

    return (
        <>
            <header className="intro">
                <div className="intro__showcase">
                    <div className="intro__showcase-img">
                        <img className="grid__item-img img--flip" src="img/SlugsGroup.png" alt="Sol Slugs" />
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 773.17 412.62"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M749.9,277.58l14.73-66.84-16.34-7.32c-4.26-1.91-27-11.43-57.58-11.43-26.53,0-48.76,9.16-63.68,24.68l-11.7-8.1c-15.72-10.88-42.39-17.9-68-17.9A126.11,126.11,0,0,0,487,206.12V128.05H434.19V4.75H334V37.81C313.18,14.51,282.39,0,247.46,0c-40.86,0-76.07,19.87-96.19,50.43L158,20.07l-16.34-7.32c-4.26-1.91-27-11.43-57.58-11.43C34.56,1.32,0,33.17,0,78.76A87.13,87.13,0,0,0,2.06,97.93l3.4,101.93,9.71,5.65A87.4,87.4,0,0,0,26.52,211C9.84,224.71,0,245.11,0,269.43A87.13,87.13,0,0,0,2.06,288.6l3.4,101.93,9.71,5.64C31,405.36,55.63,411.3,78,411.3c25.1,0,45.82-6.37,60.89-17.94v14.51h153V390.49c17.34,13.63,40.71,21.6,67.5,21.6,41.19,0,74.29-18.84,89.8-48.12,21.76,32.11,60.11,48.65,98.16,48.65,29.75,0,54.49-6.16,72.07-17.84l2.4,1.39c15.81,9.19,40.46,15.13,62.81,15.13,54.61,0,88.53-30.08,88.53-78.5C773.17,310.47,765,291.64,749.9,277.58Z"/><path d="M78,198.63c-20.06,0-40.39-5.54-51.75-12.14l-5-49.9c15,9.76,34.06,16.63,49.9,16.63,10.56,0,17.16-2.91,17.16-8.45,0-4.49-3.44-6.6-14.52-9C37.05,127.87,22,105.43,22,78.76,22,46,46.55,23.32,84,23.32c22.18,0,40.93,6.07,48.58,9.5l-9.76,44.36c-7.93-3.43-22.18-7.66-31.69-7.66-11.61,0-15,2.91-15,7.13,0,4.75,5,6.07,13.73,7.92,35.65,7.92,54.65,28,54.65,57.56C144.5,177.51,122.06,198.63,78,198.63Z" fill="#9aff5d"/><path d="M247.46,200c-48.31,0-92.14-35.11-92.14-89s43.83-89,92.14-89,92.15,35.11,92.15,89S295.78,200,247.46,200Zm0-127.52c-19.53,0-34.85,17.95-34.85,39.07s15.32,38.55,34.85,38.55,34.86-17.42,34.86-38.55S267,72.43,247.46,72.43Z" fill="#9aff5d"/><path d="M356,195.2V26.75h56.23v123.3H465V195.2Z" fill="#9aff5d"/><path d="M78,389.3c-20.06,0-40.39-5.55-51.75-12.15l-5-49.9c15,9.77,34.06,16.64,49.9,16.64,10.56,0,17.16-2.91,17.16-8.45,0-4.49-3.44-6.6-14.52-9C37.05,318.54,22,296.1,22,269.43,22,236.69,46.55,214,84,214c22.18,0,40.93,6.07,48.58,9.5l-9.76,44.36c-7.93-3.44-22.18-7.66-31.69-7.66-11.61,0-15,2.9-15,7.13,0,4.75,5,6.07,13.73,7.92,35.65,7.92,54.65,28,54.65,57.56C144.5,368.18,122.06,389.3,78,389.3Z" fill="#9aff5d"/><path d="M160.86,385.87V217.42H217.1v123.3h52.8v45.15Z" fill="#9aff5d"/><path d="M359.4,390.09c-41.19,0-77.36-23.76-77.36-65.48V217.42h56.23V321.18c0,15.05,12.15,20.86,21.66,20.86s21.64-5.81,21.64-20.6v-104h55.18V324.61C436.75,366.33,400.58,390.09,359.4,390.09Z" fill="#9aff5d"/><path d="M547.36,390.62c-47.52,0-94.25-30.63-94.25-89,0-57.82,47.26-89,94.25-89,23.5,0,45.15,6.86,55.45,14L592,271.81c-8.45-5.81-23.49-10.3-39.07-10.3-28.52,0-44.36,19.54-44.36,42.24,0,19.28,14.52,39.34,40.93,39.34a32.25,32.25,0,0,0,10.29-1.32V325.93H540.23V283.42h70.5V374C598.32,383.75,577.2,390.62,547.36,390.62Z" fill="#9aff5d"/><path d="M684.64,389.3c-20.07,0-40.4-5.55-51.75-12.15l-5-49.9c15,9.77,34,16.64,49.89,16.64,10.57,0,17.17-2.91,17.17-8.45,0-4.49-3.44-6.6-14.52-9-36.7-7.92-51.75-30.36-51.75-57,0-32.74,24.55-55.44,62-55.44,22.18,0,40.92,6.07,48.58,9.5l-9.77,44.36c-7.92-3.44-22.17-7.66-31.68-7.66-11.62,0-15.05,2.9-15.05,7.13,0,4.75,5,6.07,13.73,7.92,35.64,7.92,54.65,28,54.65,57.56C751.17,368.18,728.73,389.3,684.64,389.3Z" fill="#9aff5d"/></g></g></svg>
                </div>
                <div className="intro__hint">
                    <div id="content">
                        <span>SOLD OUT</span>
                    </div>
                </div>
            </header>
            <div className="spacer"></div>
            <svg className="svgtext svgtext--1" width="120%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1000 200">
                <path id="text-curve1" d="M 0 100 Q 250 200 500 100 Q 750 0 1000 100" fill="none"/>
                <text>
                    <textPath href="#text-curve1">
                        ???? AHHHHHHH
                    </textPath>
                </text>
            </svg>
            <div className="grid" id="collection">
                <div className="grid__item">
                    <img className="grid__item-img" src="img/Slug8-export.svg" alt="Disco slug" />
                    <h3 className="grid__item-title">Cool, badass, sluggy</h3>
                    <p className="grid__item-description">These slitherin' slimy fools are coming to Solana! 10,000 slugs, over 130 attributes, and some of the most badass combinations are waiting for you!</p>
                </div>
                <div className="grid__item">
                    <img className="grid__item-img img--flip" src="img/Slug7-export.svg" alt="Mage slug" />
                    <h3 className="grid__item-title">About Us</h3>
                    <p className="grid__item-description">The Solana Slugs devs are a group of NFT enthusiasts that decided to get together and create something great for the community! It all started with a slug drawing, and then snowballed into what we have today.</p>
                </div>
            </div>
            <div className="grid-wrap" id="wen">
                <div className="svgtext-wrap">
                    <svg className="svgtext svgtext--3" width="120%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1000 200">
                        <path id="text-curve3" d="M 0 150 Q 200 50 500 50 Q 800 50 1000 150 " fill="none"/>
                        <text>
                            <textPath href="#text-curve3">
                            10,000 slugs sliding on Solana
                            </textPath>
                        </text>
                    </svg>
                    <svg className="svgtext svgtext--3" width="120%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1000 200">
                        <path id="text-curve4" d="M 0 150 Q 200 50 500 50 Q 800 50 1000 150 " fill="none"/>
                        <text>
                            <textPath href="#text-curve4">
                            Which one are you taking home?
                            </textPath>
                        </text>
                    </svg>
                </div>
                <div className="grid" id="wen">
                    <div className="grid__item">
                        <img className="grid__item-img" src="img/Slug11.svg" alt="Spooky slug" />
                        <h4 className="grid__item-title">Wen slug?</h4>
                        <p className="grid__item-description">Mint date: October 23rd</p>
                        <h4 className="grid__item-title">How many slug?</h4>
                        <p className="grid__item-description">10,000 Slugs to be minted!</p>
                        <h4 className="grid__item-title">Cost of slug?</h4>
                        <p className="grid__item-description">Free! You only pay the gas fee!</p>
                    </div>
                    <div className="grid__item">
                    </div>
                </div>
            </div>
            <div className="grid-wrap" id="roadmap">
                <div className="grid__item bigtext">
                    <div className="svgtext-wrap">
                        <svg className="svgtext svgtext--1" width="120%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1000 200">
                            <path id="text-curve1" d="M 0 100 Q 250 200 500 100 Q 750 0 1000 100" fill="none"/>
                            <text>
                                <textPath href="#text-curve1">
                                    THIS IS A ROADMAP WOO
                                </textPath>
                            </text>
                        </svg>
                    </div>
                    <div className="roadmap-items">
                        <div className="roadmap-item">
                            <h3 className="grid__item-title">Release!</h3>
                            <p className="grid__item-description">All of the Slugs have slithered out of their homes and into your wallets! 10% of the slug supply will be preminted for the Developer team.
                            </p>
                        </div>
                        <div className="roadmap-item">
                            <h3 className="grid__item-title">Verifying with Secondary Markets</h3>
                            <p className="grid__item-description">We will be reaching out to secondary markets before mint and attempt to get pre-approval so the community can get to trading slugs as soon as possible.
                            </p>
                        </div>
                        <div className="roadmap-item">
                            <h3 className="grid__item-title">Quality of Life</h3>
                            <p className="grid__item-description">Improving the functionality of our discord is one of our top initial priorities! This includes Grape verification, a Sales bot, Rarity tools, and more!
                            </p>
                        </div>
                        <div className="roadmap-item">
                            <h3 className="grid__item-title">Slug Vault</h3>
                            <p className="grid__item-description">10% of all royalties will go to a treasury wallet that will be used for community growth and funding future roadmap features.
                            </p>
                        </div>
                        <div className="roadmap-item">
                            <h3 className="grid__item-title">Slug Events</h3>
                            <p className="grid__item-description">The Slugiverse has a lot of content out there, this will be our way of keeping the project interesting! These dynamic events will have unique themes and rewards for Slug holders.
                            </p>
                        </div>
                        <div className="roadmap-item">
                            <h3 className="grid__item-title">Slug Generations</h3>
                            <p className="grid__item-description">The first generation of Sol Slugs isn't the only one! We will be releasing more generations of increasingly rare and cool slugs, perhaps even mini slugs for slug holders too!
                            </p>
                        </div>
                        <div className="roadmap-item">
                            <h3 className="grid__item-title">And beyond!</h3>
                        </div>
                    </div>
                </div>
                
                <svg className="svgtext svgtext--4" width="120%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1000 200">
                    <path id="textcircle" d="M 0 0 Q 200 150 500 150 Q 850 150 1000 0 " fill="none"/>
                    <text>
                        <textPath href="#textcircle">
                        NUT NUT
                        </textPath>
                    </text>
                </svg>

            </div>
            <div className="grid-wrap" id="end">
                <div className="grid">
                    <div className="grid__item">
                        <img className="grid__item-img" src="img/Slug2-export.svg" alt="Pew Pew Slug" />
                    </div>
                    <div className="grid__item">
                        <img className="grid__item-img img--flip" src="img/Slug9-export.svg" alt="Blood Throne Slug" />
                    </div>
                </div>
            </div>
        </>
    );
}


