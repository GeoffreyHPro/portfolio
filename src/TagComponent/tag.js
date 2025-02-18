import './tag.css'

export function Tag({ tags }) {

    const getTagColor = (tag) => {
        switch (tag) {
            case 'React':
                return ['blue',"0 0 10px rgb(43, 92, 92), 0 0 20px rgb(0, 255, 255), 0 0 30px rgb(0, 255, 255);", "2px solid rgb(0, 255, 191)"];
            case 'Angular':
                return ['rgb(136, 19, 19)',"0 0 10px rgb(33, 20, 207), 0 0 20px rgb(187, 255, 0), 0 0 30px rgb(228, 129, 129);", "2px solid rgb(255, 0, 0)"];
        }
    };
    return (
        <div>
            {tags.map((tag, index) => (
                <span key={index}
                    className="tag"
                    style={{ 
                        backgroundColor: getTagColor(tag)[0],
                        boxShadow: getTagColor(tag)[1],
                        border: getTagColor(tag)[2]
                        }}>
                    {tag}
                </span>
            ))}
        </div>
    )
}