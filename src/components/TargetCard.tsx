import { Card, CardContent, Typography } from "@mui/material";

const TargetCard = () => {
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
          Сведения
        </Typography>
        <Typography>
          <b>Адрес</b> – ул. Космонавтов 13/2, Минск
        </Typography>
        <Typography>
          <b>Телефон</b> – +375 (17) 300-95-29
        </Typography>
        <Typography>
          <b>Директор</b> – Познякова Ирина Владимировна
        </Typography>
        <Typography align="center" variant="h6">
          Цель гимназии
        </Typography>
        <Typography>
          Основная цель работы гимназии: реализация государственных
          образовательных стандартов общего среднего образования, формирование
          образованной, социально, духовно и морально богатой, творческой
          личности; воспитание гражданина Республики Беларусь; воспитание
          уважения к правам и свободам человека, любви к Родине, семье; привитие
          навыков здорового образа жизни.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TargetCard;
