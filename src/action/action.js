export const addData = (data) =>{
    return {
        type:"ADD_DATA",
        payload:{
            Name:data
        }
    }
}