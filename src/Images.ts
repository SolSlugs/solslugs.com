import { Attribute } from './Types';

export interface LoadedAttribute {
    name: string;
    image: {
        default: string;
    }
}

export const loadedBackgrounds: LoadedAttribute[] = [
    {
        name: 'Blood Moon',
        image: require(`./img/assets/Background/Blood Moon.png`),
    },
    {
        name: 'Disco',
        image: require(`./img/assets/Background/Disco.png`),
    },
    {
        name: 'Escargo',
        image: require(`./img/assets/Background/Escargo.png`),
    },
    {
        name: 'Hell',
        image: require(`./img/assets/Background/Hell.png`),
    },
    {
        name: 'Lake',
        image: require(`./img/assets/Background/Lake.png`),
    },
    {
        name: 'Mine',
        image: require(`./img/assets/Background/Mine.png`),
    },
    {
        name: 'Museum',
        image: require(`./img/assets/Background/Museum.png`),
    },
    {
        name: 'Mushrooms',
        image: require(`./img/assets/Background/Mushrooms.png`),
    },
    {
        name: 'Radioactive',
        image: require(`./img/assets/Background/Radioactive.png`),
    },
    {
        name: 'Sea Slug',
        image: require(`./img/assets/Background/Sea Slug.png`),
    },
    {
        name: 'Shit',
        image: require(`./img/assets/Background/Shit.png`),
    },
    {
        name: 'Sluglantis',
        image: require(`./img/assets/Background/Sluglantis.png`),
    },
    {
        name: 'Slugway',
        image: require(`./img/assets/Background/Slugway.png`),
    },
    {
        name: 'Solana',
        image: require(`./img/assets/Background/Solana.png`),
    },
    {
        name: 'Space',
        image: require(`./img/assets/Background/Space.png`),
    },
    {
        name: 'Zombie',
        image: require(`./img/assets/Background/Zombie.png`),
    },
];

export const loadedColor: LoadedAttribute[] = [
    {
        name: 'Beige',
        image: require(`./img/assets/Slug/BeigeSlug.png`),
    },
    {
        name: 'Black',
        image: require(`./img/assets/Slug/BlackSlug.png`),
    },
    {
        name: 'Blue',
        image: require(`./img/assets/Slug/BlueSlug.png`),
    },
    {
        name: 'Cyan',
        image: require(`./img/assets/Slug/CyanSlug.png`),
    },
    {
        name: 'Demon',
        image: require(`./img/assets/Slug/DemonSlug.png`),
    },
    {
        name: 'Ecto',
        image: require(`./img/assets/Slug/EctoSlug.png`),
    },
    {
        name: 'Green',
        image: require(`./img/assets/Slug/GreenSlug.png`),
    },
    {
        name: 'Orange',
        image: require(`./img/assets/Slug/OrangeSlug.png`),
    },
    {
        name: 'Parasite',
        image: require(`./img/assets/Slug/ParasiteSlug.png`),
    },
    {
        name: 'Pink',
        image: require(`./img/assets/Slug/PinkSlug.png`),
    },
    {
        name: 'Purple',
        image: require(`./img/assets/Slug/PurpleSlug.png`),
    },
    {
        name: 'Radioactive',
        image: require(`./img/assets/Slug/RadioactiveSlug.png`),
    },
    {
        name: 'Reaper',
        image: require(`./img/assets/Slug/ReaperSlug.png`),
    },
    {
        name: 'Red',
        image: require(`./img/assets/Slug/RedSlug.png`),
    },
    {
        name: 'Shit',
        image: require(`./img/assets/Slug/ShitSlug.png`),
    },
    {
        name: 'Solana',
        image: require(`./img/assets/Slug/SolanaSlug.png`),
    },
    {
        name: 'Turtle',
        image: require(`./img/assets/Slug/Turtle.png`),
    },
    {
        name: 'White',
        image: require(`./img/assets/Slug/WhiteSlug.png`),
    },
    {
        name: 'Yellow',
        image: require(`./img/assets/Slug/YellowSlug.png`),
    },
    {
        name: 'Zombie',
        image: require(`./img/assets/Slug/ZombieSlug.png`),
    },
];

