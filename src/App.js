import './App.scss'
import Layout from './components/layout/Layout'
import Route from './router/Route'

function App () {
  return (
    <div className='app-wapper'>
      <Layout>
        <Route />
      </Layout>
    </div>
  )
}

export default App
