//设备数据
const deviceTypeList = [
  {
    device_img_code: 'switch_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: '',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '1',
    app_device_type: 'switch',
    device_type: '0002',
    add_device_subtype: '',
    special: {
      mutual_ctl: '1',
      light: '0',
      color: '0'
    },
    device_name: '智能开关',
    create_aotumation_action: '1',
    device_subtype: '',
    modify_img_code: '1'
  },
  {
    device_type: '0103',
    device_subtype: '',
    device_name: '智能计量开关',
    device_img_code: 'switch_0',
    modify_img_code: '1',
    app_device_type: 'switch',
    app_device_subtype: 'electric',
    mode_type: 'app',
    mode_subtype: 'lmiot-zigbee',
    create_scene: '1',
    create_aotumation_trigger: '1',
    create_aotumation_action: '1',
    add_device_type: 'zigbee',
    add_device_subtype: '',
    special: {
      mutual_ctl: '1',
      light: '0',
      color: '0'
    }
  },
  {
    device_img_code: 'switch_0',
    mode_subtype: 'forick_company',
    add_device_type: 'A005',
    app_device_subtype: '',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '1',
    app_device_type: 'switch',
    device_type: 'A005',
    add_device_subtype: '',
    special: {
      mutual_ctl: '1'
    },
    device_name: '开关面板',
    create_aotumation_action: '1',
    device_subtype: '',
    modify_img_code: '0'
  },
  {
    device_img_code: 'switch_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: '',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '1',
    app_device_type: 'switch',
    device_type: '0002',
    add_device_subtype: '',
    special: {
      mutual_ctl: '0',
      light: '0',
      color: '0'
    },
    device_name: '请勿打扰开关',
    create_aotumation_action: '1',
    device_subtype: 'E321V00024301',
    modify_img_code: '1'
  },
  {
    device_img_code: 'switch_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: '',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '1',
    app_device_type: 'switch',
    device_type: '0002',
    add_device_subtype: '',
    special: {
      mutual_ctl: '0',
      light: '0',
      color: '0'
    },
    device_name: '请即打扫开关',
    create_aotumation_action: '1',
    device_subtype: 'E321V00024302',
    modify_img_code: '1'
  },
  {
    device_img_code: 'switch_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: '',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '1',
    app_device_type: 'switch',
    device_type: '0002',
    add_device_subtype: '',
    special: {
      mutual_ctl: '0',
      light: '0',
      color: '0'
    },
    device_name: '请稍候',
    create_aotumation_action: '1',
    device_subtype: 'E321V00024303',
    modify_img_code: '1'
  },
  {
    device_img_code: 'houseNumber_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: '',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '1',
    app_device_type: 'houseNumber',
    device_type: '0002',
    add_device_subtype: '',
    special: {},
    device_name: '智能门显',
    create_aotumation_action: '1',
    device_subtype: 'E321V000238',
    modify_img_code: '0'
  },
  {
    device_img_code: 'switch_0',
    mode_subtype: 'bluemedia_company',
    add_device_type: '0002_485',
    app_device_subtype: '',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '1',
    app_device_type: 'switch',
    device_type: '0002_485',
    add_device_subtype: '',
    special: {
      mutual_ctl: '1',
      light: '0',
      color: '0'
    },
    device_name: '智能开关',
    create_aotumation_action: '1',
    device_subtype: '',
    modify_img_code: '1'
  },
  {
    device_img_code: 'switch_0',
    mode_subtype: 'tesy_company',
    add_device_type: 'A003_485',
    app_device_subtype: '',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '1',
    app_device_type: 'switch',
    device_type: 'A003_485',
    add_device_subtype: '',
    special: {
      mutual_ctl: '1',
      light: '0',
      color: '0'
    },
    device_name: '智能开关',
    create_aotumation_action: '1',
    device_subtype: '',
    modify_img_code: '1'
  },
  {
    device_img_code: 'switch_2',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: 'color',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    app_device_type: 'switch',
    device_type: '0210',
    add_device_subtype: '',
    special: {
      mutual_ctl: '0',
      light: '1',
      color: '1'
    },
    device_name: '调色灯',
    create_aotumation_action: '1',
    device_subtype: '',
    modify_img_code: '0'
  },
  {
    device_img_code: 'switch_2',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: 'color',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    app_device_type: 'switch',
    device_type: '0102',
    add_device_subtype: '',
    special: {
      mutual_ctl: '0',
      light: '1',
      color: '1'
    },
    device_name: '调色灯',
    create_aotumation_action: '1',
    device_subtype: '',
    modify_img_code: '0'
  },
  {
    device_type: '0102',
    device_subtype: 'VZ00E321V010204',
    device_name: '调色灯',
    device_img_code: 'switch_2',
    modify_img_code: '0',
    app_device_type: 'switch',
    app_device_subtype: 'color',
    mode_type: 'app',
    mode_subtype: 'lmiot-zigbee',
    create_scene: '1',
    create_aotumation_trigger: '0',
    create_aotumation_action: '1',
    add_device_type: 'zigbee',
    add_device_subtype: '',
    special: {
      mutual_ctl: '0',
      light: '1',
      color: '1'
    }
  },
  {
    device_type: '0102',
    device_subtype: 'VZ00E3221010204',
    device_name: '调色灯',
    device_img_code: 'switch_2',
    modify_img_code: '0',
    app_device_type: 'switch',
    app_device_subtype: 'color',
    mode_type: 'app',
    mode_subtype: 'lmiot-zigbee',
    create_scene: '1',
    create_aotumation_trigger: '0',
    create_aotumation_action: '1',
    add_device_type: 'zigbee',
    add_device_subtype: '',
    special: {
      mutual_ctl: '0',
      light: '1',
      color: '1'
    }
  },
  {
    device_type: '0102',
    device_subtype: 'VZ00E321V010205',
    device_name: '调色灯',
    device_img_code: 'switch_2',
    modify_img_code: '0',
    app_device_type: 'switch',
    app_device_subtype: 'rgbcw',
    mode_type: 'app',
    mode_subtype: 'lmiot-zigbee',
    create_scene: '1',
    create_aotumation_trigger: '0',
    create_aotumation_action: '1',
    add_device_type: 'zigbee',
    add_device_subtype: '',
    special: {
      mutual_ctl: '0',
      light: '1',
      color: '1',
      color_type: '2'
    }
  },
  {
    device_type: '0102',
    device_subtype: 'VZ00E3221010205',
    device_name: '调色灯',
    device_img_code: 'switch_2',
    modify_img_code: '0',
    app_device_type: 'switch',
    app_device_subtype: 'rgbcw',
    mode_type: 'app',
    mode_subtype: 'lmiot-zigbee',
    create_scene: '1',
    create_aotumation_trigger: '0',
    create_aotumation_action: '1',
    add_device_type: 'zigbee',
    add_device_subtype: '',
    special: {
      mutual_ctl: '0',
      light: '1',
      color: '1',
      color_type: '2'
    }
  },
  {
    device_img_code: 'switch_2',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: 'cct',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    app_device_type: 'switch',
    device_type: '0220',
    add_device_subtype: '',
    special: {
      color_type: '1',
      light: '1',
      mutual_ctl: '0',
      color: '1'
    },
    device_name: '色温灯',
    create_aotumation_action: '1',
    device_subtype: '',
    modify_img_code: '0'
  },
  {
    device_img_code: 'switch_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: '',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '1',
    app_device_type: 'switch',
    device_type: '0100',
    add_device_subtype: '',
    special: {
      light: '0',
      mutual_ctl: '1',
      color: '0'
    },
    device_name: '智能开关',
    create_aotumation_action: '1',
    device_subtype: '',
    modify_img_code: '0'
  },
  {
    device_img_code: 'switch_1',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: 'light',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    app_device_type: 'switch',
    device_type: '0101',
    add_device_subtype: '',
    special: {
      mutual_ctl: '0',
      light: '1',
      color: '0'
    },
    device_name: '调光灯',
    create_aotumation_action: '1',
    device_subtype: '',
    modify_img_code: '0'
  },
  {
    device_img_code: 'switch_1',
    mode_subtype: 'tesy_company',
    add_device_type: 'A004',
    app_device_subtype: 'light',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    app_device_type: 'switch',
    device_type: 'A004',
    add_device_subtype: '',
    special: {
      mutual_ctl: '1',
      light: '1',
      color: '0'
    },
    device_name: '调光灯',
    create_aotumation_action: '1',
    device_subtype: '',
    modify_img_code: '0'
  },
  {
    device_type: '0101',
    device_subtype: 'VZ00E3221010121',
    device_name: '智能计量调光灯',
    device_img_code: 'switch_1',
    modify_img_code: '0',
    app_device_type: 'switch',
    app_device_subtype: 'lightElectric',
    mode_type: 'app',
    mode_subtype: 'lmiot-zigbee',
    create_scene: '1',
    create_aotumation_trigger: '0',
    create_aotumation_action: '1',
    add_device_type: 'zigbee',
    add_device_subtype: '',
    special: {
      mutual_ctl: '0',
      light: '1',
      color: '0'
    }
  },
  {
    device_img_code: 'socket_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: '',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '1',
    app_device_type: 'socket',
    device_type: '0051',
    add_device_subtype: '',
    special: {},
    device_name: '智能插座',
    create_aotumation_action: '1',
    device_subtype: '',
    modify_img_code: '0'
  },
  {
    device_img_code: 'curtain_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: '',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '1',
    app_device_type: 'curtain',
    device_type: '0202',
    add_device_subtype: '',
    special: {
      progress: '0'
    },
    device_name: '窗帘开关',
    create_aotumation_action: '1',
    device_subtype: '',
    modify_img_code: '0'
  },
  {
    device_img_code: 'curtain_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: '',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    app_device_type: 'curtain',
    device_type: '0203',
    add_device_subtype: '',
    special: {
      progress: '0',
      enableBind: '1'
    },
    device_name: '窗帘开关',
    create_aotumation_action: '1',
    device_subtype: '',
    modify_img_code: '0'
  },
  {
    device_img_code: 'curtain_0',
    mode_subtype: 'bluemedia_company',
    add_device_type: '0202_485',
    app_device_subtype: '',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '1',
    app_device_type: 'curtain',
    device_type: '0202_485',
    add_device_subtype: '',
    special: {
      progress: '0'
    },
    device_name: '窗帘开关',
    create_aotumation_action: '1',
    device_subtype: '',
    modify_img_code: '0'
  },
  {
    device_img_code: 'curtain_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: '',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '1',
    app_device_type: 'curtain',
    device_type: '0202win103',
    add_device_subtype: '',
    special: {
      progress: '0'
    },
    device_name: '窗帘开关',
    create_aotumation_action: '1',
    device_subtype: '',
    modify_img_code: '0'
  },
  {
    device_img_code: 'curtain_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: 'progress',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    app_device_type: 'curtain',
    device_type: '0202win104',
    add_device_subtype: '',
    special: {
      progress: '1'
    },
    device_name: '窗帘电机',
    create_aotumation_action: '1',
    device_subtype: '',
    modify_img_code: '0'
  },
  {
    device_img_code: 'sceneSwitch_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: 'nSwitch',
    mode_type: 'app',
    create_scene: '0',
    create_aotumation_trigger: '0',
    app_device_type: 'sceneSwitch',
    device_type: '0004',
    add_device_subtype: '',
    special: {
      switch_count: '1',
      edit_switch_name: '0',
      electricity: '0'
    },
    device_name: '情景开关',
    create_aotumation_action: '0',
    device_subtype: '',
    modify_img_code: '0'
  },
  {
    device_img_code: 'sceneSwitch_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: 'nSwitch',
    mode_type: 'app',
    create_scene: '0',
    create_aotumation_trigger: '0',
    app_device_type: 'sceneSwitch',
    device_type: '0004',
    add_device_subtype: '',
    special: {
      switch_count: '1',
      edit_switch_name: '0',
      electricity: '1',
      electricityCalType: 2
    },
    device_name: '情景开关',
    create_aotumation_action: '0',
    device_subtype: '01',
    modify_img_code: '0'
  },
  {
    device_img_code: 'sceneSwitch_0',
    mode_subtype: 'chlorop_company',
    add_device_type: 'zigbee',
    app_device_subtype: 'csSwitch',
    mode_type: 'app',
    create_scene: '0',
    create_aotumation_trigger: '0',
    app_device_type: 'sceneSwitch',
    device_type: '0004_433',
    add_device_subtype: '',
    special: {
      switch_count: '1',
      edit_switch_name: '0',
      electricity: '0'
    },
    device_name: '叶绿体',
    create_aotumation_action: '0',
    device_subtype: '',
    modify_img_code: '0'
  },
  {
    device_img_code: 'sceneSwitch_1',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: 'icSwitch',
    mode_type: 'app',
    create_scene: '0',
    create_aotumation_trigger: '0',
    app_device_type: 'sceneSwitch',
    device_type: '0401',
    add_device_subtype: '',
    special: {
      switch_count: '4',
      edit_switch_name: '0',
      electricity: '1',
      electricityCalType: 4
    },
    device_name: '智能遥控',
    create_aotumation_action: '0',
    device_subtype: '',
    modify_img_code: '0'
  },
  {
    device_type: '0401',
    device_subtype: '0004',
    device_name: '智能遥控',
    device_img_code: 'sceneSwitch_1',
    modify_img_code: '0',
    app_device_type: 'sceneSwitch',
    app_device_subtype: 'icSwitch',
    mode_type: 'app',
    mode_subtype: 'lmiot-zigbee',
    create_scene: '0',
    create_aotumation_trigger: '0',
    create_aotumation_action: '0',
    add_device_type: 'zigbee',
    add_device_subtype: '',
    special: {
      switch_count: '4',
      electricity: '1',
      edit_switch_name: '0',
      electricityCalType: 4
    }
  },
  {
    device_type: '0401',
    device_subtype: '0101',
    device_name: '智能遥控',
    device_img_code: 'sceneSwitch_1',
    modify_img_code: '0',
    app_device_type: 'sceneSwitch',
    app_device_subtype: 'icSwitch',
    mode_type: 'app',
    mode_subtype: 'lmiot-zigbee',
    create_scene: '0',
    create_aotumation_trigger: '0',
    create_aotumation_action: '0',
    add_device_type: 'zigbee',
    add_device_subtype: '',
    special: {
      switch_count: '1',
      electricity: '1',
      edit_switch_name: '0',
      electricityCalType: 4
    }
  },
  {
    device_img_code: 'sceneSwitch_0',
    mode_subtype: 'bluemedia_company',
    add_device_type: '0004_485',
    app_device_subtype: 'nSwitch',
    mode_type: 'app',
    create_scene: '0',
    create_aotumation_trigger: '0',
    app_device_type: 'sceneSwitch',
    device_type: '0004_485',
    add_device_subtype: '',
    special: {
      switch_count: '3',
      edit_switch_name: '0',
      electricity: '0'
    },
    device_name: '485情景开关',
    create_aotumation_action: '0',
    device_subtype: '',
    modify_img_code: '0'
  },
  {
    device_img_code: 'sceneSwitch_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: 'nSwitch',
    mode_type: 'app',
    create_scene: '0',
    create_aotumation_trigger: '0',
    app_device_type: 'sceneSwitch',
    device_type: '0162',
    add_device_subtype: '',
    special: {
      switch_count: '8',
      edit_switch_name: '1',
      electricity: '0'
    },
    device_name: '可编辑情景面板',
    create_aotumation_action: '0',
    device_subtype: '',
    modify_img_code: '0'
  },
  {
    device_img_code: 'powerCtl_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: '',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    app_device_type: 'powerCtl',
    device_type: '0009',
    add_device_subtype: '',
    special: {},
    device_name: '电源控制器',
    create_aotumation_action: '1',
    device_subtype: '',
    modify_img_code: '0'
  },
  {
    device_img_code: 'gateLock_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: 'gateLock_zigbee',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '1',
    app_device_type: 'gateLock',
    device_type: '000A',
    add_device_subtype: '',
    special: {},
    device_name: '智能门锁',
    create_aotumation_action: '0',
    device_subtype: '',
    modify_img_code: '0'
  },
  {
    device_img_code: 'gateLock_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: 'gateLock_zigbee',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '1',
    app_device_type: 'gateLock',
    device_type: '000A',
    add_device_subtype: '',
    special: {},
    device_name: '智能门锁',
    create_aotumation_action: '0',
    device_subtype: 'E321V000A03',
    modify_img_code: '0'
  },
  {
    device_img_code: 'gateLock_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: 'gateLock_zigbee_jd',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '1',
    app_device_type: 'gateLock',
    device_type: '000A',
    add_device_subtype: '',
    special: {},
    device_name: '智能门锁',
    create_aotumation_action: '0',
    device_subtype: 'E321V000A02',
    modify_img_code: '0'
  },
  {
    device_img_code: 'gateLock_0',
    mode_subtype: 'nbiot',
    add_device_type: 'scan',
    app_device_subtype: 'gateLock_nbiot',
    mode_type: 'app',
    create_scene: '0',
    create_aotumation_trigger: '1',
    app_device_type: 'gateLock',
    device_type: 'nb_lock',
    add_device_subtype: '',
    special: {
      electricity: '1',
      electricityCalType: 3
    },
    device_name: '智能NBIOT门锁',
    create_aotumation_action: '0',
    device_subtype: '',
    modify_img_code: '0'
  },
  {
    device_img_code: 'electricBox_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: 'main',
    mode_type: 'app',
    create_scene: '0',
    create_aotumation_trigger: '0',
    app_device_type: 'electricBox',
    device_type: '0162',
    add_device_subtype: '',
    special: {},
    device_name: '智能电箱',
    create_aotumation_action: '0',
    device_subtype: '09',
    modify_img_code: '0'
  },
  {
    device_img_code: 'electricBox_2',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: 'subbranch',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    app_device_type: 'electricBox',
    device_type: '417',
    add_device_subtype: '',
    special: {},
    device_name: '智能电箱分路',
    create_aotumation_action: '0',
    device_subtype: '09',
    modify_img_code: '0'
  },
  {
    device_img_code: 'electricBox_1',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: 'mainBranch',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    app_device_type: 'electricBox',
    device_type: '416',
    add_device_subtype: '',
    special: {},
    device_name: '智能电箱主路',
    create_aotumation_action: '0',
    device_subtype: '09',
    modify_img_code: '0'
  },
  {
    device_img_code: '485AC_0',
    mode_subtype: 'zhongh_company',
    add_device_type: 'A001_485',
    app_device_subtype: '485AC_0',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    app_device_type: '485AC',
    device_type: 'A001_485',
    add_device_subtype: '',
    special: {},
    device_name: '485空调',
    create_aotumation_action: '1',
    device_subtype: '',
    modify_img_code: '0'
  },
  {
    device_img_code: '485AC_0',
    mode_subtype: 'zhongh_company',
    add_device_type: 'A006',
    app_device_subtype: '485AC_0',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    app_device_type: '485AC',
    device_type: 'A006',
    add_device_subtype: '0001',
    special: {},
    device_name: '485空调',
    create_aotumation_action: '1',
    device_subtype: '0001',
    modify_img_code: '0'
  },
  {
    device_type: '0166',
    device_subtype: '',
    device_name: '智能空调',
    device_img_code: '485AC_0',
    modify_img_code: '0',
    app_device_type: '485AC',
    app_device_subtype: '485AC_0',
    mode_type: 'app',
    mode_subtype: 'lmiot-zigbee',
    create_scene: '1',
    create_aotumation_trigger: '0',
    create_aotumation_action: '1',
    add_device_type: '0166',
    add_device_subtype: '',
    special: {}
  },
  {
    device_img_code: '485AC_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    add_device_subtype: '',
    app_device_type: '485AC',
    app_device_subtype: '485AC_1',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    create_aotumation_action: '1',
    device_type: '0300',
    device_subtype: 'VZ00E32210300ZHWK',
    device_name: '智能中央空调',
    modify_img_code: '0',
    special: {}
  },
  {
    device_img_code: 'router_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: '',
    mode_type: 'app',
    create_scene: '0',
    create_aotumation_trigger: '0',
    app_device_type: 'router',
    device_type: '0008',
    add_device_subtype: '',
    special: {},
    device_name: '智能路由',
    create_aotumation_action: '0',
    device_subtype: '',
    modify_img_code: '0'
  },
  {
    device_img_code: 'bgMusic_0',
    mode_subtype: 'music',
    add_device_type: 'B001_NET',
    app_device_subtype: 'wise',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    app_device_type: 'bgMusic',
    device_type: 'B001',
    add_device_subtype: '',
    special: {},
    device_name: '背景音乐',
    create_aotumation_action: '1',
    device_subtype: '',
    modify_img_code: '0'
  },
  {
    device_img_code: 'bgMusic_0',
    mode_subtype: 'music',
    add_device_type: 'B001_NET',
    app_device_subtype: 'wise',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    app_device_type: 'bgMusic',
    device_type: 'B001_NET',
    add_device_subtype: '',
    special: {},
    device_name: '背景音乐',
    create_aotumation_action: '1',
    device_subtype: '',
    modify_img_code: '0'
  },
  {
    device_img_code: 'bgMusic_0',
    mode_subtype: 'music',
    add_device_type: 'B002_NET',
    app_device_subtype: 'sbk',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    app_device_type: 'bgMusic',
    device_type: 'B002',
    add_device_subtype: '',
    special: {},
    device_name: '背景音乐',
    create_aotumation_action: '1',
    device_subtype: '',
    modify_img_code: '0'
  },
  {
    device_img_code: 'bgMusic_0',
    mode_subtype: 'music',
    add_device_type: 'B002_NET',
    app_device_subtype: 'sbk',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    app_device_type: 'bgMusic',
    device_type: 'B002_NET',
    add_device_subtype: '',
    special: {},
    device_name: '背景音乐',
    create_aotumation_action: '1',
    device_subtype: '',
    modify_img_code: '0'
  },
  {
    device_img_code: 'sensor_doorsensor_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: 'doorsensor',
    mode_type: 'app',
    create_scene: '0',
    create_aotumation_trigger: '1',
    app_device_type: 'sensor',
    device_type: '0402',
    add_device_subtype: '',
    special: {
      pre_dis: '1',
      electricity: '1'
    },
    device_name: '门磁传感',
    create_aotumation_action: '0',
    device_subtype: '0015',
    modify_img_code: '0'
  },
  {
    device_img_code: 'sensor_waterlogging_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: 'waterlogging',
    mode_type: 'app',
    create_scene: '0',
    create_aotumation_trigger: '1',
    app_device_type: 'sensor',
    device_type: '0402',
    add_device_subtype: '',
    special: {
      pre_dis: '1',
      electricity: '1',
      emergencyAlert: 1
    },
    device_name: '水浸传感',
    create_aotumation_action: '0',
    device_subtype: '002a',
    modify_img_code: '0'
  },
  {
    device_img_code: 'sensor_combustibleGas_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: 'combustibleGas',
    mode_type: 'app',
    create_scene: '0',
    create_aotumation_trigger: '1',
    app_device_type: 'sensor',
    device_type: '0402',
    add_device_subtype: '',
    special: {
      pre_dis: '1',
      electricity: '1',
      emergencyAlert: 1
    },
    device_name: '可燃气传感',
    create_aotumation_action: '0',
    device_subtype: '002b',
    modify_img_code: '0'
  },
  {
    device_img_code: 'sensor_combustibleGas_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: 'combustibleGas',
    mode_type: 'app',
    create_scene: '0',
    create_aotumation_trigger: '1',
    app_device_type: 'sensor',
    device_type: '0162',
    add_device_subtype: '',
    special: {
      pre_dis: '0',
      electricity: '0',
      emergencyAlert: 1
    },
    device_name: '可燃气体传感',
    create_aotumation_action: '0',
    device_subtype: '03',
    modify_img_code: '0'
  },
  {
    device_img_code: 'sensor_smoke_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: 'smoke',
    mode_type: 'app',
    create_scene: '0',
    create_aotumation_trigger: '1',
    app_device_type: 'sensor',
    device_type: '0402',
    add_device_subtype: '',
    special: {
      pre_dis: '1',
      electricity: '1',
      emergencyAlert: 1
    },
    device_name: '烟雾传感',
    create_aotumation_action: '0',
    device_subtype: '0028',
    modify_img_code: '0'
  },
  {
    device_img_code: 'sensor_sos_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: 'sos',
    mode_type: 'app',
    create_scene: '0',
    create_aotumation_trigger: '1',
    app_device_type: 'sensor',
    device_type: '0402',
    add_device_subtype: '',
    special: {
      pre_dis: '1',
      electricity: '1',
      emergencyAlert: 1
    },
    device_name: '紧急按钮',
    create_aotumation_action: '0',
    device_subtype: '002c',
    modify_img_code: '0'
  },
  {
    device_img_code: 'sensor_sos_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: 'sos',
    mode_type: 'app',
    create_scene: '0',
    create_aotumation_trigger: '1',
    app_device_type: 'sensor',
    device_type: '0402',
    add_device_subtype: '',
    special: {
      pre_dis: '1',
      electricity: '1',
      emergencyAlert: 1
    },
    device_name: '安防遥控器',
    create_aotumation_action: '0',
    device_subtype: '0115',
    modify_img_code: '0'
  },
  {
    device_img_code: 'sensor_humanBodyInfrared_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: 'humanBodyInfrared',
    mode_type: 'app',
    create_scene: '0',
    create_aotumation_trigger: '1',
    app_device_type: 'sensor',
    device_type: '0402',
    add_device_subtype: '',
    special: {
      pre_dis: '1',
      electricity: '1'
    },
    device_name: '人体红外传感',
    create_aotumation_action: '0',
    device_subtype: '000d',
    modify_img_code: '0'
  },
  {
    device_img_code: 'sensor_humanBodyInfrared_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: 'humanBodyInfrared',
    mode_type: 'app',
    create_scene: '0',
    create_aotumation_trigger: '1',
    app_device_type: 'sensor',
    device_type: '0162',
    add_device_subtype: '',
    special: {
      mutual_ctl: '0',
      pre_dis: '0'
    },
    device_name: '人体红外传感',
    create_aotumation_action: '0',
    device_subtype: '02',
    modify_img_code: '0'
  },
  {
    device_img_code: 'sensor_CO_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: 'CO',
    mode_type: 'app',
    create_scene: '0',
    create_aotumation_trigger: '1',
    app_device_type: 'sensor',
    device_type: '0402',
    add_device_subtype: '',
    special: {
      pre_dis: '1',
      electricity: '1'
    },
    device_name: '一氧化碳传感',
    create_aotumation_action: '0',
    device_subtype: '8001',
    modify_img_code: '0'
  },
  {
    device_img_code: 'sensor_temAndHum_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: 'temAndHum',
    mode_type: 'app',
    create_scene: '0',
    create_aotumation_trigger: '1',
    app_device_type: 'sensor',
    device_type: '0162',
    add_device_subtype: '',
    special: {
      tem: '1',
      hum: '1',
      pre_dis: '0',
      lumen: '1',
      electricity: '0'
    },
    device_name: '温湿度光照传感',
    create_aotumation_action: '0',
    device_subtype: '06',
    modify_img_code: '0'
  },
  {
    device_img_code: 'sensor_temAndHum_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: 'temAndHum',
    mode_type: 'app',
    create_scene: '0',
    create_aotumation_trigger: '1',
    app_device_type: 'sensor',
    device_type: '0302',
    add_device_subtype: '',
    special: {
      tem: '1',
      hum: '1',
      pre_dis: '0',
      lumen: '0',
      electricity: '1',
      electricityCalType: 5
    },
    device_name: '温湿度传感',
    create_aotumation_action: '0',
    device_subtype: '',
    modify_img_code: '0'
  },
  {
    device_img_code: 'sensor_airQuality_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: 'airQuality',
    mode_type: 'app',
    create_scene: '0',
    create_aotumation_trigger: '1',
    app_device_type: 'sensor',
    device_type: '0162',
    add_device_subtype: '',
    special: {
      pre_dis: '0',
      electricity: '0'
    },
    device_name: '空气质量传感',
    create_aotumation_action: '0',
    device_subtype: '01',
    modify_img_code: '0'
  },
  {
    device_type: '0162',
    device_subtype: '43',
    device_name: '空气质量传感',
    device_img_code: 'sensor_airQuality_0',
    modify_img_code: '0',
    app_device_type: 'sensor',
    app_device_subtype: 'airQuality',
    mode_type: 'app',
    mode_subtype: 'lmiot-zigbee',
    create_scene: '0',
    create_aotumation_trigger: '1',
    create_aotumation_action: '0',
    add_device_type: 'zigbee',
    add_device_subtype: '',
    special: {
      electricity: '0',
      pre_dis: '0'
    }
  },
  {
    device_type: '0309',
    device_subtype: '',
    device_name: '空气质量检测仪',
    device_img_code: 'sensor_airQuality_0',
    modify_img_code: '0',
    app_device_type: 'sensor',
    app_device_subtype: 'airQuality_1',
    mode_type: 'app',
    mode_subtype: 'lmiot-zigbee',
    create_scene: '0',
    create_aotumation_trigger: '0',
    create_aotumation_action: '0',
    add_device_type: 'zigbee',
    add_device_subtype: '',
    special: {
      electricity: '0',
      pre_dis: '0'
    }
  },
  {
    device_img_code: 'infraredTransponder_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: 'infraredTransponder_0',
    mode_type: 'app',
    create_scene: '0',
    create_aotumation_trigger: '0',
    app_device_type: 'infraredTransponder',
    device_type: '0162',
    add_device_subtype: '',
    special: {
      power: '0',
      onoff: '0'
    },
    device_name: '红外转发器',
    create_aotumation_action: '0',
    device_subtype: '08',
    modify_img_code: '0'
  },
  {
    device_img_code: 'infraredTransponder_1',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: 'infraredTransponder_1',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    app_device_type: 'infraredTransponder',
    device_type: '0162',
    add_device_subtype: '',
    special: {
      power: '1',
      onoff: '1'
    },
    device_name: '空调伴侣',
    create_aotumation_action: '0',
    device_subtype: '13',
    modify_img_code: '0'
  },
  {
    device_img_code: 'it_subdev_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: 'it_subdev_0',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    app_device_type: 'it_subdev',
    device_type: 'it_subdev',
    add_device_subtype: '',
    special: {},
    device_name: '红外学习',
    create_aotumation_action: '0',
    device_subtype: 'it_subdev_0',
    modify_img_code: '0'
  },
  {
    device_img_code: 'it_subdev_1',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: 'it_subdev_1',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    app_device_type: 'it_subdev',
    device_type: 'it_subdev',
    add_device_subtype: '',
    special: {},
    device_name: '机顶盒',
    create_aotumation_action: '0',
    device_subtype: 'it_subdev_1',
    modify_img_code: '0'
  },
  {
    device_img_code: 'it_subdev_10',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: 'it_subdev_10',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    app_device_type: 'it_subdev',
    device_type: 'it_subdev',
    add_device_subtype: '',
    special: {},
    device_name: '电灯泡',
    create_aotumation_action: '0',
    device_subtype: 'it_subdev_10',
    modify_img_code: '0'
  },
  {
    device_img_code: 'it_subdev_2',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: 'it_subdev_2',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    app_device_type: 'it_subdev',
    device_type: 'it_subdev',
    add_device_subtype: '',
    special: {},
    device_name: '电视',
    create_aotumation_action: '0',
    device_subtype: 'it_subdev_2',
    modify_img_code: '0'
  },
  {
    device_img_code: 'it_subdev_3',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: 'it_subdev_3',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    app_device_type: 'it_subdev',
    device_type: 'it_subdev',
    add_device_subtype: '',
    special: {},
    device_name: '盒子',
    create_aotumation_action: '0',
    device_subtype: 'it_subdev_3',
    modify_img_code: '0'
  },
  {
    device_img_code: 'it_subdev_4',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: 'it_subdev_4',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    app_device_type: 'it_subdev',
    device_type: 'it_subdev',
    add_device_subtype: '',
    special: {},
    device_name: 'DVD',
    create_aotumation_action: '0',
    device_subtype: 'it_subdev_4',
    modify_img_code: '0'
  },
  {
    device_img_code: 'it_subdev_5',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: 'it_subdev_5',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    app_device_type: 'it_subdev',
    device_type: 'it_subdev',
    add_device_subtype: '',
    special: {},
    device_name: '空调',
    create_aotumation_action: '0',
    device_subtype: 'it_subdev_5',
    modify_img_code: '0'
  },
  {
    device_img_code: 'it_subdev_6',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: 'it_subdev_6',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    app_device_type: 'it_subdev',
    device_type: 'it_subdev',
    add_device_subtype: '',
    special: {},
    device_name: '投影仪',
    create_aotumation_action: '0',
    device_subtype: 'it_subdev_6',
    modify_img_code: '0'
  },
  {
    device_img_code: 'it_subdev_7',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: 'it_subdev_7',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    app_device_type: 'it_subdev',
    device_type: 'it_subdev',
    add_device_subtype: '',
    special: {},
    device_name: '功放',
    create_aotumation_action: '0',
    device_subtype: 'it_subdev_7',
    modify_img_code: '0'
  },
  {
    device_img_code: 'it_subdev_8',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: 'it_subdev_8',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    app_device_type: 'it_subdev',
    device_type: 'it_subdev',
    add_device_subtype: '',
    special: {},
    device_name: '电风扇',
    create_aotumation_action: '0',
    device_subtype: 'it_subdev_8',
    modify_img_code: '0'
  },
  {
    device_img_code: 'it_subdev_9',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: 'it_subdev_9',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    app_device_type: 'it_subdev',
    device_type: 'it_subdev',
    add_device_subtype: '',
    special: {},
    device_name: '单反',
    create_aotumation_action: '0',
    device_subtype: 'it_subdev_9',
    modify_img_code: '0'
  },
  {
    device_img_code: 'waterMeter_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: 'waterMeter_0',
    mode_type: 'app',
    create_scene: '0',
    create_aotumation_trigger: '0',
    app_device_type: 'waterMeter',
    device_type: '0053',
    add_device_subtype: '',
    special: {},
    device_name: '智能水表',
    create_aotumation_action: '0',
    device_subtype: '',
    modify_img_code: '0'
  },
  {
    device_img_code: 'ammeter_0',
    mode_subtype: 'hiking_company',
    add_device_type: 'A002_485',
    app_device_subtype: '',
    mode_type: 'app',
    create_scene: '0',
    create_aotumation_trigger: '0',
    app_device_type: 'ammeter',
    device_type: 'A002_485',
    add_device_subtype: '',
    special: {},
    device_name: '智能电表',
    create_aotumation_action: '0',
    device_subtype: '',
    modify_img_code: '0'
  },
  {
    device_img_code: 'ammeter_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: '',
    mode_type: 'app',
    create_scene: '0',
    create_aotumation_trigger: '0',
    app_device_type: 'ammeter',
    device_type: '0165',
    add_device_subtype: '',
    special: {
      needUpdateData: '1'
    },
    device_name: '智能电表',
    create_aotumation_action: '0',
    device_subtype: '',
    modify_img_code: '0'
  },
  {
    device_img_code: 'bathroom_bathtub_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: 'bathtub',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    app_device_type: 'bathroom',
    device_type: '0162',
    add_device_subtype: '',
    special: {},
    device_name: '智能浴缸',
    create_aotumation_action: '1',
    device_subtype: '10',
    modify_img_code: '0'
  },
  {
    device_img_code: 'bathroom_bathtub_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: 'bathtub',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    app_device_type: 'bathroom',
    device_type: '0162',
    add_device_subtype: '',
    special: {},
    device_name: '智能浴缸',
    create_aotumation_action: '1',
    device_subtype: '11',
    modify_img_code: '0'
  },
  {
    device_img_code: 'bathroom_bathtub_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: 'bathtub',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    app_device_type: 'bathroom',
    device_type: '0162',
    add_device_subtype: '',
    special: {},
    device_name: '智能浴缸',
    create_aotumation_action: '1',
    device_subtype: '12',
    modify_img_code: '0'
  },
  {
    device_img_code: 'bathroom_steamRoom_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: 'steamRoom',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    app_device_type: 'bathroom',
    device_type: '0162',
    add_device_subtype: '',
    special: {},
    device_name: '智能蒸汽房',
    create_aotumation_action: '1',
    device_subtype: '40',
    modify_img_code: '0'
  },
  {
    device_img_code: 'bathroom_steamRoom_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: 'steamRoom_1',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    app_device_type: 'bathroom',
    device_type: '0162',
    add_device_subtype: '',
    special: {},
    device_name: '智能蒸汽房',
    create_aotumation_action: '0',
    device_subtype: '42',
    modify_img_code: '0'
  },
  {
    device_img_code: 'bathroom_steamRoom_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: 'steamRoom',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    app_device_type: 'bathroom',
    device_type: '0162',
    add_device_subtype: '',
    special: {},
    device_name: '智能蒸汽房',
    create_aotumation_action: '1',
    device_subtype: '41',
    modify_img_code: '0'
  },
  {
    device_type: '0162',
    device_subtype: '50',
    device_name: '智能光科屋',
    device_img_code: 'bathroom_lightRoom_0',
    modify_img_code: '0',
    app_device_type: 'bathroom',
    app_device_subtype: 'lightRoom_0',
    mode_type: 'app',
    mode_subtype: 'lmiot-zigbee',
    create_scene: '1',
    create_aotumation_trigger: '0',
    create_aotumation_action: '0',
    add_device_type: 'zigbee',
    add_device_subtype: '',
    special: {}
  },
  {
    device_img_code: 'bathroomMaster_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    add_device_subtype: '',
    app_device_type: 'bathroomMaster',
    app_device_subtype: '',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    create_aotumation_action: '0',
    device_type: '0162',
    device_subtype: 'ST_30',
    device_name: '智能浴霸',
    modify_img_code: '0',
    special: {}
  },
  {
    device_img_code: 'bathroomMaster_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    add_device_subtype: '',
    app_device_type: 'bathroomMaster',
    app_device_subtype: '',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    create_aotumation_action: '0',
    device_type: '0162',
    device_subtype: 'ST_121',
    device_name: '智能浴霸',
    modify_img_code: '0',
    special: {}
  },
  {
    device_type: '0162',
    device_subtype: '45',
    device_img_code: 'towelRack_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    add_device_subtype: '',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    app_device_type: 'towelRack',
    app_device_subtype: 'towelRack_0',
    special: {},
    device_name: '智能毛巾架',
    create_aotumation_action: '0',
    modify_img_code: '0'
  },
  {
    device_img_code: 'closestool_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: '',
    app_device_subtype: '',
    mode_type: 'app',
    create_scene: '0',
    create_aotumation_trigger: '0',
    app_device_type: 'closestool',
    device_type: '0163',
    add_device_subtype: '',
    special: {},
    device_name: '智能马桶',
    create_aotumation_action: '0',
    device_subtype: '',
    modify_img_code: '0'
  },
  {
    device_type: '0162',
    device_subtype: '4602',
    device_img_code: 'clothesDryer_1',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    add_device_subtype: '',
    mode_type: 'app',
    create_scene: '0',
    create_aotumation_trigger: '0',
    app_device_type: 'clothesDryer',
    app_device_subtype: 'clothesDryer_2',
    special: {},
    device_name: '智能毛巾烘干机',
    create_aotumation_action: '0',
    modify_img_code: '0'
  },
  {
    device_img_code: 'clothesDryer_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    app_device_subtype: 'clothesDryer_0',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    app_device_type: 'clothesDryer',
    device_type: '0164',
    add_device_subtype: '',
    special: {},
    device_name: '智能晾衣机',
    create_aotumation_action: '1',
    device_subtype: '',
    modify_img_code: '0'
  },
  {
    device_type: '0162',
    device_subtype: '4601',
    device_img_code: 'clothesDryer_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    add_device_subtype: '',
    mode_type: 'app',
    create_scene: '0',
    create_aotumation_trigger: '0',
    app_device_type: 'clothesDryer',
    app_device_subtype: 'clothesDryer_1',
    special: {},
    device_name: '智能晾衣机',
    create_aotumation_action: '0',
    modify_img_code: '0'
  },
  {
    device_type: '0162',
    device_subtype: '4603',
    device_img_code: 'clothesDryer_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    add_device_subtype: '',
    mode_type: 'app',
    create_scene: '0',
    create_aotumation_trigger: '0',
    app_device_type: 'clothesDryer',
    app_device_subtype: 'clothesDryer_3',
    special: {},
    device_name: '智能晾衣机',
    create_aotumation_action: '0',
    modify_img_code: '0'
  },
  {
    device_img_code: 'camera_0',
    mode_subtype: 'wifi',
    add_device_type: 'wifi',
    app_device_subtype: 'vst_camera',
    mode_type: 'app',
    create_scene: '0',
    create_aotumation_trigger: '0',
    app_device_type: 'camera',
    device_type: 'camera',
    add_device_subtype: '',
    special: {},
    device_name: '智能摄像头',
    create_aotumation_action: '0',
    device_subtype: '',
    modify_img_code: '0'
  },
  {
    device_type: '0403',
    device_subtype: '',
    device_img_code: 'acoustoOpticAlarm_0',
    mode_subtype: 'lmiot-zigbee',
    mode_type: 'app',
    add_device_type: 'zigbee',
    app_device_subtype: '',
    create_scene: '1',
    create_aotumation_trigger: '0',
    app_device_type: 'acoustoOpticAlarm',
    add_device_subtype: '',
    special: {},
    device_name: '声光报警器',
    create_aotumation_action: '1',
    modify_img_code: '0'
  },
  {
    device_img_code: 'thermostat_1',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    add_device_subtype: '',
    app_device_type: 'thermostat',
    app_device_subtype: 'thermostat_1',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    create_aotumation_action: '0',
    device_type: 'D001',
    device_subtype: '0018',
    device_name: '智能地暖',
    modify_img_code: '0',
    special: {}
  },
  {
    device_img_code: 'thermostat_1',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    add_device_subtype: '',
    app_device_type: 'thermostat',
    app_device_subtype: 'thermostat_7',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    create_aotumation_action: '0',
    device_type: '0300',
    device_subtype: 'WK_FFFFFF02',
    device_name: '智能地暖',
    modify_img_code: '0',
    special: {}
  },
  {
    device_img_code: 'thermostat_1',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    add_device_subtype: '',
    app_device_type: 'thermostat',
    app_device_subtype: 'thermostat_7',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    create_aotumation_action: '0',
    device_type: '0300',
    device_subtype: 'WK_00FFFF05_2',
    device_name: '智能地暖',
    modify_img_code: '0',
    special: {}
  },
  {
    device_img_code: 'thermostat_1',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    add_device_subtype: '',
    app_device_type: 'thermostat',
    app_device_subtype: 'thermostat_9',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    create_aotumation_action: '0',
    device_type: '0300',
    device_subtype: 'WK_00FFFF04_2',
    device_name: '智能地暖',
    modify_img_code: '0',
    special: {}
  },
  {
    device_img_code: 'thermostat_2',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    add_device_subtype: '',
    app_device_type: 'thermostat',
    app_device_subtype: 'thermostat_2',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    create_aotumation_action: '0',
    device_type: 'D001',
    device_subtype: '0019',
    device_name: '智能新风',
    modify_img_code: '0',
    special: {}
  },
  {
    device_img_code: 'thermostat_2',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    add_device_subtype: '',
    app_device_type: 'thermostat',
    app_device_subtype: 'thermostat_5',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    create_aotumation_action: '0',
    device_type: '0002',
    device_subtype: 'VZ00E321V000222',
    device_name: '智能新风',
    modify_img_code: '0',
    special: {}
  },
  {
    device_img_code: 'thermostat_2',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    add_device_subtype: '',
    app_device_type: 'thermostat',
    app_device_subtype: 'thermostat_5',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    create_aotumation_action: '0',
    device_type: '0002',
    device_subtype: 'VZ00E321V000225',
    device_name: '智能新风',
    modify_img_code: '0',
    special: {}
  },
  {
    device_img_code: 'thermostat_2',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    add_device_subtype: '',
    app_device_type: 'thermostat',
    app_device_subtype: 'thermostat_5',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    create_aotumation_action: '0',
    device_type: '0002',
    device_subtype: 'VZ00E3221000225',
    device_name: '智能新风',
    modify_img_code: '0',
    special: {}
  },
  {
    device_img_code: 'thermostat_2',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    add_device_subtype: '',
    app_device_type: 'thermostat',
    app_device_subtype: 'thermostat_5',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    create_aotumation_action: '0',
    device_type: '0002',
    device_subtype: 'VZ00E3221000222',
    device_name: '智能新风',
    modify_img_code: '0',
    special: {}
  },
  {
    device_img_code: 'thermostat_2',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    add_device_subtype: '',
    app_device_type: 'thermostat',
    app_device_subtype: 'thermostat_4',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    create_aotumation_action: '0',
    device_type: '0002',
    device_subtype: 'VZ00E321V000223',
    device_name: '智能新风',
    modify_img_code: '0',
    special: {}
  },
  {
    device_img_code: 'thermostat_2',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    add_device_subtype: '',
    app_device_type: 'thermostat',
    app_device_subtype: 'thermostat_4',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    create_aotumation_action: '0',
    device_type: '0002',
    device_subtype: 'VZ00E321V000224',
    device_name: '智能新风',
    modify_img_code: '0',
    special: {}
  },
  {
    device_img_code: 'thermostat_2',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    add_device_subtype: '',
    app_device_type: 'thermostat',
    app_device_subtype: 'thermostat_4',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    create_aotumation_action: '0',
    device_type: '0002',
    device_subtype: 'VZ00E3221000223',
    device_name: '智能新风',
    modify_img_code: '0',
    special: {}
  },
  {
    device_img_code: 'thermostat_2',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    add_device_subtype: '',
    app_device_type: 'thermostat',
    app_device_subtype: 'thermostat_4',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    create_aotumation_action: '0',
    device_type: '0002',
    device_subtype: 'VZ00E3221000224',
    device_name: '智能新风',
    modify_img_code: '0',
    special: {}
  },
  {
    device_img_code: 'thermostat_2',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    add_device_subtype: '',
    app_device_type: 'thermostat',
    app_device_subtype: 'thermostat_6',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    create_aotumation_action: '0',
    device_type: '0300',
    device_subtype: 'WK_FFFFFF03',
    device_name: '智能新风',
    modify_img_code: '0',
    special: {}
  },
  {
    device_img_code: 'thermostat_2',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    add_device_subtype: '',
    app_device_type: 'thermostat',
    app_device_subtype: 'thermostat_10',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    create_aotumation_action: '1',
    device_type: '0300',
    device_subtype: 'WK_FFFFFF06',
    device_name: '智能新风',
    modify_img_code: '0',
    special: {}
  },
  {
    device_img_code: 'thermostat_2',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    add_device_subtype: '',
    app_device_type: 'thermostat',
    app_device_subtype: 'thermostat_10',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    create_aotumation_action: '0',
    device_type: '0300',
    device_subtype: 'WK_00FFFF04_3',
    device_name: '智能新风',
    modify_img_code: '0',
    special: {}
  },
  {
    device_img_code: 'thermostat_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    add_device_subtype: '',
    app_device_type: 'thermostat',
    app_device_subtype: 'thermostat_0',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    create_aotumation_action: '0',
    device_type: 'D001',
    device_subtype: '0017',
    device_name: '智能温控器',
    modify_img_code: '0',
    special: {}
  },
  {
    device_img_code: 'thermostat_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    add_device_subtype: '',
    app_device_type: 'thermostat',
    app_device_subtype: 'thermostat_3',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    create_aotumation_action: '0',
    device_type: '0300',
    device_subtype: '',
    device_name: '智能温控器',
    modify_img_code: '0',
    special: {}
  },
  {
    device_img_code: 'thermostat_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    add_device_subtype: '',
    app_device_type: 'thermostat',
    app_device_subtype: 'thermostat_8',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    create_aotumation_action: '0',
    device_type: '0300',
    device_subtype: 'WK_FFFFFF01',
    device_name: '智能温控器',
    modify_img_code: '0',
    special: {}
  },
  {
    device_img_code: 'thermostat_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    add_device_subtype: '',
    app_device_type: 'thermostat',
    app_device_subtype: 'thermostat_8',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    create_aotumation_action: '0',
    device_type: '0300',
    device_subtype: 'WK_FFFFFF04',
    device_name: '智能温控器',
    modify_img_code: '0',
    special: {
      enableBind: '1'
    }
  },
  {
    device_img_code: 'thermostat_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    add_device_subtype: '',
    app_device_type: 'thermostat',
    app_device_subtype: 'thermostat_8',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    create_aotumation_action: '0',
    device_type: '0300',
    device_subtype: 'WK_00FFFF05_1',
    device_name: '智能温控器',
    modify_img_code: '0',
    special: {
      enableBind: '1'
    }
  },
  {
    device_img_code: 'thermostat_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    add_device_subtype: '',
    app_device_type: 'thermostat',
    app_device_subtype: 'thermostat_11',
    mode_type: 'app',
    create_scene: '1',
    create_aotumation_trigger: '0',
    create_aotumation_action: '0',
    device_type: '0300',
    device_subtype: 'WK_00FFFF04_1',
    device_name: '智能温控器',
    modify_img_code: '0',
    special: {
      enableBind: '1'
    }
  },
  {
    device_img_code: 'inductionCard_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    add_device_subtype: '',
    app_device_type: 'inductionCard',
    app_device_subtype: '',
    mode_type: 'app',
    create_scene: '0',
    create_aotumation_trigger: '1',
    create_aotumation_action: '0',
    device_type: '0162',
    device_subtype: '32',
    device_name: '智能感应卡',
    modify_img_code: '0',
    special: {}
  },
  {
    device_type: '0162',
    device_subtype: 'AP_A3B',
    device_img_code: 'airCleaner_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    add_device_subtype: '',
    mode_type: 'app',
    app_device_type: 'airCleaner',
    app_device_subtype: 'airCleaner_0',
    special: {},
    device_name: '智能空气净化器',
    create_scene: '1',
    create_aotumation_trigger: '0',
    create_aotumation_action: '0',
    modify_img_code: '0'
  },
  {
    device_type: '0162',
    device_subtype: 'AP_K15',
    device_img_code: 'airCleaner_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    add_device_subtype: '',
    mode_type: 'app',
    app_device_type: 'airCleaner',
    app_device_subtype: 'airCleaner_1',
    special: {},
    device_name: '智能空气净化器',
    create_scene: '1',
    create_aotumation_trigger: '0',
    create_aotumation_action: '0',
    modify_img_code: '0'
  },
  {
    device_type: '0162',
    device_subtype: 'WP_W4',
    device_img_code: 'waterPurifier_0',
    mode_subtype: 'lmiot-zigbee',
    add_device_type: 'zigbee',
    add_device_subtype: '',
    mode_type: 'app',
    app_device_type: 'waterPurifier',
    app_device_subtype: 'waterPurifier_0',
    special: {},
    device_name: '智能净水器',
    create_scene: '0',
    create_aotumation_trigger: '0',
    create_aotumation_action: '0',
    modify_img_code: '0'
  }
]
// 模拟获取设备列表
function GetDevListSimulateData(type) {
  console.log(type, 'type969')
  if (type == 'sensor' || type == 'editTriggersensor') {
    // 获取自动化传感条件设备
    return [
      {
        app_device_subtype: 'humanBodyInfrared',
        app_device_type: 'sensor',
        device_id: 'CCCCCCFFFE83916801',
        device_name: '人体红外传感16801',
        device_type: '0402',
        room: '',
        zone_id: '000d'
      },
      {
        device_id: '086BD7FFFE735F4E01',
        device_name: '紧急按钮F4E01',
        device_type: '0402',
        room: '',
        zone_id: '002c'
      },
      { device_type: '0162', device_id: '000B57FFFEA1F9FE0B', room: '', zone_id: '01', device_name: '空气质量传感器9FE0B' },
      {
        app_device_subtype: 'humanBodyInfrared',
        app_device_type: 'sensor',
        device_id: '000D6F000FC9E71A01',
        device_name: '人体红外传感71A01',
        device_type: '0402',
        room: '',
        zone_id: '000d'
      },
      {  
        device_id: '086BD7FFFE73682401',
        device_name: '水浸传感82401',
        device_type: '0402',
        room: '',
        zone_id: '002a'
      },
      {
        app_device_subtype: 'temAndHum',
        app_device_type: 'sensor',
        device_id: '086BD7FFFE736AA301',
        device_name: '温湿度传感器AA301',
        device_type: '0162',
        room: '',
        zone_id: ''
      }
    ]
  } else if (type == 'trigger' || type == 'editTriggerdevice') {
    //获取自动化触发条件设备
    return [
      {
        app_device_subtype: '',
        app_device_type: 'switch',
        device_id: '14B457FFFEA0118E01',
        device_name: '客厅灯1',
        device_type: '0002',
        room: '客厅',
        zone_id: ''
      },
      {
        app_device_subtype: '',
        app_device_type: 'switch',
        device_id: '14B457FFFEA0118E02',
        device_name: '客厅灯2',
        device_type: '0002',
        room: '客厅',
        zone_id: ''
      },
      {
        app_device_subtype: '',
        app_device_type: 'switch',
        device_id: '14B457FFFEA0118E03',
        device_name: '客厅灯3',
        device_type: '0002',
        room: '客厅',
        zone_id: ''
      },
      {
        app_device_subtype: '',
        app_device_type: 'switch',
        device_id: '000B57FFFED275C002',
        device_name: '客厅灯5',
        device_type: '0002',
        room: '客厅',
        zone_id: ''
      },
      {
        app_device_subtype: '',
        app_device_type: 'switch',
        device_id: '000B57FFFED275C001',
        device_name: '客厅灯4',
        device_type: '0002',
        room: '客厅',
        zone_id: ''
      },
      {
        app_device_subtype: '',
        app_device_type: 'switch',
        device_id: '000B57FFFED275C003',
        device_name: '客厅灯6',
        device_type: '0002',
        room: '客厅',
        zone_id: ''
      },
      {
        app_device_subtype: '',
        app_device_type: 'switch',
        device_id: '14B457FFFEA0365701',
        device_name: '厨房灯1',
        device_type: '0002',
        room: '厨房',
        zone_id: ''
      },
      {
        app_device_subtype: '',
        app_device_type: 'switch',
        device_id: '14B457FFFEA0365702',
        device_name: '厨房灯2',
        device_type: '0002',
        room: '厨房',
        zone_id: ''
      },
      {
        app_device_subtype: '',
        app_device_type: 'switch',
        device_id: '14B457FFFEA0365703',
        device_name: '厨房灯3',
        device_type: '0002',
        room: '厨房',
        zone_id: ''
      },
      {
        app_device_subtype: '',
        app_device_type: 'switch',
        device_id: '14B457FFFEA03A2E01',
        device_name: '厨房灯4',
        device_type: '0002',
        room: '厨房',
        zone_id: ''
      },
      {
        app_device_subtype: '',
        app_device_type: 'switch',
        device_id: '14B457FFFEA03A2E02',
        device_name: '厨房灯5',
        device_type: '0002',
        room: '厨房',
        zone_id: ''
      },
      {
        app_device_subtype: '',
        app_device_type: 'switch',
        device_id: '14B457FFFEA03A2E03',
        device_name: '厨房灯6',
        device_type: '0002',
        room: '厨房',
        zone_id: ''
      },
      {
        app_device_subtype: '',
        app_device_type: 'switch',
        device_id: '14B457FFFEA03E5F02',
        device_name: '主卧灯2',
        device_type: '0002',
        room: '主卧',
        zone_id: ''
      },
      {
        app_device_subtype: '',
        app_device_type: 'switch',
        device_id: '14B457FFFEA03E5F01',
        device_name: '主卧灯1',
        device_type: '0002',
        room: '主卧',
        zone_id: ''
      },
      {
        app_device_subtype: '',
        app_device_type: 'switch',
        device_id: '14B457FFFEA03E5F03',
        device_name: '主卧灯3',
        device_type: '0002',
        room: '主卧',
        zone_id: ''
      },
      {
        app_device_subtype: '',
        app_device_type: 'switch',
        device_id: '14B457FFFEA0109701',
        device_name: '主卧灯4',
        device_type: '0002',
        room: '主卧',
        zone_id: ''
      },
      {
        app_device_subtype: '',
        app_device_type: 'switch',
        device_id: '14B457FFFEA0109702',
        device_name: '主卧灯5',
        device_type: '0002',
        room: '主卧',
        zone_id: ''
      },
      {
        app_device_subtype: '',
        app_device_type: 'switch',
        device_id: '14B457FFFEA0109703',
        device_name: '主卧灯6',
        device_type: '0002',
        room: '主卧',
        zone_id: ''
      },
      {
        app_device_subtype: '',
        app_device_type: 'switch',
        device_id: '1003801D003B0001',
        device_name: '普通开关-1003-0001',
        device_type: '0002_485',
        room: '485',
        zone_id: ''
      },
      {
        app_device_subtype: '',
        app_device_type: 'switch',
        device_id: '1003801D003B0002',
        device_name: '普通开关-1003-0002',
        device_type: '0002_485',
        room: '485',
        zone_id: ''
      },
      {
        app_device_subtype: '',
        app_device_type: 'switch',
        device_id: '1003801D003B0003',
        device_name: '普通开关-1003-0003',
        device_type: '0002_485',
        room: '485',
        zone_id: ''
      },
      {
        app_device_subtype: '',
        app_device_type: 'switch',
        device_id: '000100237F01',
        device_name: '灯控开关-A003-7F01',
        device_type: 'A003_485',
        room: '485',
        zone_id: ''
      },
      {
        app_device_subtype: '',
        app_device_type: 'switch',
        device_id: '000100237F02',
        device_name: '灯控开关-A003-7F02',
        device_type: 'A003_485',
        room: '485',
        zone_id: ''
      },
      {
        app_device_subtype: '',
        app_device_type: 'switch',
        device_id: '000100237F03',
        device_name: '灯控开关-A003-7F03',
        device_type: 'A003_485',
        room: '485',
        zone_id: ''
      },
      {
        app_device_subtype: '',
        app_device_type: 'switch',
        device_id: '000100237F04',
        device_name: '灯控开关-A003-7F04',
        device_type: 'A003_485',
        room: '485',
        zone_id: ''
      },
      {
        app_device_subtype: '',
        app_device_type: 'switch',
        device_id: '000100237F05',
        device_name: '灯控开关-A003-7F05',
        device_type: 'A003_485',
        room: '485',
        zone_id: ''
      },
      {
        app_device_subtype: '',
        app_device_type: 'switch',
        device_id: '000100237F06',
        device_name: '灯控开关-A003-7F06',
        device_type: 'A003_485',
        room: '485',
        zone_id: ''
      },
      {
        app_device_subtype: '',
        app_device_type: 'switch',
        device_id: '000100237F07',
        device_name: '灯控开关-A003-7F07',
        device_type: 'A003_485',
        room: '485',
        zone_id: ''
      },
      {
        app_device_subtype: '',
        app_device_type: 'switch',
        device_id: '000100237F08',
        device_name: '灯控开关-A003-7F08',
        device_type: 'A003_485',
        room: '485',
        zone_id: ''
      },
      {
        app_device_subtype: '',
        app_device_type: 'socket',
        device_id: '60A423FFFE0DA16101',
        device_name: '智能插座16101',
        device_type: '0051',
        room: '',
        zone_id: ''
      }
    ]
  } else if (type == 'sceneAndDevice' || type== 'EditAuto_sceneAndDevice') {
    //获取自动化执行设备和情景
    return {
      device_list: [
        {
          app_device_subtype: '485AC_0',
          app_device_type: '485AC',
          device_id: '0009000101',
          device_name: '中央空调-01',
          device_type: 'A006',
          room: '485',
          zone_id: '0001'
        },
        {
          app_device_subtype: '',
          app_device_type: 'switch',
          device_id: '14B457FFFEA0118E01',
          device_name: '客厅灯1',
          device_type: '0002',
          room: '客厅',
          zone_id: ''
        },
        {
          app_device_subtype: '',
          app_device_type: 'switch',
          device_id: '14B457FFFEA0118E02',
          device_name: '客厅灯2',
          device_type: '0002',
          room: '客厅',
          zone_id: ''
        },
        {
          app_device_subtype: '',
          app_device_type: 'switch',
          device_id: '14B457FFFEA0118E03',
          device_name: '客厅灯3',
          device_type: '0002',
          room: '客厅',
          zone_id: ''
        },
        {
          app_device_subtype: '',
          app_device_type: 'switch',
          device_id: '000B57FFFED275C002',
          device_name: '客厅灯5',
          device_type: '0002',
          room: '客厅',
          zone_id: ''
        },
        {
          app_device_subtype: '',
          app_device_type: 'switch',
          device_id: '000B57FFFED275C001',
          device_name: '客厅灯4',
          device_type: '0002',
          room: '客厅',
          zone_id: ''
        },
        {
          app_device_subtype: '',
          app_device_type: 'switch',
          device_id: '000B57FFFED275C003',
          device_name: '客厅灯6',
          device_type: '0002',
          room: '客厅',
          zone_id: ''
        },
        {
          app_device_subtype: '',
          app_device_type: 'switch',
          device_id: '14B457FFFEA0365701',
          device_name: '厨房灯1',
          device_type: '0002',
          room: '厨房',
          zone_id: ''
        },
        {
          app_device_subtype: '',
          app_device_type: 'switch',
          device_id: '14B457FFFEA0365702',
          device_name: '厨房灯2',
          device_type: '0002',
          room: '厨房',
          zone_id: ''
        },
        {
          app_device_subtype: '',
          app_device_type: 'switch',
          device_id: '14B457FFFEA0365703',
          device_name: '厨房灯3',
          device_type: '0002',
          room: '厨房',
          zone_id: ''
        },
        {
          app_device_subtype: '',
          app_device_type: 'switch',
          device_id: '14B457FFFEA03A2E01',
          device_name: '厨房灯4',
          device_type: '0002',
          room: '厨房',
          zone_id: ''
        },
        {
          app_device_subtype: '',
          app_device_type: 'switch',
          device_id: '14B457FFFEA03A2E02',
          device_name: '厨房灯5',
          device_type: '0002',
          room: '厨房',
          zone_id: ''
        },
        {
          app_device_subtype: '',
          app_device_type: 'switch',
          device_id: '14B457FFFEA03A2E03',
          device_name: '厨房灯6',
          device_type: '0002',
          room: '厨房',
          zone_id: ''
        },
        {
          app_device_subtype: '',
          app_device_type: 'switch',
          device_id: '14B457FFFEA03E5F02',
          device_name: '主卧灯2',
          device_type: '0002',
          room: '主卧',
          zone_id: ''
        },
        {
          app_device_subtype: '',
          app_device_type: 'switch',
          device_id: '14B457FFFEA03E5F01',
          device_name: '主卧灯1',
          device_type: '0002',
          room: '主卧',
          zone_id: ''
        },
        {
          app_device_subtype: '',
          app_device_type: 'switch',
          device_id: '14B457FFFEA03E5F03',
          device_name: '主卧灯3',
          device_type: '0002',
          room: '主卧',
          zone_id: ''
        },
        {
          app_device_subtype: '',
          app_device_type: 'switch',
          device_id: '14B457FFFEA0109701',
          device_name: '主卧灯4',
          device_type: '0002',
          room: '主卧',
          zone_id: ''
        },
        {
          app_device_subtype: '',
          app_device_type: 'switch',
          device_id: '14B457FFFEA0109702',
          device_name: '主卧灯5',
          device_type: '0002',
          room: '主卧',
          zone_id: ''
        },
        {
          app_device_subtype: '',
          app_device_type: 'switch',
          device_id: '14B457FFFEA0109703',
          device_name: '主卧灯6',
          device_type: '0002',
          room: '主卧',
          zone_id: ''
        },
        {
          app_device_subtype: '',
          app_device_type: 'switch',
          device_id: '1003801D003B0001',
          device_name: '普通开关-1003-0001',
          device_type: '0002_485',
          room: '485',
          zone_id: ''
        },
        {
          app_device_subtype: '',
          app_device_type: 'switch',
          device_id: '1003801D003B0002',
          device_name: '普通开关-1003-0002',
          device_type: '0002_485',
          room: '485',
          zone_id: ''
        },
        {
          app_device_subtype: '',
          app_device_type: 'switch',
          device_id: '1003801D003B0003',
          device_name: '普通开关-1003-0003',
          device_type: '0002_485',
          room: '485',
          zone_id: ''
        },
        {
          app_device_subtype: '',
          app_device_type: 'switch',
          device_id: '000100237F01',
          device_name: '灯控开关-A003-7F01',
          device_type: 'A003_485',
          room: '485',
          zone_id: ''
        },
        {
          app_device_subtype: '',
          app_device_type: 'switch',
          device_id: '000100237F02',
          device_name: '灯控开关-A003-7F02',
          device_type: 'A003_485',
          room: '485',
          zone_id: ''
        },
        {
          app_device_subtype: '',
          app_device_type: 'switch',
          device_id: '000100237F03',
          device_name: '灯控开关-A003-7F03',
          device_type: 'A003_485',
          room: '485',
          zone_id: ''
        },
        {
          app_device_subtype: '',
          app_device_type: 'switch',
          device_id: '000100237F04',
          device_name: '灯控开关-A003-7F04',
          device_type: 'A003_485',
          room: '485',
          zone_id: ''
        },
        {
          app_device_subtype: '',
          app_device_type: 'switch',
          device_id: '000100237F05',
          device_name: '灯控开关-A003-7F05',
          device_type: 'A003_485',
          room: '485',
          zone_id: ''
        },
        {
          app_device_subtype: '',
          app_device_type: 'switch',
          device_id: '000100237F06',
          device_name: '灯控开关-A003-7F06',
          device_type: 'A003_485',
          room: '485',
          zone_id: ''
        },
        {
          app_device_subtype: '',
          app_device_type: 'switch',
          device_id: '000100237F07',
          device_name: '灯控开关-A003-7F07',
          device_type: 'A003_485',
          room: '485',
          zone_id: ''
        },
        {
          app_device_subtype: '',
          app_device_type: 'switch',
          device_id: '000100237F08',
          device_name: '灯控开关-A003-7F08',
          device_type: 'A003_485',
          room: '485',
          zone_id: ''
        },
        {
          app_device_subtype: 'light',
          app_device_type: 'switch',
          device_id: '000100370001',
          device_name: '调光开关-A004-0001',
          device_type: 'A004',
          room: '485',
          zone_id: ''
        },
        {
          app_device_subtype: 'light',
          app_device_type: 'switch',
          device_id: '000100370002',
          device_name: '调光开关-A004-0002',
          device_type: 'A004',
          room: '485',
          zone_id: ''
        },
        {
          app_device_subtype: 'light',
          app_device_type: 'switch',
          device_id: '000100370003',
          device_name: '调光开关-A004-0003',
          device_type: 'A004',
          room: '485',
          zone_id: ''
        },
        {
          app_device_subtype: 'light',
          app_device_type: 'switch',
          device_id: '000100370004',
          device_name: '调光开关-A004-0004',
          device_type: 'A004',
          room: '485',
          zone_id: ''
        },
        {
          app_device_subtype: 'light',
          app_device_type: 'switch',
          device_id: '000100370005',
          device_name: '调光开关-A004-0005',
          device_type: 'A004',
          room: '485',
          zone_id: ''
        },
        {
          app_device_subtype: 'light',
          app_device_type: 'switch',
          device_id: '000100370006',
          device_name: '调光开关-A004-0006',
          device_type: 'A004',
          room: '485',
          zone_id: ''
        },
        {
          app_device_subtype: 'progress',
          app_device_type: 'curtain',
          device_id: '60A423FFFE23C10F01',
          device_name: '窗帘电机10F01',
          device_type: '0202',
          room: '',
          zone_id: 'win104'
        },
        {
          app_device_subtype: '',
          app_device_type: 'socket',
          device_id: '60A423FFFE0DA16101',
          device_name: '智能插座16101',
          device_type: '0051',
          room: '',
          zone_id: ''
        },
        {
          app_device_subtype: 'rgbcw',
          app_device_type: 'switch',
          color_temp_max: '454',
          color_temp_min: '200',
          device_id: '14B457FFFEA5A3B201',
          device_name: 'RGB彩灯3B201',
          device_type: '0102',
          room: '',
          zone_id: 'VZ00E321V010205'
        },
        {
          app_device_subtype: 'sbk',
          app_device_type: 'bgMusic',
          device_id: '10000021817',
          device_name: '背景音乐-B002-1817',
          device_type: 'B002',
          room: '',
          zone_id: ''
        }
      ],
      scene_list: [
        {
          room: '-2F',
          scene_id: '64D87DF702991E4ED77A897793068CB3FB22',
          scene_img: '0',
          scene_name: '窗帘测试开'
        },
        {
          room: '-2F',
          scene_id: '6A6259C59638DE4870CBDCAAAAAC26A89A08',
          scene_img: '0',
          scene_name: '窗帘测试关'
        },
        {
          room: '',
          scene_id: 'EEACB2913B9B2146AF98ADD47251D247239F',
          scene_img: '0',
          scene_name: '全开（勿删）'
        },
        {
          room: '',
          scene_id: '94037AE48357104EB129755614EFD2C97BC2',
          scene_img: '0',
          scene_name: '全关（勿删）'
        },
        {
          room: '',
          scene_id: 'D6A93647BB694C457118B6B37F3BB3BE9CE2',
          scene_img: '0',
          scene_name: '测试推送14'
        }
      ],
      subtype: 'auto_action',
      type: 'auto'
    }
  } else {
    return [
      {
        device_id: 'device_idB002_NET',
        device_name: '声必可',
        device_type: 'B002',
        zone_id: ''
      },
      {
        device_id: 'weqkjn54345xzhkjae',
        device_name: '空调998',
        device_type: '0300',
        zone_id: 'VZ00E32210300ZHWK'
      },
      {
        device_id: 'thermostat_8',
        device_name: '温控器44566',
        device_type: '0300',
        zone_id: 'WK_FFFFFF01',
        room: '阳台'
      },
      {
        device_id: 'thermostat_76844',
        device_name: '地暖5_20269546556',
        device_type: '0300',
        zone_id: 'WK_00FFFF05_2'
      },
      {
        device_id: 'thermostat_6',
        device_name: '新风0269546556',
        device_type: '0300',
        zone_id: 'WK_FFFFFF03'
      },
      {
        device_id: '0002E321V00024301',
        device_name: '开关01',
        device_type: '0002',
        zone_id: 'E321V00024301'
      },
      {
        device_id: '000A000A',
        device_name: '门锁',
        device_type: '000A',
        zone_id: ''
      },
      {
        device_id: '01620025456VDAW',
        device_type: '0162',
        zone_id: '45',
        device_name: '毛巾架96458'
      },
      {
        device_id: '016247kongq',
        device_name: '空气净化器74',
        device_type: '0162',
        zone_id: 'AP_K15'
      },
      {
        device_id: '67456645664658',
        device_name: 'RGB彩灯3B201',
        device_type: '0102',
        zone_id: 'VZ00E321V010205',
        app_device_type: 'switch',
        app_device_subtype: 'rgbcw',
        color_temp_min: '100',
        color_temp_max: '300'
      },
      {
        device_id: '678',
        device_name: '调色灯',
        device_type: '0210',
        zone_id: '',
        app_device_type: 'switch',
        app_device_subtype: 'color'
      },
      {
        device_id: 'mnczxkjhalkjse43124312',
        device_name: '浴缸',
        device_type: '0162',
        zone_id: '10'
      },
      {
        device_id: 'ASWD4556456WD',
        device_name: '光科屋441',
        device_type: '0162',
        zone_id: '50',
        app_device_type: 'bathroom',
        app_device_subtype: 'lightRoom_0'
      },
      {
        device_id: '000B57FFFED27C270B',
        device_name: '蒸汽房111111111111',
        device_type: '0162',
        zone_id: '42',
        app_device_type: 'bathroom',
        app_device_subtype: 'steamRoom_1'
      },
      {
        device_id: '0002E321V00024302',
        device_name: '开关02',
        device_type: '0002',
        zone_id: 'E321V00024302',
        app_device_type: 'switch',
        app_device_subtype: ''
      },
      {
        device_id: '0002E321V00024303',
        device_name: '开关03',
        device_type: '0002',
        zone_id: 'E321V00024303',
        app_device_type: 'switch',
        app_device_subtype: ''
      },
      {
        device_id: '0300VZ00E322101ZHWK',
        device_name: '温控器(空调)VZ00E32210300ZHWK',
        device_type: '0300',
        zone_id: 'VZ00E32210300ZHWK',
        app_device_type: '485AC',
        app_device_subtype: '485AC_1'
      },
      {
        device_id: '0300_WK_FFFFFF04',
        device_name: '温控器(空调)030004',
        device_type: '0300',
        zone_id: 'WK_FFFFFF03',
        app_device_type: 'thermostat',
        app_device_subtype: 'thermostat_6'
      },
      {
        device_id: 'yuba30',
        device_name: '浴霸ST_30',
        device_type: '0162',
        zone_id: 'ST_30',
        app_device_type: 'bathroomMaster',
        app_device_subtype: ''
      },
      {
        device_id: 'yuba121',
        device_name: '浴霸ST_121',
        device_type: '0162',
        zone_id: 'ST_121',
        app_device_type: 'bathroomMaster',
        app_device_subtype: ''
      },
      {
        device_id: 'try0203',
        device_name: '窗帘开关',
        device_type: '0203',
        zone_id: '',
        app_device_type: 'curtain',
        app_device_subtype: ''
      },
      {
        device_id: '121232323123',
        device_name: '窗帘电机',
        device_type: '0202win104',
        zone_id: '',
        app_device_type: 'curtain',
        app_device_subtype: 'progress'
      },
      {
        device_id: '2222222',
        device_name: '温控器(空调)0300',
        device_type: '0300',
        zone_id: '',
        app_device_type: 'thermostat',
        app_device_subtype: 'thermostat_3'
      },
      {
        device_id: '96996666',
        device_name: '新风(Xxx)',
        device_type: '0300',
        zone_id: 'WK_00FFFF04_3',
        app_device_type: 'thermostat',
        app_device_subtype: 'thermostat_10'
      },
      {
        device_id: '96996666565546',
        device_name: '温控器(Xxx)',
        device_type: 'D001',
        zone_id: '0017',
        app_device_type: 'thermostat',
        app_device_subtype: 'thermostat_0'
      },
      {
        device_id: '9251531531',
        device_name: '地暖(Xxx)',
        device_type: '0300',
        zone_id: 'WK_00FFFF04_2',
        app_device_type: 'thermostat',
        app_device_subtype: 'thermostat_9'
      },
      {
        device_id: '2333333333333',
        device_name: '模拟色温灯',
        device_type: '0220',
        zone_id: '',
        app_device_type: 'switch',
        app_device_subtype: 'cct'
      },
      {
        device_id: 'asjqlkwe111jqkl5',
        device_name: '声光报警器',
        device_type: '0403',
        zone_id: ''
      },
      {
        device_id: 'dxzldevid',
        device_name: '电箱主路',
        device_type: '416',
        zone_id: '09'
      },
      {
        device_id: 'dxflIDdev',
        device_name: '电箱分路',
        device_type: '417',
        zone_id: '07'
      },
      { device_id: '123456789', device_name: '调光灯', device_type: '0101', room: '', zone_id: '' },
      {
        device_id: '000B57FFFED2611701-default_device_1611734774',
        device_name: '红外学习',
        device_type: 'it_subdev',
        zone_id: 'it_subdev_0'
      },
      {
        device_id: 'hwxxjdh-3#2#1',
        device_name: '机顶盒红外转发',
        device_type: 'it_subdev',
        zone_id: 'it_subdev_1'
      }
      /*
          
          {
              "device_id": "000A000A",
              "device_name": "门锁",
              "device_type": "000A",
              "zone_id": ""
          },
          {
              "device_id": "2333333333333",
              "device_name": "模拟晾衣机",
              "device_type": "0164",
              "zone_id": ""
          },
          {
              "device_id": "2333333333333",
              "device_name": "模拟色温灯",
              "device_type": "0220",
              "zone_id": ""
          },
          { "device_id": "123456789","device_name": "调光灯", "device_type": "0101", "room": "", "zone_id": "" },
          { "device_id": "1000110018999", "device_name": "背景音乐-B002-8900", "device_type": "B002", "room": "阳台", "zone_id": "" },
          { "device_id": "111111111", "device_name": "浴缸测试", "device_type": "0162", "room": "", "zone_id": "10" },
          { "device_id": "000B57FFFED27B5210", "device_name": "蒸汽房", "device_type": "0162", "room": "客厅", "zone_id": "41" },
          { "device_id": "000B57FFFED27B5211", "device_name": "餐厅过道灯", "device_type": "0002", "room": "客厅", "zone_id": "" },
          { "device_id": "000B57FFFED27B8B12", "device_name": "餐厅灯", "device_type": "0002", "room": "客厅", "zone_id": "" },
      { "device_id": "000B57FFFED27B8B12", "device_name": "0100", "device_type": "0100", "room": "客厅", "zone_id": "" },
          { "device_id": "000B57FFFED27B8B10", "device_name": "阳台", "device_type": "0002", "room": "阳台", "zone_id": "" },
          { "device_id": "000B57FFFED27B8B11", "device_name": "书房灯", "device_type": "0002", "room": "书房", "zone_id": "" },
          { "device_id": "000B57FFFED2782210", "device_name": "卧室灯", "device_img": "0002_00", "device_type": "0002", "room": "主卧", "zone_id": "" },
          { "device_id": "000B57FFFEA16BD412", "device_name": "超平面开关3_6", "device_type": "0002", "room": "", "zone_id": "" },
          { "device_id": "000B57FFFEA16BD410", "device_name": "超平面开关3-4", "device_type": "0002", "room": "", "zone_id": "" },
          { "device_id": "000B57FFFEA16BD411", "device_name": "超平面开关3_5", "device_type": "0002", "room": "主卧", "zone_id": "" },
          { "device_id": "000B57FFFEBE8A6411", "device_name": "次卫灯", "device_type": "0002", "room": "卫生间", "zone_id": "" }, 
          { "device_id": "000B57FFFEBE8A6410", "device_name": "客厅灯_1", "device_type": "0002", "room": "客厅", "zone_id": "" },
          { "device_id": "000B57FFFED27B6310", "device_name": "衣帽间", "device_type": "0002", "room": "阳台", "zone_id": "" }, 
          { "device_id": "000B57FFFED27B6311", "device_name": "超平面开关2_4", "device_type": "0002", "room": "其它", "zone_id": "" },
          { "device_id": "00124B00132D788010", "device_name": "智能插座_86_可燃气体", "device_type": "0009", "room": "", "zone_id": "" }, 
          { "device_id": "000B57FFFEBE99CE10", "device_name": "西厨", "device_type": "0002", "room": "厨房", "zone_id": "" }, 
          { "device_id": "000B57FFFEBE99CE11", "device_name": "客厅灯2", "device_type": "0002", "room": "客厅", "zone_id": "" }, 
          { "device_id": "000B57FFFEBE992010", "device_name": "中厨灯", "device_type": "0002", "room": "厨房", "zone_id": "" }, 
          { "device_id": "000B57FFFEDAF78911", "device_name": "触摸开关4-2", "device_type": "0002", "room": "其它", "zone_id": "" }, 
          { "device_id": "000B57FFFEDAF78912", "device_name": "触摸开关4_3", "device_img": "0002_01", "device_type": "0002", "room": "其它", "zone_id": "" }, 
          { "device_id": "000B57FFFEDAF78913", "device_name": "触摸开关4-4", "device_type": "0002", "room": "其它", "zone_id": "" }, 
          { "device_id": "000B57FFFEDAF78910", "device_name": "触摸开关4-1", "device_type": "0002", "room": "其它", "zone_id": "" }, 
          { "device_id": "000B57FFFEBEA55412", "device_name": "主卧灯_1", "device_type": "0002", "room": "主卧", "zone_id": "" }, 
          { "device_id": "000B57FFFEBEA55410", "device_name": "书房灯", "device_img": "0002_03", "device_type": "0002", "room": "书房", "zone_id": "" }, 
          { "device_id": "000B57FFFEBEA55411", "device_name": "主卧灯_2", "device_type": "0002", "room": "主卧", "zone_id": "" }, 
          { "device_id": "000B57FFFED2784713", "device_name": "触摸开关4_8无负载", "device_type": "0002", "room": "其它", "zone_id": "" }, 
          { "device_id": "000B57FFFED2784712", "device_name": "触摸开关4_7无负载", "device_img": "0002_04", "device_type": "0002", "room": "其它", "zone_id": "" }, 
          { "device_id": "000B57FFFED2784710", "device_name": "触摸开关4_6无负载", "device_type": "0002", "room": "其它", "zone_id": "" }, 
          { "device_id": "000B57FFFED2784711", "device_name": "触摸开关4_7无负载", "device_type": "0002", "room": "其它", "zone_id": "" }, 
          { "device_id": "hwxx","device_name": "红外学习","device_type": "it_subdev","zone_id": "it_subdev_0"
          },
          {
              "device_id": "hwxxjdh-3#2#1",
              "device_name": "机顶盒红外转发",
              "device_type": "it_subdev",
              "zone_id": "it_subdev_1"
          },
          {
              "device_id": "asjqlkwejqkl41",
              "device_name": "A0060001_485空调",
              "device_type": "A006",
              "zone_id": "0001"
          },
          {
              "device_id": "asjqlkwejqkl42",
              "device_name": "A001_485空调",
              "device_type": "A001_485",
              "zone_id": ""
          },
          {
              "device_id": "asjqlkwejqkl43",
              "device_name": "0166空调",
              "device_type": "0166",
              "zone_id": ""
          },
          {
              "device_id": "asjqlkwejqkl4",
              "device_name": "485灯",
              "device_type": "A003_485",
              "zone_id": ""
          },
          {
              "device_id": "asjqlkwe111jqkl4",
              "device_name": "背景音乐灯",
              "device_type": "B001",
              "zone_id": ""
          },
      {
          "device_id": "asjqlkwe111jqkl5",
          "device_name": "声光报警器",
          "device_type": "0403",
          "zone_id": ""
      },
          
      
              {
                  "device_id": "345",
                  "device_name": "普通开关",
                  "device_type": "0002",
                  "zone_id": ""
              },
              {
                  "device_id": "dxzldevid",
                  "device_name": "电箱主路",
                  "device_type": "416",
                  "zone_id": "09"
              },
              {
                  "device_id": "dxflIDdev",
                  "device_name": "电箱分路",
                  "device_type": "417",
                  "zone_id": "07"
              },
            
              {
                  "device_id": "hwxx",
                  "device_name": "红外学习",
                  "device_type": "it_subdev",
                  "zone_id": "it_subdev_0"
              },
              {
                  "device_id": "hwxxjdh-3#2#1",
                  "device_name": "机顶盒红外转发",
                  "device_type": "it_subdev",
                  "zone_id": "it_subdev_1"
              },
              {
                  "device_id": "qwe34",
                  "device_name": "调光灯",
                  "device_type": "0101",
                  "zone_id": ""
              },
              {
                  "device_id": "try",
                  "device_name": "窗帘开关",
                  "device_type": "0202",
                  "zone_id": ""
              },
              {
                  "device_id": "reqwe",
                  "device_name": "窗帘电机",
                  "device_type": "0202win104",
                  "zone_id": ""
              },
      
              
              {
                  "device_id": "weqkjn54345xzhkjae",
                  "device_name": "声必可",
                  "device_type": "B002",
                  "zone_id": ""
              },
              {
                  "device_id": "device_idB001_NET",
                  "device_name": "华尔思",
                  "device_type": "B001",
                  "zone_id": ""
              },
              {
                  "device_id": "mnczxkjhalkjse43124312",
                  "device_name": "浴缸",
                  "device_type": "0162",
                  "zone_id": "10"
              },
              {
                  "device_id": "fkjhkjhg3jh",
                  "device_name": "蒸汽房",
                  "device_type": "0162",
                  "zone_id": "40"
              }
              */
    ]
  }
}

