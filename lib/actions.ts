"use server";
import {
  BuyerFormFields,
  HostFormFields,
  HostFormSchema,
  LoginFormFields,
  SignUpFormFields,
} from "@/types/types";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { z } from "zod";

async function saveUserToCookie(user: any) {
  cookies().set("user", user);
}

export async function getUserFromCookie() {
  const cookieStore = cookies();
  const user = cookieStore.get("user");
  return user;
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

async function fetchEvents() {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  // Fetch existing users
  const eventsResponse = await fetch("http://localhost:5000/events");
  if (!eventsResponse.ok) {
    throw new Error("Failed to fetch events");
  }
  const events = await eventsResponse.json();
  return events;
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

export async function hostEvent(data: HostFormFields) {
  try {
    /*  const res = await fetch("/api/upload", {
      method: "POST",
      body: data as any,
    }); */
    const events = await fetchEvents();
    // Check if the email already exists
    const eventExists = events.some(
      (event: { eventName: string }) => event.eventName === data.eventName
    );
    if (eventExists) {
      return "Event Name is already registered.";
    }
    const getCookie: any = await getUserFromCookie();

    const cookieObject = JSON.parse(getCookie.value);

    const host = cookieObject.name;

    const response = await fetch("http://localhost:5000/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data, host }),
    });
    return "Success";
  } catch (error) {
    console.log(error);
  }
}

export async function updateEvent(data: any, pastEventDetails: any) {
  try {
    console.log(
      `http://localhost:5000/events/${encodeURIComponent(pastEventDetails.id)}`
    );
    const getCookie: any = await getUserFromCookie();

    const cookieObject = JSON.parse(getCookie.value);

    const host = cookieObject.name;

    const response = await fetch(
      `http://localhost:5000/events/${encodeURIComponent(pastEventDetails.id)}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, host }),
      }
    );
    if (response.ok) {
      return "Success";
      revalidatePath("/dashboard/main-page");
    }
  } catch (error) {
    console.log(error);
  }
}

export async function buyTicket(
  data: BuyerFormFields,
  host: string,
  values: any
) {
  try {
    const getCookie: any = await getUserFromCookie();
    const cookieObject = JSON.parse(getCookie.value);
    const buyer = cookieObject.name;

    const { price, quantity } = data;
    const totalPrice = price * quantity;

    // Update available quantity
    const newStocks = values.quantityAvailable - quantity;
    if (newStocks < 0) {
      return "Out of Stock";
    }
    const updatedEvent = { ...values, quantityAvailable: newStocks };

    const url = `http://localhost:5000/events/${encodeURIComponent(values.id)}`;

    // POST request to add purchased event
    const purchaseResponse = await fetch(
      "http://localhost:5000/events-purchased",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, buyer, totalPrice, host }),
      }
    );

    if (!purchaseResponse.ok) {
      throw new Error("Failed to purchase ticket");
    }

    // PUT request to update event quantity
    const updateResponse = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedEvent),
    });

    if (!updateResponse.ok) {
      throw new Error("Failed to update event quantity");
    }

    return "Success";
  } catch (error) {
    console.error("Error buying ticket:", error);
    return "Fail";
  }
}

// SECONDARY

async function fetchItems() {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  // Fetch existing users
  const itemsResponse = await fetch("http://localhost:5000/brgy-items");
  if (!itemsResponse.ok) {
    throw new Error("Failed to fetch Items");
  }
  const items = await itemsResponse.json();
  return items;
}

export async function listAnItem(data: any) {
  try {
    const items = await fetchItems();
    // Check if the email already exists
    const itemExists = items.some(
      (item: { item: string }) => item.item === data.item
    );
    if (itemExists) {
      return "Email is already registered.";
    }

    const response = await fetch("http://localhost:5000/brgy-items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
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

export async function borrowItem(data: any, values: any) {
  try {
    const getCookie: any = await getUserFromCookie();
    const cookieObject = JSON.parse(getCookie.value);
    const borrower = cookieObject.name;

    const quantity_d = data.quantity;
    const quantity_v = values.quantity;

    // Update available quantity
    const newStocks = quantity_v - quantity_d;
    if (newStocks <= 0) {
      return "Out of Stock";
    }
    const updatedEvent = { ...values, quantity: newStocks };

    const url = `http://localhost:5000/brgy-items/${encodeURIComponent(
      values.id
    )}`;

    // POST request to add purchased event
    const borrowResponse = await fetch("http://localhost:5000/items-borrowed", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data, borrower }),
    });

    if (!borrowResponse.ok) {
      throw new Error("Failed to Borrow Item");
    }

    // PUT request to update event quantity
    const updateResponse = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedEvent),
    });

    if (!updateResponse.ok) {
      throw new Error("Failed to update event quantity");
    }

    return "Success";
  } catch (error) {
    console.error("Error buying ticket:", error);
    return "Fail";
  }
}
