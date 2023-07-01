//You get such UserInterface. Define function normailizeUsers which get a parameter users$ which is an Observable of UserInterface array and retuns back array of name as an Observable.
//how rxjs map is differs from javascript map.

// interface UserInterface {
//   id: string;
//   name: string;
//   age: number;
// }

////solution
// import { map, Observable } from 'rxjs';

// const normailizeUsers = (
//   users$: Observable<UserInterface[]>
// ): Observable<string[]> => {
//   return users$.pipe(map((users) => users.map((user) => user.name)));
// };

//rxjs map deals with stream. it is used for tranform stream

//Give me example of rxjs filter

// import { filter, Observable, of } from 'rxjs';
// interface UserInterface {
//   id: string;
//   name: string;
//   isActive: boolean;
// }

// const getActiveUsers = (
//   users$: Observable<UserInterface[]>
// ): Observable<UserInterface[]> => {
//   return users$.pipe(filter((users) => users.every((user) => user.isActive)));
// };

// const usersList$: Observable<UserInterface[]> = of([
//   {
//     id: '232',
//     name: 'Test',
//     isActive: false,
//   },
//   {
//     id: '343',
//     name: 'West',
//     isActive: true,
//   },
// ]);

// getActiveUsers(usersList$).subscribe((users) => {
//   console.log(users);
// });
