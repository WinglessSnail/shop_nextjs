import type { NextApiRequest, NextApiResponse } from 'next'

const data = [
  {
      "id": 1,
      "title": "Jordan 5 “Green Bean”",
      "description": "Stand out from the crowd. The Air Jordan 5 Retro brings back a coveted 2006 release done up in grey-reflectivity design and, of course, bright green accents. Synthetic leather, durable textile materials, and plastic lace loops provide structure to this classic off-court look.",
      "img": "/pics/green.jpg",
      "price": 200,
      "off": 0.2,
      "favestate": false
  },
  {
      "id": 2,
      "title": "Air Jordan 6 Retro Low",
      "description": "Released in '91 and reissued throughout the early 2000s, the Air Jordan VI's first low-cut form didn't arrive until 2002. Twenty years later, we're bringing you a fresh, yet familiar new pair of kicks for spring.",
      "img": "/pics/low.jpg",
      "price": 200,
      "off": 0.2,
      "favestate": false
  },
  {
      "id": 3,
      "title": "Air Jordan 1 Mid SE Craft",
      "description": "Consistently fresh and always on point, the AJ1 is one of the most iconic sneakers of all time. This version uses natural tones and suede details for a grounding refresh to a soaring legend.",
      "img": "/pics/craft.jpg",
      "price": 135,
      "off": 0.2,
      "favestate": false
  },
  {
      "id": 4,
      "title": "Air Jordan 1 Zoom CMFT",
      "description": "Making iconic style even more comfortable. The Air Jordan 1 Zoom Cmft remakes the 1st Air Jordan with lightweight, low-profile cushioning and elements that improve wearability. Leathers and textiles in the upper have a broken-in feel. A lined, padded collar cups the heel for a secure fit.",
      "img": "/pics/CMFT.jpg",
      "price": 150,
      "off": 0.2,
      "favestate": false
  },
  {
      "id": 5,
      "title": "Air Jordan 1 Mid SE",
      "description": "Stand out with timeless hoops style. Premium leather gets polished, shined and textured to deliver a fresh take on the shoe that started it all. Air cushioning and a classic design keep everything you love best from the original.",
      "img": "/pics/midse.jpg",
      "price": 135,
      "off": 0.2,
      "favestate": false
  },
  {
      "id": 6,
      "title": "Air Jordan 5 Retro",
      "description": "Get your piece of Jordan history and heritage with the Air Jordan 5 Retro. Based on the classic game shoe from 1990, it has all the iconic details, including the bump-out collar, lace toggle and fighter plane-inspired design lines.",
      "img": "/pics/retro.jpg",
      "price": 200,
      "off": 0.2,
      "favestate": false
  },
  {
      "id": 7,
      "title": "Air Jordan 7 Citrus",
      "description": "Fresh-squeezed style is coming your way. Bringing back the energetic colorway that dropped in 2006, this Air Jordan 7 celebrates the 30th anniversary of the title-winning silhouette. Premium Black nubuck contrasts against lively Citrus accents, including color-popped stitching and embroidered Jumpman. The Varsity Red liner and 23 on the heel keep the championship legacy alive. Go ahead, take a sip and refresh your step.",
      "img": "/pics/Citrus.jpg",
      "price": 200,
      "off": 0.2,
      "favestate": false
  },
  {
      "id": 8,
      "title": "Jordan Stay Loyal",
      "description": "Straight from our past and into the future. The Jordan Stay Loyal takes cues from the classic Air Jordan 12 to create a shoe that's fresh yet familiar. Inspired by the 12's durability, it features burly leather overlays and rubber herringbone traction that wraps up the toe, sides and heel.",
      "img": "/pics/loyal.jpg",
      "price": 110,
      "off": 0.2,
      "favestate": false
  },
  {
      "id": 9,
      "title": "Jordan Delta 3 SP",
      "description": "Combining high-end craft with high-tech features, these kicks are the embodiment of cool. Airy ripstop and soft suede pair with a seamless interior for a classic look and premium Jordan Brand comfort.",
      "img": "/pics/delta.jpg",
      "price": 160,
      "off": 0.2,
      "favestate": false
  },
  {
      "id": 10,
      "title": "Jordan Series ES",
      "description": "Inspired by Mike's backyard battles with his older brother Larry, the Jordan Series references their legendary sibling rivalry throughout the design. The rubber sole offers more than just impressive traction—it also tells the story of how MJ came to be #23. Look for the hidden reminder to 'Swing for the Fence', a direct quote from Larry to his little bro.",
      "img": "/pics/es.jpg",
      "price": 85,
      "off": 0.2,
      "favestate": false
  },
  {
      "id": 11,
      "title": "Jordan XXXVI'Taco Jay'",
      "description": "Prep for the game by lacing up your AJs, win the game by channeling the heat of “Taco Jay.” The 36th generation of Air Jordan celebrates the newest superstars to build the game, and this model is all about Jayson Tatum. Bridging tunnel style with performance tech, the design pays homage to Jay's intensity on the court—and fiery hot-sauce-and-cheese inspired colors nod to his favorite post-game food.",
      "img": "/pics/x.jpg",
      "price": 195,
      "off": 0.2,
      "favestate": false
  },
  {
      "id": 12,
      "title": "Air Jordan 14 Light Ginger",
      "description": "You might not be able to catch the gingerbread man, but at least you get a chance to catch this coveted reissue. Revisiting the famed colorway unveiled in 1999, the AJ14 'Light Ginger' dons premium leather for an elevated look and feel. Meanwhile, Zoom Air in the forefoot and heel gives you the head start you need to stay ahead of the pack. So get going and nab a pair of these kicks—the last MJ signature model worn on-court for Chicago by His Airness himself.",
      "img": "/pics/Ginger.jpg",
      "price": 210,
      "off": 0.2,
      "favestate": false
  },
  {
      "id": 13,
      "title": "Jordan Super Play",
      "description": "Your feet deserve nothing but the best. These slides offer lightweight foam and plush underfoot cushioning—premium comfort you'll look forward to after your next big game.",
      "img": "/pics/play.jpg",
      "price": 60,
      "off": 0.2,
      "favestate": false
  },
  {
      "id": 14,
      "title": "Jordan Play",
      "description": "Get all the underfoot support you need with these essential slides. Enjoy the cushioning of thick, lightweight foam for beach days or post-game hangouts.",
      "img": "/pics/jplay.jpg",
      "price": 45,
      "off": 0.2,
      "favestate": false
  },
  {
      "id": 15,
      "title": "Jordan 6 Rings",
      "description": "Celebrate the legendary career of 'His Airness' with the Jordan 6 Rings. Incorporating key features of each shoe worn during the championship series, it has premium details and lightweight, low-profile Zoom Air cushioning that delivers a responsive feel underfoot.",
      "img": "/pics/rings.jpg",
      "price": 170,
      "off": 0.2,
      "favestate": false
  }
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(data)
}
