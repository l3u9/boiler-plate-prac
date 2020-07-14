import React,{useEffect} from 'react';
import Axios from 'axios';
import {useDispatch} from 'react-redux'
import {auth} from '../_action/user_action'

export default function(SpecifcComponent, option, adminRoute = null){

    //option 1.null 2.true 3.false
    //1. 아무나 출입 가능
    //2. 로그인한 유저만 가능
    //3. 로그인한 유저는 불가능
    //adminRouter = true면 admin만 출입 가능

    function AuthenticationCheck(props){
        const dispatch = useDispatch();

        useEffect(() => {

            dispatch(auth()).then(response => {
                console.log(response)

                //로그인하지 않은 상태
                if(!response.payload.isAuth){
                    if(option){
                        props.history.push('/login')
                    }

                }else{
                    //로그인 한 상태
                    if(adminRoute && !response.payload.isAdmin){
                        props.history.push('/')
                    }else{
                        if(option == false){
                            props.history.push('/')
                            
                        }
                    }
                }
            })
            
        }, [])
        return(
            <SpecifcComponent />
        )


    }
    
    return AuthenticationCheck
}
