import { Divider } from 'antd';

import Breadcrumb, { ListBreadcrumb } from '../breadcrumb/Breadcrumb';
import Menu from '../menu/Menu';
import { ScreenContainer } from './screen.style';

interface ScreenProps {
  children: React.ReactNode;
  listBreadcrumb?: ListBreadcrumb[];
}

const Screen = ({ children, listBreadcrumb }: ScreenProps) => {
  return (
    <ScreenContainer>
      <Menu />
      {listBreadcrumb && (
        <>
          <Breadcrumb listBreadcrumb={listBreadcrumb} />
          <Divider />
        </>
      )}

      {children}
    </ScreenContainer>
  );
};

export default Screen;
