/**
 * @param {boolean} exit default: true
 * @return {import("framer-motion").MotionProps}
 */
const fadeInOut = (exit = true) => {
    const output = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
        },
        exit: {
            opacity: 0,
        },
    };
    if (!exit) delete output.exit;
    return output;
};
export default fadeInOut;
