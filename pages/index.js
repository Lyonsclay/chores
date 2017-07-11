import App from '../components/App'
import Header from '../components/Header'
import AddChore from '../components/AddChore'
import ChoreList from '../components/ChoreList'
import AddPlayer from '../components/addPlayer'
import PlayerList from '../components/PlayerList'
import PlayerOfTheWeek from '../components/PlayerOfTheWeek'
import AddWeek from '../components/addWeek'
import withData from '../lib/withData'

export default withData((props) => (
  <App style={styles.main}>
    <Header pathname={props.url.pathname} />
    <div style={styles.section}>
      <AddChore />
      <ChoreList />
    </div>
    <div style={styles.section}>
      <div style={styles.forms}>
        <AddPlayer/>
        <AddWeek />
      </div>
      <PlayerList />
    </div>
    <PlayerOfTheWeek />
  </App>
))

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'orange',
  },
  section: {
    flexDirection: 'column',
    alignItems: 'top',
    justifyContent: 'space-between',
    maxWidth: '70%',
    marginLeft: '15%',
  },
  forms: {
    flexDirection: 'row',
    marginLeft: 50,
  }
}
