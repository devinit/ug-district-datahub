import classNames from 'classnames';
import React, { FC, useEffect, useState } from 'react';

interface AdminTableProps {
  data: Record<string, unknown>[];
  className?: string;
  onSelect?: (item: Record<string, unknown>) => void;
}
const AdminTable: FC<AdminTableProps> = ({ data, className, onSelect }) => {
  const [columns, setColumns] = useState<string[]>([]);
  const [rows, setRows] = useState<string[][]>([]);

  useEffect(() => {
    if (data) {
      const columns = Object.keys(data[0]).filter((key) => key !== 'original');
      setColumns(columns);
      setRows(data.map((record) => columns.reduce<string[]>((row, curr) => row.concat([record[curr] as string]), [])));
    }
  }, [data.length]);

  const onSelectRow = (row: Record<string, unknown>) => {
    if (onSelect) {
      onSelect(row);
    }
  };

  return (
    <div>
      <table className={classNames(className)}>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, key) => (
            <tr key={key}>
              {row.map((cell, id) => (
                <td
                  key={id}
                  className={classNames({ title: id === 0 })}
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  onClick={() => onSelectRow((data[key].original as any) || data[key])}
                >
                  {id === 0 ? <div className="title-wrapper">{cell}</div> : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { AdminTable };
