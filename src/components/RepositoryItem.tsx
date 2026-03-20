interface RepositoryItemProps {
  repository: {
    name: string,
    description: string | null,
    html_url: string
  }
}

export function RepositoryItem(props: RepositoryItemProps) {
  return(
    <li className="repository-item">
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description || 'Projeto sem descrição pública no momento.'}</p>
      <a href={props.repository.html_url} target="_blank" rel="noreferrer">
        Acessar repositório
      </a>
    </li>
  );
}