import { useState } from 'react'
import CenteredCard from './components/Homepage/index'

function App() {

  const students = [
    {
      name: 'Igor Leonardo',
      status: 'Aprovado!'
    },
    {
      name: 'Anneliseam Cherry',
      status: 'Aprovada!'
    },
    {
      name: 'Yasuo Demonho',
      status: 'Reprovadoah!'
    }
  ]

  return (
    <main>
      {
        students.map(student => {
          return(
            <CenteredCard key={student.name} name={student.name} status={student.status}/> 
          )
        })
      }
    </main>
  )
}

export default App
