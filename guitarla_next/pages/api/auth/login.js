import jwt from 'jsonwebtoken';

export default function loginHandler(req, res){

 const {email, password}  = req.body

  if( email === `admin@gmail.com` && password === `admin`){
    const token = jwt.sign(
      {username : `admin`},
      `secret`,
      { expiresIn: `1h`},
      
      )
  
  
  
      return res.status(200).json({token})
  }else{
     return res.status(401).json({error : `credenciales incorrecta`})
  }




}

