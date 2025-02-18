import 'bootstrap/dist/css/bootstrap.min.css';
import './Project.css'
import { CardProject } from './CardProjectComponent/cardProject'
import { listProjects } from '../data/Projects'

export function Project() {
    return <div id="ProjectContent">
        <br></br>
        <h1>Projects</h1>
        <br></br>
        <br></br>
        <div className='container'>
            <div className='row'>
                <div className="col-md-6 col-12">
                    <CardProject title={"ecoFridge"} img={"ecoFridge.webp"} information={listProjects[0]} listTag={['Angular', 'Java Spring Boot', "API REST", "Test"]}></CardProject>
                    <br></br>
                    <br></br>
                    <CardProject title={"AnimeList"} img={"animes.webp"} information={listProjects[1]} listTag={['Flutter', 'BLoC']}></CardProject>
                </div>
                <div className="col-md-6 col-12 mx-auto">
                    <CardProject title={"BinPack"} img={"binpack.webp"} information={listProjects[2]} listTag={['Java Spring Boot', "API REST", "Test"]}></CardProject>
                    <br></br>
                    <br></br>
                    <CardProject title={"Paiement"} img={"paiement.jpg"} information={listProjects[3]} listTag={['Java Spring Boot', "API REST", "WebFlux", "Test"]}></CardProject>
                </div>
            </div>
        </div>
    </div>
}