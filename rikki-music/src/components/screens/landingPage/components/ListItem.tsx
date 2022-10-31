import React, { useState, useEffect } from 'react'

type propsType = {
    music : Object
}
/*
{
        link : string;
        message : string;
        songName : string;
        receiver: string;
        sender : string;
        time : string;
    };
*/

const ListItem: React.FC<propsType> = ({ music } ) => {
  const [params, setParams] = useState<String>('')
  console.log(music.link);
  

//   useEffect(() => {
//     const url = new URL(`${music?.link}`)
//     const searchParams = new URLSearchParams(url.search)
//     setParams(searchParams?.get('v'))
//   }, [])
  return <div></div>
}

export default ListItem
