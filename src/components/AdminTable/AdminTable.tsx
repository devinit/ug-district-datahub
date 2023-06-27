import classNames from 'classnames';
import React, { FC, useEffect, useState } from 'react';

interface AdminTableProps {
  data: Record<string, unknown>[];
  className?: string;
}
const AdminTable: FC<AdminTableProps> = ({ data, className }) => {
  const [columns, setColumns] = useState<string[]>([]);
  const [rows, setRows] = useState<string[][]>([]);

  useEffect(() => {
    if (data) {
      setColumns(Object.keys(data[0]));
      setRows(data.map((record) => Object.values(record) as string[]));
    }
  }, [data.length]);

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
                <td key={id} className={classNames({ title: id === 0 })}>
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
