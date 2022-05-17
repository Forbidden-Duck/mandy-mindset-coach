import React from "react";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import hexToRGB from "../../utils/hexToRGB";
import hexToHSL from "../../utils/hexToHSL";

import slideLeft from "../../animations/slideLeft";

const slideLeftOpacity = (suffix) => {
    return {
        initial: {
            opacity: 0,
            x: `100${suffix}`,
        },
        animate: {
            opacity: 1,
            x: 0,
        },
        exit: {
            opacity: 0,
            x: `-100${suffix}`,
        },
    };
};

const CARD_COLOUR = 240;

/**
 *
 * @param {{ label: string, theme: "primary" | "secondary", question: string, answer: string, expanded: boolean, onChange: function }} props
 */
function FAQAccordion(props) {
    const theme = useTheme();
    const themeProps = {
        primary: `hsl(${hexToHSL(theme.palette.primary.main).h}, 35%, 74%)`,
        secondary: `rgb(${CARD_COLOUR}, ${CARD_COLOUR}, ${CARD_COLOUR})`,
    };

    const isMobile = useMediaQuery("(max-width: 600px)");

    return (
        <motion.div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
            }}
            {...slideLeftOpacity("vw")}
            transition={{ duration: 0.8 }}
        >
            <Accordion
                expanded={props.expanded === props.label}
                onChange={props.onChange(props.label)}
                TransitionProps={{ unmountOnExit: true }}
                sx={{
                    background: themeProps[props.theme] || themeProps.primary,
                    borderBottom: `1px solid ${theme.palette.divider}`,
                    width: "100%",
                    maxWidth: "1000px",
                    padding: "0.3rem 0",
                    margin: "0 2rem",
                    transition: "margin 0.4s ease-in-out",
                    "@media (max-width: 600px)": {
                        padding: "0.1rem 0",
                        margin: 0,
                    },
                }}
            >
                <motion.div
                    {...slideLeftOpacity("px")}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <AccordionSummary
                        expandIcon={<FontAwesomeIcon icon={faAngleDown} />}
                    >
                        <Typography
                            variant="body1"
                            sx={{ width: "90%", flexShrink: 0 }}
                            fontSize={isMobile ? "0.9rem" : "1rem"}
                        >
                            {props.question}
                        </Typography>
                    </AccordionSummary>
                </motion.div>
                <motion.div
                    variants={slideLeftOpacity("px")}
                    initial="initial"
                    whileInView="animate"
                    transition={{ duration: 0.8 }}
                >
                    <AccordionDetails>
                        <Typography
                            variant="body2"
                            fontSize={isMobile ? "0.775rem" : "0.875rem"}
                        >
                            {props.answer}
                        </Typography>
                    </AccordionDetails>
                </motion.div>
            </Accordion>
        </motion.div>
    );
}

export default FAQAccordion;
