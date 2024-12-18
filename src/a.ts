interface Profile {
  firstName: string;
  lastName: string;
  age: number;
  email?: string;
  address?: string[];
}
interface User {
  //   firstName: string;
  //   lastName: string;
  //   age: number;
  //   email?: string;
  //   address?: string[];
  profile?: Profile;
}
function doSomething(): User {
  return { profile: { firstName: "james", lastName: "bond", age: 20 } };
}
function greet(user: User) {
  //   console.log(`Hello ${user.firstName} ${user.lastName}`);
  console.log(`Hello ${user.profile?.firstName} ${user.profile?.lastName}`);
}

// greet({ firstName: "james", lastName: "bond", age: 20 });
greet({ profile: { firstName: "james", lastName: "bond", age: 20 } });
