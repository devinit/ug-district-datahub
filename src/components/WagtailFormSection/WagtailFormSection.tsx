/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { FC, useState } from 'react';

type ComponentProps = {
  label: string;
  error?: string;
  helpText?: string;
  required?: boolean;
};

export const WagtailFormSection: FC<ComponentProps> = ({ children, ...props }) => {
  const [showInput, setShowInput] = useState(true);

  return (
    <section className="w-panel " id="panel-name-section" aria-labelledby="panel-name-heading" data-panel="">
      <div
        className="w-panel__header"
        css={css`
          margin-inline-start: -2.25rem;
        `}
      >
        <button
          className="w-panel__toggle"
          type="button"
          aria-label="Toggle section"
          aria-describedby="panel-name-heading"
          data-panel-toggle=""
          aria-controls="panel-name-content"
          aria-expanded={showInput}
          onClick={() => setShowInput(!showInput)}
        >
          <svg className="icon icon-arrow-down-big w-panel__icon" aria-hidden="true">
            <use href="#icon-arrow-down-big"></use>
          </svg>
        </button>

        <h2 className="w-panel__heading w-panel__heading--label" id="panel-name-heading" data-panel-heading="">
          <label htmlFor="id_name" id="id_name-label">
            <span data-panel-heading-text="">{props.label}</span>
            {props.required ? (
              <span className="w-required-mark" data-panel-required="">
                *
              </span>
            ) : null}
          </label>
        </h2>

        <a
          className="w-panel__anchor w-panel__anchor--suffix"
          href="#panel-name-section"
          aria-labelledby="panel-name-heading"
        >
          <svg className="icon icon-link w-panel__icon" aria-hidden="true">
            <use href="#icon-link"></use>
          </svg>
        </a>
        <div className="w-panel__divider"></div>
      </div>

      {showInput ? (
        <div id="panel-name-content" className="w-panel__content">
          <div className="w-field__wrapper " data-field-wrapper="">
            <div
              className="w-field w-field--char_field w-field--text_input w-field--commentable"
              data-field=""
              data-contentpath="name"
            >
              {props.error ? (
                <div className="w-field__errors" data-field-errors="" id="panel-child-name-errors">
                  <svg className="icon icon-warning w-field__errors-icon" aria-hidden="true">
                    <use href="#icon-warning"></use>
                  </svg>
                  <p className="error-message">{props.error}</p>
                </div>
              ) : null}

              <div className="w-field__input" data-field-input="">
                {children}
              </div>

              <div id="panel-child-name-helptext" data-field-help="">
                {props.helpText}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
};
