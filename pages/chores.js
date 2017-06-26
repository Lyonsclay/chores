// import Tasks from '../components/TaskList'
import { Grid } from 'react-virtualized'
import withData from '../lib/withData'
import App from '../components/App'
import Sidebar from '../components/Sidebar'
import RightBar from '../components/RightBar'
import Chores from '../components/Chores'

const Players = () => (
  <div style={styles.players}>
    <div style={styles.title}>
      The Players
    </div>
    <div style={styles.header}>
      <img style={styles.img} src="/static/bret.jpg" />
      <img style={styles.img} src="/static/brendan.jpg" />
      <img style={styles.img} src="/static/clay.jpg" />
    </div>
  </div>
)

const emoticons = [...Array(2620)].map((l, i) => String.fromCharCode(i))

const Emoji = ({ columnIndex, rowIndex }) => (
  <div style={styles.emoji}>
    {String.fromCharCode(Math.trunc(rowIndex / 4) + columnIndex + 9990)}
  </div>
)

export default withData((props) => (
  <div style={styles.app}>
    <Sidebar name="Chore List" collection={<Chores/>} />
    <Players />
    <div style={styles.grid}>
      <Grid
        columnCount={8}
        columnWidth={40}
        height={800}
        width={340}
        rowCount={100}
        rowHeight={40}
        cellRenderer={Emoji}
        />
    </div>
  </div>
))

const styles = {
  app: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(200, 215, 215, 0.8)',
  },
  players: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 95,
    paddingRight: 95,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'rgba(44, 45, 45, 1)',
    margin: '38px 18px 38px 38px',
  },
  header: {
    backgroundColor: 'rgba(44, 45, 45, 1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    borderRadius: 4,
    paddingTop: 20,
    paddingBottom: 20,
  },
  img: {
    maxWidth: '30%',
    borderRadius: 4,
  },
  grid: {
    width: 400, 
  },
  emoji: {
    fontSize: 38,
    width: 42,
  },
}
