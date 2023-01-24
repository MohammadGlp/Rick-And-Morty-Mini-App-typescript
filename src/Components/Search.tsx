import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

type searchType = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Search = ({ value, onChange }: searchType) => {
  return (
    <Stack
      spacing={2}
      sx={{
        width: { xs: "50%", sm: "70%", md: "80%", lg: "70%" },
        marginLeft: 4,
        marginTop: "40px",
        backgroundColor: "white",
      }}
    >
      <TextField
        id="standard-multiline-flexible"
        label="Name"
        value={value}
        onChange={onChange}
        multiline
        maxRows={4}
        variant="standard"
      />
    </Stack>
  );
};

export default Search;
