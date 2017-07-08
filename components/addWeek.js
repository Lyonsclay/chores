import React from 'react'
import { gql, graphql } from 'react-apollo'

const daPlaya = ({ createWeek, players = [], ...props}) => {
  console.log('YYYYYYYYYYYYYYYYYYYYYYYYYYYYYY')
  console.log(props)
  console.log('YYYYYYYYYYYYYYYYYYYYYYYYYYYYYY')
  function handleSubmit(e) {
    e.preventDefault()

    const notes = e.target.notes.value
    const player = e.target.player.value
    createWeek(player, notes)

    e.target.elements.notes.value = ''
    e.target.elements.player.value = ''
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Who's da Playa</h1>
        <div>
          <select>
            {players.map(player => <option value={player.id}>player.name</option>)}
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

const addWeek = gql`
  mutation createWeek($player: Player, $notes: String) {
    createWeek(player: $player, notes: $notes) {
      id
      player
      notes
      updatedAt
      createdAt
      }
  }
`

export default graphql(addWeek, {
  props: ({ mutate }) => ({
    createWeek: (player, notes) => mutate({
      variables: { player, notes },
    })
  })
})(daPlaya)

