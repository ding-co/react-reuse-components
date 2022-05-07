import { sort } from '../helpers';

export const theaders = [
  { label: 'User', key: 'user', sortable: false },
  { label: 'Email', key: 'email', sortable: true },
  { label: 'Created', key: 'date', sortable: true, sortFn: sort.dateCompareFn },
  {
    label: 'Delete User',
    key: 'delete',
    sortable: false,
    render: (data: string | number, index?: number) => (
      <button
        onClick={() => {
          console.log('삭제되었습니다.');
        }}
      >
        Delete
      </button>
    ),
  },
];

export const tableData = [
  {
    id: 1,
    user: 'User 1',
    email: 'a@gmail.com',
    date: '5/7/2022, 8:53:35 PM',
  },
  {
    id: 2,
    user: 'User 2',
    email: 'b@gmail.com',
    date: '5/7/2022, 8:53:36 PM',
  },
  {
    id: 3,
    user: 'User 3',
    email: 'c@gmail.com',
    date: '5/7/2022, 8:53:37 PM',
  },
  {
    id: 4,
    user: 'User 4',
    email: 'd@gmail.com',
    date: '5/7/2022, 8:53:38 PM',
  },
  {
    id: 5,
    user: 'User 5',
    email: 'e@gmail.com',
    date: '5/7/2022, 8:53:39 PM',
  },
  {
    id: 6,
    user: 'User 6',
    email: 'f@gmail.com',
    date: '5/7/2022, 8:53:40 PM',
  },
  {
    id: 7,
    user: 'User 7',
    email: 'g@gmail.com',
    date: '5/7/2022, 8:53:41 PM',
  },
  {
    id: 8,
    user: 'User 8',
    email: 'h@gmail.com',
    date: '5/7/2022, 8:53:42 PM',
  },
  {
    id: 9,
    user: 'User 9',
    email: 'i@gmail.com',
    date: '5/7/2022, 8:53:43 PM',
  },
  {
    id: 10,
    user: 'User 10',
    email: 'j@gmail.com',
    date: '5/7/2022, 8:53:44 PM',
  },
];
