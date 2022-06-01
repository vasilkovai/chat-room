import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const useCollection = () => {
  const error = ref(null)

  const addDoc = async (doc) => {
    error.value = null

    try {
      await projectFirestore.collection('messages').add(doc)
    } catch(err) {
      console.log(err.message)
      error.value = 'Could not send the message'
    }
  }

  return { error, addDoc }
}

export default useCollection