import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
import { useGetSingleCharacterQuery } from "../Shop/Api";
import Spinner from "./spinner/spinner";

export default function SingleCard() {
  const { id } = useParams();

  const { data } = useGetSingleCharacterQuery(Number(id));

  return !data ? (
    <Spinner />
  ) : (
    <Card sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        sx={{ width: 300 }}
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
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            location: {data?.location?.name}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
