async function getAllCharacter(){

    const response = await fetch('https://stranger-things-api.fly.dev/api/v1/characters')
    const data = await response.json()
    return data

}

const strangerThingsService ={
    getAllCharacter
}

export default strangerThingsService