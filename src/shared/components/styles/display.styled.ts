import styled from 'styled-components';

interface DisplayFlexProps {
  margin?: string;
}

export const DisplayFlex = styled.div`
  display: flex;
`;

export const DisplayFlexJustifyRight = styled(DisplayFlex)`
  justify-content: right;
`;

export const DisplayFlexJustifyCenter = styled(DisplayFlex)`
  justify-content: center;
`;

export const DisplayFlexJustifyBetween = styled(DisplayFlex)<DisplayFlexProps>`
  display: flex;
  justify-content: space-between;
  ${(props) => (props.margin ? `margin: ${props.margin}` : '')};
`;
