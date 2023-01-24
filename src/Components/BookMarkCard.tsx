import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Spinner from "./spinner/spinner";
import { singleCharacter } from "../Shop/Api";

interface dataProps {
  data: singleCharacter | any;
}

const BookMarkList = ({ data }: dataProps) => {
  return !data ? (
    <Spinner />
  ) : (
    <Card sx={{ display: "flex", width: 300 }}>
      <CardMedia
        component="img"
        sx={{ width: 150, height: "fit" }}
        image={data?.image}
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {data?.name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            status: {data?.status}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            species: {data?.species}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            gender: {data?.gender}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default BookMarkList;
