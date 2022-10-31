import { format } from "date-fns";

export const getTime = () : String => {
  const date = new Date();
  return String(format(date, "HH:mm dd/MM/yyyy"));
};
