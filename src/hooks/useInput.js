import {useState} from 'react';
/**
 *
 * @param initailValue : string
 * @content textInput 용 stateHandler입니다
 * @returns void
 */
const useInput = initailValue => {
  const [value, setValue] = useState(initailValue);
  const onChangeText = text => {
    setValue(text);
  };
  return {value, onChangeText};
};

export default useInput;
