import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import hexToRGB from "../../utils/hexToRGB";

const TRAVEL = 1000;
const VARIANTS = {
    initial: (direction) => {
        return {
            x: direction > 0 ? TRAVEL : -TRAVEL,
            opacity: 0,
        };
    },
    animate: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: (direction) => {
        return {
            zIndex: 0,
            x: direction < 0 ? TRAVEL : -TRAVEL,
            opacity: 0,
        };
    },
};

const SWIPE_CONFIDENCE_THRESHOLD = 10000;
const SWIPE_POWER = (offset, velocity) => {
    return Math.abs(offset) * velocity;
};

/**
 *
 * @param {{ images: string[] }} props
 */
function ImageSlideshow(props) {
    const classes = makeStyles((theme) => ({
        container: {
            maxHeight: "600px",
        },
    }))();
    const theme = useTheme();

    const [[imageIndex, direction], setActive] = useState([0, 0]);
    const paginate = (newDirection) => {
        const newImageIndex = imageIndex + newDirection;
        if (newImageIndex >= props.images.length) {
            setActive([0, newDirection]);
        } else if (newImageIndex < 0) {
            setActive([props.images.length - 1, newDirection]);
        } else {
            setActive([newImageIndex, newDirection]);
        }
    };

    /**
     * @type {import("@mui/material").SxProps}
     */
    const ButtonProps = {
        borderRadius: "0",
        bgcolor: `rgba(${Object.values(
            hexToRGB(theme.palette.secondary.main)
        ).join(",")}, 0.2)`,
        height: "100%",
        "&:hover": {
            bgcolor: `rgba(${Object.values(
                hexToRGB(theme.palette.secondary.main)
            ).join(",")}, 0.13)`,
        },
    };
    return (
        <>
            <IconButton
                color="secondary"
                size="large"
                sx={ButtonProps}
                onClick={() => paginate(-1)}
            >
                <FontAwesomeIcon icon={faArrowLeft} size="lg" />
            </IconButton>
            <div className={classes.container}>
                <AnimatePresence
                    initial={false}
                    custom={direction}
                    exitBeforeEnter
                >
                    <motion.img
                        key={imageIndex}
                        style={{
                            width: "100%",
                            height: "auto",
                        }}
                        src={props.images[imageIndex]}
                        custom={direction}
                        variants={VARIANTS}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{
                            x: {
                                type: "spring",
                                stiffness: 300,
                                damping: 30,
                            },
                            opacity: {
                                duration: 0.2,
                            },
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(evt, { offset, velocity }) => {
                            const swipe = SWIPE_POWER(offset.x, velocity.x);
                            if (swipe < -SWIPE_CONFIDENCE_THRESHOLD) {
                                paginate(1);
                            } else if (swipe > SWIPE_CONFIDENCE_THRESHOLD) {
                                paginate(-1);
                            }
                        }}
                    />
                </AnimatePresence>
            </div>
            <IconButton
                color="secondary"
                size="large"
                sx={ButtonProps}
                onClick={() => paginate(1)}
            >
                <FontAwesomeIcon icon={faArrowRight} size="lg" />
            </IconButton>
        </>
    );
}

export default ImageSlideshow;
