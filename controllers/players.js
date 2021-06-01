const config = require('../config');
const players = require('../models/Player');
class Players {
    async index(req, res) {
        res.render("index");
    }
    async search(req, res) {
        let name = req.body.name;
        let gender = req.body.gender;
        let sport = req.body.sport;
        let getPlayer = await players.get_players(name, gender, sport);
        res.render("partials/players", {getPlayer: getPlayer});
    }
}
module.exports = new Players;