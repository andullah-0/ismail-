import {
  collection,
  doc,
  setDoc,
  updateDoc,
  query,
  where,
  onSnapshot,
  getDocs,
} from 'firebase/firestore';
import { db, auth, OperationType, handleFirestoreError } from '../firebase';
import { RepairRequest, ServiceInquiry, RepairStatus } from '../types';

const REPAIRS_COLLECTION = 'repairRequests';
const INQUIRIES_COLLECTION = 'inquiries';

/**
 * Creates a new electric bike repair booking in Firestore
 */
export async function createRepairBooking(
  bookingData: Omit<RepairRequest, 'id' | 'userId' | 'status' | 'createdAt'>
): Promise<string> {
  const currentUser = auth.currentUser;
  if (!currentUser) {
    throw new Error('User must be signed in with Google to create a repair booking.');
  }

  const requestId = 'rep_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7);
  const now = new Date().toISOString();

  const newDoc: RepairRequest = {
    ...bookingData,
    id: requestId,
    userId: currentUser.uid,
    status: 'pending',
    createdAt: now,
  };

  try {
    await setDoc(doc(db, REPAIRS_COLLECTION, requestId), newDoc);
    return requestId;
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, `${REPAIRS_COLLECTION}/${requestId}`);
  }
}

/**
 * Subscribes to repair requests for the currently logged in user (or all if admin)
 */
export function subscribeToUserRepairs(
  userId: string,
  isAdmin: boolean,
  onData: (repairs: RepairRequest[]) => void,
  onError?: (err: Error) => void
): () => void {
  const colRef = collection(db, REPAIRS_COLLECTION);
  const q = isAdmin ? query(colRef) : query(colRef, where('userId', '==', userId));

  return onSnapshot(
    q,
    (snapshot) => {
      const results: RepairRequest[] = [];
      snapshot.forEach((d) => {
        results.push(d.data() as RepairRequest);
      });
      // Sort newest first
      results.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      onData(results);
    },
    (error) => {
      console.error('Subscription error:', error);
      if (onError) onError(error as Error);
      handleFirestoreError(error, OperationType.LIST, REPAIRS_COLLECTION);
    }
  );
}

/**
 * Mechanic / Admin status update for an electric bike repair
 */
export async function updateRepairStatus(
  requestId: string,
  status: RepairStatus,
  adminNotes?: string
): Promise<void> {
  const now = new Date().toISOString();
  const updatePayload: Record<string, any> = {
    status,
    updatedAt: now,
  };
  if (adminNotes !== undefined) {
    updatePayload.adminNotes = adminNotes;
  }

  try {
    await updateDoc(doc(db, REPAIRS_COLLECTION, requestId), updatePayload);
  } catch (error) {
    handleFirestoreError(error, OperationType.UPDATE, `${REPAIRS_COLLECTION}/${requestId}`);
  }
}

/**
 * Submits a contact inquiry or quote request
 */
export async function submitServiceInquiry(
  inquiry: Omit<ServiceInquiry, 'id' | 'createdAt'>
): Promise<string> {
  const inquiryId = 'inq_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7);
  const now = new Date().toISOString();

  const payload: ServiceInquiry = {
    ...inquiry,
    id: inquiryId,
    userId: auth.currentUser?.uid || 'guest',
    createdAt: now,
  };

  try {
    await setDoc(doc(db, INQUIRIES_COLLECTION, inquiryId), payload);
    return inquiryId;
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, `${INQUIRIES_COLLECTION}/${inquiryId}`);
  }
}

/**
 * Admin view to get all inquiries
 */
export async function fetchInquiries(): Promise<ServiceInquiry[]> {
  try {
    const snap = await getDocs(collection(db, INQUIRIES_COLLECTION));
    const items: ServiceInquiry[] = [];
    snap.forEach((d) => items.push(d.data() as ServiceInquiry));
    items.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    return items;
  } catch (error) {
    handleFirestoreError(error, OperationType.LIST, INQUIRIES_COLLECTION);
  }
}
