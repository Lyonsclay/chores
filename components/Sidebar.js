const Sidebar = ({ name, collection }) => (
  <div style={styles.sidebar}>
    <div style={styles.title}>
      {name}
    </div>
    <div style={styles.collection}>
      {collection}
    </div>
  </div>
)

const styles = {
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    width: 280,
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color: 'rgba(44, 45, 45, 1)',
  },
  collection: {
    width: 280,
    height: 800,
    backgroundColor: 'rgba(44, 45, 45, 1)',
    borderRadius: 4, 
  },
}

export default Sidebar
