// throw from async action instead of Promise.reject
const asyncAction = async (id) => {
  return new Promise(() => {
    setTimeout(() => {
      return reject(new Error(`${id} throw from async`));
    }, Math.ceil(Math.random() * 1000));
  });
};

const start = async () => {
  try {
    await asyncAction(2);
  } catch (error) {
    console.log('Catch Error: ', error);
  }
};

console.log('start app');
start();
