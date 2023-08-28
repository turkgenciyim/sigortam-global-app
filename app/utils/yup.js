import * as yup from "yup";

export const TrafikSchema = yup.object().shape({
  fullName: yup.string().required("Bu alan boş bırakılamaz."),
  identityNumber: yup.string().required("Bu alan boş bırakılamaz.").min(11, "11 haneli kimlik numaranızı yazınız."),
  phoneNumber: yup.string().required("Bu alan boş bırakılamaz.").min(10, "10 haneli telefon numaranızı yazınız."),
  dateOfBirthday: yup.string().required("Bu alan boş bırakılamaz.").min(10, "10 haneli doğum tarihinizi yazınız."),
  dateOfBirthday: yup.string().required("Bu alan boş bırakılamaz.").min(10, "10 haneli doğum tarihinizi yazınız."),
  isTerms: yup.boolean().oneOf([true],'İşleme devam etmek için lütfen onaylayın.'),
  isPrivacy: yup.boolean().oneOf([true],'İşleme devam etmek için lütfen onaylayın.'),
  // More validating
  carPlate: yup.string().required("Bu alan boş bırakılamaz."),
  carSerial: yup.string().required("Bu alan boş bırakılamaz.").min(8, "8 haneli seri numarasını yazınız."),
}); 
      