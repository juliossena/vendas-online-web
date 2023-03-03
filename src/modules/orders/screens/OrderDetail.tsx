import { Descriptions, Divider, Spin } from 'antd';
import { useParams } from 'react-router-dom';

import Screen from '../../../shared/components/screen/Screen';
import { DisplayFlexJustifyCenter } from '../../../shared/components/styles/display.styled';
import { useOrderDetail } from '../hooks/useOrderDetail';
import { OrderRoutesEnum } from '../routes';

const OrderDetail = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const { order, loading } = useOrderDetail(orderId);

  console.log('order', order);
  console.log('loading', loading);

  return (
    <Screen
      listBreadcrumb={[
        {
          name: 'HOME',
        },
        {
          name: 'PEDIDOS',
          navigateTo: OrderRoutesEnum.ORDER,
        },
        {
          name: 'Detalhes',
        },
      ]}
    >
      {!order || loading ? (
        <DisplayFlexJustifyCenter>
          <Spin size="large" />
        </DisplayFlexJustifyCenter>
      ) : (
        <>
          <Descriptions title="Dados do usuário" bordered>
            <Descriptions.Item label="Nome">{order.user?.name}</Descriptions.Item>
            <Descriptions.Item label="Email" span={2}>
              {order.user?.email}
            </Descriptions.Item>
            <Descriptions.Item label="Telefone">{order.user?.phone}</Descriptions.Item>
            <Descriptions.Item label="CPF" span={2}>
              {order.user?.cpf}
            </Descriptions.Item>
          </Descriptions>
          <Divider />
          <Descriptions title="Dados do pagamento" bordered>
            <Descriptions.Item label="Preço">{order.payment?.price}</Descriptions.Item>
            <Descriptions.Item label="Desconto" span={2}>
              {order.payment?.discount}
            </Descriptions.Item>
            <Descriptions.Item label="Preço Final">{order.payment?.finalPrice}</Descriptions.Item>
            <Descriptions.Item label="Tipo de pagamento" span={2}>
              {order.payment?.type}
            </Descriptions.Item>
            <Descriptions.Item label="Status" span={2}>
              {order.payment?.paymentStatus?.name}
            </Descriptions.Item>
          </Descriptions>
          <Divider />
          <Descriptions title="Dados do endereço" bordered>
            <Descriptions.Item label="Nome">julioNovo</Descriptions.Item>
            <Descriptions.Item label="Email" span={2}>
              Prepaid
            </Descriptions.Item>
            <Descriptions.Item label="Telefone">YES</Descriptions.Item>
            <Descriptions.Item label="CPF" span={2}>
              2018-04-24 18:00:00
            </Descriptions.Item>
            <Descriptions.Item label="Usage Time" span={2}>
              2019-04-24 18:00:00
            </Descriptions.Item>
          </Descriptions>
          <Divider />
          <Descriptions title="Produtos" bordered>
            <Descriptions.Item label="Nome">julioNovo</Descriptions.Item>
            <Descriptions.Item label="Email" span={2}>
              Prepaid
            </Descriptions.Item>
            <Descriptions.Item label="Telefone">YES</Descriptions.Item>
            <Descriptions.Item label="CPF" span={2}>
              2018-04-24 18:00:00
            </Descriptions.Item>
            <Descriptions.Item label="Usage Time" span={2}>
              2019-04-24 18:00:00
            </Descriptions.Item>
          </Descriptions>
        </>
      )}
    </Screen>
  );
};

export default OrderDetail;
