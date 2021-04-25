const db = require("../models");
const Produit = db.produits;
const Op = db.Sequelize.Op;

// Créer et enregister un nouveau produit
exports.create = (req, res) => {
 // Valider la requette
 if (!req.body.nom) {
    res.status(400).send({
      message: "Le contenu ne peut pas être vide!"
    });
    return;
}

// Créer un produit
const tutorial = {
  nom: req.body.nom,
  prix_unitaire: req.body.prix_unitaire,
  quantite: req.body.quantite
};

// enregister le produit dans la base de données
Produit.create(produit)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Une erreur s'est produite lors de la création du produit."
    });
  });
};


// Récupère tous les produits de la base de données
exports.findAll = (req, res) => {
    const nom = req.query.nom;
    var condition = nom ? { nom: { [Op.like]: `%${nom}%` } } : null;
  
    Produit.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Une erreur s'est produite lors de la récupération des produits"
        });
      });
  };


// Trouver un seul produit avec id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Produit.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Erreur lors de la récupération du produit avec l'ID=" + id
        });
      });
};

// Modifier un produit par l'id dans la requête
exports.update = (req, res) => {
    const id = req.params.id;

    Produit.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Le produit a été modifié avec succès."
          });
        } else {
          res.send({
            message: `Impossible de modifier le produit avec id =${id}.Peut-être que le produits n'a pas été trouvé ou que req.body est vide`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Erreur lors de la modification du produit avec l'ID=" + id
        });
      });
};


// Supprimer un produit avec l'ID spécifié dans la requête
exports.delete = (req, res) => {
    const id = req.params.id;

    Produit.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Le produit a été supprimé avec succès!"
          });
        } else {
          res.send({
            message: `Impossible de supprimer le produit avec l'id =${id}. Peut-être que le produit n'a pas été trouvé!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Impossible de supprimer le produit avec l'id=" + id
        });
      });
};

// Supprimer tous les produits de la base de données.
exports.deleteAll = (req, res) => {
    Produit.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Les produits ont été supprimés avec succès!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Une erreur s'est produite lors de la suppression de tous les produits."
          });
        });
};
