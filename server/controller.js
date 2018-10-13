module.exports = {
    read: (req, res, next) => {
        const dbInstance = req.app.get('db');
        dbInstance.get_inventory()
        .then(inventory => res.status(200).send(inventory))
        .catch(error => {
            res.status(500).send('attempted read method', error)
        })
    }
}