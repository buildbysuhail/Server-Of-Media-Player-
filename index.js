//Importing json-Server library from node_modules:-
const jsonServer = require("json-server")

//create Server instance:-
const MPserver = jsonServer.create()

//(1)Routing json resource to Server:-(Connecting with created Server)
const router = jsonServer.router('db.json')

//(2)Implementing default middleware:-
const middleware = jsonServer.defaults() 

//(3)defining port No. for Server:-
const PORT = 3001 || process.env.PORT

//Configuring router, middleware, PORT into server :-
MPserver.use(middleware)
MPserver.use(router)
MPserver.listen(PORT,()=>{  // Server Listening Mechanism
    console.log(`Media Player Server running at: ${PORT}`);   
})
