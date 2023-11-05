import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, googleProvider } from "../firebase";
import { FirebaseError } from "firebase/app";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";

const Auth = () => {
  let navigate = useNavigate();
  const signInWIthGoggle = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      const user = res.user;
      const docs = await getDocs(
        query(collection(db, "users"), where("uid", "==", user.uid))
      );
      if (docs.docs.length === 0) {
        await setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          name: user.displayName,
          authProvider: "google",
          email: user.email,
        });
        return res;
      }
    } catch (err) {
      if (err instanceof FirebaseError) {
        console.error(`Error Signing in!\n${err.message}`);
      }
      console.error(err);
    }
    return null;
  };
  return (
    <div>
      <button onClick={signInWIthGoggle}>Sign in with google</button>
    </div>
  );
};

export default Auth;
