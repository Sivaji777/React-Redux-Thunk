import axios from "axios"

export const SuccessApi=(one)=>{
    return {
        type:'SUCCESS_API',
        apiData:one
    }
}

export const FailureApi=(two)=>{
    return {
        type:'FAILURE_API',
        apiData:two
    }
}

export const ApiFetching=()=>{
    return async(dispatch) => {
       await axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
            var FetchData=res.data
            dispatch(SuccessApi(FetchData))
        }).catch((err)=>{
            var errorData=err
            dispatch(FailureApi(errorData))
             
        })
    }
}