export const loadedChest: LoadedAttribute[] = [
    {
        name: 'Abs',
        image: require(`./img/assets/Chest/Abs.png`),
    },
    {
        name: 'Astronaut',
        image: require(`./img/assets/Chest/Astronaut.png`),
    },
    {
        name: 'Demon Skeleton',
        image: require(`./img/assets/Chest/Demon Skeleton.png`),
    },
    {
        name: 'Engagement Ring of the Wife\'s Boyfriend',
        image: require(`./img/assets/Chest/Engagement Ring of the Wife's Boyfriend.png`),
    },
    {
        name: 'Jean Jacket',
        image: require(`./img/assets/Chest/Jean Jacket.png`),
    },
    {
        name: 'Monstrosity',
        image: require(`./img/assets/Chest/Monstrosity.png`),
    },
    {
        name: 'No Chest',
        image: require(`./img/assets/Chest/No Chest.png`),
    },
    {
        name: 'Scarf',
        image: require(`./img/assets/Chest/Scarf.png`),
    },
    {
        name: 'Shell Bra',
        image: require(`./img/assets/Chest/Shell Bra.png`),
    },
    {
        name: 'Space Suit',
        image: require(`./img/assets/Chest/Space Suit.png`),
    },
    {
        name: 'Sweater',
        image: require(`./img/assets/Chest/Sweater.png`),
    },
    {
        name: 'Tiddies',
        image: require(`./img/assets/Chest/Tiddies.png`),
    },
    {
        name: 'Tie',
        image: require(`./img/assets/Chest/Tie.png`),
    },
    {
        name: 'TrackSuit',
        image: require(`./img/assets/Chest/TrackSuit.png`),
    },
    {
        name: 'Zombie Ribcage',
        image: require(`./img/assets/Chest/Zombie Ribcage.png`),
    },
];

export const loadedMouth: LoadedAttribute[] = [

    {
        name: '5 oclock shadow',
        image: require(`./img/assets/Mouth/5 oclock shadow.png`),
    },
    {
        name: 'Astronaut',
        image: require(`./img/assets/Mouth/Astronaut.png`),
    },
    {
        name: 'Beard',
        image: require(`./img/assets/Mouth/Beard.png`),
    },
    {
        name: 'Big Cheesin',
        image: require(`./img/assets/Mouth/Big Cheesin.png`),
    },
    {
        name: 'Capy Mouth',
        image: require(`./img/assets/Mouth/Capy Mouth.png`),
    },
    {
        name: 'Chomp',
        image: require(`./img/assets/Mouth/Chomp.png`),
    },
    {
        name: 'Cigar',
        image: require(`./img/assets/Mouth/Cigar.png`),
    },
    {
        name: 'Creepy',
        image: require(`./img/assets/Mouth/Creepy.png`),
    },
    {
        name: 'Cute',
        image: require(`./img/assets/Mouth/Cute.png`),
    },
    {
        name: 'Default Mouth',
        image: require(`./img/assets/Mouth/Default Mouth.png`),
    },
    {
        name: 'Demonic',
        image: require(`./img/assets/Mouth/Demonic.png`),
    },
    {
        name: 'Drooling',
        image: require(`./img/assets/Mouth/Drooling.png`),
    },
    {
        name: 'Dwarf Beard',
        image: require(`./img/assets/Mouth/Dwarf Beard.png`),
    },
    {
        name: 'Happy',
        image: require(`./img/assets/Mouth/Happy.png`),
    },
    {
        name: 'Horrified',
        image: require(`./img/assets/Mouth/Horrified.png`),
    },
    {
        name: 'Laughing',
        image: require(`./img/assets/Mouth/Laughing.png`),
    },
    {
        name: 'Mermaid',
        image: require(`./img/assets/Mouth/Mermaid.png`),
    },
    {
        name: 'Parasite',
        image: require(`./img/assets/Mouth/Parasite.png`),
    },
    {
        name: 'Porn Stache',
        image: require(`./img/assets/Mouth/Porn Stache.png`),
    },
    {
        name: 'Radioactive',
        image: require(`./img/assets/Mouth/Radioactive.png`),
    },
    {
        name: 'Rage Mouth',
        image: require(`./img/assets/Mouth/Rage Mouth.png`),
    },
    {
        name: 'Smug',
        image: require(`./img/assets/Mouth/Smug.png`),
    },
    {
        name: 'Solana',
        image: require(`./img/assets/Mouth/Solana.png`),
    },
    {
        name: 'SSLs',
        image: require(`./img/assets/Mouth/SSLs.png`),
    },
    {
        name: 'That\'s methed up',
        image: require(`./img/assets/Mouth/That's methed up.png`),
    },
    {
        name: 'Toothy',
        image: require(`./img/assets/Mouth/Toothy.png`),
    },
    {
        name: 'Turtle Beak',
        image: require(`./img/assets/Mouth/Turtle Beak.png`),
    },
    {
        name: 'Tusky Grin',
        image: require(`./img/assets/Mouth/Tusky Grin.png`),
    },
];

