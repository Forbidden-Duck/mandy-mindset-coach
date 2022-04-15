/**
 * @param {boolean} cont default: true
 * @param {boolean} exit default: true
 * @param {string} customVal default: %
 * @return {import("framer-motion").MotionProps}
 */
const slideDown = (cont = true, exit = true, customVal = "%") => {
    const output = {
        initial: {
            y: `-100${customVal}`,
        },
        animate: {
            y: 0,
        },
        exit: {
            y: `100${customVal}`,
        },
    };
    if (!cont) output.exit = { y: `-100${customVal}` };
    if (!exit) delete output.exit;
    return output;
};
export default slideDown;
