declare function describe(desc: string, body: Function): void;
declare function before(body: Function): void;
declare function it(desc: string, body: (done?: Function) => void): void;

declare module "react-addons-test-utils" {
    let rt: any;
    export = rt;
}
