import React, { useState, useEffect, useRef } from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { motion } from "framer-motion";
import hexToRGB from "../../utils/hexToRGB";
import fadeInOut from "../../animations/fadeInOut";

const MIN_CONTENT_WIDTH = 585;
const MIN_CONTAINER_WIDTH = 1119;
let GROUP_VALUE = 796;

function Home() {
    useEffect(() => {
        const timer = setTimeout(() => (GROUP_VALUE = "100%"), 100);
        return () => clearTimeout(timer);
    }, []);

    const containerRef = useRef(null);
    const [containerSize, setContainerSize] = useState({
        width: MIN_CONTAINER_WIDTH,
        height: 0,
    });

    const contentRef = useRef(null);
    const [contentSize, setContentSize] = useState({
        width: MIN_CONTENT_WIDTH,
        height: 0,
    });

    useEffect(() => {
        setContainerSize({
            width: containerRef.current?.offsetWidth,
            height: containerRef.current?.offsetHeight,
        });
        setContentSize({
            width: contentRef.current?.offsetWidth || 0,
            height: contentRef.current?.offsetHeight || 0,
        });
    }, []);

    // Window resize resets the container height
    useEffect(() => {
        const _containerRef = containerRef.current;
        const _contentRef = contentRef.current;
        window.addEventListener("resize", () => {
            setContainerSize({
                width: _containerRef?.offsetWidth,
                height: _containerRef?.offsetHeight,
            });
            setContentSize({
                width: _contentRef?.offsetWidth || 0,
                height: _contentRef?.offsetHeight || 0,
            });
        });
        return () => {
            window.removeEventListener("resize", () => {
                setContainerSize({
                    width: _containerRef?.offsetWidth,
                    height: _containerRef?.offsetHeight,
                });
                setContentSize({
                    width: _contentRef?.offsetWidth || 0,
                    height: _contentRef?.offsetHeight || 0,
                });
            });
        };
    }, []);

    const calculatePortraitWidth = () =>
        containerSize.width - MIN_CONTENT_WIDTH;

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
            height:
                containerSize.width < MIN_CONTAINER_WIDTH
                    ? calculatePortraitWidth() * 1.53
                    : containerSize.height,
            width:
                containerSize.width < MIN_CONTAINER_WIDTH
                    ? calculatePortraitWidth()
                    : containerSize.height / 1.53,
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
            <div
                ref={containerRef}
                className={classes.group}
                style={{
                    height:
                        containerSize.width < MIN_CONTAINER_WIDTH
                            ? calculatePortraitWidth() * 1.53
                            : GROUP_VALUE,
                }}
            >
                <div className={classes.portraitContainer}>
                    <div className={classes.portrait} />
                </div>
                <div ref={contentRef} className={classes.contentContainer}>
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