export const loadedBack: LoadedAttribute[] = [
    {
        name: 'Backpack',
        image: require(`./img/assets/Back/Backpack.png`),
    },
    {
        name: 'Capy Fur',
        image: require(`./img/assets/Back/Capy Fur.png`),
    },
    {
        name: 'Disco Coat',
        image: require(`./img/assets/Back/Disco Coat.png`),
    },
    {
        name: 'Flag',
        image: require(`./img/assets/Back/Flag.png`),
    },
    {
        name: 'Hawaiian Shirt',
        image: require(`./img/assets/Back/Hawaiian Shirt.png`),
    },
    {
        name: 'No Back',
        image: require(`./img/assets/Back/No Back.png`),
    },
    {
        name: 'Radioactive',
        image: require(`./img/assets/Back/Radioactive.png`),
    },
    {
        name: 'Reaper',
        image: require(`./img/assets/Back/Reaper.png`),
    },
    {
        name: 'Royal Cape',
        image: require(`./img/assets/Back/Royal Cape.png`),
    },
    {
        name: 'Solana',
        image: require(`./img/assets/Back/Solana.png`),
    },
    {
        name: 'Space Pack',
        image: require(`./img/assets/Back/Space Pack.png`),
    },
    {
        name: 'Spiked',
        image: require(`./img/assets/Back/Spiked.png`),
    },
    {
        name: 'Turtle Shell',
        image: require(`./img/assets/Back/Turtle Shell.png`),
    },
    {
        name: 'Wings',
        image: require(`./img/assets/Back/Wings.png`),
    },
];

export const loadedHead: LoadedAttribute[] = [
    {
        name: 'Afro',
        image: require(`./img/assets/Head/Afro.png`),
    },
    {
        name: 'Army Helmet',
        image: require(`./img/assets/Head/Army Helmet.png`),
    },
    {
        name: 'Astronaut',
        image: require(`./img/assets/Head/Astronaut.png`),
    },
    {
        name: 'Brain Slug',
        image: require(`./img/assets/Head/Brain Slug.png`),
    },
    {
        name: 'Capy Head',
        image: require(`./img/assets/Head/Capy Head.png`),
    },
    {
        name: 'Cone Hat',
        image: require(`./img/assets/Head/Cone Hat.png`),
    },
    {
        name: 'Crown',
        image: require(`./img/assets/Head/Crown.png`),
    },
    {
        name: 'Drumpf',
        image: require(`./img/assets/Head/Drumpf.png`),
    },
    {
        name: 'Headphones',
        image: require(`./img/assets/Head/Headphones.png`),
    },
    {
        name: 'Hooded',
        image: require(`./img/assets/Head/Hooded.png`),
    },
    {
        name: 'Horns',
        image: require(`./img/assets/Head/Horns.png`),
    },
    {
        name: 'Knife To Meet You',
        image: require(`./img/assets/Head/Knife To Meet You.png`),
    },
    {
        name: 'Majestic Hair',
        image: require(`./img/assets/Head/Majestic Hair.png`),
    },
    {
        name: 'Medusa',
        image: require(`./img/assets/Head/Medusa.png`),
    },
    {
        name: 'No Head',
        image: require(`./img/assets/Head/No Head.png`),
    },
    {
        name: 'Parasite',
        image: require(`./img/assets/Head/Parasite.png`),
    },
    {
        name: 'Ponytail',
        image: require(`./img/assets/Head/Ponytail.png`),
    },
    {
        name: 'Samurai',
        image: require(`./img/assets/Head/Samurai.png`),
    },
    {
        name: 'Solana',
        image: require(`./img/assets/Head/Solana.png`),
    },
    {
        name: 'Top Hat',
        image: require(`./img/assets/Head/Top Hat.png`),
    },
    {
        name: 'Trucker Cap',
        image: require(`./img/assets/Head/Trucker Cap.png`),
    },
    {
        name: 'Wizard Hat',
        image: require(`./img/assets/Head/Wizard Hat.png`),
    },
    {
        name: 'Zombie Head',
        image: require(`./img/assets/Head/Zombie Head.png`),
    },
];

