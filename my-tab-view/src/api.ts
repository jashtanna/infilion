export const fetchUserData = async (): Promise<any> => {
    const response = await fetch('https://reqres.in/api/users?page=1');
    return response.json();
  };
  