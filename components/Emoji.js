import { Grid } from 'react-virtualized'
import Sidebar from './Sidebar'
import addEmoticon from './AddEmoticon'

const handleClick = (event) => addEmoticon(event.currentTarget.innerHTML)
const emoticons = (row, col) => String.fromCodePoint(row * 4 + col + 127902)

const EmojiRenderer = ({ columnIndex, rowIndex, key, style }) => (
  <div style={style} key={key}>
    <a onClick={handleClick}style={styles.emoji}>{emoticons(rowIndex, columnIndex)}</a>
  </div>
)
const EmojiGrid = () =>
  <div style={styles.emoji}>
    <Grid
      columnCount={4}
      columnWidth={60}
      height={700}
      width={310}
      rowCount={5000}
      rowHeight={70}
      cellRenderer={EmojiRenderer}
    />
  </div>

const Emoji = () => <Sidebar name="Emoji" collection={<EmojiGrid/>} />

export default Emoji

const styles = {
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    color: 'rgba(44, 45, 45, 1)',
    margin: '38px 18px 38px 38px',
  },
  emoji: {
    fontSize: 44,
    width: 240, 
  },
}
