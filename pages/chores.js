import withData from '../lib/withData'
import App from '../components/App'
import Sidebar from '../components/Sidebar'
import Chores from '../components/Chores'
import Emoji from '../components/Emoji'
import Players from '../components/Players'
import PlayerOfTheWeek from '../components/PlayerOfTheWeek'
import Buckets from '../components/Buckets'

export default withData((props) => {
  let player
  try {
    player = props.serverState.apollo.data.allPlayers[1]
  }
  catch (e) {
    player = {}
  }
  return (
    <div style={styles.main}>
      <div style={styles.content}>
        <Sidebar
          name="Chores"
          collection={<Chores/>}
          style={styles.chores}
          />
        <div>
          <Players />
          <PlayerOfTheWeek />
          <Buckets />
        </div>
        <Emoji player={player}/>
      </div>
    </div>
  )})

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(200, 215, 215, 0.8)',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxWidth: 1800,
  },
  players: {
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
