/**
 * @param {number} duration default: 0.5
 * @param {number} delay default: 0
 * @param {boolean} exit default: true
 * @return {import("framer-motion").MotionProps}
 */
const fadeInOut = (duration = 0.5, delay = 0, exit = true) => {
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
        transition: {
            duration,
            delay,
        },
    };
    if (!exit) delete output.exit;
    return output;
};
export default fadeInOut;
