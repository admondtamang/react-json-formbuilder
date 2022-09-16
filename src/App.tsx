import React, { useState } from 'react';
import axios from 'axios';
import FormBuider from './components/FormBuilder';
import InputTypes from './constants/InputTypes';
import { JsonEditor as Editor } from 'jsoneditor-react';
import 'jsoneditor-react/es/editor.min.css';

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


export default function App(props:any) {
  // const {formFields, handleSubmit,  defaultValues}=props;
  const [jsonView, setjsonView] = useState(formFields);

  const handleSubmit = async (values: any, actions: any) => {

    const data = values.product_ids.replace(/ /g, '').split(',');
    values.product_ids = data;

    const response = await axios.post('api/feeder', values);
    console.log(response);

    setjsonView(response.data.data);
    actions.setSubmitting(false);
  };

  const handleChange=(value:Array<any>)=>{
    console.log(value);
    
    setjsonView( value)
    // setjsonView( [...value])
  }

// for Edit values
  const defaultValues={
  product_ids: 1,
  result: 1,
  title: "delectus aut autem",
  category_id: 12
}

const initialValues={ product_ids: '1111,3643', description: 'asfksfjlks ' }

  return (
    <div style={{display:"flex"}}>
    <FormBuider formFields={jsonView} handleSubmit={handleSubmit} initialValues={initialValues} defaultValues={defaultValues}/>
    {/* {JSON.stringify(jsonView, null, 2)} */}
          <Editor
            value={jsonView}
            onChange={handleChange}
        />
    </div>
  );
}
