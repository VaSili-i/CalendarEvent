const { Users, Events } = require('../modul')


class EventController {
    async addEvent(req, res) {
        try {
            let { date, description, author, guest } = req.body;
            let event = await new Events({ date, description, author, guest });
            event.save()
            let events = await Events.find({}, '-_id -__v');
            res.send(events)
        } catch (e) {
            console.log(e)
        }
    }
    async getEvent(req, res) {
        try {
            let name = req.query.name;
            let event = await Events.find({ name }, '-_id -__v');
            res.send(event)
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new EventController()