import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

const LordIcon = ({
    colors,
    src,
    size = 320,
    trigger,
    delay,
    stroke
}) => {
    return (
        <lord-icon
            colors={`primary:${colors?.primary},secondary:${colors?.secondary}`}
            src={src}
            trigger={trigger}
            delay={delay}
            stroke={stroke}
            style={{
                width: size,
                height: size,
            }}
        />
    )
}

export default LordIcon