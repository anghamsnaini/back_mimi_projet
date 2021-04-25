module.exports = app => {
    const produits = require("../controllers/produit.controller.js");
  
    var router = require("express").Router();
  
    // Créer un nouveau produit
    router.post("/", produits.create);
  
    // Récupérer tous les produits
    router.get("/", produits.findAll);
  
    // Récupérer un seul produit avec id
    router.get("/:id", produits.findOne);
  
    // Modifier un produit avec id
    router.put("/:id", produits.update);
  
    // Supprimer un produits avec id
    router.delete("/:id", produits.delete);
  
    // Supprimer tous les produits
    router.delete("/", produits.deleteAll);
  
    app.use('/api/produits', router);
  };