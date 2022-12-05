import LoginForm from './LoginForm'

function App () {
  const handleLogin = (data) => { console.log(data) }

  return (
    <div>
      <LoginForm handleLogin={handleLogin} />
    </div>
  )
}

export default App
