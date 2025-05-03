import React from 'react';
import CrudModule from '@/modules/CrudModule/CrudModule';
import DynamicForm from '@/forms/DynamicForm'; // Import DynamicForm
import useLanguage from '@/locale/useLanguage';
import { fields } from './config'; // Import fields config

export default function Inventory() {
  const translate = useLanguage();
  const entity = 'inventory'; // Updated entity name
  const searchConfig = {
    displayLabels: ['product'], // Adjusted to search by product
    searchFields: 'product',
    outputValue: '_id',
  };
  const deleteModalLabels = ['product', 'quantity', 'unitPrice']; // Adjusted to display inventory item labels

  const readColumns = [
    {
      title: translate('Product'),
      dataIndex: 'product',
    },
    {
      title: translate('Quantity'),
      dataIndex: 'quantity',
    },
    {
      title: translate('Unit Price'),
      dataIndex: 'unitPrice',
    },
  ];

  const dataTableColumns = [
    {
      title: translate('Product'),
      dataIndex: ['product'],
    },
    {
      title: translate('Quantity'),
      dataIndex: ['quantity'],
    },
    {
      title: translate('Unit Price'),
      dataIndex: ['unitPrice'],
    },
  ];

  const Labels = {
    PANEL_TITLE: translate('product'),
    DATATABLE_TITLE: translate('Inventory'),
    ADD_NEW_ENTITY: translate('add_new_product'),
    ENTITY_NAME: translate('product'),
  };

  const configPage = {
    entity,
    ...Labels,
  };
  const config = {
    ...configPage,
    readColumns,
    dataTableColumns,
    searchConfig,
    deleteModalLabels,
  };
  return (
    <CrudModule
    createForm={<DynamicForm fields={fields} />} // Use DynamicForm with fields config
    updateForm={<DynamicForm fields={fields} isUpdateForm={true} />} // Use DynamicForm with fields config and isUpdateForm
    config={config}
    />
  );
}
