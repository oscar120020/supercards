

export const verifyAuthorization = (req, res, next) => {
    try {
        const token = req.headers['authorization']
        const authToken = "AZJYR54ER9HPL6321WSC4SEE8FGF66W"

        if (!token) return res.status(403).json({message: "Authorization needed"})

        if (token !== authToken) return res.status(403).json({message: "No authorized"})

        next()
    } catch (error) {
        res.status(403).json({message: "Authorization failed"})
    }
}