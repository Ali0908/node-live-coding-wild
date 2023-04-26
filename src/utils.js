const typeorm = require("typeorm")

 module.exports = {
    dataSource:new typeorm.DataSource({
        type: "sqlite",
        database: "./wildersdbs.sqlite",
        synchronize: true,
        entities: [require("./entity/Wilder"), require("./entity/Skill")],
        logging :["query","error"]
      })
 }
