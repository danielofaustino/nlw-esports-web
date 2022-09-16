import { useEffect, useState } from 'react'
import './styles/main.css'
import * as Dialog from '@radix-ui/react-dialog'
import axios from 'axios'


import LogoImg from './assets/logo-nlw-esports.svg'
import GameCard from './components/GameCard'
import CreateAdBanner from './components/CreateAdBanner'
import Input from './components/Form/Input'
import CreateAdModal from './components/CreateAdModal'
interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}


function App() {

  const [games, setGames] = useState<Game[]>([])

  const getGames = async () => {
    const { data } = await axios('http://localhost:5556/games')
    setGames(data)
  }

  useEffect(() => {
    getGames()
  }, [])

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={LogoImg} alt="logo nlw sports" />
      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">


        {games.map((game) => {
          return (
            <GameCard
              key={game.id}
              title={game.title}
              bannerUrl={game.bannerUrl}
              adsCount={game._count.ads}

            />
          )
        })}
      </div>

      <Dialog.Root>

        <CreateAdBanner />
        <CreateAdModal />

      </Dialog.Root>


    </div>
  )
}

export default App
