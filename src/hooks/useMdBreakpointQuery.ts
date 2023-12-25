import { useMediaQuery, useTheme } from "@mui/material";

const useMdBreakpointQuery = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return matches;
};

export default useMdBreakpointQuery;
