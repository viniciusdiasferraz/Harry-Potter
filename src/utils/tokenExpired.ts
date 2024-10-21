const hasTokenExpired = (loginDate: number, expiration: number) => {
  const currentTime = Math.floor(Date.now() / 1000);
  return currentTime > loginDate + expiration;
};

export default hasTokenExpired;
