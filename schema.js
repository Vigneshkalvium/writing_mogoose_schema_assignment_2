const mongoose = require('mongoose');
const BlogsSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true,
        minlenght: 5
    },
    content:{
        type: String,
        required: true,
        minlenght: 50,
    },
    author: {
        type: String,
    },
    tags:{
        type: [String],

    },
    category: {
        type: String,
        default: 'General'
    },
    likes: {
        type: [String],

    },
    comments: [
        {
            username: {
                type: String,
                required: true
            },
            message: {
                type: String,
                required: true
            },
            commentedAt: {
                type: Date,
                default: Date.now
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Blog', BlogsSchema);
