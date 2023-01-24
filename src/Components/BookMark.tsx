import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { useAppDispatch, useAppSelector } from "./../Shop/hook";
import { resetBookmark } from "../Shop/BookMark";
import { selectBookMarkArray } from "./../Shop/BookMark";
import BookMarkCard from "./BookMarkCard";
import { Grid } from "@mui/material";

type BookMarkProps = {
  open: boolean;
  onClose: () => void;
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function BookMark({ open, onClose }: BookMarkProps) {
  const dispatch: any = useAppDispatch();
  const BookMarkArray = useAppSelector(selectBookMarkArray);

  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={onClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Favorites
            </Typography>
            <Button
              autoFocus
              color="inherit"
              onClick={() => dispatch(resetBookmark())}
            >
              reset
            </Button>
            <Button autoFocus color="inherit" onClick={onClose}>
              close
            </Button>
          </Toolbar>
        </AppBar>
        <Grid container spacing={4} sx={{ p: 4 }}>
          {BookMarkArray?.map((bookmark) => (
            <Grid item key={bookmark.id} xs={12} sm={6} md={4} lg={3}>
              <BookMarkCard data={bookmark} />
            </Grid>
          ))}
        </Grid>
      </Dialog>
    </div>
  );
}
