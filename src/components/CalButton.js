import { Button, Text } from 'native-base';
import React from 'react';

const CalButton = (props) => {
    return (
            <Button rounded>
                <Text>{props.buttonTitle}</Text>
            
            </Button>
    );
}
export default CalButton;
