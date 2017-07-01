import { gql, graphql } from 'react-apollo'
function AddEmoticon ({ createEmoticon }) {
  function handleSubmit (e) {
    e.preventDefault()

    let title = e.target.elements.title.value
    let description = e.target.elements.description.value

    if (title === '') {
      window.alert('Please add at least a title.')
      return false
    }

    createEmoticon(title, description)

    // reset form
    e.target.elements.title.value = ''
    e.target.elements.description.value = ''
  }
}

const createEmoticon = gql`
  mutation createEmoticon($character: String!, $player: ID!) {
    createEmoticon(title: $title) {
      id
      title
      createdAt
      }
  }
`

export default graphql(createEmoticon, {
  props: ({ mutate }) => ({
    createEmoticon: (character, player) => mutate({
      variables: { character, player },
      updateQueries: {
        allEmoticons: (previousResult, { mutationResult }) => {
          const newEmoticon = mutationResult.data.createEmoticon
          return Object.assign({}, previousResult, {
            // Append the new chore
            allEmoticons: [newEmoticon, ...previousResult.allEmoticons]
          })
        }
      }
    })
  })
})(AddEmoticon)
