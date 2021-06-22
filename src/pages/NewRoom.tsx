import { Link } from 'react-router-dom'

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import '../styles/auth.scss'
import { Button } from '../components/Button'

import { useAuth } from '../hooks/useHooks'


export function NewRoom() {
  const { user } = useAuth()

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Ilustração Simbolizando perguntas e respostas" />
        <strong>Crie Salas de Q&amp;A ao-vivo</strong>
        <p>Tire as duvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Let me ask" />

          <h1>{user?.name}</h1>
          <img src={user?.avatar} />

          <h2>Criar uma nova sala</h2>

          <form>
            <input type="text"
              placeholder="Nome da Sala"
            />
            <Button type="submit" /*className="button"*/>
              Criar sala
            </Button>
          </form>
          <p>
            Quer entrar em uma sala já existe? <Link to="/">clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  )

}