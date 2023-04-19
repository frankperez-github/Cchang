import SiteContext from "@/Context/siteContext"
import { useContext, useEffect, useState } from "react"
import {stringify, v4 as uuidv4} from 'uuid'


function Admin() {
    const {projects, fetchProjects} = useContext(SiteContext)
    const [action, setAction] = useState("")
    const[project, setProject] = useState({})

    useEffect(()=>
    {   
        if(projects.length === 0)
        {
            fetchProjects()
        }
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
        const response = await fetch(`${process.env.serverPath}/projects/`,
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
        const response = await fetch(`${process.env.serverPath}/projects/${id}`,
        {
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json',
            },
        })
        alert("Proyecto Eliminado correctamente")
        fetchProjects()
    }
    const Put = async(id)=>
    {
        Update()
        const response = await fetch(`${process.env.serverPath}/projects/${id}`,
        {
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project)
        })
        fetchProjects()
    }
    const Update = ()=>
    {
        const newProject = {
            "id": project.id,
            "principalImage": project.principalImage === imagePath(document.getElementById("Update_principalImg").value) ? project.principalImage : imagePath(document.getElementById("Update_principalImg").value),
            "secondaryImages": [
                project.secondaryImages[0] === imagePath(document.getElementById("Update_secImg1").value) ? project.secondaryImages[0] : imagePath(document.getElementById("Update_secImg1").value), 
                project.secondaryImages[1] === imagePath(document.getElementById("Update_secImg2").value) ? project.secondaryImages[1] : imagePath(document.getElementById("Update_secImg1").value), 
                project.secondaryImages[2] === imagePath(document.getElementById("Update_secImg3").value) ? project.secondaryImages[2] : imagePath(document.getElementById("Update_secImg1").value), 
                project.secondaryImages[3] === imagePath(document.getElementById("Update_secImg4").value) ? project.secondaryImages[3] : imagePath(document.getElementById("Update_secImg1").value), 
            ],
            "title": {
                "keyWords":document.getElementById("Update_key-word").value, 
                "text":document.getElementById("Update_title").value
            },
            "category": document.getElementById("Update_category").value,
            "description": document.getElementById("Update_description").value,
            "day": document.getElementById("Update_day").value,
            "month": document.getElementById("Update_month").value,
            "year": document.getElementById("Update_year").value,
            "stars": project.stars,
            "reviews": project.reviews
        }
        console.log(newProject.principalImage)
        setProject(newProject)
    }

    function imagePath(image)
    {
        if(image !== "")
        {
            const splitted = image.split("/")
            const id = splitted[splitted.length - 2]
            const path = "https://drive.google.com/uc?export=view&id="+id
            return path
        }
    }
    
    const updateNew=()=>
    {
        const newProject = {
            "id": uuidv4(),
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
        setProject(newProject)

    }
    const create=()=>
    {
        if(!dateIsValid(new Date(`${project.year}-${project.month}-${project.day}`)))
        {
            alert("Fecha no valida")
        }
        else if(project.description === "" || project.title.keyWords === "" || project.title.text === "")
        {
            alert("Debe rellenar todos los campos correctamente")
        }
        else
        {
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

    const [updating, setUpdating] = useState(false)
    
    return(
        <div className="administration mobContainer">
            <h1>Cchang Administration</h1>

            <button className="siteButton" onClick={()=>setAction("create")}>Crear proyecto</button>
            <button className="siteButton" onClick={()=>setAction("update")}>Actualizar proyecto</button>
            <button className="siteButton" onClick={()=>(setAction("delete"), fetchProjects())}>Borrar proyecto</button>
        
            <div id="create">
                <form action="">
                    
                    <h3>Título:</h3>
                    <input onChange={()=>updateNew()} type="text" id="key-word" placeholder="palabra clave"/>
                    <input onChange={()=>updateNew()} type="text" id="title" placeholder="resto del título"/>

                    <h3>Imagen principal:</h3>
                    <input onChange={()=>updateNew()} id="principalImg" type="text" />

                    <h3>Imagenes secundarias:</h3>
                    <input onChange={()=>updateNew()} type="text" id="secImg1" />
                    <br/><br/>
                    <input onChange={()=>updateNew()} type="text" id="secImg2" />
                    <br/><br/>
                    <input onChange={()=>updateNew()} type="text" id="secImg3" />
                    <br/><br/>
                    <input onChange={()=>updateNew()} type="text" id="secImg4" />
                    

                    <h3>Categoría:</h3>
                    <select onChange={()=>updateNew()} name="category" id="category">
                        <option value="clima">clima</option>
                        <option value="reparaciones">reparaciones</option>
                        <option value="eléctricos">eléctricos</option>
                    </select>

                    <h3>Descripción:</h3>
                    <textarea name="description" id="description" cols="30" rows="10"></textarea>

                    <h3>Día:</h3>
                    <input onChange={()=>updateNew()} id="day" type="number" />

                    <h3>Mes:</h3>
                    <input onChange={()=>updateNew()} id="month" type="number" />

                    <h3>Año:</h3>
                    <input onChange={()=>updateNew()} id="year" type="number" />
                </form> 
                <button className="siteButton largeButton" onClick={create}>Crear</button>
            </div>
            <div id="update">
            {
                !updating ?
                projects.map((project, index)=>
                (
                    project.title !== undefined &&
                        <div key={index} className="projectRow">
                            <h3>{project.title.keyWords} {project.title.text}</h3>
                            <button onClick={()=>(setUpdating(true), setProject(project))} className="siteButton shortButton">Actualizar</button>
                        </div>
                ))
                :
                <>
                    <form action="">
                        <h3 id="id">id: {project.id}</h3>
                        <h3>Título:</h3>
                        <input type="text" id="Update_key-word" onChange={()=>Update()} defaultValue={project.title.keyWords} placeholder="palabra clave"/>
                        <input type="text" id="Update_title" onChange={()=>Update()} defaultValue={project.title.text} placeholder="resto del título"/>

                        <p>A menos que decida cambiarlas, se mantendrán las imagenes anteriores</p>
                        <h3>Imagen principal:</h3>
                        <input id="Update_principalImg" type="text" defaultValue={project.principalImage}/>

                        <h3>Imagenes secundarias:</h3>
                        <input type="text" id="Update_secImg1" />
                        <br/><br/>
                        <input type="text" id="Update_secImg2" />
                        <br/><br/>
                        <input type="text" id="Update_secImg3" />
                        <br/><br/>
                        <input type="text" id="Update_secImg4" />
                        

                        <h3>Categoría:</h3>
                        <select name="category" onChange={()=>Update()} defaultValue={project.category} id="Update_category">
                            <option value="clima">clima</option>
                            <option value="reparaciones">reparaciones</option>
                            <option value="eléctricos">eléctricos</option>
                        </select>

                        <h3>Descripción:</h3>
                        <textarea name="description" onChange={()=>Update()} defaultValue={project.description} id="Update_description" cols="30" rows="10"></textarea>

                        <h3>Día:</h3>
                        <input id="Update_day" type="number" onChange={()=>Update()} defaultValue={project.day}/>

                        <h3>Mes:</h3>
                        <input id="Update_month" type="number" onChange={()=>Update()} defaultValue={project.month}/>

                        <h3>Año:</h3>
                        <input id="Update_year" type="number" onChange={()=>Update()} defaultValue={project.year}/>
                    </form>
                    <button className="siteButton" onClick={()=>(setUpdating(false), Put(project.id))}>Update</button>
                    <button className="siteButton" onClick={()=>setUpdating(false)}>Cancel</button>
                </>
            }

            </div>
            <div id="delete">
                {
                projects.map((project, index)=>
                (
                    project.title !== undefined &&
                        <div key={index} className="projectRow">
                            <h3>{project.title.keyWords} {project.title.text}</h3>
                            <button onClick={()=>remove(project)} className="siteButton shortButton">Borrar</button>
                        </div>
                ))
                }
            </div>
        </div>
    )
}

export default Admin