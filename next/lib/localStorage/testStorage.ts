import { key_test, site_tag } from "./storage_keys"

type ITestStorage = {
    id: number
    name: string
    algo?: string
}

// precisa para ser reusável
export type SelectableStore = "test"


// esse não vale tanto a pena
export const ChangeStorage = <T>(tag:SelectableStore, newThing: T) => {
        const key = `${site_tag}_${tag}`
    localStorage.setItem(key, JSON.stringify(newThing))
}



export const GetSafeType = <T>(tag: SelectableStore) => {
    const key = `${site_tag}_${tag}`
    const storage = localStorage.getItem(key)
    if(!storage)
        return null
    try {
        const final:T = JSON.parse(storage)
        return final
    } catch {
        return null
    }
}

// para ser automático
export const GetTestWithSafeType = () => {
    return GetSafeType<ITestStorage>("test")
}


export const ChangeStorageTest = (newThing: ITestStorage) => {
    localStorage.setItem(key_test, JSON.stringify(newThing))
}


export const GetStorageTest = () => {
    const storage = localStorage.getItem(key_test)
    if(!storage)
        return null

    const final:ITestStorage = JSON.parse(storage)
    return final
}


