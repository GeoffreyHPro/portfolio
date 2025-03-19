import { InformationProject } from '../interface/InformationProject'

const project1 = new InformationProject(
    ["https://github.com/GeoffreyHPro/ecoFridge_front", "https://github.com/GeoffreyHPro/ecoFridge_back"],
    `Application qui vise à limiter le gaspillage alimentaire. Chaque utilisateur peut alimenter la base 
    de données des produits. Il peut ainsi ajouter des lots de produits qu'il a acheté dans son frigo.
    Il renseigne la quantité, la date de péremption associée au code bare du produit.`,
    "https://ecofridge-front.onrender.com"
);

const project2 = new InformationProject(
    ["https://github.com/GeoffreyHPro/animeList"],
    `Application mobile permettant de consulter tous les animés existants venant d'une API
    distante. Il est possible de faire des recherches en fonction de diffèrents paramètres.
    Il est possible de mettre des animés en favoris pour consulter leurs informations hors ligne.`,
    ""
);
const project3 = new InformationProject(
    ["https://github.com/GeoffreyHPro/Binpack"],
    `Application permettant de résoudre le problème du BinPack. Pour une configuration donnée, une solution est trouvée ou non.
    Une configuration est composée d'une liste de poids qui définissent les objets, un nombre de sacs et le poids de chaque sac.
    La solution sera toujours une solution avec le moins de sacs utilisés possible.`,
    "https://binpack.onrender.com/swagger-ui/index.html#/"
);
const project4 = new InformationProject(
    ["https://github.com/GeoffreyHPro/paymentExerciceWebFlux"],
    `Application composé d'une API REST. Cette API permet d'ajouter, de lire et de modifier des paiements
    bancaires. Si le paiement est fait ou est en cours de paiement, il n'est pas modifiable. Cette API a
    été faite en Java Reactive Spring WebFlux.`,
    "https://paymentexercicewebflux.onrender.com/swagger-ui.html"
);
const project5 = new InformationProject(
    ["https://github.com/GeoffreyHPro/SnapMessaging_angular", "https://github.com/GeoffreyHPro/SnapMessaging_back"],
    `Application de messagerie pour interagir avec différents utilisateurs instantanément. Un chat à l'accueil permet
    de communiquer avec les autres utilisateurs sans authentification. Une fois connecté, l'utilisateur peut communiquer
    avec les autres utilisateurs ajoutés.`,
    ""
);

export const listProjects = [project1, project2, project3, project4, project5]