// 区域数据
function GetAreaListData() {
  return {
    areaList: [
      {
        status: '0',
        remark: '',
        area_id: '2018012209383814145j29636',
        create_date: '2018-01-22 09:57:57',
        area_type_code: '003',
        area_name: '2级区域模拟数据14',
        parent_id: '201801220937544454577',
        area_img: '04',
        area_level: '1',
        area_lock_flag: 'on'
      },
      {
        status: '0',
        remark: '',
        area_id: '201801220938381412fgj59636',
        create_date: '2018-01-22 09:57:57',
        area_type_code: '003',
        area_name: '2级区域模拟数据13',
        parent_id: '201801220937544454577',
        area_img: '04',
        area_level: '1',
        area_lock_flag: 'on'
      },
      {
        status: '0',
        remark: '',
        area_id: '2018012209383814128799636',
        create_date: '2018-01-22 09:57:57',
        area_type_code: '003',
        area_name: '2级区域模拟数据12',
        parent_id: '201801220937544454577',
        area_img: '04',
        area_level: '1',
        area_lock_flag: 'on'
      },
      {
        status: '0',
        remark: '',
        area_id: '201801220938381dv4129636',
        create_date: '2018-01-22 09:57:57',
        area_type_code: '003',
        area_name: '2级区域模拟数据11',
        parent_id: '201801220937544454577',
        area_img: '04',
        area_level: '1',
        area_lock_flag: 'on'
      },
      {
        status: '0',
        remark: '',
        area_id: '20180122093838rt14129636',
        create_date: '2018-01-22 09:57:57',
        area_type_code: '003',
        area_name: '2级区域模拟数据10',
        parent_id: '201801220937544454577',
        area_img: '04',
        area_level: '1',
        area_lock_flag: 'on'
      },
      {
        status: '0',
        remark: '',
        area_id: '20180122093838uil14129636',
        create_date: '2018-01-22 09:57:57',
        area_type_code: '003',
        area_name: '2级区域模拟数据9',
        parent_id: '201801220937544454577',
        area_img: '04',
        area_level: '1',
        area_lock_flag: 'on'
      },
      {
        status: '0',
        remark: '',
        area_id: '2018012209383ht814129636',
        create_date: '2018-01-22 09:57:57',
        area_type_code: '003',
        area_name: '2级区域模拟数据8',
        parent_id: '201801220937544454577',
        area_img: '04',
        area_level: '1',
        area_lock_flag: 'on'
      },
      {
        status: '0',
        remark: '',
        area_id: '201801220938wer3814129636',
        create_date: '2018-01-22 09:57:57',
        area_type_code: '003',
        area_name: '2级区域模拟数据7',
        parent_id: '201801220937544454577',
        area_img: '04',
        area_level: '1',
        area_lock_flag: 'on'
      },
      {
        status: '0',
        remark: '',
        area_id: '201801220938381412we129636',
        create_date: '2018-01-22 09:57:57',
        area_type_code: '003',
        area_name: '2级区域模拟数据6',
        parent_id: '201801220937544454577',
        area_img: '04',
        area_level: '1',
        area_lock_flag: 'on'
      },
      {
        status: '0',
        remark: '',
        area_id: '2018012209312dq83814129636',
        create_date: '2018-01-22 09:57:57',
        area_type_code: '003',
        area_name: '2级区域模拟数据5',
        parent_id: '201801220937544454577',
        area_img: '04',
        area_level: '1',
        area_lock_flag: 'on'
      },
      {
        status: '0',
        remark: '',
        area_id: '201801r22093838141q29636',
        create_date: '2018-01-22 09:57:57',
        area_type_code: '003',
        area_name: '2级区域模拟数据4',
        parent_id: '201801220937544454577',
        area_img: '04',
        area_level: '1',
        area_lock_flag: 'on'
      },
      {
        status: '0',
        remark: '',
        area_id: '20q18012209383814q129636',
        create_date: '2018-01-22 09:57:57',
        area_type_code: '003',
        area_name: '2级区域模拟数据3',
        parent_id: '201801220937544454577',
        area_img: '04',
        area_level: '1',
        area_lock_flag: 'on'
      },
      {
        status: '0',
        remark: '',
        area_id: '2018012209323583814129636',
        create_date: '2018-01-22 09:57:57',
        area_type_code: '003',
        area_name: '2级区域模拟数据2',
        parent_id: '201801220937544454577',
        area_img: '04',
        area_level: '1',
        area_lock_flag: 'on'
      },
      {
        status: '0',
        remark: '',
        area_id: '20180122019383814129636',
        create_date: '2018-01-22 09:57:57',
        area_type_code: '003',
        area_name: '2级区域模拟数据1',
        parent_id: '201801220937544454577',
        area_img: '04',
        area_level: '1',
        area_lock_flag: 'on'
      }
    ]
  }
}

