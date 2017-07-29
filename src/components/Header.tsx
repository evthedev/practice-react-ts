import * as React from 'react'
import { SFC } from 'react'

interface DaProps {
  valuee?: string
}

export const Header: SFC<DaProps> = (proops) => (
// can be rewritten as 
// const App: SFC<{value: string}> = (props) => (
  <div>
    <p>Helo {proops.valuee} </p>
  </div>
)