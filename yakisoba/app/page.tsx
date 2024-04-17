import Image from 'next/image'
import Simple from './components/simple'
import SimpleWithChildren from './components/simplewithchildren'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Simple></Simple>
      <SimpleWithChildren>
        <h1>Quero caféeeeeee</h1>
      </SimpleWithChildren>
    </main>
  )
}
