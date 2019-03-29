// throw from async action instead of Promise.reject
const asyncAction = async (id) => {
  return new Promise(() => {
    setTimeout(() => {
      throw new Error(`${id} throw from async`);
    }, Math.ceil(Math.random() * 2000));
  });
};

const start = async () => {
  try {
    await asyncAction(10);
  } catch (error) {
    console.log('Catch Error: ', error);
  }
};

console.log('start app');
start();
