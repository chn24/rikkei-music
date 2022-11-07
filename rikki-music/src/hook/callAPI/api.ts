import axios from 'axios'

export const getList = async (idParam: number) => {
  const a = await axios.get(`https://6316fc9e82797be77fefdcfc.mockapi.io/musicList/${idParam}`)
  return a?.data
}

export const putList = async (data: object, idParam: number) => {
  await axios.put(`https://6316fc9e82797be77fefdcfc.mockapi.io/musicList/${idParam}`, data)
}
