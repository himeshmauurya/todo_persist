import {createSlice, nanoid} from '@reduxjs/toolkit';
const initialState = {
  data1: [],
};

export const crudSlice = createSlice({
  name: 'crudOperation',
  initialState,
  reducers: {
    adddata: (state, action) => {
      const p={
        id:nanoid(),
        textItem:action.payload
      }
      state.data1.push(p) 
    },
    removedata: (state, action) => {
      const id1=action.payload
     
      const newData=state.data1.filter((val)=>{
        return val.id!=id1
      })
      state.data1=newData
    },
    updatedata: (state, action) => {
      const val=action.payload.val
      const id1=action.payload.id
      console.log("object,id1",id1)
      const p1=state.data1.findIndex((val)=>{
        return val.id==id1
      })
      const newData=state.data1.filter((val)=>{
        return val.id==id1
      })
      newData[0].textItem=val;
      
      if(p1!=-1){
        
        state.data1.splice(p1,1,newData[0])
      }
     
      
    },
  },
});

export const {
  adddata,
  removedata,
  updatedata
} = crudSlice.actions;

export default crudSlice.reducer;




