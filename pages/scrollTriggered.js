import { motion, Variants } from "framer-motion"
import styles from "../styles/ScrolledTriggered.module.css"

// interface Props {
//   emoji: string
//   hueA: number
//   hueB: number
// }

// const cardVariants: Variants = {
const cardVariants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
}

// const hue = (h: number) => `hsl(${h}, 100%, 50%)`
const hue = (h) => `hsl(${h}, 100%, 50%)`

// function Card({ emoji, hueA, hueB }: Props) {
function Card({ emoji, hueA, hueB }) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`

  return (
    <motion.div
      className={styles.cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className={styles.splash} style={{ background }} />
      <motion.div className={styles.card} variants={cardVariants}>
        {emoji}
      </motion.div>
    </motion.div>
  )
}

// const food: [string, number, number][] = [
const food = [
  ["🍅", 340, 10],
  ["🍊", 20, 40],
  ["🍋", 60, 90],
  ["🍐", 80, 120],
  ["🍏", 100, 140],
  ["🥦", 205, 245],
  ["🍆", 260, 290],
  ["🍇", 290, 320]
]

export default function ScrollTriggered() {
  return food.map(([emoji, hueA, hueB]) => (
    <Card emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
  ))
}
