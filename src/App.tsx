import {
  AppBar,
  Box,
  // Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import ScheduleCard from "./components/ScheduleCard.tsx";
import MainInfoCard from "./components/MainInfoCard.tsx";
import TargetCard from "./components/TargetCard.tsx";
import useMdBreakpointQuery from "./hooks/useMdBreakpointQuery.ts";
import CreditClassCard from "./components/CreditClassCard.tsx";
import GradeComparisonCard from "./components/GradeComparisonCard.tsx";
import SelfAnalysisCard from "./components/SelfAnalysisCard.tsx";
import ReportCard from "./components/ReportCard.tsx";
import OutlinePlanCard from "./components/OutlinePlanCard.tsx";

function App() {
  const matches = useMdBreakpointQuery();

  return (
    <Box>
      <AppBar position="sticky" elevation={0}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Гимназия №192
          </Typography>
          {/*<Button color="inherit">Login</Button>*/}
        </Toolbar>
      </AppBar>
      <Container
        sx={{ my: 3, display: "flex", flexDirection: "column", gap: 3 }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flex: matches ? 1 : 2,
            }}
          >
            <ScheduleCard />
          </Box>
          <Box
            sx={{
              display: "flex",
              flex: matches ? 2 : 3,
              gap: 3,
              flexDirection: matches ? "row" : "column",
            }}
          >
            <MainInfoCard />
            <TargetCard />
          </Box>
        </Box>
        <CreditClassCard />
        <GradeComparisonCard />
        <SelfAnalysisCard />
        <ReportCard />
        <OutlinePlanCard />
      </Container>
    </Box>
  );
}

export default App;