// 设备图标相关
let devIco = {
  //注意  大类型与细分类型之间用_分割

  //设备类型
  switch: 'defaultLight2white',
  switchOpen: 'defaultLight2white',
  acoustoOpticAlarm: 'alertor',
  acoustoOpticAlarmOpen: 'alertor',
  switch_color: 'ColoringLamp',
  switch_colorOpen: 'ColoringLamp',
  switch_rgbcw: 'ColoringLamp',
  switch_rgbcwOpen: 'ColoringLamp',
  switch_cct: 'ColoringLamp',
  switch_cctOpen: 'ColoringLamp',
  switch_light: 'Dimmer',
  switch_lightOpen: 'Dimmer',
  switch_lightElectric: 'Dimmer',
  switch_lightElectricOpen: 'Dimmer',
  curtain: 'CurtainSwitch',
  curtain_progress: 'CurtainSwitch',
  curtainOpen: 'CurtainSwitch',
  curtain_progressOpen: 'CurtainSwitch',
  sceneSwitch_icSwitch: 'RemoteControl',
  sceneSwitch_icSwitch: 'RemoteControlOpen',
  powerCtl: 'NES_onoff', //机械手
  powerCtlOpen: 'NES_onoff', //机械手
  socket: 'icon_socket', //插座
  socketOpen: 'icon_socket', //插座
  electricBox_subbranch: 'icon_electric_second', //电箱分路
  electricBox_subbranchOpen: 'icon_electric_second', //电箱分路
  electricBox_mainBranch: 'icon_electric_main-black2', //电箱主路
  electricBox_main: 'ElectricBox-black', //电箱
  electricBox_mainOpen: 'ElectricBox', //电箱
  electricBox_mainBranchOpen: 'icon_electric_main',
  gateLock_gateLock_zigbee: 'DoorLock', //智能门锁
  gateLock_gateLock_zigbeeAOpen: 'icon_lock', //智能门锁
  gateLock_gateLock_nbiot: 'lock_bg01-break', //NB门锁
  gateLock_gateLock_nbiotOpen: 'lock_bg01', //NB门锁

  '485AC_485AC_0': 'ico_AirConditioner_new',
  '485AC': 'ico_AirConditioner_new',
  '485AC_485AC_1': 'ico_AirConditioner_new', //特殊类型空调,跟温控器的ui为一样的

  router: 'Router',
  bgMusic_wise: 'backgroundMusic',
  bgMusic_sbk: 'backgroundMusic',

  //红外特殊了，这个要看具体情况处理下。。。
  infraredTransponder_infraredTransponder_0: 'InfraredTransponder', //红外转发器....

  it_subdev_0: 'red_learn_key', //红外学习子设备按钮
  it_subdev: 'red_learn_key', //红外键值
  it_subdev_1: 'red_learn_key', //红外键值
  it_subdev_2: 'red_learn_key', //红外键值
  it_subdev_3: 'red_learn_key', //红外键值
  it_subdev_4: 'red_learn_key', //红外键值
  it_subdev_5: 'red_learn_key', //红外键值
  it_subdev_6: 'red_learn_key', //红外键值
  it_subdev_7: 'red_learn_key', //红外键值
  it_subdev_8: 'red_learn_key', //红外键值
  it_subdev_9: 'red_learn_key', //红外键值
  it_subdev_10: 'red_learn_key', //红外键值
  it_subdev_it_subdev_0: 'red_learn_dev', //红外学习
  it_subdev_it_subdev_1: 'red_learn_dev', //机顶盒
  it_subdev_it_subdev_2: 'red_learn_dev', //电视
  it_subdev_it_subdev_3: 'red_learn_dev', //盒子
  it_subdev_it_subdev_4: 'red_learn_dev', //DVD
  it_subdev_it_subdev_5: 'red_learn_dev', //空调
  it_subdev_it_subdev_6: 'red_learn_dev', //投影仪
  it_subdev_it_subdev_7: 'red_learn_dev', //功放
  it_subdev_it_subdev_8: 'red_learn_dev', //电风扇
  it_subdev_it_subdev_9: 'red_learn_dev', //单反
  it_subdev_it_subdev_10: 'red_learn_dev', //电灯泡

  thermostat_thermostat_0: 'infrared_air_cold', //智能温控器(空调)
  thermostat_thermostat_3: 'infrared_air_cold',
  thermostat_thermostat_8: 'infrared_air_cold',
  thermostat_thermostat_11: 'infrared_air_cold', //智能温控器(空调)
  thermostat_thermostat_7: 'pic_hd',
  thermostat_thermostat_9: 'pic_hd',
  thermostat_thermostat_1: 'pic_hd', //地暖
  thermostat_thermostat_2: 'air_wind',
  thermostat_thermostat_6: 'air_wind',
  thermostat_thermostat_10: 'air_wind', //新风
  thermostat_thermostat_5: 'air_wind', //麦弛新风
  thermostat_thermostat_4: 'air_wind',

  bathroomMaster: 'bath_heater',
  towelRack_towelRack_0: 'towelRack', //毛巾架
  bathroom_bathtub: 'icon_bath_new',
  bathroom_steamRoom: 'icon_stream_new',
  bathroom_steamRoom_1: 'icon_stream_new',
  bathroom_lightRoom_0: 'lightTechnologyRoom',
  airCleaner_airCleaner_0: 'air_wind', //空气净化器
  airCleaner_airCleaner_1: 'air_wind', //空气净化器
  clothesDryer_clothesDryer_0: '0164', //晾衣机
  '0164disinfection': '0164disinfection',
  '0164heating': '0164heating',
  '0164lighting': '0164lighting',
  '0164wind': '0164wind',
  infraredTransponder_infraredTransponder_1: '016213_',
  '00': 'ic_device_logo_switch_change3',
  '01': 'ic_device_logo_switch_change',
  '02': 'ic_device_logo_switch_change_02',
  '03': 'ic_device_logo_switch_change1',
  '04': 'ic_device_logo_switch_change2',
  '05': 'ic_device_logo_switch_change_05',
  '06': 'ic_device_logo_switch_change_06',
  '07': 'ic_device_logo_switch_change_07',
  '08': 'ic_device_logo_switch_change_08',
  '09': 'ic_device_logo_switch_change_09',
  '10': 'ic_device_logo_switch_change_10',
  '11': 'ic_device_logo_switch_change_11',
  '12': 'ic_device_logo_switch_change_12',
  '13': 'ic_device_logo_switch_change_13',
  '14': 'ic_device_logo_switch_change_14',
  '15': 'ic_device_logo_switch_change_15',

  '00Open': 'ic_device_logo_switch_change_00Open',
  '01Open': 'ic_device_logo_switch_change_01Open',
  '02Open': 'ic_device_logo_switch_change_02Open',
  '03Open': 'ic_device_logo_switch_change_03Open',
  '04Open': 'ic_device_logo_switch_change_04Open',
  '05Open': 'ic_device_logo_switch_change_05Open',
  '06Open': 'ic_device_logo_switch_change_06Open',
  '07Open': 'ic_device_logo_switch_change_07Open',
  '08Open': 'ic_device_logo_switch_change_08Open',
  '09Open': 'ic_device_logo_switch_change_09Open',
  '10Open': 'ic_device_logo_switch_change_10Open',
  '11Open': 'ic_device_logo_switch_change_11Open',
  '12Open': 'ic_device_logo_switch_change_12Open',
  '13Open': 'ic_device_logo_switch_change_13Open',
  '14Open': 'ic_device_logo_switch_change_14Open',
  '15Open': 'ic_device_logo_switch_change_15Open',

  bathroom_bathtub: 'icon_bath_new',
  bathroom_steamRoom: 'icon_stream_new',
  bathroom_steamRoom_1: 'icon_stream_new',

  sensor_airQuality: 'sceneimg_03', //空气质量传感
  //"016206": "icon_sensor_tem_wet",         //空气质量传感
  sensor_temAndHum: 'icon_sensor_temp', //温湿度光照传感器
  sensor_doorsensor: 'product_sensor_door', //门磁传感器
  sensor_waterlogging: 'icon_sensor_water', //水浸传感
  sensor_combustibleGas: 'product_sensor_gas', //可燃气体传感
  sensor_smoke: 'SmokeSensing', //烟雾传感
  sensor_sos: 'product_sensor_sos', //紧急按钮
  sensor_humanBodyInfrared: 'icon_sensor_body', //人体红外感应
  sensor_CO: 'icon_sensor_co', //一氧化碳
  none: 'unknowDev-break'
}

