
// https://chatgpt.com/share/67a033b2-7d68-800e-8d2f-579cea5c4185
// Task 1: Set up folders and move your files
const express = require('express')
const app = express()

const inventory = [
  {
    category: "Books",
    items: [     
      
      {
        name: "The Pallbearers Club",
        author: "Paul Tremblay",
        quote: "Memories are just stories we tell ourselves, and the scariest ones never really end.",
        image: "https://m.media-amazon.com/images/I/91dNwiPIYNL.jpg",
        
      },
      {
       name: "Such Sharp Teeth",
       author: "Rachel Harrison",
       quote: "The real horror isnt the monster. Its that we all have one inside us.",
       image: "https://m.media-amazon.com/images/I/819I2ufj9cL.jpg",
        
      },
      {
        name: "A House With Good Bones",
        author: "T. Kingfisher",
        quote: "Some houses keep secrets. Some houses feed on them.",
        image: "https://m.media-amazon.com/images/I/91piiOGTQ3L._AC_UF1000,1000_QL80_.jpg",
        
      },
      {
        name: "Lone Women",
        author: "Victor LaValle",
        quote: "Not all monsters hide in the dark. Some of them ride beside you in the daylight.",
        image: "https://m.media-amazon.com/images/I/818BsBX1weL._AC_UF1000,1000_QL80_.jpg",
        
      },
      {
        name: "The Spite House",
        author: "Johnny Compton",
        quote: "A haunted house is just a house that remembers too much.",
        image: "https://m.media-amazon.com/images/I/91OtFPnex+L.jpg",
        
      },
      {
        name: "The Salt Grows Heavy",
        author: "Cassandra Khaw",
        quote: "Fairy tales always leave out the blood.",
        image: "https://mpd-biblio-covers.imgix.net/9781250830913.jpg",
       
      },
      {
        name: "The Devil Takes You Home",
        author: "Gabino Iglesias",
        quote: "Violence is just another language, and I speak it fluently.",
        image: "https://m.media-amazon.com/images/I/714qfdHWbeL._AC_UF1000,1000_QL80_.jpg",
        
      },
      {
        name: "How to Sell a Haunted House",
        author: "Grady Hendrix",
        quote: "The dead never leave. They just wait for you to come back.",
        image: "https://media.titanbooks.com/catalog/products/HOWTOSELLAHH_final.jpg",
        
      }
    ]
  },
  {
    category: "Description",
    items: [
        
          {
            name: "The Pallbearers Club",
            author: "Paul Tremblay",
            description: "The Pallbearers Club is a psychological thriller by Paul Tremblay, published in 2022. The novel follows Art Barbara, a socially awkward seventeen-year-old in the late 1980s who, despite his scoliosis and unconventional interests, forms a club for volunteer pallbearers at sparsely attended funerals. His new friend, Mercy, finds the club intriguing and documents their experiences with her Polaroid camera. Decades later, Art attempts to make sense of their unsettling friendship by writing a memoir, only to find that Mercy has her own revisions to make. The narrative blurs the lines between fiction and memory, the supernatural and the mundane, offering an immersive and suspenseful portrait of an unusual and disconcerting relationship. ⭐⭐⭐☆☆",
            image: "https://m.media-amazon.com/images/I/91dNwiPIYNL.jpg",
        path:"/books/1"
          },
          {
            name: "Such Sharp Teeth",
            author: "Rachel Harrison",
            description: "A darkly humorous yet chilling story about a woman who survives an animal attack—only to find herself changing in ways she never imagined.",
            image: "https://m.media-amazon.com/images/I/819I2ufj9cL.jpg",
        path:"/books/2"
          },
          {
            name: "A House With Good Bones",
            author: "T. Kingfisher",
            description: "A Southern gothic horror novel about a woman returning to her childhood home, only to find that something has twisted the walls and her family’s history.",
            image: "https://m.media-amazon.com/images/I/91piiOGTQ3L._AC_UF1000,1000_QL80_.jpg",
        path:"/books/3"
          },
         
          {
            name: "Lone Women",
            author: "Victor LaValle",
            description: "Set in the early 1900s, this historical horror novel follows a woman carrying a mysterious trunk across Montana—one that hides a deadly secret.",
            image: "https://m.media-amazon.com/images/I/818BsBX1weL._AC_UF1000,1000_QL80_.jpg",
        path:"/books/4"
          },
          {
            name: "The Spite House",
            author: "Johnny Compton",
            description: "A deeply atmospheric ghost story about a man and his daughters taking a job in a strange house, where spirits linger for reasons darker than death itself.",
            image: "https://m.media-amazon.com/images/I/91OtFPnex+L.jpg",
        path:"/books/5"
          },
          {
            name: "The Salt Grows Heavy",
            author: "Cassandra Khaw",
            description: "A dark, lyrical horror novella that twists the idea of mermaids and fairy tales into something violent, visceral, and unforgettable.",
            image: "https://mpd-biblio-covers.imgix.net/9781250830913.jpg",
        path:"/books/6"
          },
          {
            name: "The Devil Takes You Home",
            author: "Gabino Iglesias",
            description: "A harrowing mix of horror and crime noir, this novel follows a desperate man on a bloody journey through the American Southwest, where supernatural forces intertwine with brutal reality.",
            image: "https://m.media-amazon.com/images/I/714qfdHWbeL._AC_UF1000,1000_QL80_.jpg",
        path:"/books/7"
          },
          {
            name: "How to Sell a Haunted House",
            author: "Grady Hendrix",
            description: "A chilling and darkly comedic take on haunted house horror, where a pair of siblings must sell their childhood home, only to realize it refuses to be left behind.",
            image: "https://media.titanbooks.com/catalog/products/HOWTOSELLAHH_final.jpg",
        path:"/books/8"
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



app.get("/books/:path",(req,res)=>{
  const path = req.params.path
  res.render("description.ejs",inventory[1].items[path])
})

app.get("/books/:path",(req,res)=>{
  const path = req.params.path
  res.render("category.ejs",inventory[1].items[path])
})


// Task 6: Plug in the values in product.ejs to get the page working
// Extra credit: modify the /item/0 route handler to have dynamic path parameter and return any item's data

app.listen(3000, () => {
  console.log("Server running")
})
