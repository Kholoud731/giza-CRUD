import * as yup from "yup";
import { formatDate } from ".";

export const today = formatDate(new Date());

export const schema = yup.object().shape({
    code: yup.string().required("Code is required"),
    date: yup
      .date()
      .min(today, `Min start date is ${today}`)
      .required("required"),
    capacity: yup.string().required("Capacity is required"),
  });

export  const TABLE_CELLS = ['Id', 'Code','Date', 'Capacity', 'Actions']