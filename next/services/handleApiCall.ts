import { To_Do } from "@/types/todos"
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, isAxiosError } from "axios"
import { toast } from "sonner"

const baseUrl = "https://jsonplaceholder.typicode.com"

// demonstração
export const getTodos = async () => {
    // lembrar de passar o tipo de retorno

    //com callback    
    // return await handleApiCallWithCallBack<To_Do>(async () => await axios("https://jsonplaceholder.typicode.com/todos/1"))


    //com reaproveitando a que usa callback (manutenção melhor)
    return await handleApiCall2<To_Do, To_Do>({
        endpoint: "/todos/1",
        method: "post",
        body: {
            completed: false,
            id: 12,
            title: "Title",
            userId: 1
        }
    })


    // só com objeto
    // return await handleApiCall<To_Do>({
    //     endpoint: "/todos/1",
    //     //method eu coloque default GET
    // })


    // com erro já mostrado (usa a versão só com obj de config):
    // return await handleApiCallAndShowError<To_Do>({
    //     endpoint: "/todos/1",
    //     method: "get",
    // })
}


// TReturn -> garante que o tipo será certo, eu devo passar

const handleApiCallWithCallBack = async <TReturn>
    (apiCall: () => Promise<AxiosResponse<TReturn>>): Promise<GenericApiResponse<TReturn>> => {

    try {
        const res = await apiCall()

        return {
            isError: false,
            response: res.data
        }
    } catch (e: unknown) {
        // tratar o erro conforme o backend
        if (isAxiosError(e) && typeof e.response?.data == "string")
            return {
                isError: true,
                errorMessage: `ERROR: ${e.response?.data}`
            }

        // erro generico
        return {
            isError: true,
            errorMessage: "Erro Inesperado!"
        }
    }

}


// essa reaproveita e usa o com callBack (auto-updated)
export const handleApiCall2 = async <TReturn, TBody>
    ({ endpoint, method = "get", body, fullUrl, config }: IHanleApiCall<TBody>): Promise<GenericApiResponse<TReturn>> => {

    //simula uma requi usando essas infos
    const query = async () => {
        if (method == "get" || (method=="delete" && !body)) {// he doesn't use body
            if (fullUrl)
                return await axios[method](fullUrl, config)
            else {
                return await axios[method](baseUrl + endpoint, config)
            }
        }
        // POST..., usam 3 args
        if (fullUrl)
            return await axios[method](fullUrl, body, config)
        else {
            return await axios[method](baseUrl + endpoint, body, config)
        }
    }

    return await handleApiCallWithCallBack(query)
}


// recebe objeto de config
export const handleApiCall = async <TReturn, TBody = any>
    ({ endpoint, method = "get", body, fullUrl }: IHanleApiCall): Promise<GenericApiResponse<TReturn>> => {

    try {
        // const res = await apiCall()
        let res;
        if (fullUrl)
            res = await axios[method](fullUrl, body)
        else
            res = await axios[method](baseUrl + endpoint, body)


        return {
            isError: false,
            response: res.data
        }
    } catch (e: unknown) {
        // tratar o erro conforme o backend
        if (isAxiosError(e) && typeof e.response?.data == "string")
            return {
                isError: true,
                errorMessage: `ERROR: ${e.response?.data}`
            }
        else if (isAxiosError(e)) {
            showErroOnConosle(e, endpoint ?? fullUrl)

            return {
                isError: true,
                errorMessage: `ERROR: AXIOS ERROR`//mude isso
            }
        }

        // erro generico
        return {
            isError: true,
            errorMessage: "Erro Inesperado!"
        }
    }
}


// Retorna tudo normal, mas já dá um toast de erro
export const handleApiCallAndShowError = async <TReturn>
    ({ endpoint, method = "get", body, fullUrl }: IHanleApiCall): Promise<GenericApiResponse<TReturn>> => {

    // pode escolher qual das fn vai usar
    const res = await handleApiCall<TReturn>({
        endpoint, method, body, fullUrl
    })

    if (res.isError) {
        toast.error(res.errorMessage)

        return res
    }

    return res
}


// mostrar o erro apropriadamente no console:
const showErroOnConosle = (err: AxiosError, endpointOrUrl: string) => {
    console.log("Error at: ", endpointOrUrl)
    console.error(err)
}



// resposta padronizada
type GenericApiResponse<T> = {
    isError: false,
    response: T

} | {
    isError: true,
    errorMessage: string
}

// parametro de config para a api
type IHanleApiCall<TBody = any> = {
    fullUrl?: string
    endpoint: `/${string}`
    method?: "get" | "post" | "put" | "delete" | "patch"
    body?: TBody,// para poder ter auto complete nele se quiser
    config?: AxiosRequestConfig
}