const asyncAction = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      throw new Error(`${id} throw from async`);
    }, Math.ceil(Math.random() * 1000));
  });
};

const start = async () => {
  try {
    await asyncAction(1);
  } catch (error) {
    console.log('catch error:', error);
  }
};

start();
