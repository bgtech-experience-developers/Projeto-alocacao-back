export class GlobalDataInterfaces {
  static Create() {
    const allCreate = {
      BodyCreateCollaboratorInner: {
        pis: "string",
        rg: "string",
        renova: "number",
        name: "string",
        address: "string",
        neighborhood: "string",
        complement: "optional",
        cep: "string",
        sex: "number",
        education: "number",
        phone1: "string",
        cell_phone1: "string",
        phone2: "string",
        cell_phone2: "string",
        cod_bank: "number",
        agency: "string",
        account: "string",
        type_account: "optinal",
        variation: "optional",
        email: "string",
        work: "string",
        type: "string",
        organ: "number",
        position: "string",
        registration: "string",
        sector: "string",
        experience1: "optional",
        experience2: "string",
        experience3: "string",
        location_proof: "string",
      },
      casinha: 10,
    };
    return allCreate;
  }
}
