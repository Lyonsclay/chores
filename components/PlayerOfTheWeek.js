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
      <div style={styles.medallion}>
        <div style={styles.name}>
          <h3>{data.allWeeks[0].player.name}</h3>
        </div>
      </div>
      <h4>{data.allWeeks[0].player.description}</h4>
    </div>
  )
}

const styles = {
  player: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  medallion: {
    border: '3px solid rgba(20, 40, 80, 0.2)',
    borderRadius: 78,
    textShadow: '1px 1px 3px gray',
    width: 120,
    height: 70,
    paddingBottom: 20,
    backgroundColor: 'rgba(20, 140, 80, 0.1)',
  },
  name: {
    textAlign: 'center',
    fontFamily: 'helvetica',
    fontSize: 40,
    color: 'rgba(20, 10, 80, 0.5)',
    marginTop: -30,
  },
}

export default graphql(getPlayer)(playerOfTheWeek)
