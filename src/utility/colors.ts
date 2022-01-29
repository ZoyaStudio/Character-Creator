import { Color } from './types'

export type Colors = {
    [key: string]: Color
}

export const colors: Colors = {
    White: {
        hue: 0,
        sat: 0,
        brit: 3,
        con: 199.2,
        op: 100,
    },
    Black: {
        hue: 0,
        sat: 0,
        brit: 1,
        con: 199.2,
        op: 100,
    },
    'Canary Yellow': {
        brit: 2.55,
        con: 199.2,
        hue: 59.1,
        op: 100,
        sat: 90.2,
    },
    'Pastel Pink': {
        brit: 2.75,
        con: 170.9,
        hue: 349.3,
        op: 100,
        sat: 78.7,
    },
    Red: {
        brit: 1,
        con: 100,
        hue: 360,
        op: 100,
        sat: 134.5,
    },
    Lavender: {
        hue: 266.6,
        sat: 66.5,
        brit: 1.95,
        con: 100,
        op: 100,
    },
    Purple: {
        brit: 1,
        con: 100,
        hue: 270.1,
        op: 100,
        sat: 139.7,
    },
    'Light Blue': {
        brit: 2.3,
        con: 170.2,
        hue: 227.3,
        op: 100,
        sat: 95.2,
    },
    Blue: {
        brit: 1.2,
        con: 100,
        hue: 226.9,
        op: 100,
        sat: 139.3,
    },
    'Moss Green': {
        brit: 1.15,
        sat: 58.3,
        con: 90.9,
        hue: 104.9,
        op: 100,
    },
}
