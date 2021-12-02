import { useRef } from "react";
import { motion } from "framer-motion";
import styles from '../styles/Drag.module.css'

const Drag = () => {

    const constraintsRef = useRef(null);

    return (
        <div className={styles.container}>
            <motion.div className={styles.dragArea} ref={constraintsRef} />
            <motion.div drag dragConstraints={constraintsRef} />
        </div>
  );
};

export default Drag