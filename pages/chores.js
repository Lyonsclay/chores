import withData from '../lib/withData'
import App from '../components/App'
import Sidebar from '../components/Sidebar'
import RightBar from '../components/RightBar'
import Chores from '../components/Chores'
import Emoji from '../components/Emoji'
import Players from '../components/Players'

export default withData((props) => {
  let player
  if (props &&
      props.serverState &&
      props.serverState.apollo &&
      props.serverState.apollo.data && 
      props.serverState.apollo.data.allPlayers
     ) {
    player = props.serverState.apollo.data.allPlayers[1]
  } else {
    player = {}
  }
  return (
  <div style={styles.main}>
    <div style={styles.app}>
      <Sidebar
        name="Chores"
        collection={<Chores/>}
        style={styles.chores}
        />
      <Players />
      <Emoji player={player}/>
    </div>
  </div>
)})

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'rgba(200, 215, 215, 0.8)',

  },
  app: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxWidth: 1800,
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
