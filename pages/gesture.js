import { motion } from "framer-motion";
import styles from '../styles/Gesture.module.css'

const Gesture = () => {
  return (
    <div className={styles.container}>
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} />
    </div>
  );
};

export default Gesture
