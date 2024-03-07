import Stack from 'react-bootstrap/Stack';
import Post from './Post';
import { useContext } from 'react';
import DataContext from './context/DataContext';

function Home() {
  const { searchItems, loading, error } = useContext(DataContext)
  return (
    loading ? (
      <p style={{ margin: 20, fontWeight: "bold" }}>Posts are Loading</p>
    ) : error ? (
      <p style={{ margin: 20, fontWeight: "bold" }}>Error Occured : {error.message}</p>
    ) : searchItems.length ? (
      <Stack gap={3} className='my-5' style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
        {searchItems.map((post) => (
          <div key={post.id} style={{ width: "90vw" }}>
            <Post key={post.id} post={post} />
          </div>
        ))}
      </Stack>
    ) :
      (
        <p style={{ margin: 20, fontWeight: "bold" }}>There is No Posts</p>
      )
  );
}

export default Home;
