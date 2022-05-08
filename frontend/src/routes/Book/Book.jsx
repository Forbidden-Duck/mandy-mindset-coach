import React from "react";
import { makeStyles } from "@mui/styles";
import { motion } from "framer-motion";
import BookFormComponent from "../../components/BookFormComponent.jsx/BookFormComponent";

import fadeInOut from "../../animations/fadeInOut";

const SERVICES_TITLES = [
    "Wellness and Career Life Coaching",
    "Corporate Team Building",
    "Leadership and Resilience Programs",
];

function Book() {
    const classes = makeStyles((theme) => ({
        container: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
        },
    }))();

    return (
        <motion.div
            className={classes.container}
            {...fadeInOut()}
            exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.3 } }}
            transition={{ duration: 0.5 }}
        >
            <BookFormComponent services={SERVICES_TITLES} />
        </motion.div>
    );
}

export default Book;
