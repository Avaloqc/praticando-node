const Project = require("../../models/projects")

module.exports = function (router) {
    //GET: list of active projects
    router.get('/projects', function (req, res) {

    })

    //POST: Create new Project ..
    router.post('/projects', function (req, res) {
        let project = new Project(req.body)
        note.save(function (err, note) {
            if (err) {
                return res.status(400).json(err)
            }
            res.status(200).json(note)
        })
    })
}