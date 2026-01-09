export const initialStore = () => {
  return {
    characterList:[]
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {

    case 'set_all_characters':
        const characters = action.payload

        return{
          ...store,
          characterList:characters
        }
   


    default:
      throw Error('Unknown action.');
  }
}
