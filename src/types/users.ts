export interface UserProps {
  id: number;
  email: string;
  username: string;
  password: string;
  phone: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address: {
    city: string;
    street: string;
    number: string;
    zipcode: string;
    geolocation: {
      lat: number;
      long: number;
    };
  };
}

export type UsersProps = UserProps[];

export interface UpdateUsersProps {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
}
