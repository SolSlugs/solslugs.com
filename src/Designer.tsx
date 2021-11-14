import React from 'react';
import { fabric } from 'fabric';
import { Button, TextField, makeStyles } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import * as defaultImages from './Images';
import { Attribute } from './Types';
import { Slug } from './Slug';
import { resetStyles } from './App';
import { Loading, calculateStatRarity, calculateRarity } from './Rankings';

const CANVAS_SIZE = 512;

const useButtonStyles = makeStyles((theme) => ({
    root: {
        color: 'white',
        backgroundColor: 'rgba(88, 44, 216, 1)',
        borderColor: 'white',
        borderStyle: 'solid',
        borderWidth: '1px',

        '&:hover': {
            backgroundColor: 'rgba(88, 44, 216, 1)',
        },
    },
}));

const useInputStyles = makeStyles((theme) => ({
    root: {
        /* Input label colour */
        color: 'white',

        '&.Mui-focused': {
            color: 'white',
        },
    },
    inputRoot: {
        /* Input text colour */
        color: "white",
        borderColor: 'white !important',

        /* White input outline */
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white !important',
            borderWidth: '1px !important',
        },
    },
    '@global': {
        '.MuiSvgIcon-root': {
            color: 'white !important',
        },
    }
}));

export function Designer() {
    const [canvas, setCanvas] = React.useState<fabric.StaticCanvas>();

    const availableBackgrounds = defaultImages.backgrounds;
    const availableColor = defaultImages.color;
    const availableChest = defaultImages.chest;
    const availableMouth = defaultImages.mouth;
    const availableBack = defaultImages.back;
    const availableHead = defaultImages.head;
    const availableEyes = defaultImages.eyes;
    const availableTail = defaultImages.tail;
    const availableHands = defaultImages.hands;
    
    const backgroundOptions = [...availableBackgrounds];
    const colorOptions = [...availableColor];
    const chestOptions = [...availableChest];
    const mouthOptions = [...availableMouth];
    const backOptions = [...availableBack];
    const headOptions = [...availableHead];
    const eyesOptions = [...availableEyes];
    const tailOptions = [...availableTail];
    const handOptions = [...availableHands];

    for (const arr of [
        backgroundOptions,
        colorOptions,
        chestOptions,
        mouthOptions,
        backOptions,
        headOptions,
        eyesOptions,
        tailOptions,
        handOptions,
    ]) {
        arr.sort((a, b) => a.name.localeCompare(b.name));

        arr.unshift({
            name: 'None',
            image: '',
        })
    }

    const [backgroundVal, setBackground] = React.useState<Attribute>(pickRandomAttribute(availableBackgrounds));
    const [colorVal, setColor] = React.useState<Attribute>(pickRandomAttribute(availableColor));
    const [chestVal, setChest] = React.useState<Attribute>(pickRandomAttribute(availableChest));
    const [mouthVal, setMouth] = React.useState<Attribute>(pickRandomAttribute(availableMouth));
    const [backVal, setBack] = React.useState<Attribute>(pickRandomAttribute(availableBack));
    const [headVal, setHead] = React.useState<Attribute>(pickRandomAttribute(availableHead));
    const [eyesVal, setEyes] = React.useState<Attribute>(pickRandomAttribute(availableEyes));
    const [tailVal, setTail] = React.useState<Attribute>(pickRandomAttribute(availableTail));
    const [handVal, setHands] = React.useState<Attribute>(pickRandomAttribute(availableHands));
    const [canvasValue, setCanvasValue] = React.useState({ name: `${CANVAS_SIZE}x${CANVAS_SIZE}`, value: CANVAS_SIZE });
    const [isLoading, setIsLoading] = React.useState(true);
    const [statRarity, setStatRarity] = React.useState(new Map());
    const [rarities, setRarities] = React.useState<number[]>([]);
    const [hypotheticalRank, setHypotheticalRank] = React.useState('');

    const buttonClasses = useButtonStyles();
    const inputClasses = useInputStyles();

    async function loadData() {
        const url = 'https://letsalllovelain.com/burntslugs/';

        try {
            const res = await fetch(url);
            const data = await res.json();

            let nonBurnt = [];

            for (let item of data.tokenInfo) {
                if (!item.burnt) {
                    nonBurnt.push(item);
                }
            }

            const rarityMap = calculateStatRarity(nonBurnt);

            setStatRarity(rarityMap);

            const rarities = [];

            for (let item of nonBurnt) {
                if (!item.attributes) {
                    console.log(item);
                }

                const { rarity } = calculateRarity(
                    rarityMap,
                    item,
                    nonBurnt.length,
                );

                rarities.push(rarity);
            }

            const sortedItems = rarities.sort((a, b) => b - a);

            setRarities(sortedItems);
        } catch (err) {
            console.log(`Failed to fetch burn data: ${(err as any).toString()}!`);
            return;
        }

        setIsLoading(false);
    }

    React.useEffect(() => {
        if (isLoading) {
            return;
        }

        const canvasObj = new fabric.StaticCanvas('canvas', {
            width: canvasValue.value,
            height: canvasValue.value,
        });

        setCanvas(canvasObj);
    /* eslint-disable react-hooks/exhaustive-deps */
    }, [isLoading]);

    React.useEffect(() => {
        resetStyles();
        document.body.style.background = 'rgba(88, 44, 216, 1)';
        loadData();
    }, []);

    React.useEffect(() => {
        if (isLoading) {
            return;
        }

        const canvasObj = new fabric.StaticCanvas('canvas', {
            width: canvasValue.value,
            height: canvasValue.value,
        });

        setCanvas(canvasObj);
    /* eslint-disable react-hooks/exhaustive-deps */
    }, [canvasValue.value]);

    React.useEffect(() => {
        if (canvas) {
            const slug = new Slug(
                backgroundVal,
                colorVal,
                chestVal,
                mouthVal,
                backVal,
                headVal,
                eyesVal,
                tailVal,
                handVal,
            );

            slug.setCanvas(canvas);

            slug.draw(canvasValue.value);

            calculateHypotheticalRank();
        }
    }, [
        canvas,
        backgroundVal,
        colorVal,
        chestVal,
        mouthVal,
        backVal,
        headVal,
        eyesVal,
        tailVal,
        handVal,
        canvasValue,
    ]);

    function calculateHypotheticalRank() {
        const attributes = [
            {
                trait_type: 'Background',
                value: backgroundVal.name,
            },
            {
                trait_type: 'Slug',
                value: colorVal.name,
            },
            {
                trait_type: 'Chest',
                value: chestVal.name,
            },
            {
                trait_type: 'Mouth',
                value: mouthVal.name,
            },
            {
                trait_type: 'Back',
                value: backVal.name,
            },
            {
                trait_type: 'Head',
                value: headVal.name,
            },
            {
                trait_type: 'Eyes',
                value: eyesVal.name,
            },
            {
                trait_type: 'Tail',
                value: tailVal.name,
            },
            {
                trait_type: 'Hands',
                value: handVal.name,
            },
        ];

        const rarity = calculateHypotheticalRarity(
            statRarity,
            attributes,
            rarities.length + 1,
        );

        let rank = 1;

        for (const existingRarity of rarities) {
            if (rarity < existingRarity) {
                rank++;
            } else {
                break;
            }
        }

        setHypotheticalRank(rank.toString());
    }

    function calculateHypotheticalRarity(
        rarityMap: Map<string, any>,
        attributes: any[],
        nftCount: number) {

        let totalRarityScore = 0;

        for (const layer of attributes) {
            let attributeCount = rarityMap.get(`${layer.trait_type}-${layer.value}`);

            if (!attributeCount) {
                if (layer.trait_type !== 'Background') {
                    console.log(layer.trait_type, layer.value, attributeCount);
                } else {
                    attributeCount = 1;
                }
            }

            const rarityScore = 1 / (attributeCount / nftCount);

            totalRarityScore += rarityScore;
        }

        return totalRarityScore;
    }

    function handleRandomButton() {
        if (!canvas) {
            return;
        }

        setBackground(pickRandomAttribute(availableBackgrounds));
        setColor(pickRandomAttribute(availableColor));
        setChest(pickRandomAttribute(availableChest));
        setMouth(pickRandomAttribute(availableMouth));

        const tail = pickRandomAttribute(availableTail);

        if (tail.name === 'Tank') {
            setBack({ name: 'None', image: '' });
        } else {
            setBack(pickRandomAttribute(availableBack));
        }

        setTail(tail);

        setHead(pickRandomAttribute(availableHead));
        setEyes(pickRandomAttribute(availableEyes));
        setHands(pickRandomAttribute(availableHands));
    }

    if (isLoading) {
        return <Loading/>;
    }

    return (
        <>
            <div style={{
                marginTop: '100px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'start',
                justifyContent: 'center',
                padding: '1rem',
                flexWrap: 'wrap',
            }}>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '30px',
                        flexWrap: 'wrap',
                    }}
                >
                    <AttributePicker
                        setFunc={setBackground}
                        value={backgroundVal}
                        options={backgroundOptions}
                        label='Background'
                    />
                    <AttributePicker
                        setFunc={setColor}
                        value={colorVal}
                        options={colorOptions}
                        label='Slug'
                        styles={{
                            marginTop: '20px',
                        }}
                    />
                    <AttributePicker
                        setFunc={setChest}
                        value={chestVal}
                        options={chestOptions}
                        label='Chest'
                        styles={{
                            marginTop: '20px',
                        }}
                    />
                    <AttributePicker
                        setFunc={setMouth}
                        value={mouthVal}
                        options={mouthOptions}
                        label='Mouth'
                        styles={{
                            marginTop: '20px',
                        }}
                    />
                    <AttributePicker
                        setFunc={setBack}
                        value={backVal}
                        options={backOptions}
                        label='Back'
                        styles={{
                            marginTop: '20px',
                        }}
                    />
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: `${canvasValue.value}px`,
                        flexWrap: 'wrap',
                    }}
                >
                    <canvas
                        id={'canvas'}
                        style={{
                            width: `${canvasValue.value}px`,
                            height: `${canvasValue.value}px`,
                        }}
                    >
                    </canvas>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: '15px',
                            flexDirection: 'column',
                        }}
                    >
                        <Button
                            variant="contained"
                            classes={buttonClasses}
                            onClick={handleRandomButton}
                            size="small"
                            style={{
                                width: `${canvasValue.value}px`,
                                fontSize: '20px',
                            }}
                        >
                            Random
                        </Button>
                        {hypotheticalRank !== '' && <span style={{
                            marginTop: '10px',
                            fontSize: '30px',
                        }}>
                            {`Hypothetical Rank: #${hypotheticalRank}`}
                        </span>}
                    </div>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginLeft: '30px',
                        flexWrap: 'wrap',
                    }}
                >
                    <AttributePicker
                        setFunc={setHead}
                        value={headVal}
                        options={headOptions}
                        label='Head'
                    />
                    <AttributePicker
                        setFunc={setEyes}
                        value={eyesVal}
                        options={eyesOptions}
                        label='Eyes'
                        styles={{
                            marginTop: '20px',
                        }}
                    />
                    <AttributePicker
                        setFunc={setTail}
                        value={tailVal}
                        options={tailOptions}
                        label='Tail'
                        styles={{
                            marginTop: '20px',
                        }}
                    />
                    <AttributePicker
                        setFunc={setHands}
                        value={handVal}
                        options={handOptions}
                        label='Hands'
                        styles={{
                            marginTop: '20px',
                        }}
                    />
                    <Autocomplete
                        onChange={(e, v) => v && setCanvasValue(v)}
                        value={canvasValue}
                        options={[
                            {
                                name: '128x128',
                                value: 128,
                            },
                            {
                                name: '256x256',
                                value: 256,
                            },
                            {
                                name: '512x512',
                                value: 512,
                            },
                            {
                                name: '1024x1024',
                                value: 1024,
                            },
                        ]}
                        getOptionLabel={(option) => option.name}
                        getOptionSelected={(option, value) => option.value === canvasValue.value}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label='Canvas Size'
                                variant="outlined"
                                InputLabelProps={{ classes: inputClasses }}
                            />
                        )}
                        style={{
                            width: '200px',
                            marginTop: '20px',
                        }}
                        classes={inputClasses}
                    />
                </div>
            </div>
        </>
    );
}

