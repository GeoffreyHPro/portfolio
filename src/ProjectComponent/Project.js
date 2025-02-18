import 'bootstrap/dist/css/bootstrap.min.css';
import './Project.css'
import { CardProject } from './../CardProjectComponent/cardProject'
import { InformationProject } from './../interface/InformationProject'

export function Project() {
    const project1 = new InformationProject(
        "https://github.com/GeoffreyHPro/ecoFridge",
        `Application permettant de recenser tous les aliments de son frigo. 
        Lors d'un ajout d'un nouvel élément, la date de péremption est ajouté avec.
        Tous les aliments sont consultables à travers de l'application.
        L'application vise à limiter le gaspillage alimentaire`,
        "Angular",
        "Java Spring Boot");
    const project2 = new InformationProject("zfezf", "fezf", "fezfz", "zefz");
    const project3 = new InformationProject("zfezf", "fezf", "fezfz", "zefz");
    const project4 = new InformationProject("zfezf", "fezf", "fezfz", "zefz");
    const listProjects = [project1, project2, project3, project4]

    return <div id="ProjectContent">
        <br></br>
        <h1>Projects</h1>
        <br></br>
        <br></br>
        <div className='container' style={{
            width: '90%'
        }}>
            <div className='row' style={{
                width: "90%",
                margin: "auto"

            }}>
                <div className="col-6">
                    <CardProject title={"ecoFridge"} img={"ecoFridge.webp"} information={listProjects[0]}></CardProject>
                    <br></br>
                    <br></br>
                    <CardProject title={"AnimeList"} img={"animes.webp"} information={listProjects[1]}></CardProject>
                </div>
                <div className="col-6 mx-auto">
                    <CardProject title={"BinPack"} img={"binpack.webp"} information={listProjects[2]}></CardProject>
                    <br></br>
                    <br></br>
                    <CardProject title={"Paiement"} img={"paiement.jpg"} information={listProjects[3]}></CardProject>
                </div>
            </div>
        </div>
    </div>
}