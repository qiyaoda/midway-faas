import { Cli } from '@midwayjs/faas-plugin-common';
import { Invoke } from './invoke.plugin';
export { Test } from '@midwayjs/faas-plugin-common';
export { Invoke } from './invoke.plugin';
export class AliCli extends Cli {
    commands: any;
    loadPlatformPlugin() {
       console.log('platform plugin');
    }

    loadCommandInvoke() {
        this.core.addPlugin(Invoke);
    }
}
