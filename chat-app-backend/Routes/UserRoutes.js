const router = require("express").Router();
const User = require("../Models/User");

// creating user



router.post("/", async (req, res) => {

  try {
    const { name, email, password, pitcure } = req.body;
    console.log(req.body);
    const user = await User.create({ name, email, password, pitcure });
    res.status(201).json(user);
  } catch (e) {
    let msg;
    if (e.code == 11000) {
      msg = "User already exsists";
    } else {
      msg = e.message;
    }

    console.log(e);
    res.status(400).json(msg);
  }
});

// login user

router.post("/login" , async ( req , res )=>{


    try {
        const { email , password } = req.body
        const user = await User.findByCredentials(email,password)
        console.log("back in game")
        user.status = "online"

        User.findByIdAndUpdate(user._id , {status:"online"} , (e)=>{

           console.log(e)
        })
       
        res.status(200).json(user)
        
    } catch (e) {
      console.log("error", e.message)
        res.status(400).json(e.message)
    }
    


})

module.exports = router