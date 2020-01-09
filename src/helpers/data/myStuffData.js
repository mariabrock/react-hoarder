import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getMyStuffByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/boards.json?orderBy="uid"&equalTo="${uid}"`)
    .then((result) => {
      const allStuffObj = result.data;
      const item = [];
      if (allStuffObj != null) {
        Object.keys(allStuffObj).forEach((itemId) => {
          const newItem = allStuffObj[itemId];
          newItem.id = itemId;
          item.push(newItem);
        });
      }
      resolve(item);
    })
    .catch((err) => {
      reject(err);
    });
});

// const getSingleBoard = (boardId) => axios.get(`${baseUrl}/boards/${boardId}.json`);

const saveItem = (boardInfo) => axios.post(`${baseUrl}/boards.json`, boardInfo);

const updateItem = (boardId, newBoardInfo) => axios.put(`${baseUrl}/boards/${boardId}.json`, newBoardInfo);

const deleteItem = (boardId) => axios.delete(`${baseUrl}/boards/${boardId}.json`);

export default {
  getMyStuffByUid,
  //   getSingleBoard,
  saveItem,
  updateItem,
  deleteItem,
};
