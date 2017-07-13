import { gql, graphql } from 'react-apollo'
const getPlaya = gql`
  query getDaPlaya {
    allWeeks(last:1) {
      player {
        name
        id
        description
      }
    }
  }
`
const allPlayers = gql`
  query allPlayers {
    allPlayers {
      name
      id
    }
  }
`
const getPlayerEmoji = gql`
  query getPlayerEmoji($playerName: String!) {
    allEmoticons(name: $playerName) {
      player {
        name
        id
        description
      }
    }
  }
`
const Buckets = ({ data }) => (
  <div style={styles.collection}>
    {JSON.stringify(data)}
    {data.allPlayers.map(player => [0, 1, 2].map(emoticon => (
      <div style={styles.bucket}>{emoticon}</div>)
    ))}
      </div>
)

const styles = {
  bucket: {
    border: '2px solid gray',
  },
}

export default graphql(allPlayers, getPlayerEmoji)(Buckets)
