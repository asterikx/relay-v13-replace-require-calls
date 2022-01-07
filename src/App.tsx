import { useState } from 'react'
import { graphql } from 'babel-plugin-relay/macro';
import logo from './logo.svg'
import './App.css'

const appFragment = graphql`
  fragment AppQuery_query on User
  @argumentDefinitions(first: { type: Int }, after: { type: String })
  @refetchable(queryName: "TodoPaginationQuery") {
    todos(first: $first, after: $after) @connection(key: "App_todos") {
      edges {
        node {
          id
        }
      }
    }
  }
`

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
