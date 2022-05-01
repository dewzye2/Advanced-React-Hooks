import useFetch from '../hooks/useFetch'

function CustomHookExample1() {
  const {data, loading, error} = useFetch('https://jsonplaceholder.typicode.com/posts', {})

  if(loading) {
    return <h3>Loading...</h3>
  }

  return (
    <div>
      {data.map((post) => (
        <h4 key={post.id}>{post.title}</h4>
      ))}
    </div>
  )
}

export default CustomHookExample1