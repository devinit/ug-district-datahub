import React, { FC, useEffect, useState } from 'react';
import { render } from 'react-dom';

type ComponentProps = {
  show: boolean;
  onClose?: () => void;
};

const WagtailModal: FC<ComponentProps> = ({ children, show, onClose }) => {
  const [body, setBody] = useState<HTMLElement | null>(null);
  const [container, setContainer] = useState<JQuery<HTMLElement> | null>(null);

  useEffect(() => {
    $('body > .modal').remove();
    const triggerElement = window.document.activeElement;
    if (triggerElement) {
      triggerElement.setAttribute('disabled', 'true');

      const iconClose = '<svg class="icon icon-cross" aria-hidden="true"><use href="#icon-cross"></use></svg>';
      const container = $(
        `<div class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <button type="button" class="button close button--icon text-replace" data-dismiss="modal">
                ${iconClose}Close
              </button>
              <div class="modal-body"></div>
            </div>
          </div>
        </div>`,
      );
      setContainer(container);

      // add container to body and hide it, so content can be added to it before display
      $('body').append(container);
      (container as any).modal('hide'); // eslint-disable-line @typescript-eslint/no-explicit-any

      container.on('hide.bs.modal', () => {
        if (!triggerElement.hasAttribute('data-force-disabled')) {
          triggerElement.removeAttribute('disabled');
        }
        if (onClose) {
          onClose();
        }
      });

      // add listener - once modal is fully hidden (closed & css transitions end) - re-focus on trigger and remove from DOM
      container.on('hidden.bs.modal', function () {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (triggerElement as any).focus();
        container.remove();
      });

      setBody(container.find('.modal-body')[0]);
    }
  }, []);

  useEffect(() => {
    if (show && body && React.isValidElement(children)) {
      if (container) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (container as any).modal('show');
        render(children, body);
      }
    }
  }, [show, body]);

  return null;
};

export default WagtailModal;
