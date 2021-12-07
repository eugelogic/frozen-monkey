import { mix } from "@popmotion/popcorn"
import styles from '../styles/ScrollLinked.module.css'

const randomInt = (min, max) => Math.round(mix(min, max, Math.random()))
const generateParagraphLength = () => randomInt(10, 40)
const generateWordLength = () => randomInt(20, 100)

// Randomly generate some paragraphs of word lengths
const paragraphs = [...Array(40)].map(() => {
  return [...Array(generateParagraphLength())].map(generateWordLength)
})

const Word = ({ width }) => <div className={styles.word} style={{ width }} />

const Paragraph = ({ words }) => (
  <div className={styles.paragraph}>
    {words.map((width, index) => (
      <Word width={width} key={index}/>
    ))}
  </div>
)

export const ContentPlaceholder = () => (
  <div className={styles.contentPlaceholder}>
    <div className={styles.header}>
      <Word width={75} />
      <Word width={245} />
      <Word width={120} />
    </div>
    {paragraphs.map((words, index) => (
      <Paragraph words={words} key={index}/>
    ))}
  </div>
)
