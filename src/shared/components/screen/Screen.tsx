import Breadcrumb, { ListBreadcrumb } from '../breadcrumb/Breadcrumb';
import { ScreenContainer } from './screen.style';

interface ScreenProps {
  children: React.ReactNode;
  listBreadcrumb?: ListBreadcrumb[];
}

const Screen = ({ children, listBreadcrumb }: ScreenProps) => {
  return (
    <ScreenContainer>
      {listBreadcrumb && <Breadcrumb listBreadcrumb={listBreadcrumb} />}
      {children}
    </ScreenContainer>
  );
};

export default Screen;
