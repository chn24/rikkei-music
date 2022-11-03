import axios from 'axios'
import { musicPropsType } from '../../utils/interfaces/list'

export const getList = async () => {
  const a = await axios.get('https://6316fc9e82797be77fefdcfc.mockapi.io/musicList/1')
  return a?.data
}

export const putList = async (data: object) => {
  await axios.put('https://6316fc9e82797be77fefdcfc.mockapi.io/musicList/1', data)
}
