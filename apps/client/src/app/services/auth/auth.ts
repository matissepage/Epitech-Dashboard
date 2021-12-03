import axios, { AxiosRequestConfig } from "axios";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const redirectToSSo = async (
  history: any,
  url: string,
  name: string,
  path?: string,
  validate: (name: string) => boolean = () => true,
) => {
  const newWindow = window.open(url, '_blank', 'width=500,height=600');
  if (newWindow) {
    const timer = setInterval(function () {
      if (newWindow.closed) {
        clearInterval(timer);
        console.log('closed');
        if (path && validate(name)) history.push(path);
        window.location.reload();
      }
    }, 700);
  }
};

export interface UserDTO {
  id?: number;
  username?: string;
  password?: string;
  email?: string;
  token?: string;
  type?: string;
}

export const localLogin = async (
  username: string,
  password: string,
  email: string,
): Promise<UserDTO> => {
  return new Promise((resolve, reject) => {
    try {
      const config: AxiosRequestConfig = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      console.log(config.data);
      axios.post<UserDTO>('http://localhost:8080/user', {
        username: username,
        password: password,
        email: email,
      }, config)
        .then((response) => {
          if (response.status === 201 && response.data.token) {
            console.log(response.data);
            resolve(response.data);
          }
        })
        .catch((error) => {console.log(error); reject(error);});
    } catch (error) {
      reject(error);
    }
  })
}

export const localGetLogin = async (
  username: string,
  password: string,
): Promise<any> => {
  return new Promise((resolve, reject) => {
    try {
      axios.get<any>(`http://localhost:8080/user/login/${username}/${password}`)
      .then((response) => {
        console.log(response.data);
        if (response.data.statusCode === 200) {
          resolve(response.data);
        }
      })
      .catch((error) => {console.log(error); reject(error);});
    } catch (error) {
      reject(error);
    }
  })
}
