import { format } from "date-fns";

export const getTime = () : string => {
  const date = new Date();
  return String(format(date, "dd/MM/yyyy"));
};

export const getParam = (songURL : string) : string | null => {
  const url = new URL(`${songURL}`)
    const searchParams = new URLSearchParams(url.search)
    const param: string | null = searchParams.get('v')
    return param
}
