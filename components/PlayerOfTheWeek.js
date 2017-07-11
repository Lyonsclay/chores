import { gql, graphql } from 'react-apollo'
const getPlayer = gql`
  query getDaPlaya {
    allWeeks(last:1) {
      player {
        name
        id
        description
      }
    }
  }
`
const playerOfTheWeek = ({ data }) => {
  return (
    <div style={styles.player}>
      <h2>Playa of the Week</h2>
      <h3>{data.allWeeks[0].player.name}</h3>
      <h4>{data.allWeeks[0].player.description}</h4>
    </div>
  )
}

const styles = {
  player: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
}


export default graphql(getPlayer)(playerOfTheWeek)
