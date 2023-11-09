// import json server

const jsonserver=require('json-server')

// create server using json-server library

const mediaplayerserver =jsonserver.create()

// create path to db.json file

const router=jsonserver.router('db.json')

// middlewares to convert js to json

const middleware=jsonserver.defaults()

// connect middleware to server

mediaplayerserver.use(middleware)
mediaplayerserver.use(router)

// set up port for the server

const port =4000 || process.env.PORT

// to listen server for resolving request

mediaplayerserver.listen(port,()=>{
    console.log(`mediaplayer server started at ${port} and ready fecth request`);
})