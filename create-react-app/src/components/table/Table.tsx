import { ReactNode, useState } from 'react';
import { useNavigate } from 'react-router';
import { ObjectSignatureType } from '../../helpers/type';
import styles from './Table.module.scss';

type TableHeaderType = {
  label: string;
  key: string;
  sortable?: boolean;
  sortFn?: (
    a: ObjectSignatureType,
    b: ObjectSignatureType,
    key: string
  ) => number;
  render?: (data: string | number, index?: number) => ReactNode;
};

type TableOptionsType = {
  clickable?: boolean;
  navigatePath?: string;
};

type TableProps = {
  headers: Array<TableHeaderType>;
  data: Array<ObjectSignatureType>;
  options?: TableOptionsType;
};

const Table = ({ headers, data, options }: TableProps) => {
  const [sortKey, setSortKey] = useState<string>('');
  const [isAsc, setIsAsc] = useState<boolean>(false);
  const [isClick, setIsClick] = useState<boolean>(false);
  const navigate = useNavigate();

  const sortData = (
    key: TableHeaderType['key'],
    sortFn: TableHeaderType['sortFn']
  ) => {
    if (sortKey === key) {
      setIsAsc((isAsc) => !isAsc);
    } else {
      setIsAsc(true);
    }

    const compareFn = sortFn
      ? (a: ObjectSignatureType, b: ObjectSignatureType) =>
          isAsc ? sortFn(a, b, key) : -sortFn(a, b, key)
      : (a: ObjectSignatureType, b: ObjectSignatureType) => {
          if (a[key] > b[key]) {
            return isAsc ? 1 : -1;
          } else if (a[key] < b[key]) {
            return isAsc ? -1 : 1;
          } else {
            return 0;
          }
        };

    data.sort(compareFn);

    setSortKey(key);
    setIsClick((isClick) => !isClick);
  };

  const tableBody = (
    obj: ObjectSignatureType,
    idx: number,
    key: string,
    render?: TableHeaderType['render']
  ) => {
    if (render) {
      return render(obj[key], idx);
    } else {
      return <span>{obj[key]}</span>;
    }
  };

  return (
    <div className={styles['table-container']}>
      <table>
        <thead>
          <tr>
            {headers.map(({ label, key, sortable, sortFn }) => (
              <th key={key}>
                <div
                  onClick={() => {
                    if (sortable) sortData(key, sortFn);
                  }}
                >
                  <span>{label}</span>
                  {sortable && (
                    <img
                      className={
                        isClick && sortKey === key
                          ? styles['rotate']
                          : undefined
                      }
                      src={`${
                        process.env.PUBLIC_URL + 'images/chevron-down.png'
                      }`}
                      alt="정렬 화살표"
                    />
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={options?.clickable ? styles['tr-hover'] : undefined}>
          {data.map((obj, idx) => (
            <tr key={obj.id ?? `obj--${idx}`}>
              {headers.map(({ label, key, render }) => (
                <td
                  key={key}
                  onClick={() =>
                    options &&
                    !render &&
                    navigate(`${options?.navigatePath}/${obj?.id}`, {
                      state: { obj },
                    })
                  }
                >
                  {tableBody(obj, idx, key, render)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
