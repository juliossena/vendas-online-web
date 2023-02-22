import { ContainerLogoName, ContainerMenu, LogoMenu, NameCompany } from './menu.style';

const Menu = () => {
  return (
    <ContainerMenu>
      <ContainerLogoName>
        <LogoMenu />
        <NameCompany>Vendas Online</NameCompany>
      </ContainerLogoName>
    </ContainerMenu>
  );
};

export default Menu;
