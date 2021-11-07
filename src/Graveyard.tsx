import React from 'react';
import { resetStyles } from './App';
import { fetchBurntData, createBurntMap, calculateRanks } from './Rankings';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Loading } from './Rankings';

const ranks = require('./ranks.json');

interface BurntSlug {
    name: number;
    rank: number;
    mint: string;
}

function BurntSlug(props: { slug: BurntSlug }) {
    const { slug } = props;

    return (
        <div style={{
            position: 'relative',
        }}>
            <span style={{
                position: 'absolute',
                top: 15,
                left: 20,
                fontSize: '25px',
                zIndex: 2,
                color: 'yellow',
            }}>
                {`Formerly rank ${slug.rank}`}
            </span>
            <LazyLoadImage
                src={`/img/all/${slug.name.toString().padStart(5, '0')}.png`}
                alt={`Burnt Slug ${slug.name}`}
                style={{
                    width: '256px',
                    height: '256px',
                    borderRadius: '5px',
                    padding: '10px',
                }}
            />
        </div>
    );
}

export function Graveyard() {
    React.useEffect(() => {
        resetStyles();
        document.body.style.background = '#000000';
        document.body.style.backgroundImage = `url('/img/fire-bg.gif')`;
        document.body.style.backgroundRepeat = 'repeat';
        document.body.style.fontFamily = 'TimesNewRoman, Times New Roman, Times, Baskerville, Georgia, serif';
        document.body.style.cursor = `url('/img/cursor.cur'), auto`;

        const audio = document.getElementById('audio');

        if (audio) {
            (audio as HTMLAudioElement).volume = 0.5;
        }

        document.addEventListener('click', function() {
            (document.getElementById('audio') as HTMLAudioElement).play()
        }, { once: true });

        loadData();
    }, []);

    const [burntSlugs, setBurntSlugs] = React.useState<BurntSlug[]>([]);
    const [isLoading, setIsLoading] = React.useState(true);

    async function loadData() {
        const data = await fetchBurntData();

        if (!data) {
            return;
        }

        const burntMap = createBurntMap(data);
        const preBurnRankMap = calculateRanks(ranks, 'name');

        const burnt = [];

        for (const rank of ranks) {
            if (burntMap.get(rank.mint)) {
                burnt.push({
                    name: rank.name,
                    rank: preBurnRankMap.get(rank.name).rank,
                    mint: rank.mint,
                });
            }
        }

        setBurntSlugs(burnt);
        setIsLoading(false);
    }

    if (isLoading) {
        return <Loading/>;
    }

    return (
        <div style={{
            marginTop: '100px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'start',
        }}>
            <audio
                style={{
                    display: 'hidden',
                }}
                src='/audio/intheend.mp3'
                id='audio'
                loop
            />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <img src='/img/tombstone.gif' alt='Fire'/>
                <img src='/img/fire.gif' alt='Fire'/>
                <span style={{
                    color: 'blue',
                    fontSize: '40px',
                }}>
                    Welcome to the
                </span>
                <img src='/img/graveyard.gif' alt='Graveyard'/>
                <img src='/img/fire.gif' alt='Fire'/>
                <img src='/img/tombstone.gif' alt='Fire'/>
            </div>
            <span
                className='rainbowText'
                style={{
                    fontSize: '40px',
                    fontFamily: 'Comic Sans MS, Chalkboard SE, Comic Neue, cursive, sans-serif',
                }}
            >
                {`${burntSlugs.length} slugs have been burnt`}
            </span>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                {burntSlugs.map((s, i) => (
                    <BurntSlug
                        slug={s}
                        key={i}
                    />
                ))}
            </div>
            <img
                src='/img/skeleton.gif'
                alt='Skeleton'
                style={{
                    position: 'fixed',
                    bottom: 0,
                    left: 100,
                    width: '174px',
                    height: '417px',
                }}
            />
            <img
                src='/img/skeleton.gif'
                alt='Skeleton'
                style={{
                    position: 'fixed',
                    bottom: 0,
                    right: 100,
                    width: '174px',
                    height: '417px',
                }}
            />
        </div>
        
    );
}
