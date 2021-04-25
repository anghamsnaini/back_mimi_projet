module.exports = (sequelize, Sequelize) => {
    const Produit = sequelize.define("produit", {
      nom: {
        type: Sequelize.STRING
      },
      prix_unitaire: {
        type: Sequelize.FLOAT
      },
      quantite: {
        type: Sequelize.INTEGER
      }
    });
  
    return Produit;
  };