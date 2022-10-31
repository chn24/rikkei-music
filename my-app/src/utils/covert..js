import { format } from "date-fns";

export const getTime = () => {
  const date = new Date();
  return format(date, "HH:mm dd/MM/yyyy");
};
