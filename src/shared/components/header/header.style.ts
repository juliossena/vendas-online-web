import { LogoutOutlined } from '@ant-design/icons';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  height: 72px;
  width: calc(100% - 240px);
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 32px;

  background-color: white;

  -webkit-box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.47);
  box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.47);
`;

export const LogoExit = styled(LogoutOutlined)`
  font-size: 24px;
`;
