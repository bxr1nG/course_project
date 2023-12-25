import {
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

function createData(number: string, firstShift: string, secondShift: string) {
  return { number, firstShift, secondShift };
}

const rows = [
  createData("0", "7.50 зарядка", "12.55 зарядка"),
  createData("1", "8.00 – 8.45", "13.05 – 13.50"),
  createData("2", "9.00 – 9.45", "14.00 – 14.45"),
  createData("3", "10.00 – 10.45", "15.00 – 15.45"),
  createData("4", "11.00 – 11.45", "15.55 – 16.40"),
  createData("5", "12.00 – 12.45", "16.50 – 17.35"),
  createData("6", "13.00 – 13.45", "17.45 – 18.30"),
  createData("7", "14.00 – 14.45", ""),
];

const ScheduleCard = () => {
  return (
    <Card variant="outlined" sx={{ width: "100%" }}>
      <CardContent>
        <Typography align="center" variant="h6">
          Расписание звонков
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>1 смена</TableCell>
              <TableCell>2 смена</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.number}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell>{row.number}</TableCell>
                <TableCell>{row.firstShift}</TableCell>
                <TableCell>{row.secondShift}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default ScheduleCard;
