import {React,useState,useEffect,useRef} from 'react';
import axios from 'axios';
import HeaderPage from '../navbar/HeaderPage';
import './random.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Randomdice() {

    const [data,setData]=useState([]);
    const [isRunning,setIsRunning]=useState(true);
    const [currentIndex,setCurrentIndex]=useState(0);
    const intervalRef = useRef(null);


    useEffect(()=>{
        const alldata=async()=>{
            const all=await axios.get("/sort")
            const response=all.data;
            const randomdata=[]
            response.map((elem,index)=>{
                randomdata.push({
                    name:elem.name,
                    imglink: elem.imglink.replace('https://', 'http://'),
                    menu:elem.menu})
            })
            setData(randomdata)
        }
        alldata();
    },[])

    useEffect(()=>{
        if(isRunning && data.length>0){
            intervalRef.current = setInterval(() => {
                setCurrentIndex(prevIndex => (prevIndex + 1) % data.length);
              }, 50); 
        }
        return ()=> clearInterval(intervalRef.current);
    },[isRunning,data]);

    const stop=()=>{
        setIsRunning(false);
    }
    

    const restart=()=>{
        setIsRunning(true);
    }
    
    


  return (
    <div clasName="body">
        <HeaderPage/>
        
        
        
        <div className="all">
        <h2>오늘의 점심(저녁)은?</h2>
        {data.length > 0 && (
          <div className="Random">
            
            <Card >
            <Card.Img src={`${data[currentIndex].imglink}`} alt={`Image ${currentIndex}`} thumbnail style={{width:"40vh",height:"40vh"}} />
            <Card.Body>
                <Card.Title style={{fontWeight:"bold"}}><div className="Name">{data[currentIndex].name}</div></Card.Title>
                <Card.Text><div className="Menu">{data[currentIndex].menu}</div></Card.Text>
            </Card.Body>
            </Card>
          </div>
        )}
        <div className="button">
            <Button variant="dark" onClick={stop}>멈춤</Button>
            <Button variant="light" onClick={restart}>다시시작</Button>
            </div>
        </div>
      
    </div>
  )
}
