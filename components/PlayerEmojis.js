import { gql, graphql } from 'react-apollo'
function AddPlayerEmoji ({ createPlayerEmoji }) {
  function handleSubmit (e) {
    e.preventDefault()

    let title = e.target.elements.title.value
    let description = e.target.elements.description.value

    if (title === '') {
      window.alert('Please add at least a title.')
      return false
    }

    createPlayerEmoji(title, description)

    // reset form
    e.target.elements.title.value = ''
    e.target.elements.description.value = ''
  }
}

const createPlayerEmoji = gql`
  mutation createPlayerEmoji($emoji: String!, $player: ID!) {
    createPlayerEmoji(title: $title) {
      id
      title
      createdAt
      }
  }
`

export default graphql(createPlayerEmoji, {
  props: ({ mutate }) => ({
    createPlayerEmoji: (title) => mutate({
      variables: { title },
      updateQueries: {
        allPlayerEmojis: (previousResult, { mutationResult }) => {
          const newPlayerEmoji = mutationResult.data.createPlayerEmoji
          return Object.assign({}, previousResult, {
            // Append the new chore
            allPlayerEmojis: [newPlayerEmoji, ...previousResult.allPlayerEmojis]
          })
        }
      }
    })
  })
})(AddPlayerEmoji)
