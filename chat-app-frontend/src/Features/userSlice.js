import {createSlice } from '@reduxjs/toolkit'
import appApi from '../Sevices/appApi'

export const userSlice = createSlice({

    name:"user",
    initialState:null,
    reducers:{
                addNotifications: (state,{payload}) =>{}, // these both are basically actions
                resetNotifications: (state,{payload}) =>{}

    },

    extraReducers: ( bulider )=> {

        // save user after signup

        bulider.addMatcher(appApi.endpoints.signUpUser.matchFulfilled , ( state , {payload} ) => payload)

        // save user after login

        bulider.addMatcher(appApi.endpoints.loginUser.matchFulfilled , ( state , {payload} ) => payload)

        // LOGOUT user destroy user session

        bulider.addMatcher(appApi.endpoints.logoutUser.matchFulfilled , () => null)


    },

})

export const { addNotifications , resetNotifications } = userSlice.actions

export default userSlice.reducer


