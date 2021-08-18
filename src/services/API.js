import axios from 'axios';

export async function AuthApi(data) {
  try {
    return await axios.post(`auth/login`, data);
  } catch (e) {
    return e;
  }
}
export async function ReAuthApi() {
  try {
    return await axios.get(`auth/re-auth`);
  } catch (e) {
    return e;
  }
}
export async function SignupApi(data) {
  try {
    return await axios.post(`auth/signup`, data);
  } catch (e) {
    return e;
  }
}
export async function GetTodoListApi(userId) {
  try {
    return await axios.get(`listTodo/${userId}`);
  } catch (e) {
    return e;
  }
}
export async function AddTodoApi(userId, data) {
  try {
    return await axios.post(`addTodo/${userId}`, data);
  } catch (e) {
    return e;
  }
}
export async function UpdateTodoApi(todoId, data) {
  try {
    return await axios.patch(`updateTodo/${todoId}`, data);
  } catch (e) {
    return e;
  }
}
export async function DeleteTodoApi(todoId) {
  try {
    return await axios.delete(`deleteTodo/${todoId}`);
  } catch (e) {
    return e;
  }
}
