module.exports = mongoose.model('Standup', standupSchema)
const mongoose = require('mongoose')

const teamMemberSchema = new mongoose.Schema({
    name: { type: String }
})

module.exports = mongoose.model('TeamMember', teamMemberSchema)