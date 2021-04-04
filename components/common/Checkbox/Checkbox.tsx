import classNames from 'classnames';
import noop from 'lodash/noop';
import styles from './Checkbox.module.scss';

type Props = {
  handleChange?: (
    e: any
  ) => void,
  isChecked?: boolean,
  label?: string,
  subtitle?: string,
  id: string,
  ariaDescribedBy?: string,
};

const CheckboxComp = (props: Props) => (
  <div className={styles.checkbox}>
    <span
      className={classNames(
        styles['checkbox__checkmark'],
        props.isChecked && styles['checkbox__checkmark--checked']
      )}
    >
      <input
        type='checkbox'
        id={props.id}
        checked={props.isChecked}
        aria-describedby={props.ariaDescribedBy}
        className={styles['checkbox__input']}
        onKeyDown={e =>
          e.keyCode === 13
            ? props.handleChange
              ? props.handleChange(e)
              : noop()
            : null
        }
        onChange={props.handleChange}
      />
    </span>
    <label
      htmlFor={props.id}
      className={classNames(
        styles['checkbox__label'],
        props.isChecked && styles['checkbox__label--checked'],
        !!props.label && !!props.subtitle && styles['checkbox__label--subtitle']
      )}
    >
      {!!props.label && (
        <span className={styles['checkbox__title']}>{props.label}</span>
      )}
      {!!props.subtitle && (
        <span className={styles['checkbox__subtitle']}>{props.subtitle}</span>
      )}
    </label>
  </div>
);

CheckboxComp.displayName = 'CheckboxComp';

export default CheckboxComp;
