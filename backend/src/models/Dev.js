import { Schema, model } from 'mongoose'

const DevSchema = new Schema({
    name: {
        type: String,
    },
    user: {
        type: String,
        required: true,
    },
    bio: String,
    avatar: {
        type: String,
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev'
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev'
    }]
}, {
    timestamps: true,
})

export default model('Dev', DevSchema)