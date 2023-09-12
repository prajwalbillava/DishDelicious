import { db, auth } from "../Auth/FirebaseAuth";
import {
  getFirestore,
  collection,
  getDoc,
  addDoc,
  doc,
  updateDoc,
  arrayUnion,
  setDoc,
} from "firebase/firestore";

// Function to create a Firestore document for a user with an empty array
export const createFirestoreDocument = () => {
  const userId = auth.currentUser.uid;
  const userDocRef = doc(db, "users", userId); // Reference to the "users" collection

  // Set the initial data (in this case, an empty array for saved recipes)
  setDoc(userDocRef, { savedRecipes: [] })
    .then(() => {
      console.log("Firestore document created for user:");
    })
    .catch((error) => {
      console.error("Error creating Firestore document:", error);
    });
};

export const createUserDocument = (uid, email, username) => {
  const userDocRef = doc(db, "users", uid); // Reference to the "users" collection

  // Set the data for the user document
  setDoc(userDocRef, {
    email: email,
    username: username,
    uid: uid,
    savedRecipes: [], // You can add additional fields if needed
  })
    .then(() => {
      console.log("Firestore document created for user:", uid);
    })
    .catch((error) => {
      console.error("Error creating Firestore document:", error);
    });
};

export const userDetail = async () => {
  try {
    const uid = auth.currentUser.uid;
    const userDocRef = doc(db, "users", uid); // Replace "userDocumentId" with the actual document ID

    // Get the user's document
    const userDocSnapshot = await getDoc(userDocRef);

    // Check if the document exists
    if (userDocSnapshot.exists()) {
      // Access the name and email fields
      const userData = userDocSnapshot.data();
      const userName = userData.username;
      const userEmail = userData.email;
      console.log("User's Name:", userName);
      console.log("User's Email:", userEmail);
      const savedRecipeCount = userData.savedRecipes.length;
      console.log("User's Email:", savedRecipeCount);
      return {
        name: userName,
        email: userEmail,
        savedRecipes: savedRecipeCount,
      };
    } else {
      console.log("User document does not exist.");
      return null;
    }
  } catch (error) {
    console.error("Error retrieving user data:", error);
    return null;
  }
};
