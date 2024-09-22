import { Variants } from "framer-motion";

export const notificationVariant: Variants = {
	hidden: {
		bottom: "-40px",
		opacity: 0,
	},
	visible: {
		bottom: "-20px",
		opacity: 1,
		transition: {duration: 0.15},
	},
	exit: {
		bottom: "-40px",
		opacity: 0,
		transition: {
			duration: 0.15,
			ease: "easeInOut",
			transitionEnd: {
				display: "none",
			},
		},
	},
};