//编辑情景模拟数据
function GetEditSceneSimulatedData() {
  let editDataStr = {
    sceneInfo: {
      config: [
        {
          linkage: [],
          action_list: [
            {
              status: '0',
              cond_id: '0',
              attr_value: 'on',
              device_id: '0002E321V00024301',
              attr_id: 'status',
              order: '0',
              remark: '开关01',
              action_id: '04ABCBA60DEB2A4177590EF124A5FD19A4EA',
              device_type: '0002E321V00024301',
              scene_id: '73DE92474628684DD4A9649B6F087D7AD8C9',
              delay_time: '20'
            },
            {
              attr_value: 'on',
              cond_id: '0',
              action_id: '60BE837661E5FF9FACA5',
              device_type: '0300WK_FFFFFF01',
              order: '0',
              remark: '温控器44566',
              delay_time: '0',
              attr_id: 'onoff',
              device_id: 'thermostat_8',
              status: '0',
              scene_id: '840F99B132DF337A561E'
            },
            {
              attr_value: '21',
              cond_id: '0',
              action_id: '3ABF3BDC15FB8BE590F8',
              device_type: '0300WK_FFFFFF01',
              order: '1',
              remark: '温控器44566',
              delay_time: '0',
              attr_id: 'cool_temp',
              device_id: 'thermostat_8',
              status: '0',
              scene_id: '840F99B132DF337A561E'
            },
            {
              attr_value: '3',
              cond_id: '0',
              action_id: '65F19DA7679BE239B602',
              device_type: '0300WK_FFFFFF01',
              order: '2',
              remark: '温控器44566',
              delay_time: '0',
              attr_id: 'model',
              device_id: 'thermostat_8',
              status: '0',
              scene_id: '840F99B132DF337A561E'
            },
            {
              attr_value: '1',
              cond_id: '0',
              action_id: '2ACD17B589B5E3F66DEF',
              device_type: '0300WK_FFFFFF01',
              order: '3',
              remark: '温控器44566',
              delay_time: '0',
              attr_id: 'wind_speed',
              device_id: 'thermostat_8',
              status: '0',
              scene_id: '840F99B132DF337A561E'
            },
            {
              status: '0',
              cond_id: '0',
              attr_value: '0020190516092421',
              device_id: '000B57FFFED2611701',
              order: '0',
              remark: '24度制冷',
              attr_id: 'default_device_0001',
              action_id: '0A9E536E97CFB775BFAE',
              device_type: 'it_subdevit_subdev_0',
              delay_time: '0',
              scene_id: '68E8F99A459E633E8435'
            },
            {
              status: '0',
              cond_id: '0',
              attr_value: '0020190516092516',
              device_id: '000B57FFFED2611701',
              order: '1',
              remark: '20度制冷',
              attr_id: 'default_device_0001',
              action_id: '8DC27386619535BAC23F',
              device_type: 'it_subdevit_subdev_0',
              delay_time: '0',
              scene_id: '68E8F99A459E633E8435'
            }
          ],
          task: []
        }
      ],
      editHomePage: '1',
      create_date: '2019-2-14 15:02:29',
      exec_type: 'user',
      update_date: '2019-2-14 15:02:29',
      area_one_name: '',
      scene_id: '760893AB9CD36B4C6C79D4A6B0DF1904F13F',
      scene_type_id: 'user',
      scene_type: 'testtype',
      scene_name: '模拟测试情景',
      scene_user_id: '',
      area_two_name: '2级区域模拟数据8',
      house_id: 'E2229511-0E55-49B3-B2FE-45DAC5D0F384',
      area_one_id: '201801220937544454577',
      remark: '',
      scene_img: '1',
      host_id: 'a09dc1d9a718',
      area_two_id: '2018012209383ht814129636',
      status: '0'
    },
    devList: [
      {
        device_id: '000B57FFFED2611701-default_device_1611734774',
        device_name: '红外学习',
        device_type: 'it_subdev',
        zone_id: 'it_subdev_0'
      },
      {
        device_id: 'thermostat_8',
        device_name: '温控器44566',
        device_type: '0300',
        zone_id: 'WK_FFFFFF01',
        room: '阳台'
      },
      {
        device_id: '0002E321V00024301',
        device_name: '开关01',
        device_type: '0002',
        zone_id: 'E321V00024301'
      },
      {
        device_id: '01620025456VDAW',
        device_type: '0162',
        zone_id: '45',
        device_name: '毛巾架96458'
      },
      {
        device_id: '2333333333333',
        device_name: '模拟色温灯',
        device_type: '0220',
        zone_id: '',
        app_device_type: 'switch',
        app_device_subtype: 'cct'
      },
      {
        device_id: '67456645664658',
        device_name: 'RGB彩灯3B201',
        device_type: '0102',
        zone_id: 'VZ00E321V010205',
        app_device_type: 'switch',
        app_device_subtype: 'rgbcw',
        color_temp_min: '100',
        color_temp_max: '300'
      },
      {
        device_id: '016247kongq',
        device_name: '空气净化器74',
        device_type: '0162',
        zone_id: 'AP_A3B',
        app_device_type: 'airCleaner',
        app_device_subtype: 'airCleaner_0'
      },
      {
        device_id: '678',
        device_name: '调色灯',
        device_type: '0210',
        zone_id: '',
        app_device_type: 'switch',
        app_device_subtype: 'color'
      },
      {
        device_id: 'mnczxkjhalkjse43124312',
        device_name: '浴缸',
        device_type: '0162',
        zone_id: '10'
      },
      {
        device_id: 'ASWD4556456WD',
        device_name: '光科屋441',
        device_type: '0162',
        zone_id: '50',
        app_device_type: 'bathroom',
        app_device_subtype: 'lightRoom_0'
      },
      {
        device_id: '000B57FFFED27C270B',
        device_name: '蒸汽房111111111111',
        device_type: '0162',
        zone_id: '42',
        app_device_type: 'bathroom',
        app_device_subtype: 'steamRoom_1'
      },
      {
        device_id: '0002E321V00024302',
        device_name: '开关02',
        device_type: '0002',
        zone_id: 'E321V00024302',
        app_device_type: 'switch',
        app_device_subtype: ''
      },
      {
        device_id: '0002E321V00024303',
        device_name: '开关03',
        device_type: '0002',
        zone_id: 'E321V00024303',
        app_device_type: 'switch',
        app_device_subtype: ''
      },
      {
        device_id: '0300VZ00E322101ZHWK',
        device_name: '温控器(空调)VZ00E32210300ZHWK',
        device_type: '0300',
        zone_id: 'VZ00E32210300ZHWK',
        app_device_type: '485AC',
        app_device_subtype: '485AC_1'
      },
      {
        device_id: '0300_WK_FFFFFF04',
        device_name: '温控器(空调)030004',
        device_type: '0300',
        zone_id: 'WK_FFFFFF03',
        app_device_type: 'thermostat',
        app_device_subtype: 'thermostat_6'
      },
      {
        device_id: 'yuba30',
        device_name: '浴霸ST_30 ',
        device_type: '0162',
        zone_id: 'ST_30',
        app_device_type: 'bathroomMaster',
        app_device_subtype: ''
      },
      {
        device_id: 'yuba121',
        device_name: '浴霸ST_121 ',
        device_type: '0162',
        zone_id: 'ST_121',
        app_device_type: 'bathroomMaster',
        app_device_subtype: ''
      },
      {
        device_id: 'try0203',
        device_name: '窗帘开关',
        device_type: '0203',
        zone_id: '',
        app_device_type: 'curtain',
        app_device_subtype: ''
      },
      {
        device_id: '2222222',
        device_name: '温控器(空调)0300',
        device_type: '0300',
        zone_id: '',
        app_device_type: 'thermostat',
        app_device_subtype: 'thermostat_3'
      },
      {
        device_id: '96996666',
        device_name: '新风(Xxx)',
        device_type: '0300',
        zone_id: 'WK_00FFFF04_3',
        app_device_type: 'thermostat',
        app_device_subtype: 'thermostat_10'
      },
      {
        device_id: '96996666565546',
        device_name: '温控器(Xxx)',
        device_type: 'D001',
        zone_id: '0017',
        app_device_type: 'thermostat',
        app_device_subtype: 'thermostat_0'
      },
      {
        device_id: '9251531531',
        device_name: '地暖(Xxx)',
        device_type: '0300',
        zone_id: 'WK_00FFFF04_2',
        app_device_type: 'thermostat',
        app_device_subtype: 'thermostat_9'
      }
    ],
    errorCode:
      '0' /*, "sceneInfo":{ "config":[{ "action_list": [{ "action_id": "7C54CA4A1AA0E24875E977ED50B858262E81", "attr_id": "00", "attr_value": "83", "cond_id": "0", "delay_time": "0", "device_id": "00124B001B7BB8D20B", "device_type": "0220", "order": "0", "remark": "色温灯8D20B", "scene_id": "5F8DFF7810DD974D6D1847F23382A50F696E", "status": "0" }, { "action_id": "FD6D5D78676B7D41DB9BF4B9EE010514F385", "attr_id": "color_temp", "attr_value": "411", "cond_id": "0", "delay_time": "0", "device_id": "00124B001B7BB8D20B", "device_type": "0220", "order": "1", "remark": "色温灯8D20B", "scene_id": "5F8DFF7810DD974D6D1847F23382A50F696E", "status": "0" }], "linkage": [], "task": [] }], "create_date":"2019-3-27 12:01:37", "editHomePage":"1", "exec_type":"user", "scene_id":"5F8DFF7810DD974D6D1847F23382A50F696E", "scene_img":"0", "scene_name":"搞它", "area_one_id":"", "area_one_name":"", "remark":"", "area_two_id":"", "area_two_name":"", "status":"0", "scene_type":"testtype", "scene_type_id":"user", "update_date":"", "scene_user_id":"869515027646527" }*/
  }

  return editDataStr
}

