const thoughtText = [
    'The future is now old man!',
    'Im ugly and Im proud.',
    'Ravioli, ravioli. Give me the formuoli.',
    'Krusty Krab Pizza, its the pizza for you and meeeeee!',
    'The inner machinations of my mind are an enigma.',
    'Is mayonnaise an instrument?',
    'I knew I shouldnt have gotten out of bed today.',
    'Did you smell it? That smell. A kind of smelly smell. The smelly smell that smells...smelly.',
    'Goodbye everyone, Ill remember you all in therapy.',
    'Hmmm, a five-letter word for happiness...money.',
    'Wake me up when I care.',
    'Who you callin pinhead?'
]

const friends = [
    'TeslaOwner',
    'BoardSunny',
    'GoodKitty',
    'Primator',
    'BenScoop',
    'Slynan',
    'Zenatihe',
    'Davys',
    'SenTenz',
    'PokePalace',
    'Forfun',
    'GoNext',
]

const usernames = [
    'TeslaOwner',
    'BoardSunny',
    'GoodKitty',
    'Primator',
    'BenScoop',
    'Slynan',
    'Zenatihe',
    'Davys',
    'SenTenz',
    'PokePalace',
    'Forfun',
    'GoNext',
]

const emails = [
    'weddev@google.net',
    'timcook@icloud.org',
    'lebronjames@nba.com',
    'scoops@icecream.net',
    'denny@dennys.com',
    'tyson@sentinels.com',
    'wonka@willy.com',
    'musk@elon.com',
    'johnh@bootcamp.com',
    'freddy@aol.com',
    'living@live.com',
    'soap@mac.com'
]

const reactionBodies = [
    'You need six hundred to pass, you got six.',
    'Just when I thought they couldn’t get any stupider.',
    'Wait, Spongebob, we’re not cavemen. We have technology.',
    'If you believe in yourself, with a tiny pinch of magic all your dreams can come true!',
    'Always follow your heart unless your heart is bad with directions.',
    'Well, its no secret that the best thing about a secret is secretly telling someone your secret, thereby adding another secret to their secret collection of secrets, secretly.',
    'I order the food, you cook the food. The customer gets the food. We do that for 40 years, and then we die.',
    'Thats it, mister! You just lost your brain privileges.',
    'We should take Bikini Bottom and push it somewhere else!',
    'You don’t need a license to drive a sandwich.'
]

const getRandomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomThoughtText = () => getRandomArrayItem(thoughtText);
// const getRandomUsername = () => getRandomArrayItem(usernames);
const getRandomFriends = () => getRandomArrayItem(friends);
const getRandomEmails = () => getRandomArrayItem(emails);
const getRandomReactionBodies = () => getRandomArrayItem(reactionBodies);



module.exports = { getRandomThoughtText, getRandomFriends ,getRandomEmails, getRandomReactionBodies }