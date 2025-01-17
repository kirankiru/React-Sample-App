import React, { useEffect, useState } from 'react';
import Card from '../common/card';
import Button from '../common/button';
import LoadingSpinner from '../common/loadingSpinner';
import './displayPosts.scss';

import postsApiService from '../../services/postsApiService';
import {
  POST_ERROR_MSG,
  VIEW_POSTS,
  ADD_POSTS,
} from '../../utils/constants';
import utils from '../../utils/utils';
import EditPosts from './edit-posts/edit-posts';

const { generateRandomString } = utils;

const DisplayPosts = () => {
  const [posts, setPosts] = useState([]);
  const [showLoader, setLoader] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);

  const fetchPosts = async () => {
    try {
      const limit = 2;
      setLoader(true);
      const userPosts = await postsApiService.fetchPosts(limit);
      setPosts(userPosts);
      setLoader(false);
    } catch (e) {
      // handle error case here
      console.log(e);
      setPosts([]);
      setLoader(false);
    }
  };

  const createPosts = async (payload) => {
    try {
      setLoader(true);
      const newPosts = await postsApiService.savePosts(payload);
      const allPosts = [...posts, newPosts];
      setPosts(allPosts);
      setLoader(false);
    } catch (e) {
      // handle error case here
      console.log(e);
      setLoader(false);
    }
  };

  const onAddPosts = () => {
    const payload = {
      title: generateRandomString(4), // generating random title
      body: generateRandomString(15), // generating random body
      userId: '1',
    };
    createPosts(payload);
  };

  const handleCloseModal = () => {
    setCurrentPost(null);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleEditPost = (selectedPost) => {
    setCurrentPost(selectedPost);
  };

  const updatePosts = (updatedPosts) => {
    console.log('updated posts: ', updatedPosts);
    const oldPosts = posts.map((post) => {
      return post;
    });
    console.log();
    const selectedPostIndex = oldPosts.findIndex((post) => {
      return post.id === updatedPosts.id;
    });
    if (selectedPostIndex > -1) {
      oldPosts[selectedPostIndex].title = updatedPosts.title;
      oldPosts[selectedPostIndex].body = updatedPosts.body;
      setPosts(oldPosts);
      setCurrentPost(null);
    }
  };

  return (
    <div className="card-container">
      <div className="d-flex justify-content-between align-items-center mb-3 mt-1">
        <h2 className="flex-grow-1 text-center view-posts-text view-text">{VIEW_POSTS}</h2>
        {!showLoader && (
          <Button onClick={onAddPosts} title="Add" variant="primary">
            {ADD_POSTS}
          </Button>
        )}

      </div>
      { showLoader && <LoadingSpinner /> }
      {
         posts?.length > 0 && posts.map((post) => {
           return (
             <div>
               <Card key={post.id} title={`Title:  ${post.title}`} text={`Body:  ${post.body}`} onEdit={() => handleEditPost(post)} />
             </div>
           );
         })
      }
      {posts?.length <= 0 && (
        <p className="flex-grow-1 text-center text-secondary">
          {POST_ERROR_MSG}
        </p>
      )}
      {
        currentPost && <EditPosts data={currentPost} show onClose={handleCloseModal} onSave={updatePosts} />
      }
    </div>
  );
};

export default DisplayPosts;
