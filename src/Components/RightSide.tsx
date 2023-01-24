import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import MediaCard from "./Card";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import {
  infoResult,
  singleCharacter,
  useGetRickByPaginationQuery,
} from "../Shop/Api";
import Spinner from "./spinner/spinner";
import { useSearchParams } from "react-router-dom";

type ItemType = {
  id: number;
  name: string;
  image: string;
  status: string;
  itemList: singleCharacter;
};

const RightSide = () => {
  const [myParams, setMyParams]: [URLSearchParams, Function] =
    useSearchParams();
  let name = myParams.get("name")?.toString();
  let status = myParams.get("status")?.toString();
  let gender = myParams.get("gender")?.toString();
  const paginationCasher = Number(myParams.get("page"));
  const [page, setPage] = useState(paginationCasher ? paginationCasher : 1);
  const [currentData, setCurrentData] = useState<singleCharacter[]>();
  const [paginationInfo, setPaginationInfo] = useState<infoResult>();

  const myUrl = {
    page: page.toString(),
    ...(status ? { status } : {}),
    ...(name ? { name } : {}),
    ...(gender ? { gender } : {}),
  };

  const newParams = new URLSearchParams([...Object.entries(myUrl)]).toString();

  const { data: pageInfo, isLoading } = useGetRickByPaginationQuery(newParams);

  useEffect(() => {
    setCurrentData(pageInfo?.results);
    setPaginationInfo(pageInfo?.info);
  }, [pageInfo]);

  const handlePageChange = (pageChanger: number) => {
    setMyParams({
      page: pageChanger,
      ...(status ? { status } : {}),
      ...(name ? { name } : {}),
      ...(gender ? { gender } : {}),
    });
    setPage(pageChanger);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <Grid
        container
        maxWidth="95%"
        columnSpacing="20"
        rowSpacing="20"
        margin="10px"
      >
        {isLoading ? (
          <Spinner />
        ) : (
          currentData?.map((item) => (
            <Grid item lg={3} sm={6} xs={10} key={item.id}>
              <MediaCard
                name={item.name}
                status={item.status}
                image={item.image}
                id={item.id}
                itemList={item}
              />
            </Grid>
          ))
        )}
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
          marginBottom: "22px",
        }}
      >
        <Stack spacing={2}>
          {paginationInfo ? (
            <Pagination
              count={paginationInfo?.pages}
              page={Number(page)}
              onChange={(
                event: React.ChangeEvent<unknown>,
                pageChanger: number
              ) => handlePageChange(pageChanger)}
              color="primary"
            />
          ) : null}
        </Stack>
      </Box>
    </Box>
  );
};

export default RightSide;
