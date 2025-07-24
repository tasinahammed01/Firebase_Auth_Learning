## Firebase Authenticaiton 

# 🔐 Authentication vs 🔓 Authorization

Authentication and Authorization are both crucial concepts in system security, but they serve different purposes. Here's a detailed comparison:

---

## 🔐 What is **Authentication**?

- **Definition:** Authentication is the process of verifying *who* a user is.
- **Purpose:** To confirm the user's identity.
- **Example:** Logging in with a username & password, fingerprint, or OTP.
- **Sequence:** Happens **before** authorization.
- **Key Question:** _Are you who you say you are?_

---

## 🔓 What is **Authorization**?

- **Definition:** Authorization is the process of verifying *what* a user is allowed to do.
- **Purpose:** To grant access to specific resources or actions.
- **Example:** A user can edit their profile but not access the admin panel.
- **Sequence:** Happens **after** authentication.
- **Key Question:** _What are you allowed to do?_

---

## 📊 Comparison Table

| Feature             | Authentication                  | Authorization                   |
|---------------------|----------------------------------|----------------------------------|
| **Purpose**         | Verifies identity                | Verifies access level            |
| **When it occurs**  | First                            | After authentication             |
| **Based on**        | Credentials (username/password)  | Roles, permissions, access rules |
| **Determines**      | Who the user is                  | What the user can access         |
| **Example**         | Login with email & password      | Accessing admin dashboard        |

---

## ✅ Summary

- **Authentication** = Identity verification
- **Authorization** = Permission verification


## Steps For  setup firebase

1. Intall Firebase:
    ```bash
    npm install firebase
    ```
2.Create project on firebase.console 
3.Do not use the SDK file directly on project. and export app. and also add getAuth and export it.
4.use ENV to security:
```bash
        npm install dotenv --save
```
5. Add sign in method from firebase console. (Google , email pass, github etc..)
6. provider on here we have the button like : 
   ```bash
    
    import {  GoogleAuthProvider, signInWithPopup } from "firebase/auth";
    ...........
    ..........

    const provider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })
  };



## How to show user : 

```bash
    
    import { useState } from "react";

    # import  useState and make a useState hook to set users

    const [user, setUser] = useState(null);
    
    # set user form handleGooleLogin:

    const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        setUser(result.user);  # here
      })
      .catch((error) => {
        console.log(error);
        setUser(null);
      });
  };

    # then show it like this:    

    {
        user && ( #check if user exist or not. if exist then show user info.
          <div>
            <h1>User Name: {user.displayName}</h1>
            <h1>User Email: {user.email}</h1>
          </div>
        )
      }

