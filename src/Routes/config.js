const isLogin = () => {
  const email = localStorage.getItem("email");
  if (email) {
    return true;
  } else return false;
};

export const auth = isLogin();
console.log(auth,"auth")