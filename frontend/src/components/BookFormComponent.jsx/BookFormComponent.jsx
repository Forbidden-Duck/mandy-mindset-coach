import React, { useEffect, useState } from "react";
import {
    Backdrop,
    Button,
    Card,
    CardHeader,
    CardContent,
    CardActions,
    CircularProgress,
} from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
import { Form, Formik, useFormik } from "formik";
import * as Yup from "yup";
import { motion, useTime } from "framer-motion";
import FormSelect from "../FormikComponents/FormSelect";
import FormTextField from "../FormikComponents/FormTextField";
import "./BookFormAnimation.scss";

/**
 * Regular expression link to
 * https://stackoverflow.com/a/39990702/7514621
 */
const MOBILE_REG_EXP =
    /^(?:\+?(61))? ?(?:\((?=.*\)))?(0?[2-57-8])\)? ?(\d\d(?:[- ](?=\d{3})|(?!\d\d[- ]?\d[- ]))\d\d[- ]?\d[- ]?\d{3})$/;

const SLIDE_LEFT_OPACITY = {
    initial: {
        x: "300px",
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: 0.5,
        },
    },
    exit: {
        x: "-300px",
        opacity: 0,
    },
};

/**
 *
 * @param {{ services: string[], setActiveService?: number }} props
 */
