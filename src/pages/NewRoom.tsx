import { Link, useHistory } from 'react-router-dom'

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import '../styles/auth.scss'
import { Button } from '../components/Button'

import { useAuth } from '../hooks/useHooks'
import { FormEvent } from 'react'
import { useState } from 'react'
import { database } from '../services/firebase'


export function NewRoom() {
  const { user } = useAuth()
  const history = useHistory()
  const [newRoom, setNewRoom] = useState('') //

  async function handleCreateRoom(evento: FormEvent) {
    evento.preventDefault()

    if (newRoom.trim() === '') {
      return
    }

    const roomRef = database.ref('rooms') //referencia para um registro no bando de dados

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    })

    history.push(`/rooms/${firebaseRoom.key}`)

  }

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
          <img src={user?.avatar} alt='foto da pessoa logada' />

          <h2>Criar uma nova sala</h2>

          <form onSubmit={handleCreateRoom}>
            <input type="text"
              placeholder="Nome da Sala"
              onChange={evento => setNewRoom(evento.target.value)}
              value={newRoom}
            />
            <Button type="submit" >
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