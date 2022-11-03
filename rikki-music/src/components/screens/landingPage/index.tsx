import React, { useEffect } from 'react'
import Dj from './components/Dj'
import OrderForm from './components/OrderForm'
import List from './components/List'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import axios from 'axios'
import { musicPropsType } from '../../../utils/interfaces/list'

import { getList } from '../../../hook/callAPI/api'

const LandingPageScreen = () => {
  const [formToggle, setFormToggle] = useState<Boolean>(false)
  const [musicList, setMusicList] = useState<musicPropsType[]>([])
  
  useEffect(() => {
    const getData = async () => {
      const a = await getList()
      setMusicList(a.list)
    }
    getData()
  },[])

  const handleOrder = () => {
    setFormToggle(true)
  }

  return (
    musicList !== undefined ?
    <div className="content">
      <Dj />
      <div className="content-order">
        <Button onClick={handleOrder}>DJ cho tôi order bài nhạc</Button>
      </div>
      {formToggle ? (
        <OrderForm
          setFormToggle = {setFormToggle}
          musicList = {musicList}
        />
      ) : null}
      <List musicList = {musicList}/>
    </div> : null
  )
}

export default LandingPageScreen
