
import { v4 as uuid } from 'uuid';

export default [
    {
        id: uuid(),
        taskName: 'A Go to the grocery',
        level: 0 // small
    },
    {
        id: uuid(),
        taskName: 'B Go to the grocery',
        level: 1 // Medium
    },
    {
        id: uuid(),
        taskName: 'C Go to the grocery',
        level: 2 // High
    }
]