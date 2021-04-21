/**
 * MoleGraph test BLOCK
 */
'use strict';

goog.provide('Blockly.Arduino.molegraph');

goog.require('Blockly.Arduino');

Blockly.Arduino['molegraph_com'] = function() {
  var value_ch1 = Blockly.Arduino.valueToCode(this, 'CH1', Blockly.Arduino.ORDER_ATOMIC);
  var value_ch2 = Blockly.Arduino.valueToCode(this, 'CH2', Blockly.Arduino.ORDER_ATOMIC);
  var value_ch3 = Blockly.Arduino.valueToCode(this, 'CH3', Blockly.Arduino.ORDER_ATOMIC);
  var value_ch4 = Blockly.Arduino.valueToCode(this, 'CH4', Blockly.Arduino.ORDER_ATOMIC);
  var value_ch5 = Blockly.Arduino.valueToCode(this, 'CH5', Blockly.Arduino.ORDER_ATOMIC);
  var value_ch6 = Blockly.Arduino.valueToCode(this, 'CH6', Blockly.Arduino.ORDER_ATOMIC);
  var value_ch7 = Blockly.Arduino.valueToCode(this, 'CH7', Blockly.Arduino.ORDER_ATOMIC);
  var value_ch8 = Blockly.Arduino.valueToCode(this, 'CH8', Blockly.Arduino.ORDER_ATOMIC);
  
  if (value_ch1 == '') { value_ch1 = ''; } else { value_ch1 = '  moleGraph.SetChannelValue(1, ' + value_ch1 + ');\n'; }
  if (value_ch2 == '') { value_ch2 = ''; } else { value_ch2 = '  moleGraph.SetChannelValue(2, ' + value_ch2 + ');\n'; }
  if (value_ch3 == '') { value_ch3 = ''; } else { value_ch3 = '  moleGraph.SetChannelValue(3, ' + value_ch3 + ');\n'; }
  if (value_ch4 == '') { value_ch4 = ''; } else { value_ch4 = '  moleGraph.SetChannelValue(4, ' + value_ch4 + ');\n'; }
  if (value_ch5 == '') { value_ch5 = ''; } else { value_ch5 = '  moleGraph.SetChannelValue(5, ' + value_ch5 + ');\n'; }
  if (value_ch6 == '') { value_ch6 = ''; } else { value_ch6 = '  moleGraph.SetChannelValue(6, ' + value_ch6 + ');\n'; }
  if (value_ch7 == '') { value_ch7 = ''; } else { value_ch7 = '  moleGraph.SetChannelValue(7, ' + value_ch7 + ');\n'; }
  if (value_ch8 == '') { value_ch8 = ''; } else { value_ch8 = '  moleGraph.SetChannelValue(8, ' + value_ch8 + ');\n'; }
  
  Blockly.Arduino.includes_['molegraph_incl'] = '#include <MoleGraph.h> // Link MoleGraph library (www.e-mole.cz/diy/molegraph)';
  
  Blockly.Arduino.definitions_['molegraph_def1'] = 'MoleGraph moleGraph;  // Create MoleGraph instance\n';
  
  Blockly.Arduino.userFunctions_['molegraph_fn1'] = 
  'void MeasurementStartedCallback(void) {\n'
  + '  digitalWrite(13, HIGH);\n'
  + '}\n'
  + 'void MeasurementStoppedCallback(void) {\n'
  + '  digitalWrite(13, LOW);\n'
  + '}\n'
  + 'void MeasurementPausedCallback(void) {\n'
  + '  digitalWrite(13, LOW);\n'
  + '}\n'
  + 'void MeasurementContinuedCallback(void) {\n'
  + '  digitalWrite(13, HIGH);\n'
  + '}\n'
  + 'void UpdateGraphChannels(void) {\n'
  + value_ch1
  + value_ch2
  + value_ch3
  + value_ch4
  + value_ch5
  + value_ch6
  + value_ch7
  + value_ch8
  + '}';
  
  Blockly.Arduino.setups_['molegraph_stp'] =
  '\n  moleGraph.Setup();\n'
  + '  moleGraph.SetSendingCallback(&UpdateGraphChannels);\n'
  + '  moleGraph.SetMeasurementStartedCallback(&MeasurementStartedCallback);\n'
  + '  moleGraph.SetMeasurementStoppedCallback(&MeasurementStoppedCallback);\n'
  + '  moleGraph.SetMeasurementPausedCallback(&MeasurementPausedCallback);\n'
  + '  moleGraph.SetMeasurementContinuedCallback(&MeasurementContinuedCallback);\n'
  + '  pinMode(13, OUTPUT);\n'; 
  
  // TODO: Assemble into code variable.
  var code = 'moleGraph.CheckInput();\n';
  //return [code, Blockly.Arduino.ORDER_FUNCTION_CALL];
  //return [code, Blockly.Arduino.ORDER_ATOMIC];
  return code;
};