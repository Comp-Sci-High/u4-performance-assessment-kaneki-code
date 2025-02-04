
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
            description: "Such Sharp Teeth by Rachel Harrison is a gripping novel that masterfully blends horror, humor, and heartfelt moments. The story follows Rory Morris, a confident and independent woman who returns to her hometown to support her estranged twin sister during a challenging pregnancy. One fateful night, after a violent encounter with a mysterious creature, Rory undergoes a terrifying transformation that forces her to confront her deepest fears and traumas. As she grapples with her new reality, the novel delves into themes of self-acceptance, the complexities of sisterhood, and the struggle between one's inner and outer selves. Harrisons sharp wit and insightful storytelling make this a standout read in contemporary horror fiction.   ⭐⭐⭐⭐☆",
            image: "https://m.media-amazon.com/images/I/819I2ufj9cL.jpg",
        path:"/books/2"
          },
          {
            name: "A House With Good Bones",
            author: "T. Kingfisher",
            description: "A House with Good Bones by T. Kingfisher is a haunting Southern Gothic novel that delves into the unsettling changes within a seemingly perfect family home. The story follows Sam Montgomery, an entomologist whose fieldwork is unexpectedly canceled, prompting her to visit her mother and childhood home for an extended stay. Upon arrival, Sam notices that both her mother and the house have changed dramatically. The once vibrant home now feels oppressive, and her mother exhibits strange behaviors that raise Sam's suspicions. As she investigates, Sam uncovers dark, twisted roots lurking just beneath the veneer of their perfect family life. The novel masterfully blends suspense with elements of horror, exploring themes of family secrets and the haunting nature of the past.    ⭐⭐⭐⭐☆",
            image: "https://m.media-amazon.com/images/I/91piiOGTQ3L._AC_UF1000,1000_QL80_.jpg",
        path:"/books/3"
          },
         
          {
            name: "Lone Women",
            author: "Victor LaValle",
            description: "Lone Women by Victor LaValle is a captivating novel that masterfully blends elements of horror, historical fiction, and the Western genre. Set in the early 20th century, the story follows Adelaide Henry, a woman burdened by a traumatic past and a mysterious, locked steamer trunk. After a devastating event, Adelaide leaves her home in California and ventures to the vast, untamed plains of Montana, seeking a fresh start as a homesteader. However, the secrets she carries are not so easily left behind. As Adelaide settles into the harsh and unforgiving landscape, she encounters a community of fellow homesteaders, each with their own hidden pasts and challenges. The novel delves into themes of isolation, survival, and the haunting nature of buried secrets, all set against the backdrop of the American West. LaValle's evocative prose and rich character development create a suspenseful and immersive reading experience that lingers long after the final page.   ⭐⭐⭐⭐☆",
            image: "https://m.media-amazon.com/images/I/818BsBX1weL._AC_UF1000,1000_QL80_.jpg",
        path:"/books/4"
          },
          {
            name: "The Spite House",
            author: "Johnny Compton",
            description: "Lone Women by Victor LaValle is a captivating novel that masterfully blends elements of horror, historical fiction, and the Western genre. Set in the early 20th century, the story follows Adelaide Henry, a woman burdened by a traumatic past and a mysterious, locked steamer trunk. After a devastating event, Adelaide leaves her home in California and ventures to the vast, untamed plains of Montana, seeking a fresh start as a homesteader. However, the secrets she carries are not so easily left behind. As Adelaide settles into the harsh and unforgiving landscape, she encounters a community of fellow homesteaders, each with their own hidden pasts and challenges. The novel delves into themes of isolation, survival, and the haunting nature of buried secrets, all set against the backdrop of the American West. LaValle's evocative prose and rich character development create a suspenseful and immersive reading experience that lingers long after the final page.    ⭐⭐⭐⭐☆",
            image: "https://m.media-amazon.com/images/I/91OtFPnex+L.jpg",
        path:"/books/5"
          },
          {
            name: "The Salt Grows Heavy",
            author: "Cassandra Khaw",
            description: "The Salt Grows Heavy by Cassandra Khaw is a dark and evocative novella that intertwines elements of horror and dark fantasy. The narrative begins with a mermaid who, after being captured and mutilated by a prince, becomes entangled with a mysterious plague doctor. Together, they traverse a haunting landscape, confronting grotesque horrors and exploring themes of identity, trauma, and transformation. Khaw's prose is noted for its lyrical and vivid descriptions, immersing readers in a world that is both beautiful and macabre.   ⭐⭐⭐⭐☆",
            image: "https://mpd-biblio-covers.imgix.net/9781250830913.jpg",
        path:"/books/6"
          },
          {
            name: "The Devil Takes You Home",
            author: "Gabino Iglesias",
            description: "The Devil Takes You Home by Gabino Iglesias Follows Mario, a man grappling with overwhelming personal tragedies, including his daughter's illness and the subsequent financial strain. In a desperate bid to overcome his mounting debts, Mario becomes entangled in the dangerous world of cartel hitmen. As he delves deeper into this perilous path, he confronts not only the brutal realities of the criminal underworld but also supernatural horrors that blur the lines between reality and nightmare. Set against the backdrop of the U.S.–Mexico borderlands, the novel explores themes of grief, desperation, and the lengths one might go to for family. Iglesias's vivid prose immerses readers in a haunting narrative that is both harrowing and poignant.   ⭐⭐⭐⭐☆",
            image: "https://m.media-amazon.com/images/I/714qfdHWbeL._AC_UF1000,1000_QL80_.jpg",
        path:"/books/7"
          },
          {
            name: "How to Sell a Haunted House",
            author: "Grady Hendrix",
            description: "How to Sell a Haunted House by Grady Hendrix is a horror novel that delves into family dynamics and the supernatural. The story follows estranged siblings Louise and Mark Joyner, who reunite after the sudden death of their parents. Tasked with settling their parents' estate, they confront their tumultuous relationship and the eerie occurrences within their childhood home. As they prepare to sell the house, unsettling events unfold, revealing dark family secrets and forcing them to confront their past.   ⭐⭐⭐⭐☆",
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
