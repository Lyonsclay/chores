import { gql, graphql } from 'react-apollo'

export const AddEmoticon = ({ createEmoticon, ...props }) => {
  function handleAddEmoticon (e) {
    console.log(e)

    let character = e.target.elements.character.value

    createEmoticon(character, 'player')

    // reset form
  }
  return  <div onClick={handleAddEmoticon}>{props.children}</div>

}

export const createEmoticon = gql`
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
    })
  })
})(AddEmoticon)
