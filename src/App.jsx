import { useState } from 'react'
import Logo from './components/logo-dark'
import Input from './components/input'
import List from './components/list'
import Footer from './components/footer'

function App() {
  const [newData, setNewData] = useState([])
  const [data, setData] = useState([])

  const [dark, setDark] = useState(false)
  const darkMode = () => {
    setDark(!dark)
  }

  const stateTask = (data) => {
    setNewData(data)
    setData(data)
  }

  const remove = (index) => {
    const filter = data.filter((item) => item.id !== index)
    setNewData(filter)
    setData(filter)
  }

  const all = () => {
    setData(newData)
  }
  const noDone = (filter) => {
    setData(filter)
  }
  const done = (filter) => {
    setData(filter)
  }

  const deleteAll = (data) => {
    setNewData(data)
    setData(data)
  }

  const reception = (data) => {
    setData(data)
    setNewData(data)
  }

  return (
    <>
      <div className={dark ? "container dark" : "container"}>
        <Logo darkMode={darkMode} />
        <Input data={data} reception={reception} />
        <ul>
          <List data={data} newData={newData} stTaske={stateTask} removeTaske={remove} />
          <li className='no-border'><Footer deleteAll={deleteAll} data={data} noCommplete={noDone} commplete={done} showAll={all} newData={newData} /></li>
        </ul>
      </div>
    </>
  )
}

export default App
