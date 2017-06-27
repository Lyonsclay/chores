const Sidebar = ({ name, collection, style = {} }) => (
  <div style={{...styles.sidebar, ...style}}>
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
    marginTop: 95,
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color: 'rgba(44, 45, 45, 1)',
    textAlign: 'center',
  },
  collection: {
    height: 800,
    borderRadius: 4,
    fontSize: 26,
  },
}

export default Sidebar
