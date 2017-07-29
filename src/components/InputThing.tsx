import * as React from 'react'
import { SFC, HTMLAttributes } from 'react'

export const InputThing: SFC<HTMLAttributes<HTMLInputElement>> = (praps) => (
    <input type="text" {...praps} />
)

interface Burthong extends HTMLAttributes<HTMLButtonElement> {
    /**
     * This tooltip actually shows up when the component is getting created
     */
    buttorntext: string
}

export const Buttorn: SFC<Burthong> = (prupsy) => {
    const {
        buttorntext,
        ...otherpruups
    } = prupsy
    return (
        <button {...otherpruups} type="submit">
            {prupsy.buttorntext}
        </button>
    )
}

/**
 * The above can be done like this too
 */

interface Buttong {
    buttorntext: string
}

type Buttongy = Buttong & HTMLAttributes<HTMLButtonElement>

// can alo be written like this
// type Buttongy = {buttorntext: string} & HTMLAttributes<HTMLButtonElement>

export const Buttorno: SFC<Buttongy> = (prupsy) => {
    const {
        buttorntext,
        ...otherpruups
    } = prupsy
    return (
        <button {...otherpruups} type="submit">
            {prupsy.buttorntext}
        </button>
    )
}