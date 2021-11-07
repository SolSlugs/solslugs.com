import React from 'react';
import { resetStyles } from './App';

export function Attributes() {
    React.useEffect(() => {
        resetStyles();
    }, []);

    return (
         <div style={{ marginTop: '100px', textTransform: 'uppercase' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <span style={{ fontSize: '40px', marginBottom: '20px', marginTop: '20px' }}>
                        Slug
                    </span>
                    <div className="row">
                        <img className="showcase-img" src={require('./img/rarities/Slug/Slug-Yellow.png').default} alt="Slug/Slug-Yellow" />
                        <img className="showcase-img" src={require('./img/rarities/Slug/Slug-Green.png').default} alt="Slug/Slug-Green" />
                        <img className="showcase-img" src={require('./img/rarities/Slug/Slug-Red.png').default} alt="Slug/Slug-Red" />
                        <img className="showcase-img" src={require('./img/rarities/Slug/Slug-Blue.png').default} alt="Slug/Slug-Blue" />
                        <img className="showcase-img" src={require('./img/rarities/Slug/Slug-Beige.png').default} alt="Slug/Slug-Beige" />
                        <img className="showcase-img" src={require('./img/rarities/Slug/Slug-Purple.png').default} alt="Slug/Slug-Purple" />
                        <img className="showcase-img" src={require('./img/rarities/Slug/Slug-Orange.png').default} alt="Slug/Slug-Orange" />
                        <img className="showcase-img" src={require('./img/rarities/Slug/Slug-Pink.png').default} alt="Slug/Slug-Pink" />
                        <img className="showcase-img" src={require('./img/rarities/Slug/Slug-Cyan.png').default} alt="Slug/Slug-Cyan" />
                        <img className="showcase-img" src={require('./img/rarities/Slug/Slug-White.png').default} alt="Slug/Slug-White" />
                        <img className="showcase-img" src={require('./img/rarities/Slug/Slug-Black.png').default} alt="Slug/Slug-Black" />
                        <img className="showcase-img" src={require('./img/rarities/Slug/Slug-Solana.png').default} alt="Slug/Slug-Solana" />
                        <img className="showcase-img" src={require('./img/rarities/Slug/Slug-Ecto.png').default} alt="Slug/Slug-Ecto" />
                        <img className="showcase-img" src={require('./img/rarities/Slug/Slug-Zombie.png').default} alt="Slug/Slug-Zombie" />
                        <img className="showcase-img" src={require('./img/rarities/Slug/Slug-Parasite.png').default} alt="Slug/Slug-Parasite" />
                        <img className="showcase-img" src={require('./img/rarities/Slug/Slug-Radioactive.png').default} alt="Slug/Slug-Radioactive" />
                        <img className="showcase-img" src={require('./img/rarities/Slug/Slug-Shit.png').default} alt="Slug/Slug-Shit" />
                        <img className="showcase-img" src={require('./img/rarities/Slug/Slug-Reaper.png').default} alt="Slug/Slug-Reaper" />
                        <img className="showcase-img" src={require('./img/rarities/Slug/Slug-Demon Slug.png').default} alt="Slug/Slug-Demon Slug" />
                        <img className="showcase-img" src={require('./img/rarities/Slug/Slug-Turtle.png').default} alt="Slug/Slug-Turtle" />
                    </div>

                    <span style={{ fontSize: '40px', marginBottom: '20px', marginTop: '20px' }}>
                        Chest
                    </span>
                    <div className="row">
                        <img className="showcase-img" src={require('./img/rarities/Chest/Chest-None.png').default} alt="Chest/Chest-None" />
                        <img className="showcase-img" src={require('./img/rarities/Chest/Chest-Tiddies.png').default} alt="Chest/Chest-Tiddies" />
                        <img className="showcase-img" src={require('./img/rarities/Chest/Chest-Sweater.png').default} alt="Chest/Chest-Sweater" />
                        <img className="showcase-img" src={require('./img/rarities/Chest/Chest-Tie.png').default} alt="Chest/Chest-Tie" />
                        <img className="showcase-img" src={require('./img/rarities/Chest/Chest-TrackSuit.png').default} alt="Chest/Chest-TrackSuit" />
                        <img className="showcase-img" src={require('./img/rarities/Chest/Chest-Shell Bra.png').default} alt="Chest/Chest-Shell Bra" />
                        <img className="showcase-img" src={require('./img/rarities/Chest/Chest-Abs.png').default} alt="Chest/Chest-Abs" />
                        <img className="showcase-img" src={require('./img/rarities/Chest/Chest-Jean Jacket.png').default} alt="Chest/Chest-Jean Jacket" />
                        <img className="showcase-img" src={require('./img/rarities/Chest/Chest-Engagement Ring of the Wife\'s Boyfriend.png').default} alt="Chest/Chest-Engagement Ring of the Wife\'s Boyfriend" />
                        <img className="showcase-img" src={require('./img/rarities/Chest/Chest-Space Suit.png').default} alt="Chest/Chest-Space Suit" />
                        <img className="showcase-img" src={require('./img/rarities/Chest/Chest-Zombie Ribcage.png').default} alt="Chest/Chest-Zombie Ribcage" />
                        <img className="showcase-img" src={require('./img/rarities/Chest/Chest-Monstrosity.png').default} alt="Chest/Chest-Monstrosity" />
                        <img className="showcase-img" src={require('./img/rarities/Chest/Chest-Demon Skeleton.png').default} alt="Chest/Chest-Demon Skeleton" />
                        <img className="showcase-img" src={require('./img/rarities/Chest/Chest-Scarf.png').default} alt="Chest/Chest-Scarf" />
                    </div>

                    <span style={{ fontSize: '40px', marginBottom: '20px', marginTop: '20px' }}>
                        Mouth
                    </span>
                    <div className="row">
                        <img className="showcase-img" src={require('./img/rarities/Mouth/Mouth-Default.png').default} alt="Mouth/Mouth-Default" />
                        <img className="showcase-img" src={require('./img/rarities/Mouth/Mouth-Rage Mouth.png').default} alt="Mouth/Mouth-Rage Mouth" />
                        <img className="showcase-img" src={require('./img/rarities/Mouth/Mouth-Cute.png').default} alt="Mouth/Mouth-Cute" />
                        <img className="showcase-img" src={require('./img/rarities/Mouth/Mouth-Big Cheesin.png').default} alt="Mouth/Mouth-Big Cheesin" />
                        <img className="showcase-img" src={require('./img/rarities/Mouth/Mouth-Porn Stache.png').default} alt="Mouth/Mouth-Porn Stache" />
                        <img className="showcase-img" src={require('./img/rarities/Mouth/Mouth-Happy.png').default} alt="Mouth/Mouth-Happy" />
                        <img className="showcase-img" src={require('./img/rarities/Mouth/Mouth-SSLs.png').default} alt="Mouth/Mouth-SSLs" />
                        <img className="showcase-img" src={require('./img/rarities/Mouth/Mouth-5 O\'Clock Shadow.png').default} alt="Mouth/Mouth-5 O\'Clock Shadow" />
                        <img className="showcase-img" src={require('./img/rarities/Mouth/Mouth-Beard.png').default} alt="Mouth/Mouth-Beard" />
                        <img className="showcase-img" src={require('./img/rarities/Mouth/Mouth-Horrified.png').default} alt="Mouth/Mouth-Horrified" />
                        <img className="showcase-img" src={require('./img/rarities/Mouth/Mouth-Tusky Grin.png').default} alt="Mouth/Mouth-Tusky Grin" />
                        <img className="showcase-img" src={require('./img/rarities/Mouth/Mouth-Drooling.png').default} alt="Mouth/Mouth-Drooling" />
                        <img className="showcase-img" src={require('./img/rarities/Mouth/Mouth-That\'s Methed Up.png').default} alt="Mouth/Mouth-That\'s Methed Up" />
                        <img className="showcase-img" src={require('./img/rarities/Mouth/Mouth-Laughing.png').default} alt="Mouth/Mouth-Laughing" />
                        <img className="showcase-img" src={require('./img/rarities/Mouth/Mouth-Turtle Beak.png').default} alt="Mouth/Mouth-Turtle Beak" />
                        <img className="showcase-img" src={require('./img/rarities/Mouth/Mouth-Chomp.png').default} alt="Mouth/Mouth-Chomp" />
                        <img className="showcase-img" src={require('./img/rarities/Mouth/Mouth-Toothy.png').default} alt="Mouth/Mouth-Toothy" />
                        <img className="showcase-img" src={require('./img/rarities/Mouth/Mouth-Cigar.png').default} alt="Mouth/Mouth-Cigar" />
                        <img className="showcase-img" src={require('./img/rarities/Mouth/Mouth-Demonic.png').default} alt="Mouth/Mouth-Demonic" />
                        <img className="showcase-img" src={require('./img/rarities/Mouth/Mouth-Creepy.png').default} alt="Mouth/Mouth-Creepy" />
                        <img className="showcase-img" src={require('./img/rarities/Mouth/Mouth-Radioactive.png').default} alt="Mouth/Mouth-Radioactive" />
                        <img className="showcase-img" src={require('./img/rarities/Mouth/Mouth-Solana.png').default} alt="Mouth/Mouth-Solana" />
                        <img className="showcase-img" src={require('./img/rarities/Mouth/Mouth-Dwarf Beard.png').default} alt="Mouth/Mouth-Dwarf Beard" />
                        <img className="showcase-img" src={require('./img/rarities/Mouth/Mouth-Parasite.png').default} alt="Mouth/Mouth-Parasite" />
                        <img className="showcase-img" src={require('./img/rarities/Mouth/Mouth-Capy.png').default} alt="Mouth/Mouth-Capy" />
                        <img className="showcase-img" src={require('./img/rarities/Mouth/Mouth-Mermaid.png').default} alt="Mouth/Mouth-Mermaid" />
                    </div>

                    <span style={{ fontSize: '40px', marginBottom: '20px', marginTop: '20px' }}>
                        Head
                    </span>
                    <div className="row">
                        <img className="showcase-img" src={require('./img/rarities/Head/Head-None.png').default} alt="Head/Head-None" />
                        <img className="showcase-img" src={require('./img/rarities/Head/Head-Ponytail.png').default} alt="Head/Head-Ponytail" />
                        <img className="showcase-img" src={require('./img/rarities/Head/Head-Headphones.png').default} alt="Head/Head-Headphones" />
                        <img className="showcase-img" src={require('./img/rarities/Head/Head-Trucker Cap.png').default} alt="Head/Head-Trucker Cap" />
                        <img className="showcase-img" src={require('./img/rarities/Head/Head-Drumpf.png').default} alt="Head/Head-Drumpf" />
                        <img className="showcase-img" src={require('./img/rarities/Head/Head-Top Hat.png').default} alt="Head/Head-Top Hat" />
                        <img className="showcase-img" src={require('./img/rarities/Head/Head-Afro.png').default} alt="Head/Head-Afro" />
                        <img className="showcase-img" src={require('./img/rarities/Head/Head-Wizard Hat.png').default} alt="Head/Head-Wizard Hat" />
                        <img className="showcase-img" src={require('./img/rarities/Head/Head-Army Helmet.png').default} alt="Head/Head-Army Helmet" />
                        <img className="showcase-img" src={require('./img/rarities/Head/Head-Majestic Hair.png').default} alt="Head/Head-Majestic Hair" />
                        <img className="showcase-img" src={require('./img/rarities/Head/Head-Medusa.png').default} alt="Head/Head-Medusa" />
                        <img className="showcase-img" src={require('./img/rarities/Head/Head-Cone Hat.png').default} alt="Head/Head-Cone Hat" />
                        <img className="showcase-img" src={require('./img/rarities/Head/Head-Samurai.png').default} alt="Head/Head-Samurai" />
                        <img className="showcase-img" src={require('./img/rarities/Head/Head-Brain Slug.png').default} alt="Head/Head-Brain Slug" />
                        <img className="showcase-img" src={require('./img/rarities/Head/Head-Hooded.png').default} alt="Head/Head-Hooded" />
                        <img className="showcase-img" src={require('./img/rarities/Head/Head-Knife To Meet You.png').default} alt="Head/Head-Knife To Meet You" />
                        <img className="showcase-img" src={require('./img/rarities/Head/Head-Horns.png').default} alt="Head/Head-Horns" />
                        <img className="showcase-img" src={require('./img/rarities/Head/Head-Zombie Head.png').default} alt="Head/Head-Zombie Head" />
                        <img className="showcase-img" src={require('./img/rarities/Head/Head-Astronaut.png').default} alt="Head/Head-Astronaut" />
                        <img className="showcase-img" src={require('./img/rarities/Head/Head-Parasite.png').default} alt="Head/Head-Parasite" />
                        <img className="showcase-img" src={require('./img/rarities/Head/Head-Solana.png').default} alt="Head/Head-Solana" />
                        <img className="showcase-img" src={require('./img/rarities/Head/Head-Capy.png').default} alt="Head/Head-Capy" />
                        <img className="showcase-img" src={require('./img/rarities/Head/Head-Crown.png').default} alt="Head/Head-Crown" />
                    </div>

                    <span style={{ fontSize: '40px', marginBottom: '20px', marginTop: '20px' }}>
                        Eyes
                    </span>
                    <div className="row">
                        <img className="showcase-img" src={require('./img/rarities/Eyes/Eyes-Default.png').default} alt="Eyes/Eyes-Default" />
                        <img className="showcase-img" src={require('./img/rarities/Eyes/Eyes-Uninterested.png').default} alt="Eyes/Eyes-Uninterested" />
                        <img className="showcase-img" src={require('./img/rarities/Eyes/Eyes-UwU.png').default} alt="Eyes/Eyes-UwU" />
                        <img className="showcase-img" src={require('./img/rarities/Eyes/Eyes-Hmmm.png').default} alt="Eyes/Eyes-Hmmm" />
                        <img className="showcase-img" src={require('./img/rarities/Eyes/Eyes-Sunglasses.png').default} alt="Eyes/Eyes-Sunglasses" />
                        <img className="showcase-img" src={require('./img/rarities/Eyes/Eyes-RAGE RAGE FUCKIN RAGE.png').default} alt="Eyes/Eyes-RAGE RAGE FUCKIN RAGE" />
                        <img className="showcase-img" src={require('./img/rarities/Eyes/Eyes-Misfire.png').default} alt="Eyes/Eyes-Misfire" />
                        <img className="showcase-img" src={require('./img/rarities/Eyes/Eyes-KEKW.png').default} alt="Eyes/Eyes-KEKW" />
                        <img className="showcase-img" src={require('./img/rarities/Eyes/Eyes-Wide Eyed.png').default} alt="Eyes/Eyes-Wide Eyed" />
                        <img className="showcase-img" src={require('./img/rarities/Eyes/Eyes-I Can Smell Colors.png').default} alt="Eyes/Eyes-I Can Smell Colors" />
                        <img className="showcase-img" src={require('./img/rarities/Eyes/Eyes-Friggin Laser Beams.png').default} alt="Eyes/Eyes-Friggin Laser Beams" />
                        <img className="showcase-img" src={require('./img/rarities/Eyes/Eyes-Cyclops.png').default} alt="Eyes/Eyes-Cyclops" />
                        <img className="showcase-img" src={require('./img/rarities/Eyes/Eyes-Skull.png').default} alt="Eyes/Eyes-Skull" />
                        <img className="showcase-img" src={require('./img/rarities/Eyes/Eyes-Creepy.png').default} alt="Eyes/Eyes-Creepy" />
                        <img className="showcase-img" src={require('./img/rarities/Eyes/Eyes-Rainbow Lasers.png').default} alt="Eyes/Eyes-Rainbow Lasers" />
                        <img className="showcase-img" src={require('./img/rarities/Eyes/Eyes-Glowy Eyes.png').default} alt="Eyes/Eyes-Glowy Eyes" />
                        <img className="showcase-img" src={require('./img/rarities/Eyes/Eyes-Third Eye.png').default} alt="Eyes/Eyes-Third Eye" />
                        <img className="showcase-img" src={require('./img/rarities/Eyes/Eyes-Shit.png').default} alt="Eyes/Eyes-Shit" />
                        <img className="showcase-img" src={require('./img/rarities/Eyes/Eyes-Mermaid.png').default} alt="Eyes/Eyes-Mermaid" />
                        <img className="showcase-img" src={require('./img/rarities/Eyes/Eyes-Dwarven Squint.png').default} alt="Eyes/Eyes-Dwarven Squint" />
                        <img className="showcase-img" src={require('./img/rarities/Eyes/Eyes-Parasite.png').default} alt="Eyes/Eyes-Parasite" />
                        <img className="showcase-img" src={require('./img/rarities/Eyes/Eyes-Solana.png').default} alt="Eyes/Eyes-Solana" />
                        <img className="showcase-img" src={require('./img/rarities/Eyes/Eyes-Radioactive.png').default} alt="Eyes/Eyes-Radioactive" />
                        <img className="showcase-img" src={require('./img/rarities/Eyes/Eyes-Capy.png').default} alt="Eyes/Eyes-Capy" />
                        <img className="showcase-img" src={require('./img/rarities/Eyes/Eyes-Zombie.png').default} alt="Eyes/Eyes-Zombie" />
                    </div>

                    <span style={{ fontSize: '40px', marginBottom: '20px', marginTop: '20px' }}>
                        Tail
                    </span>
                    <div className="row">
                        <img className="showcase-img" src={require('./img/rarities/Tail/Tail-None.png').default} alt="Tail/Tail-None" />
                        <img className="showcase-img" src={require('./img/rarities/Tail/Tail-Boot.png').default} alt="Tail/Tail-Boot" />
                        <img className="showcase-img" src={require('./img/rarities/Tail/Tail-Trackpants.png').default} alt="Tail/Tail-Trackpants" />
                        <img className="showcase-img" src={require('./img/rarities/Tail/Tail-Sexy Slug.png').default} alt="Tail/Tail-Sexy Slug" />
                        <img className="showcase-img" src={require('./img/rarities/Tail/Tail-Mermaid Tail.png').default} alt="Tail/Tail-Mermaid Tail" />
                        <img className="showcase-img" src={require('./img/rarities/Tail/Tail-Tail Ring.png').default} alt="Tail/Tail-Tail Ring" />
                        <img className="showcase-img" src={require('./img/rarities/Tail/Tail-Tank.png').default} alt="Tail/Tail-Tank" />
                        <img className="showcase-img" src={require('./img/rarities/Tail/Tail-UFO.png').default} alt="Tail/Tail-UFO" />
                        <img className="showcase-img" src={require('./img/rarities/Tail/Tail-Blood Throne.png').default} alt="Tail/Tail-Blood Throne" />
                        <img className="showcase-img" src={require('./img/rarities/Tail/Tail-Parasite.png').default} alt="Tail/Tail-Parasite" />
                        <img className="showcase-img" src={require('./img/rarities/Tail/Tail-Shit.png').default} alt="Tail/Tail-Shit" />
                        <img className="showcase-img" src={require('./img/rarities/Tail/Tail-Radioactive.png').default} alt="Tail/Tail-Radioactive" />
                        <img className="showcase-img" src={require('./img/rarities/Tail/Tail-Zombie.png').default} alt="Tail/Tail-Zombie" />
                    </div>

                    <span style={{ fontSize: '40px', marginBottom: '20px', marginTop: '20px' }}>
                        Back
                    </span>
                    <div className="row">
                        <img className="showcase-img" src={require('./img/rarities/Back/Back-None.png').default} alt="Back/Back-None" />
                        <img className="showcase-img" src={require('./img/rarities/Back/Back-Disco Coat.png').default} alt="Back/Back-Disco Coat" />
                        <img className="showcase-img" src={require('./img/rarities/Back/Back-Backpack.png').default} alt="Back/Back-Backpack" />
                        <img className="showcase-img" src={require('./img/rarities/Back/Back-Flag.png').default} alt="Back/Back-Flag" />
                        <img className="showcase-img" src={require('./img/rarities/Back/Back-Turtle Shell.png').default} alt="Back/Back-Turtle Shell" />
                        <img className="showcase-img" src={require('./img/rarities/Back/Back-Hawaiian Shirt.png').default} alt="Back/Back-Hawaiian Shirt" />
                        <img className="showcase-img" src={require('./img/rarities/Back/Back-Space Pack.png').default} alt="Back/Back-Space Pack" />
                        <img className="showcase-img" src={require('./img/rarities/Back/Back-Spiked.png').default} alt="Back/Back-Spiked" />
                        <img className="showcase-img" src={require('./img/rarities/Back/Back-Wings.png').default} alt="Back/Back-Wings" />
                        <img className="showcase-img" src={require('./img/rarities/Back/Back-Royal Cape.png').default} alt="Back/Back-Royal Cape" />
                        <img className="showcase-img" src={require('./img/rarities/Back/Back-Solana.png').default} alt="Back/Back-Solana" />
                        <img className="showcase-img" src={require('./img/rarities/Back/Back-Reaper.png').default} alt="Back/Back-Reaper" />
                        <img className="showcase-img" src={require('./img/rarities/Back/Back-Radioactive.png').default} alt="Back/Back-Radioactive" />
                        <img className="showcase-img" src={require('./img/rarities/Back/Back-Capy.png').default} alt="Back/Back-Capy" />
                    </div>

                    <span style={{ fontSize: '40px', marginBottom: '20px', marginTop: '20px' }}>
                        Hands
                    </span>
                    <div className="row">
                        <img className="showcase-img" src={require('./img/rarities/Hands/Hands-None.png').default} alt="Hands/Hands-None" />
                        <img className="showcase-img" src={require('./img/rarities/Hands/Hands-Disco Hands.png').default} alt="Hands/Hands-Disco Hands" />
                        <img className="showcase-img" src={require('./img/rarities/Hands/Hands-Uwu Hands.png').default} alt="Hands/Hands-Uwu Hands" />
                        <img className="showcase-img" src={require('./img/rarities/Hands/Hands-Hands Up.png').default} alt="Hands/Hands-Hands Up" />
                        <img className="showcase-img" src={require('./img/rarities/Hands/Hands-Gun Hands.png').default} alt="Hands/Hands-Gun Hands" />
                        <img className="showcase-img" src={require('./img/rarities/Hands/Hands-Sword and Shield.png').default} alt="Hands/Hands-Sword and Shield" />
                        <img className="showcase-img" src={require('./img/rarities/Hands/Hands-Katana.png').default} alt="Hands/Hands-Katana" />
                        <img className="showcase-img" src={require('./img/rarities/Hands/Hands-Rifle.png').default} alt="Hands/Hands-Rifle" />
                        <img className="showcase-img" src={require('./img/rarities/Hands/Hands-Turtle Hands.png').default} alt="Hands/Hands-Turtle Hands" />
                        <img className="showcase-img" src={require('./img/rarities/Hands/Hands-Staff and Orb.png').default} alt="Hands/Hands-Staff and Orb" />
                        <img className="showcase-img" src={require('./img/rarities/Hands/Hands-Trident.png').default} alt="Hands/Hands-Trident" />
                        <img className="showcase-img" src={require('./img/rarities/Hands/Hands-Salt Thrower.png').default} alt="Hands/Hands-Salt Thrower" />
                        <img className="showcase-img" src={require('./img/rarities/Hands/Hands-Middle Finger.png').default} alt="Hands/Hands-Middle Finger" />
                        <img className="showcase-img" src={require('./img/rarities/Hands/Hands-Banjo.png').default} alt="Hands/Hands-Banjo" />
                        <img className="showcase-img" src={require('./img/rarities/Hands/Hands-Meditation.png').default} alt="Hands/Hands-Meditation" />
                        <img className="showcase-img" src={require('./img/rarities/Hands/Hands-Scythe.png').default} alt="Hands/Hands-Scythe" />
                        <img className="showcase-img" src={require('./img/rarities/Hands/Hands-Axe and Shield.png').default} alt="Hands/Hands-Axe and Shield" />
                        <img className="showcase-img" src={require('./img/rarities/Hands/Hands-Spooky Hands.png').default} alt="Hands/Hands-Spooky Hands" />
                        <img className="showcase-img" src={require('./img/rarities/Hands/Hands-Demon Orb.png').default} alt="Hands/Hands-Demon Orb" />
                        <img className="showcase-img" src={require('./img/rarities/Hands/Hands-Minigun.png').default} alt="Hands/Hands-Minigun" />
                        <img className="showcase-img" src={require('./img/rarities/Hands/Hands-Parasite Hands.png').default} alt="Hands/Hands-Parasite Hands" />
                        <img className="showcase-img" src={require('./img/rarities/Hands/Hands-Radioactive.png').default} alt="Hands/Hands-Radioactive" />
                        <img className="showcase-img" src={require('./img/rarities/Hands/Hands-Torch and Pickaxe.png').default} alt="Hands/Hands-Torch and Pickaxe" />
                        <img className="showcase-img" src={require('./img/rarities/Hands/Hands-Zombie.png').default} alt="Hands/Hands-Zombie" />
                        <img className="showcase-img" src={require('./img/rarities/Hands/Hands-Shit.png').default} alt="Hands/Hands-Shit" />
                        <img className="showcase-img" src={require('./img/rarities/Hands/Hands-Capy.png').default} alt="Hands/Hands-Capy" />
                    </div>

                    <span style={{ fontSize: '40px', marginBottom: '20px', marginTop: '20px' }}>
                        Background
                    </span>
                    <div className="row">
                        <img className="showcase-img showcase-background-img" src={require('./img/rarities/Background/Background-Lake.png').default} alt="Background-Lake" />
                        <img className="showcase-img showcase-background-img" src={require('./img/rarities/Background/Background-Mushrooms.png').default} alt="Background-Mushrooms" />
                        <img className="showcase-img showcase-background-img" src={require('./img/rarities/Background/Background-Museum.png').default} alt="Background-Museum" />
                        <img className="showcase-img showcase-background-img" src={require('./img/rarities/Background/Background-Disco.png').default} alt="Background-Disco" />
                        <img className="showcase-img showcase-background-img" src={require('./img/rarities/Background/Background-Escargo.png').default} alt="Background-Escargo" />
                        <img className="showcase-img showcase-background-img" src={require('./img/rarities/Background/Background-Sea Slug.png').default} alt="Background-Sea Slug" />
                        <img className="showcase-img showcase-background-img" src={require('./img/rarities/Background/Background-Slugway.png').default} alt="Background-Slugway" />
                        <img className="showcase-img showcase-background-img" src={require('./img/rarities/Background/Background-Space.png').default} alt="Background-Space" />
                        <img className="showcase-img showcase-background-img" src={require('./img/rarities/Background/Background-Blood Moon.png').default} alt="Background-Blood Moon" />
                        <img className="showcase-img showcase-background-img" src={require('./img/rarities/Background/Background-Hell.png').default} alt="Background-Hell" />
                        <img className="showcase-img showcase-background-img" src={require('./img/rarities/Background/Background-Sluglantis.png').default} alt="Background-Sluglantis" />
                        <img className="showcase-img showcase-background-img" src={require('./img/rarities/Background/Background-Mine.png').default} alt="Background-Mine" />
                        <img className="showcase-img showcase-background-img" src={require('./img/rarities/Background/Background-Solana.png').default} alt="Background-Solana" />
                        <img className="showcase-img showcase-background-img" src={require('./img/rarities/Background/Background-Radioactive.png').default} alt="Background-Radioactive" />
                        <img className="showcase-img showcase-background-img" src={require('./img/rarities/Background/Background-Shit.png').default} alt="Background-Shit" />
                        <img className="showcase-img showcase-background-img" src={require('./img/rarities/Background/Background-Zombie.png').default} alt="Background-Zombie" />
                    </div>
                </div>
            </div>
        </div>
    );
}
