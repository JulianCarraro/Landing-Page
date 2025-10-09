import { getFirestore, collection, getDocs, query, where, getDoc, doc, addDoc } from 'firebase/firestore'
import { app } from './config'
import toast from 'react-hot-toast'

const db = getFirestore(app)

export const getCollectionData = async (collectionName) => {
    try {
        const querySnapshot = await getDocs(collection(db, collectionName))
        const docsData = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))
        return docsData
    } catch (error) {
        console.error(`Error al obtener ${collectionName}:`, error)
        throw error
    }
}

export const getItemsByCategory = async (category) => {
    try {
        const q = query(collection(db, 'items'), where('category', '==', category))
        const querySnapshot = await getDocs(q)
        const items = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))
        return items
    } catch (error) {
        console.error(`Error al obtener items por categoría ${category}:`, error)
        throw error
    }
}

export const getItem = async (id) => {
  try {
    const docRef = doc(db, 'items', id)
    const docSnap = await getDoc(docRef)

    if (!docSnap.exists()) {
      throw new Error(`No se encontró el item con id ${id}`)
    }

    return { id: docSnap.id, ...docSnap.data() }
  } catch (error) {
    console.error(`Error al obtener el item con id ${id}:`, error)
    throw error
  }
}

export const newOrder = async (order) => {
    try {
        const ordersCollection = collection(db, 'orders') 
        const docRef = await addDoc(ordersCollection, order)
        toast.success(`¡Gracias por tu compra! Tu número de orden es: ${docRef.id}`, { duration: 6000 })
        return true
    } catch (error) {
        toast.error('Hubo un error al procesar tu orden. Por favor, intenta nuevamente.', { duration: 6000 })
        return false
    } 
}