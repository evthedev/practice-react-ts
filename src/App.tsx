import * as React from 'react'
import './App.css'
import { Header } from './components/Header'
import { SubHeader } from './components/SubHeader'
import { InputThing, Buttorn, Buttorno } from './components/InputThing'
import { Listing, Todo } from './components/Listing'

const todos: Todo[] = [
  { id: 1, name: 'Todo1', completed: true },
  { id: 2, name: 'Todo2', completed: true },
  { id: 3, name: 'Todo3', completed: false }
]

console.log(todos)

export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="App">
        <Header valuee="Bang bang" />
        <SubHeader valoee="Bing bang" />
        <InputThing />
        <Buttorn buttorntext="Click lick" />
        <Buttorno buttorntext="Click clock" />
        <Listing todos={...todos} />
      </div>
    )
  }
}
