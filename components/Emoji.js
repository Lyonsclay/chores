import { gql, graphql } from 'react-apollo'
import React from 'react'
import { Grid } from 'react-virtualized'
import Sidebar from './Sidebar'
// import addEmoticon, { createEmoticon } from './AddEmoticon'

// const handleClick = (event) => addEmoticon(event.currentTarget.innerHTML)
// const handleClick = (event) => console.log(event.currentTarget.innerHTML)
// const handleClick = (event) => console.log(typeof addEmoticon)
// const handleClick = (e) => createEmoticon(e.target.elements.character.value, 'pirate')

const emoticons = (row, col) => String.fromCodePoint(row * 4 + col + 127902)

export const AddEmoticon = (props) => {
  const { rowIndex, columnIndex } = props
  console.log('  add emoticon """" props  """""    :: ', props)
  function handleAddEmoticon (e) {
    console.log(e)

    let character = e.target.innerHTML

    props.createEmoticon(character, 'player')

  }
  return (
    <div onClick={handleAddEmoticon}>
      {emoticons(rowIndex, columnIndex)}
    </div>
  )
}
const EmojiRenderer = ({ columnIndex, rowIndex, key, style }) => (
  <div style={style} key={key}>
    {React.createElement(MashRowCol, { rowIndex, columnIndex })}
  </div>
)
const EmojiGrid = () =>(
  <div style={styles.emoji}>
    <Grid
      columnCount={4}
      columnWidth={60}
      height={700}
      width={310}
      rowCount={5000}
      rowHeight={70}
      cellRenderer={EmojiRenderer}
      />
  </div>
)

const Emoji = () => (<Sidebar name="Emoji" collection={<EmojiGrid/>} />)

export default Emoji

const styles = {
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    color: 'rgba(44, 45, 45, 1)',
    margin: '38px 18px 38px 38px',
  },
  emoji: {
    fontSize: 44,
    width: 240,
  },
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

const MashRowCol = graphql(createEmoticon, {
  props: ({ mutate }) => ({
    createEmoticon: (character, player) => mutate({
      variables: { character, player },
    })
  })
})(AddEmoticon)
