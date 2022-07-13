import React, { useState } from 'react'
import '../App.css';
import Profile from './Profile'

export default function Main() {
    const data =[
        {
          id:1,
        img:"https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/77/038078/1.jpg?8612",
        name:"Super Arnold",
        age:"41years"
             },
        {
          id:2,
        img:"https://ng.jumia.is/cms/0-6-anniversary/2022/hp-freelinks/kids-corner_260x144.png",
        name:"Diss lovely",
        age:"235years"
             },
        {
          id:3,
        img:"https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/kids-corner/boys-clothing_260x144.png",
        name:"kong hong",
        age:"60years"
             },
        {
          id:4,
        img:"https://ng.jumia.is/cms/0-1-homepage/freelinks-brands-all/pears_260x144.png",
        name:"Ban Iphone",
        age:"20years"
             }


]

const [dataset, setData] = useState(data)
  return (
    <div >
     <p style={{textAlign:"center"}}>{dataset.length} birthdays today</p>
        { <Profile setData={setData} dataset={dataset}/>}
        
    </div>
  )
}
