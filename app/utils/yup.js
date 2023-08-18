import * as yup from "yup";

export const trafik = yup.object().shape({
  fullName: yup.string().required("Bu alan boş bırakılamaz."),
});