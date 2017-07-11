import { gql, graphql } from 'react-apollo'

const Players = ({ data: { allPlayers } }) => {
  if (!(allPlayers && allPlayers.length)) { return (<div>loading</div>)}
  return (
    <div style={styles.players}>
      <div style={styles.title}>
        The Players
      </div>
      <div style={styles.header}>
        {allPlayers.map(player => (
          <img style={styles.img} src={player.photoUrl} />
        ))}
      </div>
    </div>
  )
}
const styles = {
  players: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 100,
    paddingRight: 100,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'rgba(44, 45, 45, 1)',
    margin: '38px 18px 38px 38px',
  },
  header: {
    backgroundColor: 'rgba(44, 45, 45, 1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    borderRadius: 4,
    paddingTop: 20,
    paddingBottom: 20,
    padding: '30px 30px 30px 30px',
  },
  img: {
    maxWidth: '30%',
    borderRadius: 4,
  },
}

const allPlayers = gql`
  query allPlayers($first: Int, $skip: Int) {
    allPlayers(orderBy: createdAt_DESC, first: $first, skip: $skip) {
      id
      name
      photoUrl
      description
      createdAt
      updatedAt
    },
    _allPlayersMeta {
      count
    }
  }
`

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList)
export default graphql(allPlayers, {
  options: {
    variables: {
      skip: 0,
    }
  },
  props: ({ data }) => ({
    data,
    loadMorePlayers: () => {
      return data.fetchMore({
        variables: {
          skip: data.allPlayers.length
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return previousResult
          }
          return Object.assign({}, previousResult, {
            // Append the new posts results to the old one
            allPlayers: [...previousResult.allPlayers, ...fetchMoreResult.allPlayers]
          })
        }
      })
    }
  })
})(Players)
