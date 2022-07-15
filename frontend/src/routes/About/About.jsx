import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import fadeInOut from "../../animations/fadeInOut";
import slideLeft from "../../animations/slideLeft";

const CARD_COLOUR = 255;

function About() {
    const classes = makeStyles((theme) => ({
        container: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
        },
        card: {
            width: "80%",
            maxWidth: "1000px",
            margin: "2rem 0",
            padding: "1rem 0",
            textAlign: "center",
            borderRadius: "16px",
            background: `rgba(${CARD_COLOUR}, ${CARD_COLOUR}, ${CARD_COLOUR}, 0.4)`,
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            boxShadow: "10px 10px 5px rgba(0, 0, 0, 0.2)",
            backdropFilter: "blur(5px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            transition: "width 0.5s ease-in-out",
        },
        content: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "2rem 3rem",
        },
        blackBox: {
            background: "black",
            height: "3px",
            marginBottom: "1.5rem",
        },
        "@media (max-width: 600px)": {
            card: {
                width: "95%",
            },
        },
    }))();

    const isTooSmall = useMediaQuery("(max-width: 600px)");

    return (
        <motion.div
            className={classes.container}
            {...fadeInOut()}
            transition={{ duration: 0.5 }}
        >
            <div className={classes.card}>
                <div className={classes.content}>
                    <motion.div
                        className={classes.blackBox}
                        initial={{ width: "0px" }}
                        animate={{ width: "50px" }}
                        exit={{ width: "0px" }}
                        transition={{ duration: 0.5 }}
                    />
                    <motion.div
                        initial={{
                            x: "100px",
                            opacity: 0,
                        }}
                        animate={{
                            x: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.5,
                                delay: 0.5,
                            },
                        }}
                        exit={{
                            x: "-100px",
                            opacity: 0,
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        <Typography
                            variant="h5"
                            fontWeight={500}
                            marginBottom="1rem"
                        >
                            ABOUT ME
                        </Typography>
                    </motion.div>
                    <motion.div
                        initial={{
                            x: "100px",
                            opacity: 0,
                        }}
                        whileInView={{
                            x: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.5,
                                delay: 0.8,
                            },
                        }}
                        exit={{
                            x: "-100px",
                            opacity: 0,
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        <Typography variant="body1" marginBottom="0.8rem">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Corporis commodi a obcaecati soluta quam,
                            optio sed amet placeat iure, numquam, officia odit
                            ullam deserunt esse sapiente hic culpa. Expedita,
                            iusto mollitia repellendus voluptatem nihil quia
                            repudiandae nesciunt harum quis error sequi,
                            suscipit obcaecati inventore! Aperiam eligendi dolor
                            veniam incidunt nihil esse excepturi, voluptatem,
                            tempore illum nesciunt explicabo quaerat deleniti
                            architecto facere quo? Eum hic, dolorem provident
                            distinctio ipsa est accusantium. Fuga numquam
                            temporibus corporis praesentium quae molestias
                            similique, animi, perspiciatis eos qui, quos amet
                            non natus laborum impedit accusamus. Nam, tempore
                            illum labore eaque accusantium ipsam magnam culpa
                            impedit maiores iusto! Nihil qui fuga error officia
                            optio magnam tempore excepturi animi dignissimos
                            odit aspernatur, similique esse accusamus blanditiis
                            eos vero ex, quis dolore asperiores dolorum sit
                            officiis necessitatibus! Soluta iure, itaque,
                            accusantium voluptates saepe consequatur harum
                            tempore veniam culpa numquam nulla, aut architecto
                            ullam eius cumque eum sapiente praesentium animi
                            maiores eos dolorum! Ipsa sint a aperiam dignissimos
                            fugiat, quidem amet, voluptates quasi placeat
                            aspernatur modi ullam. Laudantium soluta iure nulla,
                            nisi enim autem aut sequi aliquam at sunt ex fugiat
                            maiores optio culpa earum quod voluptatum commodi
                            labore quaerat, qui sapiente minima. Id omnis unde
                            labore corporis itaque dolore?
                        </Typography>
                    </motion.div>
                    <motion.div
                        initial={{
                            x: "100px",
                            opacity: 0,
                        }}
                        whileInView={{
                            x: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.5,
                                delay: isTooSmall ? 0.5 : 1.2,
                            },
                        }}
                        exit={{
                            x: "-100px",
                            opacity: 0,
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        <Typography variant="body1">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Cum impedit ratione veritatis neque velit!
                            Ratione aut, iusto adipisci perspiciatis dolor quas
                            impedit ducimus perferendis hic molestiae, harum
                            optio cumque cum. Velit odio possimus corrupti
                            maxime similique unde eius omnis rem veritatis
                            nihil, recusandae, ad consequatur debitis deleniti
                            non error cupiditate voluptates pariatur quisquam
                            quas ab ea deserunt laudantium. Dolorem natus rerum
                            distinctio quibusdam, quisquam odit. Animi cumque
                            nisi excepturi, ex nulla repellendus tempora non
                            tempore et sed debitis delectus ipsa deserunt magnam
                            sunt adipisci aspernatur similique velit voluptate
                            reiciendis. Dicta, cumque. Minus labore iusto
                            laudantium similique dignissimos consectetur
                            provident laboriosam?
                        </Typography>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}

export default About;
