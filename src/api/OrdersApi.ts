import ClientTypeEnum from '@/enums/ClientTypeEnum'
import CouponTypeEnum from '@/enums/CouponTypeEnum'
import OrderStatusEnum from '@/enums/OrderStatusEnum'
import moment from 'moment'
import 'moment/locale/pt-br'

moment.locale('pt-br')

export const getOrders = () => {
  const data = [
    {
      id: 1,
      code: 'PP-0001',
      status: OrderStatusEnum.CREATED,
      paymentMethod: 'creditCard',
      subtotal: 100,
      discount: 10,
      deliveryFee: 10,
      total: 100,
      date: moment().format('L'),
      canceledReason: '',
      createdAt: moment().format('L'),
      updatedAt: moment().format('L'),
      coupon: {
        id: 1,
        code: '10OFF',
        type: 'percent',
        amount: 10,
        expireDate: moment().format('L'),
        createdAt: moment().format('L'),
        updatedAt: moment().format('L')
      },
      user: {
        id: 1,
        name: 'John',
        last_name: 'Doe',
        email: 'john@teste.com',
        document: '000.000.000-00',
        phone: '(00) 00000-0000',
        createdAt: moment().format('L'),
        updatedAt: moment().format('L'),
        address: {
          id: 1,
          zipcode: '00000-000',
          street: 'Rua Teste',
          number: '123',
          complement: 'Casa',
          neighborhood: 'Teste',
          city: 'São Paulo',
          state: 'SP',
        },
      },
      orderStatus: [
        {
          id: 1,
          status: OrderStatusEnum.CREATED,
          description: 'Pedido criado',
          date: moment().format('L'),
          createdAt: moment().format('L'),
          updatedAt: moment().format('L')
        }
      ],
      orderProducts: [
        {
          id: 1,
          price: 100,
          quantity: 1,
          total: 100,
          createdAt: moment().format('L'),
          updatedAt: moment().format('L'),
          product: {
            id: 1,
            name: 'Product 1',
            description: 'Product 1 description',
            price: 100,
            image: 'https://via.placeholder.com/550x350',
            createdAt: moment().format('L'),
            updatedAt: moment().format('L')
          }
        }
      ]
    },
    {
      id: 2,
      code: 'PP-0002',
      status: OrderStatusEnum.PAID,
      paymentMethod: 'bankSlip',
      subtotal: 500,
      discount: 150,
      deliveryFee: 100,
      total: 450,
      date: moment().format('L'),
      canceledReason: '',
      createdAt: moment().format('L'),
      updatedAt: moment().format('L'),
      coupon: {
        id: 1,
        code: '30OFF',
        type: 'percent',
        amount: 30,
        expireDate: moment().format('L'),
        createdAt: moment().format('L'),
        updatedAt: moment().format('L')
      },
      user: {
        id: 1,
        name: 'Bruno',
        last_name: 'Almeida',
        email: 'bruno@teste.com',
        document: '000.000.000-00',
        phone: '(00) 00000-0000',
        createdAt: moment().format('L'),
        updatedAt: moment().format('L'),
        address: {
          id: 2,
          zipcode: '00000-000',
          street: 'Rua Teste',
          number: '123',
          complement: 'Casa',
          neighborhood: 'Teste',
          city: 'São Paulo',
          state: 'SP',
        },
      },
      orderStatus: [
        {
          id: 2,
          status: OrderStatusEnum.CREATED,
          description: 'Pedido criado',
          date: moment().format('L'),
          createdAt: moment().format('L'),
          updatedAt: moment().format('L')
        },
        {
          id: 3,
          status: OrderStatusEnum.PENDING_PAYMENT,
          description: 'Aguardando pagamento',
          date: moment().format('L'),
          createdAt: moment().format('L'),
          updatedAt: moment().format('L')
        },
        {
          id: 4,
          status: OrderStatusEnum.PAID,
          description: 'Pedido pago',
          date: moment().format('L'),
          createdAt: moment().format('L'),
          updatedAt: moment().format('L')
        }
      ],
      orderProducts: [
        {
          id: 2,
          price: 250,
          quantity: 2,
          total: 500,
          createdAt: moment().format('L'),
          updatedAt: moment().format('L'),
          product: {
            id: 2,
            name: 'Product 2',
            description: 'Product 2 description',
            price: 250,
            image: 'https://via.placeholder.com/550x350',
            createdAt: moment().format('L'),
            updatedAt: moment().format('L')
          }
        }
      ]
    },
  ]

  return data
}

export const getOrder = (id: number) => {
  if (id) {
    return {
      id: 1,
      code: 'PP-0001',
      status: OrderStatusEnum.EVALUATION_DOCUMENTS,
      paymentMethod: 'creditCard',
      subtotal: 100,
      discount: 10,
      deliveryFee: 10,
      installments: 1,
      total: 100,
      date: moment().format('L'),
      canceledReason: '',
      createdAt: moment().format('L'),
      updatedAt: moment().format('L'),
      coupon: {
        id: 1,
        name: 'Cupom de 10%',
        type: CouponTypeEnum.PERCENTAGE,
        value: 10,
        code: '10OFF',
        quantity: 100,
        expireAt: moment().format('L'),
        active: true
      },
      user: {
        id: 1,
        name: 'John',
        last_name: 'Doe',
        email: 'john@teste.com',
        whatsapp: '(00) 00000-0000',
        document: '000.000.000-00',
        createdAt: moment().format('L'),
        updatedAt: moment().format('L'),
        active: true,
        address: {
          id: 1,
          zipcode: '00000-000',
          street: 'Rua Teste',
          number: '123',
          complement: 'Casa',
          neighborhood: 'Teste',
          city: 'São Paulo',
          state: 'SP',
        },
        details: {
          id: 1,
          document: '000.000.000-00',
          birth_date: '07/09/1997',
          naturalness: 'São Paulo',
          gender: 'Masculino',
          civil_status: 'Solteiro',
          occupation: 'Desenvolvedor',
          rg: '00.000.000-0',
          rg_issuer: 'SSP-SP',
          rg_state: 'SP',
          rg_issue_date: '07/09/2010',
          rg_image: 'https://via.placeholder.com/550x350',
        }
      },
      orderStatus: [
        {
          id: 1,
          status: OrderStatusEnum.CREATED,
          description: 'Pedido criado',
          date: moment().format('L'),
          createdAt: moment().format('L')
        },
        {
          id: 2,
          status: OrderStatusEnum.PENDING_PAYMENT,
          description: 'Aguardando pagamento',
          date: moment().format('L'),
          createdAt: moment().format('L')
        }
      ],
      orderProducts: [
        {
          id: 1,
          price: 100,
          quantity: 1,
          total: 100,
          createdAt: moment().format('L'),
          updatedAt: moment().format('L'),
          product: {
            id: 1,
            title: 'Product 1',
            slug: 'product-1',
            code: 'PP-0001',
            stock: 10,
            category: {
              id: 1,
              name: 'Category 1',
              quantity_installments: 1,
              active: true,
            },
            client_type: ClientTypeEnum.PHYSICAL_PERSON,
            pre_sale: false,
            featured: false,
            description: 'Product 1 description',
            price: 100,
            image: 'https://via.placeholder.com/550x350',
            active: true,
          }
        }
      ]
    }
  }

  return null
}