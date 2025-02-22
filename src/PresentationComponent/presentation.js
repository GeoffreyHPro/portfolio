import './presentation.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Linkedin, Phone, Github, Mail } from 'lucide-react';

export function Presentation() {
    return <div>
        <br></br>
        <br></br>
        <div id="content">
            Bonjour, je suis
            <h1><strong>Geoffrey Herman</strong></h1>
            Développeur Informatique Back-End | Full-Stack
            <br></br>
            <br></br>
            <br></br>
            <a href={`${process.env.PUBLIC_URL}/CV_HERMAN-Geoffrey.pdf`} download class='btn' style={{
                color: "white",
                backgroundColor: "rgba(12, 4, 63, 0.2)",
                border: "solid 2px white",
                margin: "0px"
            }}>Télécharger mon CV</a>

            <div style={{
                height: "200px"
            }}></div>

            <div className='section' style={{
                textAlign: 'justify',
                width: "80%",
                margin: "auto",
            }}>
                <div className="title" style={{
                    marginLeft: "auto",
                    textAlign: "center",
                }}>
                    <h2>PROFIL</h2>
                </div>
                <br></br>
                <div style={{
                    padding: "15px"
                }}>
                    Je suis Geoffrey, développeur en informatique récemment diplômé d'un Master Informatique E-Services (Développement d'applications) de
                    l'Université de Lille.
                    <br></br>
                    Je suis passionné par l'informatique depuis tout petit, j'ai toujours voulu comprendre comment fonctionnait les sites internets, les logiciels et les jeux vidéos.
                    Petit, je pensais qu'une personne jouait contre moi à chaque match contre l'ordinateur... Ahah !
                    <br></br>
                    <br></br>
                    Je suis quelqu'un qui aime apprendre et qui apprends tous les jours. Je suis dynamique, autonome, organisé, force de propositions et rigoureux dans ce que je développe.
                    Je suis un bon communicant et sais me faire comprendre en anglais. Pour moi l'esprit d'équipe est la qualité essentielle au bon développement d'un projet.
                    J'ai de l'expérience en conception et développement de nouvelles fonctionnalités, dans l'automatisation de tests, rédaction de documentation technique...
                    Mais j'ai encore beaucoup à apprendre au sein de collaborateurs experts dans leur domaine.
                    <br></br>
                    <br></br>
                    Pour moi les technologies sont un moyen et non une finalité pour mettre en place des solutions informatiques. C'est pourquoi je ne suis pas réticent à
                    l'idée d'apprendre de nouvelles technologies, bien au contraire.
                </div>

            </div>
            <br></br>
            <br></br>


            <div id='contact' className="row section" style={{
                width: "80%",
                margin: "auto",
            }}>
                <div className="title" style={{
                    margin: "auto",
                    textAlign: "center",
                }}>
                    <h2>CONTACT</h2>
                </div>
                <div className='col-md-6 col-12' style={{
                    textAlign: "left",
                    padding: "15px",
                }}>
                    <div style={{
                        whiteSpace: "normal",
                        overflowWrap: "break-word",
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
                    <div >
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
                <div className='col-md-6 col-12' style={{
                    textAlign: "left",
                    padding: "15px",
                }}>
                    <div style={{
                        whiteSpace: "normal",
                        overflowWrap: "break-word",
                    }}>
                        <Phone style={{
                            marginRight: "15px"
                        }} size={24} />
                        06 14 27 73 87
                    </div>
                    <br></br>
                    <div style={{
                        whiteSpace: "normal",
                        overflowWrap: "break-word",
                    }}>
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