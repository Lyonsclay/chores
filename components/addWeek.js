import React from 'react'
import { gql, graphql, compose } from 'react-apollo'

const daPlaya = ({ createWeek, data: { allPlayers } }) => {
  function handleSubmit(e) {
    e.preventDefault()
    console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&')
    console.log(e.target.elements.notes.value)
    console.log(e.target.elements[0].value)
    console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&')

    const notes = e.target.elements.notes.value
    const player = e.target.elements[0].value

    createWeek(player, notes)

    e.target.elements.notes.value = ''
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Who's da Playa</h1>
        <div>
          <select>
            {allPlayers.map(player => <option value={player.id}>{player.name}</option>)}
          </select>
        </div>
        <textarea placeholder='notes' name='notes' rows='4' cols='30' />
        <button type='submit'>Add</button>
        <style jsx>{`
        form {
          border-bottom: 1px solid #ececec;
          padding-bottom: 20px;
          margin-bottom: 20px;
        }
        h1 {
          font-size: 20px;
        }
        input j
          margin-bottom: 10px;
        }
        textarea {
          border: none;
        }
          `}</style>
      </form>
    </div>
  )
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

const _addWeek = gql`
  mutation createWeek($player: ID!, $notes: String) {
    createWeek(playerId: $player, notes: $notes) {
      player {
        id
      }
      notes
      updatedAt
      createdAt
    }
  }
`

// const AddWeek = graphql(_addWeek, {
//   props: ({ mutate }) => ({
//     createWeek: (player, notes) => mutate({
//       variables: { player, notes },
//     })
//   })
// })(daPlaya)
// const AllPlayers = graphql(_allPlayers, {
//   options: {
//     variables: {
//       skip: 0,
//     }
//   },
//   props: ({ data }) => ({
//     data,
//     loadMorePlayers: () => {
//       return data.fetchMore({
//         variables: {
//           skip: data.allPlayers.length
//         },
//         updateQuery: (previousResult, { fetchMoreResult }) => {
//           console.log(previousResult)
//           if (!fetchMoreResult) {
//             return previousResult
//           }
//           return Object.assign({}, previousResult, {
//             // Append the new posts results to the old one
//             allPlayers: [...previousResult.allPlayers, ...fetchMoreResult.allPlayers]
//           })
//         }
//       })
//     }
//   })
// })
// export default compose(AddWeek, AllPlayers)(daPlaya)


const AddWeek = graphql(_addWeek, {
  props: ({ mutate }) => ({
    createWeek: (player, notes) => mutate({
      variables: { player, notes },
    })
  })
})
const AllPlayers = graphql(allPlayers, {
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
          console.log(previousResult)
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
})
export default compose(AddWeek, AllPlayers)(daPlaya)

