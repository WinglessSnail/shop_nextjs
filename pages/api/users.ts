import type { NextApiRequest, NextApiResponse } from 'next'

const data =[
    {"id": 1 , "name" : "james" , "password" : "james"},
    {"id": 2 , "name" : "alex" , "password" : "alex"},
    {"id": 3 , "name" : "bob" , "password" : "bob"},
    {"id": 4 , "name" : "chris" , "password" : "chris"}
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(data)
}
