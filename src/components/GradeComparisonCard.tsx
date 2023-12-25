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

function createData(name: string, info: string, math: string, physics: string) {
  return { name, info, math, physics };
}

const rows = [
  createData("Порфёнова Елизавета", "9", "7", "7"),
  createData("Последович Ева", "3", "4", "7"),
  createData("Пусачева Полина", "9", "6", "7"),
  createData("Рудковский Павел", "7", "3", "4"),
  createData("Скопец Надежда", "9", "8", "9"),
  createData("Струк Кирилл", "6", "3", "5"),
  createData("Тимохович Марк", "8", "4", "7"),
  createData("Шкленкова Виктория", "9", "6", "8"),
  createData("Шимусик Артем", "5", "3", "4"),
  createData("Ширяев Артем", "7", "6", "7"),
  createData("Щуко Никита", "7", "3", "6"),
  createData("Янушевич Мария", "4", "3", "3"),
];

const GradeComparisonCard = () => {
  return (
    <Card variant="outlined" sx={{ width: "100%" }}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Typography align="center" variant="h6">
          Сравнение успеваемости учащихся
        </Typography>
        <Typography>
          <b>7 «Б» класс</b>, в классе 25 человек.
        </Typography>
        <Typography>
          Средний балл по информатике 6,9. Средний балл по математике 4,7, по
          физике 6,2. Учащиеся лучше учатся на уроках информатики. Учащиеся с
          высокими результатами по трем предметам: Порфёнова Елизавета, Скопец
          Надежда, Шкленкова Виктория.
        </Typography>
        <Typography>
          Ребята замотивированы, когда преподносят интересно материал. Провалы в
          информатике у учащихся только тогда, когда они отвлекаются на уроках,
          а этот класс довольно легко может отвлечься на все что угодно.
        </Typography>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>ФИО</TableCell>
              <TableCell>Информатика 1 четверть</TableCell>
              <TableCell>Математика 1 четверть</TableCell>
              <TableCell>Физика 1 четверть</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.info}</TableCell>
                <TableCell>{row.math}</TableCell>
                <TableCell>{row.physics}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default GradeComparisonCard;
