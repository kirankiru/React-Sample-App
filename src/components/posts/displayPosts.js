import React, { useEffect, useState } from 'react';
import Card from '../common/card';
import Button from '../common/button';
import './displayPosts.scss';
import postsApiService from '../../services/postsApiService';
import {
  POST_ERROR_MSG,
  VIEW_POSTS,
  ADD_POSTS,
} from '../../utils/constants';

const DisplayPosts = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const limit = 2;
      const userPosts = await postsApiService.fetchPosts(limit);
      setPosts(userPosts);
    } catch (e) {
      // handle error case here
      console.log(e);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="card-container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="flex-grow-1 text-center text-secondary">{VIEW_POSTS}</h2>
        <Button title="Add" variant="primary">
          {ADD_POSTS}
        </Button>
      </div>
      {
         posts?.length > 0 && posts.map((post) => {
           return (
             <Card key={post.id} title={`Title:  ${post.title}`} text={`Body:  ${post.body}`} />
           );
         })
      }
      {posts?.length <= 0 && (
        <p className="flex-grow-1 text-center text-secondary">
          {POST_ERROR_MSG}
        </p>
      )}
    </div>
  );
};

export default DisplayPosts;
