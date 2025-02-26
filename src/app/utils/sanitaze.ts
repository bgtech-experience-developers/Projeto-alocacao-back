export default function sanitazeUpdate(data: UpdateSchool) {
    data.cnpj = data.cnpj.replace(/\D/gi, "");
    data.cep = data.cep ? data.cep.replace(/\D/gi, "")  : "";
    data.answerable_phone = data.answerable_phone.replace(/\D/gi, "");
     return data;
}