import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "./../Shop/hook";
import { addAndRemBookmark } from "../Shop/BookMark";
import { singleCharacter } from "../Shop/Api";

export type CardType = {
  name: string;
  image: string;
  status: string;
  id: number;
  itemList: singleCharacter | any;
};

const MediaCard = ({ name, image, status, id, itemList }: CardType) => {
  const navigate = useNavigate();
  const dispatch: any | number = useAppDispatch();

  const addAndRemove = () => dispatch(addAndRemBookmark(itemList));

  return (
    <Card
      sx={{
        maxWidth: 345,
        // height: 450,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardActionArea onClick={() => navigate(`/Rick/${id}`)}>
        <CardMedia
          sx={{ height: 250, objectFit: "contain", objectPosition: "50% 50%" }}
          image={image}
          title="green iguana"
        />
      </CardActionArea>
      <Box
        sx={{
          margin: "0",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardContent sx={{ width: 300 }}>
          <Typography gutterBottom variant="h5" component="div">
            {name.substring(0, 16) + "..."}
          </Typography>
        </CardContent>
        <Box
          sx={{
            margin: "0",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <CardActions onClick={addAndRemove}>
            <Button size="small">Bookmark</Button>
          </CardActions>
          <CardContent>
            <Typography
              variant="overline"
              fontSize="13px"
              fontWeight="bold"
              display="block"
              paddingTop="8px"
              color={
                status == "Alive" ? "green" : status == "Dead" ? "red" : "black"
              }
            >
              {status}
            </Typography>
          </CardContent>
        </Box>
      </Box>
    </Card>
  );
};

export default MediaCard;
