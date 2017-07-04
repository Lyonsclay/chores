import { gql, graphql } from 'react-apollo'

const CHORES_PER_PAGE = 10

function ChoreList ({ data: { allChores, loading } }) {
  if (allChores && allChores.length) {
    return (
      <section>
        <ul>
          {allChores.map((chore, index) =>
            <li key={chore.id}>
              <div>
                <span>{index + 1}. </span>
                <p>{chore.title}</p>
                <p>{chore.description}</p>
              </div>
            </li>
          )}
        </ul>
        <style jsx>{`
          section {
            padding-bottom: 20px;
          }
          li {
            display: block;
            margin-bottom: 10px;
          }
          div {
            align-items: center;
            display: flex;
          }
          a {
            font-size: 14px;
            margin-right: 10px;
            text-decoration: none;
            padding-bottom: 0;
            border: 0;
          }
          span {
            font-size: 14px;
            margin-right: 5px;
          }
          ul {
            margin: 0;
            padding: 0;
          }
          button:before {
            align-self: center;
            border-style: solid;
            border-width: 6px 4px 0 4px;
            border-color: #ffffff transparent transparent transparent;
            content: "";
            height: 0;
            margin-right: 5px;
            width: 0;
          }
        `}</style>
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
    _allChoresMeta {
      count
    }
  }
`

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
