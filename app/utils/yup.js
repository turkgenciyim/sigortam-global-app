import * as yup from "yup";

export const TrafikSchema = yup.object().shape({
  fullName: yup.string().required("Bu alan boş bırakılamaz."),
  identityNumber: yup.string().required("Bu alan boş bırakılamaz.").min(11, "11 haneli kimlik numaranızı yazınız."),
});
      