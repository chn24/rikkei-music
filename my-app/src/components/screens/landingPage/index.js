import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Dj from "./components/Dj";
import List from "./components/List";
import OrderForm from "./components/OrderForm";

import { getList, newSong } from "../../../hooks/callAPI/callAPI";
import { useQuery, useMutation } from "@tanstack/react-query";

const LandingScreen = () => {
  const mutation = useMutation((putdata) => newSong(putdata));

  const { status, data, refetch, error } = useQuery(["musicList"], getList, {
    refetchOnWindowFocus: false,
    staleTime: 0,
    cacheTime: 0,
    refetchInterval: 0,
  });

  const [formToggle, setFormToggle] = useState(false);
  console.log(mutation);

  useEffect(() => {
    if (!formToggle) {
      refetch();
    }
  }, [formToggle, refetch]);

  const handleOrder = () => {
    setFormToggle(true);
  };

  return (
    <div className="content">
      <Dj />
      <div className="content-order">
        <Button onClick={handleOrder}>DJ cho tôi order bài nhạc</Button>
      </div>
      {formToggle ? (
        <OrderForm
          setFormToggle={setFormToggle}
          data={data}
          mutation={mutation}
        />
      ) : null}
      <List status={status} data={data} />
    </div>
  );
};

export default LandingScreen;
