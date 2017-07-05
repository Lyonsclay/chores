import App from '../components/App'
import Header from '../components/Header'
import AddChore from '../components/AddChore'
import ChoreList from '../components/ChoreList'
import AddPlayer from '../components/addPlayer'
import PlayerList from '../components/PlayerList'
import PlayerOfTheWeek from '../components/PlayerOfTheWeek'
import withData from '../lib/withData'

export default withData((props) => (
  <App>
    <Header pathname={props.url.pathname} />
    <PlayerOfTheWeek />
    <div style={styles.section}>
      <AddChore />
      <ChoreList />
    </div>
    <div style={styles.section}>
      <AddPlayer/>
      <PlayerList />
    </div>
  </App>
))

const styles = {
  section: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'top',
    justifyContent: 'space-between',
    maxWidth: '70%',
    marginLeft: '15%',
  }
}
