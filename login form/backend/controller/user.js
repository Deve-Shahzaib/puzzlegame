import firebaseConfig from "./db.js";
import {initializeApp} from "firebase/app"
import {getDatabase,ref,set,get,remove,child,push, orderByChild,query,equalTo } from "firebase/database"


const game = initializeApp(firebaseConfig)
const db = getDatabase(game)
const dbRef = ref(db, '/Game/User')
const dbRefGet = ref(db)

export const addUser=(req,res)=>{
    var objUser = req.body
    var key = push(dbRef).key
    objUser.Key = key

    var newChild = child(dbRef , key)
    set(newChild,objUser).then(()=>{
        res.json("Record Succes")
    }).catch((error)=>{
        res.json("Failed")
    })
}

export const isExistEmail =(req,res)=>{
    const email = req.body.mail
    console.log(req.body)
    const existEmail= query(ref(db,'/Game/User'),orderByChild('mail'),equalTo(email));
    get(existEmail).then((data)=>{
var obj = Object.values(data.val())
console.log(obj) 
        if(obj.length == 1){
           if(obj[0].Password==req.body.Password){
            res.json(obj)
           }
           else{
            res.json("Invalid Password")
           }
        }
        
        
    }).catch((error)=>{
        res.json('Invalid email ')
    })
}



export const getAllUser=(req,res)=>{
    get(child(dbRefGet, '/Game/User')).then((gData)=>{
        res.json(Object.values(gData.val()))
    }).catch((error)=>{
        res.json([])
    })
}