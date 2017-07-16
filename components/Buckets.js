import { gql, graphql, compose } from 'react-apollo'
const getPlaya = gql`
  query getDaPlaya {
    allWeeks {
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
      emoticons {
        character
      }
    }
  }
`
const Bucket = ({ player }) => (
  <div style={styles.bucket}>
    {player.emoticons.map(emoticon => emoticon.character)}
  </div>)

const BucketsContainer = ({ data }) => (
  <div style={styles.collection}>
    {data.allPlayers.map(player => (<Bucket player={player} />))}
  </div>
)

const styles = {
  collection: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
  },
  bucket: {
    flexDirection: 'row',
    flexFlow: 'wrap',
    flex: 1,
    border: '2px solid gray',
    fontSize: 80,
    maxHeight: 300,
  },
}

export default compose(graphql(getPlaya), graphql(allPlayers))(BucketsContainer)
