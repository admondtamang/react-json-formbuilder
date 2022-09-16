import React, { useState } from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic';
import FormBuider from '../../components/FormBuilder';
import InputTypes from '@/constants/InputTypes';
// import { JsonEditor as Editor } from 'jsoneditor-react-ext';
// import 'jsoneditor-react/es/editor.min.css';
const ReactJson = dynamic(() => import('react-json-view'), { ssr: false });

import { JsonEditor as Editor } from 'jsoneditor-react';

  const formFields = [
    {
      name: 'product_ids',
      label: 'Products Ids',
      type: InputTypes.InputField,
      placeholder: 'Enter product Ids',
      isRequired: true,
    },
    {
      name: 'roll',
      label: 'Roll',
      type: InputTypes.InputField,
      placeholder: 'Enter product Ids',
      isRequired: true,
    },
    {
      name: 'title',
      label: 'Title',
      type: InputTypes.InputField,
      placeholder: 'Enter product name',
      isRequired: true,
    },
    {
      type: InputTypes.InputField,
      label: 'Icon Name',
      name: 'icon',
      placeholder: 'Enter short description',
      isRequired: true,
    },
    {
      type: InputTypes.PriceField,
      name: 'category_id',
      placeholder: 'Enter category Id',
      isRequired: true,
    },
    {
      type: InputTypes.InputField,
      name: 'result',
      placeholder: 'Final Result',
    },
  ];


export default function JsonFeeder() {
  const [jsonView, setjsonView] = useState(formFields);

  const handleSubmit = async (values: any, actions: any) => {
    console.log(values);
    debugger
    const data = values.product_ids.replace(/ /g, '').split(',');
    values.product_ids = data;

    const response = await axios.post('api/feeder', values);
    console.log(response);

    setjsonView(response.data.data);
    actions.setSubmitting(false);
  };


// for Edit values
  const defaultValues={
  product_ids: 1,
  result: 1,
  title: "delectus aut autem",
  category_id: 12
}

const initialValues={ product_ids: '1111,3643', description: 'asfksfjlks ' }

  return (
    <FormBuider formFields={formFields} handleSubmit={handleSubmit} initialValues={initialValues} defaultValues={defaultValues}>
      <ReactJson src={jsonView} />
           <Editor
            value={jsonView}
            onChange={handleChange}
        />
      {/* <Editor value={jsonView} onChange={handleChange} /> */}
    </FormBuider>
  );
}
