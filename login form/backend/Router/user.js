import { addUser, getAllUser, isExistEmail} from "../controller/user.js";
import express from "express"

const user = express.Router()

user.get("/getdata", getAllUser)

user.post('/addUser', addUser)
user.post('/isExistEmail', isExistEmail)

// abc.post('/getSingleUser', getSingleUser)
// abc.post('/update', updateUserRec)
// abc.post('/remover',removeUserRec)
export default user