export const loadedEyes: LoadedAttribute[] = [
    {
        name: 'Capy Eyes',
        image: require(`./img/assets/Eyes/Capy Eyes.png`),
    },
    {
        name: 'Creepy',
        image: require(`./img/assets/Eyes/Creepy.png`),
    },
    {
        name: 'Cyclops',
        image: require(`./img/assets/Eyes/Cyclops.png`),
    },
    {
        name: 'Default Eyes',
        image: require(`./img/assets/Eyes/Default Eyes.png`),
    },
    {
        name: 'Dwarven Squint',
        image: require(`./img/assets/Eyes/Dwarven Squint.png`),
    },
    {
        name: 'Friggin Laser Beams',
        image: require(`./img/assets/Eyes/Friggin Laser Beams.png`),
    },
    {
        name: 'Glowy Eyes',
        image: require(`./img/assets/Eyes/Glowy Eyes.png`),
    },
    {
        name: 'Hmmm',
        image: require(`./img/assets/Eyes/Hmmm.png`),
    },
    {
        name: 'I Can Smell Colors',
        image: require(`./img/assets/Eyes/I Can Smell Colors.png`),
    },
    {
        name: 'KEKW',
        image: require(`./img/assets/Eyes/KEKW.png`),
    },
    {
        name: 'Mermaid',
        image: require(`./img/assets/Eyes/Mermaid.png`),
    },
    {
        name: 'Misfire',
        image: require(`./img/assets/Eyes/Misfire.png`),
    },
    {
        name: 'Parasite',
        image: require(`./img/assets/Eyes/Parasite.png`),
    },
    {
        name: 'Radioactive',
        image: require(`./img/assets/Eyes/Radioactive.png`),
    },
    {
        name: 'RAGE RAGE FUCKIN RAGE',
        image: require(`./img/assets/Eyes/RAGE RAGE FUCKIN RAGE.png`),
    },
    {
        name: 'Rainbow Lasers',
        image: require(`./img/assets/Eyes/Rainbow Lasers.png`),
    },
    {
        name: 'Shit',
        image: require(`./img/assets/Eyes/Shit.png`),
    },
    {
        name: 'Skull',
        image: require(`./img/assets/Eyes/Skull.png`),
    },
    {
        name: 'Solana',
        image: require(`./img/assets/Eyes/Solana.png`),
    },
    {
        name: 'Sunglasses',
        image: require(`./img/assets/Eyes/Sunglasses.png`),
    },
    {
        name: 'Third Eye',
        image: require(`./img/assets/Eyes/Third Eye.png`),
    },
    {
        name: 'Uninterested',
        image: require(`./img/assets/Eyes/Uninterested.png`),
    },
    {
        name: 'UwU',
        image: require(`./img/assets/Eyes/UwU.png`),
    },
    {
        name: 'Wide Eyed',
        image: require(`./img/assets/Eyes/Wide Eyed.png`),
    },
    {
        name: 'Zombie',
        image: require(`./img/assets/Eyes/Zombie.png`),
    },
];

export const loadedTail: LoadedAttribute[] = [
    {
        name: 'Blood Throne',
        image: require(`./img/assets/Tail/Blood Throne.png`),
    },
    {
        name: 'Boot',
        image: require(`./img/assets/Tail/Boot.png`),
    },
    {
        name: 'Mermaid Tail',
        image: require(`./img/assets/Tail/Mermaid Tail.png`),
    },
    {
        name: 'No Tail',
        image: require(`./img/assets/Tail/No Tail.png`),
    },
    {
        name: 'Parasite',
        image: require(`./img/assets/Tail/Parasite.png`),
    },
    {
        name: 'Radioactive',
        image: require(`./img/assets/Tail/Radioactive.png`),
    },
    {
        name: 'Sexy Slug',
        image: require(`./img/assets/Tail/Sexy Slug.png`),
    },
    {
        name: 'Shit',
        image: require(`./img/assets/Tail/Shit.png`),
    },
    {
        name: 'Tail Ring',
        image: require(`./img/assets/Tail/Tail Ring.png`),
    },
    {
        name: 'Tank',
        image: require(`./img/assets/Tail/Tank.png`),
    },
    {
        name: 'TrackPants',
        image: require(`./img/assets/Tail/TrackPants.png`),
    },
    {
        name: 'UFO',
        image: require(`./img/assets/Tail/UFO.png`),
    },
    {
        name: 'Zombie',
        image: require(`./img/assets/Tail/Zombie.png`),
    },
];

