import axios from 'axios'

export const getList = async ()  => {
    await axios
    .get('https://6316fc9e82797be77fefdcfc.mockapi.io/musicList/1')
    .then((response) : Number[] => {
      return response.data.list
    })
    // .catch((error) => {
    //   console.log(error)
    // })
}
