import React from 'react';
import ListItem from "./ListItem"

interface propsType {
    list : Object[];
}

const List : React.FC<propsType> = ({list}) => {
  return (
    <div className="content-musicList">
      <div className="content-musicList-listBox">
        {list.map((music , index) => {
          return <ListItem key={index} music ={music} />;
        })}
      </div>
    </div>
  )
}

export default List