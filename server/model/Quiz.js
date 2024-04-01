const mongoose = require('mongoose');

const mcqSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    options: [{
        option: {
            type: String,
            required: true,
        },
        correctOption: {
            type: Boolean,
            default: false
        }
    }]
});

module.exports = mongoose.model('MCQ', mcqSchema);

// quiz database