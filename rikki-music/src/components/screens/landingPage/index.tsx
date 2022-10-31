import React, { useEffect } from 'react'
import Dj from './components/Dj'
import OrderForm from './components/OrderForm'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import axios from 'axios'

//import { getList } from '../../../hook/callAPI/api'

const LandingPageScreen = () => {
  const [formToggle, setFormToggle] = useState<Boolean>(false)
  const [musicList, setMusicList] = useState<Object[]>([])

  const getList = async () => {
    await axios.get('https://6316fc9e82797be77fefdcfc.mockapi.io/musicList/1')
      .then((response) => {
        setMusicList(response.data.list)
      })
      .catch((error) => {
        console.log(error);
        
      })
  }

  useEffect(() => {
    getList()
  },[])

  const handleOrder = () => {
    setFormToggle(true)
  }

  return (
    musicList.length !== 0 ?
    <div className="content">
      <Dj />
      <div className="content-order">
        <Button onClick={handleOrder}>DJ cho tôi order bài nhạc</Button>
      </div>
      {formToggle ? (
        <OrderForm
          setFormToggle = {setFormToggle}
          list = {musicList}
        />
      ) : null}
    </div> : null
  )
}

export default LandingPageScreen
