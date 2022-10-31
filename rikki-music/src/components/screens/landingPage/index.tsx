import React, { useEffect } from 'react'
import Dj from './components/Dj'
import OrderForm from './components/OrderForm'
import List from './components/List'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import axios from 'axios'
import { musicPropsType } from '../../../utils/interfaces/list'

//import { getList } from '../../../hook/callAPI/api'

const LandingPageScreen = () => {
  const [formToggle, setFormToggle] = useState<Boolean>(false)
  const [musicList, setMusicList] = useState<musicPropsType[]>([])

  const getList = async () => {
    await axios.get('https://6316fc9e82797be77fefdcfc.mockapi.io/musicList/1')
      .then((response) => {
        setMusicList(response.data.list)
      })
      .catch((error) => {
        console.log(error);
        
      })
  }

  console.log( musicList);
  

  useEffect(() => {
    getList()
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
