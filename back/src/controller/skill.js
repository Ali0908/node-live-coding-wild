const dataSource = require ("../utils").dataSource;
const Skill = require("../entity/Skill");

module.exports = {
    create: async (req, res) => {
        try{
            await dataSource
            .getRepository(Skill)
            .save(req.body);
            res.send ("Created skill");
            }
        catch (error) {
            console.log(error);
        res.send ("Error wile creating wilder");
        }
        },
    read: async (req, res) => {
        try {
            await dataSource
            .getRepository(Skill)
            .find()
            res.send ();
            
        }
        catch (error) {
            console.log(error);
            res.send();
        };
            },
    update:  async (req, res) => {
    
            try {
                await dataSource
                .getRepository(Skill)
                .update(req.body.id, req.body.newData)
                    res.send ("Update a wilder");
            }
            catch(error) {
                console.log(error);
                res.send ("Error wile creating wilder");
            };
                },
    delete:  async (req, res) => {
            try {
            await  dataSource
            .getRepository(Skill)
            .delete(req.body)
            res.send ("Delete a wilder");
            }
            catch (error) {
                console.log(error);
                res.send ("Error wile creating wilder");
            };
                },
            
    };