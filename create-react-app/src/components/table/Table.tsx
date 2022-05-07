import styles from './Table.module.scss';

type TableProps = {
  headers: Array<{
    label: string;
    key: string;
  }>;
  data: Array<{
    [p: string]: string | number;
  }>;
};

const Table = ({ headers, data }: TableProps) => {
  return (
    <table className={styles['table']}>
      <thead>
        <tr>
          {headers.map(({ label, key }) => (
            <th key={key}>
              <span>{label}</span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((obj, idx) => (
          <tr key={obj.id ?? `obj--${idx}`}>
            {headers.map(({ label, key }) => (
              <td key={key}>{obj[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
