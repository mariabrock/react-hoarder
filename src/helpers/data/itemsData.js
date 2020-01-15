import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getMyStuffByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/items.json?orderBy="uid"&equalTo="${uid}"`)
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

const saveItem = (itemInfo) => axios.post(`${baseUrl}/items.json`, itemInfo);

const updateItem = (itemId, newItemInfo) => axios.put(`${baseUrl}/items/${itemId}.json`, newItemInfo);

const deleteItem = (itemId) => axios.delete(`${baseUrl}/items/${itemId}.json`);

export default {
  getMyStuffByUid,
  //   getSingleBoard,
  saveItem,
  updateItem,
  deleteItem,
};
