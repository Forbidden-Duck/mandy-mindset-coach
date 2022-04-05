/**
 * @param {boolean} cont default: true
 * @param {boolean} exit default: true
 * @return {import("framer-motion").MotionProps}
 */
const slideLeft = (cont = true, exit = true) => {
    const output = {
        initial: {
            x: "100vw",
        },
        animate: {
            x: 0,
        },
        exit: {
            x: "-100vw",
        },
    };
    if (!exit) delete output.exit;
    if (!cont) output.exit = { x: "100vw" };
    return output;
};
export default slideLeft;
