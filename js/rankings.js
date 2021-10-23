const ranks = require('./ranks.json');
import images from '../img/all/*.png';

const slugMap = new Map();
const rankMap = new Map();

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

function setItem(
    rankInput,
    slugInput,
    image,
    background,
    slug,
    chest,
    mouth,
    head,
    eyes,
    tail,
    back,
    hands,
    item) {

    const name = item.name.toString().padStart(5, '0');
    image.src = images[name];
    rankInput.value = item.rank;
    slugInput.value = item.name;

    const mapping = new Map([
        ['Background', background],
        ['Slug', slug],
        ['Chest', chest],
        ['Mouth', mouth],
        ['Head', head],
        ['Eyes', eyes],
        ['Tail', tail],
        ['Back', back],
        ['Hands', hands],
    ]);

    for (const attribute of item.attributes) {
        const field = mapping.get(attribute.trait_type);

        if (field) {
            field.innerHTML = `${attribute.trait_type} - ${attribute.value}`;
        }
    }
}

window.addEventListener('load', () => {
    for (const rank of ranks) {
        slugMap.set(rank.name, rank);
        rankMap.set(rank.rank, rank);
    }

    const rankInput = document.getElementById('rank-input');
    const slugInput = document.getElementById('slug-input');
    const image = document.getElementById('slug-image');

    const background = document.getElementById('background-value');
    const slug = document.getElementById('slug-value');
    const chest = document.getElementById('chest-value');
    const mouth = document.getElementById('mouth-value');
    const head = document.getElementById('head-value');
    const eyes = document.getElementById('eyes-value');
    const tail = document.getElementById('tail-value');
    const back = document.getElementById('back-value');
    const hands = document.getElementById('hands-value');

    const set = setItem.bind(
        null,
        rankInput,
        slugInput,
        image,
        background,
        slug,
        chest,
        mouth,
        head,
        eyes,
        tail,
        back,
        hands,
    );

    rankInput.addEventListener('keyup', (e) => {
        const item = getItem(e.target.value, rankMap);
        
        if (!item) {
            return;
        }

        set(item);
    });

    slugInput.addEventListener('keyup', (e) => {
        const item = getItem(e.target.value, slugMap);

        if (!item) {
            return;
        }

        set(item);
    });

    set(slugMap.get(1 + Math.floor(Math.random() * 10000)));
});
