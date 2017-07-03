import React from 'react'
import { gql, graphql } from 'react-apollo'

export const deletePlayer = gql`
  mutation deletePlayer($id: ID!) {
    deletePlayer(id: $id) {
      id
      }
  }
`


function Team(props) {
  const { deletePlayer, allPlayers } = props
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

export default graphql(deletePlayer, {
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
})(Team)
