
goog.require("Blockly.Arduino");

goog.provide("Blockly.Arduino.phone");

Blockly.Arduino['phone_update'] = function(block) {
    var code = "mp.update();\n";
    return code;
};

Blockly.Arduino['button_action'] = function(block) {
    var button = block.getFieldValue('BUTTON');
    var action = block.getFieldValue('ACTION');

    var code = 'mp.buttons.' + action + '(' + button + ')';
    return [ code, Blockly.Arduino.ORDER_ATOMIC ];
};

Blockly.Arduino['button_held'] = function(block) {
    var button = block.getFieldValue('BUTTON');
    var duration = Blockly.Arduino.valueToCode(block, 'DURATION', Blockly.Arduino.ORDER_ATOMIC);

    var code = 'mp.buttons.held(' + button + ", " + duration + ')';
    return [ code, Blockly.Arduino.ORDER_ATOMIC ];
};

Blockly.Arduino['button_repeat'] = function(block) {
    var button = block.getFieldValue('BUTTON');
    var interval = Blockly.Arduino.valueToCode(block, 'INTERVAL', Blockly.Arduino.ORDER_ATOMIC);

    var code = 'mp.buttons.repeat(' + button + ", " + interval + ');\n';
    return code;
};

Blockly.Arduino['joystick'] = function(block) {
    var axis = block.getFieldValue('AXIS');

    var code = 'mp.buttons.getJoystick' + axis + '()';
    return [ code, Blockly.Arduino.ORDER_ATOMIC ];
};

Blockly.Arduino['led_colour'] = function(block) {
    var COLOUR = block.getFieldValue('COLOUR');

    return [ COLOUR, Blockly.Arduino.ORDER_ATOMIC ];
};

Blockly.Arduino['led_colour_rgb'] = function(block) {
    var r = Blockly.Arduino.valueToCode(block, 'R', Blockly.Arduino.ORDER_ATOMIC);
    var g = Blockly.Arduino.valueToCode(block, 'G', Blockly.Arduino.ORDER_ATOMIC);
    var b = Blockly.Arduino.valueToCode(block, 'B', Blockly.Arduino.ORDER_ATOMIC);

    return [ "CRGB(" + r + ", " + g + ", " + b + ")", Blockly.Arduino.ORDER_ATOMIC ];
};

Blockly.Arduino['led_on'] = function(block) {
    var led = Blockly.Arduino.valueToCode(block, 'LED', Blockly.Arduino.ORDER_ATOMIC);
    var colour = Blockly.Arduino.valueToCode(block, 'COLOUR', Blockly.Arduino.ORDER_ATOMIC);

    var code = 'mp.leds[' + led + '] = ' + colour + ";\n";
    return code;
};

Blockly.Arduino['led_off'] = function(block) {
    var led = Blockly.Arduino.valueToCode(block, 'LED', Blockly.Arduino.ORDER_ATOMIC);

    var code = 'mp.leds[' + led + '] = 0;\n';
    return code;
};