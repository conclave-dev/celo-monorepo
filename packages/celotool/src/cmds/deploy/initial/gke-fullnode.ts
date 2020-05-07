import { InitialArgv } from 'src/cmds/deploy/initial'
import { installFullNodeChart } from 'src/lib/gke-fullnode'
import yargs from 'yargs'

export const command = 'gke-fullnode'

export const describe = 'deploy full-node(s) to a kubernetes cluster on GKE using Helm'

export const builder = (argv: yargs.Argv) => {
  return argv
    .option('syncmode', {
      type: 'string',
      description: 'Geth sync mode',
      default: 'full',
    })
    .option('namespace', {
      type: 'string',
      description: 'Namespace where deploy',
      default: '',
    })
}

export interface GKEFullNodeArgv extends InitialArgv {
  syncmode: string
  namespace: string
}

export const handler = async (argv: GKEFullNodeArgv) => {
  // await switchToClusterFromEnv(argv.celoEnv)
  await installFullNodeChart(argv.celoEnv, argv.syncmode, argv.namespace)
}