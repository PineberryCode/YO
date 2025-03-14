/**
 * @type `EmailFormFromUser`: It is a standard format to 
 * serialize the input data from user - client
 */
export type EmailFormFromUser = {
    email: string,
    subject: string,
    message: string
}