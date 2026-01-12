async function getAllCharacter(){
try{
    const response = await fetch('https://stranger-things-api.fly.dev/api/v1/character222s')



    if(!response.ok){
        throw new Error("respuesta no valida")
    }

    const data = await response.json()
    return [data,undefined]

}catch(error){
    console.log(error)
    return [ undefined, error.message]
}

}

const strangerThingsService ={
    getAllCharacter
}

export default strangerThingsService