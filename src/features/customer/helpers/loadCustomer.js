import { collection, getDocs } from "firebase/firestore";
import { FirebaseDB } from 'fb';

export const loadCustomer = async (uid = '') => {
    if (!uid) throw new Error('El uid del usuario no existe');
    const querySnapshot = await getDocs(collection(FirebaseDB, `/${uid}/customer/status`));
    const status = [];
    querySnapshot.forEach((doc) => {
        status.push(doc.data());
    });
    return status;
} 