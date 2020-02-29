import React from 'react';
import Aux from '../../hoc/Aux';

const layout = (props) => (
    <Aux>
        <div>toolbar, sidebar, backdrop</div>
        <body>
            {
                props.children
            }
        </body>
    </Aux>

);

export default layout;