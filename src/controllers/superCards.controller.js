const SuperCard = require('../models/superCard')


const getSuperCards = async (req, res) => {
    const superCards = await SuperCard.find()
    res.json(superCards)
}

const createSuperCards = async (req, res) => {
    const { name, universe, image } = req.body

    const newCard = new SuperCard({
        name,
        universe,
        image
    })

    await newCard.save()
    res.status(201).json({message: "card created successfully"})
}

const updateSuperCards = async (req, res) => {
    const id = req.params.cardId
    await SuperCard.findByIdAndUpdate(id, req.body)
    res.status(200).json({message: `Card with id ${id} has been updated`})
}

const deleteSuperCards = async (req, res) => {
    const id = req.params.cardId
    await SuperCard.findByIdAndDelete(id)
    res.status(200).json({message: `Card with id ${id} has been deleted`})
}

module.exports = {
    getSuperCards,
    createSuperCards,
    updateSuperCards,
    deleteSuperCards
}