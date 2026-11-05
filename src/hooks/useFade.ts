import { useState, useEffect } from "react";
import "./useFade.css";

const useFade = (initial: boolean = false) => {
	// show is controlling the CSS animation
	const [show, setShow] = useState(initial);

	// isVisible is exposed to the component (toggled after animation)
	const [isVisible, setVisible] = useState(show);

	// Update visibility when show changes
	useEffect(() => {
        if (show) {
            setVisible(true);
        }
	}, [show]);

	// These props go on the fading DOM element
	const fromProps = {
        style: { animationName: `${show ? "fadeIn" : "fadeOut"}`, animationDuration: '1s', animationFillMode: 'forwards' },
        onAnimationEnd: () => !show && setVisible(false),
	};

	const toProps = {
        style: { animationName: `${show ? "fadeOut" : "fadeIn"}`, animationDuration: '1s', animationFillMode: 'forwards' },
		onAnimationEnd: () => show && setVisible(true)
	};

    return { isVisible, setShow, fromProps, toProps };
};

export default useFade;
