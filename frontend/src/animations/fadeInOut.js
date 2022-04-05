/**
 * @param {number} duration
 * @param {number} delay
 * @return {import("framer-motion").MotionProps}
 */
const fadeInOut = (duration = 0.5, delay = 0) => {
    return {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
        },
        exit: {
            opacity: 0,
        },
        transition: {
            duration,
            delay,
        },
    };
};
export default fadeInOut;
