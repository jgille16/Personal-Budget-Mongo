const mongoose = require("mongoose");
const hexColorRegex = /^#([0-9A-Fa-f]{3}){1,2}$/;

const budgetSchema = new mongoose.Schema({
    data: {
        type: Number,
        required: true,
    },
    backgroundColor: {
        type: String,
        trim: true,
        required: true,
        validate: {
            validator: function(v) {
                return hexColorRegex.test(v);
            },
            message: props => `${props.value} is not a valid hex color :(`
        }
    },
    labels: {
        type: String,
        trim: true,
        required: true,
    }
}, {collection: 'budget_collection'});

module.exports = mongoose.model('budget_collection', budgetSchema);