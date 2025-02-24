import './tag.css'

export function Tag({ tags }) {
    const getTagColor = (tag) => {
        switch (tag) {
            case 'React':
                return [
                    'blue',
                    "0 0 10px rgb(43, 92, 92), 0 0 20px rgb(0, 255, 255), 0 0 30px rgb(0, 255, 255)",
                    "2px solid rgb(0, 255, 191)"
                ];
            case 'Angular':
                return [
                    'rgb(136, 19, 19)',
                    "0 0 10px rgb(219, 18, 18), 0 0 20px rgb(201, 26, 26), 0 0 30px rgb(80, 19, 19)",
                    "2px solid rgb(255, 0, 0)"
                ];
            case 'Java Spring Boot':
                return [
                    'rgb(18, 85, 33)',
                    "0 0 10px rgb(141, 114, 39), 0 0 20px rgb(7, 252, 47), 0 0 30px rgb(11, 82, 15)",
                    "2px solid rgb(14, 185, 14)"
                ];
            case 'Flutter':
                return [
                    'rgb(9, 26, 180)',
                    "0 0 10px rgb(9, 245, 225), 0 0 20px rgb(1, 248, 248), 0 0 30px rgb(3, 30, 121)",
                    "2px solid rgb(18, 6, 121)"
                ];
            case 'API REST':
                return [
                    'rgb(221, 114, 13)',
                    "0 0 10px rgb(243, 139, 3), 0 0 20px rgb(243, 103, 10), 0 0 30px rgb(97, 59, 10)",
                    "2px solid rgb(255, 156, 7)"
                ];
            case 'WebFlux':
                return [
                    'rgb(95, 11, 145)',
                    "0 0 10px rgb(157, 15, 223), 0 0 20px rgb(102, 13, 114), 0 0 30px rgb(229, 15, 236)",
                    "2px solid rgb(188, 9, 243)"
                ];
            case 'BLoC':
                return [
                    'rgb(41, 124, 124)',
                    "0 0 10px rgb(17, 216, 206), 0 0 20px rgb(18, 197, 182), 0 0 30px rgb(35, 161, 41)",
                    "2px solid rgba(5, 108, 134, 0.99)"
                ];
            case 'Test':
                return [
                    'rgb(151, 124, 5)',
                    "0 0 10px rgb(241, 245, 12), 0 0 20px rgb(238, 234, 18), 0 0 30px rgb(236, 240, 10)",
                    "2px solid rgba(255, 230, 5, 0.99)"
                ];
            case 'JWT':
                return [
                    'rgb(119, 119, 119)',
                    "0 0 10px rgb(223, 22, 213), 0 0 20px rgb(231, 29, 204), 0 0 30px rgb(228, 24, 211)",
                    "2px solid rgba(29, 223, 223, 0.99)"
                ];
            default:
        }
    };
    return (
        <div className='d-flex flex-wrap gap-2 justify-content-center'>
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