const Bucket = (emoticon) => (
  <div style={styles.bucket}>
    {emoticon}
  </div>
)

const Buckets = (collection) => {collection.map(
  emoticon =>
    <div style={styles.collection}>
    {emoticon}
  </div>
)}

const styles = {
  bucket: {
    border: '2px solid gray',
  },
}
