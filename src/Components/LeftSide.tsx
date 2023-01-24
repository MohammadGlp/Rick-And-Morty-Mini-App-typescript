import * as React from "react";
import { Grid, Box, Typography, Badge } from "@mui/material";
import { BsFillBookmarkFill } from "react-icons/bs";
import IconButton from "@mui/material/IconButton";
import CheckButtonsGroup, { genderInfo, statusInfo } from "./CkeckButton";
import Search from "./Search";
import BookMark from "./BookMark";
import { useSearchParams } from "react-router-dom";
import { useAppSelector } from "../Shop/hook";
import {
  BookmarkOpen,
  selectBookMarkArray,
  selectBookMarkOpen,
} from "./../Shop/BookMark";
import { useAppDispatch } from "./../Shop/hook";

const LeftSide = () => {
  const total = useAppSelector(selectBookMarkArray);
  const isBookmarkOpen = useAppSelector(selectBookMarkOpen);
  const dispatch: any = useAppDispatch();
  const [myParams, setMyParams]: [URLSearchParams, Function] =
    useSearchParams();
  const [search, setSearch] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [gender, setGender] = React.useState("");

  const [statusData, setStatusData] = React.useState(statusInfo);
  const [genderData, setGenderData] = React.useState(genderInfo);
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    setMyParams({
      ...(event.target.value ? { name: event.target.value } : {}),
      ...(status ? { status } : {}),
      ...(gender ? { gender } : {}),
    });
  };

  const handleStatusChanger = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setStatusData(
        statusData.map((item) =>
          item.value === event.target.value
            ? { ...item, checked: true }
            : { ...item, checked: false }
        )
      );
      setStatus(event.target.value);
      setMyParams({
        ...(search ? { search } : {}),
        ...(event.target.value ? { status: event.target.value } : {}),
        ...(gender ? { gender } : {}),
      });
    } else {
      setStatusData(
        statusData.map((item) =>
          item.value === event.target.value ? { ...item, checked: false } : item
        )
      );
      setStatus("");
      setMyParams({
        ...(search ? { search } : {}),
        ...(gender ? { gender } : {}),
      });
    }
  };
  const handleGenderChanger = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setGenderData(
        genderData.map((item) =>
          item.value === event.target.value
            ? { ...item, checked: true }
            : { ...item, checked: false }
        )
      );
      setGender(event.target.value);
      setMyParams({
        ...(search ? { search } : {}),
        ...(status ? { status } : {}),
        ...(event.target.value ? { gender: event.target.value } : {}),
      });
    } else {
      setGenderData(
        genderData.map((item) =>
          item.value === event.target.value ? { ...item, checked: false } : item
        )
      );
      setGender("");
      setMyParams({
        ...(search ? { search } : {}),
        ...(status ? { status } : {}),
      });
    }
  };
  return (
    <>
      <Grid
        // display="none"
        item
        xs={12}
        sx={{
          bgcolor: "white",
          boxShadow: "1px 1px 10px #ccd1d9",
          width: { xs: "37%", sm: "36%", md: "35%", lg: "26%" },
        }}
        height="101%"
        position="fixed"
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 4,
            py: 4,
            borderBottom: 1,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "black",
              fontSize: { xs: 13, sm: 18, md: 24, lg: 30 },
            }}
          >
            Rick and Morty
          </Typography>

          <Badge
            badgeContent={total?.length}
            color="success"
            max={10}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <IconButton
              size="medium"
              color="primary"
              onClick={() => dispatch(BookmarkOpen(!isBookmarkOpen))}
              disabled={total?.length === 0 ? true : false}
            >
              <BsFillBookmarkFill />
            </IconButton>
          </Badge>
        </Box>
        <Box>
          <Search value={search} onChange={handleSearch} />
        </Box>
        <Box sx={{ m: 4 }}>
          <CheckButtonsGroup
            data={statusData}
            name="Status"
            onChange={handleStatusChanger}
          />
        </Box>
        <Box sx={{ m: 4 }}>
          <CheckButtonsGroup
            data={genderData}
            name="Gender"
            onChange={handleGenderChanger}
          />
        </Box>
        <BookMark
          open={isBookmarkOpen}
          onClose={() => dispatch(BookmarkOpen(!isBookmarkOpen))}
        />
      </Grid>
    </>
  );
};

export default LeftSide;
