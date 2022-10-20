const Model = require('./model');
module.exports =
    class Nouvelle extends Model {
        constructor(id,titre, texte, imageUrl ,categorie,date) {
            super();
            this.Id = id !== undefined? id : "";
            this.Titre = titre !== undefined ? titre : "";
            this.Texte = texte !== undefined ? texte : "";
            this.ImageUrl = imageUrl !== undefined ? imageUrl : "";
            this.Categorie = categorie !== undefined ? categorie : "";

            this.setKey("Id");
            this.addValidator('Id', 'int');
            this.addValidator('Titre', 'string');
            this.addValidator('Texte', 'string');
            this.addValidator('ImageUrl', 'url');
            this.addValidator('Categoryie', 'string');
        }
    }