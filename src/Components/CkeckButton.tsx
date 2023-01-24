import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Typography } from "@mui/material";

type dataType = {
  id: number;
  label: string;
  value: string;
  checked: boolean;
};

type checkType = {
  name: string;
  data: dataType[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function CheckButtonsGroup({ name, data, onChange }: checkType) {
  return (
    <>
      <Typography variant="h6">{name}</Typography>
      <FormGroup sx={{ width: 1 }}>
        {data.map((item) => {
          return (
            <FormControlLabel
              key={item.id}
              control={
                <Checkbox
                  value={item.value}
                  onChange={onChange}
                  checked={item.checked}
                />
              }
              label={item.label}
            />
          );
        })}
      </FormGroup>
    </>
  );
}

export const statusInfo = [
  { id: 1, value: "alive", label: "Alive", checked: false },
  { id: 2, value: "dead", label: "Dead", checked: false },
  { id: 3, value: "unknown", label: "Unknown", checked: false },
];

export const genderInfo = [
  { id: 1, value: "female", label: "Female", checked: false },
  { id: 2, value: "male", label: "Male", checked: false },
  {
    id: 3,
    value: "genderless",
    label: "Genderless",
    checked: false,
  },
  { id: 4, value: "unknown", label: "Unknown", checked: false },
];