//红外模拟控制信息
function GetInfraredChildSimulateDev() {
  return '{ "body": { "datas": [{ "opcode": "r", "opcmd": "10042", "config": [{ "key_name": "18（模拟数据）", "date_time": "", "key_id": "0020180930173949", "device_id": "hwxx-000B5w7FFFEA201750", "type_id": "default_device_0001", "remark": "" }, { "key_name": "关机（模拟数据）", "date_time": "", "key_id": "0020180930174004", "device_id": "hwxx-000B57FgFFEA17", "type_id": "default_device_0001", "remark": "" }, { "key_name": "20度（模拟数据）", "date_time": "", "key_id": "0020180930175305", "device_id": "hwxx-00B543FEA20175B", "type_id": "default_device_0001", "remark": "" }, { "key_name": "22度（模拟数据）", "date_time": "", "key_id": "0020180930175321", "device_id": "hwxx-0008BFFFEA2017511", "type_id": "default_device_0001", "remark": "" }, { "key_name": "24度（模拟数据）", "date_time": "", "key_id": "0020180930175337", "device_id": "hwxx-000B57FFFEA4514", "type_id": "default_device_0001", "remark": "" }, { "key_name": "26度（模拟数据）", "date_time": "", "key_id": "0020181009165828", "device_id": "hwxx-000B57FFFEA1744", "type_id": "default_device_0001", "remark": "" }], "retcode": "00000", "subtype": "lmiot-config", "type": "config", "host_id": "a09dc1a2dc1e" }], "attributes": [{ "status": { "errcode": "00000" } }] }, "xq_receiveDate": "2018.11.312 17.13.52", "head": { "cmd": "2003", "uuid": "", "session_id": "82153724-5ee3-43f9-b335-5fa88a6afbe1", "time_stamp": "1541668432498" }, "xq_topic": "82153724-5ee3-43f9-b335-5fa88a6afbe1" }'
}

