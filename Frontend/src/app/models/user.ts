export class User{
    constructor(
        public id: number,
        public name: string,
        public email: string,
        public password: string,
        public description: string,
        public image: string
    ){}
}