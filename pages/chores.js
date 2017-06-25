// import Tasks from '../components/TaskList'
import withData from '../lib/withData'
import App from '../components/App'

const Players = () => (
  <div>
    <img src="assets/bret.jpg" />
    <img src="assets/brendan.jpg" />
    <img src="assets/clay.jpg" />
  </div>
)

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
