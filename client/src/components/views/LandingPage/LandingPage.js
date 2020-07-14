import React, { useEffect} from 'react'
import axios from 'axios';


function LandingPage() {
    useEffect(() => {
        axios.get('/api/hello')
        .then(response => console.log(response.data))
        
    }, [])

    const onClickHandler = (props)=> {
        axios.get('/api/users/logout')
        .then(response => {
            if(response.data.success){
                props.history.push("/login")
            }else{
                alert("이미 로그아웃이 되어있습니다.")
            }
        })
    }

    return (
        <div style={{
            display:'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '100vh'
        }}>
            <h2>시작페이지</h2>

            <button onClick={onClickHandler}>
                로그아웃
            </button>

        </div>
    )
}

export default LandingPage
