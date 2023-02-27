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
        username: 'jimmybob',
        email: 'jimmy@frank.com'
    });

    users.push({
        username: 'geraldine',
        email: 'geraldine@jesus.com'
    });

    thoughts.push({
        thoughtText: 'I deleted Facebook, Instagram and Twitter from my phone',
        username: 'bobbyhill',
    });

    thoughts.push({
        thoughtText: 'I plan to write and read wayyyy more this year',
        username: 'HankHill',
    })
    
    await User.collection.insertMany(users);
    await Thought.collection.insertMany(thoughts);

    console.table(users);
    console.table(thoughts);
    console.info('Seeding complete! 🌱');
    process.exit(0);
})