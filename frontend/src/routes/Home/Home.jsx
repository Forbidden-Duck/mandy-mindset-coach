import React from "react";
import { Typography, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { motion } from "framer-motion";
import hexToRGB from "../../utils/hexToRGB";
import fadeInOut from "../../animations/fadeInOut";

const IMAGE_RATIO = 1.533742331288344;
const IMAGE_HEIGHT = 600;

function Home() {
    const classes = makeStyles((theme) => ({
        container: {
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
        },
        group: {
            display: "flex",
        },
        section: {
            display: "flex",
            justifyContent: "center",
            width: "100%",
        },
        portrait: {
            backgroundImage: "url(/resources/mandy-portrait.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            height: IMAGE_HEIGHT,
            width: IMAGE_HEIGHT / IMAGE_RATIO,
            zIndex: -1,
        },
        portraitContainer: {
            display: "flex",
            background: `rgba(${Object.values(
                hexToRGB(theme.palette.primary.dark)
            )}, 0.35)`,
        },
        contentContainer: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: `rgba(${Object.values(
                hexToRGB(theme.palette.secondary.dark)
            )}, 0.3)`,
            width: "100%",
        },
        "@media (max-width: 976px)": {
            portrait: {
                height: 400,
                width: 400 / IMAGE_RATIO,
            },
        },
        "@media (max-width: 845px)": {
            portrait: {
                height: 250,
                width: 250 / IMAGE_RATIO,
            },
        },
    }))();

    return (
        <motion.div className={classes.container} {...fadeInOut()}>
            <div className={classes.group}>
                <div className={classes.portraitContainer}>
                    <div className={classes.portrait} />
                </div>
                <div className={classes.contentContainer}>
                    <div style={{ maxWidth: "1000px", margin: "0rem 2rem" }}>
                        <Typography
                            variant="h3"
                            fontFamily="Kaushan Script"
                            fontSize="clamp(0rem, 5vw, 3rem)"
                        >
                            Lorem ipsum dolor sit amet.
                        </Typography>
                        <Typography
                            variant="body2"
                            fontSize="clamp(0rem, 2.5vw, 1rem)"
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dolor eveniet similique totam repellendus id
                            ut minima rerum voluptatem atque sit?
                        </Typography>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Home;
