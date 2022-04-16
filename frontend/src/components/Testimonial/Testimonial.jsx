import React from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const PORTRAIT_SIZE = "150px";

/**
 *
 * @param {{ portrait: string, name: string, quote: string }} props
 * @returns
 */
function Testimonial(props) {
    const classes = makeStyles((theme) => ({
        container: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        },
        portrait: {
            backgroundImage: `url(${props.portrait})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: PORTRAIT_SIZE,
            width: PORTRAIT_SIZE,
            borderRadius: "50%",
        },
    }))();

    return (
        <div className={classes.container}>
            <div className={classes.portrait} />
            <Typography
                variant="h4"
                fontWeight={500}
                sx={{ marginTop: "0.5rem" }}
            >
                {props.name}
            </Typography>
            <Typography
                variant="body2"
                sx={{
                    marginTop: "0.3rem",
                    width: "300px",
                    textAlign: "center",
                }}
            >
                {props.quote}
            </Typography>
        </div>
    );
}

export default Testimonial;
