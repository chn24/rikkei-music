export interface musicPropsType {
  link: string
  message: string
  songName: string
  receiver: string
  sender: string
  time: string
}

export interface songType {
  music: musicPropsType
}

export interface ListType {
    musicList?: musicPropsType[]
}
