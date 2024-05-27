import './search.css'
import {React,useState} from 'react'
import axios from 'axios';

export default function Search() {

    const [text,setText]=useState('');
    const [result,setResult]=useState('');
    const [show,setShow]=useState(false);

    const url="http://localhost:5000/search/api/data";//express.js 포트 변경 예정
    const headers='';//회원 로직 나중에 추가예정

    
    const searchBar = ()=>{
        setShow(true)
        console.log(url)
        axios.get(url+`?value=${text}`).then((response)=>{
            setResult(response.data.result[0]);
            
        }
        )
        
        
    }

    const close =()=>{
        setShow(false)
        setText('');
    }


  return (
    <div>
        <div className="searchBar">
                <input type="text" placeholder="지역, 음식 또는 식당명 입력" onChange={(e)=>setText(e.target.value)}>
                </input>
                <div onClick={searchBar}>
                🔍
                </div>
        </div>

        {
            show&&(result?<div>
                            앗 찾았습니다! 결과값은? {result.name}입니다!

                            
                    <button>상세페이지로 이동하기</button>
                    <button onClick={close}>X</button>
                </div>
            :
            <div>
                검색 결과가 안나옵니다!
            </div>)
            
        }
        
    </div>
  )
}
