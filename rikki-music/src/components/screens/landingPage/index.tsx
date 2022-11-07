import React, { useEffect } from 'react'
import Dj from './components/Dj'
import OrderForm from './components/OrderForm'
import List from './components/List'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import axios from 'axios'
import { musicPropsType } from '../../../utils/interfaces/list'

import { getList } from '../../../hook/callAPI/api'
import { useRecoilValue } from "recoil";
import { officeState } from '../../../store/idParam'
import { useParams } from 'react-router-dom'

const LandingPageScreen = () => {
  const [formToggle, setFormToggle] = useState<Boolean>(false)
  const [musicList, setMusicList] = useState<musicPropsType[]>([])
  const idParam = useRecoilValue(officeState)
  const {officeId} = useParams()
  
  useEffect(() => {
    
    const getData = async (id: number) => {
      const a = await getList(id)
      setMusicList(a.list)
    }

    if(officeId) {
    const id : number = Number(officeId)
    console.log('Efffect', idParam)
    getData(id)
    } else {
      getData(6)
    }
    
  }, [officeId])

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
