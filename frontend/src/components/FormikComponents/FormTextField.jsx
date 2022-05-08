import React from "react";
import { TextField } from "@mui/material";
import { useField } from "formik";

/**
 *
 * @param {import("@mui/material").TextFieldProps} props
 */
function FormTextField(props) {
    const { name, ...rest } = props;
    const [field, meta] = useField({ name, type: "text" });

    return (
        <TextField
            {...field}
            {...rest}
            error={!!meta.error}
            helperText={meta.error}
        />
    );
}

export default FormTextField;
