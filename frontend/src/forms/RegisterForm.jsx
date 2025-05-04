import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Form, Input, Select } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';

import useLanguage from '@/locale/useLanguage';
import { countryList } from '@/utils/countryList';

export default function RegisterForm({ userLocation }) {
  const translate = useLanguage();
  const compareToFirstPassword = ({ getFieldValue }) => ({
    validator(_, value) {
      if (!value || getFieldValue('password') === value) {
        return Promise.resolve();
      }
      return Promise.reject(new Error(translate('The two passwords that you entered do not match!')));
    },
  });


  return (
    <>
        <Form.Item
        name="name"
        label={translate('name')}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} size="large" />
      </Form.Item>
      <Form.Item
        name="surname"
        label={translate('last Name')}
        rules={[
           {
            required: true
          },
        ]}>
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            
            size="large"
        />
      
      </Form.Item>
      <Form.Item
        name="email"
        label={translate('email')}
        rules={[
          {
            required: true, message: 'Please enter your email'
          },
          {
            type: 'email',
          },
        ]}
      >
       <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            type="email"
            size="large"
          />

      </Form.Item>
      <Form.Item
        name="password"
        label={translate('password')}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} size="large" />
      </Form.Item>
      <Form.Item
        name="confirmPassword"
        label={translate('confirm password')}
        dependencies={['password']}
        rules={[
          { required: true, message: translate('Please confirm your password!') },
          compareToFirstPassword,
        ]}
      >
        <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} size="large" />
      </Form.Item>
        <Form.Item
        label={translate('country')}
        name="country"
        rules={[
          {
            required: true,
          },
        ]}
        initialValue={userLocation}
      >
        <Select
          showSearch
          defaultOpen={false}
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
          }
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? '').toLowerCase().startsWith((optionB?.label ?? '').toLowerCase())
          }
          style={{
            width: '100%',
          }}
          size="large"
        >
          {countryList.map((language) => (
            <Select.Option key={language.value} value={language.value} label={translate(language.label)}>{language?.icon && language?.icon + ' '}{translate(language.label)}</Select.Option>
          ))}
        </Select>
      
        </Form.Item>
    </>
  );
}
