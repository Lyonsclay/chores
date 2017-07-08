import { gql, graphql } from 'react-apollo'
const getPlayer = gql`
  query getDaPlaya {
    allWeeks(first:1) {
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
      <h1>{data.allWeeks[0].player.name}</h1>
      <h1>{data.allWeeks[0].player.description}</h1>
      <h4>{JSON.stringify(data)}</h4>
    </div>
  )
}


export default graphql(getPlayer)(playerOfTheWeek)
