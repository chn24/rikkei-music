import React, { useState, useEffect } from 'react'
import { BsFileMusic, BsChatText } from 'react-icons/bs'
import { musicPropsType } from '../../../../utils/interfaces/list'

interface propsType {
  index: number
  music: musicPropsType
}

const ListItem: React.FC<propsType> = ({ index, music }) => {
  const [params, setParams] = useState<string | null>('')

  useEffect(() => {
    const url = new URL(`${music?.link}`)
    const searchParams = new URLSearchParams(url.search)
    const param: string | null = searchParams.get('v')

    setParams(param)
  }, [])
  return (
    <tr>
      <td>{index + 1}</td>
      <td>
      <a href={music?.link}>
        <img src={`https://img.youtube.com/vi/${params}/mqdefault.jpg`} width='100px' />
      </a>
      </td>
      <td>
      <a href={music?.link}>
            <span>{music?.songName}</span>
          </a>
      </td>
      <td>
      <span>
            Dân chơi {music?.sender ? music?.sender : "Nặc danh..."} gửi đến{" "}
            {music?.receiver ? music?.receiver : "Ai đấy..."} : <br/>  {music?.message}
          </span>
      </td>
      <td>{music.time}</td>
    </tr>
  )
}

export default ListItem

/*
<div className="content-musicList-listBox-item">
      <a href={music?.link}>
        <img src={`https://img.youtube.com/vi/${params}/mqdefault.jpg`} width='100px' />
      </a>
      <div>
        <div>
          <a href={music?.link}>
            <BsFileMusic />
            <span>{music?.songName}</span>
          </a>
        </div>
        <div>
          <span>
            Dân chơi {music?.sender ? music?.sender : "Nặc danh..."} gửi đến{" "}
            {music?.receiver ? music?.receiver : "Ai đấy..."}
          </span>
        </div>
        <div>
          <span>
            <BsChatText /> {music?.message}
          </span>
        </div>
      </div>
    </div>
    */
