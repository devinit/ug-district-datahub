import React, { FC } from 'react';

const WagtailModalHeader: FC = ({ children }) => {
  return (
    <header className="w-header w-header--hasform">
      <div className="row">
        <div className="left">
          <div className="col">
            <h1 className="w-header__title" id="header-title">
              <svg className="icon icon-snippet w-header__glyph" aria-hidden="true">
                <use href="#icon-snippet"></use>
              </svg>
              {children}
            </h1>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </header>
  );
};

export default WagtailModalHeader;
