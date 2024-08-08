import React from 'react'
import { verify } from 'jsonwebtoken'

const profileHandler = (req,res) => {
   
   const TOKEN =  req.headers.authorization 
   
   if(!TOKEN){
    return res.json(error `error of token not exist`)
   }  
   
   user = verify(MYTOKENNAME,`SECRET`)
   console.log(user)

     
}

export default Handler
