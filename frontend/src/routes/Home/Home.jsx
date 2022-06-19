import React, { useState, useEffect, useRef } from "react";
import { Typography, useMediaQuery, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { AnimatePresence, motion } from "framer-motion";
import Testimonial from "../../components/Testimonial/Testimonial";
import ImageSlideshow from "../../components/ImageSlideshow/ImageSlideshow";
import hexToRGB from "../../utils/hexToRGB";
import hexToHSL from "../../utils/hexToHSL";

import fadeInOut from "../../animations/fadeInOut";
import slideLeft from "../../animations/slideLeft";

const IMAGE_HEIGHT = 600;
const IMAGE_RATIO = 1.533742331288344;
const IMAGES = [
    "https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822__340.jpg",
    "https://cdn.pixabay.com/photo/2018/03/03/20/02/laptop-3196481__340.jpg",
    "https://cdn.pixabay.com/photo/2016/08/23/12/37/files-1614223__340.jpg",
    "https://cdn.pixabay.com/photo/2016/08/29/08/55/work-1627703__340.jpg",
    "https://cdn.pixabay.com/photo/2015/01/08/18/26/man-593333__480.jpg",
];

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
        const resize = () => {
            setContainerSize({
                width: _containerRef.offsetWidth,
                height: _containerRef.offsetHeight,
            });
        };
        window.addEventListener("resize", resize);
        return () => {
            window.removeEventListener("resize", resize);
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
        portraitContainer: {
            display: "flex",
            background: `rgba(${Object.values(
                hexToRGB(theme.palette.secondary.main)
            )}, 0.2)`,
        },
        portraitContent: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: "url(/resources/spiral-white.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100%",
        },
        portraitImage: {
            backgroundImage: "url(/resources/mandy-portrait.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            height: IMAGE_HEIGHT,
            width: IMAGE_HEIGHT / IMAGE_RATIO,
            zIndex: -1,
        },
        portraitText: {
            maxWidth: "1000px",
            margin: "0rem 2rem",
        },
        slideshowContainer: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        testimonialContainer: {
            position: "relative",
            minHeight: "400px",
            width: "100%",
            paddingBottom: "4.5rem",
        },
        testimonialBackground: {
            position: "absolute",
            backgroundImage:
                "url(https://cdn.pixabay.com/photo/2017/03/19/01/43/living-room-2155376_960_720.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "85%",
            width: "100%",
            paddingTop: "3rem",
            paddingBottom: "1.5rem",
            opacity: 0.2,
        },
        testimonialColour: {
            position: "absolute",
            backgroundColor: `hsl(${
                hexToHSL(theme.palette.primary.main).h
            }, 67%, 88%)`,
            height: "100%",
            width: "100%",
        },
        "@media (max-width: 976px)": {
            portraitImage: {
                height: 400,
                width: 400 / IMAGE_RATIO,
            },
        },
        "@media (max-width: 845px)": {
            portraitImage: {
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
            portraitImage: {
                height: containerSize.width * IMAGE_RATIO,
                width: containerSize.width,
            },
            portraitContainer: {
                position: "absolute",
            },
            portraitContent: {
                background: "unset",
                height: containerSize.width * IMAGE_RATIO,
                zIndex: 1,
            },
            portraitText: {
                padding: "1rem",
                color: "white",
                background: `rgba(${Object.values(
                    hexToRGB(theme.palette.primary.light)
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
                    <div className={classes.portraitImage} />
                </div>
                <div className={classes.portraitContent}>
                    {isMobileView ? (
                        <motion.div
                            {...slideLeft(false)}
                            transition={{ duration: 0.5 }}
                        >
                            <div className={classes.portraitText}>
                                <Typography
                                    variant="h3"
                                    fontFamily="Kaushan Script"
                                    fontSize="clamp(0rem, 6vw, 3rem)"
                                >
                                    What if your best became your average?
                                </Typography>
                                <Typography
                                    variant="body2"
                                    fontSize="clamp(0rem, 3vw, 1rem)"
                                >
                                    Mindset and Performance Coach for people who
                                    don't like to be limited to what everyone
                                    else is doing.
                                </Typography>
                            </div>
                        </motion.div>
                    ) : (
                        <div className={classes.portraitText}>
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
                                    What if your best became your average?
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
                                    Mindset and Performance Coach for people who
                                    don't like to be limited to what everyone
                                    else is doing.
                                </Typography>
                            </motion.div>
                        </div>
                    )}
                </div>
            </div>
            <div className={classes.slideshowContainer}>
                <ImageSlideshow images={IMAGES} />
            </div>
            <div className={classes.testimonialContainer}>
                <div className={classes.testimonialColour} />
                <div className={classes.testimonialBackground} />
                <Grid
                    container
                    rowSpacing={5}
                    columnSpacing={3}
                    justifyContent="space-evenly"
                    marginTop="3rem"
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
