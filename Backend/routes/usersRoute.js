const router = require('express').Router()
const userModel = require('../models/userModel')
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')




// Register User

router.post('/register', async (req, res) => {
    try {
        const data = req.body;
        const { username, userPassword, email } = data
        const isUserPresent = await userModel.findOne({ username });
        const isEmailUnique = await userModel.findOne({ email });
        if (isUserPresent) {
            throw new Error('user already registered')
        }
        if (isEmailUnique){
            throw new Error('Email already taken')
        }
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const password = await bcrypt.hash(userPassword, salt)
        const newData = { username, password, email }
        const newUser = new userModel(newData);
        newUser.save().then(() => {
            res.status(200).json({ message: 'Registration successful, Login to Continue' })
        })
    } catch (error) {
        console.log(error.message,'register error')
        res.status(400).json({ message: error.message })
    }
})


router.post('/login', async (req, res) => {
    try {
        const data = req.body
        const { username, password } = data
        const isUserPresent = await userModel.findOne({ username })
        console.log(isUserPresent,'login')
        if (isUserPresent === null) {
            throw new Error('Invalid User')
        } else {
            const verifyPassword = await bcrypt.compare(password, isUserPresent.password)
            if (verifyPassword) {
                const payload = {
                    username: isUserPresent.username,
                    id: isUserPresent._id
                };
                  console.log(payload);
                const jwtToken = jwt.sign(payload, "MY_BOOK_STORE_APP");
                res.send({ jwt_token: jwtToken });
            } else {
                throw new Error('Invalid Password')
            }
        }

    } catch (error) {
        console.log(error,'login,error')
        res.status(404).json({ message: error.message })
    }
})


module.exports = router;








// const createUser = (username, hashedPassword) => {
//     // Assuming you have a User model
//     const User = require("./models/user"); // Adjust the path based on your project structure

//     // Create a new user
//     User.create({
//         username,
//         password: hashedPassword,
//         // Add additional user properties as needed
//     })
//         .then((user) => {
//             console.log("User created:", user);
//         })
//         .catch((error) => {
//             console.error("Error creating user:", error);
//         });
// };
