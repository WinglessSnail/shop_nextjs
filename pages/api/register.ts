import type { NextApiRequest, NextApiResponse } from 'next'
import data from "../../database/users.json"

const fs = require("fs")

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method != "POST") {
    res.status(405).send({ message: "only post request is allowed" })
    return
  }
  const { username, password , password_confirm } = req.body

  if(password  !== password_confirm){
    res.status(419).send({message : "please check your passwords"})
    return
  }
  const id = data.length + 1
  const newUser = {id , name : username , password }

  data.push(newUser)
  
  fs.writeFileSync("database/users.json" , JSON.stringify(data , null , 4))

  res.status(201).send({ message : "new user created"})
  
  

}
