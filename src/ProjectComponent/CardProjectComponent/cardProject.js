import 'bootstrap/dist/css/bootstrap.min.css';
import './cardProject.css'
import { Tag } from '../TagComponent/tag'
import { Github } from "lucide-react";
import { Globe } from 'lucide-react';



export function CardProject({ title, img, information, listTag }) {
    function getUrlTest() {
        if (information.urlTest !== "") {
            return <div class="col">
                <a href={information.urlTest} style={{
                    color: "black",
                }} className="flex items-center gap-2 text-gray-700 hover:text-black mt-auto">
                    <Globe size={24} />
                </a>
            </div>
        }
        return <div></div>
    }
    let urlTest = getUrlTest();

    return <div>
        <div>
            <Tag tags={listTag}></Tag>
        </div>
        <div class="card-container">
            <div class="card">
                <div class="card-front">
                    <div id='image_card'
                        style={{
                            backgroundImage: `url(${process.env.PUBLIC_URL}/${img})`,
                        }}></div>
                    <div id='title_card'>{title}</div>
                </div>
                <div class="card-back flex flex-col h-full"
                    style={{
                    }}>
                    <div>{information.description}</div>
                    <br></br>

                    <div class="bottom-content">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col">
                                    <a href={information.urlProject} style={{
                                        color: "black",
                                    }} className="flex items-center gap-2 text-gray-700 hover:text-black mt-auto">
                                        <Github size={24} />
                                    </a>
                                </div>
                                {urlTest}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}