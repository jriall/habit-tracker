import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { Controller, useForm } from "react-hook-form";

import { HabitInterval } from "../../../common/constants/habits";

interface CreateHabitForm {
  name: string;
  description: string;
  interval: HabitInterval;
  frequency: number;
}

export const CreateHabit: React.FC = () => {
  const { handleSubmit, control, getValues } = useForm<CreateHabitForm>();
  const router = useRouter();

  const onSubmit = (data: CreateHabitForm) => {
    console.log(data);
  };

  const onError = () => {};

  return (
    <>
      <h1>Create habit</h1>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <FormControl fullWidth>
                <TextField
                  label="Name"
                  variant="filled"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                  type="text"
                />
              </FormControl>
            )}
            rules={{ required: "Name is required" }}
          />
        </div>
        <div>
          <Controller
            name="description"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <FormControl fullWidth>
                <TextField
                  label="Description"
                  variant="filled"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                  type="text"
                />
              </FormControl>
            )}
            rules={{ required: "Description is required" }}
          />
        </div>
        <div>
          <Controller
            name="frequency"
            control={control}
            defaultValue={1}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <FormControl fullWidth>
                <TextField
                  label="Frequency"
                  variant="filled"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                  type="number"
                />
              </FormControl>
            )}
            rules={{
              required: "Frequency is required",
              // TODO(jriall): Validate the number is in a reasonable range.
            }}
          />
        </div>
        <div>
          <Controller
            name="interval"
            control={control}
            defaultValue={HabitInterval.DAY}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <FormControl fullWidth>
                <InputLabel id="interval-select">Interval</InputLabel>
                <Select
                  label="Interval"
                  id="interval-select"
                  variant="filled"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                >
                  {Object.values(HabitInterval).map((interval) => (
                    <MenuItem value={interval} key={interval}>
                      {interval}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
            rules={{ required: "Interval is required" }}
          />
        </div>
        <div>
          <Button
            variant="contained"
            onClick={() => void router.back()}
            type="button"
          >
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Create
          </Button>
        </div>
      </form>
    </>
  );
};
