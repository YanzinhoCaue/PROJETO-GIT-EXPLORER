import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss'
import { useState, useEffect } from "react";

interface Repository {
  name: string;
  description: string | null;
  html_url: string;
}

export function RepositoryList(){
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, []);

  return(
    <section className="repository-list">
      <header className="repository-list__hero">
        <p className="repository-list__eyebrow">Github Explorer</p>
        <h1>Radar de Repositórios</h1>
        <p className="repository-list__subtitle">
          Explore projetos em um painel com estética sci-fi e acesso direto ao código.
        </p>
        <span className="repository-list__counter">{repositories.length} resultados</span>
      </header>

      <ul className="repository-list__grid">
        {repositories.map(repository => {
          return <RepositoryItem key={repository.name} repository={repository}/>
        })}
      </ul>
    </section>
  )
}