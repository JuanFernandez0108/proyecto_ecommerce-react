import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

const App = () => {
  return (
    <>
    <NavBar />
    <ItemListContainer msg="Contenido vacio por el momento" />
    </>
  )
}

export default App;