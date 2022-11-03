import { format } from "date-fns";

export const getTime = () : string => {
  const date = new Date();
  return String(format(date, "dd/MM/yyyy"));
};
