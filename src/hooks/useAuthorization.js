import { useEffect } from "react";
import { useLogout } from "react-admin";
import firebase from "firebase";

export default () => {
  const logout = useLogout();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user && user.email !== "demonimo.revista@gmail.com") {
        logout();
      }
    });
  }, [logout]);
};
