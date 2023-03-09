import { Spin, SpinProps } from 'antd';

const Loading = ({ ...props }: SpinProps) => {
  return <Spin {...props} />;
};

export default Loading;
