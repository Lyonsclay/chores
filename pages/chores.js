// import Tasks from '../components/TaskList'
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

const Emoji = () => (
  <div>
    &#x260F;
  </div>
)

export default withData((props) => (
  <div style={styles.app}>
    <Sidebar name="Chore List" collection={<Chores/>} />
    <Players />
    <Sidebar name="Emoticons" collection={<Emoji/>} />
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
    flexDirection: 'row',
    borderRadius: 4,
  },
  img: {
    padding: 40,
  },
}

