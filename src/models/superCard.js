const { Schema, model } = require('mongoose')

const superSchema = new Schema(
    {
        name: String,
        universe: String,
        image: String
    },
    {
        timestamps: true,
        versionKey:false
    }
)

const SuperCard = model('superCard', superSchema)

module.exports = SuperCard