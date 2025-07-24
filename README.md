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
