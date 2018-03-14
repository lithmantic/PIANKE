const router = require('koa-router')();
const adminDb=require('../service/Admin');

router.prefix('./user');
router.get('/',function (ctx,next){
    ctx.body = 'this is a user response!'
})
router.post('/login',async function (ctx,next){
    ctx.set("Access-Control-Allow-Origin","*");
    let admin =JSON.parse(ctx.request.body);
    let admins=await adminDb.query(admin);
    if(admins){
        ctx.body={
            status:"ok"
        }
    }else{
        ctx.body={
            status:"no"
        }
    }
})
router.post('/add',async function (ctx,next){
    ctx.set("Access-Control-Allow-Origin","*");
    let admin =JSON.parse(ctx.request.body);
    let id=await adminDb.addAdmin(user);
    ctx.body={
        id:id
    }
})
module.export = router