import { useParams } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { CharacterCardDetail } from "../components/CharacterCardDetail"

export default function CharacterDetailPage() {
    const params= useParams()
    console.log(params)
    const { store } = useGlobalReducer()
    const characters = store.characterList

    const character = characters.find((character)=> character._id === params.id)

    console.log(character)


    return (<CharacterCardDetail character ={character}/>)
}