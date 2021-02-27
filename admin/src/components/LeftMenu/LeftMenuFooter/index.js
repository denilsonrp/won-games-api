import React from 'react';

import Wrapper from './Wrapper';

function LeftMenuFooter() {
  // PROJECT_TYPE is an env variable defined in the webpack config
  // eslint-disable-next-line no-undef
  const projectType = PROJECT_TYPE;

  return (
    <Wrapper>
      <div className="poweredBy">
        Powered by
        <a key="website" href="https://reactavancado.com.br" target="_blank" rel="noopener noreferrer" style={{ marginLeft: 5 }}>
          React Avançado
        </a>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;
