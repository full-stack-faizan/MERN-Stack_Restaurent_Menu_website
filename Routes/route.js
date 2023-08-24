const express = require('express')
const router = express.Router()
const resturntData = require('../Schema/model')
// router.get('/',(req,res)=>{
// res.send('this is route express')
// })

const AddRequest= async(req,res)=>{
    try {
      const myd = await resturntData.insertMany(
        [
          {
                  "name": "Buttermilk Pancakes",
                  "prize": "$15.99",
                  "image": "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                  "detal": "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
                  "category": "Breakfast"
          
              },
          
              {
                  "name": "Street Food",
                  "prize": "$15.99",
                  "image": "https://images.pexels.com/photos/983297/pexels-photo-983297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                  "detal": "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
                  "category": "Party-Dishes"
          
              },
          
              {
                  "name": "Country Delight",
                  "prize": "$20.99",
                  "image": "https://images.pexels.com/photos/5907537/pexels-photo-5907537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                  "detal": "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut",
                  "category": "Breakfast"
          
              },
              {
                  "name": "Bacon Overflow",
                  "prize": "$8.99",
                  "image": "https://images.pexels.com/photos/139746/pexels-photo-139746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                  "detal": "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
                  "category": "Breakfast"
          
              },
              {
                  "name": "Diner Double",
                  "prize": "$13.99",
                  "image": "https://images.pexels.com/photos/5710178/pexels-photo-5710178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                  "detal": "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
                  "category": "Lunch"
          
              },
              {
                  "name": "Healty Fruits",
                  "prize": "$22.99",
                  "image": "https://images.pexels.com/photos/17130430/pexels-photo-17130430/free-photo-of-reaching-for-food-from-the-bathtub-tray.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                  "detal": "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
                  "category": "Lunch"
          
              },
              {
                  "name": "American Classic",
                  "prize": "$12.99",
                  "image": "https://images.pexels.com/photos/4553378/pexels-photo-4553378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                  "detal": "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
                  "category": "Lunch"
          
              },
              {
                  "name": "Godzilla Milkshake",
                  "prize": "$6.99",
                  "image": "https://images.pexels.com/photos/2638026/pexels-photo-2638026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                  "detal": "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
                  "category": "Shakes"
          
              },
              {
                  "name": "Oreo Dream",
                  "prize": "$18.99",
                  "image": "https://images.pexels.com/photos/4323459/pexels-photo-4323459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                  "detal": "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
                  "category": "Shakes"
          
              },
              {
                  "name": "Quarantine Buddy",
                  "prize": "$16.99",
                  "image": "https://images.pexels.com/photos/4057685/pexels-photo-4057685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                  "detal": "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
                  "category": "Shakes"
          
              },
              {
                  "name": "Steak Dinner",
                  "prize": "$39.99",
                  "image": "https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                  "detal": "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
                  "category": "Dinner"
          
              }
          
          ]
            

    )
    // const nn = await myd.save()
    res.send(myd)
    } catch (error) {
        console.log(error)
    }
}

const showRequest= async(req,res)=>{

  const mydat = await resturntData.find()
    res.send(mydat)

}


router.post('/data/add',AddRequest)
router.get('/data/show',showRequest)





module.exports = router;