function AttributePicker(props: any) {
    const { setFunc, value, options, label, styles } = props;

    const classes = useInputStyles();

    function handleAttributeChange(event: React.ChangeEvent<{}>, newValue: Attribute | null, setStateFunc: any) {
        if (newValue !== null) {
            setStateFunc(newValue);
        }
    }

    return (
        <Autocomplete
            onChange={(e, v) => handleAttributeChange(e, v, setFunc)}
            value={value}
            options={options}
            getOptionLabel={(option) => option.name}
            getOptionSelected={(option, value) => option.name === value.name}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={label}
                    variant="outlined"
                    InputLabelProps={{ classes: classes }}
                />
            )}
            style={{
                width: '200px',
                ...styles,
            }}
            classes={classes}
        />
    );
}

export function pickRandomAttributeImg(items: any, allowEmpty?: boolean, emptyProbability?: number) {
    if (items.length === 0) {
        return undefined;
    }

    return pickRandomAttribute(items, allowEmpty, emptyProbability).image;
}

export function pickRandomAttribute(items: any, allowEmpty?: boolean, emptyProbability?: number): Attribute {
    if (items.length === 0) {
        return { name: 'None', image: '' };
    }

    const attributes = [...items];
    
    if (allowEmpty) {
        if (emptyProbability) {
            if (emptyProbability < 0 || emptyProbability > 1) {
                throw new Error('Probability should be between 0 and 1');
            }

            const random = Math.random();

            if (random < emptyProbability) {
                return { name: 'None', image: '' };
            }
        } else {
            attributes.push({ name: 'None', image: '' });
        }
    }

    return items[Math.floor(Math.random() * items.length)];
}
