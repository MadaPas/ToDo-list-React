export const setItemInLocalStorage = list => localStorage.setItem('list', JSON.stringify(list));
export const getItemFromLocalStorage = () => (localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : []);

const generateUniqueId = () => Math.random().toString(36).substring(2, 7); //

export const createCard = name => {
  const id = generateUniqueId();
  const card = {
    id,
    name,
    status: 'notDone',
  };
  return card;
};
