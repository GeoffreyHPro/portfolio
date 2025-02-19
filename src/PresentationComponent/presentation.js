import './presentation.css'
import { Linkedin } from 'lucide-react';
import { Github } from 'lucide-react';

export function Presentation() {
    return <div id="content">
        <h1>HERMAN Geoffrey</h1>
        <br></br>
        <div class="row">
            <div className='col-md-6 col-12' style={{
                textAlign: "center",
            }}>
                <h2>CONTACTS :</h2>
                <a href="https://www.linkedin.com/in/hermangeoffrey"
                    style={{

                        color: "blue"
                    }}>
                    <Linkedin size={24} />
                </a>
                <a href="https://github.com/GeoffreyHPro" style={{
                    color: "black",
                }} className="flex items-center gap-2 text-gray-700 hover:text-black mt-auto">
                    <Github size={24} />
                </a>
                <br></br>
                <br></br>
                <p>06 14 27 73 87</p>
            </div>
            <div className='col-md-6 col-12 mx-auto' style={{
                textAlign: "justify",
            }}>
                <h2>PROFIL :</h2>
                <p>Développeur en informatique récemment diplômé d’un Master Informatique E-Services (Développement d’applications) de
                    l’Université de Lille. Je suis passionné par le développement d’applications web et mobiles. Fort d’une expérience en méthode
                    Agile, je suis à l’aise dans des environnements collaboratifs et en communication avec les équipes produit. Toujours curieux et
                    en quête d’innovation, je suis motivé par la création de solutions optimisées et évolutives.</p>
            </div>
        </div>
    </div>
}