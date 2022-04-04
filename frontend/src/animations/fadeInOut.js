/**
 * @param {string} duration
 * @return {import("framer-motion").MotionProps}
 */
const fadeInOut = (duration = 0.5) => {
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
        },
    };
};
export default fadeInOut;
