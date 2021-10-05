import SuperCard from '../models/superCard'


const getSuperCards = async (req, res) => {
    const superCards = await SuperCard.find()
    res.json(superCards)
}

const createSuperCards = async (req, res) => {
    const { name, universe, image } = req.body

    if (name && universe && image){
        const newCard = new SuperCard({
            name,
            universe,
            image
        })
    
        await newCard.save()
        res.status(201).json({message: "card created successfully"})
    }else{
        res.status(400).json({message: "name, universe and image are required"})
    }

}

const updateSuperCards = async (req, res) => {
    const id = req.params.cardId
    if(Object.keys(req.body).length !== 0){
        await SuperCard.findByIdAndUpdate(id, req.body)
        res.status(200).json({message: `Card with id ${id} has been updated`})
    }else{
        res.status(400).json({message: `Nothing to update`})
    }
}

const deleteSuperCards = async (req, res) => {
    const id = req.params.cardId
    await SuperCard.findByIdAndDelete(id)
    res.status(200).json({message: `Card with id ${id} has been deleted`})
}

export default {
    getSuperCards,
    createSuperCards,
    updateSuperCards,
    deleteSuperCards
}