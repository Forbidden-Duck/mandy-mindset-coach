import React, { useState, useEffect } from "react";
import { Grid, Dialog } from "@mui/material";
import { motion } from "framer-motion";
import ServicesCard from "../../components/ServicesCard/ServicesCard";
import BookFormComponent from "../../components/BookFormComponent.jsx/BookFormComponent";

import fadeInOut from "../../animations/fadeInOut";

const SERVICES_DETAILS_FINAL = [
    {
        title: "Wellness and Career Life Coaching",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. " +
            "Adipisci, debitis quae. Error id accusamus praesentium nemo " +
            "ullam odit molestias labore quo non itaque dicta vitae, eum " +
            "possimus dolore quasi inventore? Animi sequi culpa harum.",
        image: "https://cdn.pixabay.com/photo/2017/03/28/12/06/chairs-2181916_960_720.jpg",
    },
    {
        title: "Corporate Team Building",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. " +
            "Adipisci, debitis quae. Error id accusamus praesentium nemo " +
            "ullam odit molestias labore quo non itaque dicta vitae, eum " +
            "possimus dolore quasi inventore? Animi sequi culpa harum.",
        image: "https://cdn.pixabay.com/photo/2017/03/28/12/06/chairs-2181916_960_720.jpg",
    },
    {
        title: "Leadership and Resilience Programs",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. " +
            "Adipisci, debitis quae. Error id accusamus praesentium nemo " +
            "ullam odit molestias labore quo non itaque dicta vitae, eum " +
            "possimus dolore quasi inventore? Animi sequi culpa harum.",
        image: "https://cdn.pixabay.com/photo/2017/03/28/12/06/chairs-2181916_960_720.jpg",
    },
];

function Services() {
    const [open, setOpen] = useState(false);
    const [selectedService, setSelectedService] = useState("");

    const handleClose = () => {
        setOpen(false);
    };

    const [services, setServices] = useState([]);

    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
            setServices(SERVICES_DETAILS_FINAL);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Dialog open={open} onClose={handleClose}>
                <BookFormComponent
                    services={services.map((service) => service.title)}
                    setActiveService={selectedService}
                    handleClose={handleClose}
                    dialogMode
                />
            </Dialog>
            <motion.div {...fadeInOut()} transition={{ duration: 0.5 }}>
                <Grid
                    container
                    columnSpacing={3}
                    justifyContent="space-evenly"
                    marginTop="3rem"
                    marginBottom="3rem"
                    rowGap="1rem"
                >
                    {isLoading ? (
                        <>
                            <Grid item>
                                <ServicesCard isLoading />
                            </Grid>
                            <Grid item>
                                <ServicesCard isLoading />
                            </Grid>
                            <Grid item>
                                <ServicesCard isLoading />
                            </Grid>
                        </>
                    ) : (
                        services.map((service, index) => (
                            <Grid item key={index}>
                                <ServicesCard
                                    {...service}
                                    setOpen={setOpen}
                                    setSelectedService={setSelectedService}
                                />
                            </Grid>
                        ))
                    )}
                </Grid>
            </motion.div>
        </>
    );
}

export default Services;
