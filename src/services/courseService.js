import axios from "axios";
import { environment } from "../config/environment";


const getCourses = async () => {
    //return await axios.get(`${environment.backendBaseUrl}courses`);
    return {
        data: [
            {
                "name": "Curso de ingles",
                "description": "Curso de ingles para hispanohablantes",
                "idCourse": "",
                "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
            },
            {
                "name": "Curso de español",
                "description": "Curso de ESPAÑOL",
                "idCourse": "",
                "imageUrl": "https://www.freecodecamp.org/news/content/images/2023/04/JavaScript-Blog-Cover.png"
            },
            {
                "name": "Curso de JavaScript",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                "idCourse": "",
                "imageUrl": "https://www.20i.com/blog/wp-content/uploads/2020/10/I-love-JavaScript.png"
            },
            {
                "name": "Curso de React",
                "description": "",
                "idCourse": "",
                "imageUrl": "https://www.cloudstudio.mx/blog/wp-content/uploads/2019/01/js.png"
            },
            {
                "name": "Curso de React",
                "description": "",
                "idCourse": "asdasdasdads sdasd",
                "imageUrl": "https://www.cloudstudio.mx/blog/wp-content/uploads/2019/01/js.png"
            },
            {
                "name": "Curso de React",
                "description": "",
                "idCourse": "asdasdasdads sdasd",
                "imageUrl": "https://www.cloudstudio.mx/blog/wp-content/uploads/2019/01/js.png"
            },
            {
                "name": "Curso de React",
                "description": "",
                "idCourse": "asdasdasdads sdasd",
                "imageUrl": "https://www.cloudstudio.mx/blog/wp-content/uploads/2019/01/js.png"
            },
            {
                "name": "Curso de React",
                "description": "",
                "idCourse": "asdasdasdads sdasd",
                "imageUrl": "https://www.cloudstudio.mx/blog/wp-content/uploads/2019/01/js.png"
            },
            {
                "name": "Curso de React",
                "description": "",
                "idCourse": "asdasdasdads sdasd",
                "imageUrl": "https://www.cloudstudio.mx/blog/wp-content/uploads/2019/01/js.png"
            }
        ]
    }
};


const createCourse = async ({ body }) => {
    const header = {
        "Content-Type": "application/json"
    }

    return await axios.post(`${environment.backendBaseUrl}courses`, body, {
        headers: header
    });
};

export { getCourses, createCourse };
