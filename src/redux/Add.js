const initialState={list:[],}
    

const addNewProfile=(state=initialState,{type,obj})=>{
switch (type) {
    case "REGISTER_NEW_USER":return {...state,list:obj}
        
        

    default:return state
       
}
}
export default addNewProfile;