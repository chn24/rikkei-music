import ListItem from "./ListItem";

const List = ({ status, data }) => {
  return status === "loading" ? null : (
    <div className="content-musicList">
      <div className="content-musicList-listBox">
        {data.map((music, index) => {
          return <ListItem key={index} music={music} />;
        })}
      </div>
    </div>
  );
};

export default List;
