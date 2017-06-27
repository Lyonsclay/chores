import withData from '../lib/withData'
import App from '../components/App'
import Sidebar from '../components/Sidebar'
import RightBar from '../components/RightBar'
import Chores from '../components/Chores'
import Emoji from '../components/Emoji'
import Players from '../components/Players'

export default withData((props) => (
  <div style={styles.app}>
    <Sidebar
      name="Chores"
      collection={<Chores/>}
      style={styles.chores}
      />
    <Players />
    <Emoji />
  </div>
))

const styles = {
  app: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'rgba(200, 215, 215, 0.8)',
  },
  players: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 95,
    paddingRight: 95,
  },
  chores: {
    width: 300,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'rgba(44, 45, 45, 1)',
    margin: '38px 18px 38px 38px',
  },
  img: {
    maxWidth: '30%',
    borderRadius: 4,
  },
  emoji: {
    paddingTop: 20,
    width: 400, 
    paddingRight: 30,
  },
  emoji: {
    fontSize: 48,
  },
}
