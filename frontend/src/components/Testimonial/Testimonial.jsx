import React from "react";
import { Typography, Card } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { motion } from "framer-motion";

const PORTRAIT_SIZE = "150px";
const PORTRAIT_ANIMATION = {
    initial: { height: "0px", width: "0px" },
    animate: {
        height: PORTRAIT_SIZE,
        width: PORTRAIT_SIZE,
        rotate: 360,
        transition: {
            duration: 0.5,
            delay: 0.3,
        },
    },
    exit: {
        height: "0px",
        width: "0px",
        rotate: 0,
    },
};

const TEXT_ANIMATION = {
    initial: {
        x: "100px",
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        willChange: "opacity",
        transition: {
            duration: 0.5,
            delay: 0.2,
        },
    },
    exit: {
        x: "-100px",
        opacity: 0,
    },
};
const CHILD_TEXT_ANIMATION = {
    initial: {
        x: "100px",
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        willChange: "opacity",
        transition: {
            duration: 0.7,
            delay: 0.4,
        },
    },
    exit: {
        x: "-100px",
        opacity: 0,
    },
};

const TYPOGRAPHY_COLOUR = "245";

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
            padding: theme.spacing(2),
        },
        portraitContainer: {
            height: PORTRAIT_SIZE,
            width: PORTRAIT_SIZE,
        },
        portrait: {
            backgroundImage: `url(${props.portrait})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "50%",
            height: PORTRAIT_SIZE,
            width: PORTRAIT_SIZE,
        },
    }))();

    return (
        <Card
            className={classes.container}
            sx={{
                borderRadius: "16px",
                background: "rgba(255, 255, 255, 0.2)",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(5px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
        >
            <div className={classes.portraitContainer}>
                <motion.div
                    className={classes.portrait}
                    variants={PORTRAIT_ANIMATION}
                    viewport={{
                        once: true,
                        margin: "150px 0px 0px 0px",
                    }}
                    initial="initial"
                    whileInView="animate"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                />
            </div>
            <motion.div
                variants={TEXT_ANIMATION}
                viewport={{ once: true }}
                initial="initial"
                whileInView="animate"
                exit="exit"
                transition={{ duration: 0.5 }}
            >
                <Typography
                    variant="h4"
                    fontWeight={500}
                    sx={{
                        marginTop: "0.5rem",
                        color: `rgb(${TYPOGRAPHY_COLOUR}, ${TYPOGRAPHY_COLOUR}, ${TYPOGRAPHY_COLOUR})`,
                    }}
                >
                    {props.name}
                </Typography>
            </motion.div>
            <motion.div
                variants={CHILD_TEXT_ANIMATION}
                viewport={{ once: true }}
                initial="initial"
                whileInView="animate"
                exit="exit"
                transition={{ duration: 0.5 }}
            >
                <Typography
                    variant="body2"
                    fontSize="0.9rem"
                    sx={{
                        marginTop: "0.3rem",
                        width: "300px",
                        textAlign: "center",
                        color: `rgb(${TYPOGRAPHY_COLOUR}, ${TYPOGRAPHY_COLOUR}, ${TYPOGRAPHY_COLOUR})`,
                    }}
                >
                    {props.quote}
                </Typography>
            </motion.div>
        </Card>
    );
}

export default Testimonial;
