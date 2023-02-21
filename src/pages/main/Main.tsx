import { useState, useEffect } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../config/firebase'
import Post from '../main/Post'

export interface blogPost {
  id: string;
  userId: string;
  title: string;
  username: string;
  description: string;
}

const Main = () => {
  const [postsList, setPostsList] = useState<blogPost[] | null>(null);
  const postRef = collection(db, "posts");

  const getPosts = async () => {
    const data = await getDocs(postRef);
    setPostsList(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as blogPost[]
    );
  };

  useEffect(() => {
    getPosts()
  }, []);

  return (
    <div>
      {postsList?.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
};

export default Main