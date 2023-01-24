import { Outlet } from "react-router-dom";
import LeftSide from "./LeftSide";
import Grid from "@mui/material/Grid";

const Layout = () => {
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item lg={3} xs={4}>
          <LeftSide />
        </Grid>
        <Grid item lg={9} xs={8}>
          <Outlet />
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout;
