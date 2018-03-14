const db = require('./Db');

class Admindb{
    async add(users){
        let id = 1;
        await db.exec('insert into admin set ?',{
            phone:user.phon,
            pwd:user.pwd
        })
        .then(row => {
            id = rows.insertId;
        })
        .catch(e => {
            console.log(e);
        })
        return id;
    }
    async query(admin){
        let admins = [];
        await db.exec('select phone,pwd from admin where phone='${admin.phone}' and pwd='${admiin.pwd}')
            .then(rows =>{
               admins=row.map(row=>{
                   let o={};
                   Object.assign(o,row);
                   return o;
               });
            })
            .catch(e =>{
                console.log(e)
            })
            return admins[0]
    }
}
module.exports = new Admindb();