import React, { useState, useEffect, useRef } from "react";
import { Typography, useMediaQuery, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { motion } from "framer-motion";
import Testimonial from "../../components/Testimonial/Testimonial";
import hexToRGB from "../../utils/hexToRGB";

import fadeInOut from "../../animations/fadeInOut";
import slideLeft from "../../animations/slideLeft";

const IMAGE_RATIO = 1.533742331288344;
const IMAGE_HEIGHT = 600;

function Home() {
    const containerRef = useRef(null);
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        setContainerSize({
            width: containerRef.current?.offsetWidth,
            height: containerRef.current?.offsetHeight,
        });
    }, []);

    useEffect(() => {
        const _containerRef = containerRef.current;
        window.addEventListener("resize", () => {
            setContainerSize({
                width: _containerRef.offsetWidth,
                height: _containerRef.offsetHeight,
            });
        });
        return () => {
            window.removeEventListener("resize", () => {
                setContainerSize({
                    width: _containerRef.offsetWidth,
                    height: _containerRef.offsetHeight,
                });
            });
        };
    }, []);

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
        textContainer: {
            maxWidth: "1000px",
            margin: "0rem 2rem",
        },
        testimonialContainer: {
            position: "relative",
            height: "100%",
            width: "100%",
            marginBottom: "4.5rem",
        },
        testimonialBackground: {
            position: "absolute",
            backgroundImage:
                "url(https://cdn.pixabay.com/photo/2017/03/19/01/43/living-room-2155376_960_720.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "100%",
            width: "100%",
            paddingTop: "3rem",
            paddingBottom: "1.5rem",
            opacity: 0.2,
        },
        testimonialColour: {
            position: "absolute",
            backgroundColor: `rgba(${Object.values(
                hexToRGB(theme.palette.secondary.dark)
            )}, 0.35)`,
            height: "100%",
            width: "100%",
            paddingTop: "3rem",
            paddingBottom: "1.5rem",
            opacity: 0.4,
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
        "@media (max-width: 524px)": {
            container: {
                position: "relative",
            },
            group: {
                display: "flex",
                flexDirection: "column",
            },
            portrait: {
                height: containerSize.width * IMAGE_RATIO,
                width: containerSize.width,
            },
            portraitContainer: {
                position: "absolute",
            },
            contentContainer: {
                background: "unset",
                color: "white",
                height: containerSize.width * IMAGE_RATIO,
                zIndex: 1,
            },
            textContainer: {
                padding: "1rem",
                background: `rgba(${Object.values(
                    hexToRGB(theme.palette.secondary.dark)
                )}, 0.5)`,
            },
        },
    }))();

    const isMobileView = useMediaQuery("(max-width: 524px)");

    return (
        <motion.div
            ref={containerRef}
            className={classes.container}
            {...fadeInOut()}
            transition={{ duration: 0.5 }}
        >
            <div className={classes.group}>
                <div className={classes.portraitContainer}>
                    <div className={classes.portrait} />
                </div>
                <div className={classes.contentContainer}>
                    {isMobileView ? (
                        <motion.div
                            {...slideLeft(false)}
                            transition={{ duration: 0.5 }}
                        >
                            <div className={classes.textContainer}>
                                <Typography
                                    variant="h3"
                                    fontFamily="Kaushan Script"
                                    fontSize="clamp(0rem, 6vw, 3rem)"
                                >
                                    Lorem ipsum dolor sit amet.
                                </Typography>
                                <Typography
                                    variant="body2"
                                    fontSize="clamp(0rem, 3vw, 1rem)"
                                >
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Dolor eveniet similique
                                    totam repellendus id ut minima rerum
                                    voluptatem atque sit?
                                </Typography>
                            </div>
                        </motion.div>
                    ) : (
                        <div className={classes.textContainer}>
                            <motion.div
                                {...slideLeft(false, true, "vw")}
                                animate={{
                                    x: 0,
                                    transition: {
                                        x: {
                                            duration: 0.5,
                                            delay: 0.3,
                                        },
                                    },
                                }}
                                transition={{ duration: 0.5 }}
                            >
                                <Typography
                                    variant="h3"
                                    fontFamily="Kaushan Script"
                                    fontSize="clamp(0rem, 6vw, 3rem)"
                                >
                                    Lorem ipsum dolor sit amet.
                                </Typography>
                            </motion.div>
                            <motion.div
                                {...slideLeft(false, true, "vw")}
                                animate={{
                                    x: 0,
                                    transition: {
                                        x: {
                                            duration: 0.5,
                                            delay: 0.6,
                                        },
                                    },
                                }}
                                transition={{ duration: 0.5 }}
                            >
                                <Typography
                                    variant="body2"
                                    fontSize="clamp(0rem, 3vw, 1rem)"
                                >
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Dolor eveniet similique
                                    totam repellendus id ut minima rerum
                                    voluptatem atque sit?
                                </Typography>
                            </motion.div>
                        </div>
                    )}
                </div>
            </div>
            <div className={classes.testimonialContainer}>
                <div className={classes.testimonialBackground} />
                <div className={classes.testimonialColour} />
                <Grid
                    container
                    rowSpacing={5}
                    columnSpacing={3}
                    justifyContent="space-evenly"
                    marginTop="2rem"
                >
                    <Grid item>
                        <Testimonial
                            name="Elizabeth"
                            quote="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis,
                            alias cumque tempora iusto reprehenderit voluptate quo
                            laudantium itaque autem debitis?"
                            portrait="https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_960_720.jpg"
                        />
                    </Grid>
                    <Grid item>
                        <Testimonial
                            name="Elizabeth"
                            quote="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis,
                            alias cumque tempora iusto reprehenderit voluptate quo
                            laudantium itaque autem debitis?"
                            portrait="https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_960_720.jpg"
                        />
                    </Grid>
                    <Grid item>
                        <Testimonial
                            name="Elizabeth"
                            quote="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis,
                            alias cumque tempora iusto reprehenderit voluptate quo
                            laudantium itaque autem debitis?"
                            portrait="https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_960_720.jpg"
                        />
                    </Grid>
                </Grid>
            </div>
        </motion.div>
    );
}

export default Home;
