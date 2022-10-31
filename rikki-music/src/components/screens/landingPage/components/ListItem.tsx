import React, { useState, useEffect } from 'react'
import { BsFileMusic, BsChatText } from "react-icons/bs";
import { musicPropsType } from '../../../../utils/interfaces/list'

interface propsType{
    music : musicPropsType
}

const ListItem: React.FC<propsType> = ({music}) => {
  const [params, setParams] = useState<string | null>('')

    useEffect(() => {
      const url = new URL(`${music?.link}`)
      const searchParams  = new URLSearchParams(url.search)
      const param : string | null = searchParams.get('v')
      console.log( searchParams?.get('v'));
      
      setParams(param)
    }, [])
  return (
    <div className="content-musicList-listBox-item">
      <a href={music.link}>
        <img src={`https://img.youtube.com/vi/${params}/mqdefault.jpg`} />
      </a>
      <div>
        <div>
          <a href={music.link}>
            <BsFileMusic />
            <span>{music?.songName}</span>
          </a>
        </div>
        <div>
          <span>
            Dân chơi {music?.sender ? music.sender : "Nặc danh..."} gửi đến{" "}
            {music?.receiver ? music.receiver : "Ai đấy..."}
          </span>
        </div>
        <div>
          <span>
            <BsChatText /> {music.message}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ListItem