function GetInfraredCommonChildSimulateDev() {
  return '{"errorCode":"0","config":[{"typeid":"1","typename":"机顶盒","keyvalue":"8963,4491","keyname":"退出（测试模拟数据）","keynum":"24","remoteid":"7127","brandid":"2","keyid":"12169","brandname":"创维"},{"typeid":"1","typename":"机顶盒","keyvalue":"8963,4491,3","keyname":"加载","keynum":"24","remoteid":"7127","brandid":"2","keyid":"121949","brandname":"创维"},{"typeid":"1","typename":"机顶盒","keyvalue":"8963,4491,559,1689","keyname":"菜单1（模拟数据）","keynum":"24","remoteid":"7127","brandid":"2","keyid":"1211144","brandname":"创维"},{"typeid":"1","typename":"机顶盒","keyvalue":"8963,4491,559,1689","keyname":"菜单4（模拟数据）","keynum":"24","remoteid":"7127","brandid":"2","keyid":"162114","brandname":"创维"},{"typeid":"1","typename":"机顶盒","keyvalue":"8963,4491,559,1689","keyname":"菜单6（模拟数据）","keynum":"24","remoteid":"7127","brandid":"2","keyid":"412114","brandname":"创维"},{"typeid":"1","typename":"机顶盒","keyvalue":"8963,4491,559,1689","keyname":"菜单9（模拟数据）","keynum":"24","remoteid":"7127","brandid":"2","keyid":"121414","brandname":"创维"}]}'
}

