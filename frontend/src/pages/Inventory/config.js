export const fields = {
  product: {
    type: 'async',
    label: 'Product',
    displayLabels: ['name'],
    dataIndex: ['name'],
    entity: 'product',
    required: true,
  },
  quantity: {
    type: 'number',
    label: 'Quantity',
    required: true,
    min: 0, // Ensure non-negative numbers
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
  currency: {
    type: 'selectCurrency',
  },
  unitPrice: {
    type: 'currency',
    label: 'Unit Price',
    required: true,
    rules: [
      {
        required: true,
        message: 'Please input Unit Price!',
      },
      {
        type: 'number',
        min: 0,
        message: 'Unit Price must be a non-negative number!',
      },
    ],
  },
};
