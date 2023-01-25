export const register=(newuserdata)=>{
    return{
        type:"REGISTER_NEW_USER",
        obj:newuserdata,
    }
}