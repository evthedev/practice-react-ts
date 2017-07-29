import * as React from 'react'
import { SFC } from 'react'

interface DaProposs {
  valoee?: string
  id?: number
}

export const SubHeader: SFC<DaProposs> = ({valoee, id}) => (
  <div>
    <p>Helo {valoee} </p>
  </div>
)