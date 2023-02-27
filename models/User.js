const { Schema, model } = require('mongoose');
const validator = require('validator');
const thoughtSchema = require('./Thought')

const userSchema = new Schema(
    {
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thought',
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'user'
            }
        ],
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: {
                validator: validator.isEmail,
                message: '{VALUE} is not a valid email',
                isAsync: false
            }
        }
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);


userSchema.virtual('friendCount').get(function() {
    return this.friends.length
})

const User = model('user', userSchema);

module.exports = User;