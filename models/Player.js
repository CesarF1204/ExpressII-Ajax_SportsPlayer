const Model = require('./Model');
const mysql = require('mysql');

class Player extends Model {
    constructor() {
        super();
    }
    async get_players(data, gender, sport) {
        try {
            let sql_query = mysql.format(`SELECT * FROM players
                LEFT JOIN sports ON players.sport_id = sports.id
                WHERE concat(first_name, ' ' ,last_name) LIKE '%${data}%'
                AND gender = '${gender}'
                AND sports.name = '${sport}'`, [data, gender, sport]);
            return await this.query(sql_query);
        } catch(err) {
            console.log("Error: ", err);
        }
    }
}
module.exports = new Player;