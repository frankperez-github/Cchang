import SiteContext from "@/Context/siteContext"
import { useContext, useEffect, useState } from "react"
function admin() {
    const {projects, fetchProjects} = useContext(SiteContext)
    const [action, setAction] = useState("")
    const[project, setProject] = useState({"id": 0,
    "principalImage":"",
    "secondaryImages":[],
    "title":{
        "keyWords": "",
        "text": ""
    },
    "category":"",
    "description":"",
    "day": 0,
    "month": 0,
    "year": 0,
    "stars": 0,
    "reviews": []})

    useEffect(()=>
    {   
        if(projects.length === 0)
        {
            fetchProjects()
        }
        console.log(projects)
        const element = document.getElementById(`${action}`)
        document.getElementById("create").style.display="none"
        document.getElementById("update").style.display="none"
        document.getElementById("delete").style.display="none"

        if (element !== null)
        {
            element.style.display = "block"
        }
    },[action])


    function dateIsValid(date) {
        return date instanceof Date && !isNaN(date);
    }

    const Post = async()=>
    {
        const response = await fetch(`http://localhost:5000/projects/`,
        {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project)
        })
        alert("Proyecto creado correctamente")
        window.open(window.location.href, "_self")
    }
    const Delete = async(id)=>
    {
        const response = await fetch(`http://localhost:5000/projects/${id}`,
        {
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json',
            },
        })
        alert("Proyecto Eliminado correctamente")
        fetchProjects()
    }
    
    const create=()=>
    {
        const newProject = {
            "id": projects.length,
            "principalImage": imagePath(document.getElementById("principalImg").value),
            "secondaryImages": [imagePath(document.getElementById("secImg1").value), imagePath(document.getElementById("secImg2").value), imagePath(document.getElementById("secImg3").value), imagePath(document.getElementById("secImg4").value)],
            "title": {
                "keyWords":document.getElementById("key-word").value, 
                "text":document.getElementById("title").value
            },
            "category": document.getElementById("category").value,
            "description": document.getElementById("description").value,
            "day": document.getElementById("day").value,
            "month": document.getElementById("month").value,
            "year": document.getElementById("year").value,
            "stars": 0,
            "reviews": []
        }
        
        if(!dateIsValid(new Date(`${newProject.year}-${newProject.month}-${newProject.day}`)))
        {
            alert("Fecha no valida")
        }
        else if(newProject.description === "" || newProject.title.keyWords ==="" || newProject.title.text==="")
        {
            alert("Debe rellenar todos los campos correctamente")
        }
        else
        {
            setProject(newProject)
            Post()
        }
    }
    const remove=(project)=>
    {
        if(confirm("Desea borrar el proyecto?"))
        {
            Delete(project.id)
        }
    }

    const imagePath=(image)=>
    {
        if(image !== null)
        {
            return ""
        }
    }

    
    return(
        <div className="administration mobContainer">
            <h1>Cchang Administration</h1>

            <button className="siteButton" onClick={()=>setAction("create")}>Crear proyecto</button>
            <button className="siteButton" onClick={()=>setAction("update")}>Actualizar proyecto</button>
            <button className="siteButton" onClick={()=>(setAction("delete"), fetchProjects())}>Borrar proyecto</button>
        
            <div id="create">
                <form action="">
                    <h3>id: {projects.length}</h3>
                    <br/>
                    
                    <h3>Título:</h3>
                    <input type="text" id="key-word" placeholder="palabra clave"/>
                    <input type="text" id="title" placeholder="resto del título"/>

                    <h3>Imagen principal:</h3>
                    <input id="principalImg" type="file" accept="image/*"/>

                    <h3>Imagenes secundarias (máximo 4):</h3>
                    <input type="file" id="secImg1" accept="image/*"/>
                    <input type="file" id="secImg2" accept="image/*"/>
                    <input type="file" id="secImg3" accept="image/*"/>
                    <input type="file" id="secImg4" accept="image/*"/>
                    

                    <h3>Categoría:</h3>
                    <select name="category" id="category">
                        <option value="clima">clima</option>
                        <option value="reparaciones">reparaciones</option>
                        <option value="eléctricos">eléctricos</option>
                    </select>

                    <h3>Descripción:</h3>
                    <textarea name="description" id="description" cols="30" rows="10"></textarea>

                    <h3>Día:</h3>
                    <input id="day" type="number" />

                    <h3>Mes:</h3>
                    <input id="month" type="number" />

                    <h3>Año:</h3>
                    <input id="year" type="number" />
                </form> 
                <button className="siteButton largeButton" onClick={create}>Crear</button>
            </div>
            <div id="update">
                "actualizar"
            </div>
            <div id="delete">
                {
                projects.map((project, index)=>
                (
                    project.title !== undefined &&
                        <div key={index} className="projectRow">
                            <h3>{project.id}.  {project.title.keyWords} {project.title.text}</h3>
                            <button onClick={()=>remove(project)} className="siteButton shortButton">Borrar</button>
                        </div>
                ))
                }
            </div>
        </div>
    )
}

export default admin