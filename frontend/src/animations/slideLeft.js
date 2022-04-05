/**
 * @param {boolean} cont default: true
 * @param {boolean} exit default: true
 * @return {import("framer-motion").MotionProps}
 */
const slideLeft = (cont = true, exit = true) => {
    /**
     * @type {import("framer-motion").MotionProps}
     */
    const output = {
        initial: {
            x: "100%",
        },
        animate: {
            x: 0,
        },
        exit: {
            x: "-100%",
        },
    };
    if (!exit) delete output.exit;
    if (!cont) output.exit = { x: "100vw" };
    return output;
};
export default slideLeft;
