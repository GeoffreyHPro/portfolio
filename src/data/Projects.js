import { InformationProject } from '../interface/InformationProject'

const project1 = new InformationProject(
    "https://github.com/GeoffreyHPro/ecoFridge",
    `Application permettant de recenser tous les aliments de son frigo. 
    Lors d'un ajout d'un nouvel élément, la date de péremption est ajouté avec.
    Tous les aliments sont consultables à travers de l'application.
    L'application vise à limiter le gaspillage alimentaire.`,
    ""
);

const project2 = new InformationProject(
    "https://github.com/GeoffreyHPro/animeList",
    `Application mobile permettant de consulter tous les animés existants venant d'une API
    distante. Il est possible de faire des recherches en fonction de diffèrents paramètres.
    Il est possible de mettre des animés en favoris pour consulter leurs informations hors ligne.`,
    ""
);
const project3 = new InformationProject(
    "https://github.com/GeoffreyHPro/Binpack",
    `Application permettant de résoudre le problème du BinPack. Pour une liste d'objets avec un poids définit,
    un nombre de sacs avec la même capacité. Il faut avoir récupérer une liste d'emplacement des objets dans le moins 
    de sacs possible.`,
    "https://binpack.onrender.com/swagger-ui/index.html#/"
);
const project4 = new InformationProject(
    "https://github.com/GeoffreyHPro/paymentExerciceWebFlux",
    `Application composé d'une API REST. Cette API permet d'ajouter, de lire et de modifier des paiements
    bancaires. Si le paiement est fait ou est en cours de paiement, il n'est pas modifiable. Cette API a
    été faite en Java Reactive Spring WebFlux.`,
    ""
);

export const listProjects = [project1, project2, project3, project4]