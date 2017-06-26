import App from '../components/App'
import Header from '../components/Header'
import Submit from '../components/Submit'
import PostList from '../components/PostList'
import AddChore from '../components/AddChore'
import ChoreList from '../components/ChoreList'
import withData from '../lib/withData'

export default withData((props) => (
  <App>
    <Header pathname={props.url.pathname} />
    <AddChore />
    <ChoreList />
  </App>
))
