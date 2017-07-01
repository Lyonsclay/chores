const players = [
  {
    name: 'Bret',
    photoUrl: 'https://scontent.xx.fbcdn.net/v/t1.0-9/18057802_10212940557657527_4238752437899232782_n.jpg?oh=52e09dd4d4efd463d75f9496301177d6&oe=59D2C051',
  },
  {
    name: 'Brendan',
    photoUrl: 'https://scontent.xx.fbcdn.net/v/t1.0-9/303491_3881033225642_881822228_n.jpg?oh=0acb3b31983536d4997bfc2f2e4cd7c8&oe=59C6D38F',
  },
  {
    name: 'Clay',
    photoUrl: 'https://scontent.xx.fbcdn.net/v/t1.0-9/293383_2119323635830_7223276_n.jpg?oh=d727ab19994bbd9ecf45588ed43bb2ef&oe=59E080BD',
  },
]

const Bucket = (emoticon) => (
  <div style={styles.bucket}>
    {emoticon}
  </div>
)

const Buckets = () => {players.map(
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
