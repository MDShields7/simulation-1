module.exports = {
    read: (req, res, next) => {
        const dbInstance = req.app.get('db');
        dbInstance.get_inventory()
        .then(inventory => res.status(200).send(inventory))
        .catch(error => {
            res.status(500).send('attempted read method', error)
        })
    },
    post: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {name, price, image_url} = req.body;
        dbInstance.create_inventory([name, price, image_url])
        .then( () => res.sendStatus(200))
        .catch( error => {
            res.status(500).send('attempted create method', error)
        })
    }
}