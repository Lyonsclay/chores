import React from 'react'
import { gql, graphql } from 'react-apollo'

export const deletePlayer = gql`
  mutation deletePlayer($id: ID!) {
    deletePlayer(id: $id) {
      id
      }
  }
`


// export default graphql(deletePlayer, {
//   props: ({ mutate }) => ({
//     deletePlayer: (id) => mutate({
//       variables: { id },
//       updateQueries: {
//         allPlayers: (previousResult, { mutationResult }) => {
//           const newPlayer = mutationResult.data.deletePlayer
//           return Object.assign({}, previousResult, {
//             allPlayers: [newPlayer, ...previousResult.allPlayers]
//           })
//         }
//       }
//     })
//   })
// })
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
  // })(({ deletePlayer }) => Team(allPlayers, deletePlayer))
})
