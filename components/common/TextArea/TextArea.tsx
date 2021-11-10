// @flow
import { useState, useRef, useEffect } from 'react';

import classNames from 'classnames';
import noop from 'lodash/noop';
import styles from './TextArea.module.scss';
import bowser from 'bowser';

type TextAreaProps = {
  id: string,
  isDisabled?: boolean,
  placeholder?: string,
  value?: string,
  onChange?: (value: string) => void,
  rawOnChange?: (value: any) => void | Promise<void>,
  onHeightChange?: () => void,
  label: string,
  focusInput?: boolean,
  maxCharacters?: number,
  hardLimitOnMaximumCharacters?: boolean,
};

const TextArea = ({
  id,
  isDisabled,
  placeholder,
  value,
  onChange = noop,
  rawOnChange = noop,
  onHeightChange,
  label,
  focusInput,
  maxCharacters,
  hardLimitOnMaximumCharacters,
}: TextAreaProps) => {

  const getClippedValue = (value?: string): string => {
    if (value && maxCharacters && hardLimitOnMaximumCharacters) {
      if (bowser.safari) {
        /**
         * when calculating textarea maxlength safari will
         * apply a length of 2 to newlines and carrige returns
         * because setting the value wont truncate text for us we
         * have to clip according to this eccentricity.
         */
        const countRegex = /\r\n|\n|\r/g;
        const match = value.match(countRegex);
        const newLineCount = match ? match.length : 0;
        return value.substring(0, maxCharacters - newLineCount);
      }

      return value.substring(0, maxCharacters);
    }
    return value || '';
  };

  const clippedValue = getClippedValue(value);

  const [inputIsFocused, setInputIsFocused] = useState<boolean>(false);
  const [shouldFocusInput, setShouldFocusInput] = useState<boolean>(
    !!focusInput
  );
  const [currentValue, setCurrentValue] = useState<string>(clippedValue);
  const [inputHeight, setInputHeight] = useState<number>(-1);

  const displayTextArea = useRef<HTMLTextAreaElement | null>(null);
  const mirrorTextArea = useRef<HTMLTextAreaElement | null>(null);

  const textAreaProps = {
    cols: '60',
    rows: '8',
  };

  const reduceLabel = placeholder || currentValue || inputIsFocused;

  const synchronizeTextAreaHeights = (value: string) => {
    if (mirrorTextArea.current && displayTextArea.current) {
      mirrorTextArea.current.value = value;
      const newHeight = mirrorTextArea.current.scrollHeight;
      displayTextArea.current.style.height = `${newHeight}px`;
      setInputHeight(newHeight);
    }
  };

  const focusElement = () => {
    if (displayTextArea.current && shouldFocusInput) {
      displayTextArea.current.focus();
    }
  };

  useEffect(() => {
    synchronizeTextAreaHeights(currentValue);
  }, [currentValue]);

  useEffect(() => {
    if (onHeightChange) {
      onHeightChange();
    }
  }, [inputHeight, onHeightChange]);

  useEffect(() => {
    setShouldFocusInput(!!focusInput);
  }, [focusInput]);

  useEffect(() => {
    focusElement();
  });

  return (
    <div
      className={classNames(
        styles['text-area'],
        reduceLabel && styles['text-area--reduced'],
        inputIsFocused && styles['text-area--focused'],
      )}
    >
      <label
        htmlFor={id}
        className={classNames(
          styles['text-area__label'],
          styles['text-area__label--expanded']
        )}
      >
        {label}
      </label>
      <label
        aria-hidden='true'
        className={classNames(
          styles['text-area__label'],
          styles['text-area__label--shrunk']
        )}
      >
        {label}
      </label>
      <textarea
        {...textAreaProps}
        ref={mirrorTextArea}
        className={classNames(
          styles['text-area__input'],
          styles['text-area__input--hidden']
        )}
        maxLength={
          hardLimitOnMaximumCharacters && maxCharacters ? maxCharacters : ''
        }
      />
      <textarea
        {...textAreaProps}
        ref={displayTextArea}
        id={id}
        className={classNames(styles['text-area__input'], 'no-focus')}
        placeholder={placeholder}
        readOnly={isDisabled}
        value={currentValue}
        maxLength={
          hardLimitOnMaximumCharacters && maxCharacters ? maxCharacters : ''
        }
        onChange={(evt) => {
          const {
            target: { value: eventVal },
          } = evt;
          const value = getClippedValue(eventVal);
          setCurrentValue(value);
          synchronizeTextAreaHeights(value);
          onChange(value);
          rawOnChange(evt)
        }}
        onFocus={() => {
          if (!isDisabled) setInputIsFocused(true);
          setShouldFocusInput(false);
        }}
        onBlur={() => {
          if (!isDisabled) setInputIsFocused(false);
        }}
      />
    </div>
  );
};

export default TextArea;
