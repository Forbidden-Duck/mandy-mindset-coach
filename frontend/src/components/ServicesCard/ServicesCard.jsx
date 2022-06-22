import React, { useState, useEffect, useRef } from "react";
import {
    Card,
    CardContent,
    CardActions,
    Typography,
    Button,
    Skeleton,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { motion } from "framer-motion";

const slideLeftOpacity = {
    initial: { x: "100px", opacity: 0 },
    animate: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: 0.5 },
    },
    exit: { x: "100px", opacity: 0 },
};

/**
 *
 * @param {{ title: string, description: string, image: string, setBookOpen: function, setInquiryOpen: function, setSelectedService: function, isLoading?: boolean }} props
 */
function ServicesCard(props) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [window]);

    const classes = makeStyles((theme) => ({
        cardImageContainer: {
            display: "flex",
            justifyContent: "center",
        },
        cardImage: {
            backgroundImage: `url(${props.image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: `${windowWidth}px`,
            height: "180px",
            zIndex: 1,
        },
    }))();

    const handleBook = () => {
        props.setBookOpen(true);
        props.setSelectedService(props.title);
    };

    const handleInquiry = () => {
        props.setInquiryOpen(true);
        props.setSelectedService(props.title);
    };

    return (
        <Card sx={{ maxWidth: "400px" }}>
            <div className={classes.cardImageContainer}>
                {props.isLoading ? (
                    <Skeleton
                        variant="rect"
                        width={`${windowWidth}px`}
                        height="180px"
                        animation="wave"
                    />
                ) : (
                    <motion.div
                        className={classes.cardImage}
                        initial={{ backgroundPositionX: "400px", opacity: 0 }}
                        whileInView={{ backgroundPositionX: "0px", opacity: 1 }}
                        exit={{ backgroundPositionX: "-400px", opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, margin: "-100px 0px" }}
                    />
                )}
            </div>
            <CardContent>
                {props.isLoading ? (
                    <Typography variant="h5">
                        <Skeleton animation="wave" />
                    </Typography>
                ) : (
                    <motion.div
                        initial={{ y: "-100px", opacity: 0 }}
                        whileInView={{
                            y: 0,
                            transition: {
                                type: "spring",
                                delay: 0.5,
                                duration: 1,
                                bounce: 0.6,
                            },
                            opacity: 1,
                        }}
                        exit={{ y: "-100px" }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, margin: "-150px 0px" }}
                    >
                        <Typography variant="h5" fontWeight={500}>
                            {props.title}
                        </Typography>
                    </motion.div>
                )}
                {props.isLoading ? (
                    <Skeleton
                        variant="rectangular"
                        height="110px"
                        animation="wave"
                    />
                ) : (
                    <motion.div
                        variants={slideLeftOpacity}
                        initial="initial"
                        whileInView="animate"
                        exit="exit"
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <Typography variant="body1" fontSize="0.93rem">
                            {props.description}
                        </Typography>
                    </motion.div>
                )}
            </CardContent>
            <CardActions sx={{ paddingTop: "0.5rem" }}>
                {props.isLoading ? (
                    <>
                        <Skeleton
                            variant="rectangular"
                            width="60px"
                            height="31px"
                            animation="wave"
                        />
                        <Skeleton
                            variant="rectangular"
                            width="60px"
                            height="31px"
                            animation="wave"
                        />
                    </>
                ) : (
                    <>
                        <motion.div
                            variants={slideLeftOpacity}
                            initial="initial"
                            whileInView="animate"
                            exit="exit"
                            whileHover={{
                                scale: 1.05,
                                transition: {
                                    duration: 0.2,
                                },
                            }}
                            whileTap={{
                                scale: 0.95,
                                transition: {
                                    duration: 0.1,
                                },
                            }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <Button
                                variant="contained"
                                size="small"
                                onClick={handleBook}
                                sx={{
                                    color: "white",
                                    background: (theme) =>
                                        theme.palette.primary.light,
                                    "&:hover": {
                                        background: (theme) =>
                                            theme.palette.primary.main,
                                    },
                                }}
                            >
                                Book
                            </Button>
                        </motion.div>
                        <motion.div
                            variants={slideLeftOpacity}
                            initial="initial"
                            whileInView="animate"
                            exit="exit"
                            whileHover={{
                                scale: 1.05,
                                transition: {
                                    duration: 0.2,
                                },
                            }}
                            whileTap={{
                                scale: 0.95,
                                transition: {
                                    duration: 0.1,
                                },
                            }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <Button
                                variant="contained"
                                size="small"
                                color="secondary"
                                onClick={handleInquiry}
                                sx={{ color: "white" }}
                            >
                                Inquiry
                            </Button>
                        </motion.div>
                    </>
                )}
            </CardActions>
        </Card>
    );
}

export default ServicesCard;
