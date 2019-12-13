export const ApprovalItems = [
  { id: 1, item: 'Purchase Requisition', numberApproval: '2' }
]

export const PurchaseRequisition = [
  { id: 1, currency: 'USD', currencyValue: '4.000,00', requisition: '000013', dateCreated: '12/12/2020' },
  { id: 2, currency: 'USD', currencyValue: '2.500,00', requisition: '000015', dateCreated: '10/08/2020' }
]

export const PurchaseRequisitionDetails = [
  { 
    id: 1, 
    currency: 'USD', 
    currencyValue: '4.000,00', 
    requisition: '000013', 
    dateCreated: '12/12/2020',
    requestedBy: '000013 -- Heru Priyanto',
    district: 'PT MINING SERVICE',
    item: '001',
    description: 'SPRING',
    quantity: '20.00',
    price: '4.000,00', 
  },
  { 
    id: 2, 
    currency: 'USD', 
    currencyValue: '2.500,00', 
    requisition: '000015', 
    dateCreated: '10/08/2020',
    requestedBy: '000015 -- Rini',
    district: 'PT MINING SERVICE',
    item: '003',
    description: 'OIL',
    quantity: '75.00',
    price: '2.500,00',  
  }
]