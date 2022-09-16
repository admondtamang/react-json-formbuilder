import React from 'react';
import { Button } from '@chakra-ui/react';
import { Form, Formik, useFormik } from 'formik';
import CustomFields from './CustomFields';

export default function FormBuilder({ formFields, initialValues={}, defaultValues={}, handleSubmit, children }: any) {
  
  // For Put method / Edit - use defaultValues instead of initial
  const values = Object.entries(defaultValues).length >0 ? defaultValues : initialValues 

  // Using hook
  // const formik = useFormik({
  //    initialValues: values,
  //    onSubmit: handleSubmit
  //  });

  return (
    <div>
      <Formik initialValues={values || {}} onSubmit={handleSubmit}>
        {(props: any) => (
          <Form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

            <CustomFields fields={formFields} />
            {children}

            <Button mt={4} colorScheme="teal" isLoading={props.isSubmitting} type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
