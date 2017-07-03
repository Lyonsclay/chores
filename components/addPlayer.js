import React from 'react'
import { gql, graphql } from 'react-apollo'

const AddPlayer = ({ createPlayer }) => {
  function handleSubmit (e) {
    e.preventDefault()

    const name = e.target.elements.name.value
    const description = e.target.elements.description.value
    const photoUrl = e.target.elements.photoUrl.value
    createPlayer(name, photoUrl, description)

    // reset form
    e.target.elements.name.value = ''
    e.target.elements.description.value = ''
    e.target.elements.photoUrl.value = ''
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Add Player</h1>
        <div>
          <input placeholder='name' name='name' />
          <input placeholder='photo url' name='photoUrl' />
        </div>
        <textarea placeholder='description' name='description' rows='4' cols='30' />
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
        textarea {
          border: none;
        }
          `}</style>
      </form>
    </div>
  )
}

const createPlayer = gql`
  mutation createPlayer($name: String!, $photoUrl: String, $description: String) {
    createPlayer(name: $name, photoUrl: $photoUrl, description: $description) {
      id
      name
      photoUrl
      description
      updatedAt
      createdAt
      }
  }
`

export default graphql(createPlayer, {
  props: ({ mutate }) => ({
    createPlayer: (name, photoUrl, description) => mutate({
      variables: { name, photoUrl, description },
      updateQueries: {
        allPlayers: (previousResult, { mutationResult }) => {
          const newPlayer = mutationResult.data.createPlayer
          return Object.assign({}, previousResult, {
            allPlayers: [newPlayer, ...previousResult.allPlayers]
          })
        }
      }
    })
  })
})(AddPlayer)

// export default graphql(createPlayer)(AddPlayer)
