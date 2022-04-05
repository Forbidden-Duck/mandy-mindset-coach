/**
 * @param {boolean} cont default: true
 * @param {boolean} exit default: true
 * @return {import("framer-motion").MotionProps}
 */
const slideUp = (cont = true, exit = true) => {
    const output = {
        initial: {
            y: "100vh",
        },
        animate: {
            y: 0,
        },
        exit: {
            y: "-100vh",
        },
    };
    if (!exit) delete output.exit;
    if (!cont) output.exit = { y: "100vh" };
    return output;
};
export default slideUp;
