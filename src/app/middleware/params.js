module.exports = async (req, res, next) => {
    const { location } = req.query;

    if(!location.lat || !location.long){
        return res.status(400).json({error: 'Parametros não informado ou informado com erro!'});
    }

    return next();
}