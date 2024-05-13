const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
   try {
      const token = req.headers.authorization.split(" ")[1]
      const decodedToken = jwt.verify(token, "K5%g87mlzT9$HU&Fn1!87DFr84:vG579Ef23")
      const userId = decodedToken.userId
      req.auth = {
         userId: userId,
      }
      next()
   } catch (error) {
      res.status(401).json({ error })
   }
}
