import React,{useEffect,useState} from  'react'
import {getImgThumb} from "./custom-hooks/firebase"
import "./css/App.css"

export default function ThumbImage(props) {
    const [img, setImage] = useState("")
    const {image} = props

    useEffect(() => {
        (async()=>{
            setImage(await getImgThumb(image))
        })()
    }, [])


    return (
        <img src={img} className="img" alt=""/>
    )
}
