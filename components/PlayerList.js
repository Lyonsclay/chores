import React from 'react'
import { gql, graphql } from 'react-apollo'
import RemovePlayer, { deletePlayer } from '../components/removePlayer'

const PLAYERS_PER_PAGE = 10

function PlayerList ({ data: { allPlayers, loading }, loadMorePlayers }) {
  function Team({ deletePlayer }) {
    return (
      <ul style={styles.players}>
        {allPlayers.map((player, index) => (
          <li
            key={player.id}
            style={{ listStyleType: 'none' }}
            >
            <div >
              <div style={styles.intro}>
                <p>{player.name}</p>
              </div>
              <img
                src={player.photoUrl}
                width="270px"
                style={styles.img}
                />
              <p style={styles.description}>{player.description}</p>
              <button
                name="button"
                onClick={() => deletePlayer(player.id)}
                style={{ backgroundColor: 'rgba(180, 50, 50, 1)'}}
                >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    )
  }

  const styles = {
    players: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    intro: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
    img: {
      outline: '8px solid rgba(24, 23, 23, 0.7)',
      outlineOffset: -8,
    },
    description: {
      width: 250,
    },
  }

  const Players = graphql(deletePlayer, {
    props: ({ mutate }) => ({
      deletePlayer: (id) => mutate({
        variables: { id },
        updateQueries: {
          allPlayers: (previousResult, { mutationResult }) => {
            return Object.assign(
              {},
              previousResult,
              {
                allPlayers: previousResult.allPlayers.filter(player => id !== player.id)
              }
            )
          }
        }
      })
    })
    // })(({ deletePlayer }) => Team(allPlayers, deletePlayer))
  })(Team)

  if (allPlayers && allPlayers.length) {
    return (
      <section >
        <Players />
        <style jsx>{`
          section {
            padding-bottom: 20px;
          }
          li {
            display: block;
            margin-bottom: 10px;
            list-style-type: none;
          }
          div {
            align-items: center;
            display: flex;
          }
          a {
            font-size: 14px;
            margin-right: 10px;
            text-decoration: none;
            padding-bottom: 0;
            border: 0;
          }
          span {
            font-size: 14px;
            margin-right: 5px;
          }
          ul {
            margin: 0;
            padding: 0;
            list-style: none;
          }
          button {
            margin-left: 10px;
          }
          button:before {
            align-self: center;
            border-style: solid;
            border-width: 6px 4px 0 4px;
            border-color: #ffffff transparent transparent transparent;
            height: 0;
            margin-right: 5px;
            width: 0;
          }
          `}</style>
        </section>
    )
  }
  return <div>Loading</div>
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
})(PlayerList)
