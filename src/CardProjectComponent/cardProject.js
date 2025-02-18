import 'bootstrap/dist/css/bootstrap.min.css';
import './cardProject.css'
import { Tag } from './../TagComponent/tag'

export function CardProject({ title, img, information }) {
    const items = ['React', 'Angular']

    return <div>
        <div>
            <Tag tags={items}></Tag>
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
                    <a href={information.urlProject}>{information.urlProject}</a>
                </div>
            </div>
        </div>
    </div>
}