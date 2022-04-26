import React, { useState } from "react";
import { Typography, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { motion } from "framer-motion";
import FAQAccordion from "../../components/FAQAccordion/FAQAccordion";

import hexToRGB from "../../utils/hexToRGB";

import fadeInOut from "../../animations/fadeInOut";

function FAQ() {
    const classes = makeStyles((theme) => ({
        titleContainer: {
            color: theme.palette.primary.contrastText,
            width: "100%",
            padding: "3rem 0",
            marginBottom: "1rem",
        },
    }))();

    const [expanded, setExpanded] = useState(false);
    const handleChange = (label) => (event, isExpanded) => {
        setExpanded(isExpanded ? label : false);
    };

    const theme = useTheme();

    /**
     * @type {{ question: string, answer: string }}
     */
    const faqs = [
        {
            question:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
            answer:
                "Lorem ipsum dolor sit amet consectetur adipisicing " +
                "elit. Et, molestias voluptatibus pariatur enim doloribus " +
                "beatae dicta dolor. Eaque non doloribus voluptatum hic, esse " +
                "reprehenderit officiis accusantium animi dignissimos qui " +
                "explicabo repudiandae neque obcaecati perspiciatis unde magni " +
                "labore maiores blanditiis. Illum quos ipsa quisquam maiores, quasi " +
                "aperiam sunt, neque soluta cumque ut mollitia. Quasi, assumenda " +
                "beatae cupiditate fugit aperiam excepturi blanditiis doloribus " +
                "nesciunt consectetur architecto labore id odio asperiores quisquam " +
                "quo sed itaque atque commodi ipsum! Suscipit, commodi iure. Iste " +
                "minima quisquam cum suscipit culpa, eos tempore cupiditate " +
                "corrupti vero officiis odio laudantium harum, repudiandae fugiat? " +
                "Provident recusandae veritatis ab saepe.",
        },
        {
            question:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
            answer:
                "Lorem ipsum dolor sit amet consectetur adipisicing " +
                "elit. Et, molestias voluptatibus pariatur enim doloribus " +
                "beatae dicta dolor. Eaque non doloribus voluptatum hic, esse " +
                "reprehenderit officiis accusantium animi dignissimos qui " +
                "explicabo repudiandae neque obcaecati perspiciatis unde magni " +
                "labore maiores blanditiis. Illum quos ipsa quisquam maiores, quasi " +
                "aperiam sunt, neque soluta cumque ut mollitia. Quasi, assumenda " +
                "beatae cupiditate fugit aperiam excepturi blanditiis doloribus " +
                "nesciunt consectetur architecto labore id odio asperiores quisquam " +
                "quo sed itaque atque commodi ipsum! Suscipit, commodi iure. Iste " +
                "minima quisquam cum suscipit culpa, eos tempore cupiditate " +
                "corrupti vero officiis odio laudantium harum, repudiandae fugiat? " +
                "Provident recusandae veritatis ab saepe.",
        },
        {
            question:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
            answer:
                "Lorem ipsum dolor sit amet consectetur adipisicing " +
                "elit. Et, molestias voluptatibus pariatur enim doloribus " +
                "beatae dicta dolor. Eaque non doloribus voluptatum hic, esse " +
                "reprehenderit officiis accusantium animi dignissimos qui " +
                "explicabo repudiandae neque obcaecati perspiciatis unde magni " +
                "labore maiores blanditiis. Illum quos ipsa quisquam maiores, quasi " +
                "aperiam sunt, neque soluta cumque ut mollitia. Quasi, assumenda " +
                "beatae cupiditate fugit aperiam excepturi blanditiis doloribus " +
                "nesciunt consectetur architecto labore id odio asperiores quisquam " +
                "quo sed itaque atque commodi ipsum! Suscipit, commodi iure. Iste " +
                "minima quisquam cum suscipit culpa, eos tempore cupiditate " +
                "corrupti vero officiis odio laudantium harum, repudiandae fugiat? " +
                "Provident recusandae veritatis ab saepe.",
        },
        {
            question:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
            answer:
                "Lorem ipsum dolor sit amet consectetur adipisicing " +
                "elit. Et, molestias voluptatibus pariatur enim doloribus " +
                "beatae dicta dolor. Eaque non doloribus voluptatum hic, esse " +
                "reprehenderit officiis accusantium animi dignissimos qui " +
                "explicabo repudiandae neque obcaecati perspiciatis unde magni " +
                "labore maiores blanditiis. Illum quos ipsa quisquam maiores, quasi " +
                "aperiam sunt, neque soluta cumque ut mollitia. Quasi, assumenda " +
                "beatae cupiditate fugit aperiam excepturi blanditiis doloribus " +
                "nesciunt consectetur architecto labore id odio asperiores quisquam " +
                "quo sed itaque atque commodi ipsum! Suscipit, commodi iure. Iste " +
                "minima quisquam cum suscipit culpa, eos tempore cupiditate " +
                "corrupti vero officiis odio laudantium harum, repudiandae fugiat? " +
                "Provident recusandae veritatis ab saepe.",
        },
        {
            question:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
            answer:
                "Lorem ipsum dolor sit amet consectetur adipisicing " +
                "elit. Et, molestias voluptatibus pariatur enim doloribus " +
                "beatae dicta dolor. Eaque non doloribus voluptatum hic, esse " +
                "reprehenderit officiis accusantium animi dignissimos qui " +
                "explicabo repudiandae neque obcaecati perspiciatis unde magni " +
                "labore maiores blanditiis. Illum quos ipsa quisquam maiores, quasi " +
                "aperiam sunt, neque soluta cumque ut mollitia. Quasi, assumenda " +
                "beatae cupiditate fugit aperiam excepturi blanditiis doloribus " +
                "nesciunt consectetur architecto labore id odio asperiores quisquam " +
                "quo sed itaque atque commodi ipsum! Suscipit, commodi iure. Iste " +
                "minima quisquam cum suscipit culpa, eos tempore cupiditate " +
                "corrupti vero officiis odio laudantium harum, repudiandae fugiat? " +
                "Provident recusandae veritatis ab saepe.",
        },
    ];

    return (
        <motion.div
            {...fadeInOut()}
            exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.3 } }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                className={classes.titleContainer}
                initial={{
                    background: `linear-gradient(160deg, rgba(${Object.values(
                        hexToRGB(theme.palette.primary.light)
                    )},1) 100%, rgba(${Object.values(
                        hexToRGB(theme.palette.secondary.light)
                    )},1) 0%)`,
                }}
                animate={{
                    background: `linear-gradient(160deg, rgba(${Object.values(
                        hexToRGB(theme.palette.primary.light)
                    )},1) 20%, rgba(${Object.values(
                        hexToRGB(theme.palette.secondary.light)
                    )},1) 80%)`,
                    transition: {
                        duration: 1,
                        delay: 0.4,
                    },
                }}
                exit={{
                    background: `linear-gradient(160deg, rgba(${Object.values(
                        hexToRGB(theme.palette.primary.light)
                    )},1) 0%, rgba(${Object.values(
                        hexToRGB(theme.palette.secondary.light)
                    )},1) 0%)`,
                }}
                transition={{ duration: 0.6 }}
            >
                <Typography variant="h4" fontWeight={500} textAlign="center">
                    Frequently Asked Questions
                </Typography>
            </motion.div>
            {faqs.map((faq, index) => (
                <FAQAccordion
                    key={`panel${index}`}
                    label={`panel${index}`}
                    theme={index % 2 === 0 ? "primary" : "secondary"}
                    question={faq.question}
                    answer={faq.answer}
                    expanded={expanded}
                    onChange={handleChange}
                />
            ))}
        </motion.div>
    );
}

export default FAQ;
