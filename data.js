//Where quest data lives

const forest = {
    id: 'forest',
    title: 'The Forbidden Forest',
    map: {
        top: '50%',
        left: '44%'
    },
    image: 'forest.jpg',
    description: `The Forbidden Forest, also known as the Dark Forest. It  borders the edges of the Hogwarts School of Witchcraft and Wizardry grounds.The forest is a very old place that holds many secrets and houses many creatures, some dark and dangerous, others friendly. The trees in the forest are considered ancient, they are dense and rough looking from years of exposure to the elements.`,
    choices: [{
        id: 'explore',
        description: 'Explore the wonders of the forest',
        result: `You just walked past Hagrid's hut and ventured into the Dark Forests and ran into a Firenze the centaur. He wants you to buy him butterbeer from the three broomsticks before you can proceed. This will cost you a trip into Hogsmeade and 10 galleons.`,
        health: 0,
        Galleons: 10
    }, {
        id: 'Aragog',
        description: `Attack Aragog's Den!`,
        result: `Wand at the ready, you go straight for the Giant Spider's nest and try to stun him and his many descendants. Rumour has it there are rubies under his nest worth 500 galleons. If you succeed, you need to help from Mundungus Fletcher to sell the rubies and a trip to Gringotts to save your Galleons. Your health will take a hit though. 50 points!`,
        health: -50,
        Galleons: 500,
    }, {
        id: 'Hagrid',
        description: `Forget the forest.Visit Hagrid!`,
        result: `Hang out with Hagrid and Fang. 'Enjoy' some of his barely edible rock cakes and listen to him drone on about dragons and hippogriffs. You walk away with no galleons and your health takes a little ding (10) takes to the rock cakes`,
        health: -10,
        Galleons: 0,
    }]

};
const castle = {
    id: 'castle',
    title: 'The Main castle',
    map: {
        top: '50%',
        left: '44%'
    },
    image: 'castle.jpg',
    description: `Hogwarts Castle is a large, seven-storey high building supported by magic, with a hundred and forty two staircases throughout its many towers and turrets and very deep dungeons. The castle was built in the late Early Middle Ages (c. 993) by a wizard architect and the four most celebrated wizards of the age: Godric Gryffindor, Helga Hufflepuff, Rowena Ravenclaw and Salazar Slytherin. The castle was the main building of Hogwarts School of Witchcraft and Wizardry, regarded as the finest wizarding school in the world.`,
    choices: [{
        id: 'gryffindor',
        description: 'Caput Draconis',
        result: `Not mischievous today ey? Staying in the common room today are we? Resting will restore some health (10) and while cleaning out your trunk, you found 5 galleons!`,
        health: 10,
        Galleons: 5
    }, {
        id: 'chamber',
        description: `The Chamber Of Secrets`,
        result: `Merlins beard!!! You did nto listen to Moaning Myrtle's pleas to not go down the sink. You faced the basilisk and with the help of Fawkes, killed the beast. Massive blow to your health but the reward for killing the giant serpent is 1000 Galleons `,
        health: -100,
        Galleons: 1000,
    }, {
        id: 'potions',
        description: `The Half-Blood Prince`,
        result: `You chose to attend you potions lesson. Bad luck mate! Professor Snape lost it yet again because Neville melted his cauldron (AGAIN). Unlucky for you, the potion from his cauldron got on your shoes and now your feet are covered in boils. You might need a trip to the hospital wing as health is now down by 20. Oh you'll need new shoes. 15 Galleons!`,
        health: -20,
        Galleons: -15,
    }]

};
const grounds = {
    id: 'lake',
    title: 'The Lake',
    map: {
        top: '50%',
        left: '44%'
    },
    image: 'lake.jpg',
    description: `The Great Lake (alternatively known as the Black Lake) is a large body of water, freshwater and landlocked, located to the south of Hogwarts Castle. It is about half a mile in diameter and the castle's plumbing network drains into it. It is home to many creatures and the most fascinating of them all are the Merpeople`,
    choices: [{
        id: 'merpeople',
        description: 'Swim to the Merpeople Village',
        result: `Clap for yourself. You don't speak Mermish, you did not carry any Gillyweed but you decided to venture into the freezing waters and explore the Merpeople village. What is your problem mate? Health is down 50!`,
        health: -50,
        Galleons: 0
    }, {
        id: 'date',
        description: `A date by the shores of the Dark Lake!`,
        result: `Let me set the scene for you. You just finished your final exams. It is summer. The sun is setting. You are by the shores of the lake enjoying a pumpkin pastie, butterbeer in hand. Health is up 50 points but butterbeer is not free. Down 20 Galleons`,
        health: 50,
        Galleons: -20,
    }, {
        id: 'firebolt',
        description: `The fastest broomstick in the World!`,
        result: `Bad day today. You had potions and then detention with Umbridge. Your hand is prickling and you just need to be up in the air where you feel most alive. You get on your Firebolt and fly over the Dark Lake. Does wonders for your mental health. You are up 70 in health!`,
        health: 70,
        Galleons: 0,
    }]

};

const quests = [
    forest, castle, grounds];
export default quests;



