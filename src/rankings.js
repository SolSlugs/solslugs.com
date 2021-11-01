const ranks = require('./ranks.json');
import images from '../img/all/*.png';

let slugMap = new Map();
let rankMap = new Map();
let preBurnRankMap = new Map();

function Input(props) {
    const {
        map,
        setBgValue,
        setSlugValue,
        setChestValue,
        setMouthValue,
        setHeadValue,
        setEyesValue,
        setTailValue,
        setBackValue,
        setHandsValue,
        setRank,
        setName,
        name,
        value,
        setImage,
        style,
        setValue,
        setBurnInfo,
    } = props;

    function handleKeyUp(e) {
        const item = getItem(e.target.value, map);

        if (!item) {
            return;
        }

        const preBurnItem = getItem(item.name.toString(), preBurnRankMap);

        const gainedRanks = preBurnItem.rank - item.rank;

        setItem(
            setRank,
            setName,
            setImage,
            item,
            setBgValue,
            setSlugValue,
            setChestValue,
            setMouthValue,
            setHeadValue,
            setEyesValue,
            setTailValue,
            setBackValue,
            setHandsValue,
            setBurnInfo,
            gainedRanks,
        );
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', ...style }}>
            <span style={{ fontSize: '30px', width: '90px' }}>
                {name}
            </span>
            <input
                type='text'
                style={{
                    marginLeft: '10px',
                    height: '45px',
                    fontSize: '30px',
                    width: '110px',
                    borderRadius: '5px',
                    borderWidth: '1px',
                    borderColor: 'white',
                    borderStyle: 'solid',
                    fontFamily: 'unset',
                    textAlign: 'center',
                }}
                className="rank-input"
                minLength="1"
                maxLength="5"
                pattern="\d+"
                onKeyUp={handleKeyUp}
                onChange={(e) => { setValue(e.target.value)}}
                value={value}
            >
            </input>
        </div>
    );
}

function AttributeValue(props) {
    const { name, attribute } = props;

    let text = name;

    if (attribute !== '') {
        text += ` - ${attribute}`;
    }

    return (
        <div 
            style={{
                width: '250px',
                fontSize: '20px',
                textAlign: 'center',
                height: '80px',
                borderWidth: '1px',
                borderColor: 'white',
                borderRadius: '5px',
                borderStyle: 'solid',
                padding: '7px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '5px',
            }}
        >
            {text}
        </div>
    );
}

function setItem(
    setRank,
    setName,
    setImage,
    item,
    setBgValue,
    setSlugValue,
    setChestValue,
    setMouthValue,
    setHeadValue,
    setEyesValue,
    setTailValue,
    setBackValue,
    setHandsValue,
    setBurnInfo,
    ranksGained,
) {
    const funcMap = new Map([
        ['Background', setBgValue],
        ['Slug', setSlugValue],
        ['Chest', setChestValue],
        ['Mouth', setMouthValue],
        ['Head', setHeadValue],
        ['Eyes', setEyesValue],
        ['Tail', setTailValue],
        ['Back', setBackValue],
        ['Hands', setHandsValue],
    ]);

    for (const attribute of item.attributes) {
        const f = funcMap.get(attribute.trait_type);
        f(attribute.value);
    }

    setRank(item.rank);
    setName(item.name);
    setImage(images[item.name.toString().padStart(5, '0')]);

    if (ranksGained <= 0) {
        setBurnInfo('');
    } else {
        setBurnInfo(`This slug has gained ${ranksGained} rank${ranksGained > 1 ? 's' : ''} from slug burns!`);
    }
}

