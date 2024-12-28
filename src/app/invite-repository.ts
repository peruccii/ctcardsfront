export abstract class InviteRepositoy {
    abstract create(formdata: FormData): Promise<Response>;
}
