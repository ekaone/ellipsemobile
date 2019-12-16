export const ApprovalItems = [
  { id: 1, item: 'Purchase Requisition', numberApproval: '2', path: '/page-approval/details' },
  { id: 2, item: 'Work Order', numberApproval: '5', path: '/page-tasks' },
  { id: 3, item: 'Invoice', numberApproval: '3' },
  { id: 4, item: 'Timesheet', numberApproval: '1' },
  { id: 5, item: 'Leaves', numberApproval: '7' },
  { id: 6, item: 'Delivery Order', numberApproval: '9' }
]

export const PurchaseRequisition = [
  { id: 1, currency: 'USD', currencyValue: '4.000,00', requisition: '000013', dateCreated: '12/12/2020' },
  // { id: 2, currency: 'USD', currencyValue: '2.500,00', requisition: '000015', dateCreated: '10/08/2020' }
]

export const PurchaseRequisitionDetails = [
  { 
    id: 1, 
    currency: 'USD', 
    currencyValue: '4.000,00', 
    requisition: '000013', 
    dateRequired: '12/12/2020',
    requestedBy: '000013 -- Heru Priyanto',
    district: 'PT MINING SERVICE',
    item: '001',
    description: 'SPRING',
    quantity: '20.00',
    price: '4.000,00', 
  },
  // { 
  //   id: 2, 
  //   currency: 'USD', 
  //   currencyValue: '2.500,00', 
  //   requisition: '000015', 
  //   dateRequired: '10/08/2020',
  //   requestedBy: '000015 -- Rini',
  //   district: 'PT MINING SERVICE',
  //   item: '003',
  //   description: 'OIL',
  //   quantity: '75.00',
  //   price: '2.500,00',  
  // }
]

export const Types = [
  { id: 1, name: 'Goods' },
  { id: 2, name: 'Services' },
  { id: 3, name: 'Units' },
  { id: 4, name: 'Food' },
  { id: 5, name: 'Travelling' },
  { id: 6, name: 'Other' },
]