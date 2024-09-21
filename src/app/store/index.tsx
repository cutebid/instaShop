import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';

// Define more specific types for basicInfo and confirmDetails
interface BasicInfo {
  fullName: string;
  userName: string;
  phoneNumber: string;
  email: string
}

interface ConfirmDetails {
  storeName: string;
  storeTag: string;
  storePhone: string;
  storeEmail: string;
}

// Define the UserInfo type
interface UserInfo {
  email: string | null;
  basicInfo: BasicInfo | null;
  confirmDetails: ConfirmDetails | null;
}

// Define the AuthState type
interface AuthState {
  user: UserInfo | null;
  loading: boolean;
}

const initialState: AuthState = {
  user: {
    email: null,
    basicInfo: null,
    confirmDetails: null,
  },
  loading: false,
};

// Create a slice for auth
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      if (state.user) {
        state.user.email = action.payload;
      }
    },
    setBasicInfo: (state, action: PayloadAction<BasicInfo>) => {
      if (state.user) {
        state.user.basicInfo = action.payload;
      }
    },
    setConfirmDetails: (state, action: PayloadAction<ConfirmDetails>) => {
      if (state.user) {
        state.user.confirmDetails = action.payload;
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

// Export actions
export const { setEmail, setBasicInfo, setConfirmDetails, setLoading } = authSlice.actions;

// Create the store
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