export const loadedHands: LoadedAttribute[] = [
    {
        name: 'Axe and Shield',
        image: require(`./img/assets/Hands/Axe and Shield.png`),
    },
    {
        name: 'Banjo',
        image: require(`./img/assets/Hands/Banjo.png`),
    },
    {
        name: 'Capy Hands',
        image: require(`./img/assets/Hands/Capy Hands.png`),
    },
    {
        name: 'Demon Orb',
        image: require(`./img/assets/Hands/Demon Orb.png`),
    },
    {
        name: 'Disco Hands',
        image: require(`./img/assets/Hands/Disco Hands.png`),
    },
    {
        name: 'Gun Hands',
        image: require(`./img/assets/Hands/Gun Hands.png`),
    },
    {
        name: 'Hands Up',
        image: require(`./img/assets/Hands/Hands Up.png`),
    },
    {
        name: 'Katana',
        image: require(`./img/assets/Hands/Katana.png`),
    },
    {
        name: 'Meditation',
        image: require(`./img/assets/Hands/Meditation.png`),
    },
    {
        name: 'Middle Finger',
        image: require(`./img/assets/Hands/Middle Finger.png`),
    },
    {
        name: 'Minigun',
        image: require(`./img/assets/Hands/Minigun.png`),
    },
    {
        name: 'No Hands',
        image: require(`./img/assets/Hands/No Hands.png`),
    },
    {
        name: 'Parasite Hands',
        image: require(`./img/assets/Hands/Parasite Hands.png`),
    },
    {
        name: 'Radioactive',
        image: require(`./img/assets/Hands/Radioactive.png`),
    },
    {
        name: 'Rifle',
        image: require(`./img/assets/Hands/Rifle.png`),
    },
    {
        name: 'Salt Thrower',
        image: require(`./img/assets/Hands/Salt Thrower.png`),
    },
    {
        name: 'Scythe',
        image: require(`./img/assets/Hands/Scythe.png`),
    },
    {
        name: 'Shit',
        image: require(`./img/assets/Hands/Shit.png`),
    },
    {
        name: 'Spooky Hands',
        image: require(`./img/assets/Hands/Spooky Hands.png`),
    },
    {
        name: 'Staff and Orb',
        image: require(`./img/assets/Hands/Staff and Orb.png`),
    },
    {
        name: 'Sword and Shield',
        image: require(`./img/assets/Hands/Sword and Shield.png`),
    },
    {
        name: 'Torch and Pickaxe',
        image: require(`./img/assets/Hands/Torch and Pickaxe.png`),
    },
    {
        name: 'Trident',
        image: require(`./img/assets/Hands/Trident.png`),
    },
    {
        name: 'Turtle Hands',
        image: require(`./img/assets/Hands/Turtle Hands.png`),
    },
    {
        name: 'Uwu Hands',
        image: require(`./img/assets/Hands/Uwu Hands.png`),
    },
    {
        name: 'Zombie',
        image: require(`./img/assets/Hands/Zombie.png`),
    },
];

export const backgrounds: Attribute[] = loadedBackgrounds.map((l) => ({ name: l.name, image: l.image.default }));
export const color: Attribute[] = loadedColor.map((l) => ({ name: l.name, image: l.image.default }));
export const chest: Attribute[] = loadedChest.map((l) => ({ name: l.name, image: l.image.default }));
export const mouth: Attribute[] = loadedMouth.map((l) => ({ name: l.name, image: l.image.default }));
export const back: Attribute[] = loadedBack.map((l) => ({ name: l.name, image: l.image.default }));
export const head: Attribute[] = loadedHead.map((l) => ({ name: l.name, image: l.image.default }));
export const eyes: Attribute[] = loadedEyes.map((l) => ({ name: l.name, image: l.image.default }));
export const tail: Attribute[] = loadedTail.map((l) => ({ name: l.name, image: l.image.default }));
export const hands: Attribute[] = loadedHands.map((l) => ({ name: l.name, image: l.image.default }));
