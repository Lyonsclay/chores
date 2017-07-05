import { gql, graphql } from 'react-apollo'
const getPlayer = gql`
  query weekPlayer {
    allPlayerOfTheWeeks {
      playerId
    }
  }
`
const playerOfTheWeek = ({ getPlayer }) => {
  return (
    <div>
      <h1>What the fuck</h1>
      <h1>{JSON.stringify(getPlayer)}Bob</h1>
    </div>
  )
}


export default graphql(getPlayer)(playerOfTheWeek)
