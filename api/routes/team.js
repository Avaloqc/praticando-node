const TeamMember = require("../../models/team")

module.exports = function (router) {
    //GET: list of team members
    router.get('/projects', function (req, res) {
        
    })

    //POST: Create new TeamMember ..
    router.post('/team', function (req, res) {
        let member = new TeamMember(req.body)
        note.save(function (err, note) {
            if (err) {
                return res.status(400).json(err)
            }
            res.status(200).json(note)
        })
    })
}