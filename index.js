

// Task 1: Set up folders and move your files
const express = require('express')
const app = express()

const inventory = [
  {
    category: "Books",
    items: [
      {
        name: "The Only Good Indians",
        author: "Stephen Graham Jones",
        quote: "Revenge is a long game, and the dead have all the time in the world.",
        image: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982136468/the-only-good-indians-9781982136468_lg.jpg"
      },
      {
        name: "The Pallbearers Club",
        author: "Paul Tremblay",
        quote: "Memories are just stories we tell ourselves, and the scariest ones never really end.",
        image: "https://example.com/how-to-sell-a-haunted-house.jpg"
      },
      {
       name: "Such Sharp Teeth",
       author: "Rachel Harrison",
       quote: "The real horror isnt the monster. Its that we all have one inside us.",
        image: "https://example.com/how-to-sell-a-haunted-house.jpg"
      },
      {
        name: "A House With Good Bones",
        author: "T. Kingfisher",
        quote: "Some houses keep secrets. Some houses feed on them.",
        image: "https://example.com/how-to-sell-a-haunted-house.jpg"
      },
      {
        name: "Lone Women",
        author: "Victor LaValle",
        quote: "Not all monsters hide in the dark. Some of them ride beside you in the daylight.",
        image: "https://example.com/how-to-sell-a-haunted-house.jpg"
      },
      {
        name: "The Spite House",
        author: "Johnny Compton",
        quote: "A haunted house is just a house that remembers too much.",
        image: "https://example.com/how-to-sell-a-haunted-house.jpg"
      },
      {
        name: "The Salt Grows Heavy",
        author: "Cassandra Khaw",
        quote: "Fairy tales always leave out the blood.",
        image: "https://example.com/how-to-sell-a-haunted-house.jpg"
      },
      {
        name: "The Devil Takes You Home",
        author: "Gabino Iglesias",
        quote: "Violence is just another language, and I speak it fluently.",
        image: "https://example.com/how-to-sell-a-haunted-house.jpg"
      },
      {
        name: "How to Sell a Haunted House",
        author: "Grady Hendrix",
        quote: "The dead never leave. They just wait for you to come back.",
        image: "https://example.com/how-to-sell-a-haunted-house.jpg"
      }
    ]
  },
  {
    category: "Description",
    items: [
        {
            name: "The Only Good Indians",
            description: "A haunting blend of horror and cultural identity, this novel follows four Native American men as they are hunted by a supernatural entity seeking retribution for a long-forgotten act.",
            image: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982136468/the-only-good-indians-9781982136468_lg.jpg"
          },
          {
            name: "The Pallbearers Club",
            description: "A unique blend of memoir and horror, this book explores an eerie friendship, unreliable narratives, and the possibility that something sinister has always lurked in the shadows.",
            image: "https://example.com/how-to-sell-a-haunted-house.jpg"
          },
          {
            name: "Such Sharp Teeth",
            description: "A darkly humorous yet chilling story about a woman who survives an animal attack—only to find herself changing in ways she never imagined.",
            image: "https://example.com/how-to-sell-a-haunted-house.jpg"
          },
          {
            name: "A House With Good Bones",
            description: "A Southern gothic horror novel about a woman returning to her childhood home, only to find that something has twisted the walls and her family’s history.",
            image: "https://example.com/how-to-sell-a-haunted-house.jpg"
          },
          {
            name: "Black River Orchard",
            description: "An unsettling, slow-burn horror novel about a cursed apple orchard whose fruits change those who eat them in terrifying ways.",
            image: "https://example.com/how-to-sell-a-haunted-house.jpg"
          },
          {
            name: "Lone Women",
            description: "Set in the early 1900s, this historical horror novel follows a woman carrying a mysterious trunk across Montana—one that hides a deadly secret.",
            image: "https://example.com/how-to-sell-a-haunted-house.jpg"
          },
          {
            name: "The Spite House",
            description: "A deeply atmospheric ghost story about a man and his daughters taking a job in a strange house, where spirits linger for reasons darker than death itself.",
            image: "https://example.com/how-to-sell-a-haunted-house.jpg"
          },
          {
            name: "The Salt Grows Heavy",
            description: "A dark, lyrical horror novella that twists the idea of mermaids and fairy tales into something violent, visceral, and unforgettable.",
            image: "https://example.com/how-to-sell-a-haunted-house.jpg"
          },
          {
            name: "The Devil Takes You Home",
            description: "A harrowing mix of horror and crime noir, this novel follows a desperate man on a bloody journey through the American Southwest, where supernatural forces intertwine with brutal reality.",
            image: "https://example.com/how-to-sell-a-haunted-house.jpg"
          },
          {
            name: "How to Sell a Haunted House",
            description: "A chilling and darkly comedic take on haunted house horror, where a pair of siblings must sell their childhood home, only to realize it refuses to be left behind.",
            image: "https://example.com/how-to-sell-a-haunted-house.jpg"
          }
    ]
  }
]

 
app.set('view engine','ejs');


app.use((req, res, next) => {
  console.log(req.method + " " + req.path)
  next()
})


app.use(express.static(__dirname + "/public"))



app.get("/",(req,res)=>{
  res.render("index.html")
})


// Task 3: Set up the route handler for /mens which sends back category.ejs with the men's category object

app.get("/books",(req,res)=>{
  res.render("category.ejs",inventory[0])
})


app.get("/extra",(req,res)=>{
  res.render("category.ejs",inventory[1])
})



// app.get("/item/:path",(req,res)=>{
//   const path = req.params.path
//   res.render("product.ejs",inventory[0].items[path])
// })


// Task 6: Plug in the values in product.ejs to get the page working
// Extra credit: modify the /item/0 route handler to have dynamic path parameter and return any item's data

app.listen(3000, () => {
  console.log("Server running")
})
