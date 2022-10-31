import { format } from "date-fns";

export const getTime = () : string => {
  const date = new Date();
  return String(format(date, "HH:mm dd/MM/yyyy"));
};
