import InputTypes from '../../constants/InputTypes';
import React from 'react';
import InputField from './InputField';
import PriceField from './PriceField';
import TagsInput from './ReactSelect';
import TextAreaField from './TextAreaField';

export default function CustomFields({ fields }: any) {
  function handleField(field: any, index: any) {
    switch (field.type) {
      case InputTypes.InputField:
        return (
          <InputField
            name={field.name}
            label={field.label}
            placeholder={field.placeholder}
            isRequired={field.placeholder}
            key={index}
          />
        );
      case InputTypes.TextAreaField:
        return (
          <TextAreaField
            name={field.name}
            label={field.label}
            placeholder={field.placeholder}
            isRequired={field.placeholder}
            key={index}
          />
        );
      case InputTypes.PriceField:
        return (
          <PriceField
            name={field.name}
            label={field.label}
            placeholder={field.placeholder}
            isRequired={field.placeholder}
            key={index}
          />
        );
      case InputTypes.TagsInput:
        return (
          <TagsInput
            key={index}
            type="number"
            name={field.name}
            label={field.label}
            placeholder={field.placeholder}
            tags={[]}
          />
        );
      default:
        return (
          <InputField
            name={field.name}
            label={field.label}
            placeholder={field.placeholder}
            isRequired={field.placeholder}
            key={field.index}
          />
        );
    }
  }

  return <div>{fields.map((field: any, index: Number) => handleField(field, index))}</div>;
}