function BookFormComponent(props) {
    const classes = makeStyles((theme) => ({
        card: {
            maxWidth: "600px",
            width: "100%",
        },
        content: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            "& :not(:last-child)": {
                marginBottom: "0.3rem",
            },
        },
        group: {
            display: "flex",
            justifyContent: "space-evenly",
            "& :not(:last-child)": {
                marginRight: "0.2rem",
            },
            "@media (max-width: 500px)": {
                display: "unset",
                justifyContent: "unset",
                "& :not(:last-child)": {
                    marginRight: "unset",
                    marginBottom: "0.3rem",
                },
            },
        },
    }))();

    const theme = useTheme();

    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (values, { resetForm }) => {
        console.log("Submit", values);
        setIsLoading(true);
        resetForm();
    };

    useEffect(() => {
        if (isLoading) {
            const timer = setTimeout(() => {
                setIsLoading(false);
                setIsSuccess(true);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isLoading]);

    useEffect(() => {
        if (isSuccess) {
            const timer = setTimeout(() => {
                setIsSuccess(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isSuccess]);

    const formSchema = Yup.object().shape({
        firstname: Yup.string(),
        lastname: Yup.string(),
        email: Yup.string().email("Invalid email address"),
        mobile: Yup.string().matches(MOBILE_REG_EXP, "Invailid mobile number"),
        service: Yup.string(),
        message: Yup.string(),
    });

    return (
        <>
            <Formik
                initialValues={{
                    firstname: "",
                    lastname: "",
                    email: "",
                    mobile: "",
                    service: "",
                    message: "",
                }}
                validationSchema={formSchema}
                onSubmit={handleSubmit}
                validateOnBlur
                validateOnChange
            >
                {(formik) => (
                    <Form className={classes.card}>
                        <Card elevation={10}>
                            <motion.div
                                initial={{ x: "-300px", opacity: 0 }}
                                animate={{
                                    x: 0,
                                    transition: {
                                        duration: 0.8,
                                    },
                                    opacity: 1,
                                }}
                                exit={{ x: "-300px" }}
                                transition={{ duration: 0.5 }}
                            >
                                <CardHeader
                                    title="Booking"
                                    titleTypographyProps={{
                                        variant: "h4",
                                        sx: {
                                            fontWeight: "400",
                                        },
                                    }}
                                />
                            </motion.div>
                            <CardContent className={classes.content}>
                                <motion.div
                                    variants={SLIDE_LEFT_OPACITY}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    transition={{ duration: 0.5 }}
                                >
                                    <FormSelect
                                        name="service"
                                        label="Select a service"
                                        value={props.setActiveService}
                                        values={props.services}
                                        size="small"
                                        sx={{ width: "60%" }}
                                        required
                                    />
                                </motion.div>
                                <motion.div
                                    className={classes.group}
                                    variants={SLIDE_LEFT_OPACITY}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    transition={{ duration: 0.5 }}
                                >
                                    <FormTextField
                                        name="firstname"
                                        label="First name"
                                        autoComplete="given-name"
                                        sx={{ width: "100%" }}
                                        required
                                    />
                                    <FormTextField
                                        name="lastname"
                                        label="Last name"
                                        autoComplete="family-name"
                                        sx={{ width: "100%" }}
                                        required
                                    />
                                </motion.div>
                                <motion.div
                                    className={classes.group}
                                    variants={SLIDE_LEFT_OPACITY}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    transition={{ duration: 0.5 }}
                                >
                                    <FormTextField
                                        name="email"
                                        label="Email"
                                        autoComplete="email"
                                        sx={{ width: "100%" }}
                                        required
                                    />
                                    <FormTextField
                                        name="mobile"
                                        label="Mobile"
                                        autoComplete="tel"
                                        sx={{
                                            width: "80%",
                                            "@media (max-width: 500px)": {
                                                width: "100%",
                                            },
                                        }}
                                        required
                                    />
                                </motion.div>
                                {/* Service Dropdown */}
                                <motion.div
                                    variants={SLIDE_LEFT_OPACITY}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    transition={{ duration: 0.5 }}
                                >
                                    <FormTextField
                                        name="message"
                                        label="Message (optional)"
                                        autoComplete="off"
                                        rows={6}
                                        sx={{
                                            width: "100%",
                                            background: "white",
                                            zIndex: 1,
                                        }}
                                        multiline
                                    />
                                </motion.div>
                            </CardContent>
                            <CardActions sx={{ justifyContent: "right" }}>
                                <motion.div
                                    initial={{
                                        x: -2,
                                        y: -70,
                                        opacity: 0,
                                    }}
                                    animate={{
                                        x: 0,
                                        y: 0,
                                        opacity: 1,
                                        transition: {
                                            type: "spring",
                                            duration: 1,
                                            delay: 1,
                                            bounce: 0.6,
                                        },
                                    }}
                                    exit={{
                                        x: -300,
                                        opacity: 0,
                                    }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                        size="medium"
                                        sx={{
                                            color: "white",
                                            marginRight: "0.5rem",
                                        }}
                                    >
                                        Submit
                                    </Button>
                                </motion.div>
                            </CardActions>
                        </Card>
                    </Form>
                )}
            </Formik>
            <Backdrop
                open={isLoading || isSuccess}
                sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    transition: "all 1s fadeInOut",
                }}
            >
                {isLoading && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <CircularProgress color="primary" size="5rem" />
                    </motion.div>
                )}
                {isSuccess && (
                    <svg
                        id="successAnimation"
                        class="animated"
                        xmlns="http://www.w3.org/2000/svg"
                        width="70"
                        height="70"
                        viewBox="0 0 70 70"
                    >
                        <path
                            id="successAnimationResult"
                            fill="#D8D8D8"
                            d="M35,60 C21.1928813,60 10,48.8071187 10,35 C10,21.1928813 21.1928813,10 35,10 C48.8071187,10 60,21.1928813 60,35 C60,48.8071187 48.8071187,60 35,60 Z M23.6332378,33.2260427 L22.3667622,34.7739573 L34.1433655,44.40936 L47.776114,27.6305926 L46.223886,26.3694074 L33.8566345,41.59064 L23.6332378,33.2260427 Z"
                        />
                        <circle
                            id="successAnimationCircle"
                            cx="35"
                            cy="35"
                            r="24"
                            stroke="#979797"
                            stroke-width="2"
                            stroke-linecap="round"
                            fill="transparent"
                        />
                        <polyline
                            id="successAnimationCheck"
                            stroke="#979797"
                            stroke-width="2"
                            points="23 34 34 43 47 27"
                            fill="transparent"
                        />
                    </svg>
                )}
            </Backdrop>
        </>
    );
}

export default BookFormComponent;
