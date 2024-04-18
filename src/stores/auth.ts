import { ref } from 'vue'
import { defineStore } from 'pinia'
import axiosApiInstance from '@/api'

const apiKey = import.meta.env.VITE_API_KEY_FIREBASE

export const useAuthStore = defineStore('auth', () => {
  const userInfo = ref({
    token: '',
    email: '',
    userId: '',
    refreshToken: ''
  })
  const error = ref('')
  const loader = ref(false)

  interface payloadI {
    email: string
    password: string
  }

  const auth = async (payload: payloadI, type: string) => {
    const stringUrl = type === 'signup' ? 'signUp' : 'signInWithPassword'
    error.value = ''
    loader.value = true
    try {
      let response = await axiosApiInstance.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:${stringUrl}?key=${apiKey}`,
        {
          ...payload,
          returnSecureToken: true
        }
      )
      userInfo.value = {
        token: response.data.idToken,
        email: response.data.email,
        userId: response.data.localId,
        refreshToken: response.data.refreshToken
      }
      localStorage.setItem(
        'userTokens',
        JSON.stringify({
          token: userInfo.value.token,
          refreshToken: userInfo.value.refreshToken
        })
      )
    } catch (err) {
      throw error.value
    } finally {
      loader.value = false
    }
  }

  const logout = () => {
    userInfo.value = {
      token: '',
      email: '',
      userId: '',
      refreshToken: ''
    }
  }

  return { auth, userInfo, error, loader, logout }
})
