"use server";
import { LoginFormFields, SignUpFormFields } from "@/types/types";
import { cookies } from "next/headers";

async function saveUserToCookie(user: any) {
  cookies().set("user", user);
}

async function fetchUsers() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // Fetch existing users
  const usersResponse = await fetch("http://localhost:5000/users");
  if (!usersResponse.ok) {
    throw new Error("Failed to fetch users");
  }
  const users = await usersResponse.json();
  return users;
}

export async function createUser(data: SignUpFormFields) {
  try {
    const users = await fetchUsers();
    // Check if the email already exists
    const emailExists = users.some(
      (user: { email: string }) => user.email === data.email
    );
    if (emailExists) {
      return "Email is already registered.";
    }
    // If email is unique, proceed to add the new user
    const { confirmPassword, ...userData } = data;

    const response = await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const responseData = await response.json();
    console.log("User added:", responseData);
    return responseData;
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function signInUser(data: LoginFormFields) {
  try {
    const users = await fetchUsers();

    // Find the user by email
    const user = users.find(
      (user: { email: any }) => user.email === data.email
    );
    if (!user) {
      return { message: "User Not Found", status: 404 };
    }

    // Verify the password
    if (user.password !== data.password) {
      return { message: "Incorrect Password", status: 500 };
    }
    console.log(JSON.stringify(user));
    // If email and password are correct, return the user
    await saveUserToCookie(JSON.stringify(user));
    return { user, status: 200 };
  } catch (error) {
    console.log(error);
  }
}

export async function signOutUser() {
  cookies().delete("user");
}
