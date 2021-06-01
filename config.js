class dbConfig {
    constructor() {
        this.host = 'localhost';
        this.user = 'root';
        this.password = 'root';
        this.database = 'sports_player_lookup';
    }
}
module.exports = new dbConfig;