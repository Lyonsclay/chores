// import Tasks from '../components/TaskList'
import withData from '../lib/withData'
import App from '../components/App'

const Players = () => (
  <div style={styles.container}>
    <div style={styles.title}>
      The Players
    </div>
    <div style={styles.head}>
      <img style={styles.img} src="/static/bret.jpg" />
      <img style={styles.img} src="/static/brendan.jpg" />
      <img style={styles.img} src="/static/clay.jpg" />
    </div>
  </div>
)

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: 1400,
    margin: 'auto',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'rgba(44, 45, 45, 1)',
    margin: '38px 18px 38px 38px',
  },
  head: {
    backgroundColor: 'rgba(44, 45, 45, 1)',
    display: 'flex',
    maxWidth: '100%',
    alignItems: 'center',
    border: '4px solid #1A5276',
    borderRadius: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  img: {
    padding: 40,
  }
}

const Tasks = (tasks) => (
  <div>Tasks</div>
)

const AddTask = () => (
  <div>Add</div>
)

export default withData((props) => (
  <App>
    <Players />
    <Tasks/>
    <AddTask/>
  </App>
))
