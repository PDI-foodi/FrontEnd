import {React,useEffect,useState} from 'react'
import axios from "axios";
export default function Sort() {

    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const [randomindex,setrandomindex]=useState([]);

    const random =(length)=>{
      return parseInt(Math.random()*length)
    }
    const limitedRandomNumbers=(data)=>{
      const randomNumbers=[];
      for (let i=0;i<=5;i++){
        randomNumbers.push(random(data.length));
      }
      return randomNumbers;
    }

    const full=(data)=>{
      if (data.length>=5){
        const random=limitedRandomNumbers(data);
        const new_data = data.filter((elem, index) => random.includes(index));
        setData(new_data)
      }
      else{
        setData(data);
      }
    }


    const all=async ()=>{
      const allitems=await axios.get("http://localhost:5000/sort");
      setShow(true)
      const temp=allitems.data;
      full(temp);
    }

    const jjim=()=>{

      

      

    }
    
    const western=async ()=>{
      const western=await axios.get("http://localhost:5000/sort/western")
      setShow(true)
      const temp=western.data;
      full(temp);
    }
    
    const korea=async ()=>{
      const korea=await axios.get("http://localhost:5000/sort/korea")
      setShow(true)
      const temp=korea.data;
      full(temp);
    }
    
    const japanese=async()=>{
      const japanese=await axios.get("http://localhost:5000/sort/japanese")
      setShow(true)
      const temp=japanese.data;
      full(temp);
    }
    
    const desert=async()=>{
      const desert=await axios.get("http://localhost:5000/sort/desert")
      setShow(true)
      const temp=desert.data;
      full(temp);
    }
    const fastfood=async ()=>{
      const fastfood=await axios.get("http://localhost:5000/sort/fast-food")
      setShow(true)
      const temp=fastfood.data;
      full(temp);
    }
    const flour=async ()=>{
      const flour=await axios.get("http://localhost:5000/sort/flour")
      setShow(true)
      const temp=flour.data;
      full(temp);
    }
    const etc=async ()=>{
      const etc=await axios.get("http://localhost:5000/sort/etc")
      setShow(true)
      const temp=etc.data;
      full(temp);
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
                    <div onClick={flour}>분식</div>
                    <div onClick={etc}>기타</div>
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
