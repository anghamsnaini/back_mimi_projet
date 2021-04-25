
const express = require("express");
const app = express();

app.get('/', (req, res) =>{
  res.json({
    message: "Welcome to Angham application."
  })
})

const db = require("./app/models");

db.sequelize.sync();

require("./app/routes/produit.routes")(app);

app.listen(3000, () => {
  console.log(`Express API is running at port 3000`);
});

//db.sequelize.sync({ force: true }).then(() => {
  //console.log("Drop and re-sync db.");
//});