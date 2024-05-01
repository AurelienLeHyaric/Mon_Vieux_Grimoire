const express = require("express")
const mongoose = require("mongoose")

const app = express()
const bookRoutes = require("./routes/bookRoutes")

mongoose
   .connect("mongodb+srv://aurelienlh83:8vhebFJPKcMtzPQZ@atlascluster.hdy3j8v.mongodb.net/Mon_vieux_grimoire?retryWrites=true&w=majority&appName=AtlasCluster")
   .then(() => console.log("Connexion à MongoDB réussie !"))
   .catch(() => console.log("Connexion à MongoDB échouée !"))

app.use(express.json())

app.use((req, res, next) => {
   res.setHeader("Access-Control-Allow-Origin", "*")
   res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization")
   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS")
   next()
})

app.use("/api/books", bookRoutes)

module.exports = app
