## Firebase Authenticaiton

# 🔐 Authentication vs 🔓 Authorization

Authentication and Authorization are both crucial concepts in system security, but they serve different purposes. Here's a detailed comparison:

---

## 🔐 What is **Authentication**?

- **Definition:** Authentication is the process of verifying _who_ a user is.
- **Purpose:** To confirm the user's identity.
- **Example:** Logging in with a username & password, fingerprint, or OTP.
- **Sequence:** Happens **before** authorization.
- **Key Question:** _Are you who you say you are?_

---

## 🔓 What is **Authorization**?

- **Definition:** Authorization is the process of verifying _what_ a user is allowed to do.
- **Purpose:** To grant access to specific resources or actions.
- **Example:** A user can edit their profile but not access the admin panel.
- **Sequence:** Happens **after** authentication.
- **Key Question:** _What are you allowed to do?_

---

## 📊 Comparison Table

| Feature            | Authentication                  | Authorization                    |
| ------------------ | ------------------------------- | -------------------------------- |
| **Purpose**        | Verifies identity               | Verifies access level            |
| **When it occurs** | First                           | After authentication             |
| **Based on**       | Credentials (username/password) | Roles, permissions, access rules |
| **Determines**     | Who the user is                 | What the user can access         |
| **Example**        | Login with email & password     | Accessing admin dashboard        |

---

## ✅ Summary

- **Authentication** = Identity verification
- **Authorization** = Permission verification

### 1. Install Firebase

```bash
npm install firebase
```

---

### 2. Create a Project on Firebase Console

Go to [https://console.firebase.google.com](https://console.firebase.google.com) and create a new project.

---

### 3. Configure Firebase in Your Project

- Do **not** use the SDK `<script>` file directly in your HTML.
- Create a file called `firebase.config.js` and export the app and auth:

```js
// firebase.config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
```

---

### 4. Use Environment Variables for Security

Install `dotenv`:

```bash
npm install dotenv --save
```

Then, create a `.env` file and add your Firebase config:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

---

### 5. Enable Sign-In Methods

In the Firebase Console, go to **Authentication > Sign-in method** and enable methods like:

- Google
- Email/Password
- GitHub, etc.

---

### 6. Sign In with Google (Example)

```js
// Login.jsx
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase.config";

const provider = new GoogleAuthProvider();

const handleGoogleLogin = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};
```

---

## 👤 How to Show Logged-In User

```js
import { useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase.config";

const Login = () => {
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        setUser(result.user); // Set the user
      })
      .catch((error) => {
        console.log(error);
        setUser(null);
      });
  };

  return (
    <div>
      <button onClick={handleGoogleLogin}>Login with Google</button>
      {user && (
        <div>
          <h1>User Name: {user.displayName}</h1>
          <h1>User Email: {user.email}</h1>
        </div>
      )}
    </div>
  );
};

export default Login;
```

---

---

## 👤 How to Show Logged-Out User And Show button dynamically

```js
// Login.jsx or firebase.auth.js
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);

  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
        setUser(null);
      });
  };

  const handleGoogleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center mt-10 gap-10">
      <h1 className="text-3xl">Login with goole</h1>

      {user ? (
        <button
          className="bg-black hover:opacity-80 rounded-2xl text-white font-bold py-3 px-4 "
          onClick={handleGoogleLogout}
        >
          Logout
        </button>
      ) : (
        <button
          className="bg-black hover:opacity-80 rounded-2xl text-white font-bold py-3 px-4 "
          onClick={handleGoogleLogin}
        >
          Login with google
        </button>
      )}

      {user && (
        <div>
          <h1>User Name: {user.displayName}</h1>
          <h1>User Email: {user.email}</h1>
        </div>
      )}
    </div>
  );
};

export default Login;
```

---
