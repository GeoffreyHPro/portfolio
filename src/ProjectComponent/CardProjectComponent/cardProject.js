import 'bootstrap/dist/css/bootstrap.min.css';
import './cardProject.css'
import { Tag } from '../../TagComponent/tag'

export function CardProject({ title, img, information, listTag }) {
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
                <div class="card-back"
                    style={{
                    }}>
                    <div>{information.description}</div>
                    <br></br>
                    Github : <a href={information.urlProject}>{information.urlProject}</a>
                </div>
            </div>
        </div>
    </div>
}