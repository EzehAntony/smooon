import create from "zustand";

const userStore = create((set) => ({
    user: "",
    setUser: (user) =>
        set(() => ({
            user: user,
        })),
}));

export default userStore;
