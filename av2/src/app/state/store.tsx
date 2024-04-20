// state/store.ts
import create from 'zustand';

// Definindo a interface do estado
interface StoreState {
  isAuthenticated: boolean;
  vehicles: any[]; // Substitua `any` pelo tipo apropriado para seus veículos
  authenticate: () => void;
  addVehicle: (vehicle: any) => void; // Substitua `any` pelo tipo apropriado para seus veículos
  removeVehicle: (vehicleId: number) => void; // Ajuste o tipo de vehicleId conforme necessário
}

// Criando a store com o estado tipado
const useStore = create<StoreState>((set) => ({
  isAuthenticated: false,
  vehicles: [],
  authenticate: () => set({ isAuthenticated: true }),
  addVehicle: (vehicle) => set((state) => ({ vehicles: [...state.vehicles, vehicle] })),
  removeVehicle: (vehicleId) => set((state) => ({
    vehicles: state.vehicles.filter((v) => v.id !== vehicleId)
  })),
}));

export default useStore;
