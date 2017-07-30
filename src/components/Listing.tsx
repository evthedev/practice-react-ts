import * as React from 'react'
import { SFC } from 'react'

export interface Todo {
    id: number
    name: string
    completed: boolean
}

interface Listing {
    todos: Todo[]
}

export const Listing: SFC<Listing> = ({todos}) => {
    return todos
        .filter((aTodo: Todo) => aTodo.completed)
        .map((aTodah: Todo) => (
            <p key="${aTodah.id}">{aTodah.name}</p>
        ))
}
