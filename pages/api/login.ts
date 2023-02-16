import type { NextApiRequest, NextApiResponse } from 'next'
import data from "../../database/users.json"


export default function handleLogin(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method != "POST") {
    res.status(405).send({ message: "only post request is allowed" })
    return
  }
  const { username, password } = req.body

  // console.log(req.body.username);
  const user = data.find((user) => user.name === username && user.password === password)
  if (user) {

    res.status(200).send({ message : "you're logged in", user })
    return
  }

  res.status(401).send({ message: "credentioals are not valid" })


}
