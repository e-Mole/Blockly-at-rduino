'use strict';

goog.provide('Blockly.Blocks.molegraph');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks['molegraph_com'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MoleGraph")
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/molegraph/molegraph.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendValueInput("CH1")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("CH1");
    this.appendValueInput("CH2")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("CH2");
    this.appendValueInput("CH3")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("CH3");
    this.appendValueInput("CH4")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("CH4");
    this.appendValueInput("CH5")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("CH5");
    this.appendValueInput("CH6")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("CH6");
    this.appendValueInput("CH7")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("CH7");
    this.appendValueInput("CH8")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("CH8");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);        
    this.setColour(230);
 this.setTooltip("Block for sending sensor data to MoleGraph App. For more info visit MoleGraph webpage www.e-mole.cz/diy/molegraph");
 this.setHelpUrl("https://www.e-mole.cz/diy/molegraph");
  }
};