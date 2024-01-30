const express = require('express')
const app = express();


app.get('/',(req,res) =>{
    var u_data = {
        "name":"Minakshi Vyavahare",
        "email":"minakshi@gmail.com",
        "city":"indore"
    }
    res.status(200).json({message:"successfully !!",results:u_data})
})

app.listen(4000, () =>{
    console.log("server is running on port 4000")
})