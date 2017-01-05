import delay from './delay';

const items = [
  {
    id: "1",
    name: "test1",
  },
  {
    id: "2",
    name: "test2",
  }
];



class ItemApi {

  static searchItems(query) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], items));
      }, delay);
    });
  }

}

export default ItemApi;