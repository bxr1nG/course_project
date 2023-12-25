import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import school from "../assets/school.jpg";

const MainInfoCard = () => {
  return (
    <Card
      variant="outlined"
      sx={{
        width: "100%",
      }}
    >
      <Box>
        <CardMedia component="img" height="300" image={school} />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography>
            <b>Год рождения</b> - 1989 – открытие школы – новостройки № 192 с
            музыкально-хоровым, хореографическим, художественным и театральным
            уклонами в микрорайоне «Юго-Запад 5»
          </Typography>
          <Typography>
            <b>День рождения</b> – 11 ноября 1989 года
          </Typography>
          <Typography>
            <b>2001 год</b> – Школа № 192 преобразована в гимназию № 192
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default MainInfoCard;
