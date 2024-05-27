import { CSSObject } from "styled-components"

export interface TitleProps {
    text: string,
    textTransform?:  CSSObject['textTransform']
}

export interface DataState {
    id: string,
    name: string,
    alternate_names: string[],
    species: string,
    gender: string,
    house: string,
    dateOfBirth: string,
    yearOfBirth: number,
    wizard: boolean,
    ancestry: string,
    eyeColour: string,
    hairColour: string,
    wand: {
        wood: string,
        core: string,
        length: number
    },
    patronus: string,
    hogwartsStudent: boolean,
    hogwartsStaff: boolean,
    actor: string,
    alternate_actors: string[],
    alive: boolean,
    image: string

}