// think of as contractor to storefront/categories.js

// reducers change which category is being presented / which one is active
// actions: 

const initialState = {
  categories: [
    {
      "_id": "5f0cdc15acac790017fc26ce",
      "name": "food",
      "description": "Stuff for you to eat",
      "__v": 0
    },
    {
      "_id": "5f0cdc25acac790017fc26cf",
      "name": "electronics",
      "description": "Making your life easier, one volt at a time",
      "__v": 0
    }
  ],
  activeCategory: {},
}

export default function reducer (state=initialState, action) {
  const {type, payload} = action;
  switch(type) {
    case 'GETCATEGORIES':
      return {...state, categories: payload, activeCategory: payload[0]};
    case 'CHANGECATEGORIES':
      let newState = {...state, activeCategory: payload};
      console.log('new state', newState);
      return newState;
    default:
      return state;
  }
}

export const getCategories = (categories) => {
  return {
    type: 'GETCATEGORIES',
    payload: categories,
  }
}

export const changeCategories = (change) => {
  return {
    type: 'CHANGECATEGORIES',
    payload: change,
  }
}