import { parseISO, format } from "date-fns";

interface Props {
  dateString: string | Date; // Update type if necessary
}

const DateFormatter = ({ dateString }: Props) => {
  console.log(dateString);

  let date: Date;

  if (typeof dateString === "string") {
    date = parseISO(dateString);
  } else if (dateString instanceof Date) {
    date = dateString;
  } else {
    throw new Error("Invalid dateString format");
  }

  return <time dateTime={date.toISOString()}>{format(date, "LLLL d, yyyy")}</time>;
};

export default DateFormatter;
