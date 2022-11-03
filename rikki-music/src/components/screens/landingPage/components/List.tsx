import React from 'react'
import Table from 'react-bootstrap/Table'
import ListItem from './ListItem'
import { musicPropsType } from '../../../../utils/interfaces/list'

interface propsType {
  musicList: musicPropsType[]
}

const List: React.FC<propsType> = ({ musicList }) => {
  return (
    <div className="content-musicList">
      <div className="content-musicList-listBox">
        <Table   hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Song name</th>
              <th>Message</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {musicList.map((music, index) => {
              return <ListItem key={index} index = {index} music={music} />
            })}
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default List
