export const Items = [
  { 
    id: 1, 
    workOrderNumber: '000012', 
    workOrderAction: 'INSPECTION EX',
    taskNumber: '002',
    taskAction: 'INSPECTION', 
    equipmentNumber: 'EX002-001',
    equipmentAction: 'EXCAVATOR KOMATSU', 
    date: '12/31/2022',
    icon: 'workorder' 
  },
  { 
    id: 2, 
    workOrderNumber: '000014', 
    workOrderAction: 'INSPECTION EX',
    taskNumber: '004',
    taskAction: 'INSPECTION', 
    equipmentNumber: 'EX003-005',
    equipmentAction: 'DUMP TRUCK KOMATSU', 
    date: '12/31/2022',
    icon: 'workorder' 
  },
  { 
    id: 3, 
    workOrderNumber: '000029', 
    workOrderAction: 'ACT5055 DAILY PM MECHANICAL',
    taskNumber: '001',
    taskAction: 'ACT5055 DAILY PM MECHANICAL', 
    equipmentNumber: 'EX002-012',
    equipmentAction: 'ARTICULATED DUMP TRUCK', 
    date: '12/31/2022',
    icon: 'workorder'
  },
]

export const ItemsInspectComponents = [
  { id: 1, itemsId: 1, component: 'Engine', equipmentNumber: 'EX002-001', equipmentAction: 'EXCAVATOR KOMATSU'},
  { id: 2, itemsId: 1, component: 'Hydraulic System', equipmentNumber: 'EX002-001', equipmentAction: 'EXCAVATOR KOMATSU'},
  { id: 3, itemsId: 1, component: 'Drive Train', equipmentNumber: 'EX002-001', equipmentAction: 'EXCAVATOR KOMATSU'},
  { id: 4, itemsId: 1, component: 'Transmission', equipmentNumber: 'EX002-001', equipmentAction: 'EXCAVATOR KOMATSU'},
  { id: 5, itemsId: 1, component: 'Wheel', equipmentNumber: 'EX002-001', equipmentAction: 'EXCAVATOR KOMATSU'},
  { id: 6, itemsId: 1, component: 'Torque', equipmentNumber: 'EX002-001', equipmentAction: 'EXCAVATOR KOMATSU'},
  
  { id: 7, itemsId: 2, component: 'Hydraulic System', equipmentNumber: 'EX003-005', equipmentAction: 'DUMP TRUCK KOMATSU'},
  { id: 8, itemsId: 2, component: 'Engine', equipmentNumber: 'EX003-005', equipmentAction: 'DUMP TRUCK KOMATSU'},
  { id: 9, itemsId: 2, component: 'Transmission and Brake', equipmentNumber: 'EX003-005', equipmentAction: 'DUMP TRUCK KOMATSU'},
  
  { id: 10, itemsId: 3, component: 'Lamp', equipmentNumber: 'EX002-012', equipmentAction: 'ARTICULATED DUMP TRUCK'},
  { id: 11, itemsId: 3, component: 'Glass', equipmentNumber: 'EX002-012', equipmentAction: 'ARTICULATED DUMP TRUCK'}
]


export const DefectAttribute = [
  { id: 1, value: 'Blisters' },
  { id: 2, value: 'Brittleness' },
  { id: 3, value: 'Cracking' },
  { id: 4, value: 'Delamination' },
  { id: 5, value: 'Discolouration' },
  { id: 6, value: 'Flash' },
  { id: 7, value: 'Flow lines' },
  { id: 8, value: 'Gate blush' },
  { id: 9, value: 'Jetting' },
  { id: 10, value: 'Knit lines' },
]

export const LaborEmployee = [
  { id: 1, laborName: 'Heru Priyanto', laborId: '000123', date: '12/12/2020', hoursWorked: '2.00', laborClass: 'MK', earnClass: '003' },
  { id: 2, laborName: 'Heru Priyanto', laborId: '000123', date: '08/01/2020', hoursWorked: '1.00', laborClass: 'MK', earnClass: '003' },
  { id: 3, laborName: 'Heru Priyanto', laborId: '000123', date: '01/01/2020', hoursWorked: '5.00', laborClass: 'MK', earnClass: '003' },
  { id: 4, laborName: 'Heru Priyanto', laborId: '000123', date: '01/02/2020', hoursWorked: '6.50', laborClass: 'MK', earnClass: '003' },
]