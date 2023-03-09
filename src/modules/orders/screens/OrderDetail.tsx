import { Descriptions, Divider } from 'antd';
import { useParams } from 'react-router-dom';

import Loading from '../../../shared/components/loading/Loading';
import Screen from '../../../shared/components/screen/Screen';
import { DisplayFlexJustifyCenter } from '../../../shared/components/styles/display.styled';
import { insertMaskInCEP } from '../../../shared/functions/address';
import { insertMaskInCpf } from '../../../shared/functions/cpf';
import { convertNumberToMoney } from '../../../shared/functions/money';
import { insertMaskInPhone } from '../../../shared/functions/phone';
import ListOrderProduct from '../components/ListOrderProduct';
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
          <Loading size="large" />
        </DisplayFlexJustifyCenter>
      ) : (
        <>
          <Descriptions title="Dados do usuário" bordered>
            <Descriptions.Item label="Nome">{order.user?.name}</Descriptions.Item>
            <Descriptions.Item label="Email" span={2}>
              {order.user?.email}
            </Descriptions.Item>
            <Descriptions.Item label="Telefone">
              {insertMaskInPhone(order.user?.phone)}
            </Descriptions.Item>
            <Descriptions.Item label="CPF" span={2}>
              {insertMaskInCpf(order.user?.cpf)}
            </Descriptions.Item>
          </Descriptions>
          <Divider />
          <Descriptions title="Dados do pagamento" bordered>
            <Descriptions.Item label="Preço">
              {convertNumberToMoney(order.payment?.price || 0)}
            </Descriptions.Item>
            <Descriptions.Item label="Desconto" span={2}>
              {convertNumberToMoney(order.payment?.discount || 0)}
            </Descriptions.Item>
            <Descriptions.Item label="Preço Final">
              {convertNumberToMoney(order.payment?.finalPrice || 0)}
            </Descriptions.Item>
            <Descriptions.Item label="Tipo de pagamento" span={2}>
              {order.payment?.type}
            </Descriptions.Item>
            <Descriptions.Item label="Status" span={2}>
              {order.payment?.paymentStatus?.name}
            </Descriptions.Item>
          </Descriptions>
          <Divider />
          <Descriptions title="Dados do endereço" bordered>
            <Descriptions.Item label="Cidade">{order.address?.city?.name}</Descriptions.Item>
            <Descriptions.Item label="Estado">{order.address?.city?.state?.name}</Descriptions.Item>
            <Descriptions.Item label="Complemento">{order.address?.complement}</Descriptions.Item>
            <Descriptions.Item label="Número">{order.address?.numberAddress}</Descriptions.Item>
            <Descriptions.Item label="CEP" span={2}>
              {insertMaskInCEP(order.address?.cep || '')}
            </Descriptions.Item>
          </Descriptions>
          <Divider />
          <ListOrderProduct ordersProduct={order.ordersProduct} />
        </>
      )}
    </Screen>
  );
};

export default OrderDetail;
