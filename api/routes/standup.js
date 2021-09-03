const Standup = require("../../models/standup")

module.exports = function (router) {
    //GET: the 12 newest stand-up meeting notes
    router.get('/standup', (req, res) => {
        Standup.find()
            .sort({ 'createdOn': -1 })
            .limit(12)
            .exec()
            .then(docs=>
                {
                //array of objects from the json of the database
                arr = []
                docs.forEach(element => {
                    str = [element.teamMember, element.project, element.workYesterday, element.workToday, element.impediment, element.createdOn]
                    arr.push(str)
                });
                //html string
                let html = `<html><body><h1> Os meeting mas recentes: <br>${arr[0]} <br><br>${arr[1]}`
                res.send(html)
            })
            .catch(err => res.status(500).json({
                message: 'Error finding standup meeting notes',
                error: err
            }))

    })

    //GET: stand-up meeting by ID
    router.get('/standup/:id', function (req, res) {
        Standup.findById(req.params.id)
            .sort({ 'createdOn': -1 })
            .exec()
            .then(docs => res.status(200).json(docs))
            .catch(err => res.status(500).json({
                message: 'Error finding standup meeting notes',
                error: err
            }))

    })

    //POST: create new meeting note document
    router.post('/standup', function (req, res) {
        let note = new Standup(req.body)
        note.save(function (err, note) {
            if (err) {
                return res.status(400).json(err)
            }
            res.status(200).json(note)
        })
    })

    //PUT: Update info
    router.put('/standup/:id', function (req, res) {
        Standup.findOneAndUpdate({ _id: req.params.id }, req.body)
            .exec()
            .then(docs => res.status(200).json(docs))
            .catch(err => res.status(500).json({
                message: 'Error finding standup meeting notes',
                error: err
            }))
    })
    //DELETE: Delete a satnd-up meeting
    router.delete('/standup/:id', function (req, res) {
        Standup.findOneAndDelete({ _id: req.params.id })
            .exec()
            .then(docs => res.status(200).json(docs))
            .catch(err => res.status(500).json({
                message: 'Error finding standup meeting notes',
                error: err
            }))
    })
}