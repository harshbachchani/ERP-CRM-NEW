export const fields = {
  product: {
    type: 'async',
    label: 'Product',
    displayLabels: ['product', 'name'],
    dataIndex: ['product', 'name'],
    entity: 'product',
    required: true,
  },
  quantity: {
    type: 'number',
    label: 'Quantity',
    required: true,
    min: 0,
    rules: [
      {
        required: true,
        message: 'Please input Quantity!',
      },
      {
        type: 'number',
        min: 0,
        message: 'Quantity must be a non-negative number!',
      },
    ],
  },
};
