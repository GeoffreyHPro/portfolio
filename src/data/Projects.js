import { InformationProject } from '../interface/InformationProject'

const project1 = new InformationProject(
    "https://github.com/GeoffreyHPro/ecoFridge",
    `Application permettant de recenser tous les aliments de son frigo. 
    Lors d'un ajout d'un nouvel élément, la date de péremption est ajouté avec.
    Tous les aliments sont consultables à travers de l'application.
    L'application vise à limiter le gaspillage alimentaire`,
    "Angular",
    "Java Spring Boot"
);

const project2 = new InformationProject(
    "zfezf", "fezf", "fezfz", "zefz");
const project3 = new InformationProject(
    "https://github.com/GeoffreyHPro/Binpack",
    `Application permettant de résoudre le problème du BinPack. Les résolutions permettent
    de résoudre le BinPack avec des sacs de même capacité seulement`,
    "fezfz",
    "zefz"
);
const project4 = new InformationProject(
    "https://github.com/GeoffreyHPro/paymentExerciceWebFlux",
    `Application composé d'une API REST. Cette API permet d'ajouter, de lire et de modifier des paiements
    bancaires. Si le paiement est fait ou est en cours de paiement, il n'est pas modifiable. Cette API a
    été faite en Spring WebFlux`,
    "fezfz",
    "zefz"
);

export const listProjects = [project1, project2, project3, project4]