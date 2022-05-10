import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import hexToRGB from "../../utils/hexToRGB";

/**
 *
 * @param {{ height?: number, width?: number, color?: string, offset?: number }} props
 */
function CheckMarkIcon(props) {
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
                width={`${width - 16}px`}
                height={`${height - 16}px`}
                x={`${width / offset}px`}
                y={`${height / offset}px`}
                viewBox="0 0 448 512"
            >
                {/* Fontawesome pro icon fa-regular fa-check */}
                <motion.path
                    d="M440.1 103C450.3 112.4 450.3 127.6 440.1 136.1L176.1 400.1C167.6 410.3 152.4 410.3 143 400.1L7.029 264.1C-2.343 255.6-2.343 240.4 7.029 231C16.4 221.7 31.6 221.7 40.97 231L160 350.1L407 103C416.4 93.66 431.6 93.66 440.1 103V103z"
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

export default CheckMarkIcon;
