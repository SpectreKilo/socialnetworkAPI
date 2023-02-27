//require the models here
const res = require('express/lib/response');
const { Thought, User } = require('../models');

const createThought = async (req, res) => {
    try {
        const thoughtData = await Thought.create(req.body)
        const userData = await User.findOneAndUpdate(
            { username: req.body.username },
            { $addToSet: { thoughts: thoughtData._id } },
            { new:true }
        )
        .populate('thoughts')
        res.status(200).json(thoughtData)
    } catch (err) {
        res.status(500).json(err)
    }
}



const createReaction = async (req, res) => {
    try {
        const thoughtData = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body} },
            { new: true }
        )
        console.log(thoughtData)

        !thoughtData 
        ? res.status(404).json({ message: 'there is no thought with this Id, try again' })
        : res.status(200).json(err)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}


const deleteReaction = async (req, res) => {
    try {
        const thoughtData = await Thought.findOneAndUpdate(
            { id: req.params.thoughtId },
            { $pull: { reactions: { _id: req.body } } },
            { new: true }
        )
        !thoughtData
        ? res.status(404).json({ message: 'there is no thought with this Id, try again' })
        : res.status(200).json(thoughtData)
    } catch (err) {
        res.status(500).json(err)
    }
}

//FOR API/THOUGHTS
//get all thoughts
module.exports = {
    createThought,
    createReaction,
    deleteReaction,
    getThoughts(req, res) {
        Thought.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));
    },

    //get a single thought by Id
    getOneThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with this ID' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },

    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { new: true }
        )
            .then((updatedThought) =>
                !updatedThought
                    ? res.status(404).json({ message: 'there is no Thought with this Id' })
                    : res.json(updatedThought)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err)
            });
    },

    deleteThought(req, res) {
        Thought.deleteOne(
            { _id: req.params.thoughtId })
            .then(thoughtDeleted => {
                !thoughtDeleted
                    ? res.status(404).json({ message: 'there is no thought with this Id' })
                    : res.json(thoughtDeleted)
            })
    }

}