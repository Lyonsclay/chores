import { gql, graphql } from 'react-apollo'
const getPlayer = gql`
  query playerOfTheWeek {
    allPlayerOfTheWeeks {
      player {
        name
        id
        description
      }
    }
  }
`
const playerOfTheWeek = ({ data }) => {
  return (
    <div>
      <h1>{JSON.stringify(data.allPlayerOfTheWeeks)}Bob</h1> </div>
  )
}


export default graphql(getPlayer)(playerOfTheWeek)
