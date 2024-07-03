import app from "./app";
import connectDB from "./config/DB"

const port = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(port, () => { 
          console.log(`app is listening on port ${port}`)
    });
    
  }).catch(err => {
  console.log("Failed to connect to database.", err)
})
