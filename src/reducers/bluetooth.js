const CONNECT = 'scratch-gui/bluetooth/CONNECT';
const DISCONNECT = 'scratch-gui/bluetooth/DISCONNECT';

const bluetooth = require('webbluetooth').bluetooth;
const muse_service = 0xfe8d;

const initialState = {
    connected: false
};

const reducer = function (state, action) {
    if (typeof state === 'undefined') state = initialState;
    switch (action.type) {
        case CONNECT:
            return Object.assign({}, state, {
                connected: true
            });
        case DISCONNECT:
            return Object.assign({}, state, {
                connected: false
            });
        default:
            return state;
    }
};

const bluetoothConnect = function(gatt?: BluetoothRemoteGATTServer) {
    /*
    bluetooth.requestDevice({
        //acceptAllDevices: true
        filters: [{ 
            //services: [0xfe8d]
            name: 'Echo Spot-H9F'
        }],
        optionalServices: ['battery_service']
    }).then(device => {
            console.log('connected')
            return device.gatt.connect();
    });*/
        const device = navigator.bluetooth.requestDevice({
            filters: [{ services: [muse_service]}],
        }).then(device => {
            console.log('connected')
            const gatt = device.gatt.connect()
            console.log(device.gatt.connect())
        });
    return {type: CONNECT};
};

export {
    reducer as default,
    bluetoothConnect
};

