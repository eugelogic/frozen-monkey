import { useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles/Layout.module.css";

/**
 * It's as simple as adding a `layout` prop to the `motion.div`. When
 * the flexbox changes, the handle smoothly animates between layouts.
 *
 * Try adding whileHover={{ scale: 1.2 }} to the handle - the layout
 * animation is now fully compatible with user-set transforms.
 */

const Layout = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <div className={styles.container}>
        <div className={styles.switch} data-isOn={isOn} onClick={toggleSwitch}>
            <motion.div className={styles.handle} layout transition={spring} />
        </div>
    </div>
  );
}

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};

export default Layout