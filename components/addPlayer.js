import React from 'react'
import { gql, graphql } from 'react-apollo'

const AddPlayer = ({ createPlayer }) => {
  function handleSubmit (e) {
    e.preventDefault()

    let name = e.target.elements.name.value
    let description = e.target.elements.description.value
    createPlayer(name, description)

    // reset form
    e.target.elements.name.value = ''
    e.target.elements.description.value = ''
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Add Player</h1>
        <input placeholder='name' name='name' />
        <input placeholder='description' name='description' />
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
        input {
          margin-bottom: 10px;
        }
          `}</style>
      </form>
    </div>
  )
}

const createPlayer = gql`
  mutation createPlayer($name: String!, $description: String!) {
    createPlayer(name: $name, description: $description) {
      id
      name
      description
      updatedAt
      createdAt
      }
  }
`

export default graphql(createPlayer, {
  props: ({ mutate }) => ({
    createPlayer: (name, description) => mutate({
      variables: { name, description },
      updateQueries: {
        allPlayers: (previousResult, { mutationResult }) => {
          const newPlayer = mutationResult.data.createPlayer
          return Object.assign({}, previousResult, {
            // Append the new chore
            allPlayers: [newPlayer, ...previousResult.allPlayers]
          })
        }
      }
    })
  })
})(AddPlayer)
