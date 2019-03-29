const asyncAction = async (id) => {
  return new Promise(() => {
    setTimeout(() => {
      throw new Error(`${id} throw from async`);
    }, Math.ceil(Math.random() * 1000));
  });
};

const start = async () => {
  try {
    await asyncAction(10);
  } catch (error) {
    console.log('Catch Error: ', error);
  }
};

start();
