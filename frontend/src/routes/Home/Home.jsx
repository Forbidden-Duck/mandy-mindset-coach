import React, { useState, useEffect, useRef } from "react";
import { Typography, useMediaQuery, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { motion } from "framer-motion";
import Testimonial from "../../components/Testimonial/Testimonial";
import hexToRGB from "../../utils/hexToRGB";
import hexToHSL from "../../utils/hexToHSL";

import fadeInOut from "../../animations/fadeInOut";
import slideLeft from "../../animations/slideLeft";

const IMAGE_RATIO = 1.533742331288344;

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
        contentContainer: {
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background:
                "url(https://cdn.pixabay.com/photo/2017/01/14/10/56/people-1979261_960_720.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "600px",
        },
        contentWrap: {
            position: "absolute",
            backgroundColor: `rgba(${Object.values(
                hexToRGB(theme.palette.primary.dark)
            )}, 0.35)`,
            height: "100%",
            width: "100%",
        },
        contentText: {
            maxWidth: "600px",
            margin: "0rem 2rem",
            padding: "1rem",
            color: "white",
            background: `rgba(${Object.values(
                hexToRGB(theme.palette.secondary.dark)
            )}, 0.5)`,
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
                hexToHSL(theme.palette.secondary.main).h
            }, 67%, 88%)`,
            height: "100%",
            width: "100%",
        },
        "@media (max-width: 524px)": {
            container: {
                position: "relative",
            },
            group: {
                display: "flex",
                flexDirection: "column",
            },
            contentContainer: {
                backgroundImage: "url(/resources/mandy-portrait.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                height: containerSize.width * IMAGE_RATIO,
                width: containerSize.width,
                zIndex: -1,
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
            <div className={classes.contentContainer}>
                <div className={classes.contentWrap} />
                <motion.div
                    variants={slideLeft(false)}
                    initial="initial"
                    whileInView="animate"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className={classes.contentText}>
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
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dolor eveniet similique totam repellendus id
                            ut minima rerum voluptatem atque sit?
                        </Typography>
                    </div>
                </motion.div>
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
