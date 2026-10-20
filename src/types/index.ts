export type RepairStatus = 'pending' | 'in_progress' | 'completed' | 'cancelled';

export interface RepairRequest {
  id: string;
  userId: string;
  customerName: string;
  customerPhone: string;
  bikeModel: string;
  serviceType: string;
  issueDescription: string;
  status: RepairStatus;
  preferredDate?: string;
  adminNotes?: string;
  createdAt: string;
  updatedAt?: string;
}

export interface ServiceInquiry {
  id: string;
  userId?: string;
  name: string;
  phone: string;
  serviceCategory?: string;
  message: string;
  createdAt: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
}
