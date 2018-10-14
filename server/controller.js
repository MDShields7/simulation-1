module.exports = {
    read: (req, res, next) => {
        const dbInstance = req.app.get('db');
        console.log('controller, read,')
        dbInstance.get_inventory()
        .then(inventory => res.status(200).send(inventory))
        .catch(error => {
            res.status(500).send('attempted read method', error)
        })
    },
    readOne: (req, res , next) => {
        const dbInstance = req.app.get('db');
        const {id} = req.params;
        console.log('controller, readOne, id', id)
        dbInstance.get_inventory(id)
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
    },
    delete: (req, res, next) => {
        // console.log(req.params)
        const dbInstance = req.app.get('db');
        const {id} = req.params;
        console.log('controller, delete, id', id)
        dbInstance.delete_inventory(id)
        .then( () => res.sendStatus(200))
        .catch( error => {
            res.status(500).send( error)
        })
    },
    // update: (req, res, next ){

    // }
}