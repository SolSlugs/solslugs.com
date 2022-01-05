import React from 'react';
import { resetStyles } from './App';
import { Loading, createBurntMap, calculateStatRarity } from './Rankings';
import { fabric } from 'fabric';
import * as defaultImages from './Images';

const layerMapping = new Map([
    ['Background', { items: defaultImages.backgrounds, zIndex: 0 }],
    ['Slug', { items: defaultImages.color, zIndex: 1 }],
    ['Chest', { items: defaultImages.chest, zIndex: 2 }],
    ['Mouth', { items: defaultImages.mouth, zIndex: 3 }],
    ['Back', { items: defaultImages.back, zIndex: 7 }],
    ['Head', { items: defaultImages.head, zIndex: 4 }],
    ['Eyes', { items: defaultImages.eyes, zIndex: 5 }],
    ['Tail', { items: defaultImages.tail, zIndex: 6 }],
    ['Hands', { items: defaultImages.hands, zIndex: 8 }],
]);

const canvasSize = 256;

function RenderedAttribute(props: any) {
    const { item } = props;

    const [canvas, setCanvas] = React.useState<fabric.StaticCanvas>();

    async function drawSlug() {
        const canvasObj = new fabric.StaticCanvas(`canvas-${item.layer}-${item.name}`, {
            width: canvasSize,
            height: canvasSize,
        });

        let lineLength = 15;
        let fontSize = 30;
        let attributeTop = 0;
        let percentageTop = canvasSize - (canvasSize / 9);
        let attributeData = item.name;

        if (item.name.length > 20) {
            fontSize = 25;
            lineLength = 20;
        }

        if (item.name.length > lineLength) {
            const words = item.name.split(' ');

            let lines = [];
            let line = [];

            let i = 0;

            while (words[i] !== undefined) {
                while (words[i] !== undefined && (line.join(' ') + words[i]).length < lineLength) {
                    line.push(words[i]);
                    i++;
                }

                if (i === 0) {
                    line.push(words[i++]);
                }

                lines.push(line);
                line = [];
            }

            const result = [];

            for (const line of lines) {
                result.push(line.join(' '));
            }

            attributeData = result.join('\n');
        }
        
        if (item.layer === 'Background') {
            attributeTop = 5;
            percentageTop = canvasSize - (canvasSize / 7);
        }
        
        const attributeText = new fabric.Text(attributeData, {
            textAlign: 'center',
            originX: 'center',
            originY: 'top',
            fontSize,
            fill: '#e6e6e6',
            fontWeight: 800,
            strokeWidth: 1,
            stroke: '#000000',
            fontFamily: 'Agenda-Bold, Arial, sans-serif',
            top: attributeTop,
        });

        const percentageText = new fabric.Text(item.percentage, {
            textAlign: 'center',
            originX: 'center',
            originY: 'top',
            fontSize,
            fill: '#e6e6e6',
            fontWeight: 800,
            strokeWidth: 1,
            stroke: '#000000',
            fontFamily: 'Agenda-Bold, Arial, sans-serif',
            top: percentageTop,
        });

        console.log(item.layer);

        const { items, zIndex } = layerMapping.get(item.layer)!;
        
        const images: { image: string, zIndex: number }[] = [];

        if (item.name !== 'None') {
            if (!items) {
                console.log(`failed to find ${item.layer}`);
            }

            const attributeImage = items.find((a) => a.name === item.name)!;

            if (!attributeImage) {
                console.log(`failed to find ${item.name} ${item.layer} ${JSON.stringify(items)}`);
            }

            images.push({
                image: attributeImage.image,
                zIndex,
            });
        }
        
        if (item.layer !== 'Background' && item.layer !== 'Slug') {
            const greenSlug = defaultImages.color.find((i) => i.name === 'Green')!;

            images.push({
                image: greenSlug.image,
                zIndex: 1,
            });
        }

        if (item.layer !== 'Background' && item.layer !== 'Mouth') {
            const defaultMouth = defaultImages.mouth.find((i) => i.name === 'Default')!;

            images.push({
                image: defaultMouth.image,
                zIndex: 3,
            });
        }

        if (item.layer !== 'Background' && item.layer !== 'Eyes') {
            const defaultEyes = defaultImages.eyes.find((i) => i.name === 'Default')!;
            
            images.push({
                image: defaultEyes.image,
                zIndex: 5,
            });
        }

        for (const image of images.sort((a, b) => a.zIndex - b.zIndex)) {
            const img = await loadImage(image.image);
            canvasObj.add(img);
        }

        canvasObj.add(attributeText);
        canvasObj.add(percentageText);

        attributeText.centerH();
        percentageText.centerH();

        canvasObj.renderAll();

        setCanvas(canvasObj);
    }

    React.useEffect(() => {
        drawSlug();
    /* eslint-disable react-hooks/exhaustive-deps */
    }, []);

    return (
        <canvas
            id={`canvas-${item.layer}-${item.name}`}
            className={`showcase-img ${item.layer === 'Background' && 'showcase-background-img'}`}
        />
    );
}

async function loadImage(base64: string): Promise<fabric.Image> {
    return new Promise((res) => {
        fabric.Image.fromURL(base64, (img) => {
            img.selectable = false;
            img.scaleToHeight(canvasSize);
            img.scaleToWidth(canvasSize);
            res(img);
        });
    });
}

async function fetchBurntData() {
    const url = 'https://letsalllovelain.com/burntslugs/';

    try {
        const data = await fetch(url);

        const raw = await data.json();

        for (let item of raw.tokenInfo) {
            item.name = Number(item.name.split(' - ')[1]);
        }

        return raw;
    } catch (err) {
        console.log(`Failed to fetch burn data: ${(err as any).toString()}!`);
        return undefined;
    }
}


export function Attributes() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [layers, setLayers] = React.useState<any[]>([]);

    async function loadData() {
        const burntData = await fetchBurntData();
        const burntMap = createBurntMap(burntData);

        let nonBurnt = [];

        for (let item of burntData.tokenInfo) {
            if (!burntMap.get(item.mint)) {
                nonBurnt.push(item);
            }
        }

        const statRarity = calculateStatRarity(nonBurnt);

        const attributeMap = new Map();

        for (const [stat, count] of statRarity) {
            const [layer, name] = stat.split('-');
            const percentage = `${((count / nonBurnt.length) * 100).toFixed(2)}%`;

            const existing = attributeMap.get(layer) || [];

            existing.push({
                layer,
                name,
                percentage,
                count,
            });

            attributeMap.set(layer, existing);
        }

        setLayers([...attributeMap.values()]);
        setIsLoading(false);
    }

    React.useEffect(() => {
        resetStyles();
	    document.body.style.setProperty('--color-bg', 'linear-gradient(132deg, rgba(88,44,216,1) 0%, rgba(50, 24, 129, 1) 100%)');
        loadData();
    }, []);

    if (isLoading) {
        return <Loading/>;
    }

    return (
         <div style={{ marginTop: '100px', textTransform: 'uppercase' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    {layers.map((attributes, i: number) => (
                        <React.Fragment key={i}>
                            <span style={{ fontSize: '40px', marginBottom: '20px', marginTop: '20px' }}>
                                {attributes[0].layer}
                            </span>
                            <div className='row'>
                                {attributes.sort((a: any, b: any) => b.count - a.count).map((item: any, j: number) => (
                                    <RenderedAttribute
                                        key={`${item.name}-${item.layer}`}
                                        item={item}
                                    />
                                ))}
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
}
