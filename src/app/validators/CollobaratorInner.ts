export class ValidatorCollaborator {
  createCollaboratorInner(
    body: AllInterfaces["BodyCreateCollaboratorInner"],
    expectedDate: AllInterfaces
  ): boolean {
    if (
      typeof body.name === typeof expectedDate.BodyCreateCollaboratorInner.name
    ) {
      return true;
    } else {
      return false;
    }
    //quando eu chegar faço essa validaçãore
  }

  createCollaboratorExtERNO(
    bodyCreate: unknown,
    expectedDate: AllInterfaces
  ): boolean {
    return true;
  }
}
