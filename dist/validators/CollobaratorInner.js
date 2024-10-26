export class ValidatorCollaborator {
    createCollaboratorInner(body, expectedDate) {
        if (typeof body.name === typeof expectedDate.BodyCreateCollaboratorInner.name) {
            return true;
        }
        else {
            return false;
        }
        //quando eu chegar faço essa validaçãore
    }
    createCollaboratorExtERNO(bodyCreate, expectedDate) {
        return true;
    }
}
//# sourceMappingURL=CollobaratorInner.js.map