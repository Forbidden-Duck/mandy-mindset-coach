import React from "react";

/**
 *
 * @param {{element?: React.ReactNode, component?: JSX.Element, paths?: string[]}} props
 */
function DefaultRoute(props) {
    return (
        <>
            {!!props.element && props.element}
            {!!props.component && <props.component />}
        </>
    );
}

export default DefaultRoute;
