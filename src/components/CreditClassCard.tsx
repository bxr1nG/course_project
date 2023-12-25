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

function createData(
  date: string,
  time: string,
  surname: string,
  year: string,
  subject: string,
  room: string,
  note: string,
  place: string,
) {
  return { date, time, surname, year, subject, room, note, place };
}

const rows = [
  createData(
    "17.11.2023",
    "10.00-10.45",
    "Кунашко",
    "7 А",
    "Использование условий",
    "318",
    "1-й зачётный",
    "Гимназия №192",
  ),
  createData(
    "20.11.2023",
    "13.00-13.45",
    "Кунашко",
    "9 Г",
    "Стандартные процедуры и функции для работы со строковыми величинами",
    "318",
    "2-й зачётный",
    "Гимназия №192",
  ),
  createData(
    "24.11.2023",
    "10.00-10.45",
    "Кунашко",
    "7 А",
    "Использование логических операций для построения поисковых запросов в Интернете",
    "318",
    "3-й зачётный",
    "Гимназия №192",
  ),
  createData(
    "27.11.2023",
    "13.00-13.45",
    "Кунашко",
    "9 Г",
    "Составление алгоритмов обработки строковых величин",
    "318",
    "4-й зачётный",
    "Гимназия №192",
  ),
  createData(
    "01.12.2023",
    "10.00-10.45",
    "Кунашко",
    "7 А",
    "Алгоритмы и исполнители",
    "318",
    "5-й зачётный",
    "Гимназия №192",
  ),
  createData(
    "08.12.2023",
    "10.00-10.45",
    "Кунашко",
    "7 А",
    "Исполнитель Робот",
    "318",
    "6-й зачётный",
    "Гимназия №192",
  ),
];

const CreditClassCard = () => {
  return (
    <Card variant="outlined" sx={{ width: "100%" }}>
      <CardContent>
        <Typography align="center" variant="h6">
          Зачетные уроки
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Дата</TableCell>
              <TableCell>Время</TableCell>
              <TableCell>Фамилия студента</TableCell>
              <TableCell>Класс</TableCell>
              <TableCell>Тема урока</TableCell>
              <TableCell>Кабинет</TableCell>
              <TableCell>Примечание</TableCell>
              <TableCell>СШ</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.date}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.time}</TableCell>
                <TableCell>{row.surname}</TableCell>
                <TableCell>{row.year}</TableCell>
                <TableCell>{row.subject}</TableCell>
                <TableCell>{row.room}</TableCell>
                <TableCell>{row.note}</TableCell>
                <TableCell>{row.place}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default CreditClassCard;
