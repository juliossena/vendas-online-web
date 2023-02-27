/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table as TableAntD, TableProps } from 'antd';

function Table<RecordType extends object = any>(props: TableProps<RecordType>) {
  return <TableAntD {...props} />;
}

export default Table;
