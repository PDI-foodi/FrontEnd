import {React,useEffect,useState} from 'react'
import axios from "axios";
export default function Sort() {

    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);


    const all=async ()=>{
      const allitems=await axios.get("/sort");
      setShow(true)
      return allitems;
    }

    const jjim=()=>{

    }
    
    const western=async ()=>{
      const western=await axios.get("/sort/western")
      setShow(true)
      return western
    }
    
    const korea=async ()=>{
      const western=await axios.get("/sort/western")
      setShow(true)
      return western
    }
    
    const japanese=async()=>{
      const japanese=await axios.get("/sort/japanese")
      setShow(true)
      setData(japanese.data)
    }
    
    const desert=async()=>{
      const desert=await axios.get("/sort/desert")
      setShow(true)
      setData(desert)
    }
    const fastfood=async ()=>{
      const fastfood=await axios.get("/sort/fastfood")
      setShow(true)
      setData(fastfood)
    }
   
    
  return (
    <div>
      <div className="category">
                    <div onClick={all}>전체</div>
                    <div onClick={jjim}>찜</div>
                    <div onClick={western}>양식</div>
                    <div onClick={korea}>한식</div>
                    <div onClick={japanese}>일식</div>
                    <div onClick={desert}>디저트</div>
                    <div onClick={fastfood}>패스트푸드</div>
      </div>
      {
        setShow &&(
          <div>

            {data.map((elem,index)=>(
              <div key={index+1} > 
              <img src={elem.imglink}></img>
              {elem.name}
              {elem.category}
              </div>
            ))}


            </div>
        )
      }
      
    </div>
  )
}
