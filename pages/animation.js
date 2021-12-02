import { motion } from "framer-motion";
import styles from '../styles/Animation.module.css'

const Animation = () => {

    return (
        <div className={styles.container}>
            <motion.div
                animate={{ scale: 2 }}
                transition={{ duration: 0.5 }}
            />
        </div>
    )
}

export default Animation