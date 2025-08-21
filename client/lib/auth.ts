// Auth utility functions for user management

export interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  lastLogin?: string;
}

// Get current user from localStorage
export const getCurrentUser = (): User | null => {
  try {
    const userString = localStorage.getItem("user");
    return userString ? JSON.parse(userString) : null;
  } catch {
    return null;
  }
};

// Get user token
export const getUserToken = (): string | null => {
  return localStorage.getItem("userToken");
};

// Get admin token
export const getAdminToken = (): string | null => {
  return localStorage.getItem("adminToken");
};

// Check if user is logged in
export const isLoggedIn = (): boolean => {
  return !!(getCurrentUser() && getUserToken());
};

// Check if user is admin
export const isAdmin = (): boolean => {
  const user = getCurrentUser();
  return user?.role === "admin" || !!getAdminToken();
};

// Logout user
export const logout = (): void => {
  localStorage.removeItem("user");
  localStorage.removeItem("userToken");
  localStorage.removeItem("adminToken");
  window.location.href = "/login";
};

// Update user info
export const updateUserInfo = (user: User): void => {
  localStorage.setItem("user", JSON.stringify(user));
};
