import './presentation.css'
import { Linkedin, Phone, Github, Mail } from 'lucide-react';

export function Presentation() {
    return <div>
        <div id="content">
            <h1>HERMAN Geoffrey</h1>
            <br></br>
            <br></br>
            <div style={{
                textAlign: 'justify',
                width: "80%",
                margin: "auto",
            }}>
                <h2>PROFIL :</h2>
                <br></br>
                Développeur en informatique récemment diplômé d'un Master Informatique E-Services (Développement d'applications) de
                l'Université de Lille. Je suis passionné par le développement d'applications web et mobiles. Fort d'une expérience en méthode
                Agile, je suis à l'aise dans des environnements collaboratifs et en communication avec les équipes produit. Toujours curieux et
                en quête d'innovation, je suis motivé par la création de solutions optimisées et évolutives.
            </div>
            <br></br>
            <br></br>
            <div style={{
                width: "80%",
                margin: "auto",
                textAlign: "left"
            }}>
                <h2>CONTACT :</h2>
            </div>

            <div id='contact' className="row" style={{
                width: "80%",
                margin: "auto"
            }}>
                <div className='col-md-6 col-12' style={{
                    textAlign: "left",
                }}>
                    <br></br>
                    <div style={{
                        whiteSpace: "normal",
                        overflowWrap: "break-word"
                    }}>
                        <a href="https://www.linkedin.com/in/hermangeoffrey"
                            style={{
                                color: "rgb(29, 11, 129)"
                            }}>
                            <Linkedin size={24} />
                        </a>
                        https://www.linkedin.com/in/hermangeoffrey
                    </div>

                    <br></br>
                    <div>
                        <a href="https://github.com/GeoffreyHPro"
                            style={{
                                color: "black",
                                whiteSpace: "normal",
                                overflowWrap: "break-word"
                            }}>
                            <Github size={24} />
                        </a>
                        https://github.com/GeoffreyHPro
                    </div>
                </div>
                <div className='col-md-6 col-12 mx-auto' style={{
                    textAlign: "justify"
                }}>
                    <br></br>
                    <div>
                        <Phone style={{
                            marginRight: "15px"
                        }} size={24} />
                        06 14 27 73 87
                    </div>
                    <br></br>
                    <div>
                        <Mail style={{
                            marginRight: "15px"
                        }} size={24} />
                        geoffreyherman19021998@gmail.com
                    </div>
                </div>
            </div>
        </div>
        <br></br>
        <div id='space'></div>
    </div>
}