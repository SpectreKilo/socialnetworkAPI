const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomThoughtText, getRandomFriends ,getRandomEmails, getRandomReactionBodies } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected to database');
    await User.deleteMany();
    await Thought.deleteMany();

    const users = []
    const thoughts = []

    users.push({
        username: 'SenTenz',
        email: 'johnh@bootcamp.com'
    });

    users.push({
        username: 'TeslaOwner',
        email: 'weddev@google.net'
    });

    thoughts.push({
        thoughtText: 'Goodbye everyone, Ill remember you all in therapy.',
        username: 'Davys',
    });

    thoughts.push({
        thoughtText: 'Who you callin pinhead?',
        username: 'PokePalace',
    })
    
    await User.collection.insertMany(users);
    await Thought.collection.insertMany(thoughts);

    console.table(users);
    console.table(thoughts);
    console.info('Seeding complete! 🌱');
    process.exit(0);
})