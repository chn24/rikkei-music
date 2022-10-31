import React from 'react';
import ListItem from "./ListItem"
import { musicPropsType } from '../../../../utils/interfaces/list'

interface propsType {
    musicList : musicPropsType[]
}

const List : React.FC<propsType> = ({musicList}) => {
  return (
    <div className="content-musicList">
      <div className="content-musicList-listBox">
        {musicList.map((music , index) => {
          return <ListItem key={index} music ={music} />;
        })}
      </div>
    </div>
  )
}

export default List