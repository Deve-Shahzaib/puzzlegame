import express from 'express'
import cors from 'cors'
import user from './Router/user.js'  

const PORT = 2022
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/user', user)
app.listen(PORT,()=> {
    console.log('server is runinig on Game' + PORT)})