import { api } from "../../services/api";

const userId = "d28d8b8e-7d18-4c7c-bb52-1faf085e10ee";
const LogInUser = {
  email: "test@kenzie.com.br",
  password: "123456",
};
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Njk3MzMzNDEsImV4cCI6MTY2OTk5MjU0MSwic3ViIjoiZDI4ZDhiOGUtN2QxOC00YzdjLWJiNTItMWZhZjA4NWUxMGVlIn0.kVHSnkByOnoHlYlS3DUzT2oaIhUtl6Dx43r5PsNsGZQ"

const createdUser = {
    "email": "test@kenzie.com.br",
    "password": "123456",
    "name": "Filipe Gutierry",
    "bio": "Lorem ipsum dolor emet",
    "contact": "123456789",
    "course_module": "2o Módulo (Frontend avançado)"
    }

export async function fetchUsers() {
  try {
    const response = await api.get("users");
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchSpecificUser( id ) {
  try {
    const response = await api.get(`users/${userId}`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function userLogIn( body ) {
  try {
    const response = await api.post("sessions", LogInUser);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function createUser( body ) {
    try {
        const response = await api.post("users", createdUser)
        return response;
    } catch (error) {
        console.log(error)
    }
}