import { gql, graphql } from 'react-apollo'

function AddChore ({ createChore }) {
  function handleSubmit (e) {
    e.preventDefault()

    let title = e.target.elements.title.value
    let description = e.target.elements.description.value

    if (title === '') {
      window.alert('Please add at least a title.')
      return false
    }

    createChore(title, description)

    // reset form
    e.target.elements.title.value = ''
    e.target.elements.description.value = ''
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add Chore</h1>
      <input placeholder='title' name='title' />
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
  )
}

const createChore = gql`
  mutation createChore($title: String!, $description: String!) {
    createChore(title: $title, description: $description) {
      id
      title
      description
      createdAt
      updatedAt
      }
  }
`

export default graphql(createChore, {
  props: ({ mutate }) => ({
    createChore: (title, description) => mutate({
      variables: { title, description },
      updateQueries: {
        allChores: (previousResult, { mutationResult }) => {
          const newChore = mutationResult.data.createChore
          return Object.assign({}, previousResult, {
            // Append the new chore
            allChores: [newChore, ...previousResult.allChores]
          })
        }
      }
    })
  })
})(AddChore)
