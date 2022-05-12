import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import hexToRGB from "../../utils/hexToRGB";

/**
 *
 * @param {{ height?: number, width?: number, color?: string, offset?: number }} props
 */
function CrossMarkIcon(props) {
    const height = props.height || 64;
    const width = props.width || 64;
    const offset = props.offset || 8;
    const color = props.color || "#000000";
    const C = 3.142 * (2 * width);
    return (
        <svg width={width} height={height}>
            <motion.circle
                cx={width / 2}
                cy={height / 2}
                r={width / 2 - 2}
                strokeDasharray={`${C}, ${C}`}
                strokeWidth="2"
                strokeLinecap="round"
                stroke={color}
                fill={color}
                initial={{
                    strokeDashoffset: C,
                    fillOpacity: 0,
                }}
                animate={{
                    strokeDashoffset: 0,
                    fillOpacity: 1,
                    transition: {
                        duration: 1.5,
                        fillOpacity: {
                            delay: 1,
                            duration: 1,
                        },
                    },
                }}
            />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
                width={`${width - 32}px`}
                height={`${height - 32}px`}
                x={`${width / offset}px`}
                y={`${height / offset}px`}
                viewBox="0 0 384 512"
            >
                {/* Fontawesome pro icon fa-regular fa-x */}
                <motion.path
                    d="M378.4 440.6c8.531 10.16 7.203 25.28-2.938 33.81C370.9 478.2 365.5 480 360 480c-6.844 0-13.64-2.906-18.39-8.562L192 293.3l-149.6 178.1C37.63 477.1 30.83 480 23.98 480c-5.453 0-10.92-1.844-15.42-5.625c-10.14-8.531-11.47-23.66-2.938-33.81L160.7 256L5.625 71.44C-2.906 61.28-1.578 46.16 8.563 37.63C18.69 29.08 33.84 30.39 42.38 40.56L192 218.7l149.6-178.1c8.547-10.17 23.67-11.47 33.81-2.938s11.47 23.66 2.938 33.81L223.3 256L378.4 440.6z"
                    fill="white"
                    initial={{
                        fillOpacity: 0,
                    }}
                    animate={{
                        fillOpacity: 1,
                        transition: {
                            delay: 2,
                            duration: 0.5,
                        },
                    }}
                />
            </svg>
        </svg>
    );
}

export default CrossMarkIcon;
