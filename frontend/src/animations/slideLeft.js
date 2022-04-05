/**
 * @param {boolean} cont default: true
 * @param {boolean} exit default: true
 * @param {string} customVal default: %
 * @return {import("framer-motion").MotionProps}
 */
const slideLeft = (cont = true, exit = true, customVal = "%") => {
    /**
     * @type {import("framer-motion").MotionProps}
     */
    const output = {
        initial: {
            x: `100${customVal}`,
        },
        animate: {
            x: 0,
        },
        exit: {
            x: `-100${customVal}`,
        },
    };
    if (!exit) delete output.exit;
    if (!cont) output.exit = { x: `100${customVal}` };
    return output;
};
export default slideLeft;
