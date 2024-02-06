import { atom } from "recoil";

const initialAuthModalState = {
  isOpen: false,
  type: "login",
};

export const authModalState = atom({
  key: "authModalState",
  default: initialAuthModalState,
});
// import { atom } from "recoil";

// const initialAuthModalState = {
//   isOpen: false,
//   type: "login",
// };

// export const authModalState = atom({
//   key: "authModalState",
//   default: initialAuthModalState,
// });

// export const AuthModalType = {
//   LOGIN: "login",
//   REGISTER: "register",
//   FORGOT_PASSWORD: "forgotPassword",
// };

// export const setAuthModalState = (type) => {
//   return atom({
//     key: "authModalState",
//     default: {
//       isOpen: true,
//       type: type || AuthModalType.LOGIN,
//     },
//   });
// };

// import { atom } from "recoil";

// type AuthModalstate = {
//   isOpen: Boolean,
//   type: "login" | "register" | "forgotPassword",
// };

// const initialAuthModalState: AuthModalstate = {
//   isOpen: false,
//   type: "login",
// };

// export const AuthModalstate =
//   atom <
//   AuthModalstate >
//   {
//     key: "authModalState",
//     default: "initialAuthModalState",
//   };
