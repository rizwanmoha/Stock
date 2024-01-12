import {createSlice , nanoid} from "@reduxjs/toolkit";

const initialState =  {
    todos : [{id : 1 , name : "XYZ" ,companyName:"Google",   email: "stocks@gmail.com" ,  price : "500"}]
}

export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers :{
        addtodo : (state , action) =>{
            const {name ,companyName , email , price } = action.payload
            const todo = {
                id : nanoid(),
                name : name ,
                 companyName : companyName,
                email : email,
                price : price,
                // text : action.payload

            }
            console.log(todo);
            state.todos.push(todo);
        },
        removetodo : (state  , action) =>{
            state.todos = state.todos.filter((todo)=>
                todo.id !== action.payload
            )
        },
        // updatetodo : (state , action) =>{
        //     const {id , updates} = action.payload;
        //     const item = state.todos.filter((todo) =>{
        //         todo.id === id;
        //     })

        //     if(item){
        //         Object.assign(item , updates)
        //     }

        // }
        

    }
})


// , updatetodo

export const {addtodo , removetodo } = todoSlice.actions

export default todoSlice.reducer;