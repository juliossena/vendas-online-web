import { Tooltip as TooltipAntd } from 'antd';

import { ContainerExternal, ContainerTooltip } from './tooltip.style';

interface TolltipProps {
  children: React.ReactNode;
  tooltip?: React.ReactNode;
  title?: string;
}

const Tooltip = ({ children, tooltip, title }: TolltipProps) => {
  if (title) {
    <TooltipAntd title={title}>{children}</TooltipAntd>;
  }

  return (
    <ContainerTooltip>
      <ContainerExternal>{tooltip}</ContainerExternal>
      {children}
    </ContainerTooltip>
  );
};

export default Tooltip;
