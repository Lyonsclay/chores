import { gql, graphql } from 'react-apollo'

const CHORES_PER_PAGE = 10

function ChoreList ({ data: { allChores, loading }, loadMoreChores }) {
  if (allChores && allChores.length) {
    return (
      <section>
        <ul>
          {allChores.map((chore, index) =>
            <li style={styles.li} key={chore.id}>
              <div>
                <span>{index + 1}. </span>
                <p>{chore.title}</p>
              </div>
            </li>
          )}
        </ul>
      </section>
    )
  }
  return <div>Loading</div>
}

const allChores = gql`
  query allChores($first: Int, $skip: Int) {
    allChores(orderBy: createdAt_DESC, first: $first, skip: $skip) {
      id
      title
      description
      createdAt
      updatedAt
    },
    _allPostsMeta {
      count
    }
  }
`

const styles = {
  li: {
    color: 'rgba(200, 215, 215, 0.8)',
    color: 'white',
  },
}

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList)
export default graphql(allChores, {
  options: {
    variables: {
      skip: 0,
    }
  },
  props: ({ data }) => ({
    data,
    loadMoreChores: () => {
      return data.fetchMore({
        variables: {
          skip: data.allChores.length
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return previousResult
          }
          return Object.assign({}, previousResult, {
            // Append the new posts results to the old one
            allChores: [...previousResult.allChores, ...fetchMoreResult.allChores]
          })
        }
      })
    }
  })
})(ChoreList)