function Ranking() {
    const [bgValue, setBgValue] = React.useState('');
    const [slugValue, setSlugValue] = React.useState('');
    const [chestValue, setChestValue] = React.useState('');
    const [mouthValue, setMouthValue] = React.useState('');
    const [headValue, setHeadValue] = React.useState('');
    const [eyesValue, setEyesValue] = React.useState('');
    const [tailValue, setTailValue] = React.useState('');
    const [backValue, setBackValue] = React.useState('');
    const [handsValue, setHandsValue] = React.useState('');

    const [rankValue, setRankValue] = React.useState('');
    const [numValue, setNumValue] = React.useState('');

    const [imageSrc, setImageSrc] = React.useState('');

    const [burnInfo, setBurnInfo] = React.useState('');

    React.useEffect(() => {
        setItem(
            setRankValue,
            setNumValue,
            setImageSrc,
            rankMap.get(1),
            setBgValue,
            setSlugValue,
            setChestValue,
            setMouthValue,
            setHeadValue,
            setEyesValue,
            setTailValue,
            setBackValue,
            setHandsValue,
            setBurnInfo,
            0,
        );
    }, []);

    return (
        <div style={{ marginTop: '100px', textTransform: 'uppercase' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Input
                        name={'Rank'}
                        map={rankMap}
                        setBgValue={setBgValue}
                        setSlugValue={setSlugValue}
                        setChestValue={setChestValue}
                        setMouthValue={setMouthValue}
                        setHeadValue={setHeadValue}
                        setEyesValue={setEyesValue}
                        setTailValue={setTailValue}
                        setBackValue={setBackValue}
                        setHandsValue={setHandsValue}
                        value={rankValue}
                        setImage={setImageSrc}
                        setRank={setRankValue}
                        setName={setNumValue}
                        setValue={setRankValue}
                        setBurnInfo={setBurnInfo}
                    />
                    <Input
                        style={{ marginTop: '20px' }}
                        name={'Slug #'}
                        map={slugMap}
                        setBgValue={setBgValue}
                        setSlugValue={setSlugValue}
                        setChestValue={setChestValue}
                        setMouthValue={setMouthValue}
                        setHeadValue={setHeadValue}
                        setEyesValue={setEyesValue}
                        setTailValue={setTailValue}
                        setBackValue={setBackValue}
                        setHandsValue={setHandsValue}
                        value={numValue}
                        setImage={setImageSrc}
                        setRank={setRankValue}
                        setName={setNumValue}
                        setValue={setNumValue}
                        setBurnInfo={setBurnInfo}
                    />
                    <div style={{
                        marginTop: '20px',
                    }}>
                        {preBurnRankMap.size - rankMap.size} slugs have been burnt
                    </div>
                    <div style={{
                        marginTop: '10px',
                    }}>
                        {rankMap.size} slugs are remaining
                    </div>
                </div>
                <img
                    id="slug-image"
                    src={imageSrc}
                    style={{
                        width: '512px',
                        height: '512px',
                        marginLeft: '20px',
                        marginRight: '20px',
                        borderRadius: '5px',
                    }}
                />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <AttributeValue name='Background' attribute={bgValue}/>
                        <AttributeValue name='Slug' attribute={slugValue}/>
                        <AttributeValue name='Chest' attribute={chestValue}/>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <AttributeValue name='Mouth' attribute={mouthValue}/>
                        <AttributeValue name='Head' attribute={headValue}/>
                        <AttributeValue name='Eyes' attribute={eyesValue}/>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <AttributeValue name='Tail' attribute={tailValue}/>
                        <AttributeValue name='Back' attribute={backValue}/>
                        <AttributeValue name='Hands' attribute={handsValue}/>
                    </div>
                </div>
            </div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '20px',
                fontSize: '24px',
            }}>
                {burnInfo}
            </div>
        </div>
    );
}

function getItem(key, map) {
    key = key.trim();

    if (key === '') {
        return;
    }

    const num = Number(key);

    if (Number.isNaN(num)) {
        return;
    }

    return map.get(num);
}

async function fetchBurntData() {
    const url = 'https://letsalllovelain.com/burntslugs/';

    try {
        const data = await fetch(url);

        return data.json();
    } catch (err) {
        console.log(`Failed to fetch burn data: ${err.toString()}!`);
        return undefined;
    }
}

function calculateStatRarity(items) {
    const rarityMap = new Map();

    for (const item of items) {
        for (const layer of item.attributes) {
            const existing = rarityMap.get(`${layer.trait_type}-${layer.value}`);

            const newCount = existing
                ? existing + 1
                : 1;

            rarityMap.set(`${layer.trait_type}-${layer.value}`, newCount);
        }
    }

    return rarityMap;
}

function calculateRarity(
    rarityMap,
    item,
    nftCount) {

    let totalRarityScore = 0;

    const attributes = [];

    for (const layer of item.attributes) {
        const attributeCount = rarityMap.get(`${layer.trait_type}-${layer.value}`);
        const rarityScore = 1 / (attributeCount / nftCount);
        totalRarityScore += rarityScore;
        attributes.push({
            trait_type: layer.trait_type,
            value: layer.value + ` - ${((attributeCount / nftCount) * 100).toFixed(2)}%`,
        });
    }

    return {
        rarity: totalRarityScore,
        attributes,
    };
}

function calculateRanks(items, field) {
    const statRarity = calculateStatRarity(items);

    const rankedItems = [];

    for (let item of items) {
        const { rarity, attributes } = calculateRarity(
            statRarity,
            item,
            items.length,
        );

        rankedItems.push({
            name: item.name,
            rarity,
            attributes,
            mint: item.mint,
        });
    }

    const sortedItems = rankedItems.sort((a, b) => b.rarity - a.rarity);

    const rankMap = new Map();

    let rank = 1;

    for (let item of sortedItems) {
        item.rank = rank++;
        rankMap.set(item[field], item);
    }

    return rankMap;
}

function createBurntMap(burntData) {
    const map = new Map();

    for (const token of burntData.tokenInfo) {
        map.set(token.mint, token.burnt);
    }

    return map;
}


window.addEventListener('load', async () => {
    const burntData = await fetchBurntData();
    const burntMap = createBurntMap(burntData);

    let nonBurnt = [];

    for (let item of ranks) {
        if (!burntMap.get(item.mint)) {
            nonBurnt.push(item);
        }
    }

    preBurnRankMap = calculateRanks(ranks, 'name');
    rankMap = calculateRanks(nonBurnt, 'rank');
    slugMap = calculateRanks(nonBurnt, 'name');

    try {
        var domContainer = document.getElementById('react');
        ReactDOM.render(React.createElement(Ranking), domContainer);
    } catch (err) {
        console.log(`Failed to load react component: ${err.toString()}`);
    }
});
