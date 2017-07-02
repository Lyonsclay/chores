import { gql, graphql } from 'react-apollo'

const AddEmoticon = () => ({ createEmoticon }) => {
  function handleSubmit (e) {
    e.preventDefault()

    let character = e.target.elements.character.value

    createEmoticon(character, player)

    // reset form
  }
}

const createEmoticon = gql`
  mutation createEmoticon($character: String!, $player: Player!) {
    createEmoticon(title: $title) {
      id
      character
      player
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
