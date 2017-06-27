const Players = () => (
  <div style={styles.players}>
    <div style={styles.title}>
      The Players
    </div>
    <div style={styles.header}>
      <img style={styles.img} src="/static/bret.jpg" />
      <img style={styles.img} src="/static/brendan.jpg" />
      <img style={styles.img} src="/static/clay.jpg" />
    </div>
  </div>
)

export default Players

const styles = {
  players: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 100,
    paddingRight: 100,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'rgba(44, 45, 45, 1)',
    margin: '38px 18px 38px 38px',
  },
  header: {
    backgroundColor: 'rgba(44, 45, 45, 1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    borderRadius: 4,
    paddingTop: 20,
    paddingBottom: 20,
    padding: '30px 30px 30px 30px',
  },
  img: {
    maxWidth: '30%',
    borderRadius: 4,
  },
}
