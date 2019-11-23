const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const PostSchema = Schema({
    title:{
        type: String,
        required: true
    },
    author:{
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    comments: [{
        author: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        content: {
            type: String,
            required: true
        }
    }],
    tags: [
        String
    ],
    state: {
        type: String,
        enum: ['draft', 'published', 'private']
    },
    content:{
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.Model('Post', PostSchema)
