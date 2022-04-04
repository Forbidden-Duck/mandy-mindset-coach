import React from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { motion } from "framer-motion";
import hexToRGB from "../../utils/hexToRGB";
import fadeInOut from "../../animations/fadeInOut";

function Home() {
    const classes = makeStyles((theme) => ({
        container: {
            display: "flex",
            flexDirection: "column",
            width: "100%",
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
            height: "500px",
            width: "326px",
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
    }))();

    return (
        <motion.div className={classes.container} {...fadeInOut()}>
            <div className={classes.group}>
                <div className={classes.portraitContainer}>
                    <div className={classes.portrait} />
                </div>
                <div className={classes.contentContainer}>
                    <div style={{ maxWidth: "1000px", margin: "0rem 2rem" }}>
                        <Typography variant="h3" fontFamily="Kaushan Script">
                            Lorem ipsum dolor sit amet.
                        </Typography>
                        <Typography variant="body2" fontSize="1rem">
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
