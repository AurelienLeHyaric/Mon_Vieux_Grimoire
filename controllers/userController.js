const User = require("../models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

// Créer un utilisateur
exports.signupUser = (req, res, next) => {
   //Chiffrement du mot de passe avec bcrypt
   bcrypt
      .hash(req.body.password, 10)
      .then((hash) => {
         const user = new User({
            email: req.body.email,
            password: hash,
         })
         user
            .save()
            .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
            .catch((error) => res.status(400).json({ error }))
      })
      .catch((error) => res.status(500).json({ error }))
}

// Connecter un utilisateur
exports.loginUser = (req, res, next) => {
   User.findOne({ email: req.body.email })
      .then((user) => {
         if (!user) {
            return res.status(401).json({ message: "Paire login/mot de passe incorrecte" })
         }
         //Comparaison du mot de passe fourni avec le mot de passe haché stocké en base
         bcrypt
            .compare(req.body.password, user.password)
            .then((valid) => {
               if (!valid) {
                  return res.status(401).json({ message: "Paire login/mot de passe incorrecte" })
               }
               //Génération d'un token JWT
               res.status(200).json({
                  userId: user._id,
                  token: jwt.sign({ userId: user._id }, "K5%g87mlzT9$HU&Fn1!87DFr84:vG579Ef23", { expiresIn: "24h" }),
               })
            })
            .catch((error) => res.status(500).json({ error }))
      })
      .catch((error) => res.status(500).json({ error }))
}
