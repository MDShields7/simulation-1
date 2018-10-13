module.exports = {
    read: (req, res, next) => {
        // const dbInstance = req.app.get('db');
        console.log('and i read it')
        // .then(res.sendStatus(200))
        .catch(error => {
            res.status(500).send('attempted read method', error)
        })
    }
}