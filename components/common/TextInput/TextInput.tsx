// @flow
import { useState, useRef, useEffect } from 'react';

import classNames from 'classnames';
import noop from 'lodash/noop';
import bowser from 'bowser';
import styles from './TextInput.module.scss';

export type InputProps = {
  autocomplete?: string,
  focusInput?: boolean,
  id: string,
  isReadOnly?: boolean,
  isDisabled?: boolean,
  label: string,
  onBlur?: () => void,
  onChange?: (value: string) => void | Promise<void>,
  rawOnChange?: (value: any) => void | Promise<void>,
  type?: 'text' | 'password' | 'number',
  value: string,
};

const TextInputField = ({
  autocomplete,
  focusInput,
  id,
  isReadOnly = false,
  isDisabled = false,
  label,
  onBlur = noop,
  onChange = noop,
  rawOnChange = noop,
  type,
  value,
}: InputProps) => {

  const [inputIsFocused, setInputIsFocused] = useState<boolean>(false);
  const [inputIsAutofilled, setInputIsAutofilled] = useState<boolean>(false);
  const [shouldFocusInput, setShouldFocusInput] = useState<boolean>(
    !!focusInput
  );
  const [currentValue, setCurrentValue] = useState<string>(value);

  const textInputField = useRef<HTMLInputElement | null>(null);

  const reduceLabel =
    value || inputIsFocused || inputIsAutofilled;

  const focusElement = () => {
    if (textInputField.current && shouldFocusInput) {
      textInputField.current.focus();
    }
  };

  useEffect(() => {
    setShouldFocusInput(!!focusInput);
  }, [focusInput]);

  useEffect(() => {
    focusElement();
  });

  useEffect(() => {
    // Fix for a chrome specific bug with autofilled fields that use the floating label
    // style design that we use on the login page where a user can autofill their
    // username and password (here you can see this problem on google login page:
    // https://github.com/Baedda/floating-form-labels/issues/12#issuecomment-502006732),

    if (bowser.chrome) {
      const chromeAutofillBugCheckTimeLimit = 3000;
      const chromeAutofillBugFixLoopDuration = 50;

      const chromeAutofillBugInterval = setInterval(() => {
        const input = document.querySelector(`input#${id}`);

        let hasAutofillClass = false;

        if (input) {
          hasAutofillClass = input.matches(':-webkit-autofill');
        }

        if (hasAutofillClass) {
          setInputIsAutofilled(true);

          clearInterval(chromeAutofillBugInterval);
        }
      }, chromeAutofillBugFixLoopDuration);

      setTimeout(() => {
        clearInterval(chromeAutofillBugInterval);
      }, chromeAutofillBugCheckTimeLimit);
    }
  }, []);

  return (
    <div
      className={classNames(
        styles['input'],
        reduceLabel && styles['input--reduced'],
        inputIsFocused && styles['input--focused'],
      )}
    >
      <label
        htmlFor={id}
        className={classNames(
          styles['input__label'],
          styles['input__label--expanded'],
        )}
      >
        {label}
      </label>
      <label
        className={classNames(
          styles['input__label'],
          styles['input__label--shrunk']
        )}
      >
        {label}
      </label>
      <input
        autoComplete={autocomplete}
        className={classNames(styles['input__input'], 'no-focus')}
        id={id}
        ref={textInputField}
        type={type}
        value={currentValue}
        tabIndex={isDisabled || isReadOnly ? -1 : 0}
        onBlur={() => {
          if (!isDisabled && !isReadOnly) setInputIsFocused(false);
          if (inputIsAutofilled) setInputIsAutofilled(false);
          onBlur();
        }}
        onChange={(evt) => {
          const {
            target: { value: currVal },
          } = evt;
          setCurrentValue(currVal);
          onChange(currVal);
          rawOnChange(evt);
        }}
        onFocus={() => {
          if (!isDisabled && !isReadOnly) setInputIsFocused(true);
          setShouldFocusInput(false);
        }}
        readOnly={isReadOnly || isDisabled}
      />
    </div>
  );
};

export default TextInputField;
