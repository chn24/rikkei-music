import { useState, useEffect } from "react";
import { BsFileMusic, BsChatText } from "react-icons/bs";

const ListItem = ({ music }) => {
  const [params, setParams] = useState("");

  useEffect(() => {
    const url = new URL(`${music.link}`);
    const searchParams = new URLSearchParams(url.search);
    setParams(searchParams.get("v"));
  }, []);

  return (
    <div className="content-musicList-listBox-item">
      <a href={music.link}>
        <img src={`https://img.youtube.com/vi/${params}/mqdefault.jpg`} />
      </a>
      <div>
        <div>
          <a href={music.link}>
            <BsFileMusic />
            <span>{music?.songName}</span>
          </a>
        </div>
        <div>
          <span>
            Dân chơi {music?.sender ? music.sender : "Nặc danh..."} gửi đến{" "}
            {music?.receiver ? music.receiver : "Ai đấy..."}
          </span>
        </div>
        <div>
          <span>
            <BsChatText /> {music.message}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
