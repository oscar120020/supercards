import { Schema, model } from 'mongoose'

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

export default SuperCard