//编辑自动化模拟数据
function GetEditEditAutomationSimulatedData() {
  return '{"automation":{"config":{"action_list":[],"condition_list":[{"link_id":"9209BAF1D11909407B5A95BF7CDB9999360A","cond_id":"5772850D5B31F0416778215E21002C02F057","cond_img":"","cond_name":"17:00-06:00"},{"link_id":"9209BAF1D11909407B5A95BF7CDB9999360A","cond_id":"5772850D5B31F0416778215E21002C02F057","cond_img":"","cond_name":"温湿度传感器"},{"link_id":"9209BAF1D11909407B5A95BF7CDB9999360A","cond_id":"5772850D5B31F0416778215E21002C02F057","cond_img":"","cond_name":"水浸传感82401"},{"link_id":"9209BAF1D11909407B5A95BF7CDB9999360A","cond_id":"5772850D5B31F0416778215E21002C02F057","cond_img":"","cond_name":"温湿度传感器"}],"scene_list":[]},"auto_push_msg":"1","create_date":"2021-05-14 8:56:19","exec_status":"0","exec_type":"user","link_id":"9209BAF1D11909407B5A95BF7CDB9999360A","link_img":"","link_name":"水浸传感82401：检测到浸水时；温湿度传感器：温度:29~86;湿度:<=43;； 17:00-06:00","remark":"","status":"1","link_type":"linkage","user_id":"3a837a976ab560da","xor":"0"},"errorCode":"0","trigger":{"cond_detail_list":[{"attr_id":"0,1,2,3,4,5,6","attr_operchar":"Open","attr_value":"17:00-06:00","cond_descrption":"","cond_detail_id":"1BBBA32B513B6F41AECB4096660AA9465DD2","cond_express":"","cond_id":"5772850D5B31F0416778215E21002C02F057","obj_id":"D7CF45FCF5A65B40A3C9197E691CDA9A96E6","obj_name":"17:00-06:00","obj_type":"time","remark":"","status":"1"},{"attr_id":"sensor_temp","attr_operchar":"Open","attr_value":"29_in_86","cond_descrption":"传感自动化条件","cond_detail_id":"1F9593DE27E8B54C250AD3939631409C993B","cond_express":"","cond_id":"5772850D5B31F0416778215E21002C02F057","obj_id":"086BD7FFFE736AEC01","obj_name":"温湿度传感器","obj_type":"0302","remark":"","status":"1"},{"attr_id":"status","attr_operchar":"水浸传感82401","attr_value":"1","cond_descrption":"传感自动化时间条件","cond_detail_id":"AABF9D0B20261243B2BB3C84C339D26313EB","cond_express":"","cond_id":"5772850D5B31F0416778215E21002C02F057","obj_id":"086BD7FFFE73682401","obj_name":"水浸传感82401","obj_type":"0402002a","remark":"","status":"1"},{"attr_id":"sensor_humi","attr_operchar":"Open","attr_value":"43_<_null","cond_descrption":"传感自动化条件","cond_detail_id":"B67420F1127DD143DC6A3DCC8EEBECED6546","cond_express":"","cond_id":"5772850D5B31F0416778215E21002C02F057","obj_id":"086BD7FFFE736AEC01","obj_name":"温湿度传感器","obj_type":"0302","remark":"","status":"1"}],"cond_id":"5772850D5B31F0416778215E21002C02F057","cond_img":"","cond_name":"","link_id":"9209BAF1D11909407B5A95BF7CDB9999360A"}} '
}
