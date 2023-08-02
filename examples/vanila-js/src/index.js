import { injectContentsquareScript } from "../../../dist/esm";


function sendTrackEvent(event) {
    return () => {
        window._uxa.push(['trackEvent', event ]);
    };
}

function component() {
    const button = document.createElement('button');
    button.innerHTML = 'Click here to send a track event';
    button.onclick = sendTrackEvent('CLICK_MY_BUTTON');

    return button;
}

injectContentsquareScript({ clientId: '123456789'});
document.body.appendChild(component());
