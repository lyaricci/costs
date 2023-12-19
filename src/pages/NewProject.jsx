import { useNavigate } from "react-router-dom"

import ProjectForm from "../components/ProjectForm"

import styles from "./newProject.module.css"

export default function NewProject() {
  const navigate = useNavigate()

  const createProject = (project) => {
    // initialize cost and services
    project.cost = 0
    project.services = []

    fetch("http://localhost:3000/projects/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((res) => res.json())
      .then(() => {
        navigate("/projects", {
          state: { message: "Projeto criado com sucesso!" },
        })
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className={styles.newProjectContainer}>
      <h1>Criar projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={createProject} btnText="Criar projeto" />
    </div>
  )
}
